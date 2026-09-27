/* ============================================================
   COMPONENTES · Tabla comparativa editable
   CE.c.tablaEditable(contenedor, {
       filas: ['…'], columnas: ['…'],
       datos: { 'fila|columna': 'texto' },   // se modifica en sitio
       alCambiar(datos, llenas, total)
   })
   Las casillas son editables; lo que escribe la estudiante se
   guarda con cada cambio (quien llama decide dónde).
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

CE.c.tablaEditable = function (el, o) {
    var esc = CE.u.esc;
    var datos = o.datos || {};

    function contar() {
        var total = o.filas.length * o.columnas.length, llenas = 0;
        o.filas.forEach(function (f) { o.columnas.forEach(function (c) { if ((datos[f + '|' + c] || '').trim()) llenas++; }); });
        return { llenas: llenas, total: total };
    }

    el.innerHTML =
        '<div class="tabla-envoltura"><table class="tabla"><thead><tr><th scope="col">Estructura</th>' +
        o.columnas.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        o.filas.map(function (f) {
            return '<tr><th scope="row">' + esc(f) + '</th>' + o.columnas.map(function (c) {
                return '<td contenteditable="true" role="textbox" aria-label="' + esc(f + ': ' + c) + '" data-ph="Escribe…" data-k="' + esc(f + '|' + c) + '">' +
                    esc(datos[f + '|' + c] || '') + '</td>';
            }).join('') + '</tr>';
        }).join('') +
        '</tbody></table></div>' +
        '<p class="tenue" style="margin-top:8px" data-conteo></p>';

    function actualizar() {
        var n = contar();
        el.querySelector('[data-conteo]').textContent = n.llenas + ' de ' + n.total + ' casillas completas · se guarda automáticamente';
        if (o.alCambiar) o.alCambiar(datos, n.llenas, n.total);
    }

    el.addEventListener('input', CE.u.debounce(function (e) {
        var td = e.target.closest('[data-k]'); if (!td) return;
        var v = td.textContent.trim();
        if (v) datos[td.dataset.k] = v; else { delete datos[td.dataset.k]; td.innerHTML = ''; }
        actualizar();
    }, 300));
    /* Pegar sólo texto plano */
    el.addEventListener('paste', function (e) {
        if (!e.target.closest('[data-k]')) return;
        e.preventDefault();
        var t = (e.clipboardData || window.clipboardData).getData('text');
        document.execCommand('insertText', false, t);
    });

    var n0 = contar();
    el.querySelector('[data-conteo]').textContent = n0.llenas + ' de ' + n0.total + ' casillas completas · se guarda automáticamente';
};
