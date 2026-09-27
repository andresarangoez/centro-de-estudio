/* ============================================================
   CONTENIDO · Morfología · Unidad VII · Miembros
   Elaborado a partir de: Miembro superior y Miembro inferior
   (Enf. Mag. Aurora Moreno), Taller Miembro superior y Taller
   Miembro inferior (Cátedra de Morfología FUCS). Ilustraciones de
   talleres: Netter / Machado. Verificado contra Moore.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/miembros/';
    var F_MS = 'Miembro superior, Enf. Mag. Aurora Moreno';
    var F_MI = 'Miembro inferior, Enf. Mag. Aurora Moreno';
    var F_TS = 'Taller Miembro superior, Cátedra de Morfología FUCS. Ilustraciones: Netter';
    var F_TI = 'Taller Miembro inferior, Cátedra de Morfología FUCS. Ilustraciones: Netter';

    /* ---------------- MIEMBRO SUPERIOR ---------------- */
    CE.contenido('miembro-superior', {
        revisado: false,
        prerrequisitos: ['Clasificación de articulaciones sinoviales.', 'Movimientos: flexión, abducción, pronación, supinación.', 'Nervios raquídeos cervicales.'],
        ideaPrincipal: 'El miembro superior es la parte más móvil del cuerpo. Tiene cuatro segmentos (hombro, brazo, antebrazo y mano), sus músculos se organizan en compartimentos con un nervio propio, y lo inerva el plexo braquial.',
        secciones: [
            { titulo: 'Segmentos y regiones',
              texto: 'Hombro (regiones pectoral, escapular y deltoidea), brazo (anterior y posterior), codo, antebrazo (anterior y posterior), muñeca y mano (palma, dorso y dedos). La mano tiene numerosas terminaciones sensibles al tacto, dolor y temperatura.' },
            { titulo: 'Osteología',
              tabla: { columnas: ['Hueso', 'Rasgos principales'],
                       filas: [['Clavícula', 'Soporte fijo que une el miembro al tronco; transmite los golpes al esqueleto axial; tercio medio es el más frágil'],
                               ['Escápula', 'Hueso plano triangular entre las costillas 2 y 7: espina, acromion, apófisis coracoides, cavidad glenoidea, fosas supraespinosa, infraespinosa y subescapular'],
                               ['Húmero', 'El hueso más grande del miembro: cabeza, cuello anatómico y quirúrgico, tubérculos mayor y menor, surco intertubercular (bicipital), tuberosidad deltoidea, epicóndilos, cóndilo (capítulo) y tróclea'],
                               ['Cúbito (ulna)', 'Medial y largo; estabiliza el antebrazo: olécranon, apófisis coronoides, incisura troclear, apófisis estiloides'],
                               ['Radio', 'Lateral y corto: cabeza, cuello, tuberosidad, apófisis estiloides; gira sobre el cúbito en pronación y supinación'],
                               ['Mano', '8 huesos del carpo, 5 metacarpianos y 14 falanges (proximal, media y distal; el pulgar sólo 2)']] } },
            { titulo: 'Articulaciones',
              tabla: { columnas: ['Articulación', 'Tipo', 'Movimientos'],
                       filas: [['Glenohumeral (hombro)', 'Enartrosis', 'Todos: flexión–extensión, abducción–aducción, rotaciones, circunducción'],
                               ['Acromioclavicular', 'Artrodia', 'Deslizamiento al elevar el brazo'],
                               ['Humerocubital', 'Gínglimo', 'Flexión–extensión del codo'],
                               ['Radiocubital proximal', 'Trocoide', 'Pronación–supinación'],
                               ['Carpometacarpiana del pulgar', 'Silla de montar', 'Oposición del pulgar']] } },
            { titulo: 'Músculos por región',
              tabla: { columnas: ['Región', 'Músculos', 'Inervación principal'],
                       filas: [['Pectoral', 'Pectoral mayor, pectoral menor, subclavio, serrato anterior', 'Pectorales medial y lateral; torácico largo (serrato)'],
                               ['Posterior (tronco–escápula)', 'Trapecio, dorsal ancho, elevador de la escápula, romboides', 'Accesorio (trapecio), toracodorsal, dorsal de la escápula'],
                               ['Deltoidea', 'Deltoides: abduce el brazo', 'Nervio axilar'],
                               ['Manguito rotador', 'Supraespinoso, infraespinoso, redondo menor y subescapular: mantienen la cabeza del húmero en la glenoides', 'Supraescapular, axilar y subescapulares'],
                               ['Brazo anterior (flexores)', 'Bíceps braquial, coracobraquial, braquial', 'Musculocutáneo'],
                               ['Brazo posterior (extensores)', 'Tríceps braquial, ancóneo', 'Radial'],
                               ['Antebrazo anterior (flexopronadores)', 'Superficial: pronador redondo, flexor radial del carpo, palmar largo, flexor cubital del carpo. Intermedio: flexor superficial de los dedos. Profundo: flexor profundo de los dedos, flexor largo del pulgar, pronador cuadrado', 'Mediano (y cubital para el flexor cubital del carpo y parte del flexor profundo)'],
                               ['Antebrazo posterior (extensores)', 'Braquiorradial, extensores radiales largo y corto del carpo, extensor de los dedos, del meñique, cubital del carpo, supinador, extensor del índice, abductor largo y extensores del pulgar', 'Radial']] } },
            { titulo: 'Axila',
              lista: ['Espacio piramidal por donde pasan los vasos y nervios del brazo.',
                      'Vértice: entre la primera costilla, la clavícula y el borde superior de la escápula. Base: piel y fascia axilar.',
                      'Paredes: anterior (pectorales mayor y menor), posterior (subescapular, redondo mayor, dorsal ancho), medial (costillas 1–4 y serrato anterior) y lateral (surco intertubercular del húmero).',
                      'Contenido: arteria y vena axilares, plexo braquial y nódulos linfáticos axilares.'] },
            { titulo: 'Plexo braquial',
              texto: 'Se forma por los ramos anteriores de C5 a T1 y se organiza en raíces → troncos (superior, medio, inferior) → divisiones → fascículos (lateral, posterior, medial) → ramos terminales: musculocutáneo, axilar, radial, mediano y cubital (ulnar).' },
            { titulo: 'Irrigación',
              lista: ['Arteria subclavia → axilar (en la axila) → braquial (en el brazo, medial al bíceps) → en el codo se divide en radial y cubital → arcos palmares superficial y profundo.',
                      'Venas superficiales: cefálica (lateral) y basílica (medial), unidas en el codo por la vena mediana del codo; más abajo, la vena mediana del antebrazo.',
                      'Venas profundas acompañan a las arterias (braquiales, radiales, cubitales).'] }
        ],
        figuras: [
            { src: R + 'ms-regiones.jpg', alt: 'Regiones del miembro superior', pie: 'Regiones del miembro superior.', fuente: F_MS },
            { src: R + 'ms-escapula.jpg', alt: 'Escápula', pie: 'Escápula.', fuente: F_MS },
            { src: R + 'ms-humero.jpg', alt: 'Húmero', pie: 'Húmero: cabeza, tubérculos, surco intertubercular.', fuente: F_MS },
            { src: R + 'ms-mano-huesos.jpg', alt: 'Huesos de la mano', pie: 'Carpo, metacarpianos y falanges.', fuente: F_MS },
            { src: R + 'ms-flexores-antebrazo.jpg', alt: 'Músculos flexopronadores del antebrazo', pie: 'Flexopronadores del antebrazo por planos.', fuente: F_MS },
            { src: R + 'ms-extensores-antebrazo.jpg', alt: 'Músculos extensores del antebrazo', pie: 'Extensores del antebrazo.', fuente: F_MS },
            { src: R + 'ms-plexo-braquial.jpg', alt: 'Plexo braquial', pie: 'Plexo braquial: raíces, troncos, fascículos y ramos terminales.', fuente: F_MS },
            { src: R + 'ms-arteria-axilar.jpg', alt: 'Arteria axilar y sus ramas', pie: 'Arteria axilar y sus tres porciones.', fuente: F_MS },
            { src: R + 'ms-arterias.jpg', alt: 'Arterias del miembro superior', pie: 'Arterias radial, cubital y arco palmar superficial.', fuente: F_MS },
            { src: R + 'ms-venas-superficiales.jpg', alt: 'Venas superficiales del brazo', pie: 'Venas cefálica, basílica y mediana del codo.', fuente: F_MS }
        ],
        enfermeria: [
            'La vena mediana del codo es la preferida para la toma de muestras de sangre; la cefálica y la basílica, para accesos venosos periféricos.',
            'El pulso radial se toma en la cara anterolateral de la muñeca, lateral al tendón del flexor radial del carpo; el braquial, en la fosa del codo para tomar la presión arterial.',
            'Antes de canalizar la arteria radial para gases arteriales se realiza la prueba de Allen, que verifica la circulación por la arteria cubital.',
            'La inyección intramuscular en el deltoides se aplica 2 a 3 traveses de dedo bajo el acromion, para no lesionar el nervio axilar.',
            'La fractura de Colles (radio distal) es frecuente al caer con la mano extendida, sobre todo en adultos mayores.'
        ],
        errores: ['Confundir radio (lateral, lado del pulgar) con cúbito (medial).', 'Pensar que el bíceps lo inerva el radial: es el musculocutáneo; el radial inerva los extensores.', 'Olvidar que la cefálica va por el lado lateral y la basílica por el medial.'],
        loQueDebesSaber: ['Huesos del miembro superior y sus accidentes principales.', 'Tipos de articulación del hombro, codo y pulgar.', 'Músculos del manguito rotador.', 'Compartimentos y su nervio.', 'Ramos terminales del plexo braquial.', 'Recorrido arterial y venas superficiales.'],
        laminas: [
            { id: 'ms-hombro', src: R + 'lamina-hombro.jpg', titulo: 'Húmero y escápula (1 a 8)', fuente: F_TS,
              marcas: [{ n: '1', r: 'Epicóndilo lateral' }, { n: '2', r: 'Surco intertubercular' }, { n: '3', r: 'Tubérculo mayor del húmero' }, { n: '4', r: 'Acromion' }, { n: '5', r: 'Clavícula' }, { n: '6', r: 'Apófisis coracoides' }, { n: '7', r: 'Fosa subescapular' }, { n: '8', r: 'Epicóndilo medial' }],
              distractores: ['Cavidad glenoidea'] },
            { id: 'ms-codo', src: R + 'lamina-codo.jpg', titulo: 'Codo, vistas anterior y posterior (9 a 12)', fuente: F_TS,
              marcas: [{ n: '9', r: 'Cabeza del radio' }, { n: '10', r: 'Tuberosidad del cúbito' }, { n: '11', r: 'Epicóndilo medial' }, { n: '12', r: 'Olécranon' }],
              distractores: ['Tróclea', 'Apófisis coronoides'] },
            { id: 'ms-venas', src: R + 'lamina-venas-ms.jpg', titulo: 'Venas superficiales del miembro superior (26 a 29)', fuente: F_TS,
              marcas: [{ n: '26', r: 'Vena mediana del codo' }, { n: '27', r: 'Vena cefálica' }, { n: '28', r: 'Vena basílica' }, { n: '29', r: 'Vena mediana del antebrazo' }],
              distractores: ['Vena braquial', 'Vena axilar'] }
        ],
        minicaso: {
            situacion: 'Debes tomar una muestra de gases arteriales en la muñeca y, además, canalizar una vena para líquidos en el mismo brazo.',
            preguntas: ['¿Qué arteria puncionas y qué prueba haces antes?', '¿Qué vena superficial del codo elegirías para la muestra de sangre venosa?', '¿Qué nervio podrías lesionar si inyectas muy abajo en el deltoides?']
        },
        fuente: 'Miembro superior (A. Moreno); Taller Miembro superior (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- MIEMBRO INFERIOR ---------------- */
    CE.contenido('miembro-inferior', {
        revisado: false,
        prerrequisitos: ['Pelvis ósea.', 'Articulaciones sinoviales.', 'Nervios lumbares y sacros.'],
        ideaPrincipal: 'El miembro inferior sostiene el peso, permite la marcha y mantiene el equilibrio. Sus huesos son los más largos y fuertes; sus músculos se organizan en compartimentos del muslo y la pierna, y los inervan los plexos lumbar y sacro.',
        secciones: [
            { titulo: 'Regiones y osteología',
              texto: 'Regiones: glútea, femoral (muslo), rodilla, pierna, tobillo y pie.',
              tabla: { columnas: ['Hueso', 'Rasgos principales'],
                       filas: [['Coxal', 'Ilion, isquion y pubis; acetábulo donde encaja la cabeza del fémur'],
                               ['Fémur', 'El hueso más largo: cabeza, cuello, trocánteres mayor y menor, cuerpo con línea áspera, cóndilos medial y lateral'],
                               ['Rótula', 'Hueso sesamoideo dentro del tendón del cuádriceps'],
                               ['Tibia', 'Medial, soporta el peso: cóndilos, tuberosidad tibial, maléolo medial'],
                               ['Peroné (fíbula)', 'Lateral y delgado: cabeza, maléolo lateral'],
                               ['Pie', '7 huesos del tarso (calcáneo, astrágalo o talus, navicular, cuboides, 3 cuneiformes), 5 metatarsianos, 14 falanges']] } },
            { titulo: 'Articulaciones principales',
              lista: ['Coxofemoral (cadera): enartrosis muy estable; permite todos los movimientos.',
                      'Rodilla: la más grande del cuerpo; principalmente gínglimo (flexión–extensión) con meniscos y ligamentos cruzados y colaterales.',
                      'Tobillo (talocrural): gínglimo; dorsiflexión y flexión plantar. Inversión y eversión ocurren en las articulaciones del tarso.'] },
            { titulo: 'Músculos por región',
              tabla: { columnas: ['Región', 'Músculos', 'Función', 'Nervio'],
                       filas: [['Glútea superficial', 'Glúteo mayor, medio, menor, tensor de la fascia lata', 'Extensión (glúteo mayor), abducción y estabilidad de la pelvis', 'Glúteo inferior y superior'],
                               ['Glútea profunda', 'Piriforme, obturador interno, gemelos, cuadrado femoral', 'Rotación lateral del muslo', 'Ramas del plexo sacro'],
                               ['Muslo anterior', 'Iliopsoas, pectíneo, sartorio, cuádriceps femoral (recto femoral, vastos lateral, medial e intermedio)', 'Flexionan la cadera y extienden la rodilla', 'Femoral'],
                               ['Muslo medial', 'Aductores largo, corto y mayor, grácil, obturador externo', 'Aducen el muslo', 'Obturador'],
                               ['Muslo posterior (isquiotibiales)', 'Semitendinoso, semimembranoso, bíceps femoral', 'Extienden la cadera y flexionan la rodilla', 'Isquiático (ciático)'],
                               ['Pierna anterior', 'Tibial anterior, extensores largos de los dedos y del dedo gordo, tercer peroneo', 'Dorsiflexión', 'Peroneo profundo'],
                               ['Pierna lateral', 'Peroneos largo y corto', 'Eversión del pie', 'Peroneo superficial'],
                               ['Pierna posterior', 'Superficial: gastrocnemio, sóleo, plantar (tendón calcáneo o de Aquiles). Profunda: poplíteo, flexores largos, tibial posterior', 'Flexión plantar', 'Tibial']] },
              nota: 'Pie: cuatro capas de músculos plantares que sostienen los arcos del pie.' },
            { titulo: 'Inervación',
              lista: ['Plexo lumbar (L1–L4): nervios femoral (muslo anterior) y obturador (muslo medial), entre otros.',
                      'Plexo sacro (L4–S4): nervios glúteos, isquiático o ciático (el más grueso del cuerpo), que se divide en tibial y peroneo común; nervio pudendo.'] },
            { titulo: 'Irrigación',
              lista: ['Arteria ilíaca externa → femoral (en el triángulo femoral, bajo el ligamento inguinal) → atraviesa el hiato del aductor mayor → poplítea (detrás de la rodilla) → tibial anterior (termina en la dorsal del pie o pedia) y tibial posterior.',
                      'Venas superficiales: safena mayor (medial, del pie a la vena femoral en la ingle; la más larga del cuerpo) y safena menor (posterior, a la poplítea).',
                      'Venas profundas acompañan a las arterias. Las válvulas y la bomba muscular de la pantorrilla impulsan la sangre hacia el corazón.'] }
        ],
        figuras: [
            { src: R + 'mi-regiones.jpg', alt: 'Regiones del miembro inferior', pie: 'Regiones del miembro inferior.', fuente: F_MI },
            { src: R + 'mi-nervios.jpg', alt: 'Plexo lumbosacro y nervios del miembro inferior', pie: 'Nervios del miembro inferior.', fuente: F_MI },
            { src: R + 'mi-arterias.jpg', alt: 'Arterias del miembro inferior', pie: 'Arterias: femoral, poplítea, tibiales.', fuente: F_MI },
            { src: R + 'mi-venas.jpg', alt: 'Venas del miembro inferior', pie: 'Venas: safena mayor y menor, femoral, poplítea.', fuente: F_MI }
        ],
        enfermeria: [
            'La inyección intramuscular glútea se aplica en el cuadrante superoexterno (o en la zona ventroglútea) para evitar el nervio ciático.',
            'Pulsos que se valoran: femoral (ingle), poplíteo (detrás de la rodilla), tibial posterior (detrás del maléolo medial) y pedio (dorso del pie).',
            'La inmovilidad detiene la bomba muscular de la pantorrilla y favorece la trombosis venosa profunda: la movilización y las medias de compresión son cuidados de enfermería.',
            'La vena safena mayor, por delante del maléolo medial, sirve como acceso venoso de urgencia y como injerto en cirugía cardíaca.',
            'En el síndrome compartimental el aumento de presión dentro de un compartimento de la pierna produce dolor intenso e isquemia: es una urgencia.'
        ],
        errores: ['Confundir tibia (medial, soporta el peso) con peroné (lateral).', 'Pensar que el cuádriceps flexiona la rodilla: la extiende; los isquiotibiales la flexionan.', 'Ubicar la safena mayor por la cara lateral: va por la medial.'],
        loQueDebesSaber: ['Huesos del miembro inferior y sus accidentes.', 'Compartimentos del muslo y la pierna con su función y nervio.', 'Nervios femoral, obturador y ciático.', 'Recorrido arterial y pulsos palpables.', 'Venas safenas.'],
        laminas: [
            { id: 'mi-femur', src: R + 'lamina-femur.jpg', titulo: 'Fémur (8 superior, 9 a 12)', fuente: F_TI + '. Hay dos flechas con el número 8: aquí se pregunta la superior.',
              marcas: [{ n: '8 superior', r: 'Cabeza del fémur' }, { n: '8 inferior', r: 'Trocánter menor' }, { n: '9', r: 'Trocánter mayor' }, { n: '10', r: 'Línea intertrocantérea' }, { n: '11', r: 'Cuerpo del fémur' }, { n: '12', r: 'Cóndilo lateral' }],
              distractores: ['Cuello del fémur', 'Epicóndilo medial'] },
            { id: 'mi-tibia', src: R + 'lamina-tibia-perone.jpg', titulo: 'Tibia y peroné (13 a 16)', fuente: F_TI,
              marcas: [{ n: '13', r: 'Eminencia intercondílea de la tibia' }, { n: '14', r: 'Cabeza del peroné' }, { n: '15', r: 'Maléolo medial' }, { n: '16', r: 'Maléolo lateral' }],
              distractores: ['Tuberosidad tibial', 'Calcáneo'] },
            { id: 'mi-safena', src: R + 'lamina-safena.jpg', titulo: 'Venas superficiales del miembro inferior (31)', fuente: F_TI,
              marcas: [{ n: '31', r: 'Vena safena mayor' }],
              distractores: ['Vena safena menor', 'Vena femoral', 'Vena poplítea'] }
        ],
        minicaso: {
            situacion: 'Una paciente lleva 5 días en cama después de una cirugía de cadera. Refiere dolor en la pantorrilla izquierda, que está más gruesa y caliente que la derecha.',
            preguntas: ['¿Qué complicación sospechas y por qué la inmovilidad la favorece?', '¿Qué pulsos del pie valorarías?', '¿Qué músculo de la pantorrilla actúa como bomba venosa?']
        },
        fuente: 'Miembro inferior (A. Moreno); Taller Miembro inferior (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'mm-01', tema: 'miembro-superior', subtema: 'Osteología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada accidente óseo con su hueso.',
          pares: [['Acromion', 'Escápula'], ['Olécranon', 'Cúbito'], ['Surco intertubercular', 'Húmero'], ['Apófisis estiloides lateral de la muñeca', 'Radio']],
          explicacion: 'El radio está del lado del pulgar.' },
        { id: 'mm-02', tema: 'miembro-superior', subtema: 'Miología', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuál NO forma parte del manguito rotador?', opciones: ['Supraespinoso', 'Infraespinoso', 'Deltoides', 'Subescapular'], correcta: 2,
          explicacion: 'El manguito lo forman supraespinoso, infraespinoso, redondo menor y subescapular.' },
        { id: 'mm-03', tema: 'miembro-superior', subtema: 'Inervación', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada músculo con su nervio.',
          pares: [['Bíceps braquial', 'Musculocutáneo'], ['Tríceps braquial', 'Radial'], ['Deltoides', 'Axilar'], ['Pronador redondo', 'Mediano']],
          explicacion: 'Cada compartimento tiene su nervio.' },
        { id: 'mm-04', tema: 'miembro-superior', subtema: 'Inervación', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena la organización del plexo braquial.', orden: ['Raíces', 'Troncos', 'Divisiones', 'Fascículos', 'Ramos terminales'],
          explicacion: 'Nemotecnia: "Ricardo Toma Dos Fríos Refrescos".' },
        { id: 'mm-05', tema: 'miembro-superior', subtema: 'Irrigación', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido arterial del miembro superior.', orden: ['Subclavia', 'Axilar', 'Braquial', 'Radial y cubital', 'Arcos palmares'],
          explicacion: 'La braquial se divide en el codo.' },
        { id: 'mm-06', tema: 'miembro-superior', subtema: 'Irrigación', tipo: 'multiple', revisado: false,
          enunciado: 'La vena más usada para tomar muestras de sangre en el codo es:', opciones: ['Cefálica', 'Basílica', 'Mediana del codo', 'Braquial'], correcta: 2,
          explicacion: 'Une cefálica y basílica y es superficial y estable.' },
        { id: 'mm-07', tema: 'miembro-superior', subtema: 'Osteología', tipo: 'multiple', revisado: false,
          enunciado: 'La articulación glenohumeral es de tipo:', opciones: ['Gínglimo', 'Trocoide', 'Enartrosis', 'Artrodia'], correcta: 2,
          explicacion: 'Por eso tiene la mayor movilidad del cuerpo.' },
        { id: 'mm-08', tema: 'miembro-inferior', subtema: 'Miología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada compartimento del muslo con su función.',
          pares: [['Anterior', 'Extiende la rodilla y flexiona la cadera'], ['Medial', 'Aduce el muslo'], ['Posterior', 'Flexiona la rodilla y extiende la cadera']],
          explicacion: 'Cuádriceps, aductores e isquiotibiales.' },
        { id: 'mm-09', tema: 'miembro-inferior', subtema: 'Inervación', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada nervio con el compartimento que inerva.',
          pares: [['Femoral', 'Muslo anterior'], ['Obturador', 'Muslo medial'], ['Isquiático', 'Muslo posterior'], ['Peroneo profundo', 'Pierna anterior']],
          explicacion: 'El isquiático se divide en tibial y peroneo común.' },
        { id: 'mm-10', tema: 'miembro-inferior', subtema: 'Irrigación', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido arterial del miembro inferior.', orden: ['Ilíaca externa', 'Femoral', 'Poplítea', 'Tibiales anterior y posterior', 'Pedia'],
          explicacion: 'La femoral cambia de nombre al pasar el hiato del aductor.' },
        { id: 'mm-11', tema: 'miembro-inferior', subtema: 'Irrigación', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuál es la vena más larga del cuerpo?', opciones: ['Femoral', 'Safena mayor', 'Safena menor', 'Poplítea'], correcta: 1,
          explicacion: 'Va por la cara medial desde el pie hasta la ingle.' },
        { id: 'mm-12', tema: 'miembro-inferior', subtema: 'Miología', tipo: 'multiple', revisado: false,
          enunciado: 'Los músculos peroneos largo y corto producen:', opciones: ['Inversión', 'Eversión del pie', 'Dorsiflexión', 'Flexión de la rodilla'], correcta: 1,
          explicacion: 'Están en el compartimento lateral de la pierna.' },
        { id: 'mm-13', tema: 'miembro-inferior', subtema: 'Miología', tipo: 'vf', revisado: false,
          enunciado: 'La inyección glútea se aplica en el cuadrante superoexterno para evitar el nervio ciático.', correcta: true,
          explicacion: 'El ciático pasa por la parte inferomedial de la región glútea.' },
        { id: 'mm-14', tema: 'miembro-inferior', subtema: 'Osteología', tipo: 'multiple', revisado: false,
          enunciado: 'El hueso de la pierna que soporta el peso es:', opciones: ['Peroné', 'Tibia', 'Rótula', 'Fémur'], correcta: 1,
          explicacion: 'La tibia es medial; el peroné es sobre todo inserción muscular.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-mm-01', tema: 'miembro-superior', revisado: false, frente: 'Manguito rotador', reverso: 'Supraespinoso, infraespinoso, redondo menor y subescapular.' },
        { id: 'fc-mm-02', tema: 'miembro-superior', revisado: false, frente: 'Ramos terminales del plexo braquial', reverso: 'Musculocutáneo, axilar, radial, mediano y cubital.' },
        { id: 'fc-mm-03', tema: 'miembro-superior', revisado: false, frente: 'Nervio de los extensores del brazo y antebrazo', reverso: 'Radial.' },
        { id: 'fc-mm-04', tema: 'miembro-superior', revisado: false, frente: 'Venas superficiales del miembro superior', reverso: 'Cefálica (lateral), basílica (medial), mediana del codo y del antebrazo.' },
        { id: 'fc-mm-05', tema: 'miembro-superior', revisado: false, frente: 'Prueba de Allen', reverso: 'Verifica la circulación por la arteria cubital antes de puncionar la radial.' },
        { id: 'fc-mm-06', tema: 'miembro-superior', revisado: false, frente: 'Paredes de la axila', reverso: 'Anterior (pectorales), posterior (subescapular, redondo mayor, dorsal ancho), medial (costillas y serrato), lateral (húmero).' },
        { id: 'fc-mm-07', tema: 'miembro-superior', revisado: false, frente: 'Huesos de la mano', reverso: '8 del carpo, 5 metacarpianos, 14 falanges.' },
        { id: 'fc-mm-08', tema: 'miembro-inferior', revisado: false, frente: 'Músculos del cuádriceps', reverso: 'Recto femoral, vasto lateral, vasto medial y vasto intermedio.' },
        { id: 'fc-mm-09', tema: 'miembro-inferior', revisado: false, frente: 'Isquiotibiales', reverso: 'Semitendinoso, semimembranoso y bíceps femoral; nervio isquiático.' },
        { id: 'fc-mm-10', tema: 'miembro-inferior', revisado: false, frente: 'Compartimentos de la pierna', reverso: 'Anterior (dorsiflexión, peroneo profundo), lateral (eversión, peroneo superficial), posterior (flexión plantar, tibial).' },
        { id: 'fc-mm-11', tema: 'miembro-inferior', revisado: false, frente: 'Pulsos del miembro inferior', reverso: 'Femoral, poplíteo, tibial posterior y pedio.' },
        { id: 'fc-mm-12', tema: 'miembro-inferior', revisado: false, frente: 'Venas safenas', reverso: 'Mayor: medial, a la femoral. Menor: posterior, a la poplítea.' },
        { id: 'fc-mm-13', tema: 'miembro-inferior', revisado: false, frente: 'Huesos del tarso', reverso: 'Calcáneo, astrágalo, navicular, cuboides y 3 cuneiformes.' }
    ]);
})();
