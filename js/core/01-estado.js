/* ============================================================
   NÚCLEO · Estado y progreso
   Todo lo que hace la estudiante se guarda en localStorage de su
   navegador. No hay cuentas ni servidor.

   Regla del progreso: los porcentajes se calculan SOLO a partir de
   pasos y actividades realmente completados. No hay números
   decorativos.
   ============================================================ */

window.CE = window.CE || {};

CE.estado = (function () {
    var CLAVE = 'centro-estudio-v1';
    var TOTAL_PASOS = 6;
    var d = null;

    var ESTADOS = {
        pendiente:  'Pendiente',
        estudio:    'En estudio',
        practicado: 'Practicado',
        dominado:   'Dominado'
    };

    function vacio() {
        return {
            version: 1,
            temas: {},        // id → { pasos:{1:true…}, manual, autoeval, quiz, elaboracion, tabla, repasos, visto }
            tecnicas: {},     // id → { hecha:bool, datos:{} }
            tarjetas: {},     // id de flashcard → 'dificil' | 'sabe'
            misTarjetas: [],  // { id, tema, frente, reverso }
            ultima: null,     // { tema, paso, fecha }
            sesiones: []      // { fecha, minutos, tema }
        };
    }

    function cargar() {
        try {
            var raw = localStorage.getItem(CLAVE);
            d = raw ? Object.assign(vacio(), JSON.parse(raw)) : vacio();
        } catch (e) { d = vacio(); }
        return d;
    }
    function guardar() {
        try { localStorage.setItem(CLAVE, JSON.stringify(d)); } catch (e) { /* modo privado: sigue funcionando en memoria */ }
    }

    /* ---------- Temas ---------- */
    function tema(id) {
        if (!d.temas[id]) d.temas[id] = { pasos: {} };
        return d.temas[id];
    }
    function marcarPaso(id, n, valor) {
        tema(id).pasos[n] = valor !== false;
        guardar();
    }
    function pasoHecho(id, n) { return !!(d.temas[id] && d.temas[id].pasos[n]); }
    function pasosHechos(id) {
        var t = d.temas[id]; if (!t) return 0;
        return Object.keys(t.pasos).filter(function (k) { return t.pasos[k] && +k <= TOTAL_PASOS; }).length;
    }
    function progresoTema(id) { return pasosHechos(id) / TOTAL_PASOS; }

    /* Estado derivado de lo hecho. La estudiante puede fijarlo a mano
       desde "Mi plan"; en ese caso manda la elección manual. */
    function estadoDerivado(id) {
        var t = d.temas[id];
        var n = pasosHechos(id);
        if (!t || n === 0) return 'pendiente';
        var quizOk = t.quiz && t.quiz.pct >= 80;
        var autoOk = t.autoevalPct != null && t.autoevalPct >= 80;
        if (t.pasos[6] && (quizOk || autoOk)) return 'dominado';
        if (t.pasos[4] || t.pasos[5] || n >= 4) return 'practicado';
        return 'estudio';
    }
    function estadoTema(id) {
        var t = d.temas[id];
        return (t && t.manual) || estadoDerivado(id);
    }
    function fijarEstado(id, estado) {
        tema(id).manual = estado || null;
        guardar();
    }

    function progresoAsignatura(asig) {
        var temas = CE.q.temasDe(asig);
        if (!temas.length) return { valor: 0, hechos: 0, total: 0, temas: 0, dominados: 0 };
        var hechos = 0, dominados = 0;
        temas.forEach(function (t) {
            hechos += pasosHechos(t.id);
            if (estadoTema(t.id) === 'dominado') dominados++;
        });
        var total = temas.length * TOTAL_PASOS;
        return { valor: hechos / total, hechos: hechos, total: total, temas: temas.length, dominados: dominados };
    }

    /* ---------- Técnicas ---------- */
    function tecnica(id) {
        if (!d.tecnicas[id]) d.tecnicas[id] = { hecha: false, datos: {} };
        return d.tecnicas[id];
    }
    function marcarTecnica(id, valor) { tecnica(id).hecha = valor !== false; guardar(); }
    function progresoTecnicas() {
        var todas = CE.datos.tecnicas;
        var hechas = todas.filter(function (t) { return d.tecnicas[t.id] && d.tecnicas[t.id].hecha; }).length;
        return { valor: todas.length ? hechas / todas.length : 0, hechos: hechas, total: todas.length };
    }

    /* ---------- Flashcards ---------- */
    function marcaTarjeta(id) { return d.tarjetas[id] || null; }
    function marcarTarjeta(id, marca) { d.tarjetas[id] = marca; guardar(); }
    function agregarTarjeta(temaId, frente, reverso) {
        var t = { id: 'mia-' + Date.now().toString(36), tema: temaId, frente: frente, reverso: reverso, propia: true };
        d.misTarjetas.push(t); guardar(); return t;
    }
    function borrarTarjeta(id) {
        d.misTarjetas = d.misTarjetas.filter(function (t) { return t.id !== id; });
        delete d.tarjetas[id]; guardar();
    }
    function tarjetasDe(temaId) {
        var base = temaId ? CE.q.flashcardsDe(temaId) : CE.datos.flashcards;
        var mias = d.misTarjetas.filter(function (t) { return !temaId || t.tema === temaId; });
        return base.concat(mias);
    }

    /* ---------- Repasos espaciados ---------- */
    var INTERVALOS = [1, 3, 7, 14];
    function programarRepasos(temaId, desde) {
        var ev = CE.q.proximaEvaluacion(desde);
        var fechas = INTERVALOS.map(function (n) { return CE.u.iso(CE.u.sumarDias(desde, n)); });
        if (ev) fechas = fechas.filter(function (f) { return f < ev.fecha; });
        tema(temaId).repasos = fechas.map(function (f) { return { fecha: f, hecho: false }; });
        guardar();
        return tema(temaId).repasos;
    }
    function repasosPendientes(ref) {
        var h = CE.u.iso(ref || CE.u.hoy());
        var lista = [];
        Object.keys(d.temas).forEach(function (id) {
            (d.temas[id].repasos || []).forEach(function (r, i) {
                if (!r.hecho && r.fecha <= h) lista.push({ tema: id, fecha: r.fecha, i: i });
            });
        });
        return lista.sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; });
    }
    function marcarRepaso(temaId, i) {
        var r = (tema(temaId).repasos || [])[i];
        if (r) { r.hecho = true; guardar(); }
    }

    /* ---------- Última actividad ---------- */
    function registrarVisita(temaId, paso) {
        d.ultima = { tema: temaId, paso: paso, fecha: CE.u.iso(new Date()) };
        tema(temaId).visto = d.ultima.fecha;
        guardar();
    }

    function registrarSesion(minutos, temaId) {
        d.sesiones.push({ fecha: CE.u.iso(new Date()), minutos: minutos, tema: temaId || null });
        guardar();
    }

    /* ---------- Respaldo ---------- */
    function exportar() {
        var blob = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'progreso-centro-de-estudio-' + CE.u.iso(new Date()) + '.json';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    }
    function importar(texto) {
        var obj = JSON.parse(texto);
        if (!obj || typeof obj !== 'object' || !obj.temas) throw new Error('Archivo no válido');
        d = Object.assign(vacio(), obj);
        guardar();
    }
    function reiniciar() { d = vacio(); guardar(); }

    cargar();

    return {
        ESTADOS: ESTADOS, TOTAL_PASOS: TOTAL_PASOS,
        get datos() { return d; },
        guardar: guardar,
        tema: tema, marcarPaso: marcarPaso, pasoHecho: pasoHecho, pasosHechos: pasosHechos,
        progresoTema: progresoTema, estadoTema: estadoTema, estadoDerivado: estadoDerivado, fijarEstado: fijarEstado,
        progresoAsignatura: progresoAsignatura,
        tecnica: tecnica, marcarTecnica: marcarTecnica, progresoTecnicas: progresoTecnicas,
        marcaTarjeta: marcaTarjeta, marcarTarjeta: marcarTarjeta, agregarTarjeta: agregarTarjeta,
        borrarTarjeta: borrarTarjeta, tarjetasDe: tarjetasDe,
        programarRepasos: programarRepasos, repasosPendientes: repasosPendientes, marcarRepaso: marcarRepaso,
        registrarVisita: registrarVisita, registrarSesion: registrarSesion,
        exportar: exportar, importar: importar, reiniciar: reiniciar
    };
})();
