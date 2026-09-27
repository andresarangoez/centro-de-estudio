/* ============================================================
   VISTA · Aprende a estudiar
   #/aprende        → índice de técnicas
   #/aprende/<id>   → técnica con su práctica interactiva

   Cada técnica declara un `widget` en data/tecnicas.js. Aquí se
   implementa cada widget. Lo que escribe la estudiante se guarda
   en CE.estado.tecnica(id).datos.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;

    /* Texto de práctica, usado por lectura activa, mapa y tabla */
    var TEXTO_PRACTICA = [
        'Para describir el cuerpo sin ambigüedades, la anatomía usa una referencia común: la posición anatómica.',
        'En ella, la persona está de pie, con la cabeza y la mirada hacia adelante.',
        'Los miembros superiores están a los lados del tronco, con las palmas de las manos hacia adelante.',
        'Los miembros inferiores están juntos y los pies apuntan hacia adelante.',
        'A partir de esta posición se trazan tres tipos de planos.',
        'El plano sagital divide el cuerpo en una parte derecha y una izquierda; cuando pasa por la línea media se llama sagital medio.',
        'El plano coronal, o frontal, separa una parte anterior de una posterior.',
        'El plano transversal, también llamado horizontal o axial, separa una parte superior de una inferior.',
        'Todas las descripciones anatómicas asumen esta posición, aunque el paciente esté acostado.'
    ];

    function completar(id, msg) {
        if (CE.estado.tecnica(id).hecha) return;
        CE.estado.marcarTecnica(id, true);
        CE.u.aviso(msg || 'Técnica practicada. Suma a tu progreso.');
        var lado = document.querySelector('[data-lado-estado]');
        if (lado) lado.innerHTML = estadoLado(id);
    }
    function datosDe(id) { return CE.estado.tecnica(id).datos; }

    /* ================= WIDGETS ================= */
    var W = {};

    /* 1 · Secuencia: ordenar las fases de estudio */
    W.secuencia = function (el, t) {
        el.innerHTML = '<p class="suave">Sin mirar arriba: ordena las fases de estudio para un parcial.</p><div data-q></div>';
        CE.c.quiz(el.querySelector('[data-q]'), {
            preguntas: [{ id: 'sec', tipo: 'ordenar', subtema: 'Fases de estudio', enunciado: 'Ordena de la primera a la última fase.',
                          orden: t.pasos.map(function (p) { return p.t; }),
                          explicacion: 'Primero se comprende, luego se relaciona y al final se practica la recuperación y se simula el examen.' }],
            alTerminar: function () { completar(t.id); }
        });
    };

    /* 2 · Lectura activa */
    W.lectura = function (el, t) {
        var d = datosDe(t.id);
        d.marcadas = d.marcadas || [];
        el.innerHTML =
            '<div class="comparar" style="margin-bottom:var(--s-4)">' +
            '<div class="comparar__pasiva"><h4>Lectura pasiva</h4><ul><li>Leer de corrido y releer.</li><li>Subrayar casi todo.</li><li>Sensación de "ya lo sé" porque el texto es familiar.</li><li>Al cerrar el libro, poco queda.</li></ul></div>' +
            '<div class="comparar__activa"><h4>Lectura activa</h4><ul><li>Leer con una pregunta en mente.</li><li>Marcar sólo lo esencial.</li><li>Escribir preguntas al margen.</li><li>Resumir sin mirar.</li></ul></div>' +
            '</div>' +
            '<div class="tarjeta"><div class="fila" style="justify-content:space-between;margin-bottom:8px"><span class="rotulo">Paso 1 · Marca máximo 3 ideas clave</span><span class="chip chip--borrador">Texto de práctica</span></div>' +
            '<p class="texto-lectura" data-texto>' + TEXTO_PRACTICA.map(function (f, k) {
                return '<span class="frase' + (d.marcadas.indexOf(k) >= 0 ? ' marcada' : '') + '" tabindex="0" role="button" aria-pressed="' + (d.marcadas.indexOf(k) >= 0) + '" data-f="' + k + '">' + esc(f) + '</span> ';
            }).join('') + '</p>' +
            '<p class="tenue" data-cuenta></p></div>' +
            '<div class="campo" style="margin-top:var(--s-4)"><label for="lec-preg">Paso 2 · Escribe una pregunta que este texto responda</label>' +
            '<input id="lec-preg" class="entrada" data-campo="pregunta" value="' + esc(d.pregunta || '') + '" placeholder="Ej.: ¿Qué plano separa lo anterior de lo posterior?"></div>' +
            '<div class="campo" style="margin-top:var(--s-4)"><label for="lec-res">Paso 3 · Oculta el texto y resúmelo en una frase</label>' +
            '<div class="fila" style="margin-bottom:6px"><button class="btn btn-secundario btn-peque" data-ocultar>Ocultar texto</button></div>' +
            '<textarea id="lec-res" class="entrada" data-campo="resumen" placeholder="Con tus palabras…">' + esc(d.resumen || '') + '</textarea></div>' +
            '<div data-retro style="margin-top:var(--s-3)"></div>';

        function revisar() {
            el.querySelector('[data-cuenta]').textContent = d.marcadas.length + ' de 3 ideas marcadas' + (d.marcadas.length >= 3 ? ' · si quieres marcar otra, primero desmarca una.' : '');
            var ok = d.marcadas.length >= 1 && (d.pregunta || '').trim().length > 5 && (d.resumen || '').trim().length > 10;
            el.querySelector('[data-retro]').innerHTML = ok ? '<div class="retro retro--ok"><b>Así se lee activamente.</b><p>Compara tu resumen con el texto: ¿dejaste fuera alguna idea de las que marcaste?</p></div>' : '';
            if (ok) completar(t.id);
            CE.estado.guardar();
        }
        function alternar(fr) {
            var k = +fr.dataset.f, i = d.marcadas.indexOf(k);
            if (i >= 0) d.marcadas.splice(i, 1);
            else if (d.marcadas.length < 3) d.marcadas.push(k);
            else { CE.u.aviso('Máximo 3: elegir es parte del ejercicio.'); return; }
            fr.classList.toggle('marcada', d.marcadas.indexOf(k) >= 0);
            fr.setAttribute('aria-pressed', d.marcadas.indexOf(k) >= 0);
            revisar();
        }
        el.addEventListener('click', function (e) {
            var fr = e.target.closest('[data-f]'); if (fr) alternar(fr);
            var oc = e.target.closest('[data-ocultar]');
            if (oc) { var tx = el.querySelector('[data-texto]'); var h = tx.classList.toggle('oculto'); oc.textContent = h ? 'Mostrar texto' : 'Ocultar texto'; }
        });
        el.addEventListener('keydown', function (e) {
            var fr = e.target.closest('[data-f]');
            if (fr && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); alternar(fr); }
        });
        el.addEventListener('input', CE.u.debounce(function (e) {
            var c = e.target.dataset.campo; if (!c) return;
            d[c] = e.target.value; revisar();
        }));
        revisar();
    };

    /* 3 · Recuperación activa */
    W.recall = function (el, t) {
        var items = [
            { p: '¿Cuál es la función principal de la mitocondria?', r: 'Producir la mayor parte de la energía de la célula (ATP) mediante la respiración celular.' },
            { p: '¿Qué plano divide el cuerpo en una parte anterior y una posterior?', r: 'El plano coronal o frontal.' },
            { p: 'En la posición anatómica, ¿hacia dónde miran las palmas de las manos?', r: 'Hacia adelante (anterior).' }
        ];
        var i = 0, fase = 'pensar', notas = [];
        function dibujar() {
            if (i >= items.length) {
                var bien = notas.filter(function (n) { return n === 1; }).length;
                el.innerHTML = '<div class="retro retro--ok"><b>Ronda terminada: ' + bien + ' de ' + items.length + ' las recordaste completas.</b>' +
                    '<p>Lo que costó recordar es justo lo que se fortalece. Repite esas preguntas mañana, no hoy.</p></div>' +
                    '<button class="btn btn-secundario" style="margin-top:12px" data-r="otra">' + I('repaso') + 'Repetir</button>';
                completar(t.id);
                return;
            }
            var it = items[i];
            el.innerHTML =
                '<div class="tarjeta"><span class="rotulo num">Pregunta ' + (i + 1) + ' de ' + items.length + '</span>' +
                '<p class="quiz__enunciado" style="margin:8px 0 14px">' + esc(it.p) + '</p>' +
                '<div class="campo"><label for="rc-r">Escribe lo que recuerdes, aunque sea incompleto</label><textarea id="rc-r" class="entrada" ' + (fase !== 'pensar' ? 'readonly' : '') + ' data-r-txt></textarea></div>' +
                (fase === 'pensar'
                    ? '<div class="fila" style="margin-top:12px"><button class="btn btn-primario" data-r="revelar" disabled>Revelar respuesta</button><button class="btn btn-texto" data-r="nose">No lo sé</button></div>'
                    : '<div class="nota nota--azul" style="margin-top:12px"><span class="rotulo">Respuesta</span><p>' + esc(it.r) + '</p></div>' +
                      '<p class="peque" style="margin:12px 0 6px"><b>¿Cómo te fue?</b></p><div class="fila">' +
                      '<button class="btn btn-secundario" data-r="nota" data-v="1">La sabía</button>' +
                      '<button class="btn btn-secundario" data-r="nota" data-v="0.5">A medias</button>' +
                      '<button class="btn btn-secundario" data-r="nota" data-v="0">No la sabía</button></div>') +
                '</div>';
        }
        el.addEventListener('input', function (e) {
            if (e.target.matches('[data-r-txt]')) el.querySelector('[data-r="revelar"]').disabled = e.target.value.trim().length < 2;
        });
        el.addEventListener('click', function (e) {
            var b = e.target.closest('[data-r]'); if (!b || b.disabled) return;
            var a = b.dataset.r;
            if (a === 'revelar' || a === 'nose') { var txt = el.querySelector('[data-r-txt]').value; fase = 'ver'; dibujar(); el.querySelector('[data-r-txt]').value = txt; }
            else if (a === 'nota') { notas[i] = +b.dataset.v; i++; fase = 'pensar'; dibujar(); var ta = el.querySelector('[data-r-txt]'); if (ta) ta.focus(); }
            else if (a === 'otra') { i = 0; notas = []; fase = 'pensar'; dibujar(); }
        });
        dibujar();
    };

    /* 4 · Repetición espaciada */
    W.espaciado = function (el, t) {
        var ev = CE.q.proximaEvaluacion();
        var d = datosDe(t.id);
        var ini = d.inicio || CE.u.iso(CE.u.hoy());
        var exa = d.examen || (ev ? ev.fecha : CE.u.iso(CE.u.sumarDias(CE.u.hoy(), 14)));
        el.innerHTML =
            '<div class="rejilla rejilla-2">' +
            '<div class="campo"><label for="esp-ini">Día en que estudias el tema</label><input id="esp-ini" type="date" class="entrada" value="' + ini + '" data-esp="inicio"></div>' +
            '<div class="campo"><label for="esp-exa">Día del examen</label><input id="esp-exa" type="date" class="entrada" value="' + exa + '" data-esp="examen"></div>' +
            '</div><div data-linea style="margin-top:var(--s-4)"></div>';
        function dibujar() {
            var a = CE.u.fecha(ini), x = CE.u.fecha(exa);
            var puntos = [0, 1, 3, 7, 14].map(function (n) {
                var f = CE.u.sumarDias(a, n);
                return { n: n, f: f, fuera: f >= x };
            });
            var dentro = puntos.filter(function (p) { return !p.fuera; }).length;
            el.querySelector('[data-linea]').innerHTML =
                '<div class="linea-tiempo" role="list">' + puntos.map(function (p) {
                    return '<div class="linea-tiempo__p' + (p.fuera ? ' fuera' : '') + '" role="listitem"><i></i><b>' + (p.n === 0 ? 'Estudio' : 'Día ' + p.n) + '</b>' + esc(CE.u.corta(p.f)) + '</div>';
                }).join('') +
                '<div class="linea-tiempo__p examen" role="listitem"><i></i><b>Examen</b>' + esc(CE.u.corta(x)) + '</div></div>' +
                '<div class="nota" style="margin-top:var(--s-4)"><p class="peque">' +
                (dentro <= 2 ? 'Con tan poco tiempo caben ' + (dentro - 1) + ' repaso(s). Hazlos cortos y con preguntas, no releyendo. La próxima vez empieza antes: cada repaso extra cuenta.'
                             : 'Te caben ' + (dentro - 1) + ' repasos antes del examen. Cada uno debe ser corto (10–15 min) y con recuperación activa.') +
                '</p></div>';
        }
        el.addEventListener('change', function (e) {
            var k = e.target.dataset.esp; if (!k || !e.target.value) return;
            d[k] = e.target.value; if (k === 'inicio') ini = e.target.value; else exa = e.target.value;
            CE.estado.guardar(); dibujar(); completar(t.id);
        });
        dibujar();
    };

    /* 5 · Elaboración */
    W.elaboracion = function (el, t) {
        var d = datosDe(t.id); d.resp = d.resp || {};
        var temas = CE.datos.temas;
        el.innerHTML =
            '<div class="campo"><label for="ela-c">Elige un concepto de tus clases</label>' +
            '<input id="ela-c" class="entrada" list="ela-lista" data-ela="concepto" value="' + esc(d.concepto || '') + '" placeholder="Ej.: plano coronal, pleura, pares craneanos…">' +
            '<datalist id="ela-lista">' + temas.map(function (x) { return '<option value="' + esc(x.titulo) + '">'; }).join('') + '</datalist></div>' +
            '<div class="pila" style="margin-top:var(--s-4)">' + t.preguntas.map(function (p, k) {
                return '<div class="campo"><label for="ela-' + k + '">' + esc(p) + '</label><textarea id="ela-' + k + '" class="entrada" style="min-height:70px" data-ela="' + k + '">' + esc(d.resp[k] || '') + '</textarea></div>';
            }).join('') + '</div>' +
            '<div class="nota" style="margin-top:var(--s-4)"><p class="peque">Si alguna no la puedes responder, no la dejes vacía: escribe "no sé" y llévala como pregunta a la próxima clase o a la asesoría.</p></div>';
        el.addEventListener('input', CE.u.debounce(function (e) {
            var k = e.target.dataset.ela; if (k == null) return;
            if (k === 'concepto') d.concepto = e.target.value; else d.resp[k] = e.target.value;
            CE.estado.guardar();
            var n = Object.keys(d.resp).filter(function (x) { return (d.resp[x] || '').trim().length > 2; }).length;
            if (n >= 3 && (d.concepto || '').trim()) completar(t.id);
        }));
    };

    /* 6 · Técnica Feynman */
    W.feynman = function (el, t) {
        var d = datosDe(t.id); d.checks = d.checks || {};
        var CHECKS = ['Expliqué cada término técnico que usé.', 'Incluí un ejemplo concreto.', 'Marqué dónde dudé o me trabé.', 'Volví a la fuente sólo para esos huecos.'];
        el.innerHTML =
            '<div class="campo"><label for="fey-c">Concepto</label><input id="fey-c" class="entrada" data-fey="concepto" value="' + esc(d.concepto || '') + '" placeholder="Ej.: posición anatómica"></div>' +
            '<div class="campo" style="margin-top:var(--s-3)"><label for="fey-t">Explícalo como si hablaras con un familiar que no estudia salud</label>' +
            '<textarea id="fey-t" class="entrada" style="min-height:150px" data-fey="texto">' + esc(d.texto || '') + '</textarea></div>' +
            '<p class="tenue" data-fey-info style="margin-top:6px"></p>' +
            '<fieldset class="tarjeta tarjeta--alt" style="margin-top:var(--s-3)"><legend class="rotulo" style="padding:0 6px">Revisa tu explicación</legend>' +
            CHECKS.map(function (c, k) {
                return '<label class="fila" style="margin:6px 0;align-items:flex-start;flex-wrap:nowrap"><input type="checkbox" data-fey-check="' + k + '"' + (d.checks[k] ? ' checked' : '') + ' style="margin-top:5px"><span class="peque">' + esc(c) + '</span></label>';
            }).join('') + '</fieldset>';
        function info() {
            var txt = d.texto || '';
            var palabras = txt.trim() ? txt.trim().split(/\s+/).length : 0;
            var largas = txt.split(/[.!?]+/).filter(function (f) { return f.trim().split(/\s+/).length > 25; }).length;
            el.querySelector('[data-fey-info]').textContent = palabras + ' palabras' + (largas ? ' · ' + largas + (largas === 1 ? ' frase muy larga' : ' frases muy largas') + ': divídelas, suele ser señal de que aún no está claro' : '');
            var nChecks = Object.keys(d.checks).filter(function (k) { return d.checks[k]; }).length;
            if (palabras >= 30 && nChecks >= 3) completar(t.id);
        }
        el.addEventListener('input', CE.u.debounce(function (e) {
            var k = e.target.dataset.fey; if (!k) return;
            d[k] = e.target.value; CE.estado.guardar(); info();
        }, 250));
        el.addEventListener('change', function (e) {
            var k = e.target.dataset.feyCheck; if (k == null) return;
            d.checks[k] = e.target.checked; CE.estado.guardar(); info();
        });
        info();
    };

    /* 7 · Mapa conceptual (construcción paso a paso) */
    W.mapa = function (el, t) {
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
        var PASOS = [
            ['Conceptos', 'Del texto de práctica salen 8 conceptos. Todavía sin orden.'],
            ['Jerarquía', 'El más general arriba; los específicos debajo.'],
            ['Enlaces', 'Cada flecha lleva una palabra de enlace. Sin ella, la relación no está clara.'],
            ['Revisión', 'Lee cada rama como una frase. Si suena bien, el mapa funciona.']
        ];
        var paso = 0;
        var pos0 = N.map(function (n, k) { return { x: 90 + (k % 4) * 180, y: 90 + Math.floor(k / 4) * 170 }; });
        var byId = {}; N.forEach(function (n) { byId[n.id] = n; });

        function svg() {
            var ordenado = paso >= 1;
            var P = function (n, k) { return ordenado ? n : pos0[k]; };
            var enlaces = E.map(function (e) {
                var a = byId[e[0]], b = byId[e[1]];
                var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 + 2;
                var w = e[2].length * 6.2 + 12;
                return '<g class="enlace' + (paso >= 2 ? '' : ' apagado') + '"><line x1="' + a.x + '" y1="' + (a.y + 18) + '" x2="' + b.x + '" y2="' + (b.y - 18) + '"/>' +
                    '<rect x="' + (mx - w / 2) + '" y="' + (my - 11) + '" width="' + w + '" height="20" rx="4"/><text x="' + mx + '" y="' + (my + 3) + '" text-anchor="middle">' + esc(e[2]) + '</text></g>';
            }).join('');
            var nodos = N.map(function (n, k) {
                var p = P(n, k), w = Math.max(120, n.txt.length * 8 + 24);
                return '<g class="nodo' + (n.raiz && ordenado ? ' raiz' : '') + '" transform="translate(' + p.x + ',' + p.y + ')" style="transition:transform .5s ease">' +
                    '<rect x="' + (-w / 2) + '" y="-18" width="' + w + '" height="36" rx="10"/><text text-anchor="middle" y="5">' + esc(n.txt) + '</text></g>';
            }).join('');
            return '<svg class="mapa-svg" viewBox="0 0 720 400" role="img" aria-label="Mapa conceptual: posición anatómica y planos">' + enlaces + nodos + '</svg>';
        }

        function dibujar() {
            el.innerHTML =
                '<div class="fila" style="justify-content:space-between;margin-bottom:10px"><span class="rotulo">Paso ' + (paso + 1) + ' de 4 · ' + PASOS[paso][0] + '</span><div class="puntos" aria-hidden="true">' +
                PASOS.map(function (x, k) { return '<span class="' + (k < paso ? 'hecho' : k === paso ? 'activo' : '') + '"></span>'; }).join('') + '</div></div>' +
                '<p class="suave peque">' + PASOS[paso][1] + '</p>' + svg() +
                (paso === 3 ? '<div class="nota nota--azul" style="margin-top:var(--s-3)"><span class="rotulo">Léelo como frases</span><ul class="peque">' +
                    E.map(function (e) { return '<li>' + esc(byId[e[0]].txt) + ' → <i>' + esc(e[2]) + '</i> → ' + esc(byId[e[1]].txt) + '</li>'; }).join('') + '</ul></div>' : '') +
                '<div class="fila" style="justify-content:flex-end;margin-top:var(--s-3)">' +
                (paso > 0 ? '<button class="btn btn-secundario" data-m="-1">' + I('atras') + 'Anterior</button>' : '') +
                (paso < 3 ? '<button class="btn btn-primario" data-m="1">Siguiente paso' + I('flecha') + '</button>' : '<a class="btn btn-primario" href="#/morfologia">Hazlo con un tema de clase' + I('flecha') + '</a>') +
                '</div>';
            if (paso === 3) completar(t.id);
        }
        el.addEventListener('click', function (e) { var b = e.target.closest('[data-m]'); if (b) { paso += +b.dataset.m; dibujar(); } });
        dibujar();
    };

    /* 8 · Tabla comparativa */
    W.tabla = function (el, t) {
        var d = datosDe(t.id); d.celdas = d.celdas || {};
        var filas = ['Plano sagital', 'Plano coronal', 'Plano transversal'];
        var cols = ['Orientación', 'Divide el cuerpo en', 'Otro nombre'];
        var REF = [['Vertical', 'Derecha e izquierda', 'Sagital medio, si pasa por la línea media'],
                   ['Vertical', 'Anterior y posterior', 'Frontal'],
                   ['Horizontal', 'Superior e inferior', 'Horizontal o axial']];
        el.innerHTML = '<p class="suave peque">Llénala sin mirar el texto de práctica. Después compara con la referencia.</p>' +
            '<div data-tabla></div>' +
            '<button class="btn btn-secundario" style="margin-top:var(--s-3)" data-ref>Ver tabla de referencia</button><div data-ref-out style="margin-top:var(--s-3)"></div>';
        CE.c.tablaEditable(el.querySelector('[data-tabla]'), {
            filas: filas, columnas: cols, datos: d.celdas,
            alCambiar: function (x, llenas, total) { CE.estado.guardar(); if (llenas >= total / 2 && d.vioRef) completar(t.id); }
        });
        el.querySelector('[data-ref]').addEventListener('click', function () {
            d.vioRef = true; CE.estado.guardar();
            el.querySelector('[data-ref-out]').innerHTML = '<div class="tabla-envoltura"><table class="tabla"><thead><tr><th>Referencia</th>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
                filas.map(function (f, k) { return '<tr><th scope="row">' + esc(f) + '</th>' + REF[k].map(function (v) { return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
            var n = Object.keys(d.celdas).length;
            if (n >= 5) completar(t.id);
        });
    };

    /* 9 · Plan de cuenta regresiva para un parcial */
    W['plan-parcial'] = function (el, t) {
        var d = datosDe(t.id); d.checks = d.checks || {};
        var evs = CE.q.evaluaciones().filter(function (e) { return e.fecha >= CE.u.iso(CE.u.hoy()); });
        if (!evs.length) { el.innerHTML = CE.c.pendiente('No hay evaluaciones próximas en el calendario cargado.', 'SIN EVALUACIONES PRÓXIMAS'); return; }
        var evId = d.ev && evs.some(function (e) { return e.id === d.ev; }) ? d.ev : evs[0].id;

        function dibujar() {
            var ev = evs.find(function (e) { return e.id === evId; });
            var fx = CE.u.fecha(ev.fecha);
            var temas = CE.q.temasDeEvaluacion(ev);
            var PLAN = [
                [7, 'Haz la lista del alcance', 'Revisa los temas de abajo y marca con honestidad cuáles no entiendes todavía.'],
                [6, 'Comprende los temas débiles', 'Un tema por día: pasos 02 a 04 de la ruta de estudio.'],
                [4, 'Relaciona', 'Tablas comparativas de irrigación, inervación y relaciones.'],
                [3, 'Flashcards de todo el alcance', 'Sólo recuperación activa. Aparta las difíciles.'],
                [2, 'Simulación del parcial', 'Preguntas con tiempo y sin mirar. Anota cada error.'],
                [1, 'Repasa sólo tus errores', 'Nada nuevo. Duerme bien: el sueño consolida lo estudiado.'],
                [0, 'Día del examen', 'Repaso ligero de 15 minutos con tus flashcards difíciles. Llega con tiempo.']
            ];
            var hoyD = CE.u.dias(CE.u.hoy(), fx);
            el.innerHTML =
                '<div class="campo"><label for="pp-ev">Evaluación</label><select id="pp-ev" class="entrada" data-pp-ev>' +
                evs.map(function (e) { return '<option value="' + e.id + '"' + (e.id === evId ? ' selected' : '') + '>' + esc(e.nombre + ' · ' + CE.u.larga(e.fecha)) + '</option>'; }).join('') + '</select></div>' +
                (hoyD < 7 ? '<div class="nota" style="margin-top:var(--s-3)"><p class="peque">Faltan ' + hoyD + ' días: haz los pasos que quedan desde hoy y junta en un solo día los que ya pasaron. Prioriza siempre flashcards y simulación.</p></div>' : '') +
                '<ol class="bloques" style="margin-top:var(--s-4)">' + PLAN.map(function (p, k) {
                    var f = CE.u.sumarDias(fx, -p[0]);
                    var pasado = CE.u.dias(CE.u.hoy(), f) < 0;
                    return '<li class="bloque' + (pasado ? ' hecho' : '') + '"><div class="bloque__min">D-' + p[0] + '<small>' + esc(CE.u.corta(f)) + '</small></div>' +
                        '<label class="fila" style="justify-content:space-between;flex-wrap:nowrap;align-items:flex-start"><span><b>' + esc(p[1]) + '</b><span>' + esc(p[2]) + '</span></span>' +
                        '<input type="checkbox" data-pp="' + ev.id + '-' + k + '"' + (d.checks[ev.id + '-' + k] ? ' checked' : '') + ' aria-label="Hecho: ' + esc(p[1]) + '" style="width:20px;height:20px;flex:none;margin-top:3px"></label></li>';
                }).join('') + '</ol>' +
                '<h4 style="margin-top:var(--s-4)">Alcance probable' + (ev.inferido ? ' <span class="chip">Inferido del cronograma</span>' : '') + '</h4>' +
                '<div class="sesion__temas">' + temas.map(function (x) {
                    return '<div class="sesion__tema"><a href="#/tema/' + x.id + '">' + esc(x.titulo) + '</a>' + CE.c.estado(CE.estado.estadoTema(x.id)) + '</div>';
                }).join('') + '</div>' +
                (ev.nota ? '<p class="tenue" style="margin-top:8px">' + esc(ev.nota) + '</p>' : '');
        }
        el.addEventListener('change', function (e) {
            if (e.target.matches('[data-pp-ev]')) { evId = d.ev = e.target.value; CE.estado.guardar(); dibujar(); return; }
            var k = e.target.dataset.pp; if (!k) return;
            d.checks[k] = e.target.checked; CE.estado.guardar();
            if (Object.keys(d.checks).filter(function (x) { return d.checks[x]; }).length >= 2) completar(t.id);
        });
        dibujar();
    };

    /* ================= VISTAS ================= */

    function estadoLado(id) {
        var hecha = CE.estado.tecnica(id).hecha;
        return (hecha ? '<span class="estado estado--dominado">' + I('check') + 'Practicada</span>' : '<span class="estado estado--pendiente">Aún no practicada</span>') +
            '<p class="tenue" style="margin:6px 0 0">' + (hecha ? 'Cuenta en tu progreso de técnicas.' : 'Se marca sola cuando completas la práctica.') + '</p>';
    }

    CE.vistas.aprende = {
        titulo: 'Aprende a estudiar',
        render: function () {
            var tc = CE.estado.progresoTecnicas();
            return '<header class="cabecera"><span class="rotulo">Aprende a estudiar</span>' +
                '<h1>No sólo qué estudiar, sino cómo</h1>' +
                '<p>Nueve técnicas con evidencia a favor, pensadas para contenidos extensos de ciencias de la salud. Cada una trae una práctica corta.</p></header>' +
                '<div class="ruta-aprendizaje" aria-label="Progresión del aprendizaje">' +
                ['Contenido', 'Comprensión', 'Relación', 'Práctica', 'Recuperación', 'Autoevaluación'].map(function (x, k) {
                    return (k ? '<i aria-hidden="true">→</i>' : '') + '<span>' + x + '</span>';
                }).join('') + '</div>' +
                '<div style="max-width:420px;margin-bottom:var(--s-5)">' + CE.c.barra({ etiqueta: 'Técnicas practicadas', valor: tc.valor, detalle: tc.hechos + ' de ' + tc.total }) + '</div>' +
                '<div class="rejilla rejilla-3">' + CE.datos.tecnicas.map(function (t, k) {
                    var hecha = CE.estado.tecnica(t.id).hecha;
                    return '<a class="tarjeta tarjeta-enlace tec-card" href="#/aprende/' + t.id + '">' +
                        '<span class="tec-card__num">' + String(k + 1).padStart(2, '0') + '</span>' +
                        '<h3>' + esc(t.titulo) + '</h3><p>' + esc(t.problema) + '</p>' +
                        '<span class="fila" style="margin-top:8px"><span class="chip">' + esc(t.duracion) + '</span>' +
                        (hecha ? '<span class="estado estado--dominado">' + I('check') + 'Practicada</span>' : '') + '</span></a>';
                }).join('') + '</div>';
        }
    };

    CE.vistas.tecnica = {
        titulo: function (p) { var t = CE.q.tecnica(p.id); return t ? t.titulo : 'Técnica'; },
        render: function (p) {
            var lista = CE.datos.tecnicas;
            var k = lista.findIndex(function (x) { return x.id === p.id; });
            if (k < 0) return CE.c.pendiente('Esa técnica no existe.', 'NO ENCONTRADA');
            var t = lista[k], ant = lista[k - 1], sig = lista[k + 1];
            return '<nav class="migas" aria-label="Ruta"><a href="#/aprende">Aprende a estudiar</a> / ' + esc(t.titulo) + '</nav>' +
                '<header class="cabecera"><span class="rotulo">Técnica ' + String(k + 1).padStart(2, '0') + ' · ' + esc(t.duracion) + '</span><h1>' + esc(t.titulo) + '</h1><p>' + esc(t.idea) + '</p></header>' +
                '<div class="tec-detalle"><div class="pila-lg">' +
                    '<div class="nota"><span class="rotulo">El problema que resuelve</span><p>' + esc(t.problema) + '</p></div>' +
                    (t.pasos.length ? '<section><h2>Cómo se hace</h2><ol class="pasos">' + t.pasos.map(function (s) { return '<li><div><b>' + esc(s.t) + '</b><p>' + esc(s.d) + '</p></div></li>'; }).join('') + '</ol></section>' : '') +
                    '<section><h2>Practícalo ahora</h2><div class="tarjeta tarjeta--sombra" data-widget></div></section>' +
                    (t.errores && t.errores.length ? '<section><h2>Errores frecuentes</h2><ul>' + t.errores.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' : '') +
                '</div>' +
                '<aside class="tec-detalle__lado">' +
                    '<div class="tarjeta" data-lado-estado>' + estadoLado(t.id) + '</div>' +
                    '<div class="tarjeta tarjeta--alt"><span class="rotulo">Cuándo usarla</span><ul class="peque" style="margin:6px 0 0">' + t.cuando.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
                    '<div class="fila">' + (ant ? '<a class="btn btn-secundario btn-peque" href="#/aprende/' + ant.id + '">' + I('atras') + 'Anterior</a>' : '') +
                    (sig ? '<a class="btn btn-secundario btn-peque" href="#/aprende/' + sig.id + '">Siguiente' + I('flecha') + '</a>' : '') + '</div>' +
                '</aside></div>';
        },
        montar: function (el, p) {
            var t = CE.q.tecnica(p.id); if (!t) return;
            var w = el.querySelector('[data-widget]');
            if (W[t.widget]) W[t.widget](w, t);
            else w.innerHTML = CE.c.pendiente('Práctica interactiva en preparación.', 'PRÁCTICA PENDIENTE');
        }
    };
})();
