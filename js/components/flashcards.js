/* ============================================================
   COMPONENTES · Flashcards
   CE.c.flashcards(contenedor, {
       tarjetas: [...],            // { id, frente, reverso, revisado?, propia? }
       alMarcar(id, marca)         // opcional
   })
   Voltear (clic, Espacio o Enter), anterior/siguiente (flechas),
   marcar "Difícil" o "Lo sé" (se guarda en localStorage).
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

CE.c.flashcards = function (el, o) {
    var esc = CE.u.esc, I = CE.u.icono;
    var cartas = o.tarjetas || [];
    var i = 0, volteada = false;

    if (!cartas.length) {
        el.innerHTML = CE.c.pendiente(o.vacio || 'Todavía no hay tarjetas para este tema. Crea las tuyas a partir de tus apuntes: es una de las mejores formas de estudiar.', 'SIN TARJETAS TODAVÍA');
        return;
    }

    function resumen() {
        var dif = 0, sabe = 0;
        cartas.forEach(function (c) {
            var m = CE.estado.marcaTarjeta(c.id);
            if (m === 'dificil') dif++; else if (m === 'sabe') sabe++;
        });
        return { dif: dif, sabe: sabe };
    }

    function dibujar() {
        var c = cartas[i], m = CE.estado.marcaTarjeta(c.id), r = resumen();
        el.innerHTML =
            '<div class="fc">' +
            '<div class="fc__meta"><span class="num">Tarjeta ' + (i + 1) + ' de ' + cartas.length + '</span>' +
            '<span class="fila">' + CE.c.borrador(c) + (c.propia ? '<span class="chip chip--azul">Creada por ti</span>' : '') +
            '<span class="chip chip--borde num">Lo sé: ' + r.sabe + '</span><span class="chip chip--borde num">Difíciles: ' + r.dif + '</span></span></div>' +
            '<button class="fc__carta' + (volteada ? ' volteada' : '') + '" data-fc="voltear" aria-label="' + (volteada ? 'Mostrar pregunta' : 'Mostrar respuesta') + '">' +
            '<div class="fc__int">' +
            '<div class="fc__cara" aria-hidden="' + volteada + '"><span class="rotulo">Pregunta o concepto</span><div class="fc__txt">' + esc(c.frente) + '</div><span class="tenue">Responde en tu mente y luego voltea</span></div>' +
            '<div class="fc__cara fc__cara--atras" aria-hidden="' + !volteada + '"><span class="rotulo">Respuesta</span><div class="fc__txt">' + esc(c.reverso) + '</div></div>' +
            '</div></button>' +
            '<div class="fc__controles">' +
            '<div class="fila"><button class="btn btn-secundario" data-fc="ant" ' + (i === 0 ? 'disabled' : '') + '>' + I('atras') + 'Anterior</button>' +
            '<button class="btn btn-secundario" data-fc="voltear">' + I('voltear') + 'Voltear</button>' +
            '<button class="btn btn-secundario" data-fc="sig">Siguiente' + I('flecha') + '</button></div>' +
            '<div class="fila" role="group" aria-label="¿Qué tal te fue?">' +
            '<button class="btn ' + (m === 'dificil' ? 'btn-acento' : 'btn-secundario') + '" data-fc="dificil" aria-pressed="' + (m === 'dificil') + '">Difícil</button>' +
            '<button class="btn ' + (m === 'sabe' ? 'btn-primario' : 'btn-secundario') + '" data-fc="sabe" aria-pressed="' + (m === 'sabe') + '">' + I('check') + 'Lo sé</button>' +
            '</div></div>' +
            (i === cartas.length - 1 && m ? '<div class="nota nota--azul"><span class="rotulo">Ronda terminada</span><p>Marcaste ' + r.sabe + ' como "lo sé" y ' + r.dif + ' como difíciles. Repite sólo las difíciles mañana: así funciona la repetición espaciada.</p></div>' : '') +
            '</div>';
    }

    function accion(a) {
        if (a === 'voltear') { volteada = !volteada; dibujar(); el.querySelector('.fc__carta').focus(); return; }
        if (a === 'ant' && i > 0) { i--; volteada = false; }
        if (a === 'sig') { i = (i + 1) % cartas.length; volteada = false; }
        if (a === 'dificil' || a === 'sabe') {
            CE.estado.marcarTarjeta(cartas[i].id, a);
            if (o.alMarcar) o.alMarcar(cartas[i].id, a);
            if (i < cartas.length - 1) { i++; volteada = false; }
        }
        dibujar();
    }

    el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-fc]');
        if (b && !b.disabled) accion(b.dataset.fc);
    });
    el.addEventListener('keydown', function (e) {
        if (e.target.matches('input, textarea, select')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); accion('sig'); el.querySelector('.fc__carta').focus(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); accion('ant'); el.querySelector('.fc__carta').focus(); }
    });

    dibujar();
};
