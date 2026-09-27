/* ============================================================
   CONTENIDO · Morfología · Unidad IV · Tórax
   Elaborado a partir de: Presentación "Tórax" y "Pleura y pulmones"
   (Enf. Mag. Aurora Moreno), Guía de estudio cardiorrespiratorio y
   Taller tórax (Cátedra de Morfología FUCS). Ilustraciones de los
   talleres: Netter / Machado, Interactive Atlas of Human Anatomy.
   Verificado contra Moore, Anatomía con orientación clínica.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/torax/';
    var F_PPT = 'Presentación Tórax, Enf. Mag. Aurora Moreno';
    var F_PLE = 'Presentación Pleura y pulmones, Morfología FUCS';
    var F_GUIA = 'Guía de estudio cardiorrespiratorio, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_TALLER = 'Taller Tórax, Cátedra de Morfología FUCS. Ilustraciones: F. H. Netter / C. Machado';

    /* ---------------- PARED TORÁCICA Y MAMA ---------------- */
    CE.contenido('pared-toracica', {
        revisado: false,
        prerrequisitos: ['Planos y términos de relación (Unidad I).', 'Generalidades de osteología: huesos planos y articulaciones.', 'Vértebras torácicas (columna vertebral).'],
        ideaPrincipal: 'La pared torácica es una caja osteomuscular (vértebras torácicas, 12 pares de costillas y esternón, unidos por músculos intercostales y cerrada abajo por el diafragma) que protege corazón y pulmones y cambia de volumen para permitir la respiración.',
        secciones: [
            { titulo: 'Esqueleto del tórax',
              lista: [
                  'Posterior: 12 vértebras torácicas. Anterior: esternón. Laterales: 12 pares de costillas con sus cartílagos costales.',
                  'Apertura torácica superior: vértebra T1, primer par de costillas y borde superior del manubrio. Por ella pasan tráquea, esófago y grandes vasos hacia el cuello.',
                  'Apertura torácica inferior: vértebra T12, costillas 11 y 12, margen costal y apófisis xifoides. La cierra el diafragma.'
              ] },
            { titulo: 'Costillas: verdaderas, falsas y flotantes',
              tabla: { columnas: ['Tipo', 'Costillas', 'Cómo se unen al esternón'],
                       filas: [['Verdaderas', '1.ª a 7.ª', 'Directamente, cada una por su propio cartílago costal.'],
                               ['Falsas', '8.ª a 10.ª', 'Indirectamente: su cartílago se une al de la costilla de arriba y forman el margen (arco) costal.'],
                               ['Flotantes', '11.ª y 12.ª', 'No llegan al esternón: terminan libres en la musculatura de la pared.']] },
              texto: 'Una costilla típica tiene cabeza (se articula con los cuerpos vertebrales), cuello, tubérculo (se articula con la apófisis transversa) y cuerpo. En el borde inferior de su cara interna está el surco costal, por donde corre el paquete vasculonervioso intercostal.' },
            { titulo: 'Esternón',
              lista: ['Tres partes: manubrio, cuerpo y apófisis (proceso) xifoides.',
                      'Ángulo esternal (de Louis): unión del manubrio con el cuerpo. Se palpa como un relieve y queda a la altura del 2.º cartílago costal: es el punto de partida para contar costillas y espacios intercostales.',
                      'Articulaciones de la pared: costovertebral, costotransversa, costocondral, esternocostal, intercondral, manubrioesternal y xifoesternal.'] },
            { titulo: 'Músculos intercostales y paquete vasculonervioso',
              tabla: { columnas: ['Músculo', 'Posición', 'Acción principal'],
                       filas: [['Intercostal externo', 'Superficial; fibras hacia abajo y adelante', 'Eleva las costillas: inspiración.'],
                               ['Intercostal interno', 'Intermedio; fibras perpendiculares al externo', 'Desciende las costillas: espiración forzada.'],
                               ['Intercostal íntimo (profundo)', 'El más profundo', 'Acompaña al interno.'],
                               ['Subcostales y transverso del tórax', 'Cara interna de la pared', 'Accesorios de la espiración.']] },
              texto: ['En cada espacio intercostal, entre el intercostal interno y el íntimo, corre el paquete vasculonervioso en orden de arriba hacia abajo: vena, arteria y nervio (VAN), protegido por el surco costal.',
                      'Irrigación: arterias intercostales posteriores (desde la aorta torácica) y anteriores (desde la arteria torácica interna, rama de la subclavia, que baja 1 cm por fuera del borde del esternón). Inervación: nervios intercostales, ramos anteriores de T1 a T11 (T12 es el nervio subcostal).'] },
            { titulo: 'Diafragma',
              lista: ['Músculo en cúpula que separa tórax y abdomen; es el principal músculo de la inspiración: al contraerse desciende y aumenta el volumen torácico.',
                      'Partes: esternal, costal y lumbar (pilares), que convergen en el centro tendinoso.',
                      'Orificios: vena cava inferior (T8, en el centro tendinoso), esófago (T10, hiato esofágico) y aorta (T12, hiato aórtico, detrás de los pilares).',
                      'Inervación motora: nervio frénico (C3, C4 y C5).'] },
            { titulo: 'Glándula mamaria',
              lista: ['Se ubica en el tejido subcutáneo sobre el músculo pectoral mayor, de la 2.ª a la 6.ª costilla y del borde del esternón a la línea medioaxilar. Se prolonga hacia la axila (proceso axilar).',
                      'Tejido glandular organizado en 15 a 20 lóbulos; cada uno drena por un conducto lactífero que se dilata en un seno lactífero antes de abrirse en el pezón.',
                      'Ligamentos suspensorios (de Cooper): tabiques fibrosos de la piel a la fascia pectoral que sostienen la glándula.',
                      'Irrigación: ramas de la arteria torácica interna, torácica lateral y arterias intercostales.',
                      'Drenaje linfático: más del 75 % va a los nódulos linfáticos axilares (sobre todo pectorales); el resto a los paraesternales.',
                      'En el hombre, el pezón se ubica aproximadamente en el 4.º espacio intercostal, línea medioclavicular.'] },
            { titulo: 'Tipos de tórax (presentación de clase)',
              lista: ['Infantil; esténico (más largo, menos ancho); hipoesténico (delgado, pulmones estrechos y largos); hiperesténico (ancho y profundo).',
                      'Patológicos: enfisematoso (en tonel), aplanado por fibrosis pleuropulmonar, pectus excavatum (esternón deprimido) y tórax en quilla (esternón protruido).'] }
        ],
        figuras: [
            { src: R + 'caja-toracica-anterior.jpg', alt: 'Caja torácica en vista anterior', pie: 'Caja torácica, vista anterior: esternón, costillas y cartílagos costales.', fuente: F_PPT },
            { src: R + 'caja-toracica-posterior.jpg', alt: 'Caja torácica en vista posterior', pie: 'Caja torácica, vista posterior: vértebras torácicas y articulaciones costovertebrales.', fuente: F_PPT },
            { src: R + 'costillas.jpg', alt: 'Costillas aisladas', pie: 'Costillas: observa cabeza, cuello, tubérculo y cuerpo.', fuente: F_PPT },
            { src: R + 'pared-anterior-vista-interna.jpg', alt: 'Pared torácica anterior vista desde dentro', pie: 'Pared torácica anterior, vista interna: vasos torácicos internos y transverso del tórax.', fuente: F_PLE },
            { src: R + 'mama-corte-sagital.jpg', alt: 'Corte sagital de la glándula mamaria', pie: 'Glándula mamaria en corte sagital: lóbulos, conductos y ligamentos suspensorios.', fuente: F_PPT },
            { src: R + 'mama-linfaticos.jpg', alt: 'Glándula mamaria y drenaje linfático', pie: 'Glándula mamaria: lóbulos y conductos lactíferos.', fuente: F_PPT },
            { src: R + 'guia-vista-anterior-torax.jpg', alt: 'Vista anterior de la caja torácica con órganos', pie: 'Proyección de los órganos en la caja torácica (rotulada).', fuente: F_GUIA }
        ],
        enfermeria: [
            'El ángulo esternal te permite contar espacios intercostales para ubicar el ápex cardíaco, colocar electrodos del electrocardiograma y describir hallazgos.',
            'En una toracocentesis o inserción de tubo de tórax se punciona sobre el borde superior de la costilla inferior, para no lesionar el paquete vasculonervioso que va por el borde inferior.',
            'Una lesión del nervio frénico paraliza la mitad del diafragma y compromete la respiración.',
            'Conocer el drenaje axilar de la mama explica por qué en el autoexamen y la valoración se palpan también los ganglios axilares.'
        ],
        errores: [
            'Confundir costillas falsas con flotantes: las falsas (8–10) sí llegan al esternón, pero de forma indirecta.',
            'Pensar que el paquete vasculonervioso va por el borde superior de la costilla: va por el inferior, en el surco costal.',
            'Olvidar que el diafragma es el músculo principal de la inspiración, no los intercostales.'
        ],
        loQueDebesSaber: [
            'Costillas verdaderas (1–7), falsas (8–10) y flotantes (11–12).',
            'Partes del esternón y el ángulo esternal como referencia del 2.º cartílago costal.',
            'Los tres planos de músculos intercostales y el orden VAN del paquete vasculonervioso.',
            'Orificios del diafragma (T8, T10, T12) e inervación por el frénico (C3–C5).',
            'Ubicación, estructura y drenaje linfático de la glándula mamaria.'
        ],
        laminas: [
            { id: 'tx-mama', src: R + 'lamina-mama.jpg', titulo: 'Glándula mamaria (números 1 y 2)', fuente: F_TALLER,
              marcas: [{ n: '1', r: 'Lóbulos de la glándula mamaria' }, { n: '2', r: 'Conductos lactíferos' }],
              distractores: ['Ligamento suspensorio', 'Músculo pectoral mayor', 'Nódulos linfáticos axilares'] },
            { id: 'tx-pared-ant', src: R + 'lamina-pared-anterior.jpg', titulo: 'Pared torácica anterior (números 3 y 4)', fuente: F_TALLER,
              marcas: [{ n: '3', r: 'Nódulos linfáticos axilares' }, { n: '4', r: 'Músculo pectoral mayor' }],
              distractores: ['Nódulos paraesternales', 'Músculo deltoides', 'Clavícula'] },
            { id: 'tx-pared-int', src: R + 'lamina-pared-interna.jpg', titulo: 'Pared torácica anterior, vista interna (números 5 a 7)', fuente: F_TALLER,
              marcas: [{ n: '5', r: 'Arteria y vena torácicas internas' }, { n: '6', r: 'Músculo transverso del tórax' }, { n: '7', r: 'Diafragma' }],
              distractores: ['Músculo intercostal externo', 'Nervio frénico', 'Esternón'] },
            { id: 'tx-diafragma', src: R + 'lamina-diafragma.jpg', titulo: 'Diafragma, vista superior (números 8 a 11)', fuente: F_TALLER,
              marcas: [{ n: '8', r: 'Diafragma (porción muscular)' }, { n: '9', r: 'Vena cava inferior' }, { n: '10', r: 'Esófago' }, { n: '11', r: 'Aorta' }],
              distractores: ['Centro tendinoso', 'Pericardio', 'Vena ácigos'] }
        ],
        minicaso: {
            situacion: 'Un paciente de 45 años ingresa tras un accidente de tránsito con dolor en el hemitórax derecho. El médico indica colocar un tubo de tórax en el 5.º espacio intercostal, línea medioaxilar. Te piden preparar el procedimiento y explicarle al paciente dónde se hará.',
            preguntas: ['¿Qué referencia ósea usarías para contar hasta el 5.º espacio intercostal?',
                        '¿Por qué el tubo se introduce sobre el borde superior de la costilla y no por el inferior?',
                        '¿Qué tres músculos atraviesa el tubo antes de llegar a la pleura?']
        },
        fuente: 'Presentación Tórax (A. Moreno); Taller Tórax y Guía cardiorrespiratorio (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- TRÁQUEA, BRONQUIOS, PULMÓN Y PLEURA ---------------- */
    CE.contenido('via-aerea-pulmon', {
        revisado: false,
        prerrequisitos: ['Pared torácica y diafragma.', 'Laringe (Unidad III): la tráquea es su continuación.'],
        ideaPrincipal: 'El aire baja por la tráquea, que se divide en dos bronquios principales; estos se ramifican dentro de cada pulmón hasta los alvéolos. Cada pulmón está envuelto por la pleura, que le permite deslizarse sobre la pared durante la respiración.',
        secciones: [
            { titulo: 'Tráquea',
              lista: ['Tubo que continúa a la laringe desde el cartílago cricoides (C6) hasta el ángulo esternal (T4–T5), donde se divide en los dos bronquios principales.',
                      'Formada por 16 a 20 anillos de cartílago en forma de C, abiertos hacia atrás; la parte posterior la cierra el músculo traqueal, en contacto con el esófago.',
                      'Carina: cresta interna en el sitio de la bifurcación. Es muy sensible y su estimulación provoca tos.'] },
            { titulo: 'Bronquios',
              lista: ['Bronquios principales (fuente): derecho e izquierdo.',
                      'El bronquio principal derecho es más corto, más ancho y más vertical: por eso los cuerpos extraños aspirados y un tubo endotraqueal muy introducido suelen ir hacia el pulmón derecho.',
                      'Bronquios lobares (secundarios): 3 en el pulmón derecho y 2 en el izquierdo, uno por lóbulo.',
                      'Bronquios segmentarios (terciarios): cada uno ventila un segmento broncopulmonar, unidad anatómica y quirúrgica del pulmón (unos 10 por pulmón).'] },
            { titulo: 'Pulmones',
              tabla: { columnas: ['Característica', 'Pulmón derecho', 'Pulmón izquierdo'],
                       filas: [['Lóbulos', '3: superior, medio e inferior', '2: superior e inferior'],
                               ['Fisuras', 'Oblicua y horizontal', 'Sólo oblicua'],
                               ['Forma', 'Más corto y ancho (el hígado eleva la cúpula derecha)', 'Más largo y estrecho; escotadura cardíaca y língula'],
                               ['Cara mediastínica', 'Surcos del esófago, vena cava y ácigos', 'Impresión cardíaca y surco de la aorta']] },
              texto: ['Cada pulmón tiene vértice (ápex), que sube por encima de la clavícula; base o cara diafragmática; cara costal y cara mediastínica, donde está el hilio.',
                      'Por el hilio entran y salen las estructuras de la raíz del pulmón: bronquio principal, arteria pulmonar, dos venas pulmonares, vasos bronquiales, linfáticos y nervios.',
                      'Las arterias pulmonares llevan sangre poco oxigenada desde el ventrículo derecho; las venas pulmonares devuelven sangre oxigenada a la aurícula izquierda. El tejido pulmonar se nutre por las arterias bronquiales, ramas de la aorta.'] },
            { titulo: 'Pleura',
              lista: ['Pleura visceral: cubre el pulmón y penetra en sus fisuras. No duele.',
                      'Pleura parietal: tapiza la pared; según su ubicación es costal, mediastínica, diafragmática y cervical (cúpula). Sí es sensible al dolor.',
                      'Cavidad pleural: espacio virtual entre ambas hojas con una fina capa de líquido que permite el deslizamiento.',
                      'Recesos costodiafragmático y costomediastínico: zonas donde el pulmón no llega en espiración; en el costodiafragmático se acumula el líquido de un derrame pleural.',
                      'Ligamento pulmonar: pliegue de pleura que baja desde el hilio.'] },
            { titulo: 'Inervación y linfáticos',
              lista: ['Plexo pulmonar: fibras parasimpáticas del nervio vago (broncoconstricción, secreción) y simpáticas (broncodilatación).',
                      'Linfa: nódulos pulmonares → broncopulmonares (hiliares) → traqueobronquiales → paratraqueales → tronco broncomediastínico.'] },
            { titulo: 'Circulación mayor y menor',
              texto: 'Menor o pulmonar: ventrículo derecho → tronco pulmonar → pulmones (intercambio de gases) → venas pulmonares → aurícula izquierda. Mayor o sistémica: ventrículo izquierdo → aorta → tejidos → venas cavas → aurícula derecha.',
              figura: { src: R + 'circulacion-mayor-menor.jpg', alt: 'Esquema de circulación mayor y menor', pie: 'Circulación mayor y menor.', fuente: F_PPT } }
        ],
        figuras: [
            { src: R + 'guia-traquea.jpg', alt: 'Tráquea, carina y bronquios principales rotulados', pie: 'Tráquea, carina y bronquios fuente.', fuente: F_GUIA },
            { src: R + 'guia-cara-mediastinica-pulmones.jpg', alt: 'Cara mediastínica de ambos pulmones rotulada', pie: 'Cara mediastínica: hilio, lóbulos y estructuras de la raíz.', fuente: F_GUIA },
            { src: R + 'topografia-pulmones.jpg', alt: 'Topografía de los pulmones en vista anterior y posterior', pie: 'Proyección de pulmones y pleura sobre la pared.', fuente: F_PLE },
            { src: R + 'pulmones-in-situ.jpg', alt: 'Pulmones en su posición dentro del tórax', pie: 'Pulmones in situ, vista anterior.', fuente: F_PLE },
            { src: R + 'pulmones-cara-medial.jpg', alt: 'Pulmón derecho e izquierdo, vista medial', pie: 'Caras mediales: compara las impresiones de cada pulmón.', fuente: F_PLE },
            { src: R + 'bronquios-vasos-pulmonares.jpg', alt: 'Bronquios principales con arterias y venas pulmonares', pie: 'Bronquios principales con arterias y venas pulmonares.', fuente: F_PLE },
            { src: R + 'segmentos-broncopulmonares.jpg', alt: 'Segmentos broncopulmonares en colores', pie: 'Segmentos broncopulmonares, vista anterior.', fuente: F_PLE },
            { src: R + 'vias-aereas-intrapulmonares.jpg', alt: 'Esquema de vías aéreas intrapulmonares y alvéolos', pie: 'Vías aéreas intrapulmonares hasta los alvéolos.', fuente: F_PLE },
            { src: R + 'radiografia-torax.jpg', alt: 'Radiografía de tórax posteroanterior', pie: 'Radiografía de tórax: identifica campos pulmonares, silueta cardíaca y cúpulas diafragmáticas.', fuente: F_PPT }
        ],
        enfermeria: [
            'El vértice pulmonar sube por encima de la clavícula: una punción de la vena subclavia puede causar neumotórax.',
            'Al auscultar, el lóbulo medio derecho se escucha por la cara anterior y los lóbulos inferiores sobre todo por la espalda.',
            'Después de una intubación se auscultan ambos campos: si sólo se escucha el derecho, el tubo pudo entrar al bronquio principal derecho.',
            'En un derrame pleural el líquido se acumula en el receso costodiafragmático; por eso la matidez aparece primero en las bases.'
        ],
        errores: [
            'Decir que las arterias pulmonares llevan sangre oxigenada: es al revés, las venas pulmonares son las que la llevan.',
            'Asignar tres lóbulos al pulmón izquierdo: tiene dos, y la língula es parte del lóbulo superior.',
            'Confundir pleura visceral (sobre el pulmón) con parietal (sobre la pared).'
        ],
        loQueDebesSaber: [
            'Límites de la tráquea (C6 a T4–T5) y la carina.',
            'Por qué el bronquio derecho recibe los cuerpos extraños.',
            'Diferencias entre pulmón derecho e izquierdo: lóbulos, fisuras e impresiones.',
            'Elementos del hilio pulmonar.',
            'Hojas de la pleura, cavidad pleural y recesos.'
        ],
        laminas: [
            { id: 'tx-pulmon-izq', src: R + 'lamina-pulmon-izquierdo.jpg', titulo: 'Pulmón izquierdo, cara mediastínica (números 12 a 14)', fuente: F_TALLER,
              marcas: [{ n: '12', r: 'Surco de la aorta' }, { n: '13', r: 'Arteria pulmonar' }, { n: '14', r: 'Impresión cardíaca' }],
              distractores: ['Bronquio principal', 'Vena pulmonar', 'Fisura oblicua'] },
            { id: 'tx-pulmon-der', src: R + 'lamina-pulmon-derecho.jpg', titulo: 'Pulmón derecho, cara mediastínica (números 15 a 17)', fuente: F_TALLER,
              marcas: [{ n: '15', r: 'Vena pulmonar' }, { n: '16', r: 'Surco del esófago' }, { n: '17', r: 'Nódulos linfáticos broncopulmonares' }],
              distractores: ['Arteria pulmonar', 'Bronquio principal', 'Ligamento pulmonar'] }
        ],
        minicaso: {
            situacion: 'Un niño de 3 años llega con tos súbita después de jugar con maní. La radiografía muestra atrapamiento de aire en el pulmón derecho.',
            preguntas: ['¿Por qué el cuerpo extraño se fue al pulmón derecho?',
                        '¿Qué estructura de la tráquea desencadenó el reflejo de tos al paso del cuerpo extraño?',
                        '¿En qué cara del tórax auscultarías mejor el lóbulo inferior derecho?']
        },
        fuente: 'Presentación Pleura y pulmones; Guía cardiorrespiratorio y Taller Tórax (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- CORAZÓN ---------------- */
    CE.contenido('corazon', {
        revisado: false,
        prerrequisitos: ['Pared torácica: ángulo esternal y espacios intercostales.', 'Circulación mayor y menor (tema de pulmón).'],
        ideaPrincipal: 'El corazón es una bomba doble ubicada en el mediastino medio dentro del pericardio: el lado derecho envía sangre a los pulmones y el izquierdo al resto del cuerpo. Sus válvulas aseguran que la sangre avance en un solo sentido.',
        secciones: [
            { titulo: 'Mediastino y pericardio',
              lista: ['Mediastino: espacio central del tórax entre ambas pleuras. Se divide en superior e inferior por un plano que pasa por el ángulo esternal (T4–T5); el inferior tiene partes anterior, media (corazón y pericardio) y posterior.',
                      'Pericardio fibroso: saco externo resistente, fijo al diafragma y a los grandes vasos.',
                      'Pericardio seroso: hoja parietal (tapiza el fibroso) y hoja visceral o epicardio (sobre el corazón). Entre ambas está la cavidad pericárdica con una pequeña cantidad de líquido.'] },
            { titulo: 'Configuración externa',
              lista: ['Posición: detrás del esternón, dos tercios a la izquierda de la línea media. El vértice (ápex) está en el 5.º espacio intercostal izquierdo, línea medioclavicular: allí se palpa el choque de la punta.',
                      'Caras: esternocostal (anterior, sobre todo ventrículo derecho), diafragmática (inferior, sobre todo ventrículo izquierdo), pulmonar izquierda y base (posterior, sobre todo aurícula izquierda).',
                      'Surcos: coronario (auriculoventricular) e interventriculares anterior y posterior; por ellos corren las arterias coronarias.',
                      'Grandes vasos: venas cavas superior e inferior (llegan a la AD), tronco pulmonar (sale del VD), venas pulmonares (llegan a la AI) y aorta (sale del VI).'] },
            { titulo: 'Configuración interna: las cuatro cavidades',
              tabla: { columnas: ['Cavidad', 'Recibe / envía', 'Estructuras que debes identificar'],
                       filas: [['Aurícula derecha', 'Recibe VCS, VCI y seno coronario', 'Orejuela, músculos pectíneos, cresta terminal, fosa oval, orificio del seno coronario'],
                               ['Ventrículo derecho', 'Envía al tronco pulmonar', 'Trabéculas carnosas, trabécula septomarginal, músculos papilares, cuerdas tendinosas, cono arterioso'],
                               ['Aurícula izquierda', 'Recibe las 4 venas pulmonares', 'Orejuela izquierda, orificios de las venas pulmonares'],
                               ['Ventrículo izquierdo', 'Envía a la aorta', 'Pared más gruesa, músculos papilares, cuerdas tendinosas, vestíbulo aórtico']] },
              nota: 'La fosa oval es el recuerdo del agujero oval del corazón fetal, que comunicaba ambas aurículas.' },
            { titulo: 'Válvulas',
              tabla: { columnas: ['Válvula', 'Ubicación', 'Cúspides o valvas'],
                       filas: [['Tricúspide', 'Entre AD y VD', '3: anterior, posterior y septal'],
                               ['Pulmonar', 'Salida del VD al tronco pulmonar', '3 valvas semilunares'],
                               ['Mitral (bicúspide)', 'Entre AI y VI', '2: anterior y posterior'],
                               ['Aórtica', 'Salida del VI a la aorta', '3 valvas semilunares; en sus senos nacen las coronarias']] },
              texto: 'Las válvulas auriculoventriculares se sostienen por cuerdas tendinosas unidas a los músculos papilares, que evitan que se inviertan cuando el ventrículo se contrae.' },
            { titulo: 'Irrigación y drenaje venoso',
              lista: ['Arteria coronaria derecha: ramas del nodo sinoatrial, marginal derecha, interventricular posterior (en la mayoría de las personas) y del nodo auriculoventricular.',
                      'Arteria coronaria izquierda: interventricular anterior (descendente anterior) y circunfleja.',
                      'Venas: la vena cardíaca magna, media y menor drenan al seno coronario, que desemboca en la aurícula derecha.'] },
            { titulo: 'Sistema de conducción',
              texto: 'Nodo sinoatrial (marcapasos, en la AD cerca de la VCS) → nodo auriculoventricular (tabique interauricular) → haz de His → ramas derecha e izquierda → fibras de Purkinje. Por eso el electrocardiograma (diapositiva final de la clase) registra primero la actividad auricular y luego la ventricular.' }
        ],
        figuras: [
            { src: R + 'pericardio.jpg', alt: 'Pericardio in situ y esquema de sus capas', pie: 'Pericardio in situ y esquema de sus hojas (fibroso, seroso parietal y visceral).', fuente: F_PPT },
            { src: R + 'corazon-anterior.jpg', alt: 'Corazón en vista anterior', pie: 'Corazón, cara esternocostal.', fuente: F_PPT },
            { src: R + 'guia-corazon-anterior.jpg', alt: 'Corazón in situ rotulado', pie: 'Vista anterior: cavas, aorta, arteria pulmonar y pulmones.', fuente: F_GUIA },
            { src: R + 'guia-corazon-posterior.jpg', alt: 'Base del corazón en vista posterior rotulada', pie: 'Base y cara posterior: venas pulmonares, aurículas, seno coronario.', fuente: F_GUIA },
            { src: R + 'guia-ventriculo-derecho.jpg', alt: 'Ventrículo derecho abierto rotulado', pie: 'Ventrículo derecho abierto y válvula tricúspide.', fuente: F_GUIA },
            { src: R + 'guia-ventriculo-izquierdo.jpg', alt: 'Ventrículo izquierdo abierto rotulado', pie: 'Ventrículo izquierdo abierto y válvula mitral.', fuente: F_GUIA },
            { src: R + 'guia-arterias-coronarias.jpg', alt: 'Arterias coronarias derecha e izquierda', pie: 'Arterias coronarias derecha e izquierda.', fuente: F_GUIA }
        ],
        enfermeria: [
            'Focos de auscultación: aórtico (2.º espacio intercostal derecho junto al esternón), pulmonar (2.º espacio izquierdo), tricuspídeo (4.º–5.º espacio izquierdo junto al esternón) y mitral (5.º espacio izquierdo, línea medioclavicular).',
            'El choque de la punta en el 5.º espacio intercostal izquierdo te orienta para ubicar los electrodos precordiales.',
            'Una obstrucción de la interventricular anterior compromete la cara anterior del ventrículo izquierdo: es el infarto que más se asocia a falla de bomba.',
            'El taponamiento cardíaco ocurre cuando se acumula líquido o sangre en la cavidad pericárdica y el pericardio fibroso, que no se estira, comprime el corazón.'
        ],
        errores: [
            'Pensar que el corazón está a la izquierda del tórax: está en el centro (mediastino medio), con dos tercios hacia la izquierda.',
            'Decir que la cara anterior es del ventrículo izquierdo: es principalmente del derecho.',
            'Confundir tricúspide (derecha, 3 cúspides) con mitral (izquierda, 2 cúspides).'
        ],
        loQueDebesSaber: [
            'Hojas del pericardio y cavidad pericárdica.',
            'Caras, bordes, surcos y ubicación del ápex.',
            'Qué vasos llegan y salen de cada cavidad.',
            'Estructuras internas de cada cavidad y las cuatro válvulas.',
            'Ramas principales de ambas coronarias y el seno coronario.',
            'Recorrido del sistema de conducción.'
        ],
        laminas: [
            { id: 'tx-saco', src: R + 'lamina-saco-pericardico.jpg', titulo: 'Saco pericárdico sin corazón (números 18 a 21)', fuente: F_TALLER,
              marcas: [{ n: '18', r: 'Aorta ascendente' }, { n: '19', r: 'Tronco pulmonar' }, { n: '20', r: 'Vena pulmonar' }, { n: '21', r: 'Vena cava inferior' }],
              distractores: ['Vena cava superior', 'Seno coronario', 'Nervio frénico'] },
            { id: 'tx-ad', src: R + 'lamina-auricula-derecha.jpg', titulo: 'Aurícula derecha abierta (números 22 a 24)', fuente: F_TALLER,
              marcas: [{ n: '22', r: 'Fosa oval' }, { n: '23', r: 'Orificio del seno coronario' }, { n: '24', r: 'Válvula tricúspide' }],
              distractores: ['Músculos pectíneos', 'Cresta terminal', 'Válvula mitral'] },
            { id: 'tx-vd', src: R + 'lamina-ventriculo-derecho.jpg', titulo: 'Ventrículo derecho abierto (números 25 a 29)', fuente: F_TALLER,
              marcas: [{ n: '25', r: 'Vena cava superior' }, { n: '26', r: 'Aorta ascendente' }, { n: '27', r: 'Tronco pulmonar' }, { n: '28', r: 'Válvula pulmonar' }, { n: '29', r: 'Cuerdas tendinosas' }],
              distractores: ['Trabécula septomarginal', 'Válvula aórtica', 'Vena cava inferior'] },
            { id: 'tx-vi', src: R + 'lamina-ventriculo-izquierdo.jpg', titulo: 'Ventrículo izquierdo abierto (números 30 a 34; el 32 aparece dos veces)', fuente: F_TALLER,
              marcas: [{ n: '30', r: 'Válvula mitral y cuerdas tendinosas' }, { n: '31', r: 'Pared del ventrículo izquierdo' }, { n: '32 arriba', r: 'Arco de la aorta' }, { n: '32 derecha', r: 'Aurícula izquierda' }, { n: '33', r: 'Seno coronario' }, { n: '34', r: 'Vena cava inferior' }],
              distractores: ['Válvula tricúspide', 'Tronco pulmonar'] },
            { id: 'tx-mediastino', src: R + 'lamina-mediastino-lateral.jpg', titulo: 'Mediastino, vista lateral izquierda (números 37 a 39)', fuente: F_TALLER + '. Los números 35 y 36 se revisan con la guía de la docente.',
              marcas: [{ n: '37', r: 'Aorta' }, { n: '38', r: 'Arteria pulmonar izquierda' }, { n: '39', r: 'Vena pulmonar' }],
              distractores: ['Vena ácigos', 'Esófago', 'Nervio vago'] }
        ],
        minicaso: {
            situacion: 'Una paciente de 62 años consulta por dolor opresivo en el pecho. Debes tomar un electrocardiograma de 12 derivaciones y auscultar el corazón.',
            preguntas: ['¿Dónde colocarías el electrodo V4 si debe ir en el 5.º espacio intercostal, línea medioclavicular izquierda? ¿Qué referencia usarías para contar?',
                        '¿En qué foco auscultarías la válvula mitral?',
                        'Si el electrocardiograma sugiere compromiso de la cara anterior del ventrículo izquierdo, ¿qué arteria coronaria sospecharías?']
        },
        fuente: 'Presentación Tórax (A. Moreno); Guía cardiorrespiratorio y Taller Tórax (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'tx-01', tema: 'pared-toracica', subtema: 'Reja costal (irrigación e inervación)', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué costillas son "falsas"?', opciones: ['1.ª a 7.ª', '8.ª a 10.ª', '11.ª y 12.ª', 'Sólo la 12.ª'], correcta: 1,
          explicacion: 'Las falsas (8.ª a 10.ª) llegan al esternón de forma indirecta, uniéndose al cartílago de la costilla superior.' },
        { id: 'tx-02', tema: 'pared-toracica', subtema: 'Reja costal (irrigación e inervación)', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el paquete vasculonervioso intercostal de superior a inferior.', orden: ['Vena intercostal', 'Arteria intercostal', 'Nervio intercostal'],
          explicacion: 'Regla VAN: vena, arteria y nervio, protegidos en el surco costal del borde inferior de la costilla.' },
        { id: 'tx-03', tema: 'pared-toracica', subtema: 'Esternón', tipo: 'multiple', revisado: false,
          enunciado: 'El ángulo esternal (de Louis) se encuentra a la altura de:', opciones: ['1.er cartílago costal', '2.º cartílago costal', '4.º cartílago costal', 'Apófisis xifoides'], correcta: 1,
          explicacion: 'La unión manubrio-cuerpo coincide con el 2.º cartílago costal y es la referencia para contar espacios intercostales.' },
        { id: 'tx-04', tema: 'pared-toracica', subtema: 'Músculos intercostales', tipo: 'vf', revisado: false,
          enunciado: 'Los músculos intercostales externos participan principalmente en la inspiración.', correcta: true,
          explicacion: 'Elevan las costillas. Los internos actúan sobre todo en la espiración forzada.' },
        { id: 'tx-05', tema: 'pared-toracica', subtema: 'Músculos intercostales', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada orificio del diafragma con su nivel vertebral.',
          pares: [['Vena cava inferior', 'T8'], ['Esófago', 'T10'], ['Aorta', 'T12']],
          explicacion: 'Una forma de recordarlo: 8, 10, 12, de adelante (cava) hacia atrás (aorta).' },
        { id: 'tx-06', tema: 'pared-toracica', subtema: 'Glándula mamaria', tipo: 'multiple', revisado: false,
          enunciado: '¿Hacia dónde drena la mayor parte de la linfa de la glándula mamaria?', opciones: ['Nódulos paraesternales', 'Nódulos axilares', 'Nódulos cervicales', 'Nódulos inguinales'], correcta: 1,
          explicacion: 'Más del 75 % drena a los nódulos axilares; por eso se valoran en el examen de mama.' },
        { id: 'tx-07', tema: 'pared-toracica', subtema: 'Glándula mamaria', tipo: 'abierta', revisado: false,
          enunciado: 'Describe la estructura de la glándula mamaria desde los lóbulos hasta el pezón.',
          modelo: 'Tiene 15 a 20 lóbulos de tejido glandular; cada lóbulo drena por un conducto lactífero que se dilata en un seno lactífero antes de abrirse en el pezón. Los ligamentos suspensorios la sostienen desde la piel hasta la fascia pectoral.',
          explicacion: 'Revisa que hayas nombrado lóbulos, conductos, senos lactíferos y ligamentos suspensorios.' },

        { id: 'tx-08', tema: 'via-aerea-pulmon', subtema: 'Tráquea', tipo: 'multiple', revisado: false,
          enunciado: '¿A qué nivel se bifurca la tráquea?', opciones: ['C6', 'T1', 'T4–T5 (ángulo esternal)', 'T10'], correcta: 2,
          explicacion: 'Se divide en los bronquios principales a nivel del ángulo esternal; allí está la carina.' },
        { id: 'tx-09', tema: 'via-aerea-pulmon', subtema: 'Bronquios', tipo: 'multiple', revisado: false,
          enunciado: 'Un cuerpo extraño aspirado suele alojarse en el bronquio principal derecho porque es:', opciones: ['Más largo y estrecho', 'Más corto, ancho y vertical', 'Más horizontal', 'El único con cartílago'], correcta: 1,
          explicacion: 'Su trayecto casi vertical y su mayor calibre favorecen el paso de objetos aspirados.' },
        { id: 'tx-10', tema: 'via-aerea-pulmon', subtema: 'Pulmón', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada característica con el pulmón correcto.',
          pares: [['Tres lóbulos', 'Pulmón derecho'], ['Fisura horizontal', 'Pulmón derecho'], ['Língula', 'Pulmón izquierdo'], ['Escotadura cardíaca', 'Pulmón izquierdo']],
          explicacion: 'El derecho tiene 3 lóbulos y 2 fisuras; el izquierdo, 2 lóbulos, escotadura cardíaca y língula.' },
        { id: 'tx-11', tema: 'via-aerea-pulmon', subtema: 'Pulmón', tipo: 'vf', revisado: false,
          enunciado: 'Las venas pulmonares llevan sangre oxigenada hacia la aurícula izquierda.', correcta: true,
          explicacion: 'En la circulación menor, las venas son las que llevan sangre oxigenada.' },
        { id: 'tx-12', tema: 'via-aerea-pulmon', subtema: 'Pleura', tipo: 'multiple', revisado: false,
          enunciado: '¿En qué receso pleural se acumula primero el líquido de un derrame?', opciones: ['Costomediastínico', 'Costodiafragmático', 'Cúpula pleural', 'Ligamento pulmonar'], correcta: 1,
          explicacion: 'Es la parte más declive de la cavidad pleural con la persona de pie.' },
        { id: 'tx-13', tema: 'via-aerea-pulmon', subtema: 'Pleura', tipo: 'vf', revisado: false,
          enunciado: 'La pleura visceral es muy sensible al dolor.', correcta: false,
          explicacion: 'La sensible es la pleura parietal (nervios intercostales y frénico). La visceral no tiene inervación dolorosa somática.' },

        { id: 'tx-14', tema: 'corazon', subtema: 'Configuración externa', tipo: 'multiple', revisado: false,
          enunciado: '¿Dónde se ubica normalmente el vértice (ápex) del corazón?', opciones: ['2.º espacio intercostal derecho', '4.º espacio intercostal paraesternal derecho', '5.º espacio intercostal izquierdo, línea medioclavicular', '7.º espacio intercostal, línea axilar media'], correcta: 2,
          explicacion: 'Allí se palpa el choque de la punta y se ausculta el foco mitral.' },
        { id: 'tx-15', tema: 'corazon', subtema: 'Configuración externa', tipo: 'multiple', revisado: false,
          enunciado: 'La cara esternocostal (anterior) del corazón está formada principalmente por:', opciones: ['Ventrículo izquierdo', 'Aurícula izquierda', 'Ventrículo derecho', 'Aurícula derecha'], correcta: 2,
          explicacion: 'El ventrículo derecho ocupa la mayor parte de la cara anterior.' },
        { id: 'tx-16', tema: 'corazon', subtema: 'Configuración interna', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada válvula con su número de cúspides o valvas.',
          pares: [['Tricúspide', '3 cúspides (anterior, posterior, septal)'], ['Mitral', '2 cúspides (anterior y posterior)'], ['Aórtica', '3 valvas semilunares']],
          explicacion: 'La mitral es la única bicúspide.' },
        { id: 'tx-17', tema: 'corazon', subtema: 'Configuración interna', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido de la sangre en la circulación menor, empezando en la aurícula derecha.',
          orden: ['Aurícula derecha', 'Válvula tricúspide', 'Ventrículo derecho', 'Válvula pulmonar', 'Tronco pulmonar', 'Pulmones', 'Venas pulmonares', 'Aurícula izquierda'],
          explicacion: 'Aurícula → válvula AV → ventrículo → válvula semilunar → arteria.' },
        { id: 'tx-18', tema: 'corazon', subtema: 'Configuración interna', tipo: 'multiple', revisado: false,
          enunciado: 'La fosa oval, en la aurícula derecha, es el resto de:', opciones: ['El conducto arterioso', 'El agujero oval fetal', 'El seno venoso', 'La válvula de la cava inferior'], correcta: 1,
          explicacion: 'En el feto el agujero oval comunicaba ambas aurículas; al nacer se cierra y queda la fosa oval.' },
        { id: 'tx-19', tema: 'corazon', subtema: 'Configuración externa', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuál es una rama de la arteria coronaria izquierda?', opciones: ['Marginal derecha', 'Interventricular anterior', 'Rama del nodo sinoatrial (habitual)', 'Interventricular posterior (habitual)'], correcta: 1,
          explicacion: 'La coronaria izquierda da la interventricular anterior y la circunfleja.' },
        { id: 'tx-20', tema: 'corazon', subtema: 'Configuración interna', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el sistema de conducción del corazón.',
          orden: ['Nodo sinoatrial', 'Nodo auriculoventricular', 'Haz de His', 'Ramas derecha e izquierda', 'Fibras de Purkinje'],
          explicacion: 'El impulso nace en el nodo sinoatrial, marcapasos natural.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-tx-01', tema: 'pared-toracica', revisado: false, frente: 'Costillas verdaderas, falsas y flotantes', reverso: 'Verdaderas 1–7 (directas al esternón), falsas 8–10 (indirectas, forman el margen costal), flotantes 11–12 (libres).' },
        { id: 'fc-tx-02', tema: 'pared-toracica', revisado: false, frente: 'Ángulo esternal', reverso: 'Unión manubrio-cuerpo del esternón, a nivel del 2.º cartílago costal y de T4–T5. Referencia para contar espacios intercostales.' },
        { id: 'fc-tx-03', tema: 'pared-toracica', revisado: false, frente: 'Orden del paquete vasculonervioso intercostal', reverso: 'VAN: vena, arteria, nervio (de arriba abajo), en el surco costal del borde inferior de la costilla.' },
        { id: 'fc-tx-04', tema: 'pared-toracica', revisado: false, frente: 'Orificios del diafragma y sus niveles', reverso: 'Vena cava inferior T8, esófago T10, aorta T12.' },
        { id: 'fc-tx-05', tema: 'pared-toracica', revisado: false, frente: 'Inervación del diafragma', reverso: 'Nervio frénico (C3, C4, C5).' },
        { id: 'fc-tx-06', tema: 'pared-toracica', revisado: false, frente: 'Arteria torácica interna', reverso: 'Rama de la subclavia; desciende 1 cm lateral al esternón y da las intercostales anteriores.' },
        { id: 'fc-tx-07', tema: 'pared-toracica', revisado: false, frente: 'Drenaje linfático de la mama', reverso: 'Más del 75 % a nódulos axilares (sobre todo pectorales); el resto a paraesternales.' },
        { id: 'fc-tx-08', tema: 'via-aerea-pulmon', revisado: false, frente: 'Carina', reverso: 'Cresta en la bifurcación traqueal (T4–T5). Muy sensible: desencadena tos.' },
        { id: 'fc-tx-09', tema: 'via-aerea-pulmon', revisado: false, frente: 'Diferencias del bronquio principal derecho', reverso: 'Más corto, ancho y vertical que el izquierdo: recibe cuerpos extraños y tubos endotraqueales mal ubicados.' },
        { id: 'fc-tx-10', tema: 'via-aerea-pulmon', revisado: false, frente: 'Lóbulos y fisuras del pulmón derecho', reverso: '3 lóbulos (superior, medio, inferior); fisuras oblicua y horizontal.' },
        { id: 'fc-tx-11', tema: 'via-aerea-pulmon', revisado: false, frente: 'Lóbulos y fisuras del pulmón izquierdo', reverso: '2 lóbulos (superior e inferior), fisura oblicua, escotadura cardíaca y língula.' },
        { id: 'fc-tx-12', tema: 'via-aerea-pulmon', revisado: false, frente: 'Elementos del hilio pulmonar', reverso: 'Bronquio principal, arteria pulmonar, 2 venas pulmonares, vasos bronquiales, linfáticos y nervios.' },
        { id: 'fc-tx-13', tema: 'via-aerea-pulmon', revisado: false, frente: 'Pleura visceral vs. parietal', reverso: 'Visceral: cubre el pulmón, no duele. Parietal: tapiza la pared (costal, mediastínica, diafragmática, cervical), sí duele.' },
        { id: 'fc-tx-14', tema: 'via-aerea-pulmon', revisado: false, frente: 'Receso costodiafragmático', reverso: 'Parte más baja de la cavidad pleural; allí se acumula el líquido de un derrame.' },
        { id: 'fc-tx-15', tema: 'corazon', revisado: false, frente: 'Hojas del pericardio', reverso: 'Fibroso (externo) y seroso: parietal y visceral (epicardio). Entre ellas, la cavidad pericárdica.' },
        { id: 'fc-tx-16', tema: 'corazon', revisado: false, frente: 'Ubicación del ápex cardíaco', reverso: '5.º espacio intercostal izquierdo, línea medioclavicular (foco mitral).' },
        { id: 'fc-tx-17', tema: 'corazon', revisado: false, frente: '¿Qué llega a la aurícula derecha?', reverso: 'Vena cava superior, vena cava inferior y seno coronario.' },
        { id: 'fc-tx-18', tema: 'corazon', revisado: false, frente: 'Válvula mitral', reverso: 'Entre aurícula y ventrículo izquierdos; 2 cúspides (anterior y posterior).' },
        { id: 'fc-tx-19', tema: 'corazon', revisado: false, frente: 'Ramas de la coronaria izquierda', reverso: 'Interventricular anterior (descendente anterior) y circunfleja.' },
        { id: 'fc-tx-20', tema: 'corazon', revisado: false, frente: 'Focos de auscultación', reverso: 'Aórtico: 2.º EIC derecho paraesternal. Pulmonar: 2.º EIC izquierdo. Tricuspídeo: 4.º–5.º EIC izquierdo paraesternal. Mitral: 5.º EIC izquierdo LMC.' },
        { id: 'fc-tx-21', tema: 'corazon', revisado: false, frente: 'Sistema de conducción', reverso: 'Nodo sinoatrial → nodo AV → haz de His → ramas derecha e izquierda → fibras de Purkinje.' }
    ]);
})();
