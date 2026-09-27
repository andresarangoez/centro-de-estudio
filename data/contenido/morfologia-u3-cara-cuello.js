/* ============================================================
   CONTENIDO · Morfología · Unidad III · Cara y cuello
   Elaborado a partir de: Taller Cuello, laringe y faringe
   (Dr. Ariel Murcia, Facultad de Enfermería FUCS) y Guía de estudio
   Cráneo–columna–SN (Cátedra de Morfología FUCS). Ilustraciones:
   Netter / Machado. Para Cara no hay presentación en el material
   entregado: el contenido se basa en Moore y debe validarse con
   la clase de la docente.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/cabeza-cuello/';
    var F_TC = 'Taller Cuello, laringe y faringe, Dr. Ariel Murcia (Facultad de Enfermería FUCS). Ilustraciones: Netter';
    var F_GUIA = 'Guía de estudio Cráneo, columna y sistema nervioso, Cátedra de Morfología FUCS (ilustraciones Netter)';

    /* ---------------- CARA ---------------- */
    CE.contenido('cara', {
        revisado: false,
        prerrequisitos: ['Huesos del viscerocráneo (cráneo).', 'Pares craneales V (trigémino) y VII (facial).'],
        ideaPrincipal: 'La cara tiene un esqueleto de 14 huesos cubierto por músculos de la expresión facial, que se insertan en la piel. El nervio facial (VII) los mueve y el trigémino (V) da la sensibilidad; la arteria facial y la temporal superficial la irrigan.',
        secciones: [
            { titulo: 'Esqueleto de la cara',
              texto: 'Maxilares, cigomáticos (malares), nasales, lagrimales (unguis), palatinos, cornetes inferiores, vómer y mandíbula. La mandíbula es el único hueso móvil del cráneo: se articula con el temporal en la articulación temporomandibular (condílea).' },
            { titulo: 'Músculos',
              tabla: { columnas: ['Grupo', 'Músculos', 'Inervación'],
                       filas: [['Expresión facial (cutáneos)', 'Occipitofrontal, orbicular de los ojos, orbicular de la boca, cigomático mayor y menor, buccinador, risorio, depresores y elevadores del labio, platisma', 'Nervio facial (VII)'],
                               ['Masticación', 'Masetero, temporal, pterigoideos medial y lateral', 'Nervio mandibular (V3), rama del trigémino']] } },
            { titulo: 'Inervación sensitiva: el trigémino',
              lista: ['V1, oftálmico: frente, párpado superior y dorso de la nariz.',
                      'V2, maxilar: mejilla, párpado inferior, labio superior.',
                      'V3, mandibular: mentón, labio inferior, parte de la región temporal.'] },
            { titulo: 'Irrigación y drenaje',
              lista: ['Arteria facial (rama de la carótida externa): cruza el borde de la mandíbula por delante del masetero, donde se palpa su pulso, y sube hacia el ángulo del ojo.',
                      'Arteria temporal superficial (rama terminal de la carótida externa): su pulso se palpa por delante de la oreja.',
                      'Vena facial: drena a la yugular interna. Se comunica con el seno cavernoso a través de las venas oftálmicas y no tiene válvulas eficaces.'] }
        ],
        figuras: [
            { src: R + 'guia-craneo-anterior.jpg', alt: 'Vista anterior del cráneo con huesos de la cara', pie: 'Huesos de la cara en vista anterior.', fuente: F_GUIA },
            { src: R + 'guia-craneo-lateral.jpg', alt: 'Vista lateral del cráneo', pie: 'Vista lateral: maxilar, mandíbula, cigomático y temporal.', fuente: F_GUIA }
        ],
        enfermeria: [
            'El "triángulo peligroso de la cara" (desde la raíz de la nariz hasta las comisuras de la boca): una infección allí puede llegar al seno cavernoso por la vena facial. No se deben manipular lesiones en esa zona.',
            'Los pulsos facial y temporal superficial son sitios alternativos para valorar pulso cuando no hay acceso a otros.',
            'La valoración del VII par (sonreír, cerrar los ojos) y del V (sensibilidad, masticación) es parte del examen de la cara.'
        ],
        errores: ['Atribuir los músculos de la masticación al nervio facial: son del trigémino.', 'Pensar que la mandíbula es fija: es el único hueso móvil del cráneo.'],
        loQueDebesSaber: ['Huesos de la cara.', 'Músculos de la expresión y de la masticación con su inervación.', 'Territorios sensitivos del trigémino.', 'Arterias facial y temporal superficial.'],
        minicaso: {
            situacion: 'Un joven se exprime un grano infectado en el labio superior, cerca de la nariz. Dos días después tiene fiebre, dolor de cabeza y el párpado hinchado.',
            preguntas: ['¿Por qué esta zona se llama "triángulo peligroso"?', '¿Qué vena comunica la cara con el seno cavernoso?', '¿Qué educación le darías?']
        },
        fuente: 'Guía de estudio Cráneo–columna–SN (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- CUELLO ---------------- */
    CE.contenido('cuello', {
        revisado: false,
        prerrequisitos: ['Vértebras cervicales.', 'Pares craneales IX a XII.'],
        ideaPrincipal: 'El esternocleidomastoideo divide cada lado del cuello en un triángulo anterior y uno posterior. Conocer qué hay en cada triángulo permite ubicar la carótida, la yugular, la tiroides y la vía aérea, todas estructuras vitales para enfermería.',
        secciones: [
            { titulo: 'Músculos del cuello',
              tabla: { columnas: ['Músculo o grupo', 'Ubicación', 'Acción e inervación'],
                       filas: [['Platisma', 'Superficial, bajo la piel', 'Tensa la piel del cuello; facial (VII)'],
                               ['Esternocleidomastoideo (ECM)', 'Del esternón y clavícula a la apófisis mastoides', 'Gira la cabeza al lado contrario y flexiona el cuello; accesorio (XI)'],
                               ['Trapecio', 'Posterior', 'Eleva el hombro; accesorio (XI)'],
                               ['Suprahioideos', 'Por encima del hioides: digástrico, estilohioideo, milohioideo, genihioideo', 'Elevan el hioides y la laringe al deglutir'],
                               ['Infrahioideos ("en cinta")', 'Por debajo del hioides: esternohioideo, omohioideo, esternotiroideo, tirohioideo', 'Descienden el hioides y la laringe'],
                               ['Escalenos', 'Laterales, de vértebras cervicales a las costillas 1–2', 'Elevan las costillas (músculos accesorios de la respiración)']] } },
            { titulo: 'Triángulos del cuello',
              tabla: { columnas: ['Triángulo', 'Límites', 'Contenido principal'],
                       filas: [['Anterior', 'Línea media, borde anterior del ECM y borde de la mandíbula', 'Se subdivide en: submandibular (glándula submandibular), submentoniano, carotídeo (bifurcación de la carótida, yugular interna, vago) y muscular (laringe, tráquea, tiroides, infrahioideos)'],
                               ['Posterior', 'Borde posterior del ECM, borde del trapecio y clavícula', 'Se subdivide en occipital y omoclavicular (supraclavicular), donde están los vasos subclavios y el plexo braquial; nervio accesorio']] } },
            { titulo: 'Vasos del cuello',
              lista: ['Arteria carótida común: sube por el triángulo carotídeo dentro de la vaina carotídea, junto a la vena yugular interna (lateral) y el nervio vago (posterior).',
                      'A la altura del borde superior del cartílago tiroides (C4) se divide en carótida interna (sin ramas en el cuello, va al encéfalo) y carótida externa (irriga cara y cuello; ramas: tiroidea superior, lingual, facial, faríngea ascendente, occipital, auricular posterior; terminales: maxilar y temporal superficial).',
                      'Seno carotídeo en la bifurcación: detecta cambios de presión arterial.',
                      'Vena yugular interna: drena el encéfalo y la cara. Vena yugular externa: superficial, cruza el ECM y es visible en la ingurgitación yugular.',
                      'Arteria y vena subclavias en la base del cuello (triángulo omoclavicular).'] },
            { titulo: 'Glándula tiroides',
              texto: 'Dos lóbulos unidos por el istmo, que se ubica delante de los anillos traqueales 2 a 4. Está debajo del cartílago tiroides. Detrás de ella están las glándulas paratiroides (regulan el calcio) y cerca pasa el nervio laríngeo recurrente (voz).' }
        ],
        figuras: [
            { src: R + 'cuello-vasos-nervios.jpg', alt: 'Vasos y nervios del cuello en vista lateral', pie: 'Vasos y nervios del cuello: carótida y ramas, yugular, nervios.', fuente: F_TC },
            { src: R + 'lamina-tiroides.jpg', alt: 'Proyección de laringe, tiroides y tráquea en el cuello', pie: 'Cartílago tiroides, glándula tiroides y tráquea en el cuello.', fuente: F_TC }
        ],
        enfermeria: [
            'El pulso carotídeo se palpa en el borde anterior del ECM a la altura del cartílago tiroides; nunca se palpan las dos carótidas a la vez.',
            'La ingurgitación de la yugular externa con el paciente a 45° sugiere aumento de la presión venosa central (por ejemplo, en falla cardíaca).',
            'El catéter venoso central yugular se inserta en la vena yugular interna, en el triángulo formado por las dos cabezas del ECM.',
            'Después de una tiroidectomía se vigila la voz (nervio laríngeo recurrente) y signos de hipocalcemia (paratiroides).'
        ],
        errores: ['Pensar que la carótida interna da ramas en el cuello: no da ninguna.', 'Confundir triángulo carotídeo (anterior) con omoclavicular (posterior).'],
        loQueDebesSaber: ['Músculos del cuello y su inervación.', 'Triángulos anterior y posterior con sus subdivisiones y contenido.', 'Bifurcación carotídea y ramas de la carótida externa.', 'Ubicación de la tiroides y sus relaciones.'],
        laminas: [
            { id: 'cu-lat', src: R + 'lamina-cuello-lateral.jpg', titulo: 'Cuello, vista lateral (4 a 7)', fuente: F_TC,
              marcas: [{ n: '4', r: 'Músculo omohioideo' }, { n: '5', r: 'Músculo esternocleidomastoideo' }, { n: '6', r: 'Músculo digástrico (vientre anterior)' }, { n: '7', r: 'Músculo esternohioideo' }],
              distractores: ['Trapecio', 'Escaleno anterior'] },
            { id: 'cu-ant', src: R + 'lamina-cuello-anterior.jpg', titulo: 'Cuello, vista anterior (8 y 10)', fuente: F_TC + '. Los números 8A, 9 y 10A se revisan con la docente.',
              marcas: [{ n: '8', r: 'Hueso hioides' }, { n: '10', r: 'Vena yugular interna' }],
              distractores: ['Arteria carótida común', 'Cartílago tiroides'] },
            { id: 'cu-tiroides', src: R + 'lamina-tiroides.jpg', titulo: 'Tiroides y vía aérea (23 a 25)', fuente: F_TC,
              marcas: [{ n: '23', r: 'Cartílago tiroides' }, { n: '24', r: 'Glándula tiroides' }, { n: '25', r: 'Tráquea' }],
              distractores: ['Cartílago cricoides', 'Esófago'] }
        ],
        minicaso: {
            situacion: 'Un paciente con falla cardíaca está sentado a 45°. Observas una vena del cuello muy distendida que late.',
            preguntas: ['¿Qué vena superficial estás observando?', '¿Qué músculo cruza esa vena?', '¿Dónde palparías el pulso carotídeo y qué precaución tendrías?']
        },
        fuente: 'Taller Cuello, laringe y faringe (A. Murcia, FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- LARINGE Y FARINGE ---------------- */
    CE.contenido('laringe-faringe', {
        revisado: false,
        prerrequisitos: ['Cuello: ubicación del hioides y la tráquea.', 'Pares craneales IX y X.'],
        ideaPrincipal: 'La faringe es un tubo común para el aire y los alimentos, dividido en nasofaringe, orofaringe y laringofaringe. La laringe, delante de la laringofaringe, es un órgano de cartílagos que protege la vía aérea y produce la voz.',
        secciones: [
            { titulo: 'Faringe',
              tabla: { columnas: ['Porción', 'Límites', 'Estructuras'],
                       filas: [['Nasofaringe', 'Detrás de las fosas nasales, encima del paladar blando', 'Orificio de la trompa auditiva, amígdala faríngea (adenoides), amígdalas tubáricas'],
                               ['Orofaringe', 'Detrás de la boca, del paladar blando a la epiglotis', 'Amígdalas palatinas, amígdala lingual'],
                               ['Laringofaringe', 'Detrás de la laringe, hasta el esófago (C6)', 'Recesos piriformes a los lados de la laringe']] },
              texto: ['Anillo linfático de la faringe (de Waldeyer): amígdala faríngea, amígdalas tubáricas, palatinas y lingual; protege la entrada de la vía aérea y digestiva.',
                      'Músculos: constrictores superior, medio e inferior. Inervación: plexo faríngeo (IX y X). Irrigación: ramas de la carótida externa.'] },
            { titulo: 'Laringe: cartílagos',
              tabla: { columnas: ['Cartílago', 'Tipo', 'Rasgos'],
                       filas: [['Tiroides', 'Impar', 'El más grande; forma la prominencia laríngea ("manzana de Adán")'],
                               ['Cricoides', 'Impar', 'Anillo completo, en forma de sello; está a nivel de C6'],
                               ['Epiglotis', 'Impar', 'Como una hoja; cierra la entrada de la laringe al deglutir'],
                               ['Aritenoides', 'Par', 'Sobre el cricoides; en ellos se fijan las cuerdas vocales y los mueven'],
                               ['Corniculados y cuneiformes', 'Pares', 'Pequeños, en los pliegues aritenoepiglóticos']] } },
            { titulo: 'Laringe: membranas, cavidad y función',
              lista: ['Membrana tirohioidea: une el hioides al cartílago tiroides. Ligamento (membrana) cricotiroideo: entre tiroides y cricoides.',
                      'Cavidad: vestíbulo, pliegues vestibulares (cuerdas falsas), ventrículo y pliegues vocales (cuerdas verdaderas).',
                      'La glotis (cuerdas vocales y el espacio entre ellas, rima glótica) es la parte más estrecha de la laringe.',
                      'Funciones: proteger la vía aérea (cierre durante la deglución y reflejo de tos), producir la voz (fonación) y permitir el paso del aire.'] },
            { titulo: 'Irrigación e inervación de la laringe',
              lista: ['Arterias laríngeas superior e inferior (de las tiroideas superior e inferior).',
                      'Nervio laríngeo superior (rama del vago): sensibilidad por encima de las cuerdas y músculo cricotiroideo.',
                      'Nervio laríngeo recurrente (rama del vago): todos los demás músculos intrínsecos y sensibilidad por debajo de las cuerdas. Su lesión produce disfonía.'] }
        ],
        figuras: [
            { src: R + 'faringe-posterior.jpg', alt: 'Faringe abierta por detrás', pie: 'Faringe abierta por su cara posterior.', fuente: F_TC },
            { src: R + 'laringe-musculos.jpg', alt: 'Músculos intrínsecos de la laringe', pie: 'Músculos intrínsecos de la laringe.', fuente: F_TC }
        ],
        enfermeria: [
            'La cricotiroidotomía de urgencia se hace a través del ligamento cricotiroideo, palpable entre los cartílagos tiroides y cricoides.',
            'La maniobra de Sellick (presión sobre el cricoides) usa el único anillo completo de la vía aérea para ocluir el esófago.',
            'En la aspiración de secreciones por boca, estimular la orofaringe desencadena el reflejo nauseoso (IX y X).',
            'La disfonía después de una cirugía de tiroides puede indicar lesión del nervio laríngeo recurrente: se reporta.'
        ],
        errores: ['Confundir la faringe (conducto común) con la laringe (sólo vía aérea).', 'Pensar que el cricoides es abierto como los anillos traqueales: es un anillo completo.'],
        loQueDebesSaber: ['Tres porciones de la faringe y sus estructuras.', 'Anillo linfático de la faringe.', 'Cartílagos de la laringe.', 'Pliegues vocales, glotis y nervios laríngeos.'],
        laminas: [
            { id: 'la-sag', src: R + 'lamina-faringe-sagital.jpg', titulo: 'Faringe, corte sagital (17 a 19)', fuente: F_TC + '. El número 18A se revisa con la docente.',
              marcas: [{ n: '17', r: 'Amígdala faríngea (adenoides)' }, { n: '18', r: 'Orificio de la trompa auditiva' }, { n: '19', r: 'Amígdala palatina' }],
              distractores: ['Epiglotis', 'Paladar blando'] },
            { id: 'la-ant', src: R + 'lamina-laringe-anterior.jpg', titulo: 'Laringe, vista anterior (26 a 28)', fuente: F_TC + '. El número 27A se revisa con la docente.',
              marcas: [{ n: '26', r: 'Hueso hioides' }, { n: '26A', r: 'Membrana tirohioidea' }, { n: '27', r: 'Cartílago tiroides' }, { n: '28', r: 'Cartílago cricoides' }],
              distractores: ['Epiglotis', 'Tráquea'] },
            { id: 'la-post', src: R + 'lamina-laringe-posterior.jpg', titulo: 'Laringe, vista posterior (29, 30 y 31)', fuente: F_TC,
              marcas: [{ n: '29', r: 'Epiglotis' }, { n: '30', r: 'Cartílago aritenoides' }, { n: '31', r: 'Cartílago cricoides (lámina)' }],
              distractores: ['Cartílago tiroides', 'Hueso hioides'] }
        ],
        minicaso: {
            situacion: 'Un niño de 4 años ronca mucho, respira por la boca y tiene otitis frecuentes.',
            preguntas: ['¿Qué amígdala crecida explicaría la respiración bucal?', '¿En qué porción de la faringe está?', '¿Qué estructura cercana, al obstruirse, explicaría las otitis?']
        },
        fuente: 'Taller Cuello, laringe y faringe (A. Murcia, FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PREGUNTAS (35–40 son del propio taller) ---------------- */
    CE.agregar('preguntas', [
        { id: 'cc-01', tema: 'cuello', subtema: 'Estructuras según los triángulos del cuello', tipo: 'multiple', revisado: false,
          enunciado: 'En el triángulo muscular se localiza:', opciones: ['La laringe', 'La tráquea cervical', 'La glándula tiroides', 'Los músculos infrahioideos', 'Todos los anteriores'], correcta: 4,
          explicacion: 'Pregunta 35 del taller: todas esas estructuras están en el triángulo muscular.' },
        { id: 'cc-02', tema: 'cuello', subtema: 'Irrigación', tipo: 'multiple', revisado: false,
          enunciado: 'Los vasos subclavios se localizan en el triángulo:', opciones: ['Muscular', 'Omoclavicular', 'Carotídeo', 'Submandibular', 'Occipital'], correcta: 1,
          explicacion: 'Pregunta 36 del taller: el omoclavicular o supraclavicular, en la parte baja del triángulo posterior.' },
        { id: 'cc-03', tema: 'laringe-faringe', subtema: 'Faringe: estructuras', tipo: 'multiple', revisado: false,
          enunciado: 'El receso piriforme es un accidente situado en:', opciones: ['La nasofaringe', 'La orofaringe', 'La laringofaringe', 'La laringe', 'La tráquea cervical'], correcta: 2,
          explicacion: 'Pregunta 37 del taller: los recesos piriformes están a los lados de la laringe, en la laringofaringe.' },
        { id: 'cc-04', tema: 'laringe-faringe', subtema: 'Faringe: estructuras', tipo: 'multiple', revisado: false,
          enunciado: 'El anillo linfático de la faringe está constituido por:', opciones: ['La amígdala faríngea', 'Las amígdalas tubáricas', 'Las amígdalas palatinas', 'La amígdala lingual', 'Todas las anteriores'], correcta: 4,
          explicacion: 'Pregunta 38 del taller: el anillo de Waldeyer incluye todas.' },
        { id: 'cc-05', tema: 'laringe-faringe', subtema: 'Laringe: cartílagos y membranas', tipo: 'multiple', revisado: false,
          enunciado: 'La glotis es la parte más estrecha de:', opciones: ['La faringe', 'La laringe', 'El esófago', 'El ciego', 'La tráquea'], correcta: 1,
          explicacion: 'Pregunta 39 del taller.' },
        { id: 'cc-06', tema: 'cuello', subtema: 'Irrigación', tipo: 'multiple', revisado: false,
          enunciado: 'Es una rama terminal de la arteria carótida externa:', opciones: ['Temporal superficial', 'Facial', 'Lingual', 'Faríngea ascendente'], correcta: 0,
          explicacion: 'Pregunta 40 del taller: las terminales son la temporal superficial y la maxilar.' },
        { id: 'cc-07', tema: 'laringe-faringe', subtema: 'Laringe: cartílagos y membranas', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada cartílago con su característica.',
          pares: [['Tiroides', 'Forma la prominencia laríngea'], ['Cricoides', 'Único anillo completo'], ['Epiglotis', 'Cierra la laringe al deglutir'], ['Aritenoides', 'Mueve las cuerdas vocales']],
          explicacion: 'Tiroides, cricoides y epiglotis son impares; los aritenoides son pares.' },
        { id: 'cc-08', tema: 'laringe-faringe', subtema: 'Laringe: irrigación e inervación', tipo: 'multiple', revisado: false,
          enunciado: 'Su lesión en una tiroidectomía produce disfonía:', opciones: ['Nervio hipogloso', 'Nervio laríngeo recurrente', 'Nervio frénico', 'Nervio facial'], correcta: 1,
          explicacion: 'Inerva casi todos los músculos intrínsecos de la laringe.' },
        { id: 'cc-09', tema: 'laringe-faringe', subtema: 'Faringe: estructuras', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las porciones de la faringe de superior a inferior.', orden: ['Nasofaringe', 'Orofaringe', 'Laringofaringe'],
          explicacion: 'La laringofaringe se continúa con el esófago a nivel de C6.' },
        { id: 'cc-10', tema: 'cuello', subtema: 'Estructuras según los triángulos del cuello', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué nervio inerva el esternocleidomastoideo?', opciones: ['Facial (VII)', 'Vago (X)', 'Accesorio (XI)', 'Hipogloso (XII)'], correcta: 2,
          explicacion: 'También inerva el trapecio.' },
        { id: 'cc-11', tema: 'cara', subtema: 'Miología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada músculo con su nervio.',
          pares: [['Orbicular de los ojos', 'Facial (VII)'], ['Masetero', 'Trigémino (V3)'], ['Buccinador', 'Facial (VII)'], ['Temporal', 'Trigémino (V3)']],
          explicacion: 'Expresión: facial. Masticación: trigémino.' },
        { id: 'cc-12', tema: 'cara', subtema: 'Irrigación', tipo: 'vf', revisado: false,
          enunciado: 'El pulso de la arteria temporal superficial se palpa por delante de la oreja.', correcta: true,
          explicacion: 'Es una rama terminal de la carótida externa.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-cc-01', tema: 'cara', revisado: false, frente: 'Músculos de la masticación', reverso: 'Masetero, temporal, pterigoideo medial y lateral; inervados por V3.' },
        { id: 'fc-cc-02', tema: 'cara', revisado: false, frente: 'Ramas sensitivas del trigémino', reverso: 'V1 oftálmica (frente), V2 maxilar (mejilla), V3 mandibular (mentón).' },
        { id: 'fc-cc-03', tema: 'cara', revisado: false, frente: 'Triángulo peligroso de la cara', reverso: 'De la raíz de la nariz a las comisuras: la vena facial comunica con el seno cavernoso.' },
        { id: 'fc-cc-04', tema: 'cuello', revisado: false, frente: 'Triángulos del cuello', reverso: 'Anterior (submandibular, submentoniano, carotídeo, muscular) y posterior (occipital, omoclavicular). Los separa el ECM.' },
        { id: 'fc-cc-05', tema: 'cuello', revisado: false, frente: 'Bifurcación carotídea', reverso: 'Borde superior del cartílago tiroides (C4): carótida interna y externa.' },
        { id: 'fc-cc-06', tema: 'cuello', revisado: false, frente: 'Contenido de la vaina carotídea', reverso: 'Carótida común (medial), yugular interna (lateral) y nervio vago (posterior).' },
        { id: 'fc-cc-07', tema: 'cuello', revisado: false, frente: 'Músculos infrahioideos', reverso: 'Esternohioideo, omohioideo, esternotiroideo, tirohioideo.' },
        { id: 'fc-cc-08', tema: 'cuello', revisado: false, frente: 'Istmo de la tiroides', reverso: 'Delante de los anillos traqueales 2 a 4.' },
        { id: 'fc-cc-09', tema: 'laringe-faringe', revisado: false, frente: 'Porciones de la faringe', reverso: 'Nasofaringe, orofaringe y laringofaringe.' },
        { id: 'fc-cc-10', tema: 'laringe-faringe', revisado: false, frente: 'Anillo de Waldeyer', reverso: 'Amígdalas faríngea, tubáricas, palatinas y lingual.' },
        { id: 'fc-cc-11', tema: 'laringe-faringe', revisado: false, frente: 'Cartílagos impares de la laringe', reverso: 'Tiroides, cricoides y epiglotis.' },
        { id: 'fc-cc-12', tema: 'laringe-faringe', revisado: false, frente: 'Glotis', reverso: 'Cuerdas vocales y rima glótica: parte más estrecha de la laringe.' },
        { id: 'fc-cc-13', tema: 'laringe-faringe', revisado: false, frente: 'Ligamento cricotiroideo', reverso: 'Entre tiroides y cricoides: sitio de la cricotiroidotomía de urgencia.' }
    ]);
})();
