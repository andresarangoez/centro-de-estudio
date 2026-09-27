/* ============================================================
   DATOS · APRENDE A ESTUDIAR
   Contenido pedagógico de cada técnica. El campo `widget` indica
   qué práctica interactiva se monta (js/modules/aprende.js).

   Para agregar una técnica: copia un objeto, cambia el id y usa
   uno de los widgets existentes o 'ninguno'.
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

CE.datos.tecnicas = [
    {
        id: 'estudiar-parcial', titulo: 'Cómo estudiar para un parcial', duracion: '8 min',
        problema: 'Leer muchas veces el mismo material se siente productivo, pero no garantiza que puedas responder en el examen.',
        idea: 'Estudiar para un parcial es un proceso por fases: primero entiendes, después relacionas y al final practicas sacar la información de tu memoria.',
        cuando: ['Desde la primera clase del tema, no la semana del parcial.', 'Con cualquier asignatura del semestre.'],
        widget: 'secuencia',
        pasos: [
            { t: 'Lectura inicial', d: 'Una lectura rápida para ver el mapa: títulos, figuras y palabras en negrita. Todavía no subrayes.' },
            { t: 'Identifica conceptos', d: 'Haz una lista de los conceptos clave (máximo 10). Si todo te parece importante, pregúntate qué preguntaría la docente.' },
            { t: 'Segunda lectura', d: 'Ahora sí, lee despacio buscando la explicación de cada concepto de tu lista.' },
            { t: 'Relaciones', d: 'Conecta los conceptos: ¿qué irriga a qué?, ¿qué está al lado de qué?, ¿qué pasa si falla? Un mapa o una tabla sirven.' },
            { t: 'Recuperación activa', d: 'Cierra el material y escribe todo lo que recuerdes. Luego compara y completa con otro color.' },
            { t: 'Preguntas', d: 'Convierte cada concepto en una pregunta. Esas preguntas son tus flashcards.' },
            { t: 'Repaso espaciado', d: 'Repasa las preguntas en días separados (1, 3 y 7 días después), no todo el mismo día.' },
            { t: 'Simulación del parcial', d: 'Uno o dos días antes, responde preguntas con tiempo y sin mirar. Lo que falles es lo que repasas.' }
        ],
        errores: ['Subrayar todo.', 'Hacer resúmenes copiando el libro.', 'Dejar todo para la noche anterior.']
    },
    {
        id: 'lectura-activa', titulo: 'Lectura activa', duracion: '6 min',
        problema: 'Terminas de leer una página y no recuerdas qué decía.',
        idea: 'Leer activamente es leer con una tarea: buscar, marcar poco, preguntar y resumir con tus palabras.',
        cuando: ['Al leer la bibliografía recomendada o las presentaciones de clase.'],
        widget: 'lectura',
        pasos: [
            { t: 'Antes', d: 'Mira títulos y figuras. Pregúntate: ¿qué voy a aprender aquí?' },
            { t: 'Durante', d: 'Marca como máximo 3 ideas por párrafo y escribe una pregunta al margen.' },
            { t: 'Después', d: 'Sin mirar, resume el párrafo en una sola frase.' }
        ],
        errores: ['Releer como estrategia principal.', 'Subrayar antes de entender.']
    },
    {
        id: 'active-recall', titulo: 'Recuperación activa (Active Recall)', duracion: '5 min',
        problema: 'Reconocer una respuesta cuando la ves no es lo mismo que poder producirla en un examen.',
        idea: 'Cada vez que intentas recordar algo sin mirar, fortaleces ese recuerdo. Equivocarse durante la práctica también ayuda.',
        cuando: ['Después de estudiar un tema.', 'Todos los días, con pocas preguntas.'],
        widget: 'recall',
        pasos: [
            { t: 'Pregunta', d: 'Lee la pregunta y responde en tu cabeza o por escrito.' },
            { t: 'Compromiso', d: 'No revises la respuesta hasta haber intentado.' },
            { t: 'Comparación', d: 'Revela la respuesta y califícate con honestidad.' }
        ],
        errores: ['Mirar la respuesta "sólo para confirmar" antes de intentar.']
    },
    {
        id: 'repeticion-espaciada', titulo: 'Repetición espaciada', duracion: '5 min',
        problema: 'Lo que estudias en una sola sesión larga se olvida rápido.',
        idea: 'Repasar en días separados, con intervalos que se alargan, consolida más que repasar muchas veces el mismo día.',
        cuando: ['Para temas extensos, como anatomía por sistemas.'],
        widget: 'espaciado',
        pasos: [
            { t: 'Día 0', d: 'Estudias el tema.' },
            { t: 'Día 1', d: 'Primer repaso: corto, con preguntas.' },
            { t: 'Día 3', d: 'Segundo repaso.' },
            { t: 'Día 7', d: 'Tercer repaso.' },
            { t: 'Día 14', d: 'Cuarto repaso, o simulación del parcial si ya está cerca.' }
        ],
        errores: ['Repasar sólo lo que ya sabes.']
    },
    {
        id: 'elaboracion', titulo: 'Método de elaboración', duracion: '7 min',
        problema: 'Memorizas definiciones, pero no sabes explicarlas ni aplicarlas.',
        idea: 'Elaborar es hacerse preguntas sobre un concepto hasta conectarlo con lo que ya sabes.',
        cuando: ['Cuando un tema se siente como una lista de nombres sin sentido.'],
        widget: 'elaboracion',
        preguntas: ['¿Qué es?', '¿Cómo funciona?', '¿Por qué ocurre?', '¿Con qué se relaciona?', '¿Qué pasaría si se altera?'],
        pasos: [],
        errores: ['Responder copiando la definición del libro.']
    },
    {
        id: 'feynman', titulo: 'Técnica Feynman', duracion: '8 min',
        problema: 'Crees que entiendes un tema hasta que alguien te pide que lo expliques.',
        idea: 'Explica el concepto con palabras sencillas, como si hablaras con alguien que no estudia salud. Donde te trabes está lo que aún no entiendes.',
        cuando: ['Antes de un parcial oral o de una práctica en anfiteatro.'],
        widget: 'feynman',
        pasos: [
            { t: 'Elige', d: 'Un concepto concreto, no un capítulo entero.' },
            { t: 'Explica', d: 'Escríbelo con palabras sencillas y un ejemplo.' },
            { t: 'Detecta huecos', d: '¿Dónde usaste un término sin explicarlo? ¿Dónde dudaste?' },
            { t: 'Vuelve a la fuente', d: 'Revisa sólo esos huecos y vuelve a explicar.' }
        ],
        errores: ['Usar términos técnicos para "sonar bien" sin poder explicarlos.']
    },
    {
        id: 'mapas', titulo: 'Mapas conceptuales', duracion: '6 min',
        problema: 'Tienes la información, pero no ves cómo se conecta.',
        idea: 'Un mapa conceptual transforma un texto en conceptos unidos por palabras de enlace. Si no puedes nombrar la relación, todavía no la entiendes.',
        cuando: ['Temas de generalidades (el plan pide mapa conceptual en la sesión 3).'],
        widget: 'mapa',
        pasos: [
            { t: 'Conceptos', d: 'Extrae los conceptos del texto.' },
            { t: 'Jerarquía', d: 'Ubica el más general arriba.' },
            { t: 'Enlaces', d: 'Une con flechas y escribe la relación sobre cada flecha.' },
            { t: 'Revisión', d: 'Lee cada rama como una frase completa: ¿tiene sentido?' }
        ],
        errores: ['Flechas sin palabra de enlace.', 'Copiar párrafos dentro de los cuadros.']
    },
    {
        id: 'comparacion', titulo: 'Tablas comparativas', duracion: '6 min',
        problema: 'Confundes estructuras parecidas: tejidos, organelos, huesos, nervios.',
        idea: 'Una tabla obliga a comparar lo mismo en todas las estructuras. Las casillas vacías te muestran qué te falta.',
        cuando: ['Especialmente útil para tejidos, organelos, estructuras anatómicas y procesos biológicos.',
                 'En Morfología: el plan pide para casi todos los temas irrigación e inervación; esas son tus columnas.'],
        widget: 'tabla',
        pasos: [
            { t: 'Filas', d: 'Las estructuras que vas a comparar.' },
            { t: 'Columnas', d: 'Los mismos criterios para todas.' },
            { t: 'Llenado', d: 'Primero sin mirar; luego completa con otro color.' }
        ],
        errores: ['Criterios distintos para cada fila.']
    },
    {
        id: 'preparacion-parciales', titulo: 'Preparación para parciales', duracion: '5 min',
        problema: 'Llega la semana del parcial y no sabes por dónde empezar.',
        idea: 'Un plan de cuenta regresiva reparte el trabajo: comprender primero, practicar después y simular al final.',
        cuando: ['Apenas conozcas la fecha del parcial.'],
        widget: 'plan-parcial',
        pasos: [],
        errores: ['Estudiar temas nuevos la noche anterior.', 'No dormir antes del examen.']
    }
];
