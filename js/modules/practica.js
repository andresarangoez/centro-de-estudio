/* ============================================================
   VISTA · Practicar
   Flashcards (del banco + creadas por la estudiante) y banco de
   preguntas. Ambos leen de /data y se amplían sin tocar esta vista.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc;
    var mazo = 'todas', banco = '';

    function tarjetas() {
        var todas = CE.estado.tarjetasDe(null);
        if (mazo === 'todas') return todas;
        if (mazo === 'dificiles') return todas.filter(function (c) { return CE.estado.marcaTarjeta(c.id) === 'dificil'; });
        if (mazo === 'mias') return todas.filter(function (c) { return c.propia; });
        return todas.filter(function (c) { return c.tema === mazo; });
    }

    function opcionesMazo() {
        var todas = CE.estado.tarjetasDe(null);
        var temas = {};
        todas.forEach(function (c) { temas[c.tema] = (temas[c.tema] || 0) + 1; });
        var dif = todas.filter(function (c) { return CE.estado.marcaTarjeta(c.id) === 'dificil'; }).length;
        var mias = todas.filter(function (c) { return c.propia; }).length;
        return '<option value="todas">Todas (' + todas.length + ')</option>' +
            '<option value="dificiles">Sólo las difíciles (' + dif + ')</option>' +
            '<option value="mias">Creadas por mí (' + mias + ')</option>' +
            Object.keys(temas).map(function (id) {
                var t = CE.q.tema(id);
                return '<option value="' + id + '">' + esc(t ? t.titulo : id) + ' (' + temas[id] + ')</option>';
            }).join('');
    }

    function opcionesBanco() {
        var por = {};
        CE.datos.preguntas.forEach(function (p) { por[p.tema] = (por[p.tema] || 0) + 1; });
        return '<option value="">Elige un tema…</option>' +
            '<option value="__mezcla">Mezcla de todos los temas (' + CE.datos.preguntas.length + ')</option>' +
            CE.datos.temas.map(function (t) {
                var n = por[t.id] || 0;
                return '<option value="' + t.id + '"' + (n ? '' : ' disabled') + '>' + esc(t.titulo) + ' (' + (n || 'pendiente') + ')</option>';
            }).join('');
    }

    CE.vistas.practicar = {
        titulo: 'Practicar',
        render: function () {
            return '<header class="cabecera"><span class="rotulo">Practicar</span><h1>¿Cómo sé si lo aprendí?</h1>' +
                '<p>Intentando recordarlo sin mirar. Aquí están tus flashcards y el banco de preguntas de autoevaluación.</p></header>' +
                '<div class="rejilla" style="grid-template-columns:minmax(0,1fr)">' +
                '<section class="tarjeta tarjeta--sombra"><div class="tarjeta__titulo"><h2>Flashcards</h2>' +
                '<div class="campo" style="min-width:min(240px,100%);max-width:100%"><label for="mazo" class="solo-lector">Mazo</label><select id="mazo" class="entrada" data-mazo>' + opcionesMazo() + '</select></div></div>' +
                '<div data-fc></div>' +
                '<p class="tenue" style="margin-top:var(--s-3)">Para crear tarjetas de un tema, entra al tema y ve al paso 05 · Recuerda.</p></section>' +
                '<section class="tarjeta tarjeta--sombra"><div class="tarjeta__titulo"><h2>Banco de preguntas</h2>' +
                '<div class="campo" style="min-width:min(240px,100%);max-width:100%"><label for="banco" class="solo-lector">Tema</label><select id="banco" class="entrada" data-banco>' + opcionesBanco() + '</select></div></div>' +
                '<div data-quiz><p class="suave">Elige un tema para empezar. Los temas marcados como "pendiente" aún no tienen preguntas: tu tutor las irá agregando.</p></div></section>' +
                '</div>';
        },
        montar: function (el) {
            var selM = el.querySelector('[data-mazo]');
            selM.value = mazo;
            if (selM.value !== mazo) { mazo = 'todas'; selM.value = 'todas'; }
            function fc() { CE.c.flashcards(el.querySelector('[data-fc]'), { tarjetas: tarjetas(), vacio: mazo === 'dificiles' ? 'No tienes tarjetas marcadas como difíciles. ¡Bien!' : undefined }); }
            /* Cada cambio de mazo usa un contenedor nuevo para no acumular escuchas */
            selM.addEventListener('change', function () {
                mazo = selM.value;
                var nuevo = document.createElement('div'); nuevo.setAttribute('data-fc', '');
                el.querySelector('[data-fc]').replaceWith(nuevo);
                fc();
            });
            fc();

            el.querySelector('[data-banco]').addEventListener('change', function (e) {
                banco = e.target.value;
                var cont = el.querySelector('[data-quiz]');
                var nuevo = document.createElement('div'); nuevo.setAttribute('data-quiz', '');
                cont.replaceWith(nuevo);
                if (!banco) return;
                var pregs = banco === '__mezcla' ? CE.u.barajar(CE.datos.preguntas) : CE.q.preguntasDe(banco);
                CE.c.quiz(nuevo, {
                    preguntas: pregs,
                    alTerminar: function (r) {
                        if (banco !== '__mezcla') { CE.estado.tema(banco).quiz = r; CE.estado.guardar(); }
                    }
                });
            });
        }
    };
})();
