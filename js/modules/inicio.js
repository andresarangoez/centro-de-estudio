/* ============================================================
   VISTA · Inicio (tablero)
   Responde, en este orden visual:
   ¿Qué tengo que estudiar? ¿Cómo debería estudiarlo?
   ¿Qué puedo hacer ahora? ¿Cómo sé si realmente lo aprendí?
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;

    function tarjetaEvaluacion(ev) {
        if (!ev) return '<div class="tarjeta tarjeta--alt"><span class="rotulo">Evaluaciones</span><p class="suave" style="margin:6px 0 0">No hay evaluaciones próximas en el plan cargado.</p></div>';
        var dd = CE.u.dias(CE.u.hoy(), CE.u.fecha(ev.fecha));
        var unidades = ev.unidades.map(function (u) { var x = CE.q.unidad(u); return 'Unidad ' + x.numero + ' · ' + x.nombre; });
        return '<div class="tarjeta tarjeta--marca eval-card">' +
            '<span class="rotulo">Próxima evaluación · ' + esc(CE.q.asignatura(ev.asignatura).nombre) + '</span>' +
            '<div><h2 style="margin:0">' + esc(ev.nombre) + '</h2><span class="suave">' + esc(CE.u.larga(ev.fecha)) + '</span></div>' +
            '<div class="eval-card__cuenta"><span class="eval-card__num num">' + (dd === 0 ? 'Hoy' : dd) + '</span>' +
            (dd === 0 ? '' : '<span class="eval-card__lbl">' + (dd === 1 ? 'día' : 'días') + ' restantes</span>') + '</div>' +
            '<div><span class="rotulo">Posible alcance' + (ev.inferido ? ' (inferido del cronograma)' : '') + '</span><ul>' +
            unidades.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul></div>' +
            '<a class="btn btn-acento" href="#/aprende/estudiar-parcial">Preparar esta evaluación' + I('flecha') + '</a>' +
            '</div>';
    }

    function continuar() {
        var u = CE.estado.datos.ultima;
        if (!u) return '';
        var t = CE.q.tema(u.tema); if (!t) return '';
        return '<a class="tarjeta tarjeta-enlace" href="#/tema/' + t.id + '/' + (u.paso || 1) + '">' +
            '<span class="rotulo">Continuar estudiando</span>' +
            '<h3 style="margin:6px 0 4px">' + esc(t.titulo) + '</h3>' +
            '<p class="suave peque" style="margin-bottom:10px">Te quedaste en el paso ' + String(u.paso || 1).padStart(2, '0') + ' · ' + CE.estado.pasosHechos(t.id) + ' de ' + CE.estado.TOTAL_PASOS + ' pasos completados</p>' +
            CE.c.barra({ valor: CE.estado.progresoTema(t.id), mini: true }) + '</a>';
    }

    function prioritarios(ev) {
        var temas = CE.q.temasDeEvaluacion(ev)
            .sort(function (a, b) { return CE.estado.progresoTema(a.id) - CE.estado.progresoTema(b.id); });
        if (!temas.length) return '';
        return '<section class="tarjeta"><div class="tarjeta__titulo"><h2 class="h3" style="font-size:var(--t-lg)">Temas prioritarios</h2>' +
            '<a class="btn btn-texto btn-peque" href="#/plan">Ver plan completo</a></div>' +
            '<p class="suave peque">Del posible alcance del ' + esc(ev.nombre.toLowerCase()) + ', ordenados de menor a mayor avance.</p>' +
            '<ul class="lista-limpia prioritarios">' + temas.map(function (t) {
                var s = CE.q.sesionDeTema(t.id);
                return '<li><a class="proximo" href="#/tema/' + t.id + '">' +
                    '<div class="proximo__fecha"><b class="num">' + CE.u.fecha(s.fecha).getDate() + '</b><small>' + CE.u.mes(s.fecha) + '</small></div>' +
                    '<div class="proximo__txt"><b>' + esc(t.titulo) + '</b><span class="fila" style="gap:10px">' + CE.c.estado(CE.estado.estadoTema(t.id)) +
                    '<span>' + CE.estado.pasosHechos(t.id) + '/' + CE.estado.TOTAL_PASOS + ' pasos</span></span>' +
                    CE.c.barra({ valor: CE.estado.progresoTema(t.id), mini: true }) + '</div></a></li>';
            }).join('') + '</ul></section>';
    }

    function progreso() {
        var m = CE.estado.progresoAsignatura('morfologia');
        var b = CE.estado.progresoAsignatura('biologia');
        var tc = CE.estado.progresoTecnicas();
        return '<section class="tarjeta"><div class="tarjeta__titulo"><h2 style="font-size:var(--t-lg)">Tu progreso</h2></div><div class="pila">' +
            CE.c.barra({ etiqueta: 'Morfología', valor: m.valor, detalle: m.hechos + ' de ' + m.total + ' pasos de estudio · ' + m.dominados + ' de ' + m.temas + ' temas dominados' }) +
            (b.temas ? CE.c.barra({ etiqueta: 'Biología', valor: b.valor, detalle: b.hechos + ' de ' + b.total + ' pasos' })
                     : '<div class="progreso"><div class="progreso__cab"><span>Biología</span><span class="chip">Plan pendiente</span></div><div class="progreso__det">Se medirá cuando se cargue su plan calendario.</div></div>') +
            CE.c.barra({ etiqueta: 'Técnicas de estudio', valor: tc.valor, detalle: tc.hechos + ' de ' + tc.total + ' técnicas leídas' }) +
            '</div><p class="tenue" style="margin:14px 0 0">Los porcentajes se calculan con lo que realmente completas.</p></section>';
    }

    CE.vistas.inicio = {
        titulo: 'Inicio',
        render: function () {
            var cal = CE.datos.calendario, hoy = CE.u.hoy();
            var ev = CE.q.proximaEvaluacion(hoy);

            return '' +
            '<section class="portada">' +
                '<div>' +
                    (CE.nube.usuario() ? '<p class="portada__hola">Hola, <b>' + esc(CE.nube.usuario()) + '</b></p>'
                        : CE.nube.activo() ? '<p class="portada__hola"><button class="btn btn-texto" data-accion="cuenta">' + CE.u.icono('usuario') + 'Crea tu usuario para guardar tu progreso</button></p>' : '') +
                    '<h1>Bienvenido a tu espacio de <span>estudio</span></h1>' +
                    '<p class="portada__lema">Aprende a estudiar. Comprende tus ciencias básicas. Construye tu aprendizaje.</p>' +
                    '<div class="portada__meta">' +
                        '<span class="chip chip--azul">' + esc(cal.programa) + '</span>' +
                        '<span class="chip chip--borde">Periodo ' + esc(cal.periodo) + '</span>' +
                        '<span class="chip chip--borde">Semana ' + CE.u.semana(hoy) + ' · ' + esc(CE.u.larga(hoy)) + '</span>' +
                    '</div>' +
                    '<div class="portada__acciones">' +
                        '<button class="btn btn-primario" data-accion="empezar">' + I('brujula') + '¿Por dónde empiezo?</button>' +
                    '</div>' +
                '</div>' +
                tarjetaEvaluacion(ev) +
            '</section>' +

            '<nav class="preguntas-guia" aria-label="Guía rápida">' +
                '<a href="#/plan"><b>¿Qué tengo que estudiar?</b><span>Tu plan, clase por clase, con el estado de cada tema.</span></a>' +
                '<a href="#/aprende"><b>¿Cómo debería estudiarlo?</b><span>Técnicas concretas para ciencias de la salud.</span></a>' +
                '<a href="#/sesion"><b>¿Qué puedo hacer ahora?</b><span>Una sesión guiada de 25, 45 o 60 minutos.</span></a>' +
            '</nav>' +

            modoEstudio(ev) +

            '<section class="tablero-1">' +
                continuar() +
                progreso() +
                prioritarios(ev) +
            '</section>';
        },
        montar: function (el) {
            el.addEventListener('click', function (e) {
                var b = e.target.closest('[data-pomodoro]');
                if (!b) return;
                CE.sesionPendiente = { min: +b.dataset.pomodoro };
                CE.router.ir('#/sesion');
            });
        }
    };

    /* Modo estudio: acceso directo y destacado a las sesiones tipo pomodoro */
    function modoEstudio(ev) {
        var dd = ev ? CE.u.dias(CE.u.hoy(), CE.u.fecha(ev.fecha)) : null;
        var OPC = [
            [25, 'Pomodoro', '1 bloque de concentración'],
            [45, 'Sesión media', '2 bloques con pausa de 5 min'],
            [60, 'Sesión larga', 'Bloques completos + pausa']
        ];
        return '<section class="modo-estudio">' +
            '<div class="modo-estudio__txt">' +
                '<span class="rotulo">Modo estudio</span>' +
                '<h2>¿Cuánto tiempo tienes hoy?</h2>' +
                '<p>Elige un tiempo y la plataforma arma los bloques: comprender, relacionar, recordar y comprobar' +
                (dd != null && dd <= 14 ? ', ajustados a tu ' + esc(ev.nombre.toLowerCase()) + ' ' + CE.u.enDias(dd) : '') + '.</p>' +
            '</div>' +
            '<div class="modo-estudio__opciones">' + OPC.map(function (o) {
                return '<button class="pomo" data-pomodoro="' + o[0] + '">' +
                    '<span class="pomo__min num">' + o[0] + '</span><span class="pomo__u">min</span>' +
                    '<b>' + o[1] + '</b><small>' + o[2] + '</small></button>';
            }).join('') + '</div>' +
        '</section>';
    }
})();
