/* ============================================================
   ASISTENTE · "¿Por dónde empiezo?"
   Para cuando todo se siente demasiado. Cuatro preguntas y una
   sesión de estudio concreta como respuesta.
   Se abre desde cualquier elemento con data-accion="empezar".
   ============================================================ */

window.CE = window.CE || {};

CE.empezar = (function () {
    var esc = CE.u.esc, I = CE.u.icono;
    var r;

    function primerPasoPendiente(temaId) {
        for (var n = 1; n <= CE.estado.TOTAL_PASOS; n++) if (!CE.estado.pasoHecho(temaId, n)) return n;
        return 5;
    }

    function temasOrdenados(asig) {
        var hoyIso = CE.u.iso(CE.u.hoy());
        var ev = CE.q.proximaEvaluacion();
        var enEv = ev ? CE.q.temasDeEvaluacion(ev).map(function (t) { return t.id; }) : [];
        var grupos = { ev: [], vistos: [], proximos: [] };
        CE.q.temasDe(asig).forEach(function (t) {
            if (CE.estado.estadoTema(t.id) === 'dominado') return;
            var s = CE.q.sesionDeTema(t.id);
            if (enEv.indexOf(t.id) >= 0) grupos.ev.push(t);
            else if (s && s.fecha < hoyIso) grupos.vistos.push(t);
            else grupos.proximos.push(t);
        });
        return { grupos: grupos, ev: ev };
    }

    var PREGUNTAS = [
        { titulo: '¿Qué asignatura quieres estudiar?', html: function () {
            return '<div class="opciones">' + CE.datos.calendario.asignaturas.map(function (a) {
                return '<button class="opcion' + (r.asig === a.id ? ' sel' : '') + '" data-op="asig" data-v="' + a.id + '"' + (a.disponible ? '' : ' disabled') + '>' +
                    '<span class="opcion__marca">' + esc(a.nombre[0]) + '</span><span><b>' + esc(a.nombre) + '</b>' +
                    (a.disponible ? '' : '<br><span class="tenue">Plan calendario pendiente</span>') + '</span></button>';
            }).join('') + '</div>';
        }, listo: function () { return !!r.asig; } },

        { titulo: '¿Qué tema tienes pendiente?', html: function () {
            var o = temasOrdenados(r.asig), g = o.grupos;
            if (!r.tema) r.tema = (g.ev[0] || g.vistos[0] || g.proximos[0] || {}).id;
            function grupo(nombre, lista) {
                return lista.length ? '<optgroup label="' + esc(nombre) + '">' + lista.map(function (t) {
                    return '<option value="' + t.id + '"' + (r.tema === t.id ? ' selected' : '') + '>' + esc(t.titulo) + ' · ' + CE.estado.ESTADOS[CE.estado.estadoTema(t.id)] + '</option>';
                }).join('') + '</optgroup>' : '';
            }
            return '<div class="campo"><label for="emp-tema">Temas sin dominar, empezando por los más urgentes</label>' +
                '<select id="emp-tema" class="entrada" data-sel="tema">' +
                grupo(o.ev ? 'Entran en el ' + o.ev.nombre.toLowerCase() + ' (inferido)' : 'Próxima evaluación', g.ev) +
                grupo('Ya vistos en clase', g.vistos) + grupo('Próximas clases', g.proximos) +
                '</select></div><p class="tenue" style="margin-top:8px">Si dudas, deja el primero: es el más urgente.</p>';
        }, listo: function () { return !!r.tema; } },

        { titulo: '¿Cuándo tienes evaluación?', html: function () {
            var ev = CE.q.proximaEvaluacion();
            var dd = ev ? CE.u.dias(CE.u.hoy(), CE.u.fecha(ev.fecha)) : null;
            var ops = [];
            if (ev) ops.push(['plan', ev.nombre + ' · ' + CE.u.larga(ev.fecha) + ' (' + CE.u.enDias(dd) + ')', dd, 'Según tu plan calendario']);
            ops.push(['3', 'En 3 días o menos', 2], ['14', 'En una o dos semanas', 10], ['30', 'En más de dos semanas', 20], ['nose', 'No lo sé', null]);
            if (r.evSel == null) r.evSel = ops[0][0], r.dias = ops[0][2];
            return '<div class="opciones">' + ops.map(function (o) {
                return '<button class="opcion' + (r.evSel === o[0] ? ' sel' : '') + '" data-op="ev" data-v="' + o[0] + '" data-d="' + (o[2] == null ? '' : o[2]) + '">' +
                    '<span class="opcion__marca">' + I('plan') + '</span><span>' + esc(o[1]) + (o[3] ? '<br><span class="tenue">' + esc(o[3]) + '</span>' : '') + '</span></button>';
            }).join('') + '</div>';
        }, listo: function () { return r.evSel != null; } },

        { titulo: '¿Cuánto tiempo tienes hoy?', html: function () {
            return '<div class="segmento" role="group" aria-label="Minutos disponibles">' + [25, 40, 45, 60, 90].map(function (m) {
                return '<button data-op="min" data-v="' + m + '" aria-pressed="' + (r.min === m) + '">' + m + ' min</button>';
            }).join('') + '</div>';
        }, listo: function () { return !!r.min; } }
    ];

    function resultado() {
        var t = CE.q.tema(r.tema);
        var bloques = CE.c.bloquesSesion(r.min, r.dias);
        var n = primerPasoPendiente(t.id);
        var foco = r.dias != null && r.dias <= 3
            ? 'Con la evaluación tan cerca, la mayor parte del tiempo va a recordar y simular, no a leer.'
            : r.dias != null && r.dias <= 14
                ? 'Todavía hay margen: reparte entre comprender y practicar la recuperación.'
                : 'Hay tiempo: aprovecha para comprender bien antes de memorizar.';
        return '<p class="rotulo">Tu sesión de hoy</p>' +
            '<h3 style="font-size:var(--t-xl)">Hoy tienes ' + r.min + ' minutos.</h3>' +
            '<p class="suave">Tema: <b>' + esc(t.titulo) + '</b>. ' + foco + '</p>' +
            CE.c.listaBloques(bloques) +
            '<div class="fila" style="margin-top:var(--s-4)">' +
            '<button class="btn btn-primario" data-fin="sesion">' + I('reloj') + 'Empezar con temporizador</button>' +
            '<a class="btn btn-secundario" href="#/tema/' + t.id + '/' + n + '" data-fin="tema">Ir al tema (paso ' + String(n).padStart(2, '0') + ')</a></div>';
    }

    function dibujar(cuerpo) {
        var fin = r.paso >= PREGUNTAS.length;
        var q = PREGUNTAS[r.paso];
        cuerpo.innerHTML =
            '<div class="puntos" aria-hidden="true" style="margin-bottom:var(--s-4)">' + PREGUNTAS.map(function (x, k) {
                return '<span class="' + (k < r.paso ? 'hecho' : k === r.paso ? 'activo' : '') + '"></span>';
            }).join('') + '<span class="' + (fin ? 'activo' : '') + '"></span></div>' +
            (fin ? resultado()
                 : '<p class="rotulo">Pregunta ' + (r.paso + 1) + ' de 4</p><h3 style="font-size:var(--t-lg);margin-bottom:var(--s-3)">' + esc(q.titulo) + '</h3>' + q.html()) +
            '<div class="modal__pie">' +
            (r.paso > 0 ? '<button class="btn btn-texto" data-nav="-1">' + I('atras') + 'Atrás</button>' : '<span></span>') +
            (fin ? '' : '<button class="btn btn-primario" data-nav="1"' + (q.listo() ? '' : ' disabled') + '>' + (r.paso === 3 ? 'Ver mi sesión' : 'Siguiente') + I('flecha') + '</button>') +
            '</div>';
    }

    function abrir() {
        r = { paso: 0, asig: 'morfologia' };
        CE.c.modal.abrir({
            titulo: '¿Por dónde empiezo?',
            montar: function (cuerpo) {
                dibujar(cuerpo);
                cuerpo.addEventListener('click', function (e) {
                    var op = e.target.closest('[data-op]');
                    if (op && !op.disabled) {
                        var k = op.dataset.op;
                        if (k === 'asig') { if (r.asig !== op.dataset.v) r.tema = null; r.asig = op.dataset.v; }
                        if (k === 'ev') { r.evSel = op.dataset.v; r.dias = op.dataset.d === '' ? null : +op.dataset.d; }
                        if (k === 'min') r.min = +op.dataset.v;
                        dibujar(cuerpo);
                        var mismo = cuerpo.querySelector('[data-op="' + k + '"][data-v="' + op.dataset.v + '"]'); if (mismo) mismo.focus();
                        return;
                    }
                    var nav = e.target.closest('[data-nav]');
                    if (nav && !nav.disabled) { r.paso += +nav.dataset.nav; dibujar(cuerpo); var f = cuerpo.querySelector('.opcion, select, .segmento button, [data-fin]'); if (f) f.focus(); return; }
                    var fin = e.target.closest('[data-fin]');
                    if (fin) {
                        if (fin.dataset.fin === 'sesion') {
                            CE.sesionPendiente = { min: r.min, tema: r.tema, dias: r.dias };
                            CE.c.modal.cerrar(); CE.router.ir('#/sesion');
                        } else CE.c.modal.cerrar();
                    }
                });
                cuerpo.addEventListener('change', function (e) {
                    if (e.target.dataset.sel === 'tema') r.tema = e.target.value;
                });
            }
        });
    }

    return { abrir: abrir };
})();
