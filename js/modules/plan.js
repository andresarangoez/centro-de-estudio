/* ============================================================
   VISTA · Mi plan de estudio
   Construida directamente desde data/calendario.js.
   Semana · asignatura · tema · competencia · estado.
   El estado se calcula solo; la estudiante puede fijarlo a mano.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;
    var filtro = 'todo';

    function competencia(s) {
        var C = CE.datos.calendario.competencias;
        if (s.tipo === 'practica') return { tipo: 'Hacer', txt: C.hacer[3] };
        if (s.temas.indexOf('nomenclatura') >= 0) return { tipo: 'Saber', txt: C.saber[0] };
        if (s.temas.indexOf('pares-craneanos') >= 0) return { tipo: 'Hacer', txt: C.hacer[1] };
        if (/taller grupal/i.test(s.evaluacion || '')) return { tipo: 'Saber', txt: C.saber[3] };
        return { tipo: 'Saber', txt: C.saber[1] };
    }

    function selectorEstado(temaId) {
        var st = CE.estado.datos.temas[temaId];
        var manual = st && st.manual;
        var ops = '<option value="">Automático (' + CE.estado.ESTADOS[CE.estado.estadoDerivado(temaId)] + ')</option>' +
            Object.keys(CE.estado.ESTADOS).map(function (k) {
                return '<option value="' + k + '"' + (manual === k ? ' selected' : '') + '>' + CE.estado.ESTADOS[k] + '</option>';
            }).join('');
        return '<label class="solo-lector" for="st-' + temaId + '">Estado de ' + esc(CE.q.tema(temaId).titulo) + '</label>' +
            '<select id="st-' + temaId + '" data-estado="' + temaId + '">' + ops + '</select>';
    }

    function fila(s, hoyIso) {
        var cls = 'sesion';
        if (s.tipo === 'evaluacion') cls += ' sesion--eval';
        if (s.tipo === 'practica') cls += ' sesion--practica';
        if (s.fecha < hoyIso) cls += ' sesion--pasada';
        if (s.fecha === hoyIso) cls += ' sesion--hoy';
        var asig = CE.q.asignatura(CE.q.unidad(s.unidad).asignatura).nombre;
        var comp = s.tipo === 'evaluacion' ? null : competencia(s);
        var tipo = s.tipo === 'evaluacion' ? 'Evaluación' : s.tipo === 'practica' ? 'Práctica' : 'Clase';

        return '<article class="' + cls + '">' +
            '<div class="sesion__fecha"><b>' + esc(CE.u.corta(s.fecha)) + '</b><span>Semana ' + CE.u.semana(s.fecha) + '</span><span>' + esc(s.hora) + '</span></div>' +
            '<div class="sesion__cuerpo">' +
                '<h3>' + esc(s.titulo) + '</h3>' +
                (s.detalle ? '<p>' + esc(s.detalle) + '</p>' : '') +
                (s.lugar ? '<p>Lugar: ' + esc(s.lugar) + '</p>' : '') +
                (s.nota ? '<p><b>Nota:</b> ' + esc(s.nota) + '</p>' : '') +
                (comp ? '<p title="' + esc(comp.txt) + '"><b>Competencia · ' + comp.tipo + ':</b> ' + esc(comp.txt) + '</p>' : '') +
                (s.evaluacion ? '<p>Evaluación de la sesión: ' + esc(s.evaluacion) + '</p>' : '') +
                (s.temas.length ? '<div class="sesion__temas">' + s.temas.map(function (id) {
                    var t = CE.q.tema(id);
                    return '<div class="sesion__tema"><a href="#/tema/' + id + '">' + esc(t.titulo) + '</a>' +
                        '<span class="fila">' + CE.c.estado(CE.estado.estadoTema(id)) + selectorEstado(id) + '</span></div>';
                }).join('') + '</div>' : '') +
                (s.tipo === 'practica' ? '<p style="margin-top:8px">Prepárala repasando los temas de la unidad con flashcards e identificación de estructuras. <a href="#/practicar">Ir a practicar</a></p>' : '') +
            '</div>' +
            '<div class="sesion__lado">' +
                '<span class="chip ' + (s.tipo === 'evaluacion' ? 'chip--amarillo' : 'chip--azul') + '">' + tipo + '</span>' +
                '<span class="chip chip--borde">' + esc(asig) + '</span>' +
                (s.festivo ? '<span class="chip chip--borrador">Festivo</span>' : '') +
            '</div>' +
        '</article>';
    }

    function visible(s, hoyIso) {
        if (filtro === 'proximo') return s.fecha >= hoyIso;
        if (filtro === 'pendiente') return s.temas.some(function (id) { return CE.estado.estadoTema(id) !== 'dominado'; });
        return true;
    }

    function listado() {
        var cal = CE.datos.calendario, hoyIso = CE.u.iso(CE.u.hoy());
        var marcaPuesta = false;
        var receso = cal.eventos.find(function (e) { return e.tipo === 'receso'; });
        var html = '';
        cal.unidades.forEach(function (u) {
            var ses = cal.sesiones.filter(function (s) { return s.unidad === u.id && visible(s, hoyIso); });
            if (!ses.length) return;
            html += '<section class="plan-unidad"><h2><small>' + esc(u.numero) + '</small>' + esc(u.nombre) + '</h2>';
            ses.forEach(function (s) {
                if (receso && s.fecha > receso.hasta && !html.includes('class="receso"')) {
                    html += '<div class="receso">' + esc(receso.titulo) + ': ' + esc(CE.u.corta(receso.desde)) + ' a ' + esc(CE.u.corta(receso.hasta)) + '</div>';
                }
                if (!marcaPuesta && s.fecha >= hoyIso) {
                    html += '<div class="marca-hoy" id="hoy">Hoy · ' + esc(CE.u.larga(CE.u.hoy())) + '</div>';
                    marcaPuesta = true;
                }
                html += fila(s, hoyIso);
            });
            html += '</section>';
        });
        return html || CE.c.pendiente('No hay sesiones con este filtro.', 'SIN RESULTADOS');
    }

    function evaluacion() {
        var P = CE.datos.calendario.pesos, C = CE.datos.calendario.competencias;
        return '<details class="tarjeta tarjeta--alt" style="margin-bottom:var(--s-4)"><summary style="cursor:pointer;font-weight:700;color:var(--azul-profundo)">Sistema de evaluación y competencias del curso</summary>' +
            '<div class="rejilla rejilla-2" style="margin-top:var(--s-4)">' +
            '<div><h4>Cortes y porcentajes</h4><div class="tabla-envoltura"><table class="tabla"><thead><tr><th>Corte</th><th>Peso</th></tr></thead><tbody>' +
            P.cortes.map(function (c) { return '<tr><td>' + esc(c.nombre) + '</td><td class="num">' + c.peso + ' %</td></tr>'; }).join('') +
            '</tbody></table></div><p class="tenue" style="margin-top:8px">' + esc(P.componentes) + ' ' + esc(P.aprobacion) + '</p>' +
            '<div class="nota"><p class="peque">' + esc(P.nota) + '</p></div></div>' +
            '<div><h4>Competencias del saber</h4><ul class="peque">' + C.saber.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
            '<h4>Competencias del hacer</h4><ul class="peque">' + C.hacer.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
            '</div></details>';
    }

    CE.vistas.plan = {
        titulo: 'Mi plan de estudio',
        render: function () {
            var cal = CE.datos.calendario;
            var m = CE.q.asignatura('morfologia');
            return '<header class="cabecera"><span class="rotulo">Mi plan de estudio · ' + esc(cal.periodo) + '</span>' +
                '<h1>Qué se ve y cuándo</h1>' +
                '<p>Tomado de tu plan calendario. Cada tema muestra su estado: se actualiza solo cuando avanzas en la ruta de estudio, y también puedes fijarlo a mano.</p></header>' +
                '<div class="nota nota--azul" style="margin-bottom:var(--s-4)"><p class="peque"><b>' + esc(m.nombre) + '</b> · ' + esc(m.docente) + ' · ' + esc(m.horario) + '<br>' +
                '<b>Biología:</b> ' + esc(CE.q.asignatura('biologia').nota) + '</p></div>' +
                evaluacion() +
                '<div class="plan-filtros">' +
                    '<div class="segmento" role="group" aria-label="Filtrar sesiones">' +
                    [['todo', 'Todo el semestre'], ['proximo', 'Desde hoy'], ['pendiente', 'Temas sin dominar']].map(function (f) {
                        return '<button data-filtro="' + f[0] + '" aria-pressed="' + (filtro === f[0]) + '">' + f[1] + '</button>';
                    }).join('') + '</div>' +
                    '<a class="btn btn-texto" href="#hoy" data-ir-hoy>Ir a hoy</a>' +
                '</div>' +
                '<div id="plan-lista">' + listado() + '</div>';
        },
        montar: function (el) {
            el.addEventListener('click', function (e) {
                var f = e.target.closest('[data-filtro]');
                if (f) {
                    filtro = f.dataset.filtro;
                    el.querySelectorAll('[data-filtro]').forEach(function (b) { b.setAttribute('aria-pressed', b === f); });
                    el.querySelector('#plan-lista').innerHTML = listado();
                }
                if (e.target.closest('[data-ir-hoy]')) {
                    e.preventDefault();
                    var h = el.querySelector('#hoy');
                    if (h) h.scrollIntoView({ block: 'center' });
                }
            });
            el.addEventListener('change', function (e) {
                var id = e.target.dataset.estado;
                if (!id) return;
                CE.estado.fijarEstado(id, e.target.value);
                var cont = e.target.closest('.sesion__tema');
                cont.querySelector('.estado').outerHTML = CE.c.estado(CE.estado.estadoTema(id));
                CE.u.aviso('Estado actualizado');
            });
        }
    };
})();
