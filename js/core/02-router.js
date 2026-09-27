/* ============================================================
   NÚCLEO · Enrutador por hash
   Rutas:  #/inicio  #/plan  #/aprende  #/aprende/<id>
           #/morfologia  #/biologia  #/tema/<id>/<paso>
           #/practicar  #/sesion
   Cada vista es un objeto en CE.vistas con:
     titulo            texto para <title> (o función)
     render(params)    devuelve HTML
     montar(el, params) conecta la interactividad (opcional)
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

CE.router = (function () {
    var RUTAS = [
        { re: /^\/?$/,                          vista: 'inicio' },
        { re: /^\/inicio$/,                     vista: 'inicio' },
        { re: /^\/plan$/,                       vista: 'plan' },
        { re: /^\/aprende$/,                    vista: 'aprende' },
        { re: /^\/aprende\/([\w-]+)$/,          vista: 'tecnica',    params: ['id'] },
        { re: /^\/(morfologia|biologia)$/,      vista: 'asignatura', params: ['id'] },
        { re: /^\/tema\/([\w-]+)(?:\/(\d))?$/,  vista: 'tema',       params: ['id', 'paso'] },
        { re: /^\/practicar$/,                  vista: 'practicar' },
        { re: /^\/sesion$/,                     vista: 'sesion' }
    ];

    /* Sección del menú a la que pertenece cada vista */
    var SECCION = { inicio: 'inicio', plan: 'plan', aprende: 'aprende', tecnica: 'aprende',
                    practicar: 'practicar', sesion: 'inicio' };

    function resolver() {
        var ruta = decodeURIComponent(location.hash.replace(/^#/, '').split('?')[0]);
        for (var i = 0; i < RUTAS.length; i++) {
            var m = RUTAS[i].re.exec(ruta);
            if (m) {
                var p = {};
                (RUTAS[i].params || []).forEach(function (n, k) { p[n] = m[k + 1]; });
                return { vista: RUTAS[i].vista, params: p };
            }
        }
        return { vista: 'inicio', params: {} };
    }

    function marcarMenu(vista, params) {
        var sec = SECCION[vista] || '';
        if (vista === 'asignatura') sec = params.id;
        if (vista === 'tema') { var t = CE.q.tema(params.id); sec = t ? t.asignatura : ''; }
        document.querySelectorAll('.nav a').forEach(function (a) {
            if (a.dataset.sec === sec) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });
        var nav = document.querySelector('.nav');
        if (nav) nav.classList.remove('abierta');
        var btn = document.querySelector('.barra__menu');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    function render() {
        var r = resolver();
        var vista = CE.vistas[r.vista];
        var main = document.getElementById('app');
        var cont = document.createElement('div');
        try {
            cont.innerHTML = vista.render(r.params);
        } catch (e) {
            console.error(e);
            cont.innerHTML = '<div class="pendiente"><b>ALGO SALIÓ MAL</b><p>No se pudo mostrar esta sección. <a href="#/inicio">Volver al inicio</a>.</p></div>';
        }
        main.innerHTML = '';
        main.appendChild(cont);
        if (vista.montar) {
            try { vista.montar(cont, r.params); } catch (e) { console.error(e); }
        }
        var t = typeof vista.titulo === 'function' ? vista.titulo(r.params) : vista.titulo;
        document.title = (t ? t + ' · ' : '') + 'Centro de estudio · soy Andrés Arango';
        marcarMenu(r.vista, r.params);
        window.scrollTo({ top: 0, behavior: 'instant' });
        main.focus({ preventScroll: true });
    }

    function ir(hash) {
        if (location.hash === hash) render();
        else location.hash = hash;
    }

    return { iniciar: function () { window.addEventListener('hashchange', render); render(); }, render: render, ir: ir };
})();
