/* ============================================================
   COMPONENTES · Autoevaluación formativa
   CE.c.quiz(contenedor, { preguntas, alTerminar(resultado), titulo })

   El resultado no se queda en "7/10": agrupa por subtema y dice
   qué está fuerte y qué conviene repasar.
   resultado = { pct, puntos, total, fuertes:[], repaso:[], fecha }
   ============================================================ */

window.CE = window.CE || {};
CE.c = CE.c || {};

CE.c.quiz = function (el, o) {
    var esc = CE.u.esc, I = CE.u.icono;
    var preguntas = o.preguntas || [];
    var i = 0, respondida = false, puntos = [];
    var sel = null, orden = null, mezcla = null;

    if (!preguntas.length) {
        el.innerHTML = CE.c.pendiente(o.vacio || 'El banco de preguntas de este tema todavía está vacío. Tu tutor lo irá completando.', 'BANCO DE PREGUNTAS PENDIENTE');
        return;
    }

    var LETRAS = 'ABCDEFGH';

    function preparar() {
        var p = preguntas[i];
        respondida = false; sel = null;
        if (p.tipo === 'ordenar') {
            orden = CE.u.barajar(p.orden);
            if (orden.join() === p.orden.join()) orden.reverse();
        }
        if (p.tipo === 'relacionar') {
            mezcla = CE.u.barajar(p.pares.map(function (x) { return x[1]; })
                .filter(function (v, i, a) { return a.indexOf(v) === i; }));
            sel = p.pares.map(function () { return ''; });
        }
    }

    function cuerpo(p) {
        if (p.tipo === 'multiple' || p.tipo === 'identificar' || p.tipo === 'vf') {
            var ops = p.tipo === 'vf' ? ['Verdadero', 'Falso'] : p.opciones;
            var correcta = p.tipo === 'vf' ? (p.correcta ? 0 : 1) : p.correcta;
            return (p.tipo === 'identificar' ? CE.c.figura(p.imagen ? { src: p.imagen.src, alt: p.imagen.alt } : { pendiente: 'la imagen de esta pregunta' }) : '') +
                '<div class="opciones" role="group" aria-label="Opciones">' + ops.map(function (op, k) {
                    var cls = '';
                    if (respondida && k === correcta) cls = ' ok';
                    else if (respondida && k === sel) cls = ' err';
                    else if (k === sel) cls = ' sel';
                    return '<button class="opcion' + cls + '" data-q="op" data-k="' + k + '" aria-pressed="' + (k === sel) + '"' + (respondida ? ' disabled' : '') + '>' +
                        '<span class="opcion__marca">' + (respondida && k === correcta ? I('check') : LETRAS[k]) + '</span><span>' + esc(op) + '</span></button>';
                }).join('') + '</div>';
        }
        if (p.tipo === 'relacionar') {
            return '<div class="relacionar">' + p.pares.map(function (par, k) {
                var cls = respondida ? (sel[k] === par[1] ? ' ok' : ' err') : '';
                return '<div class="relacionar__fila' + cls + '"><b id="rel-' + k + '">' + esc(par[0]) + '</b>' +
                    '<select class="entrada" data-q="rel" data-k="' + k + '" aria-labelledby="rel-' + k + '"' + (respondida ? ' disabled' : '') + '>' +
                    '<option value="">Elige…</option>' +
                    mezcla.map(function (m) { return '<option' + (sel[k] === m ? ' selected' : '') + '>' + esc(m) + '</option>'; }).join('') +
                    '</select></div>' +
                    (respondida && sel[k] !== par[1] ? '<div class="tenue" style="margin:-2px 0 4px">Correcto: ' + esc(par[1]) + '</div>' : '');
            }).join('') + '</div>';
        }
        if (p.tipo === 'ordenar') {
            return '<ol class="ordenar">' + orden.map(function (x, k) {
                var cls = respondida ? (p.orden[k] === x ? ' ok' : ' err') : '';
                return '<li class="' + cls + '"><span>' + (k + 1) + '. ' + esc(x) + '</span>' +
                    (respondida ? '' :
                    '<button data-q="subir" data-k="' + k + '" aria-label="Subir ' + esc(x) + '"' + (k === 0 ? ' disabled' : '') + '>' + I('arriba') + '</button>' +
                    '<button data-q="bajar" data-k="' + k + '" aria-label="Bajar ' + esc(x) + '"' + (k === orden.length - 1 ? ' disabled' : '') + '>' + I('abajo') + '</button>') +
                    '</li>';
            }).join('') + '</ol>' +
            (respondida ? '<p class="tenue">Orden correcto: ' + p.orden.map(esc).join(' → ') + '</p>' : '');
        }
        if (p.tipo === 'abierta') {
            return '<div class="campo"><label for="q-abierta">Tu respuesta</label>' +
                '<textarea id="q-abierta" class="entrada" data-q="texto"' + (respondida ? ' readonly' : '') + '>' + esc(sel || '') + '</textarea></div>' +
                (respondida === 'ver' ?
                    '<div class="nota nota--azul"><span class="rotulo">Respuesta de referencia</span><p>' + esc(p.modelo) + '</p></div>' +
                    '<p class="peque"><b>Compárala con la tuya con honestidad:</b></p>' +
                    '<div class="fila"><button class="btn btn-secundario" data-q="auto" data-v="1">La tenía</button>' +
                    '<button class="btn btn-secundario" data-q="auto" data-v="0.5">Parcialmente</button>' +
                    '<button class="btn btn-secundario" data-q="auto" data-v="0">No la tenía</button></div>' : '');
        }
        return '';
    }

    function listoParaComprobar(p) {
        if (p.tipo === 'relacionar') return sel.every(Boolean);
        if (p.tipo === 'ordenar') return true;
        if (p.tipo === 'abierta') return (sel || '').trim().length > 3;
        return sel !== null;
    }

    function calificar(p) {
        if (p.tipo === 'vf') return (sel === 0) === p.correcta ? 1 : 0;
        if (p.tipo === 'multiple' || p.tipo === 'identificar') return sel === p.correcta ? 1 : 0;
        if (p.tipo === 'relacionar') return p.pares.filter(function (par, k) { return sel[k] === par[1]; }).length / p.pares.length;
        if (p.tipo === 'ordenar') return orden.filter(function (x, k) { return p.orden[k] === x; }).length / p.orden.length;
        return 0;
    }

    function dibujar() {
        var p = preguntas[i];
        var fin = respondida === true;
        var v = puntos[i];
        el.innerHTML =
            '<div class="quiz">' +
            '<div class="quiz__cab"><span class="rotulo num">Pregunta ' + (i + 1) + ' de ' + preguntas.length + (p.subtema ? ' · ' + esc(p.subtema) : '') + '</span>' + CE.c.borrador(p) + '</div>' +
            CE.c.barra({ valor: i / preguntas.length, mini: true }) +
            '<p class="quiz__enunciado">' + esc(p.enunciado) + '</p>' +
            cuerpo(p) +
            (fin ? '<div class="retro ' + (v >= 1 ? 'retro--ok' : 'retro--err') + '" role="status"><b>' +
                (v >= 1 ? 'Correcto' : v > 0 ? 'Parcialmente correcto' : 'Todavía no') + '</b>' +
                (p.explicacion ? '<p>' + esc(p.explicacion) + '</p>' : '') + '</div>' : '') +
            '<div class="fila" style="justify-content:flex-end">' +
            (fin ? '<button class="btn btn-primario" data-q="sig">' + (i === preguntas.length - 1 ? 'Ver resultado' : 'Siguiente') + I('flecha') + '</button>'
                 : respondida === 'ver' ? ''
                 : p.tipo === 'abierta' ? '<button class="btn btn-primario" data-q="ver"' + (listoParaComprobar(p) ? '' : ' disabled') + '>Ver respuesta de referencia</button>'
                 : '<button class="btn btn-primario" data-q="comprobar"' + (listoParaComprobar(p) ? '' : ' disabled') + '>Comprobar</button>') +
            '</div></div>';
    }

    function resultado() {
        var por = {};
        preguntas.forEach(function (p, k) {
            var s = p.subtema || 'General';
            por[s] = por[s] || { ok: 0, total: 0 };
            por[s].ok += puntos[k] || 0; por[s].total += 1;
        });
        var fuertes = [], repaso = [];
        Object.keys(por).forEach(function (s) { (por[s].ok / por[s].total >= .75 ? fuertes : repaso).push(s); });
        var suma = puntos.reduce(function (a, b) { return a + (b || 0); }, 0);
        return { pct: Math.round(suma / preguntas.length * 100), puntos: +suma.toFixed(1), total: preguntas.length,
                 fuertes: fuertes, repaso: repaso, fecha: CE.u.iso(new Date()) };
    }

    function dibujarResultado() {
        var r = resultado();
        var rec = r.repaso.length
            ? 'Necesitas reforzar ' + r.repaso.join(', ').toLowerCase() + '. Vuelve a estudiar sólo esas partes, haz 5 minutos de recuperación activa y repite esta autoevaluación mañana.'
            : 'Vas muy bien. Programa un repaso espaciado para no perderlo antes del parcial.';
        el.innerHTML =
            '<div class="pila">' +
            '<div class="fila" style="justify-content:space-between"><h3 style="margin:0">Resultado de tu autoevaluación</h3><span class="chip chip--azul num">' + r.pct + ' %</span></div>' +
            '<p class="suave peque">Es una práctica formativa: sirve para saber qué estudiar, no es una nota de la universidad.</p>' +
            '<div class="resultado">' +
            '<div class="resultado__fuerte"><h4>Temas fuertes</h4>' + (r.fuertes.length ? '<ul>' + r.fuertes.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '<p class="peque">Aún ninguno. Es normal al comienzo.</p>') + '</div>' +
            '<div class="resultado__repaso"><h4>Necesitan repaso</h4>' + (r.repaso.length ? '<ul>' + r.repaso.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '<p class="peque">Nada pendiente en este banco.</p>') + '</div>' +
            '</div>' +
            '<div class="nota"><span class="rotulo">Recomendación</span><p>' + esc(rec) + '</p></div>' +
            '<button class="btn btn-secundario" data-q="reiniciar">' + I('repaso') + 'Intentar de nuevo</button>' +
            '</div>';
        if (o.alTerminar) o.alTerminar(r);
    }

    el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-q]');
        if (!b || b.disabled || b.tagName === 'SELECT' || b.tagName === 'TEXTAREA') return;
        var p = preguntas[i], a = b.dataset.q, k = +b.dataset.k;
        if (a === 'op') { sel = k; dibujar(); }
        else if (a === 'subir' || a === 'bajar') {
            var j = a === 'subir' ? k - 1 : k + 1;
            var t = orden[k]; orden[k] = orden[j]; orden[j] = t; dibujar();
            var foco = el.querySelector('[data-q="' + a + '"][data-k="' + j + '"]'); if (foco && !foco.disabled) foco.focus();
        }
        else if (a === 'comprobar') { puntos[i] = calificar(p); respondida = true; dibujar(); }
        else if (a === 'ver') { respondida = 'ver'; dibujar(); }
        else if (a === 'auto') { puntos[i] = +b.dataset.v; respondida = true; dibujar(); }
        else if (a === 'sig') {
            if (i < preguntas.length - 1) { i++; preparar(); dibujar(); }
            else dibujarResultado();
        }
        else if (a === 'reiniciar') { i = 0; puntos = []; preparar(); dibujar(); }
    });
    el.addEventListener('change', function (e) {
        if (e.target.dataset.q === 'rel') {
            sel[+e.target.dataset.k] = e.target.value;
            var b = el.querySelector('[data-q="comprobar"]');
            if (b) b.disabled = !listoParaComprobar(preguntas[i]);
        }
    });
    el.addEventListener('input', function (e) {
        if (e.target.dataset.q === 'texto') {
            sel = e.target.value;
            var b = el.querySelector('[data-q="ver"]');
            if (b) b.disabled = !listoParaComprobar(preguntas[i]);
        }
    });

    preparar();
    dibujar();
};
