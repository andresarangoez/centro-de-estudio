/* ============================================================
   COMPONENTES · Modal
   CE.c.modal.abrir({ titulo, html, montar(el), ancho })
   Cierra con Escape, con el botón o al hacer clic fuera.
   Devuelve el foco al elemento que lo abrió.
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

CE.c.modal = (function () {
    var fondo = null, previo = null;

    function cerrar() {
        if (!fondo) return;
        fondo.remove(); fondo = null;
        document.removeEventListener('keydown', teclado);
        document.body.style.overflow = '';
        if (previo && previo.focus) previo.focus();
    }

    function teclado(e) {
        if (e.key === 'Escape') { cerrar(); return; }
        if (e.key !== 'Tab' || !fondo) return;
        var f = fondo.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        var primero = f[0], ultimo = f[f.length - 1];
        if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    }

    function abrir(o) {
        cerrar();
        previo = document.activeElement;
        fondo = document.createElement('div');
        fondo.className = 'modal-fondo';
        fondo.innerHTML =
            '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">' +
            '<div class="modal__cab"><h2 id="modal-titulo">' + CE.u.esc(o.titulo) + '</h2>' +
            '<button class="btn-icono" data-cerrar aria-label="Cerrar">' + CE.u.icono('cerrar') + '</button></div>' +
            '<div class="modal__cuerpo"></div></div>';
        fondo.querySelector('.modal__cuerpo').innerHTML = o.html || '';
        fondo.addEventListener('click', function (e) {
            /* Un enlace dentro del modal lleva a otra vista: el modal se cierra */
            if (e.target === fondo || e.target.closest('[data-cerrar]') || e.target.closest('a[href]')) cerrar();
        });
        document.body.appendChild(fondo);
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', teclado);
        var cuerpo = fondo.querySelector('.modal__cuerpo');
        if (o.montar) o.montar(cuerpo);
        var foco = fondo.querySelector('.modal__cuerpo button, .modal__cuerpo input, .modal__cuerpo select') || fondo.querySelector('[data-cerrar]');
        if (foco) foco.focus();
        return cuerpo;
    }

    return { abrir: abrir, cerrar: cerrar };
})();
