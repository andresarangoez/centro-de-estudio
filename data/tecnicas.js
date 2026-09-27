/* ============================================================
   DATOS · APRENDE A ESTUDIAR
   Contenido explicativo de cada técnica (sin ejercicios).

   Campos:
     problema   qué dificultad resuelve
     idea       la técnica en una frase
     porque     por qué funciona (párrafos)
     pasos      cómo se hace [{ t, d }]
     visual     ilustración fija (js/modules/aprende.js → V)
     ejemplo    { titulo, texto:[…] | lista:[…] } aplicado a las asignaturas
     cuando     cuándo usarla
     errores    errores frecuentes
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

CE.datos.tecnicas = [
    {
        id: 'estudiar-parcial', titulo: 'Cómo estudiar y prepararte para un parcial', duracion: '8 min de lectura',
        problema: 'Leer muchas veces el mismo material se siente productivo, pero no garantiza que puedas responder en el examen. Y cuando llega la semana del parcial, no sabes por dónde empezar.',
        idea: 'Prepararse para un parcial es un proceso por fases que empieza desde la primera clase: primero entiendes, después relacionas y al final practicas sacar la información de tu memoria.',
        porque: [
            'Releer y subrayar dan una sensación de dominio porque el texto se vuelve familiar, pero reconocer algo no es lo mismo que poder explicarlo o responderlo sin ayuda.',
            'El examen te pide recuperar información de memoria. Por eso la preparación debe terminar con práctica de recuperación (preguntas, flashcards, simulaciones) y no con más lectura.',
            'Repartir el estudio en varios días rinde más que concentrarlo la noche anterior: cada vez que vuelves a un tema después de unos días, lo consolidas.'
        ],
        pasos: [
            { t: 'Lectura inicial', d: 'Una lectura rápida para ver el mapa del tema: títulos, figuras y palabras en negrita. Todavía no subrayes.' },
            { t: 'Identifica conceptos', d: 'Haz una lista corta de los conceptos clave (máximo 10). Si todo te parece importante, pregúntate qué preguntaría la docente.' },
            { t: 'Segunda lectura', d: 'Ahora sí, lee despacio buscando la explicación de cada concepto de tu lista.' },
            { t: 'Relaciones', d: 'Conecta los conceptos: ¿qué irriga a qué?, ¿qué está al lado de qué?, ¿qué pasa si falla? Un mapa o una tabla sirven.' },
            { t: 'Recuperación activa', d: 'Cierra el material y escribe todo lo que recuerdes. Luego compara y completa con otro color.' },
            { t: 'Preguntas', d: 'Convierte cada concepto en una pregunta. Esas preguntas son tus flashcards.' },
            { t: 'Repaso espaciado', d: 'Repasa las preguntas en días separados (1, 3 y 7 días después), no todo el mismo día.' },
            { t: 'Simulación del parcial', d: 'Uno o dos días antes, responde preguntas con tiempo y sin mirar. Lo que falles es lo que repasas.' }
        ],
        visual: 'cuenta-regresiva',
        cuando: ['Desde la primera clase del tema, no la semana del parcial.', 'Apenas conozcas la fecha del parcial, arma la cuenta regresiva.', 'Sirve para cualquier asignatura del semestre.'],
        errores: ['Subrayar todo.', 'Hacer resúmenes copiando el libro.', 'Estudiar temas nuevos la noche anterior.', 'Trasnochar antes del examen: el sueño consolida lo estudiado.']
    },
    {
        id: 'pomodoro', titulo: 'Técnica Pomodoro', duracion: '5 min de lectura',
        problema: 'Te sientas a estudiar y a los pocos minutos estás en el celular, o estudias horas seguidas y al final ya no rindes.',
        idea: 'Trabajar en bloques cortos de concentración total, separados por pausas breves y planeadas.',
        porque: [
            'Un bloque con inicio y fin claros es más fácil de empezar: "sólo 25 minutos" vence la tentación de posponer.',
            'Durante el bloque la regla es una sola tarea y cero interrupciones. Eso protege la atención, que se pierde cada vez que miras una notificación.',
            'Las pausas no son tiempo perdido: evitan la fatiga y hacen que el último bloque del día rinda casi como el primero.',
            'Contar pomodoros te muestra cuánto estudiaste de verdad, que suele ser menos que el tiempo que pasaste "sentado estudiando".'
        ],
        pasos: [
            { t: 'Elige una tarea concreta', d: 'No "estudiar anatomía", sino "hacer las flashcards de pares craneanos" o "leer pleura y pulmones".' },
            { t: 'Pon el temporizador', d: '25 minutos es lo clásico. Si ya te concentras bien, usa 45 o 60.' },
            { t: 'Trabaja sin interrupciones', d: 'Celular lejos o en modo avión. Si te acuerdas de algo pendiente, anótalo en un papel y sigue.' },
            { t: 'Pausa corta', d: '5 minutos (10 si el bloque fue largo). Levántate, toma agua, estírate. Evita las redes: la pausa se alarga sin que lo notes.' },
            { t: 'Pausa larga', d: 'Cada 4 pomodoros, descansa entre 15 y 30 minutos.' }
        ],
        visual: 'pomodoro',
        ejemplo: {
            titulo: 'Una tarde de estudio con pomodoros',
            lista: [
                'Pomodoro 1 · Lectura inicial y lista de conceptos de "Corazón".',
                'Pomodoro 2 · Segunda lectura: cavidades y válvulas.',
                'Pomodoro 3 · Tabla comparativa de las cavidades cardíacas.',
                'Pomodoro 4 · Flashcards sin mirar. Pausa larga.',
                'Pomodoro 5 · Láminas de identificación del tema.'
            ]
        },
        enlace: { href: '#/sesion', texto: 'Abrir el Modo estudio con temporizador' },
        cuando: ['Cuando te cuesta empezar o te distraes fácil.', 'En tardes largas de estudio, para no agotarte.', 'Combinada con cualquier otra técnica: el pomodoro organiza el tiempo, la técnica organiza el contenido.'],
        errores: ['Empezar sin una tarea definida.', 'Revisar el celular "un momentico" durante el bloque.', 'Saltarse las pausas porque "vas bien": el cansancio llega igual.', 'Alargar la pausa corta a 30 minutos.']
    },
    {
        id: 'lectura-activa', titulo: 'Lectura activa', duracion: '5 min de lectura',
        problema: 'Terminas de leer una página y no recuerdas qué decía.',
        idea: 'Leer activamente es leer con una tarea: buscar respuestas, marcar poco, hacerse preguntas y resumir con tus palabras.',
        porque: [
            'Leer de corrido deja el texto en la memoria sólo como algo "familiar". Cuando lees buscando una respuesta, tu cerebro procesa el contenido en lugar de sólo pasar los ojos.',
            'Marcar poco obliga a decidir qué es lo esencial, y decidir ya es aprender.',
            'Resumir sin mirar te muestra de inmediato qué entendiste y qué no.'
        ],
        pasos: [
            { t: 'Antes', d: 'Mira títulos y figuras. Pregúntate: ¿qué voy a aprender aquí?' },
            { t: 'Durante', d: 'Marca como máximo 3 ideas por párrafo y escribe una pregunta al margen.' },
            { t: 'Después', d: 'Sin mirar, resume cada sección en una sola frase.' }
        ],
        visual: 'comparar-lectura',
        ejemplo: {
            titulo: 'Leyendo sobre la posición anatómica',
            texto: [
                'Antes de leer te preguntas: ¿para qué sirve la posición anatómica y qué planos existen?',
                'Mientras lees marcas sólo tres ideas: la persona de pie mirando al frente con las palmas hacia adelante; los tres planos (sagital, coronal y transversal); y que toda descripción asume esa posición aunque el paciente esté acostado. Al margen escribes: "¿qué plano separa anterior de posterior?".',
                'Al terminar, sin mirar, escribes: "La posición anatómica es la referencia para describir el cuerpo; desde ella se trazan los planos sagital, coronal y transversal".'
            ]
        },
        cuando: ['Al leer la bibliografía recomendada o las presentaciones de clase.', 'En el paso 02 · Comprende de cada tema.'],
        errores: ['Releer como estrategia principal.', 'Subrayar antes de entender.', 'Pasar a la siguiente página sin poder resumir la anterior.']
    },
    {
        id: 'active-recall', titulo: 'Recuperación activa (Active Recall)', duracion: '5 min de lectura',
        problema: 'Reconocer una respuesta cuando la ves no es lo mismo que poder producirla en un examen.',
        idea: 'Cada vez que intentas recordar algo sin mirar, fortaleces ese recuerdo. Equivocarse durante la práctica también ayuda.',
        porque: [
            'Recordar no es sólo "sacar" la información: el esfuerzo de buscarla en la memoria la deja mejor guardada para la próxima vez.',
            'Cuando te equivocas y luego ves la respuesta correcta, la corrección se recuerda mejor que si sólo la hubieras leído.',
            'Además, te muestra con honestidad qué sabes y qué no, antes de que te lo muestre el parcial.'
        ],
        pasos: [
            { t: 'Pregunta', d: 'Lee la pregunta y responde en tu cabeza o, mejor, por escrito.' },
            { t: 'Compromiso', d: 'No revises la respuesta hasta haber intentado, aunque tu respuesta sea incompleta.' },
            { t: 'Comparación', d: 'Revela la respuesta y califícate con honestidad: la sabía, a medias o no la sabía.' },
            { t: 'Repite lo difícil', d: 'Las que fallaste vuelven otro día, no cinco minutos después.' }
        ],
        ejemplo: {
            titulo: 'Así se ve una ronda',
            lista: [
                'Pregunta: ¿qué plano divide el cuerpo en una parte anterior y una posterior? · Respuesta: el plano coronal o frontal.',
                'Pregunta: ¿cuál es la función principal de la mitocondria? · Respuesta: producir la mayor parte del ATP de la célula mediante la respiración celular.',
                'Pregunta: en la posición anatómica, ¿hacia dónde miran las palmas? · Respuesta: hacia adelante.'
            ]
        },
        cuando: ['Después de estudiar un tema.', 'Todos los días, con pocas preguntas.', 'En la plataforma: paso 05 · Recuerda (flashcards) y la sección Practicar.'],
        errores: ['Mirar la respuesta "sólo para confirmar" antes de intentar.', 'Repasar sólo las preguntas que ya sabes.']
    },
    {
        id: 'repeticion-espaciada', titulo: 'Repetición espaciada', duracion: '4 min de lectura',
        problema: 'Lo que estudias en una sola sesión larga se olvida rápido.',
        idea: 'Repasar en días separados, con intervalos que se alargan, consolida más que repasar muchas veces el mismo día.',
        porque: [
            'Olvidamos rápido lo recién aprendido. Cada repaso, justo cuando empieza el olvido, hace que el recuerdo dure más que el anterior.',
            'Por eso los intervalos crecen: al principio necesitas volver pronto; después, cada vez más tarde.',
            'Tres repasos cortos en días distintos rinden más que tres horas seguidas el mismo día.'
        ],
        pasos: [
            { t: 'Día 0', d: 'Estudias el tema.' },
            { t: 'Día 1', d: 'Primer repaso: corto, con preguntas.' },
            { t: 'Día 3', d: 'Segundo repaso.' },
            { t: 'Día 7', d: 'Tercer repaso.' },
            { t: 'Día 14', d: 'Cuarto repaso, o simulación del parcial si ya está cerca.' }
        ],
        visual: 'linea-espaciado',
        cuando: ['Para temas extensos, como anatomía por sistemas.', 'Si el parcial está cerca, acorta los intervalos pero no los elimines.'],
        errores: ['Repasar sólo lo que ya sabes.', 'Repasar releyendo en lugar de responder preguntas.']
    },
    {
        id: 'elaboracion', titulo: 'Método de elaboración', duracion: '5 min de lectura',
        problema: 'Memorizas definiciones, pero no sabes explicarlas ni aplicarlas.',
        idea: 'Elaborar es hacerse preguntas sobre un concepto hasta conectarlo con lo que ya sabes.',
        porque: [
            'Un dato aislado se olvida; un dato conectado con otros tiene varios "caminos" para ser recordado.',
            'Preguntarte por qué y cómo te obliga a entender el mecanismo, que es lo que después te permite razonar un caso clínico.'
        ],
        pasos: [
            { t: '¿Qué es?', d: 'Defínelo con tus palabras.' },
            { t: '¿Cómo funciona?', d: 'Describe el mecanismo o la estructura.' },
            { t: '¿Por qué ocurre?', d: 'Busca la causa o la razón.' },
            { t: '¿Con qué se relaciona?', d: 'Conéctalo con otros temas o sistemas.' },
            { t: '¿Qué pasaría si se altera?', d: 'Piensa en la consecuencia clínica.' }
        ],
        ejemplo: {
            titulo: 'Elaborando "pleura"',
            lista: [
                '¿Qué es? Una membrana serosa que recubre el pulmón (visceral) y la pared del tórax (parietal).',
                '¿Cómo funciona? Entre las dos hojas hay una cavidad con una capa fina de líquido que permite que el pulmón se deslice al respirar.',
                '¿Con qué se relaciona? Con la mecánica de la respiración y la pared torácica.',
                '¿Qué pasaría si se altera? Si entra aire a la cavidad pleural (neumotórax), el pulmón pierde su expansión.'
            ]
        },
        cuando: ['Cuando un tema se siente como una lista de nombres sin sentido.', 'En el paso 03 · Relaciona de cada tema.'],
        errores: ['Responder copiando la definición del libro.', 'Saltarse el "¿qué pasaría si…?", que es lo que más se pregunta en enfermería.']
    },
    {
        id: 'feynman', titulo: 'Técnica Feynman', duracion: '5 min de lectura',
        problema: 'Crees que entiendes un tema hasta que alguien te pide que lo expliques.',
        idea: 'Explica el concepto con palabras sencillas, como si hablaras con alguien que no estudia salud. Donde te trabes está lo que aún no entiendes.',
        porque: [
            'Explicar en voz alta o por escrito revela los huecos que la lectura esconde.',
            'Si sólo puedes explicarlo con términos técnicos, probablemente lo memorizaste sin entenderlo.',
            'En enfermería, además, vas a explicarle cosas a pacientes y familias todos los días: es una habilidad profesional.'
        ],
        pasos: [
            { t: 'Elige', d: 'Un concepto concreto, no un capítulo entero.' },
            { t: 'Explica', d: 'Escríbelo o dilo en voz alta con palabras sencillas y un ejemplo.' },
            { t: 'Detecta huecos', d: '¿Dónde usaste un término sin explicarlo? ¿Dónde dudaste?' },
            { t: 'Vuelve a la fuente', d: 'Revisa sólo esos huecos y vuelve a explicar.' }
        ],
        ejemplo: {
            titulo: 'Explicando la posición anatómica a un familiar',
            texto: ['"Imagina a una persona de pie, mirando al frente, con los brazos a los lados y las palmas hacia adelante. Los médicos y enfermeros usan siempre esa postura como punto de referencia para decir dónde está cada cosa, aunque el paciente esté acostado. Así, cuando alguien dice \'por encima\' o \'por delante\', todos entendemos lo mismo."']
        },
        cuando: ['Antes de un parcial oral o de una práctica en anfiteatro.', 'Cuando estudias en grupo: turnense para explicar.'],
        errores: ['Usar términos técnicos para "sonar bien" sin poder explicarlos.', 'Explicar el capítulo entero en vez de un concepto.']
    },
    {
        id: 'mapas', titulo: 'Mapas conceptuales', duracion: '5 min de lectura',
        problema: 'Tienes la información, pero no ves cómo se conecta.',
        idea: 'Un mapa conceptual transforma un texto en conceptos unidos por palabras de enlace. Si no puedes nombrar la relación, todavía no la entiendes.',
        porque: [
            'Obliga a jerarquizar: decidir qué es general y qué es específico.',
            'La palabra de enlace sobre cada flecha convierte cada rama en una frase que se puede leer y comprobar.',
            'Una imagen organizada se recuerda mejor que un párrafo.'
        ],
        pasos: [
            { t: 'Conceptos', d: 'Extrae los conceptos del texto.' },
            { t: 'Jerarquía', d: 'Ubica el más general arriba y los específicos debajo.' },
            { t: 'Enlaces', d: 'Une con flechas y escribe la relación sobre cada flecha.' },
            { t: 'Revisión', d: 'Lee cada rama como una frase completa: ¿tiene sentido?' }
        ],
        visual: 'mapa',
        cuando: ['Temas de generalidades (el plan pide mapa conceptual en la sesión 3).', 'Para ver un sistema completo antes de entrar al detalle.'],
        errores: ['Flechas sin palabra de enlace.', 'Copiar párrafos dentro de los cuadros.']
    },
    {
        id: 'comparacion', titulo: 'Tablas comparativas', duracion: '4 min de lectura',
        problema: 'Confundes estructuras parecidas: tejidos, organelos, huesos, nervios.',
        idea: 'Una tabla obliga a comparar lo mismo en todas las estructuras. Las casillas vacías te muestran qué te falta.',
        porque: [
            'Las confusiones aparecen entre cosas parecidas. Ponerlas lado a lado con los mismos criterios hace visibles las diferencias.',
            'Llenarla primero sin mirar convierte la tabla en práctica de recuperación.'
        ],
        pasos: [
            { t: 'Filas', d: 'Las estructuras que vas a comparar.' },
            { t: 'Columnas', d: 'Los mismos criterios para todas (en Morfología: ubicación, irrigación, inervación, función).' },
            { t: 'Llenado', d: 'Primero sin mirar; luego completa con otro color lo que faltó.' }
        ],
        visual: 'tabla',
        cuando: ['Especialmente útil para tejidos, organelos, estructuras anatómicas y procesos biológicos.', 'En Morfología: el plan pide para casi todos los temas irrigación e inervación; esas son tus columnas.'],
        errores: ['Criterios distintos para cada fila.', 'Copiar la tabla del libro en vez de construirla.']
    }
];
