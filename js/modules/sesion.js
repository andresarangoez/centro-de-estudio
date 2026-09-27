/* ============================================================
   VISTA · Sesión de estudio (25 · 45 · 60 minutos)
   Genera una estructura de estudio según el tiempo disponible y
   la cercanía de la evaluación, con temporizador por bloques.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;
    var cfg = null;

    function porDefecto() {
        var ev = CE.q.proximaEvaluacion();
        var dias = ev ? CE.u.dias(CE.u.hoy(), CE.u.fecha(ev.fecha)) : null;
        var tema = null;
        if (ev) {
            var t = CE.q.temasDeEvaluacion(ev).filter(function (x) { return CE.estado.estadoTema(x.id) !== 'dominado'; })
                .sort(function (a, b) { return CE.estado.progresoTema(a.id) - CE.estado.progresoTema(b.id); })[0];
            tema = t ? t.id : null;
        }
        return { min: 25, tema: tema, dias: dias };
    }

    CE.vistas.sesion = {
        titulo: 'Sesión de estudio',
        render: function () {
            cfg = CE.sesionPendiente ? Object.assign(porDefecto(), CE.sesionPendiente) : (cfg || porDefecto());
            CE.sesionPendiente = null;
            var ev = CE.q.proximaEvaluacion();
            return '<header class="cabecera"><span class="rotulo">Modo estudio</span><h1>Estudiar ' + cfg.min + ' minutos</h1>' +
                '<p>Una sesión corta y estructurada rinde más que horas sin plan. Silencia el celular y empieza.</p></header>' +
                '<div class="sesion-estudio">' +
                '<div class="pila">' +
                    '<div class="tarjeta"><div class="campo"><span class="rotulo-campo" id="lbl-min">Duración</span>' +
                    '<div class="segmento" role="group" aria-labelledby="lbl-min">' + [25, 45, 60].concat([40, 90].indexOf(cfg.min) >= 0 ? [cfg.min] : []).map(function (m) {
                        return '<button data-min="' + m + '" aria-pressed="' + (cfg.min === m) + '">' + m + ' min</button>';
                    }).join('') + '</div></div>' +
                    '<div class="campo" style="margin-top:var(--s-4)"><label for="ses-tema">Tema</label><select id="ses-tema" class="entrada" data-ses-tema>' +
                    '<option value="">Sin tema (uso mis apuntes)</option>' +
                    CE.datos.calendario.unidades.map(function (u) {
                        return '<optgroup label="' + esc(CE.q.asignatura(u.asignatura).nombre) + ' · ' + esc(u.numero) + ' ' + esc(u.nombre) + '">' + CE.q.temasDeUnidad(u.id).map(function (t) {
                            return '<option value="' + t.id + '"' + (cfg.tema === t.id ? ' selected' : '') + '>' + esc(t.titulo) + '</option>';
                        }).join('') + '</optgroup>';
                    }).join('') + '</select></div>' +
                    '<p class="tenue" style="margin-top:var(--s-3)">' + (cfg.dias != null
                        ? 'El reparto está ajustado a ' + (ev ? 'tu ' + esc(ev.nombre.toLowerCase()) + ' ' : 'tu evaluación ') + CE.u.enDias(cfg.dias) + '.'
                        : 'Reparto equilibrado entre comprender, relacionar, recordar y comprobar.') + '</p>' +
                    (cfg.tema ? '<a class="btn btn-secundario" href="#/tema/' + cfg.tema + '">' + I('flecha') + 'Abrir el tema en otra vista</a>' : '') +
                    '</div>' +
                    '<div class="nota"><span class="rotulo">Al terminar</span><p class="peque">Marca los pasos que completaste en la ruta del tema. Así tu progreso refleja lo que de verdad hiciste.</p></div>' +
                '</div>' +
                '<div data-reloj></div>' +
                '</div>';
        },
        montar: function (el) {
            CE.c.temporizador(el.querySelector('[data-reloj]'), {
                bloques: CE.c.bloquesSesion(cfg.min, cfg.dias),
                alTerminar: function () { CE.estado.registrarSesion(cfg.min, cfg.tema); CE.u.aviso('Sesión registrada'); }
            });
            el.addEventListener('click', function (e) {
                var b = e.target.closest('[data-min]'); if (!b) return;
                cfg.min = +b.dataset.min; CE.router.render();
            });
            el.addEventListener('change', function (e) {
                if (e.target.matches('[data-ses-tema]')) { cfg.tema = e.target.value || null; CE.router.render(); }
            });
        }
    };
})();
