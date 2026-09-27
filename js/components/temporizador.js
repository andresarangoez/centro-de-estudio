/* ============================================================
   COMPONENTES · Sesión de estudio y temporizador
   CE.c.bloquesSesion(minutos, diasAlParcial) → [{ min, titulo, desc, tecnica }]
   CE.c.temporizador(contenedor, { bloques, alTerminar })

   El reparto cambia según lo cerca que esté la evaluación:
   lejos → más comprensión; cerca → más recuperación y simulación.
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

(function () {
    var FASES = {
        comprension: { titulo: 'Comprensión',          desc: 'Lectura activa del tema: ideas clave y una pregunta por párrafo.', tecnica: 'lectura-activa' },
        elaboracion: { titulo: 'Elaboración',          desc: 'Responde ¿qué es?, ¿cómo funciona?, ¿con qué se relaciona? o llena tu tabla comparativa.', tecnica: 'elaboracion' },
        recall:      { titulo: 'Recuperación activa',  desc: 'Cierra el material. Flashcards o escribe todo lo que recuerdes.', tecnica: 'active-recall' },
        autoeval:    { titulo: 'Autoevaluación',       desc: 'Preguntas del tema y revisión de errores. Anota qué repasar.', tecnica: 'estudiar-parcial' },
        simulacion:  { titulo: 'Simulación del parcial', desc: 'Preguntas con tiempo y sin mirar, como en el examen.', tecnica: 'estudiar-parcial' },
        pausa:       { titulo: 'Pausa corta',          desc: 'Levántate, toma agua, lejos de la pantalla.', tecnica: null }
    };

    function reparto(dias) {
        if (dias != null && dias <= 3)  return [['comprension', .15], ['recall', .45], ['simulacion', .40]];
        if (dias != null && dias <= 14) return [['comprension', .25], ['elaboracion', .25], ['recall', .30], ['autoeval', .20]];
        return [['comprension', .25], ['elaboracion', .25], ['recall', .25], ['autoeval', .25]];
    }

    CE.c.bloquesSesion = function (minutos, dias) {
        var pausa = minutos >= 45 ? 5 : 0;
        var util = minutos - pausa;
        var r = reparto(dias);
        var mins = r.map(function (x) { return Math.max(5, Math.round(util * x[1] / 5) * 5); });
        var dif = util - mins.reduce(function (a, b) { return a + b; }, 0);
        var mayor = mins.indexOf(Math.max.apply(null, mins));
        mins[mayor] += dif;
        var bloques = r.map(function (x, k) {
            var f = FASES[x[0]];
            return { fase: x[0], min: mins[k], titulo: f.titulo, desc: f.desc, tecnica: f.tecnica };
        });
        if (pausa) {
            var mitad = Math.ceil(bloques.length / 2);
            bloques.splice(mitad, 0, { fase: 'pausa', min: pausa, titulo: FASES.pausa.titulo, desc: FASES.pausa.desc, tecnica: null });
        }
        return bloques;
    };

    CE.c.listaBloques = function (bloques, activo) {
        return '<ol class="bloques">' + bloques.map(function (b, k) {
            var cls = activo == null ? '' : k < activo ? ' hecho' : k === activo ? ' activo' : '';
            return '<li class="bloque' + cls + '"' + (k === activo ? ' aria-current="step"' : '') + '>' +
                '<div class="bloque__min num">' + b.min + '<small>min</small></div>' +
                '<div><b>' + CE.u.esc(b.titulo) + '</b><span>' + CE.u.esc(b.desc) +
                (b.tecnica ? ' <a href="#/aprende/' + b.tecnica + '">Ver técnica</a>' : '') + '</span></div></li>';
        }).join('') + '</ol>';
    };

    CE.c.temporizador = function (el, o) {
        var bloques = o.bloques, k = 0, restante = bloques[0].min * 60, fin = null, intervalo = null;

        function mmss(s) { s = Math.max(0, Math.ceil(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }

        function dibujar() {
            var corriendo = !!intervalo;
            var terminado = k >= bloques.length;
            el.innerHTML =
                '<div class="pila">' +
                (terminado
                    ? '<div class="tarjeta tarjeta--alt"><h3>Sesión terminada</h3><p class="suave">Buen trabajo. Antes de cerrar, anota en una frase qué aprendiste hoy y qué quedó pendiente.</p></div>'
                    : '<div class="tarjeta tarjeta--alt" style="text-align:center">' +
                      '<span class="rotulo">Bloque ' + (k + 1) + ' de ' + bloques.length + ' · ' + CE.u.esc(bloques[k].titulo) + '</span>' +
                      '<div class="reloj" role="timer" aria-live="off">' + mmss(restante) + '</div>' +
                      '<p class="suave peque" style="margin:8px 0 16px">' + CE.u.esc(bloques[k].desc) + '</p>' +
                      '<div class="fila" style="justify-content:center">' +
                      '<button class="btn btn-primario" data-t="' + (corriendo ? 'pausa' : 'iniciar') + '">' + (corriendo ? 'Pausar' : (restante < bloques[k].min * 60 ? 'Continuar' : 'Iniciar')) + '</button>' +
                      '<button class="btn btn-secundario" data-t="saltar">Siguiente bloque</button>' +
                      '<button class="btn btn-texto" data-t="reiniciar">Reiniciar</button></div></div>') +
                CE.c.listaBloques(bloques, terminado ? bloques.length : k) +
                '</div>';
        }

        function tic() {
            restante = (fin - Date.now()) / 1000;
            var r = el.querySelector('.reloj');
            if (restante <= 0) { siguiente(true); return; }
            if (r) r.textContent = mmss(restante);
        }
        function iniciar() { fin = Date.now() + restante * 1000; intervalo = setInterval(tic, 250); dibujar(); }
        function pausar() { clearInterval(intervalo); intervalo = null; dibujar(); }
        function siguiente(auto) {
            clearInterval(intervalo); intervalo = null;
            k++;
            if (k < bloques.length) {
                restante = bloques[k].min * 60;
                if (auto) { CE.u.aviso('Comienza: ' + bloques[k].titulo); iniciar(); return; }
            } else if (o.alTerminar) o.alTerminar();
            dibujar();
        }

        el.addEventListener('click', function (e) {
            var b = e.target.closest('[data-t]'); if (!b) return;
            var a = b.dataset.t;
            if (a === 'iniciar') iniciar();
            else if (a === 'pausa') pausar();
            else if (a === 'saltar') siguiente(false);
            else if (a === 'reiniciar') { clearInterval(intervalo); intervalo = null; k = 0; restante = bloques[0].min * 60; dibujar(); }
        });

        /* Si la vista se reemplaza, detener el intervalo */
        var obs = new MutationObserver(function () {
            if (!document.body.contains(el)) { clearInterval(intervalo); obs.disconnect(); }
        });
        obs.observe(document.getElementById('app'), { childList: true });

        dibujar();
    };
})();
