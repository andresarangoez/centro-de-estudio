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
        exportar: function () { CE.estado.exportar(); CE.u.aviso('Copia descargada'); },
        importar: function () { document.querySelector('[data-importar]').click(); }
    };

    document.addEventListener('click', function (e) {
        var z = e.target.closest('[data-ampliar]');
        if (z) { e.preventDefault(); CE.c.ampliar(z.dataset.ampliar, z.dataset.alt); return; }
        var b = e.target.closest('[data-accion]');
        if (b && ACCIONES[b.dataset.accion]) { e.preventDefault(); ACCIONES[b.dataset.accion](b, e); }
    });

    document.querySelector('[data-importar]').addEventListener('change', function (e) {
        var f = e.target.files[0]; if (!f) return;
        var lector = new FileReader();
        lector.onload = function () {
            try {
                CE.estado.importar(lector.result);
                CE.u.aviso('Progreso restaurado');
                CE.router.render();
            } catch (err) { CE.u.aviso('Ese archivo no es una copia válida del progreso.'); }
            e.target.value = '';
        };
        lector.readAsText(f);
    });

    CE.router.iniciar();
})();
