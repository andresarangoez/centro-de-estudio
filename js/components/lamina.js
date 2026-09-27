/* ============================================================
   COMPONENTES · Lámina de identificación anatómica
   CE.c.lamina(contenedor, {
       lamina: { id, src, titulo, fuente, marcas: [{ n, r }], distractores: [] },
       alTerminar(pct)
   })
   Muestra la imagen numerada (igual que en los talleres) y, para
   cada número, un selector con los nombres. "Comprobar" corrige.
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

CE.c.lamina = function (el, o) {
    var esc = CE.u.esc, I = CE.u.icono, L = o.lamina;
    var opciones = CE.u.barajar(L.marcas.map(function (m) { return m.r; }).concat(L.distractores || [])
        .filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var sel = {}, revisada = false;

    function dibujar() {
        var ok = 0;
        L.marcas.forEach(function (m) { if (sel[m.n] === m.r) ok++; });
        el.innerHTML =
            '<div class="lamina">' +
            '<div class="lamina__img"><button class="lamina__zoom" data-ampliar="' + esc(L.src) + '" data-alt="' + esc(L.titulo) + '" aria-label="Ampliar imagen: ' + esc(L.titulo) + '">' +
            '<img src="' + esc(L.src) + '" alt="' + esc(L.titulo) + ' (lámina numerada)" loading="lazy"><span class="lamina__lupa">' + I('mas') + 'Ampliar</span></button>' +
            (L.fuente ? '<p class="tenue" style="margin-top:6px">' + esc(L.fuente) + '</p>' : '') + '</div>' +
            '<div class="lamina__lista"><p class="rotulo" style="margin-bottom:8px">' + esc(L.titulo) + '</p>' +
            L.marcas.map(function (m) {
                var cls = revisada ? (sel[m.n] === m.r ? ' ok' : ' err') : '';
                return '<div class="relacionar__fila' + cls + '" style="grid-template-columns:52px 1fr"><b id="lm-' + L.id + '-' + m.n + '">N.º ' + esc(m.n) + '</b>' +
                    '<select class="entrada" data-lm="' + esc(m.n) + '" aria-labelledby="lm-' + L.id + '-' + m.n + '"' + (revisada ? ' disabled' : '') + '>' +
                    '<option value="">Elige…</option>' + opciones.map(function (x) {
                        return '<option' + (sel[m.n] === x ? ' selected' : '') + '>' + esc(x) + '</option>';
                    }).join('') + '</select></div>' +
                    (revisada && sel[m.n] !== m.r ? '<div class="tenue" style="margin:-2px 0 6px 64px">Correcto: ' + esc(m.r) + '</div>' : '');
            }).join('') +
            (revisada
                ? '<div class="retro ' + (ok === L.marcas.length ? 'retro--ok' : 'retro--err') + '" style="margin-top:10px"><b>' + ok + ' de ' + L.marcas.length + ' correctas</b>' +
                  '<p>' + (ok === L.marcas.length ? 'Excelente. Intenta describir cada estructura en voz alta: ubicación y relaciones.' : 'Repasa las que fallaste en la guía y vuelve a intentarlo mañana.') + '</p></div>' +
                  '<button class="btn btn-secundario btn-peque" style="margin-top:10px" data-lm-otra>' + I('repaso') + 'Intentar de nuevo</button>'
                : '<button class="btn btn-primario" style="margin-top:10px" data-lm-comprobar>Comprobar</button>') +
            '</div></div>';
    }

    el.addEventListener('change', function (e) {
        var n = e.target.dataset.lm; if (n == null) return;
        sel[n] = e.target.value;
    });
    el.addEventListener('click', function (e) {
        if (e.target.closest('[data-lm-comprobar]')) {
            revisada = true; dibujar();
            var ok = L.marcas.filter(function (m) { return sel[m.n] === m.r; }).length;
            if (o.alTerminar) o.alTerminar(Math.round(ok / L.marcas.length * 100));
        }
        if (e.target.closest('[data-lm-otra]')) { revisada = false; sel = {}; dibujar(); }
    });
    dibujar();
};

/* Ver una imagen en grande (se usa desde cualquier [data-ampliar]) */
CE.c.ampliar = function (src, alt) {
    CE.c.modal.abrir({
        titulo: alt || 'Imagen',
        html: '<img src="' + CE.u.esc(src) + '" alt="' + CE.u.esc(alt || '') + '" style="width:100%;height:auto;border-radius:12px">'
    });
    var m = document.querySelector('.modal'); if (m) m.style.width = 'min(1000px, 100%)';
};
