/* ============================================================
   NÚCLEO · Utilidades
   Funciones pequeñas sin estado: fechas, escape de HTML, iconos
   y consultas de solo lectura sobre los datos.
   ============================================================ */

window.CE = window.CE || {};

CE.u = (function () {
    var DIAS  = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    var DIASL = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    var MESESL = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    /* 'YYYY-MM-DD' → Date local a medianoche (evita el desfase UTC) */
    function fecha(iso) {
        var p = String(iso).split('-');
        return new Date(+p[0], +p[1] - 1, +p[2]);
    }
    function iso(d) {
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
    /* Fecha de hoy. Para probar: index.html?hoy=2026-09-27 */
    function hoy() {
        var m = /[?&]hoy=(\d{4}-\d{2}-\d{2})/.exec(location.search);
        if (m) return fecha(m[1]);
        var d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }
    function sumarDias(d, n) { var r = new Date(d); r.setDate(r.getDate() + n); return r; }
    function dias(desde, hasta) { return Math.round((fecha(iso(hasta)) - fecha(iso(desde))) / 864e5); }

    function corta(d)  { if (typeof d === 'string') d = fecha(d); return DIAS[d.getDay()] + ' ' + d.getDate() + ' ' + MESES[d.getMonth()]; }
    function larga(d)  { if (typeof d === 'string') d = fecha(d); return DIASL[d.getDay()] + ' ' + d.getDate() + ' de ' + MESESL[d.getMonth()]; }
    function mes(d)    { if (typeof d === 'string') d = fecha(d); return MESES[d.getMonth()]; }
    function diaSem(d) { if (typeof d === 'string') d = fecha(d); return DIAS[d.getDay()]; }

    function enDias(n) {
        if (n === 0) return 'hoy';
        if (n === 1) return 'mañana';
        if (n === -1) return 'ayer';
        return n > 0 ? 'en ' + n + ' días' : 'hace ' + (-n) + ' días';
    }

    function semana(d) {
        var ini = fecha(CE.datos.calendario.inicioPeriodo);
        return Math.floor(dias(ini, typeof d === 'string' ? fecha(d) : d) / 7) + 1;
    }

    function pct(v) { return Math.round((v || 0) * 100); }

    function barajar(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }

    /* ---------- Iconos (trazo, 24×24). Sin emojis en la interfaz. ---------- */
    var ICONOS = {
        inicio:    '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
        plan:      '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
        metodo:    '<path d="M12 4 3 8.5l9 4.5 9-4.5L12 4Z"/><path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11"/>',
        cuerpo:    '<circle cx="12" cy="5" r="2"/><path d="M12 8v6M8 10h8M12 14l-3 6M12 14l3 6"/>',
        celula:    '<ellipse cx="12" cy="12" rx="8.5" ry="7"/><circle cx="13.5" cy="11" r="2.4"/><path d="M7 14.5c1 .6 2 .6 3 0"/>',
        practica:  '<rect x="4" y="5" width="12" height="15" rx="2"/><path d="M8 3h11a1 1 0 0 1 1 1v13"/>',
        brujula:   '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
        reloj:     '<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 2M9.5 2.5h5"/>',
        flecha:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
        atras:     '<path d="M19 12H5M11 6l-6 6 6 6"/>',
        check:     '<path d="m5 12.5 4.2 4L19 7"/>',
        cerrar:    '<path d="M6 6l12 12M18 6 6 18"/>',
        menu:      '<path d="M4 7h16M4 12h16M4 17h16"/>',
        arriba:    '<path d="m6 14 6-6 6 6"/>',
        abajo:     '<path d="m6 10 6 6 6-6"/>',
        voltear:   '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
        foco:      '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
        repaso:    '<path d="M4 12a8 8 0 1 0 2.3-5.6L4 8.7M4 4v4.7h4.7"/><path d="M12 8v4l3 2"/>',
        imagen:    '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m20.5 16-5-5-8.5 8.5"/>',
        mas:       '<path d="M12 5v14M5 12h14"/>',
        pregunta:  '<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.6 2.6 0 1 1 3.6 2.4c-.7.3-1.1.9-1.1 1.6v.5M12 17h.01"/>',
        descargar: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
        subir:     '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>'
    };
    function icono(n, clase) {
        return '<svg class="icono ' + (clase || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONOS[n] || '') + '</svg>';
    }

    function aviso(msg) {
        var prev = document.querySelector('.aviso');
        if (prev) prev.remove();
        var el = document.createElement('div');
        el.className = 'aviso'; el.setAttribute('role', 'status'); el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 2600);
    }

    function debounce(fn, ms) {
        var t; return function () { var a = arguments, s = this; clearTimeout(t); t = setTimeout(function () { fn.apply(s, a); }, ms || 350); };
    }

    return {
        esc: esc, fecha: fecha, iso: iso, hoy: hoy, sumarDias: sumarDias, dias: dias,
        corta: corta, larga: larga, mes: mes, diaSem: diaSem, enDias: enDias, semana: semana,
        pct: pct, barajar: barajar, icono: icono, aviso: aviso, debounce: debounce
    };
})();

