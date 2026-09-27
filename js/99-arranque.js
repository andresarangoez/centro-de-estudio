/* ============================================================
   ARRANQUE
   Único archivo que ejecuta algo al cargar. Conecta las acciones
   globales (menú, asistente, respaldo) e inicia el enrutador.
   ============================================================ */

(function () {
    var ACCIONES = {
        menu: function (btn) {
            var nav = document.getElementById('nav');
            var abierta = nav.classList.toggle('abierta');
            btn.setAttribute('aria-expanded', abierta);
            btn.setAttribute('aria-label', abierta ? 'Cerrar menú' : 'Abrir menú');
        },
        empezar: function () { CE.empezar.abrir(); },
        cuenta: function () { CE.nube.abrir(); }
    };

    document.addEventListener('click', function (e) {
        var z = e.target.closest('[data-ampliar]');
        if (z) { e.preventDefault(); CE.c.ampliar(z.dataset.ampliar, z.dataset.alt); return; }
        var b = e.target.closest('[data-accion]');
        if (b && ACCIONES[b.dataset.accion]) { e.preventDefault(); ACCIONES[b.dataset.accion](b, e); }
    });

    CE.router.iniciar();
    CE.nube.iniciar();
})();
