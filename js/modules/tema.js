/* ============================================================
   VISTA · Estudiar un tema
   #/tema/<id>/<paso>   (paso 1–6)

   Ruta reutilizable para CUALQUIER tema:
   01 Antes de empezar · 02 Comprende · 03 Relaciona · 04 Practica
   05 Recuerda · 06 Comprueba

   Si el tema no tiene contenido académico cargado, cada paso sigue
   siendo útil: guía a la estudiante para trabajar con sus apuntes
   y la bibliografía, y guarda lo que ella produce.
   ============================================================ */

window.CE = window.CE || {};
CE.vistas = CE.vistas || {};

(function () {
    var esc = CE.u.esc, I = CE.u.icono;

    var PASOS = [
        { t: 'Antes de empezar', s: '¿Qué necesitas saber?' },
        { t: 'Comprende',        s: 'Explicación visual' },
        { t: 'Relaciona',        s: 'Conecta conceptos' },
        { t: 'Practica',         s: 'Actividad' },
        { t: 'Recuerda',         s: 'Recuperación activa' },
        { t: 'Comprueba',        s: 'Autoevaluación' }
    ];
    var N = PASOS.length;

    var TECNICA_POR_TIPO = {
        terminologia:  [['active-recall', 'Recuperación activa'], ['comparacion', 'Tabla de términos opuestos']],
        generalidades: [['mapas', 'Mapa conceptual'], ['elaboracion', 'Elaboración']],
        proceso:       [['estudiar-parcial', 'Secuencia por fases'], ['elaboracion', 'Elaboración']],
        estructural:   [['comparacion', 'Tabla comparativa'], ['feynman', 'Explicar en voz alta'], ['active-recall', 'Recuperación activa']]
    };

    var BIBLIO = {
        morfologia: ['Moore, Dalley y Agur. Anatomía con orientación clínica, 9.ª ed.', 'Tortora y Derrickson. Principios de anatomía y fisiología, 13.ª ed.', 'Netter. Cuaderno de anatomía para colorear, 2.ª ed.']
    };

    function objetivo(t, sub) {
        if (t.tipo === 'estructural') return 'Ubicar, describir y relacionar: ' + sub;
        if (t.tipo === 'terminologia') return 'Usar correctamente: ' + sub;
        if (t.tipo === 'proceso') return 'Explicar en orden: ' + sub;
        return 'Explicar con tus palabras: ' + sub;
    }

    function bloqueCampo(id, etiqueta, valor, ph, alto) {
        return '<div class="campo"><label for="' + id + '">' + esc(etiqueta) + '</label>' +
            '<textarea id="' + id + '" class="entrada" data-guardar="' + id + '"' + (alto ? ' style="min-height:' + alto + 'px"' : '') +
            ' placeholder="' + esc(ph || '') + '">' + esc(valor || '') + '</textarea></div>';
    }

    function lista(x) {
        if (typeof x === 'string') return '<p>' + esc(x) + '</p>';
        return '<ul>' + x.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
    }

    /* Sección de contenido: { titulo, texto?, lista?, tabla?: { columnas, filas }, nota? } */
    function seccion(s) {
        return '<section class="contenido-sec">' + (s.titulo ? '<h3>' + esc(s.titulo) + '</h3>' : '') +
            (s.texto ? (Array.isArray(s.texto) ? s.texto : [s.texto]).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') : '') +
            (s.lista ? lista(s.lista) : '') +
            (s.tabla ? '<div class="tabla-envoltura"><table class="tabla"><thead><tr>' + s.tabla.columnas.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
                s.tabla.filas.map(function (f) { return '<tr>' + f.map(function (v, k) { return k === 0 ? '<th scope="row">' + esc(v) + '</th>' : '<td>' + esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' : '') +
            (s.figura ? CE.c.figura(s.figura) : '') +
            (s.nota ? '<div class="nota"><p class="peque">' + esc(s.nota) + '</p></div>' : '') +
            '</section>';
    }

    /* ================= PANELES POR PASO ================= */
    var P = {};

    P[1] = function (t, st) {
        var s = CE.q.sesionDeTema(t.id);
        var hermanos = CE.q.temasDeUnidad(t.unidad).filter(function (x) { return x.id !== t.id; });
        var tecs = TECNICA_POR_TIPO[t.tipo] || [];
        var c = t.contenido || {};
        return '<div class="pila-lg">' +
            '<section><h3>¿Qué vas a aprender?</h3><p class="suave">Al terminar deberías poder, sin mirar:</p>' +
            '<ul>' + t.subtemas.map(function (x) { return '<li>' + esc(objetivo(t, x)) + '</li>'; }).join('') + '</ul>' +
            '<p class="tenue">Los subtemas salen de tu plan calendario.</p></section>' +

            (s ? '<section class="tarjeta tarjeta--alt"><span class="rotulo">En tu plan</span>' +
                '<p style="margin:6px 0 4px"><b>Sesión ' + s.n + '</b> · ' + esc(CE.u.larga(s.fecha)) + ' · ' + esc(s.hora) + (s.festivo ? ' · <span class="chip chip--borrador">Festivo</span>' : '') + '</p>' +
                (s.independiente ? '<p class="peque" style="margin:0">Trabajo independiente: ' + esc(s.independiente) + '</p>' : '') +
                (s.evaluacion ? '<p class="peque" style="margin:0">Evaluación de la sesión: ' + esc(s.evaluacion) + '</p>' : '') +
                (s.nota ? '<p class="peque" style="margin:6px 0 0"><b>Nota:</b> ' + esc(s.nota) + '</p>' : '') + '</section>' : '') +

            '<section><h3>¿Qué necesitas saber antes?</h3>' +
            (c.prerrequisitos ? '<ul>' + c.prerrequisitos.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'
                : '<p class="suave peque">Repasa los temas previos de la misma unidad y la nomenclatura anatómica: todo lo demás se construye sobre ellos.</p>' +
                  (hermanos.length ? '<div class="fila">' + hermanos.map(function (x) { return '<a class="chip chip--azul" href="#/tema/' + x.id + '/1">' + esc(x.titulo) + '</a>'; }).join('') + '</div>' : '') +
                  (t.id !== 'nomenclatura' ? '<p style="margin-top:8px"><a href="#/tema/nomenclatura/1">Nomenclatura, planos y posición anatómica</a></p>' : '')) +
            '</section>' +

            (tecs.length ? '<section><h3>Cómo conviene estudiarlo</h3><div class="fila">' + tecs.map(function (x) {
                return '<a class="btn btn-secundario btn-peque" href="#/aprende/' + x[0] + '">' + I('metodo') + esc(x[1]) + '</a>';
            }).join('') + '</div></section>' : '') +
            '</div>';
    };

    P[2] = function (t, st) {
        var c = t.contenido;
        var libros = BIBLIO[t.asignatura] || [];
        var html = '<div class="pila-lg">';
        if (c && (c.ideaPrincipal || c.explicacion || c.secciones)) {
            html += '<div class="fila">' + CE.c.borrador(c) + '</div>' +
                (c.ideaPrincipal ? '<div class="nota nota--azul"><span class="rotulo">Idea principal</span><p>' + esc(c.ideaPrincipal) + '</p></div>' : '') +
                (c.explicacion ? '<section>' + c.explicacion.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>' : '') +
                (c.secciones ? c.secciones.map(seccion).join('') : '') +
                (c.figuras ? '<section><h3>Recursos visuales</h3><p class="tenue">Toca una imagen para ampliarla.</p><div class="rejilla rejilla-2">' + c.figuras.map(CE.c.figura).join('') + '</div></section>' : '') +
                (c.ejemplo ? '<div class="nota"><span class="rotulo">Ejemplo</span><p>' + esc(c.ejemplo) + '</p></div>' : '') +
                (c.enfermeria ? '<div class="nota nota--azul"><span class="rotulo">Para enfermería</span>' + lista(c.enfermeria) + '</div>' : '') +
                (c.errores ? '<section><h3>Errores frecuentes</h3><ul>' + c.errores.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' : '') +
                (c.loQueDebesSaber ? '<section class="tarjeta tarjeta--alt"><h3>Lo que debes saber</h3><ul>' + c.loQueDebesSaber.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' : '') +
                (c.fuente ? '<p class="tenue">Fuente: ' + esc(c.fuente) + '</p>' : '');
        } else {
            html += '<div class="rejilla rejilla-2">' +
                CE.c.pendiente('Aquí aparecerán la idea principal, la explicación paso a paso, las relaciones anatómicas, los errores frecuentes y "lo que debes saber" de este tema, con material revisado.') +
                CE.c.figura({ pendiente: 'el esquema de ' + t.titulo.toLowerCase() }) +
                '</div>' +
                '<section><h3>Mientras tanto, estudia con tus fuentes</h3>' +
                '<p class="suave">Usa la presentación de clase y la bibliografía del curso con <a href="#/aprende/lectura-activa">lectura activa</a>:</p>' +
                '<ul class="peque">' + libros.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
                '<p class="suave peque">Para las estructuras, apóyate en la mesa SECTRA y en Primal Pictures: ver la estructura en 3D antes de leerla ayuda a ubicarla.</p></section>';
        }
        html += '<section class="tarjeta">' + bloqueCampo('comprension', 'Explica la idea principal con tus palabras (3–5 líneas)', st.comprension, 'Sin copiar del libro…', 110) +
            '<p class="tenue" style="margin:8px 0 0">Si no puedes escribirlo sin mirar, todavía no está comprendido: vuelve a leer sólo esa parte.</p></section>';
        return html + '</div>';
    };

    P[3] = function (t, st) {
        var el = st.elaboracion || {};
        var PREG = ['¿Qué es?', '¿Cómo funciona?', '¿Por qué ocurre?', '¿Con qué se relaciona?', '¿Qué pasaría si se altera?'];
        var otros = CE.q.temasDe(t.asignatura).filter(function (x) { return x.id !== t.id; });
        return '<div class="pila-lg">' +
            '<p class="suave">Elige una estructura o concepto de este tema y respóndete estas preguntas. Así pasas de memorizar nombres a entender relaciones.</p>' +
            '<div class="campo"><label for="rel-foco">Estructura o concepto</label><input id="rel-foco" class="entrada" data-guardar="foco" list="rel-subs" value="' + esc(st.foco || '') + '">' +
            '<datalist id="rel-subs">' + t.subtemas.map(function (s) { return '<option value="' + esc(s) + '">'; }).join('') + '</datalist></div>' +
            '<div class="rejilla rejilla-2">' + PREG.map(function (p, k) {
                return '<div class="campo"><label for="ela-' + k + '">' + esc(p) + '</label><textarea id="ela-' + k + '" class="entrada" style="min-height:80px" data-elab="' + k + '">' + esc(el[k] || '') + '</textarea></div>';
            }).join('') + '</div>' +
            (t.tipo === 'generalidades' ? '<div class="nota"><p class="peque">Para este tema el plan pide un <b>mapa conceptual</b>. <a href="#/aprende/mapas">Mira cómo construirlo</a> y hazlo en papel con estas respuestas.</p></div>' : '') +
            '<section><h3>Conecta con otros temas</h3><p class="suave peque">¿Qué tema anterior necesitas para entender este? ¿Qué estructura de otra unidad pasa por aquí?</p>' +
            '<div class="fila">' + otros.slice(0, 12).map(function (x) { return '<a class="chip chip--borde" href="#/tema/' + x.id + '/3">' + esc(x.titulo) + '</a>'; }).join('') + '</div></section>' +
            '</div>';
    };

    P[4] = function (t, st) {
        var c = t.contenido || {};
        return '<div class="pila-lg">' +
            (c.laminas && c.laminas.length ? '<section><h3>Identifica las estructuras</h3>' +
                '<p class="suave">Láminas de los talleres del curso. Para cada número elige el nombre correcto, como en la práctica de anfiteatro y SECTRA.</p>' +
                c.laminas.map(function (l, k) { return '<div class="tarjeta" style="margin-top:var(--s-3)" data-lamina="' + k + '"></div>'; }).join('') + '</section>' : '') +
            '<section><h3>Tabla comparativa del tema</h3>' +
            '<p class="suave">Las filas son los subtemas de tu plan y las columnas lo que el plan pide estudiar. Llénala primero <b>sin mirar</b>; luego completa con otro color en tu cuaderno lo que faltó.</p>' +
            '<div data-tabla-tema></div></section>' +
            '<section><h3>Mini caso</h3>' +
            (c.minicaso ? '<div class="tarjeta tarjeta--alt"><p>' + esc(c.minicaso.situacion) + '</p><ol>' + c.minicaso.preguntas.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol></div>'
                : CE.c.pendiente('Aquí irá una situación de enfermería breve para aplicar el tema, como las de los talleres del curso.', '[MINI CASO PENDIENTE]')) +
            '</section></div>';
    };

    P[5] = function (t) {
        return '<div class="pila-lg">' +
            '<p class="suave">Intenta responder cada tarjeta <b>antes</b> de voltearla. Marca "Difícil" sin miedo: esas son las que repasarás.</p>' +
            '<div data-fc></div>' +
            '<section class="tarjeta tarjeta--alt"><h3>Crea tus propias tarjetas</h3>' +
            '<p class="suave peque">Convertir tus apuntes en preguntas ya es estudiar. Una idea por tarjeta.</p>' +
            '<form data-nueva class="pila"><div class="rejilla rejilla-2">' +
            '<div class="campo"><label for="fc-f">Frente (pregunta o concepto)</label><input id="fc-f" class="entrada" name="frente" required></div>' +
            '<div class="campo"><label for="fc-r">Reverso (respuesta)</label><input id="fc-r" class="entrada" name="reverso" required></div></div>' +
            '<button class="btn btn-primario" type="submit">' + I('mas') + 'Agregar tarjeta</button></form>' +
            '<div data-mias style="margin-top:var(--s-3)"></div></section></div>';
    };

    P[6] = function (t) {
        var hay = CE.q.preguntasDe(t.id).length;
        return '<div class="pila-lg">' +
            '<div class="nota nota--azul"><p class="peque">Autoevaluación <b>formativa</b>: te dice qué reforzar. No es una evaluación oficial de la universidad.</p></div>' +
            (hay ? '<section><h3>Preguntas del tema</h3><div class="tarjeta tarjeta--sombra" data-quiz></div></section>' : '') +
            '<section><h3>¿Qué tan bien lo sabes?</h3>' +
            '<p class="suave peque">Para cada subtema, intenta explicarlo en voz alta sin mirar. Después califícate con honestidad.</p>' +
            '<div data-autoeval></div></section></div>';
    };

    /* ================= RENDER ================= */

    function navPasos(t, actual) {
        return '<nav class="estudio__nav" aria-label="Pasos del tema"><ol>' + PASOS.map(function (p, k) {
            var n = k + 1, hecho = CE.estado.pasoHecho(t.id, n);
            return '<li><a class="paso-link' + (hecho ? ' hecho' : '') + '" href="#/tema/' + t.id + '/' + n + '"' + (n === actual ? ' aria-current="step"' : '') + '>' +
                '<span class="paso-link__n">' + String(n).padStart(2, '0') + '</span><span><b>' + esc(p.t) + '</b><small>' + esc(p.s) + '</small></span>' +
                (hecho ? '<span class="paso-link__ok" title="Completado">' + I('check') + '<span class="solo-lector">(completado)</span></span>' : '<span></span>') +
                '</a></li>';
        }).join('') + '</ol></nav>';
    }

    function pie(t, n) {
        var hecho = CE.estado.pasoHecho(t.id, n);
        return '<div class="panel-paso__pie">' +
            '<button class="btn ' + (hecho ? 'btn-secundario' : 'btn-acento') + '" data-completar aria-pressed="' + hecho + '">' +
            (hecho ? I('check') + 'Paso completado' : 'Marcar paso como completado') + '</button>' +
            '<div class="fila">' +
            (n > 1 ? '<a class="btn btn-secundario" href="#/tema/' + t.id + '/' + (n - 1) + '">' + I('atras') + 'Anterior</a>' : '') +
            (n < N ?'<a class="btn btn-primario" href="#/tema/' + t.id + '/' + (n + 1) + '">' + esc(PASOS[n].t) + I('flecha') + '</a>'
                   : '<a class="btn btn-primario" href="#/' + t.asignatura + '">Volver a los temas</a>') +
            '</div></div>';
    }

    function cabecera(t) {
        var u = CE.q.unidad(t.unidad), a = CE.q.asignatura(t.asignatura);
        return '<nav class="migas" aria-label="Ruta"><a href="#/' + a.id + '">' + esc(a.nombre) + '</a> / Unidad ' + esc(u.numero) + ' · ' + esc(u.nombre) + '</nav>' +
            '<header class="cabecera" style="max-width:none;display:flex;justify-content:space-between;gap:var(--s-4);flex-wrap:wrap;align-items:flex-end">' +
            '<div><h1 style="margin-bottom:6px">' + esc(t.titulo) + '</h1><div class="fila" data-cab-estado>' + estadoCab(t) + '</div></div>' +
            '<div style="min-width:220px" data-cab-barra>' + CE.c.barra({ etiqueta: 'Ruta de estudio', valor: CE.estado.progresoTema(t.id), detalle: CE.estado.pasosHechos(t.id) + ' de ' + N + ' pasos' }) + '</div>' +
            '</header>';
    }
    function estadoCab(t) {
        var s = CE.q.sesionDeTema(t.id);
        return CE.c.estado(CE.estado.estadoTema(t.id)) + (s ? '<span class="chip chip--borde">Sesión ' + s.n + ' · ' + esc(CE.u.corta(s.fecha)) + '</span>' : '') +
            (t.contenido ? '' : '<span class="chip">Contenido académico en preparación</span>');
    }

    function refrescar(el, t, n) {
        el.querySelector('[data-cab-estado]').innerHTML = estadoCab(t);
        el.querySelector('[data-cab-barra]').innerHTML = CE.c.barra({ etiqueta: 'Ruta de estudio', valor: CE.estado.progresoTema(t.id), detalle: CE.estado.pasosHechos(t.id) + ' de ' + N + ' pasos' });
        el.querySelector('.estudio__nav').outerHTML = navPasos(t, n);
        el.querySelector('.panel-paso__pie').outerHTML = pie(t, n);
    }

    function autoCompletar(el, t, n, msg) {
        if (CE.estado.pasoHecho(t.id, n)) return;
        CE.estado.marcarPaso(t.id, n, true);
        refrescar(el, t, n);
        CE.u.aviso(msg || 'Paso ' + String(n).padStart(2, '0') + ' completado');
    }

    /* ================= INTERACTIVIDAD POR PASO ================= */
    var M = {};

    M[4] = function (el, t, st) {
        var c = t.contenido || {};
        st.laminas = st.laminas || {};
        (c.laminas || []).forEach(function (l, k) {
            CE.c.lamina(el.querySelector('[data-lamina="' + k + '"]'), {
                lamina: l,
                alTerminar: function (pct) {
                    st.laminas[l.id] = pct; CE.estado.guardar();
                    var hechas = c.laminas.filter(function (x) { return st.laminas[x.id] != null; }).length;
                    if (hechas >= Math.ceil(c.laminas.length / 2)) autoCompletar(el, t, 4, 'Paso 04 completado: láminas practicadas');
                }
            });
        });
        st.tabla = st.tabla || {};
        CE.c.tablaEditable(el.querySelector('[data-tabla-tema]'), {
            filas: t.subtemas, columnas: t.criterios, datos: st.tabla,
            alCambiar: function (d, llenas, total) {
                CE.estado.guardar();
                if (llenas >= Math.ceil(total / 2)) autoCompletar(el, t, 4, 'Paso 04 completado: tabla a más de la mitad');
            }
        });
    };

    M[5] = function (el, t) {
        function mazo() {
            CE.c.flashcards(el.querySelector('[data-fc]'), {
                tarjetas: CE.estado.tarjetasDe(t.id),
                vacio: 'Todavía no hay tarjetas para este tema. Crea las tuyas abajo a partir de tus apuntes: es una de las mejores formas de estudiar.',
                alMarcar: function () {
                    var marcadas = CE.estado.tarjetasDe(t.id).filter(function (c) { return CE.estado.marcaTarjeta(c.id); }).length;
                    if (marcadas >= Math.min(5, CE.estado.tarjetasDe(t.id).length)) autoCompletar(el, t, 5);
                }
            });
        }
        function mias() {
            var lista = CE.estado.datos.misTarjetas.filter(function (c) { return c.tema === t.id; });
            el.querySelector('[data-mias]').innerHTML = lista.length
                ? '<p class="rotulo">Tus tarjetas (' + lista.length + ')</p><ul class="lista-limpia">' + lista.map(function (c) {
                    return '<li class="fila" style="justify-content:space-between;padding:6px 0;border-top:1px solid var(--linea);flex-wrap:nowrap"><span class="peque"><b>' + esc(c.frente) + '</b> — ' + esc(c.reverso) + '</span>' +
                        '<button class="btn btn-texto btn-peque" data-borrar="' + c.id + '">Quitar</button></li>';
                }).join('') + '</ul>' : '';
        }
        var form = el.querySelector('[data-nueva]');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var f = form.frente.value.trim(), r = form.reverso.value.trim();
            if (!f || !r) return;
            CE.estado.agregarTarjeta(t.id, f, r);
            form.reset(); form.frente.focus();
            mazo(); mias(); CE.u.aviso('Tarjeta agregada');
        });
        el.querySelector('[data-mias]').addEventListener('click', function (e) {
            var b = e.target.closest('[data-borrar]'); if (!b) return;
            CE.estado.borrarTarjeta(b.dataset.borrar); mazo(); mias();
        });
        mazo(); mias();
    };

    M[6] = function (el, t, st) {
        var q = el.querySelector('[data-quiz]');
        if (q) CE.c.quiz(q, {
            preguntas: CE.q.preguntasDe(t.id),
            alTerminar: function (r) {
                st.quiz = r; CE.estado.guardar();
                autoCompletar(el, t, 6, 'Autoevaluación guardada');
            }
        });

        var NIVELES = [['0', 'No lo sé'], ['1', 'Con ayuda'], ['2', 'Sin mirar']];
        st.autoeval = st.autoeval || {};
        var cont = el.querySelector('[data-autoeval]');
        function dibujar() {
            var todos = t.subtemas.every(function (s) { return st.autoeval[s] != null; });
            var html = '<div class="autoeval">' + t.subtemas.map(function (s, k) {
                return '<div class="autoeval__fila"><b id="ae-' + k + '">' + esc(s) + '</b><div class="segmento" role="group" aria-labelledby="ae-' + k + '">' +
                    NIVELES.map(function (n) {
                        return '<button data-ae="' + k + '" data-v="' + n[0] + '" aria-pressed="' + (String(st.autoeval[s]) === n[0]) + '">' + n[1] + '</button>';
                    }).join('') + '</div></div>';
            }).join('') + '</div>';
            if (todos) {
                var fuertes = t.subtemas.filter(function (s) { return st.autoeval[s] === 2; });
                var repaso = t.subtemas.filter(function (s) { return st.autoeval[s] < 2; });
                var pct = Math.round(t.subtemas.reduce(function (a, s) { return a + st.autoeval[s]; }, 0) / (t.subtemas.length * 2) * 100);
                st.autoevalPct = pct;
                var rec = repaso.length
                    ? 'Necesitas reforzar ' + repaso.join(', ').toLowerCase() + '. Vuelve al paso 02 sólo en esa parte y haz una ronda de flashcards mañana.'
                    : 'Lo explicas todo sin mirar. Repásalo con flashcards en días separados para mantenerlo hasta el parcial.';
                html += '<div class="resultado" style="margin-top:var(--s-4)">' +
                    '<div class="resultado__fuerte"><h4>Temas fuertes</h4>' + (fuertes.length ? '<ul>' + fuertes.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '<p class="peque">Aún ninguno sin mirar. Es normal al comienzo.</p>') + '</div>' +
                    '<div class="resultado__repaso"><h4>Necesitan repaso</h4>' + (repaso.length ? '<ul>' + repaso.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '<p class="peque">Nada pendiente.</p>') + '</div></div>' +
                    '<div class="nota" style="margin-top:var(--s-3)"><span class="rotulo">Recomendación</span><p>' + esc(rec) + '</p></div>';
            }
            cont.innerHTML = html;
            return todos;
        }
        cont.addEventListener('click', function (e) {
            var b = e.target.closest('[data-ae]'); if (!b) return;
            st.autoeval[t.subtemas[+b.dataset.ae]] = +b.dataset.v;
            var todos = dibujar();
            CE.estado.guardar();
            var foco = cont.querySelector('[data-ae="' + b.dataset.ae + '"][data-v="' + b.dataset.v + '"]'); if (foco) foco.focus();
            if (todos) { autoCompletar(el, t, 6, 'Autoevaluación guardada'); refrescar(el, t, 6); }
        });
        dibujar();
    };

    CE.vistas.tema = {
        titulo: function (p) { var t = CE.q.tema(p.id); return t ? t.titulo : 'Tema'; },
        render: function (p) {
            var t = CE.q.tema(p.id);
            if (!t) return CE.c.pendiente('Ese tema no existe en el plan.', 'TEMA NO ENCONTRADO');
            var n = Math.min(N, Math.max(1, +p.paso || 1));
            var st = CE.estado.tema(t.id);
            CE.estado.registrarVisita(t.id, n);
            return cabecera(t) +
                '<div class="estudio">' + navPasos(t, n) +
                '<section class="estudio__panel" aria-labelledby="paso-titulo">' +
                '<div class="panel-paso__cab"><span class="panel-paso__n" aria-hidden="true">' + String(n).padStart(2, '0') + '</span>' +
                '<div><h2 id="paso-titulo">' + esc(PASOS[n - 1].t) + '</h2><p>' + esc(PASOS[n - 1].s) + '</p></div></div>' +
                P[n](t, st) +
                pie(t, n) +
                '</section></div>';
        },
        montar: function (el, p) {
            var t = CE.q.tema(p.id); if (!t) return;
            var n = Math.min(N, Math.max(1, +p.paso || 1));
            var st = CE.estado.tema(t.id);

            /* Campos de texto libres del tema: se guardan solos */
            el.addEventListener('input', CE.u.debounce(function (e) {
                var k = e.target.dataset.guardar, ela = e.target.dataset.elab;
                if (k) st[k] = e.target.value;
                else if (ela != null) { st.elaboracion = st.elaboracion || {}; st.elaboracion[ela] = e.target.value; }
                else return;
                CE.estado.guardar();
                if (ela != null) {
                    var n3 = Object.keys(st.elaboracion).filter(function (x) { return (st.elaboracion[x] || '').trim().length > 2; }).length;
                    if (n3 >= 3) autoCompletar(el, t, 3);
                }
            }, 400));

            el.addEventListener('click', function (e) {
                if (!e.target.closest('[data-completar]')) return;
                CE.estado.marcarPaso(t.id, n, !CE.estado.pasoHecho(t.id, n));
                refrescar(el, t, n);
            });

            if (M[n]) M[n](el, t, st);
        }
    };
})();
