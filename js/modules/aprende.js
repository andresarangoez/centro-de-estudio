/* ============================================================
   VISTA · Aprende a estudiar
   #/aprende        → índice de técnicas
   #/aprende/<id>   → técnica explicada (sin ejercicios)

   El contenido está en data/tecnicas.js. Aquí sólo se dibujan
   las ilustraciones fijas (`visual`) y la página de cada técnica.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;

    /* ================= ILUSTRACIONES FIJAS ================= */
    var V = {};

    V['comparar-lectura'] = function () {
        return '<div class="comparar">' +
            '<div class="comparar__pasiva"><h4>Lectura pasiva</h4><ul><li>Leer de corrido y releer.</li><li>Subrayar casi todo.</li><li>Sensación de "ya lo sé" porque el texto es familiar.</li><li>Al cerrar el libro, poco queda.</li></ul></div>' +
            '<div class="comparar__activa"><h4>Lectura activa</h4><ul><li>Leer con una pregunta en mente.</li><li>Marcar sólo lo esencial.</li><li>Escribir preguntas al margen.</li><li>Resumir sin mirar.</li></ul></div>' +
            '</div>';
    };

    V['linea-espaciado'] = function () {
        var hitos = [['Estudio', 'Día 0'], ['Repaso 1', 'Día 1'], ['Repaso 2', 'Día 3'], ['Repaso 3', 'Día 7'], ['Repaso 4', 'Día 14']];
        return '<div class="linea-tiempo" role="list">' + hitos.map(function (h) {
            return '<div class="linea-tiempo__p" role="listitem"><i></i><b>' + h[0] + '</b>' + h[1] + '</div>';
        }).join('') + '<div class="linea-tiempo__p examen" role="listitem"><i></i><b>Examen</b>con todo repasado</div></div>' +
            '<p class="tenue" style="margin-top:var(--s-2)">Cada repaso dura 10–15 minutos y se hace con preguntas, no releyendo.</p>';
    };

    V.pomodoro = function () {
        var B = [['25', 'Estudio', 'trabajo'], ['5', 'Pausa', 'pausa'], ['25', 'Estudio', 'trabajo'], ['5', 'Pausa', 'pausa'],
                 ['25', 'Estudio', 'trabajo'], ['5', 'Pausa', 'pausa'], ['25', 'Estudio', 'trabajo'], ['15–30', 'Pausa larga', 'larga']];
        return '<div class="pomo-ciclo" role="list" aria-label="Un ciclo de cuatro pomodoros">' + B.map(function (b) {
            return '<div class="pomo-ciclo__b pomo-ciclo__b--' + b[2] + '" role="listitem"><b>' + b[0] + '</b><small>' + 'min · ' + b[1] + '</small></div>';
        }).join('') + '</div>' +
            '<p class="tenue" style="margin-top:var(--s-2)">Un ciclo completo: cuatro bloques de estudio con pausas cortas y una pausa larga al final (unas 2 horas).</p>';
    };

    V.mapa = function () {
        var N = [
            { id: 'pos', x: 360, y: 40, txt: 'Posición anatómica', raiz: true },
            { id: 'pla', x: 360, y: 140, txt: 'Planos anatómicos' },
            { id: 'sag', x: 130, y: 250, txt: 'Sagital' },
            { id: 'cor', x: 360, y: 250, txt: 'Coronal (frontal)' },
            { id: 'tra', x: 590, y: 250, txt: 'Transversal' },
            { id: 'di',  x: 130, y: 360, txt: 'Derecha / izquierda' },
            { id: 'ap',  x: 360, y: 360, txt: 'Anterior / posterior' },
            { id: 'si',  x: 590, y: 360, txt: 'Superior / inferior' }
        ];
        var E = [
            ['pos', 'pla', 'es la referencia de los'],
            ['pla', 'sag', 'incluyen'], ['pla', 'cor', 'incluyen'], ['pla', 'tra', 'incluyen'],
            ['sag', 'di', 'divide en'], ['cor', 'ap', 'divide en'], ['tra', 'si', 'divide en']
        ];
        var byId = {}; N.forEach(function (n) { byId[n.id] = n; });
        var enlaces = E.map(function (e) {
            var a = byId[e[0]], b = byId[e[1]];
            var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 + 2, w = e[2].length * 6.2 + 12;
            return '<g class="enlace"><line x1="' + a.x + '" y1="' + (a.y + 18) + '" x2="' + b.x + '" y2="' + (b.y - 18) + '"/>' +
                '<rect x="' + (mx - w / 2) + '" y="' + (my - 11) + '" width="' + w + '" height="20" rx="4"/><text x="' + mx + '" y="' + (my + 3) + '" text-anchor="middle">' + esc(e[2]) + '</text></g>';
        }).join('');
        var nodos = N.map(function (n) {
            var w = Math.max(120, n.txt.length * 8 + 24);
            return '<g class="nodo' + (n.raiz ? ' raiz' : '') + '" transform="translate(' + n.x + ',' + n.y + ')">' +
                '<rect x="' + (-w / 2) + '" y="-18" width="' + w + '" height="36" rx="10"/><text text-anchor="middle" y="5">' + esc(n.txt) + '</text></g>';
        }).join('');
        return '<svg class="mapa-svg" viewBox="0 0 720 400" role="img" aria-label="Mapa conceptual: posición anatómica y planos">' + enlaces + nodos + '</svg>' +
            '<div class="nota nota--azul" style="margin-top:var(--s-3)"><span class="rotulo">Léelo como frases</span><ul class="peque">' +
            E.map(function (e) { return '<li>' + esc(byId[e[0]].txt) + ' → <i>' + esc(e[2]) + '</i> → ' + esc(byId[e[1]].txt) + '</li>'; }).join('') + '</ul></div>';
    };

    V.tabla = function () {
        var cols = ['Orientación', 'Divide el cuerpo en', 'Otro nombre'];
        var F = [['Plano sagital', 'Vertical', 'Derecha e izquierda', 'Sagital medio, si pasa por la línea media'],
                 ['Plano coronal', 'Vertical', 'Anterior y posterior', 'Frontal'],
                 ['Plano transversal', 'Horizontal', 'Superior e inferior', 'Horizontal o axial']];
        return '<div class="tabla-envoltura"><table class="tabla"><thead><tr><th scope="col">Estructura</th>' + cols.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
            F.map(function (f) { return '<tr><th scope="row">' + esc(f[0]) + '</th>' + f.slice(1).map(function (v) { return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' +
            '<p class="tenue" style="margin-top:var(--s-2)">Mismos criterios para todas las filas: así las diferencias saltan a la vista.</p>';
    };

    V['cuenta-regresiva'] = function () {
        var PLAN = [
            [7, 'Haz la lista del alcance', 'Revisa los temas que entran y marca con honestidad cuáles no entiendes todavía.'],
            [6, 'Comprende los temas débiles', 'Un tema por día: pasos 02 a 04 de la ruta de estudio.'],
            [4, 'Relaciona', 'Tablas comparativas de irrigación, inervación y relaciones.'],
            [3, 'Flashcards de todo el alcance', 'Sólo recuperación activa. Aparta las difíciles.'],
            [2, 'Simulación del parcial', 'Preguntas con tiempo y sin mirar. Anota cada error.'],
            [1, 'Repasa sólo tus errores', 'Nada nuevo. Duerme bien: el sueño consolida lo estudiado.'],
            [0, 'Día del examen', 'Repaso ligero de 15 minutos con tus flashcards difíciles. Llega con tiempo.']
        ];
        var ev = CE.q.proximaEvaluacion();
        var fx = ev ? CE.u.fecha(ev.fecha) : null;
        return '<h3 style="margin-top:0">La cuenta regresiva: los últimos 7 días</h3>' +
            (ev ? '<p class="suave peque">Con las fechas de tu próxima evaluación: <b>' + esc(ev.nombre) + '</b>, ' + esc(CE.u.larga(ev.fecha)) + '.</p>'
                : '<p class="suave peque">Cuenta los días hacia atrás desde la fecha del parcial.</p>') +
            '<ol class="bloques">' + PLAN.map(function (p) {
                return '<li class="bloque"><div class="bloque__min">D-' + p[0] + (fx ? '<small>' + esc(CE.u.corta(CE.u.sumarDias(fx, -p[0]))) + '</small>' : '') + '</div>' +
                    '<span><b>' + esc(p[1]) + '</b><span>' + esc(p[2]) + '</span></span></li>';
            }).join('') + '</ol>' +
            '<p class="tenue" style="margin-top:var(--s-2)">Si faltan menos de 7 días, empieza desde el paso del día de hoy y junta en un solo día los que ya pasaron. Prioriza siempre flashcards y simulación.</p>';
    };

    /* ================= VISTAS ================= */

    function estadoLado(id) {
        var leida = CE.estado.tecnica(id).hecha;
        return (leida ? '<span class="estado estado--dominado">' + I('check') + 'Leída</span>' : '<span class="estado estado--pendiente">Aún no leída</span>') +
            '<button class="btn ' + (leida ? 'btn-texto' : 'btn-acento') + ' btn-peque" style="margin-top:10px" data-leida>' + (leida ? 'Marcar como no leída' : 'Marcar como leída') + '</button>';
    }

    function ejemplo(e) {
        return '<section><h2>Ejemplo</h2><div class="tarjeta tarjeta--alt"><h3 style="margin-top:0">' + esc(e.titulo) + '</h3>' +
            (e.texto ? e.texto.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') : '') +
            (e.lista ? '<ul>' + e.lista.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '') +
            '</div></section>';
    }

    CE.vistas.aprende = {
        titulo: 'Aprende a estudiar',
        render: function () {
            var tc = CE.estado.progresoTecnicas();
            return '<header class="cabecera"><span class="rotulo">Aprende a estudiar</span>' +
                '<h1>No sólo qué estudiar, sino cómo</h1>' +
                '<p>Nueve técnicas con evidencia a favor, pensadas para contenidos extensos de ciencias de la salud. Cada una explica qué problema resuelve, por qué funciona y cómo aplicarla en tus asignaturas.</p></header>' +
                '<div class="ruta-aprendizaje" aria-label="Progresión del aprendizaje">' +
                ['Contenido', 'Comprensión', 'Relación', 'Práctica', 'Recuperación', 'Autoevaluación'].map(function (x, k) {
                    return (k ? '<i aria-hidden="true">→</i>' : '') + '<span>' + x + '</span>';
                }).join('') + '</div>' +
                '<div style="max-width:420px;margin-bottom:var(--s-5)">' + CE.c.barra({ etiqueta: 'Técnicas leídas', valor: tc.valor, detalle: tc.hechos + ' de ' + tc.total }) + '</div>' +
                '<div class="rejilla rejilla-3">' + CE.datos.tecnicas.map(function (t, k) {
                    var leida = CE.estado.tecnica(t.id).hecha;
                    return '<a class="tarjeta tarjeta-enlace tec-card" href="#/aprende/' + t.id + '">' +
                        '<span class="tec-card__num">' + String(k + 1).padStart(2, '0') + '</span>' +
                        '<h3>' + esc(t.titulo) + '</h3><p>' + esc(t.problema) + '</p>' +
                        '<span class="fila" style="margin-top:8px"><span class="chip">' + esc(t.duracion) + '</span>' +
                        (leida ? '<span class="estado estado--dominado">' + I('check') + 'Leída</span>' : '') + '</span></a>';
                }).join('') + '</div>';
        }
    };

    CE.vistas.tecnica = {
        titulo: function (p) { var t = CE.q.tecnica(p.id); return t ? t.titulo : 'Técnica'; },
        render: function (p) {
            var lista = CE.datos.tecnicas;
            var id = p.id === 'preparacion-parciales' ? 'estudiar-parcial' : p.id;   /* enlace antiguo */
            var k = lista.findIndex(function (x) { return x.id === id; });
            if (k < 0) return CE.c.pendiente('Esa técnica no existe.', 'NO ENCONTRADA');
            var t = lista[k], ant = lista[k - 1], sig = lista[k + 1];
            return '<nav class="migas" aria-label="Ruta"><a href="#/aprende">Aprende a estudiar</a> / ' + esc(t.titulo) + '</nav>' +
                '<header class="cabecera"><span class="rotulo">Técnica ' + String(k + 1).padStart(2, '0') + ' · ' + esc(t.duracion) + '</span><h1>' + esc(t.titulo) + '</h1><p>' + esc(t.idea) + '</p></header>' +
                '<div class="tec-detalle"><div class="pila-lg">' +
                    '<div class="nota"><span class="rotulo">El problema que resuelve</span><p>' + esc(t.problema) + '</p></div>' +
                    (t.porque ? '<section><h2>Por qué funciona</h2>' + t.porque.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</section>' : '') +
                    (t.pasos.length ? '<section><h2>Cómo se hace</h2><ol class="pasos">' + t.pasos.map(function (s) { return '<li><div><b>' + esc(s.t) + '</b><p>' + esc(s.d) + '</p></div></li>'; }).join('') + '</ol></section>' : '') +
                    (t.visual && V[t.visual] ? '<section class="tarjeta tarjeta--sombra">' + V[t.visual]() + '</section>' : '') +
                    (t.ejemplo ? ejemplo(t.ejemplo) : '') +
                    (t.enlace ? '<div><a class="btn btn-primario" href="' + t.enlace.href + '">' + I('reloj') + esc(t.enlace.texto) + '</a></div>' : '') +
                    (t.errores && t.errores.length ? '<section><h2>Errores frecuentes</h2><ul>' + t.errores.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' : '') +
                '</div>' +
                '<aside class="tec-detalle__lado">' +
                    '<div class="tarjeta tarjeta--alt"><span class="rotulo">Cuándo usarla</span><ul class="peque" style="margin:6px 0 0">' + t.cuando.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
                    '<div class="tarjeta" data-lado-estado>' + estadoLado(t.id) + '</div>' +
                    '<div class="fila">' + (ant ? '<a class="btn btn-secundario btn-peque" href="#/aprende/' + ant.id + '">' + I('atras') + 'Anterior</a>' : '') +
                    (sig ? '<a class="btn btn-secundario btn-peque" href="#/aprende/' + sig.id + '">Siguiente' + I('flecha') + '</a>' : '') + '</div>' +
                '</aside></div>';
        },
        montar: function (el, p) {
            var id = p.id === 'preparacion-parciales' ? 'estudiar-parcial' : p.id;
            if (!CE.q.tecnica(id)) return;
            el.addEventListener('click', function (e) {
                if (!e.target.closest('[data-leida]')) return;
                var leida = !CE.estado.tecnica(id).hecha;
                CE.estado.marcarTecnica(id, leida);
                el.querySelector('[data-lado-estado]').innerHTML = estadoLado(id);
                if (leida) CE.u.aviso('Técnica marcada como leída');
            });
        }
    };
})();
