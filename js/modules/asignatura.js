/* ============================================================
   VISTA · Asignatura (Morfología, Biología, …)
   Misma vista para todas: unidades → temas → ruta de estudio.
   Si la asignatura aún no tiene plan, muestra la estructura lista
   y qué hacer mientras tanto.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;

    function tarjetaTema(t) {
        var s = CE.q.sesionDeTema(t.id);
        var st = CE.estado.estadoTema(t.id);
        return '<a class="tarjeta tarjeta-enlace tema-card" href="#/tema/' + t.id + '">' +
            '<span class="tenue">' + (s ? esc(CE.u.corta(s.fecha)) + ' · Sesión ' + s.n : '') + '</span>' +
            '<h3>' + esc(t.titulo) + '</h3>' +
            '<ul>' + t.subtemas.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
            '<div class="tema-card__pie">' + CE.c.estado(st) + '<span class="tenue num">' + CE.estado.pasosHechos(t.id) + '/' + CE.estado.TOTAL_PASOS + '</span></div>' +
            CE.c.barra({ valor: CE.estado.progresoTema(t.id), mini: true }) +
            '</a>';
    }

    CE.vistas.asignatura = {
        titulo: function (p) { var a = CE.q.asignatura(p.id); return a ? a.nombre : ''; },
        render: function (p) {
            var a = CE.q.asignatura(p.id);
            if (!a) return CE.c.pendiente('Asignatura no encontrada.', 'NO ENCONTRADA');

            if (!a.disponible) {
                return '<header class="cabecera"><span class="rotulo">Asignatura</span><h1>' + esc(a.nombre) + '</h1>' +
                    '<p>' + esc(a.nota) + '</p></header>' +
                    '<div class="rejilla rejilla-2">' +
                    '<div class="tarjeta"><h3>Mientras tanto</h3><ul class="peque">' +
                    '<li>Practica las técnicas en <a href="#/aprende">Aprende a estudiar</a>: sirven igual para Biología.</li>' +
                    '<li>Crea tus propias flashcards de clase en <a href="#/practicar">Practicar</a>.</li>' +
                    '<li>Usa la <a href="#/sesion">sesión de 25 minutos</a> con tus apuntes.</li></ul></div>' +
                    CE.c.pendiente('Cuando el plan calendario de ' + a.nombre + ' esté disponible, aquí aparecerán sus unidades y temas con la misma ruta de estudio en 6 pasos que Morfología.', '[PLAN CALENDARIO PENDIENTE]') +
                    '</div>';
            }

            var pr = CE.estado.progresoAsignatura(a.id);
            var ev = CE.q.proximaEvaluacion();
            return '<header class="asig-cab"><div class="cabecera" style="margin:0"><span class="rotulo">Asignatura · ' + esc(a.docente || '') + '</span>' +
                '<h1>' + esc(a.nombre) + '</h1><p>' + esc(a.horario || '') + '</p></div>' +
                CE.c.barra({ etiqueta: 'Avance en ' + a.nombre, valor: pr.valor, detalle: pr.hechos + ' de ' + pr.total + ' pasos · ' + pr.dominados + ' temas dominados' }) +
                '</header>' +
                '<div class="nota nota--azul"><p class="peque">Cada tema tiene la misma ruta: <b>antes de empezar → comprende → relaciona → practica → recuerda → comprueba → repasa</b>. ' +
                'El contenido se elaboró con las presentaciones, guías y talleres del curso y está marcado como borrador hasta que tu tutor lo valide.</p></div>' +
                (a.sinPlan ? '<div class="nota" style="margin-top:var(--s-3)"><p class="peque">' + esc(a.nota) + '</p></div>' : '') +
                CE.q.unidadesDe(a.id).map(function (u) {
                    var temas = CE.q.temasDeUnidad(u.id);
                    var enEv = ev && ev.unidades.indexOf(u.id) >= 0;
                    return '<section class="unidad"><div class="unidad__cab"><span class="unidad__num">' + esc(u.numero) + '</span><h2>' + esc(u.nombre) + '</h2>' +
                        (enEv ? '<span class="chip chip--amarillo">Entra en el ' + esc(ev.nombre.toLowerCase()) + ' (inferido)</span>' : '') + '</div>' +
                        '<div class="rejilla rejilla-auto">' + temas.map(tarjetaTema).join('') + '</div></section>';
                }).join('') +
                (a.sinPlan ? '<section style="margin-top:var(--s-6)"><h2>Bibliografía de apoyo</h2><ul class="peque suave"><li>Cooper G. M. La célula. 8.ª ed. Marbán; 2022.</li><li>Guías de laboratorio y talleres de Biología, Facultad de Enfermería FUCS.</li></ul></section>'
                : '<section style="margin-top:var(--s-6)"><h2>Bibliografía del curso</h2><ul class="peque suave">' +
                CE.datos.calendario.bibliografia.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
                '<p class="tenue">Recursos: ' + CE.datos.calendario.recursos.map(esc).join(' · ') + '</p></section>');
        }
    };
})();
