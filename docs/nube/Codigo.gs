/* ============================================================
   CENTRO DE ESTUDIO · Servidor del progreso en la nube
   Google Apps Script ligado a una hoja de cálculo de Google.

   Cómo instalarlo: docs/nube/INSTALAR.md

   Hoja "progreso" (se crea sola):
     A usuario · B actualizado (ms) · C última conexión · D progreso
     E pasos hechos · F temas dominados · G… datos (JSON en trozos)

   API (la usa js/core/03-nube.js):
     GET  ?accion=leer&u=<usuario>   → { ok, existe, datos, actualizado }
     POST { accion:'guardar', u, datos, actualizado, resumen, nuevo }
          → { ok, actualizado }   |  { ok:false, error:'ocupado' }
   ============================================================ */

var HOJA = 'progreso';
var TROZO = 40000;              // una celda admite hasta 50 000 caracteres
var MAXIMO = 900000;            // tamaño máximo del progreso de una persona
var COL_DATOS = 7;
var ENCABEZADO = ['usuario', 'actualizado (ms)', 'última conexión', 'progreso', 'pasos hechos', 'temas dominados', 'datos'];

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.accion === 'leer') return responder(leer(normalizar(p.u)));
    return responder({ ok: true, servicio: 'centro-de-estudio' });
  } catch (err) {
    return responder({ ok: false, error: String(err.message || err) });
  }
}

function doPost(e) {
  try {
    var b = JSON.parse(e.postData.contents);
    if (b.accion === 'guardar') return responder(guardar(b));
    return responder({ ok: false, error: 'accion' });
  } catch (err) {
    return responder({ ok: false, error: String(err.message || err) });
  }
}

function leer(u) {
  var h = hoja(), fila = buscar(h, u);
  if (!fila) return { ok: true, existe: false };
  var ancho = h.getLastColumn();
  var v = h.getRange(fila, 1, 1, ancho).getValues()[0];
  var texto = v.slice(COL_DATOS - 1).join('');
  return { ok: true, existe: true, actualizado: Number(v[1]) || 0, datos: texto ? JSON.parse(texto) : null };
}

function guardar(b) {
  var u = normalizar(b.u);
  var texto = JSON.stringify(b.datos || {});
  if (texto.length > MAXIMO) throw new Error('grande');

  var candado = LockService.getScriptLock();
  candado.waitLock(20000);
  try {
    var h = hoja(), fila = buscar(h, u);
    if (fila && b.nuevo) return { ok: false, error: 'ocupado' };
    if (!fila) fila = h.getLastRow() + 1;

    var trozos = [];
    for (var i = 0; i < texto.length; i += TROZO) trozos.push(texto.substr(i, TROZO));
    var r = b.resumen || {};
    var fijos = [u, Number(b.actualizado) || Date.now(), new Date(), (r.pct != null ? r.pct + ' %' : ''), r.pasos || 0, r.dominados || 0];

    var ancho = Math.max(h.getLastColumn(), COL_DATOS - 1 + trozos.length);
    var valores = fijos.concat(trozos);
    while (valores.length < ancho) valores.push('');
    h.getRange(fila, 1, 1, ancho).setValues([valores]);
    return { ok: true, actualizado: fijos[1] };
  } finally {
    candado.releaseLock();
  }
}

/* ---------- utilidades ---------- */
function normalizar(u) {
  u = String(u || '').trim().toLowerCase();
  if (!/^[a-z0-9._-]{3,30}$/.test(u)) throw new Error('usuario');
  return u;
}
function hoja() {
  var libro = SpreadsheetApp.getActive();
  var h = libro.getSheetByName(HOJA);
  if (!h) {
    h = libro.insertSheet(HOJA);
    h.getRange(1, 1, 1, ENCABEZADO.length).setValues([ENCABEZADO]).setFontWeight('bold');
    h.setFrozenRows(1);
    h.getRange('A:A').setNumberFormat('@');
  }
  return h;
}
function buscar(h, u) {
  if (h.getLastRow() < 2) return 0;
  var c = h.getRange(2, 1, h.getLastRow() - 1, 1).createTextFinder(u).matchEntireCell(true).findNext();
  return c ? c.getRow() : 0;
}
function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
