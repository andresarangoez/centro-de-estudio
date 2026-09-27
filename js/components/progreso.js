/* ============================================================
   COMPONENTES · Progreso, estado y bloques de contenido
   Devuelven HTML; no guardan estado.
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

(function () {
    var esc = CE.u.esc;

    /* Barra de progreso con texto: nunca depende sólo del color */
    CE.c.barra = function (o) {
        var v = Math.max(0, Math.min(1, o.valor || 0));
        return '<div class="progreso' + (o.mini ? ' progreso--mini' : '') + '">' +
            (o.etiqueta ? '<div class="progreso__cab"><span>' + esc(o.etiqueta) + '</span><b class="num">' + CE.u.pct(v) + ' %</b></div>' : '') +
            '<div class="progreso__pista" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + CE.u.pct(v) + '"' +
            (o.etiqueta ? ' aria-label="' + esc(o.etiqueta) + '"' : '') + '>' +
            '<div class="progreso__valor" style="width:' + (v * 100).toFixed(1) + '%"></div></div>' +
            (o.detalle ? '<div class="progreso__det">' + esc(o.detalle) + '</div>' : '') +
            '</div>';
    };

    /* Glifo de estado: anillo que se llena por tercios + texto */
    var FRACCION = { pendiente: 0, estudio: 1 / 3, practicado: 2 / 3, dominado: 1 };
    function pastel(f) {
        if (f <= 0) return '';
        if (f >= 1) return '<circle cx="8" cy="8" r="4.2" fill="currentColor"/>';
        var a = f * 2 * Math.PI, r = 4.2;
        var x = 8 + r * Math.sin(a), y = 8 - r * Math.cos(a);
        return '<path d="M8 8 L8 ' + (8 - r) + ' A' + r + ' ' + r + ' 0 ' + (f > .5 ? 1 : 0) + ' 1 ' + x.toFixed(2) + ' ' + y.toFixed(2) + ' Z" fill="currentColor"/>';
    }
    CE.c.estado = function (estado) {
        var f = FRACCION[estado] || 0;
        return '<span class="estado estado--' + estado + '">' +
            '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.8" fill="none" stroke="currentColor" stroke-width="1.5"/>' + pastel(f) + '</svg>' +
            esc(CE.estado.ESTADOS[estado]) + '</span>';
    };

    /* Espacio reservado para contenido académico que aún no existe */
    CE.c.pendiente = function (texto, titulo) {
        return '<div class="pendiente"><b>' + esc(titulo || '[CONTENIDO ACADÉMICO PENDIENTE]') + '</b>' +
            '<p>' + esc(texto || 'Este bloque se completará con material revisado por tu tutor.') + '</p></div>';
    };

    /* Figura: imagen real o marco preparado para recibirla */
    CE.c.figura = function (f) {
        f = f || {};
        if (f.src) {
            return '<figure class="figura"><button class="figura__boton" data-ampliar="' + esc(f.src) + '" data-alt="' + esc(f.alt || f.pie || '') + '" aria-label="Ampliar: ' + esc(f.alt || f.pie || 'imagen') + '">' +
                '<div class="figura__marco figura__marco--img"><img src="' + esc(f.src) + '" alt="' + esc(f.alt || '') + '" loading="lazy"></div></button>' +
                (f.pie || f.fuente ? '<figcaption>' + esc(f.pie || '') + (f.fuente ? ' Fuente: ' + esc(f.fuente) + '.' : '') + '</figcaption>' : '') +
                '</figure>';
        }
        var dentro = '<div>' + CE.u.icono('imagen') + '<br>Espacio reservado para ' + esc(f.pendiente || 'un recurso visual') + '.<br><span class="tenue">Sólo se incorporan imágenes con fuente verificable.</span></div>';
        return '<figure class="figura"><div class="figura__marco">' + dentro + '</div>' +
            (f.pie || f.fuente ? '<figcaption>' + esc(f.pie || '') + (f.fuente ? ' Fuente: ' + esc(f.fuente) + '.' : '') + '</figcaption>' : '') +
            '</figure>';
    };

    CE.c.borrador = function (item) {
        return item && item.revisado === false
            ? '<span class="chip chip--borrador" title="Elaborado a partir del material del curso; pendiente de validación por el tutor.">Borrador · por revisar</span>'
            : '';
    };
})();
