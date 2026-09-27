/* ============================================================
   DATOS · CALENDARIO ACADÉMICO
   Fuente: "plan calendario.pdf" entregado por la estudiante
   (Morfología, Facultad de Enfermería, I semestre, 2026-2, grupo mañana).

   Regla: aquí sólo va lo que dice el plan. Cuando algo es una
   inferencia (p. ej. el alcance de un parcial) se marca con
   `inferido: true` y la interfaz lo muestra como tal.

   Para agregar otra asignatura:
     1. Añade un objeto en `asignaturas` con disponible: true.
     2. Añade sus `unidades` y `sesiones` con el mismo formato.
     3. Crea sus temas en data/temas.js.
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

CE.datos.calendario = {
    semestre: 'Primer semestre',
    programa: 'Enfermería',
    periodo: '2026-2',
    inicioPeriodo: '2026-07-13',          // lunes de la semana de la sesión 1

    asignaturas: [
        {
            id: 'morfologia',
            nombre: 'Morfología',
            disponible: true,
            docente: 'Enf. Mag. Aurora Moreno',
            horario: 'Miércoles 10:00–13:00 · Viernes 07:00–10:00',
            fuente: 'Plan calendario Morfología 2026-2, grupo mañana'
        },
        {
            id: 'biologia',
            nombre: 'Biología',
            disponible: true,
            sinPlan: true,
            docente: 'Facultad de Enfermería',
            horario: 'Temas organizados a partir del material del curso (talleres, laboratorios y presentaciones)',
            nota: 'Todavía no se ha cargado el plan calendario de Biología 2026-2: las unidades se organizaron con el material del curso y aún no tienen fechas. Cuando llegue el plan se asignan las sesiones.'
        }
    ],

    unidades: [
        { id: 'm-u1', asignatura: 'morfologia', numero: 'I',   nombre: 'Generalidades de morfología' },
        { id: 'm-u2', asignatura: 'morfologia', numero: 'II',  nombre: 'Sistema nervioso' },
        { id: 'm-u3', asignatura: 'morfologia', numero: 'III', nombre: 'Cara y cuello' },
        { id: 'm-u4', asignatura: 'morfologia', numero: 'IV',  nombre: 'Tórax' },
        { id: 'm-u5', asignatura: 'morfologia', numero: 'V',   nombre: 'Abdomen' },
        { id: 'm-u6', asignatura: 'morfologia', numero: 'VI',  nombre: 'Sistema reproductor' },
        { id: 'm-u7', asignatura: 'morfologia', numero: 'VII', nombre: 'Miembro superior e inferior' },

        /* Biología: unidades organizadas desde el material del curso
           (talleres 1 y 2, laboratorios I–IX, taller de repaso y
           presentaciones del parcial final). Sin fechas hasta tener el plan. */
        { id: 'b-u1', asignatura: 'biologia', numero: 'I',   nombre: 'La célula y el laboratorio' },
        { id: 'b-u2', asignatura: 'biologia', numero: 'II',  nombre: 'Biomoléculas y metabolismo' },
        { id: 'b-u3', asignatura: 'biologia', numero: 'III', nombre: 'Membrana y transporte' },
        { id: 'b-u4', asignatura: 'biologia', numero: 'IV',  nombre: 'Información genética' },
        { id: 'b-u5', asignatura: 'biologia', numero: 'V',   nombre: 'Ciclo celular y división' },
        { id: 'b-u6', asignatura: 'biologia', numero: 'VI',  nombre: 'Sangre' },
        { id: 'b-u7', asignatura: 'biologia', numero: 'VII', nombre: 'Neurotransmisión' }
    ],

    /* tipo: clase | practica | evaluacion
       temas: ids de data/temas.js que se trabajan en la sesión */
    sesiones: [
        { n: 1,  fecha: '2026-07-15', hora: '10:00–13:00', unidad: 'm-u1', tipo: 'clase',
          titulo: 'Introducción al curso', temas: [],
          detalle: 'Presentación del curso, normas del curso, inducción a la mesa SECTRA.',
          independiente: 'Trabajo grupal: lectura recomendada.',
          evaluacion: 'Cuestionario virtual en la mesa SECTRA de planos.' },

        { n: 2,  fecha: '2026-07-17', hora: '07:00–10:00', unidad: 'm-u1', tipo: 'clase',
          titulo: 'Nomenclatura, planos y posición anatómica', temas: ['nomenclatura'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 3,  fecha: '2026-07-22', hora: '10:00–13:00', unidad: 'm-u1', tipo: 'clase',
          titulo: 'Generalidades de osteología, artrología y miología', temas: ['generalidades-osteo-artro-mio'],
          independiente: 'Trabajo grupal: mapa conceptual.',
          evaluacion: 'Mapa conceptual.' },

        { n: 4,  fecha: '2026-07-24', hora: '07:00–10:00', unidad: 'm-u1', tipo: 'clase',
          titulo: 'Generalidades de embriología', temas: ['embriologia'],
          independiente: 'Trabajo individual: lectura y video recomendados.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 5,  fecha: '2026-07-29', hora: '10:00–13:00', unidad: 'm-u1', tipo: 'clase',
          titulo: 'Columna vertebral y cráneo', temas: ['columna', 'craneo'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual / guía.' },

        { n: 6,  fecha: '2026-07-31', hora: '07:00–10:00', unidad: 'm-u1', tipo: 'evaluacion',
          titulo: 'Primer parcial', evaluacionId: 'parcial-1', lugar: 'Sala de biblioteca', temas: [],
          independiente: 'Trabajo individual: lectura y video recomendados.' },

        { n: 7,  fecha: '2026-08-05', hora: '10:00–13:00', unidad: 'm-u2', tipo: 'clase',
          titulo: 'Generalidades del sistema nervioso, tallo cerebral y cerebelo',
          temas: ['sistema-nervioso', 'tallo-cerebral', 'cerebelo'],
          independiente: 'Lectura y video recomendados.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 8,  fecha: '2026-08-07', hora: '07:00–10:00', unidad: 'm-u2', tipo: 'clase',
          titulo: 'Pares craneanos', temas: ['pares-craneanos'], festivo: true,
          nota: 'El plan dice "viernes 8 de agosto" y lo marca como FESTIVO. El viernes de esa semana es el 7 de agosto. Confirmar con la docente cuándo se recupera.',
          evaluacion: 'Oral / quiz / cuestionario virtual / situación de enfermería.' },

        { n: 9,  fecha: '2026-08-12', hora: '10:00–13:00', unidad: 'm-u2', tipo: 'clase',
          titulo: 'Cerebro: configuración externa e interna', temas: ['cerebro'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 10, fecha: '2026-08-14', hora: '07:00–10:00', unidad: 'm-u2', tipo: 'clase',
          titulo: 'Ojo y oído: estructuras y función', temas: ['ojo-oido'],
          independiente: 'Lectura recomendada, trabajo grupal, asesorías.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 11, fecha: '2026-08-19', hora: '10:00–13:00', unidad: 'm-u2', tipo: 'practica',
          titulo: 'Práctica de neuroanatomía (anfiteatro y mesa SECTRA)', temas: [],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / taller / situación de enfermería.' },

        { n: 12, fecha: '2026-08-21', hora: '07:00–10:00', unidad: 'm-u3', tipo: 'clase',
          titulo: 'Cara', temas: ['cara'],
          evaluacion: 'Oral / quiz / cuestionario virtual / guía.' },

        { n: 13, fecha: '2026-08-26', hora: '10:00–13:00', unidad: 'm-u3', tipo: 'clase',
          titulo: 'Cuello', temas: ['cuello'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 14, fecha: '2026-08-28', hora: '07:00–10:00', unidad: 'm-u3', tipo: 'clase',
          titulo: 'Laringe y faringe', temas: ['laringe-faringe'],
          independiente: 'Lectura recomendada, trabajo grupal, asesorías.',
          evaluacion: 'Taller grupal de aplicación del proceso de enfermería: solución de situaciones planteadas (argumentos fisiológicos).' },

        { n: 16, fecha: '2026-09-02', hora: '10:00–13:00', unidad: 'm-u3', tipo: 'practica',
          titulo: 'Práctica de cara y cuello (anfiteatro y mesa SECTRA)', temas: [],
          independiente: 'Trabajo individual: lectura y video recomendados.',
          evaluacion: 'Oral / quiz / taller / situación de enfermería.' },

        { n: 17, fecha: '2026-09-04', hora: '07:00–10:00', unidad: 'm-u3', tipo: 'evaluacion',
          titulo: 'Examen trimestral', evaluacionId: 'trimestral', lugar: 'Sala de biblioteca', temas: [] },

        { n: 18, fecha: '2026-09-09', hora: '10:00–13:00', unidad: 'm-u4', tipo: 'clase',
          titulo: 'Pared torácica, glándula mamaria, vía aérea, pulmón y pleura',
          temas: ['pared-toracica', 'via-aerea-pulmon'],
          independiente: 'Trabajo individual: lectura y video recomendados.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 19, fecha: '2026-09-11', hora: '07:00–10:00', unidad: 'm-u4', tipo: 'clase',
          titulo: 'Corazón: configuración interna y externa', temas: ['corazon'],
          evaluacion: 'Oral / quiz / cuestionario virtual / taller.' },

        { n: 20, fecha: '2026-09-16', hora: '10:00–13:00', unidad: 'm-u4', tipo: 'practica',
          titulo: 'Práctica de tórax, pulmón y corazón (anfiteatro y mesa SECTRA)', temas: [],
          independiente: 'Lectura y video recomendados.',
          evaluacion: 'Oral / quiz / taller / situación de enfermería.' },

        { n: 21, fecha: '2026-09-18', hora: '07:00–10:00', unidad: 'm-u5', tipo: 'clase',
          titulo: 'Peritoneo, estómago, bazo, páncreas, hígado y vía biliar',
          temas: ['peritoneo', 'estomago-bazo-pancreas-higado'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual / taller.' },

        { n: 22, fecha: '2026-09-23', hora: '10:00–13:00', unidad: 'm-u5', tipo: 'clase',
          titulo: 'Intestino, recto y grandes vasos abdominales',
          temas: ['intestino-recto', 'vasos-abdominales'],
          independiente: 'Lectura recomendada, trabajo grupal, asesorías.',
          evaluacion: 'Oral / quiz / cuestionario virtual / taller.' },

        { n: 23, fecha: '2026-09-25', hora: '07:00–10:00', unidad: 'm-u5', tipo: 'clase',
          titulo: 'Riñón, uréter y órganos retroperitoneales', temas: ['rinon-retroperitoneo'],
          independiente: 'Lectura y video recomendados.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 24, fecha: '2026-09-30', hora: '10:00–13:00', unidad: 'm-u5', tipo: 'practica',
          titulo: 'Práctica de abdomen (anfiteatro y mesa SECTRA)', temas: [],
          independiente: 'Lectura recomendada, trabajo grupal, asesorías.',
          evaluacion: 'Oral / quiz / taller / situación de enfermería.' },

        { n: 25, fecha: '2026-10-02', hora: '07:00–10:00', unidad: 'm-u5', tipo: 'evaluacion',
          titulo: 'Segundo parcial', evaluacionId: 'parcial-2', lugar: 'Sala de sistemas, biblioteca', temas: [] },

        { n: 26, fecha: '2026-10-16', hora: '07:00–10:00', unidad: 'm-u6', tipo: 'clase',
          titulo: 'Genital femenino, pelvis, vejiga y uretra',
          temas: ['genital-femenino', 'pelvis-vejiga-uretra'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 27, fecha: '2026-10-23', hora: '07:00–10:00', unidad: 'm-u6', tipo: 'clase',
          titulo: 'Genital masculino', temas: ['genital-masculino'],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / cuestionario virtual.' },

        { n: 28, fecha: '2026-10-30', hora: '07:00–10:00', unidad: 'm-u6', tipo: 'practica',
          titulo: 'Práctica de genitales femeninos y masculinos (anfiteatro y mesa SECTRA)', temas: [],
          independiente: 'Trabajo individual: lectura recomendada.',
          evaluacion: 'Oral / quiz / taller / situación de enfermería.',
          responsables: 'Enf. Mag. Aurora Moreno · PT, MSc Ever Beltrán' },

        { n: 29, fecha: '2026-11-06', hora: '07:00–10:00', unidad: 'm-u7', tipo: 'clase',
          titulo: 'Miembro superior', temas: ['miembro-superior'],
          independiente: 'Trabajo individual: plataforma virtual, actividad interactiva.',
          evaluacion: 'Oral / quiz / cuestionario virtual / taller.' },

        { n: 30, fecha: '2026-11-13', hora: '07:00–10:00', unidad: 'm-u7', tipo: 'clase',
          titulo: 'Miembro inferior', temas: ['miembro-inferior'],
          independiente: 'Lectura recomendada, trabajo grupal, asesorías.',
          evaluacion: 'Oral / quiz / cuestionario virtual / taller.' },

        { n: 31, fecha: '2026-11-20', hora: '07:00–10:00', unidad: 'm-u7', tipo: 'evaluacion',
          titulo: 'Parcial final', evaluacionId: 'final', lugar: 'Sala de biblioteca / sala de sistemas', temas: [],
          independiente: 'Trabajo individual: plataforma virtual, actividad interactiva.' }
    ],

    /* El alcance de cada evaluación NO aparece en el plan: se infiere
       de las unidades vistas desde la evaluación anterior. */
    evaluaciones: [
        { id: 'parcial-1',  asignatura: 'morfologia', nombre: 'Primer parcial',   fecha: '2026-07-31',
          unidades: ['m-u1'], inferido: true },
        { id: 'trimestral', asignatura: 'morfologia', nombre: 'Examen trimestral', fecha: '2026-09-04',
          unidades: ['m-u2', 'm-u3'], inferido: true },
        { id: 'parcial-2',  asignatura: 'morfologia', nombre: 'Segundo parcial',  fecha: '2026-10-02',
          unidades: ['m-u4', 'm-u5'], inferido: true },
        { id: 'final',      asignatura: 'morfologia', nombre: 'Parcial final',    fecha: '2026-11-20',
          unidades: ['m-u6', 'm-u7'], inferido: true,
          nota: 'Puede ser acumulativo: confirmar con la docente.' }
    ],

    eventos: [
        { tipo: 'receso', desde: '2026-10-05', hasta: '2026-10-09', titulo: 'Semana de receso' }
    ],

    /* Sistema de evaluación tal como aparece en el plan.
       Cada corte: 40 % práctica individual + 60 % teórico individual. */
    pesos: {
        nota: 'El plan lista seis cortes, pero el cronograma sólo fecha cuatro evaluaciones. Confirmar con la docente cuándo se aplican el III y el IV parcial.',
        cortes: [
            { nombre: 'I parcial',         peso: 15 },
            { nombre: 'II parcial',        peso: 15 },
            { nombre: 'Examen trimestral', peso: 20 },
            { nombre: 'III parcial',       peso: 15 },
            { nombre: 'IV parcial',        peso: 15 },
            { nombre: 'Examen final',      peso: 20 }
        ],
        componentes: 'Cada corte: práctica 40 % · teórico 60 %.',
        aprobacion: 'Escala de 0,0 a 5,0. Nota mínima aprobatoria: 3,0.'
    },

    competencias: {
        saber: [
            'Utiliza terminología propia de la asignatura.',
            'Identifica las estructuras anatómicas de los diferentes sistemas del organismo en cadáveres o esquemas.',
            'Argumenta de forma clara y concisa los conocimientos anatómicos.',
            'Comunica la comprensión del tema resolviendo las situaciones problema de los talleres.'
        ],
        hacer: [
            'Participa en clase evidenciando la lectura de la bibliografía recomendada.',
            'Elabora valoraciones físicas comprendiendo las relaciones anatomotopográficas entre órganos para interpretar manifestaciones clínicas.',
            'Resuelve situaciones problema aplicando los conceptos aprendidos.',
            'Ubica las estructuras anatómicas en el esquema, modelo anatómico o cadáver.'
        ]
    },

    bibliografia: [
        'Tortora G., Derrickson B. Principios de anatomía y fisiología. 13.ª ed. Médica Panamericana; 2013.',
        'Sadler T. W. Langman. Embriología médica. Médica Panamericana; 2013.',
        'Hansen J. Netter. Cuaderno de anatomía para colorear. 2.ª ed. Elsevier; 2015.',
        'Moore K., Dalley A., Agur A. Anatomía con orientación clínica. 9.ª ed. Wolters Kluwer; 2024.'
    ],

    recursos: [
        'Portal educativo SECTRA (programas VHD e IDS7).',
        'Base de datos Primal Pictures (FUCS).',
        'Base de datos NNNconsult (FUCS).'
    ]
};