/* ============================================================
   CONSULTAS · lectura de los datos (nunca los modifican)
   ============================================================ */
CE.q = (function () {
    var D = function () { return CE.datos; };
    var cal = function () { return CE.datos.calendario; };

    function asignatura(id) { return cal().asignaturas.find(function (a) { return a.id === id; }); }
    function unidad(id)     { return cal().unidades.find(function (u) { return u.id === id; }); }
    function unidadesDe(asig) { return cal().unidades.filter(function (u) { return u.asignatura === asig; }); }
    function tema(id)       { return D().temas.find(function (t) { return t.id === id; }); }
    function temasDe(asig)  { return D().temas.filter(function (t) { return t.asignatura === asig; }); }
    function temasDeUnidad(u) { return D().temas.filter(function (t) { return t.unidad === u; }); }
    function tecnica(id)    { return D().tecnicas.find(function (t) { return t.id === id; }); }

    function sesionesDeTema(id) { return cal().sesiones.filter(function (s) { return s.temas.indexOf(id) >= 0; }); }
    function sesionDeTema(id)   { return sesionesDeTema(id)[0]; }

    function evaluaciones() { return cal().evaluaciones.slice().sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; }); }
    function proximaEvaluacion(ref) {
        var h = CE.u.iso(ref || CE.u.hoy());
        return evaluaciones().find(function (e) { return e.fecha >= h; }) || null;
    }
    function temasDeEvaluacion(ev) {
        if (!ev) return [];
        return D().temas.filter(function (t) { return ev.unidades.indexOf(t.unidad) >= 0; });
    }
    function proximasSesiones(n, ref) {
        var h = CE.u.iso(ref || CE.u.hoy());
        return cal().sesiones.filter(function (s) { return s.fecha >= h; }).slice(0, n || 3);
    }
    function sesionesPasadas(ref) {
        var h = CE.u.iso(ref || CE.u.hoy());
        return cal().sesiones.filter(function (s) { return s.fecha < h; });
    }
    function preguntasDe(temaId)   { return D().preguntas.filter(function (p) { return p.tema === temaId; }); }
    function flashcardsDe(temaId)  { return D().flashcards.filter(function (f) { return f.tema === temaId; }); }

    return {
        asignatura: asignatura, unidad: unidad, unidadesDe: unidadesDe, tema: tema, temasDe: temasDe,
        temasDeUnidad: temasDeUnidad, tecnica: tecnica, sesionesDeTema: sesionesDeTema, sesionDeTema: sesionDeTema,
        evaluaciones: evaluaciones, proximaEvaluacion: proximaEvaluacion, temasDeEvaluacion: temasDeEvaluacion,
        proximasSesiones: proximasSesiones, sesionesPasadas: sesionesPasadas,
        preguntasDe: preguntasDe, flashcardsDe: flashcardsDe
    };
})();
