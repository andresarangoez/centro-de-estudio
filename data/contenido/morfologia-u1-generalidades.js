/* ============================================================
   CONTENIDO · Morfología · Unidad I · Generalidades
   Elaborado a partir de: Terminología anatómica, Generalidades de
   osteología y artrología (presentaciones), PDF de Generalidades
   del sistema óseo, Artrología y Miología (Enf. Mag. Aurora
   Moreno), Embriología enfermería y Morfología del desarrollo,
   Cráneo (Dr. Ariel Murcia), Guía de estudio Cráneo–columna–SN y
   Taller Columna vertebral y cráneo (Cátedra de Morfología FUCS).
   Verificado contra Moore y Langman.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/generalidades/';
    var F_TER = 'Presentación Terminología anatómica, Morfología FUCS';
    var F_OST = 'Generalidades del sistema óseo, Enf. Mag. Aurora Moreno';
    var F_ART = 'Artrología, Enf. Mag. Aurora Moreno';
    var F_MIO = 'Generalidades del sistema muscular, Enf. Mag. Aurora Moreno';
    var F_EMB = 'Embriología enfermería, Enf. Mag. Aurora Moreno';
    var F_DES = 'Morfología del desarrollo, Morfología FUCS';
    var F_GUIA = 'Guía de estudio Cráneo, columna vertebral y sistema nervioso, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_CRA = 'Presentación Cráneo, Dr. Ariel Murcia Herrera';
    var F_TAL = 'Taller Columna vertebral y cráneo, Dr. Ariel Murcia Herrera (FUCS)';

    /* ---------------- NOMENCLATURA ---------------- */
    CE.contenido('nomenclatura', {
        revisado: false,
        prerrequisitos: ['Ninguno: es el punto de partida de toda la asignatura.'],
        ideaPrincipal: 'La anatomía tiene su propio idioma. Todas las descripciones parten de la posición anatómica y usan planos y términos de relación fijos, para que cualquier profesional entienda exactamente dónde está una estructura o una lesión.',
        secciones: [
            { titulo: 'Qué estudia la morfología',
              texto: 'La morfología estudia la forma del cuerpo humano. Tiene tres ramas: morfología del desarrollo (mal llamada sólo "embriología", porque va más allá de la etapa embrionaria), morfología macroscópica o anatomía humana (clases y prácticas en anfiteatro) y morfología microscópica o histología (clases y laboratorio).' },
            { titulo: 'Posición anatómica',
              texto: 'Persona de pie, cabeza y mirada al frente, miembros superiores a los lados del tronco con las palmas hacia adelante, miembros inferiores juntos y pies hacia adelante. Aunque el paciente esté acostado, siempre se describe como si estuviera en esta posición.' },
            { titulo: 'Planos anatómicos',
              tabla: { columnas: ['Plano', 'Orientación', 'Divide el cuerpo en'],
                       filas: [['Sagital (medio si pasa por la línea media)', 'Vertical', 'Derecha e izquierda'],
                               ['Coronal o frontal', 'Vertical, perpendicular al sagital', 'Anterior y posterior'],
                               ['Transversal, horizontal o axial', 'Horizontal', 'Superior e inferior']] } },
            { titulo: 'Términos de relación y de comparación',
              tabla: { columnas: ['Término', 'Significado', 'Opuesto'],
                       filas: [['Anterior o ventral (palmar, plantar)', 'Hacia el frente del cuerpo', 'Posterior o dorsal'],
                               ['Superior, craneal, cefálico o rostral', 'Hacia la cabeza', 'Inferior o caudal'],
                               ['Medial', 'Más cerca del plano medio', 'Lateral'],
                               ['Intermedio', 'Entre una estructura medial y una lateral', '—'],
                               ['Proximal', 'Más cerca de la raíz del miembro', 'Distal'],
                               ['Superficial', 'Más cerca de la superficie', 'Profundo'],
                               ['Interno', 'Hacia el interior de una cavidad u órgano', 'Externo'],
                               ['Ipsilateral', 'Del mismo lado', 'Contralateral']] },
              nota: 'Términos ambiguos que deben evitarse: "frente", "dorso", "en frente de", "detrás", "delante", "por encima", "por debajo", "hacia arriba", "hacia abajo".' },
            { titulo: 'Movimientos',
              lista: ['Flexión (disminuye el ángulo) y extensión (lo aumenta).',
                      'Abducción (aleja de la línea media) y aducción (acerca a la línea media).',
                      'Circunducción: movimiento circular que combina los anteriores.',
                      'Rotación medial y lateral alrededor del eje longitudinal.',
                      'Pronación (palma hacia atrás) y supinación (palma hacia adelante).',
                      'Pie: inversión, eversión, dorsiflexión y plantiflexión. Mano: oposición del pulgar.'] },
            { titulo: 'Cavidades del cuerpo',
              texto: 'Craneal; torácica (con las cavidades pleurales, el mediastino y la cavidad pericárdica); abdominal (con la cavidad peritoneal) y pélvica.' },
            { titulo: 'Raíces y sufijos médicos',
              tabla: { columnas: ['Raíz o sufijo', 'Significado', 'Ejemplo'],
                       filas: [['Artro-', 'Articulación', 'Artralgia'], ['Cardio-', 'Corazón', 'Cardiopatía'], ['Cisto-', 'Vejiga', 'Cistitis'],
                               ['Cole-', 'Bilis', 'Colecistitis'], ['Entero-', 'Intestino', 'Enteritis'], ['Flebo-', 'Vena', 'Flebitis'],
                               ['-algia', 'Dolor', 'Artralgia'], ['-ectomía', 'Extirpar', 'Apendicectomía'], ['-itis', 'Inflamación', 'Apendicitis'],
                               ['-ostomía', 'Abertura artificial', 'Colostomía'], ['-penia', 'Disminución', 'Leucocitopenia'], ['-pnea', 'Respiración', 'Apnea'],
                               ['-rrafia', 'Sutura', 'Herniorrafia'], ['-rragia', 'Salida de sangre', 'Hemorragia'], ['-scopia', 'Visualización', 'Endoscopia']] } },
            { titulo: 'Posiciones del paciente',
              tabla: { columnas: ['Posición', 'Descripción', 'Uso o consideración'],
                       filas: [['Decúbito supino (dorsal)', 'Boca arriba, brazos a los lados, piernas extendidas', 'Posición básica de examen y de muchas cirugías'],
                               ['Decúbito prono (ventral)', 'Boca abajo', 'Procedimientos de la región dorsal'],
                               ['Decúbito lateral o de Sims', 'De lado, pierna superior flexionada', 'Enemas, examen rectal'],
                               ['Trendelenburg', 'Supino con la cabeza más baja que los pies', 'Cirugía de abdomen inferior y pelvis. Disminuye el volumen pulmonar y aumenta la presión intracraneal'],
                               ['Trendelenburg invertido', 'Cabeza más alta que los pies', 'Cirugía de tiroides, cuello, hombros'],
                               ['Fowler', 'Sentado, como un sillón', 'Facilita la respiración; cirugía de hombro, nasofaringe'],
                               ['Litotomía', 'Supino con piernas en estribos', 'Procedimientos perineales, vaginales, urológicos. Vigilar pulsos distales y edema']] } },
            { titulo: 'Un poco de historia',
              lista: ['Hipócrates: padre de la medicina. Aristóteles: anatomía comparada; usó el término "anatome".',
                      'Herófilo: padre de la anatomía científica. Erasístrato: padre de la fisiología. Galeno: su anatomía se basaba en disecciones de animales.',
                      'Leonardo da Vinci, Andrés Vesalio ("De humani corporis fabrica") y William Harvey (circulación de la sangre).'] }
        ],
        figuras: [
            { src: R + 'planos-anatomicos-3d.jpg', alt: 'Cuerpo en posición anatómica con los tres planos', pie: 'Planos anatómicos sobre la posición anatómica.', fuente: F_TER },
            { src: R + 'terminos-de-relacion.jpg', alt: 'Figura humana con términos de relación rotulados', pie: 'Términos de relación: superior, inferior, medial, lateral, proximal, distal.', fuente: F_TER },
            { src: R + 'regiones-y-cuadrantes.jpg', alt: 'Regiones y cuadrantes abdominales', pie: 'Regiones y cuadrantes del abdomen.', fuente: F_TER },
            { src: R + 'posicion-decubito-supino.jpg', alt: 'Paciente en decúbito supino', pie: 'Decúbito supino o dorsal.', fuente: F_TER },
            { src: R + 'posicion-decubito-prono.jpg', alt: 'Paciente en decúbito prono', pie: 'Decúbito prono o ventral.', fuente: F_TER },
            { src: R + 'posicion-trendelenburg.jpg', alt: 'Paciente en posición de Trendelenburg', pie: 'Posición de Trendelenburg.', fuente: F_TER },
            { src: R + 'posicion-sims.jpg', alt: 'Paciente en posición de Sims', pie: 'Posición de Sims o decúbito lateral.', fuente: F_TER }
        ],
        enfermeria: [
            'En la nota de enfermería describe siempre con términos anatómicos: "herida de 3 cm en cara anterior del tercio distal del antebrazo derecho".',
            'Conocer las posiciones del paciente es parte del cuidado: Fowler para la disnea, Sims para enemas, Trendelenburg con vigilancia respiratoria.',
            'Las raíces y sufijos te permiten entender términos nuevos sin memorizarlos uno por uno.'
        ],
        errores: ['Describir según cómo está acostado el paciente y no según la posición anatómica.',
                  'Usar "arriba" o "abajo" en vez de superior e inferior.',
                  'Confundir pronación y supinación: en supinación la palma mira hacia adelante (como sostener una sopa).'],
        loQueDebesSaber: ['Posición anatómica exacta.', 'Los tres planos y lo que divide cada uno.', 'Términos de relación y de comparación con su opuesto.', 'Movimientos básicos.', 'Posiciones del paciente y su uso.'],
        minicaso: {
            situacion: 'Un paciente llega con una herida en el brazo. Tu compañera escribe: "herida arriba del codo por delante". El paciente está acostado de lado.',
            preguntas: ['Reescribe la descripción con términos anatómicos.', '¿Por qué no importa que el paciente esté acostado de lado?', 'Si la herida está más cerca del hombro que del codo, ¿qué término de comparación usarías?']
        },
        fuente: 'Presentación Terminología anatómica (Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- OSTEOLOGÍA, ARTROLOGÍA, MIOLOGÍA ---------------- */
    CE.contenido('generalidades-osteo-artro-mio', {
        revisado: false,
        prerrequisitos: ['Nomenclatura y movimientos.'],
        ideaPrincipal: 'Huesos, articulaciones y músculos forman el aparato locomotor: los huesos dan soporte y protección, las articulaciones permiten el movimiento en grados distintos y los músculos lo producen al contraerse.',
        secciones: [
            { titulo: 'Osteología: los huesos',
              lista: ['Estudio de los huesos. Son órganos vivos de tejido conjuntivo rígido, de origen mesodérmico: se remodelan, se atrofian o se hipertrofian.',
                      'Funciones: protección, soporte, locomoción, depósito de minerales (calcio y fósforo) y producción de células sanguíneas en la médula ósea.',
                      'Componentes: células (osteoblastos forman hueso, osteocitos lo mantienen, osteoclastos lo reabsorben) y matriz extracelular (colágeno y minerales).',
                      'Tipos de tejido: compacto (denso, en la superficie) y esponjoso (trabéculas, en el interior).',
                      'El esqueleto adulto tiene alrededor de 206 huesos: esqueleto axial (cráneo, columna, costillas, esternón) y apendicular (miembros y cinturas).'] },
            { titulo: 'Clasificación de los huesos por su forma',
              tabla: { columnas: ['Tipo', 'Característica', 'Ejemplos'],
                       filas: [['Largos', 'Longitud mayor que el ancho; tienen diáfisis', 'Húmero, fémur, tibia, radio'],
                               ['Cortos', 'Ancho y largo casi iguales', 'Huesos del carpo y del tarso'],
                               ['Planos', 'Delgados, protegen', 'Huesos del cráneo, esternón, costillas, escápula'],
                               ['Irregulares', 'Forma compleja', 'Vértebras'],
                               ['Sesamoideos', 'Dentro de tendones', 'Rótula'],
                               ['Neumáticos', 'Con cavidades de aire (senos)', 'Frontal, maxilar, esfenoides'],
                               ['Suturales (wormianos)', 'Pequeños, dentro de las suturas', 'Del cráneo']] } },
            { titulo: 'Partes de un hueso largo y accidentes óseos',
              lista: ['Diáfisis (cuerpo), epífisis (extremos), metáfisis (zona entre ambas donde está el cartílago de crecimiento), cartílago articular, periostio (membrana externa), endostio y cavidad medular.',
                      'Accidentes óseos, elevaciones: línea, cresta, tubérculo, tuberosidad, protuberancia, espina, apófisis, cabeza, cóndilo, epicóndilo, trocánter, maléolo.',
                      'Accidentes óseos, depresiones: fosa, fóvea, faceta, surco, escotadura, canal, conducto, agujero, meato, fisura.'] },
            { titulo: 'Artrología: las articulaciones',
              tabla: { columnas: ['Clasificación estructural', 'Funcional', 'Tipos y ejemplos'],
                       filas: [['Fibrosas (tejido conectivo denso)', 'Sinartrosis (sin movimiento) o anfiartrosis', 'Suturas del cráneo (escamosa, dentada, armónica); sindesmosis (ligamento tibioperoneo, membrana interósea); gónfosis (diente en el alvéolo)'],
                               ['Cartilaginosas', 'Anfiartrosis (poco movimiento)', 'Sincondrosis (cartílago hialino: esfeno-occipital en el joven); sínfisis (fibrocartílago: sínfisis del pubis, discos intervertebrales)'],
                               ['Sinoviales', 'Diartrosis (gran movimiento)', 'Rodilla, hombro, codo, cadera']] },
              nota: 'Sinostosis: fusión de dos huesos cuando se osifica el tejido que los unía.' },
            { titulo: 'Estructura de una articulación sinovial (diartrosis)',
              lista: ['Protección: cápsula articular.', 'Amortiguación y deslizamiento: cartílago articular y líquido sinovial.',
                      'Adaptación de superficies: rodete articular, meniscos y discos articulares.',
                      'Mantenimiento: membrana fibrosa y ligamentos capsulares, intracapsulares y extracapsulares.'] },
            { titulo: 'Tipos de articulaciones sinoviales',
              tabla: { columnas: ['Tipo', 'Forma de las superficies', 'Ejes / movimiento', 'Ejemplo'],
                       filas: [['Artrodia (plana)', 'Planas', 'Deslizamiento', 'Intercarpianas, acromioclavicular'],
                               ['Gínglimo (tróclea o bisagra)', 'Convexa en cóncava', 'Uniaxial: flexión–extensión', 'Codo, interfalángicas'],
                               ['Trocoide (pivote)', 'Cilindro en un anillo', 'Uniaxial: rotación', 'Atlantoaxial media, radiocubital proximal'],
                               ['Condílea (elipsoidea)', 'Ovalada en depresión ovalada', 'Biaxial', 'Radiocarpiana, metacarpofalángicas'],
                               ['Silla de montar', 'Superficies recíprocas en silla', 'Biaxial', 'Carpometacarpiana del pulgar'],
                               ['Enartrosis (esferoidea)', 'Esfera en copa', 'Triaxial: todos los movimientos', 'Hombro, cadera']] } },
            { titulo: 'Miología: los músculos',
              lista: ['Estudio de los músculos: más de 600, cada uno es un órgano con tejido muscular, conectivo y nervioso.',
                      'Propiedades: contractilidad (se acorta), conductibilidad (conduce el potencial de acción), excitabilidad y elasticidad o plasticidad (vuelve a su longitud inicial).',
                      'Envolturas: epimisio (rodea todo el músculo), perimisio (cada fascículo) y endomisio (cada fibra).',
                      'El músculo esquelético tiene origen e inserción y se une al hueso por tendones.'],
              tabla: { columnas: ['Tipo de músculo', 'Control', 'Ubicación y rasgos'],
                       filas: [['Liso', 'Involuntario (sistema nervioso autónomo)', 'Vísceras y vasos; sin estrías'],
                               ['Estriado esquelético', 'Voluntario', 'Unido al esqueleto; fibras largas multinucleadas'],
                               ['Estriado cardíaco', 'Involuntario', 'Corazón; fibras ramificadas con discos intercalados; contracción rítmica']] } },
            { titulo: 'Clasificación de los músculos por su forma',
              lista: ['Planos (oblicuo externo, recto del abdomen), peniformes: unipeniformes, bipeniformes (gastrocnemio) y multipeniformes (deltoides).',
                      'Fusiformes (bíceps braquial), cuadrados (pronador cuadrado), circulares o esfinterianos (orbicular de la boca) y poligástricos o multicefálicos (tríceps braquial).'] }
        ],
        figuras: [
            { src: R + 'osteo-esqueleto.jpg', alt: 'Esqueleto humano con número de huesos por región', pie: 'Esqueleto humano: 206 a 210 huesos.', fuente: F_OST },
            { src: R + 'osteo-partes-hueso-largo.jpg', alt: 'Partes de un hueso largo', pie: 'Partes de un hueso largo: diáfisis, epífisis, metáfisis, cartílago.', fuente: F_OST },
            { src: R + 'osteo-hueso-compacto-esponjoso.jpg', alt: 'Hueso compacto y esponjoso', pie: 'Tejido óseo compacto y esponjoso.', fuente: F_OST },
            { src: R + 'artro-clasificacion.jpg', alt: 'Esquema de clasificación de las articulaciones', pie: 'Clasificación estructural y funcional de las articulaciones.', fuente: F_ART },
            { src: R + 'artro-sinovial-estructura.jpg', alt: 'Estructura de una articulación sinovial', pie: 'Estructura de una articulación sinovial.', fuente: F_ART },
            { src: R + 'artro-ginglimo.jpg', alt: 'Articulación en gínglimo', pie: 'Gínglimo o tróclea (bisagra).', fuente: F_ART },
            { src: R + 'artro-trocoide.jpg', alt: 'Articulación trocoide', pie: 'Trocoide o pivote.', fuente: F_ART },
            { src: R + 'artro-enartrosis.jpg', alt: 'Enartrosis', pie: 'Enartrosis: hombro y cadera.', fuente: F_ART },
            { src: R + 'artro-silla-montar.jpg', alt: 'Articulación en silla de montar', pie: 'Silla de montar: pulgar.', fuente: F_ART },
            { src: R + 'mio-clasificacion.jpg', alt: 'Tipos de tejido muscular', pie: 'Músculo liso, estriado esquelético y cardíaco.', fuente: F_MIO },
            { src: R + 'mio-composicion-histologica.jpg', alt: 'Epimisio, perimisio y endomisio', pie: 'Composición histológica: epimisio, perimisio y endomisio.', fuente: F_MIO },
            { src: R + 'mio-penado.jpg', alt: 'Músculo peniforme', pie: 'Músculo peniforme.', fuente: F_MIO }
        ],
        enfermeria: [
            'Las inyecciones intramusculares se aplican en músculos grandes (deltoides, vasto lateral, glúteo) evitando nervios y vasos: conocer su forma y ubicación es seguridad del paciente.',
            'La inmovilización prolongada atrofia músculos y desmineraliza huesos: por eso la movilización temprana es un cuidado de enfermería.',
            'Al valorar arcos de movimiento usas los términos flexión, extensión, abducción y rotación según el tipo de articulación.'
        ],
        errores: ['Pensar que el hueso es un tejido "muerto".', 'Confundir sínfisis (cartilaginosa) con sinovial.', 'Clasificar el músculo cardíaco como liso: es estriado, aunque involuntario.'],
        loQueDebesSaber: ['Funciones, células y clasificación de los huesos.', 'Partes de un hueso largo.', 'Clasificación estructural y funcional de las articulaciones.', 'Seis tipos de articulación sinovial con un ejemplo.', 'Tres tipos de músculo y sus envolturas.'],
        minicaso: {
            situacion: 'Debes aplicar una vacuna intramuscular en el deltoides a un adulto.',
            preguntas: ['¿Qué tipo de músculo es el deltoides según la forma de sus fibras?', '¿Qué articulación está debajo del deltoides y de qué tipo es?', '¿Qué movimientos permite esa articulación?']
        },
        fuente: 'Generalidades de osteología, artrología y miología (A. Moreno); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- EMBRIOLOGÍA ---------------- */
    CE.contenido('embriologia', {
        revisado: false,
        prerrequisitos: ['Célula, mitosis y meiosis (Biología).'],
        ideaPrincipal: 'El desarrollo empieza con la fecundación en la trompa uterina. En la primera semana el cigoto se divide y viaja al útero; en la segunda se implanta; en la tercera forma las tres capas germinativas, de las que derivan todos los órganos. Desde la novena semana el feto crece y madura.',
        secciones: [
            { titulo: 'Períodos del desarrollo prenatal',
              tabla: { columnas: ['Período', 'Cuándo', 'Qué ocurre'],
                       filas: [['Preembrionario', 'Fecundación a final de la 2.ª semana', 'Segmentación, blastocisto, implantación, disco bilaminar'],
                               ['Embrionario', '3.ª a 8.ª semana', 'Capas germinativas y formación de todos los órganos (organogénesis)'],
                               ['Fetal', '9.ª semana al nacimiento', 'Crecimiento y maduración de órganos y sistemas']] } },
            { titulo: 'Primera semana: fecundación y segmentación',
              lista: ['La fecundación ocurre en la ampolla de la trompa uterina. El espermatozoide atraviesa la corona radiada, se une a la zona pelúcida y sus membranas se fusionan con las del ovocito; la zona se vuelve impermeable a otros espermatozoides.',
                      'Resultado: cigoto con 46 cromosomas (22 pares de autosomas + XX o XY), determinación del sexo cromosómico e inicio de la segmentación.',
                      'A las 30 horas hay 2 células; hacia el 3.er–4.º día, unas 16 células forman la mórula.',
                      'Hacia el 4.º–5.º día se forma el blastocisto: masa celular interna (embrioblasto → embrión) y masa externa (trofoblasto → placenta).',
                      'Recorre unos 15 cm por la trompa hasta el útero en unos 7 días y comienza la implantación.'] },
            { titulo: 'Segunda semana: disco bilaminar',
              lista: ['El trofoblasto se divide en citotrofoblasto y sincitiotrofoblasto, que invade el endometrio.',
                      'El embrioblasto forma un disco de dos capas (epiblasto e hipoblasto). Aparece la cavidad amniótica.',
                      'Se forman lagunas en el sincitiotrofoblasto: inicio de la circulación uteroplacentaria.',
                      'El cuerpo lúteo sigue produciendo progesterona, lo que impide la menstruación.'] },
            { titulo: 'Tercera semana: disco trilaminar',
              texto: 'Por gastrulación aparece la línea primitiva y se forman las tres capas germinativas. Coincide con la primera falta menstrual.',
              tabla: { columnas: ['Capa', 'Principales derivados'],
                       filas: [['Ectodermo', 'Sistema nervioso central y periférico, epidermis, pelo y uñas, partes del ojo y del oído'],
                               ['Mesodermo', 'Huesos, cartílago, músculos, corazón y vasos, sangre, riñones, gónadas'],
                               ['Endodermo', 'Epitelio del tubo digestivo y del árbol respiratorio, hígado, páncreas, vejiga']] } },
            { titulo: 'Cuarta a octava semana',
              lista: ['4.ª semana: cierre del tubo neural (neuroporos craneal y caudal); el corazón empieza a latir hacia el día 22; aparecen arcos faríngeos y esbozos de los brazos.',
                      '5.ª semana: esbozos de brazos y piernas; la cara está en formación.',
                      '6.ª semana: hernia umbilical fisiológica; desarrollo de fosas nasales.',
                      '7.ª–8.ª semana: aparecen los dedos, la cabeza es grande; al final ya existen los esbozos de todas las estructuras esenciales.'] },
            { titulo: 'Anexos embrionarios',
              lista: ['Amnios: saco lleno de líquido amniótico que protege al embrión.', 'Corion: da origen a la placenta.',
                      'Placenta: intercambio materno-fetal. Cordón umbilical: comunica feto y placenta.', 'Saco vitelino: primeras células sanguíneas.'] },
            { titulo: 'Período fetal: hitos',
              tabla: { columnas: ['Semanas', 'Hitos'],
                       filas: [['9–12', 'Cabeza muy grande, párpados fusionados, centros de osificación primarios; a las 12 semanas se diferencia el sexo y se pueden oír los latidos.'],
                               ['13–16', 'Crecimiento rápido; movimientos oculares lentos; se diferencian los ovarios.'],
                               ['17–20', 'La madre percibe los movimientos; vérnix caseoso y lanugo; grasa parda; los testículos inician su descenso.'],
                               ['21–25', 'Gran aumento de peso; los neumocitos tipo II empiezan a producir surfactante.'],
                               ['26–29', 'Abre los ojos; puede sobrevivir si nace; la médula ósea reemplaza al bazo en la formación de sangre (≈ semana 28).'],
                               ['30–38', 'Reflejo pupilar; aumento de grasa; circunferencias de cabeza y abdomen casi iguales; pulmones maduros.']] } },
            { titulo: 'Duración de la gestación',
              lista: ['280 días (40 semanas) contados desde el primer día de la fecha de la última menstruación (FUR); 266 días (38 semanas) desde la fecundación.',
                      'Regla de Naegele para la fecha probable de parto: al primer día de la FUR se le restan 3 meses y se suman 7 días (y un año).'],
              nota: 'La presentación de clase clasifica la edad gestacional como pretérmino 28–37, término 38–40 y postérmino 40–42 semanas. La clasificación de la OMS usa: pretérmino antes de 37 semanas, término de 37 a 41 y postérmino desde 42. Confirma con la docente cuál se evalúa.' }
        ],
        figuras: [
            { src: R + 'embrio-etapas-prenatales.jpg', alt: 'Etapas del desarrollo prenatal', pie: 'Etapa prenatal: períodos preembrionario, embrionario y fetal.', fuente: F_DES },
            { src: R + 'embrio-fases-fecundacion.jpg', alt: 'Fases de la fecundación', pie: 'Fases de la fecundación.', fuente: F_EMB },
            { src: R + 'embrio-trayecto-trompa.jpg', alt: 'Trayecto del cigoto por la trompa uterina', pie: 'Primera semana: del cigoto al blastocisto en el útero.', fuente: F_EMB },
            { src: R + 'embrio-blastocisto.jpg', alt: 'Blastocisto', pie: 'Blastocisto: embrioblasto y trofoblasto.', fuente: F_DES },
            { src: R + 'embrio-implantacion.jpg', alt: 'Implantación', pie: 'Implantación en el endometrio.', fuente: F_DES },
            { src: R + 'embrio-bilaminar-trilaminar.jpg', alt: 'Disco bilaminar a trilaminar', pie: 'Tercera semana: del disco bilaminar al trilaminar.', fuente: F_DES },
            { src: R + 'embrio-fase-trilaminar.jpg', alt: 'Derivados de las capas germinativas', pie: 'Derivados del ectodermo, mesodermo y endodermo.', fuente: F_EMB },
            { src: R + 'embrio-crecimiento-fetal.jpg', alt: 'Crecimiento fetal por semanas', pie: 'Crecimiento del feto de la semana 8 a la 40.', fuente: F_EMB }
        ],
        enfermeria: [
            'Calcular la fecha probable de parto con la regla de Naegele es una tarea diaria en el control prenatal.',
            'Las semanas 3 a 8 son las más sensibles a teratógenos (medicamentos, alcohol, infecciones): muchas mujeres aún no saben que están embarazadas.',
            'Los factores que la presentación asocia a restricción del crecimiento intrauterino (tabaquismo, embarazo múltiple, sustancias psicoactivas, alteraciones del flujo placentario) son temas clave de educación.',
            'El surfactante aparece hacia la semana 24: por eso los prematuros extremos tienen dificultad respiratoria.'
        ],
        errores: ['Decir que la fecundación ocurre en el útero: ocurre en la ampolla de la trompa.', 'Confundir embrioblasto (embrión) con trofoblasto (placenta).', 'Pensar que el período embrionario dura todo el embarazo.'],
        loQueDebesSaber: ['Los tres períodos del desarrollo prenatal.', 'Secuencia cigoto → mórula → blastocisto → implantación.', 'Capas germinativas y sus derivados.', 'Hitos de la 4.ª semana y del período fetal.', 'Duración de la gestación y regla de Naegele.'],
        minicaso: {
            situacion: 'Una mujer cuya fecha de última menstruación fue el 10 de marzo acude a su primer control prenatal.',
            preguntas: ['Calcula la fecha probable de parto con la regla de Naegele.', '¿En qué período del desarrollo estaba el embrión a las 6 semanas?', '¿Por qué es importante que evite medicamentos no formulados en las primeras semanas?']
        },
        fuente: 'Embriología enfermería (A. Moreno); Morfología del desarrollo (Morfología FUCS); Sadler, Langman Embriología médica.'
    });

    /* ---------------- COLUMNA VERTEBRAL ---------------- */
    CE.contenido('columna', {
        revisado: false,
        prerrequisitos: ['Clasificación de huesos (irregulares) y articulaciones (sínfisis, sinoviales).'],
        ideaPrincipal: 'La columna vertebral es un eje flexible de 33 vértebras que sostiene el tronco, protege la médula espinal y permite el movimiento. Todas las vértebras comparten un plan básico, pero cada región tiene rasgos propios que permiten reconocerlas.',
        secciones: [
            { titulo: 'La vértebra típica',
              lista: ['Cuerpo vertebral (adelante): soporta el peso.',
                      'Arco vertebral (atrás): formado por dos pedículos y dos láminas; junto con el cuerpo rodea el agujero vertebral.',
                      'Apófisis: una espinosa (línea media, atrás), dos transversas y cuatro articulares (dos superiores y dos inferiores).',
                      'La superposición de los agujeros vertebrales forma el conducto vertebral, que contiene la médula espinal y sus meninges.',
                      'Entre dos vértebras, las escotaduras de los pedículos forman el agujero intervertebral (de conjunción), por donde salen los nervios espinales.'] },
            { titulo: 'Regiones y rasgos para reconocer cada vértebra',
              tabla: { columnas: ['Región', 'Número', 'Rasgos distintivos'],
                       filas: [['Cervical', '7', 'Cuerpo pequeño, agujero transverso (pasa la arteria vertebral), apófisis espinosa bífida, agujero vertebral triangular grande'],
                               ['Torácica', '12', 'Fositas costales en el cuerpo y en las apófisis transversas; espinosa larga e inclinada hacia abajo; cuerpo en forma de corazón'],
                               ['Lumbar', '5', 'Cuerpo grande y reniforme; espinosa corta, cuadrangular y horizontal; sin fositas costales ni agujero transverso'],
                               ['Sacro', '5 fusionadas', 'Hueso triangular: base con promontorio, agujeros sacros anteriores y posteriores, cresta sacra, hiato sacro, cara auricular'],
                               ['Coccígea (cóccix)', '3 a 5 fusionadas', 'Pequeño, al final de la columna']] } },
            { titulo: 'Vértebras especiales',
              lista: ['Atlas (C1): no tiene cuerpo ni apófisis espinosa; es un anillo con dos masas laterales cuyas cavidades glenoideas se articulan con los cóndilos del occipital, un arco anterior y uno posterior con sus tubérculos.',
                      'Axis (C2): tiene la apófisis odontoides (diente), que sube hasta el atlas y sirve de pivote para la rotación de la cabeza.',
                      'C7 (vértebra prominente): su apófisis espinosa larga se palpa en la base del cuello.'] },
            { titulo: 'Curvaturas',
              lista: ['Cervical y lumbar: lordosis (convexas hacia adelante). Torácica y sacra: cifosis (convexas hacia atrás).',
                      'Alteraciones: hipercifosis ("joroba"), hiperlordosis y escoliosis (desviación lateral).'] },
            { titulo: 'Articulaciones y ligamentos',
              lista: ['Entre cuerpos vertebrales: discos intervertebrales (núcleo pulposo en el centro, anillo fibroso alrededor); son sínfisis.',
                      'Entre apófisis articulares: articulaciones sinoviales planas (cigapofisarias).',
                      'Atlantooccipital (condílea): movimiento de flexión y extensión de la cabeza ("sí"). Atlantoaxial media (trocoide): rotación ("no").',
                      'Ligamentos: longitudinal anterior y posterior, amarillos (entre láminas), interespinosos y supraespinoso.'] }
        ],
        figuras: [
            { src: R + 'guia-columna-anterior.jpg', alt: 'Columna vertebral en vista anterior rotulada', pie: 'Columna vertebral: regiones cervical, torácica, lumbar, sacro y cóccix.', fuente: F_GUIA },
            { src: R + 'guia-vertebras.jpg', alt: 'Vértebras cervical, torácica, lumbar y sacro', pie: 'Vértebras de cada región y sacro.', fuente: F_GUIA },
            { src: R + 'columna-vertebras.jpg', alt: 'Columna vertebral y vértebras aisladas', pie: 'Columna vertebral: curvaturas y vértebras aisladas.', fuente: F_OST },
            { src: R + 'columna-vertebras-fotos.jpg', alt: 'Fotografía de vértebras de distintas regiones', pie: 'Vértebras reales: compara sus formas.', fuente: F_OST }
        ],
        enfermeria: [
            'En la punción lumbar el paciente se coloca en posición fetal para separar las apófisis espinosas; se punciona entre L3–L4 o L4–L5, por debajo del final de la médula (L1–L2). La línea que une las crestas ilíacas pasa por L4.',
            'Ante trauma de cuello se inmoviliza la columna cervical: una lesión de C1–C2 puede comprometer la respiración.',
            'La valoración de la postura (escoliosis, cifosis) hace parte del examen físico del niño y del adolescente.'
        ],
        errores: ['Contar 7 vértebras lumbares: son 5 (7 cervicales, 12 torácicas, 5 lumbares).', 'Olvidar que el atlas no tiene cuerpo.', 'Confundir el agujero vertebral (médula) con el agujero intervertebral (nervios espinales).'],
        loQueDebesSaber: ['Partes de una vértebra típica.', 'Número de vértebras por región.', 'Rasgos para distinguir cervical, torácica y lumbar.', 'Atlas y axis.', 'Curvaturas normales y alteraciones.'],
        laminas: [
            { id: 'u1-vt', src: R + 'lamina-vertebra-toracica.jpg', titulo: 'Vértebra torácica, vista superior (números 11 a 15)', fuente: F_TAL,
              marcas: [{ n: '11', r: 'Apófisis transversa' }, { n: '12', r: 'Cuerpo vertebral' }, { n: '13', r: 'Apófisis articular superior' }, { n: '14', r: 'Lámina' }, { n: '15', r: 'Apófisis espinosa' }],
              distractores: ['Pedículo', 'Agujero transverso'] },
            { id: 'u1-vc', src: R + 'lamina-vertebra-cervical.jpg', titulo: 'Vértebra cervical (15A a 15C)', fuente: F_TAL,
              marcas: [{ n: '15A', r: 'Cuerpo vertebral' }, { n: '15B', r: 'Agujero transverso' }, { n: '15C', r: 'Apófisis espinosa bífida' }],
              distractores: ['Fosita costal', 'Apófisis odontoides'] },
            { id: 'u1-atlas', src: R + 'lamina-atlas.jpg', titulo: 'Atlas, C1 (16A y 16C). 16B y 16D: tubérculos del arco, confírmalos con la docente', fuente: F_TAL,
              marcas: [{ n: '16A', r: 'Cavidad glenoidea (faceta articular superior)' }, { n: '16C', r: 'Agujero transverso' }],
              distractores: ['Apófisis odontoides', 'Cuerpo vertebral'] },
            { id: 'u1-axis', src: R + 'lamina-axis.jpg', titulo: 'Axis, C2 (17A a 17D)', fuente: F_TAL,
              marcas: [{ n: '17A', r: 'Superficie articular superior' }, { n: '17B', r: 'Apófisis odontoides (diente)' }, { n: '17C', r: 'Superficie articular inferior' }, { n: '17D', r: 'Apófisis transversa' }],
              distractores: ['Arco anterior', 'Apófisis espinosa bífida'] }
        ],
        minicaso: {
            situacion: 'Vas a asistir una punción lumbar en un adulto con sospecha de meningitis.',
            preguntas: ['¿En qué posición colocarías al paciente y por qué?', '¿Entre qué vértebras se hace la punción y por qué ahí no hay riesgo de lesionar la médula?', '¿Qué referencia palpable te ayuda a ubicar L4?']
        },
        fuente: 'Taller Columna vertebral y cráneo (A. Murcia); Guía Cráneo–columna–SN (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- CRÁNEO ---------------- */
    CE.contenido('craneo', {
        revisado: false,
        prerrequisitos: ['Articulaciones fibrosas: suturas.', 'Huesos planos y neumáticos.'],
        ideaPrincipal: 'El cráneo protege el encéfalo (neurocráneo) y forma la cara (viscerocráneo). Por dentro (endocráneo) su base tiene tres fosas escalonadas con agujeros por donde pasan nervios y vasos; por fuera (exocráneo) se estudia en vistas o normas.',
        secciones: [
            { titulo: 'Huesos del cráneo',
              tabla: { columnas: ['Parte', 'Huesos'],
                       filas: [['Neurocráneo (8)', 'Frontal, 2 parietales, 2 temporales, occipital, esfenoides y etmoides'],
                               ['Viscerocráneo (14)', '2 maxilares, 2 cigomáticos (malares), 2 nasales, 2 lagrimales (unguis), 2 palatinos, 2 cornetes inferiores, vómer y mandíbula']] } },
            { titulo: 'Exocráneo: suturas y puntos craneométricos',
              lista: ['Suturas: coronal (frontal–parietales), sagital (entre parietales), lambdoidea (parietales–occipital) y escamosa (parietal–temporal).',
                      'Bregma: unión de coronal y sagital. Lambda: unión de sagital y lambdoidea.',
                      'Nasión (frontal–nasales), inion (protuberancia occipital externa), prostión, gonión (ángulo de la mandíbula) y mentón.',
                      'Pterion: donde se unen frontal, parietal, temporal y ala mayor del esfenoides; es delgado y debajo corre la arteria meníngea media. Asterion: parietal, occipital y temporal.',
                      'Normas o vistas: superior (verticalis), frontal, occipital, lateral e inferior (basalis).',
                      'Fosas laterales: temporal, cigomática (infratemporal) y pterigopalatina.'] },
            { titulo: 'Base externa',
              texto: 'Una línea entre los tubérculos cigomáticos y otra entre las apófisis mastoides la dividen en tres zonas: anterior (facial), media (yugular) y posterior (occipital). Allí se ven los cóndilos del occipital, el agujero magno, la apófisis mastoides, la apófisis estiloides, el agujero estilomastoideo, el conducto carotídeo y el agujero yugular.' },
            { titulo: 'Endocráneo: bóveda',
              texto: 'La calota tiene dos tablas de hueso compacto con diploe (esponjoso) entre ellas. Por dentro muestra el surco del seno sagital superior, fositas de las granulaciones aracnoideas y surcos de los vasos meníngeos (en "hoja de higuera").' },
            { titulo: 'Endocráneo: las tres fosas de la base',
              tabla: { columnas: ['Fosa', 'Estructuras', 'Qué pasa por sus orificios'],
                       filas: [['Anterior', 'Láminas orbitarias del frontal, lámina cribosa del etmoides, crista galli, alas menores del esfenoides, apófisis clinoides anteriores, surco quiasmático', 'Lámina cribosa: nervio olfatorio (I)'],
                               ['Media', 'Silla turca (hipófisis), clinoides posteriores, surco carotídeo, hendidura orbitaria superior, agujeros redondo mayor, oval y redondo menor (espinoso), agujero rasgado anterior, impresión trigeminal', 'Agujero óptico: II. Hendidura orbitaria superior: III, IV, VI y V1. Redondo mayor: V2. Oval: V3. Espinoso: arteria meníngea media'],
                               ['Posterior', 'Agujero magno (occipital), clivus, conducto auditivo interno, conducto del hipogloso, agujero rasgado posterior (yugular), surcos transverso y sigmoideo, protuberancia y cresta occipital interna', 'Auditivo interno: VII y VIII. Yugular: IX, X, XI y vena yugular interna. Hipogloso: XII. Agujero magno: bulbo raquídeo y arterias vertebrales']] } }
        ],
        figuras: [
            { src: R + 'guia-craneo-anterior.jpg', alt: 'Vista anterior del cráneo rotulada', pie: 'Vista anterior del cráneo.', fuente: F_GUIA },
            { src: R + 'guia-craneo-lateral.jpg', alt: 'Vista lateral del cráneo rotulada', pie: 'Vista lateral: frontal, parietal, temporal, occipital, esfenoides.', fuente: F_GUIA },
            { src: R + 'guia-craneo-sagital.jpg', alt: 'Corte sagital del cráneo rotulado', pie: 'Corte sagital (endocráneo): etmoides, vómer, esfenoides, diploe.', fuente: F_GUIA },
            { src: R + 'guia-calota.jpg', alt: 'Calota vista superior', pie: 'Calota o bóveda: frontal, parietales, occipital.', fuente: F_GUIA },
            { src: R + 'guia-base-craneo.jpg', alt: 'Base del cráneo exocráneo', pie: 'Base del cráneo (vista inferior).', fuente: F_GUIA },
            { src: R + 'guia-base-endocraneo.jpg', alt: 'Base del cráneo por su endocráneo', pie: 'Fosas craneales anterior, media y posterior.', fuente: F_GUIA },
            { src: R + 'craneo-bregma-lambda.jpg', alt: 'Cráneo en norma superior con bregma y lambda', pie: 'Norma superior: bregma y lambda.', fuente: F_CRA },
            { src: R + 'craneo-pterion-asterion.jpg', alt: 'Cráneo lateral con pterion, asterion y gonión', pie: 'Pterion, asterion y gonión.', fuente: F_CRA },
            { src: R + 'craneo-base-foto.jpg', alt: 'Fotografía de la base externa del cráneo', pie: 'Base externa real: agujero magno, cóndilos del occipital.', fuente: F_CRA }
        ],
        enfermeria: [
            'En el recién nacido las suturas aún no se han cerrado y hay fontanelas: la anterior (en el bregma) cierra hacia los 18 meses y la posterior (en el lambda) en los primeros meses. Una fontanela abombada o hundida es un signo de alarma.',
            'Un golpe en la región del pterion puede romper la arteria meníngea media y producir un hematoma epidural: vigila el estado de conciencia.',
            'La lámina cribosa es frágil: en fracturas de la base puede salir líquido cefalorraquídeo por la nariz; no introduzcas sondas por la nariz en esos pacientes.'
        ],
        errores: ['Contar la mandíbula como parte del neurocráneo.', 'Confundir bregma (anterior) con lambda (posterior).', 'Pensar que el endocráneo es sólo la base: incluye la cara interna de la bóveda.'],
        loQueDebesSaber: ['Huesos del neurocráneo y del viscerocráneo.', 'Suturas y puntos craneométricos principales.', 'Las tres fosas de la base y sus límites.', 'Qué nervio pasa por cada orificio principal.'],
        laminas: [
            { id: 'u1-cr-lat', src: R + 'lamina-craneo-lateral.jpg', titulo: 'Cráneo, vista lateral (números 1 a 6)', fuente: F_TAL,
              marcas: [{ n: '1', r: 'Sutura coronal' }, { n: '2', r: 'Ala mayor del esfenoides' }, { n: '3', r: 'Arco cigomático' }, { n: '4', r: 'Meato (conducto) auditivo externo' }, { n: '5', r: 'Escama del temporal' }, { n: '6', r: 'Sutura lambdoidea' }],
              distractores: ['Apófisis mastoides', 'Sutura sagital'] },
            { id: 'u1-cr-base', src: R + 'lamina-base-endocraneo.jpg', titulo: 'Base del cráneo, endocráneo (números 7 a 10)', fuente: F_TAL,
              marcas: [{ n: '7', r: 'Apófisis crista galli' }, { n: '8', r: 'Silla turca' }, { n: '9', r: 'Agujero magno (occipital)' }, { n: '10', r: 'Conducto auditivo interno' }],
              distractores: ['Agujero oval', 'Lámina cribosa'] },
            { id: 'u1-cr-ant', src: R + 'lamina-craneo-anterior.jpg', titulo: 'Cráneo, vista anterior (números 18 a 21)', fuente: F_TAL,
              marcas: [{ n: '18', r: 'Hueso nasal' }, { n: '19', r: 'Hueso parietal' }, { n: '20', r: 'Hueso cigomático (malar)' }, { n: '21', r: 'Mandíbula' }],
              distractores: ['Hueso frontal', 'Maxilar'] },
            { id: 'u1-cr-sag', src: R + 'lamina-craneo-sagital.jpg', titulo: 'Cráneo, corte sagital (números 22 a 25)', fuente: F_TAL,
              marcas: [{ n: '22', r: 'Maxilar (apófisis palatina)' }, { n: '23', r: 'Etmoides' }, { n: '24', r: 'Esfenoides' }, { n: '25', r: 'Occipital' }],
              distractores: ['Vómer', 'Temporal'] }
        ],
        minicaso: {
            situacion: 'Un adolescente recibe un golpe con una pelota en la sien. Al principio habla normalmente, pero una hora después está somnoliento.',
            preguntas: ['¿Qué punto craneométrico está en la sien y qué huesos lo forman?', '¿Qué arteria corre por dentro de esa zona?', '¿Qué valorarías de forma seriada en este paciente?']
        },
        fuente: 'Presentación Cráneo y Taller Columna vertebral y cráneo (A. Murcia); Guía Cráneo–columna–SN (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'u1-01', tema: 'nomenclatura', subtema: 'Terminología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada término con su opuesto.',
          pares: [['Proximal', 'Distal'], ['Superficial', 'Profundo'], ['Ipsilateral', 'Contralateral'], ['Craneal', 'Caudal']],
          explicacion: 'Los términos de comparación siempre se usan en pares.' },
        { id: 'u1-02', tema: 'nomenclatura', subtema: 'Terminología', tipo: 'multiple', revisado: false,
          enunciado: 'El movimiento que aleja un miembro de la línea media se llama:', opciones: ['Aducción', 'Abducción', 'Flexión', 'Pronación'], correcta: 1,
          explicacion: 'Abducción: "ab" = alejar. Aducción: acercar.' },
        { id: 'u1-03', tema: 'nomenclatura', subtema: 'Nomenclatura', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada sufijo con su significado.',
          pares: [['-itis', 'Inflamación'], ['-ectomía', 'Extirpar'], ['-ostomía', 'Abertura artificial'], ['-algia', 'Dolor']],
          explicacion: 'Ejemplos: apendicitis, apendicectomía, colostomía, artralgia.' },
        { id: 'u1-04', tema: 'nomenclatura', subtema: 'Posición anatómica', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué posición aumenta la presión intracraneal y disminuye el volumen pulmonar?', opciones: ['Fowler', 'Trendelenburg', 'Sims', 'Prono'], correcta: 1,
          explicacion: 'Con la cabeza más baja que los pies las vísceras presionan el diafragma y aumenta el retorno a la cabeza.' },
        { id: 'u1-05', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de osteología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada célula ósea con su función.',
          pares: [['Osteoblasto', 'Forma hueso'], ['Osteocito', 'Mantiene el hueso'], ['Osteoclasto', 'Reabsorbe hueso']],
          explicacion: 'El equilibrio entre formación y reabsorción es la remodelación ósea.' },
        { id: 'u1-06', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de osteología', tipo: 'multiple', revisado: false,
          enunciado: 'La rótula es un ejemplo de hueso:', opciones: ['Largo', 'Plano', 'Sesamoideo', 'Neumático'], correcta: 2,
          explicacion: 'Se desarrolla dentro del tendón del cuádriceps.' },
        { id: 'u1-07', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de artrología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada articulación sinovial con un ejemplo.',
          pares: [['Enartrosis', 'Cadera'], ['Gínglimo', 'Codo'], ['Trocoide', 'Atlantoaxial media'], ['Silla de montar', 'Carpometacarpiana del pulgar']],
          explicacion: 'La forma de las superficies determina los movimientos posibles.' },
        { id: 'u1-08', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de artrología', tipo: 'multiple', revisado: false,
          enunciado: 'Las suturas del cráneo son articulaciones:', opciones: ['Sinoviales', 'Cartilaginosas', 'Fibrosas', 'Diartrosis'], correcta: 2,
          explicacion: 'Son fibrosas y funcionalmente sinartrosis (sin movimiento en el adulto).' },
        { id: 'u1-09', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de miología', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las envolturas del músculo de la más externa a la más interna.', orden: ['Epimisio', 'Perimisio', 'Endomisio'],
          explicacion: 'Epi = sobre (todo el músculo), peri = alrededor (fascículo), endo = dentro (fibra).' },
        { id: 'u1-10', tema: 'generalidades-osteo-artro-mio', subtema: 'Generalidades de miología', tipo: 'vf', revisado: false,
          enunciado: 'El músculo cardíaco es estriado e involuntario.', correcta: true,
          explicacion: 'Tiene estrías como el esquelético, pero no está bajo control voluntario.' },
        { id: 'u1-11', tema: 'embriologia', subtema: 'Generalidades de embriología', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las etapas de la primera semana del desarrollo.', orden: ['Fecundación', 'Cigoto', 'Mórula', 'Blastocisto', 'Implantación'],
          explicacion: 'Todo ocurre mientras el embrión viaja por la trompa hacia el útero.' },
        { id: 'u1-12', tema: 'embriologia', subtema: 'Generalidades de embriología', tipo: 'multiple', revisado: false,
          enunciado: '¿Dónde ocurre normalmente la fecundación?', opciones: ['Útero', 'Ovario', 'Ampolla de la trompa uterina', 'Cuello uterino'], correcta: 2,
          explicacion: 'Luego el cigoto viaja unos 7 días hasta el útero.' },
        { id: 'u1-13', tema: 'embriologia', subtema: 'Generalidades de embriología', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada capa germinativa con un derivado.',
          pares: [['Ectodermo', 'Sistema nervioso'], ['Mesodermo', 'Músculos y huesos'], ['Endodermo', 'Epitelio del tubo digestivo']],
          explicacion: 'Las tres capas aparecen en la 3.ª semana (gastrulación).' },
        { id: 'u1-14', tema: 'embriologia', subtema: 'Generalidades de embriología', tipo: 'multiple', revisado: false,
          enunciado: 'El período embrionario comprende:', opciones: ['Semanas 1 a 2', 'Semanas 3 a 8', 'Semanas 9 a 40', 'Todo el embarazo'], correcta: 1,
          explicacion: 'Es el período de organogénesis y el más sensible a teratógenos.' },
        { id: 'u1-15', tema: 'embriologia', subtema: 'Generalidades de embriología', tipo: 'abierta', revisado: false,
          enunciado: 'Explica la regla de Naegele y calcúlala para una FUR del 1 de mayo.',
          modelo: 'Al primer día de la FUR se le restan 3 meses y se suman 7 días (y un año). 1 de mayo − 3 meses = 1 de febrero; + 7 días = 8 de febrero del año siguiente.',
          explicacion: 'Compara tu cálculo.' },
        { id: 'u1-16', tema: 'columna', subtema: 'Región cervical', tipo: 'identificar', revisado: false,
          enunciado: '¿A qué región de la columna pertenece esta vértebra?', imagen: { src: 'assets/images/morfologia/generalidades/lamina-vertebra-cervical.jpg', alt: 'Vértebra vista desde arriba' },
          opciones: ['Cervical', 'Torácica', 'Lumbar', 'Sacra'], correcta: 0,
          explicacion: 'Tiene agujeros transversos y apófisis espinosa bífida: rasgos exclusivos de las cervicales.' },
        { id: 'u1-17', tema: 'columna', subtema: 'Región cervical', tipo: 'identificar', revisado: false,
          enunciado: '¿Cuál es el nombre de esta vértebra?', imagen: { src: 'assets/images/morfologia/generalidades/lamina-axis.jpg', alt: 'Vértebra con apófisis odontoides' },
          opciones: ['Atlas (C1)', 'Axis (C2)', 'Prominente (C7)', 'L5'], correcta: 1,
          explicacion: 'La apófisis odontoides (diente) identifica al axis.' },
        { id: 'u1-18', tema: 'columna', subtema: 'Región torácica', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué rasgo es exclusivo de las vértebras torácicas?', opciones: ['Agujero transverso', 'Fositas costales', 'Espinosa bífida', 'Cuerpo reniforme'], correcta: 1,
          explicacion: 'Las fositas costales son para articularse con las costillas.' },
        { id: 'u1-19', tema: 'columna', subtema: 'Región lumbar', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada región con su número de vértebras.',
          pares: [['Cervical', '7'], ['Torácica', '12'], ['Lumbar', '5']],
          explicacion: 'Más sacro (5 fusionadas) y cóccix (3–5 fusionadas).' },
        { id: 'u1-20', tema: 'columna', subtema: 'Región coccígea', tipo: 'vf', revisado: false,
          enunciado: 'La curvatura torácica normal es una cifosis.', correcta: true,
          explicacion: 'Torácica y sacra: cifosis. Cervical y lumbar: lordosis.' },
        { id: 'u1-21', tema: 'craneo', subtema: 'Exocráneo', tipo: 'multiple', revisado: false,
          enunciado: 'El bregma es el punto de unión de las suturas:', opciones: ['Sagital y lambdoidea', 'Coronal y sagital', 'Escamosa y coronal', 'Lambdoidea y escamosa'], correcta: 1,
          explicacion: 'Lambda es la unión de sagital y lambdoidea.' },
        { id: 'u1-22', tema: 'craneo', subtema: 'Endocráneo', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada orificio con lo que pasa por él.',
          pares: [['Lámina cribosa', 'Nervio olfatorio (I)'], ['Conducto auditivo interno', 'Nervios facial (VII) y vestibulococlear (VIII)'], ['Agujero magno', 'Bulbo raquídeo'], ['Agujero espinoso', 'Arteria meníngea media']],
          explicacion: 'Asociar orificio con contenido es de lo más preguntado.' },
        { id: 'u1-23', tema: 'craneo', subtema: 'Endocráneo', tipo: 'multiple', revisado: false,
          enunciado: '¿En qué fosa craneal está la silla turca?', opciones: ['Anterior', 'Media', 'Posterior', 'Temporal'], correcta: 1,
          explicacion: 'La silla turca del esfenoides aloja la hipófisis.' },
        { id: 'u1-24', tema: 'craneo', subtema: 'Exocráneo', tipo: 'vf', revisado: false,
          enunciado: 'El pterion es la unión de frontal, parietal, temporal y ala mayor del esfenoides.', correcta: true,
          explicacion: 'Es una zona delgada con la arteria meníngea media por dentro.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-u1-01', tema: 'nomenclatura', revisado: false, frente: 'Ramas de la morfología', reverso: 'Del desarrollo, macroscópica (anatomía) y microscópica (histología).' },
        { id: 'fc-u1-02', tema: 'nomenclatura', revisado: false, frente: 'Ipsilateral vs. contralateral', reverso: 'Ipsilateral: del mismo lado. Contralateral: del lado opuesto.' },
        { id: 'fc-u1-03', tema: 'nomenclatura', revisado: false, frente: 'Pronación vs. supinación', reverso: 'Pronación: palma hacia atrás/abajo. Supinación: palma hacia adelante/arriba.' },
        { id: 'fc-u1-04', tema: 'nomenclatura', revisado: false, frente: 'Posición de Fowler', reverso: 'Paciente sentado como en un sillón. Facilita la respiración.' },
        { id: 'fc-u1-05', tema: 'nomenclatura', revisado: false, frente: 'Posición de Trendelenburg', reverso: 'Supino con la cabeza más baja que los pies. Disminuye el volumen pulmonar y aumenta la presión intracraneal.' },
        { id: 'fc-u1-06', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Funciones del hueso', reverso: 'Protección, soporte, locomoción, depósito de minerales y producción de células sanguíneas.' },
        { id: 'fc-u1-07', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Partes de un hueso largo', reverso: 'Diáfisis, epífisis, metáfisis, cartílago articular, periostio, endostio, cavidad medular.' },
        { id: 'fc-u1-08', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Clasificación funcional de articulaciones', reverso: 'Sinartrosis (sin movimiento), anfiartrosis (poco), diartrosis (mucho).' },
        { id: 'fc-u1-09', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Tipos de articulación fibrosa', reverso: 'Suturas, sindesmosis y gónfosis.' },
        { id: 'fc-u1-10', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Enartrosis', reverso: 'Esfera en copa, triaxial. Hombro y cadera.' },
        { id: 'fc-u1-11', tema: 'generalidades-osteo-artro-mio', revisado: false, frente: 'Epimisio, perimisio, endomisio', reverso: 'Rodean todo el músculo, cada fascículo y cada fibra, respectivamente.' },
        { id: 'fc-u1-12', tema: 'embriologia', revisado: false, frente: 'Embrioblasto vs. trofoblasto', reverso: 'Embrioblasto (masa interna) → embrión. Trofoblasto (masa externa) → placenta.' },
        { id: 'fc-u1-13', tema: 'embriologia', revisado: false, frente: '¿Qué pasa en la 3.ª semana?', reverso: 'Gastrulación: línea primitiva y disco trilaminar (ectodermo, mesodermo, endodermo).' },
        { id: 'fc-u1-14', tema: 'embriologia', revisado: false, frente: '¿Cuándo empieza a latir el corazón?', reverso: 'Hacia el día 22 (4.ª semana).' },
        { id: 'fc-u1-15', tema: 'embriologia', revisado: false, frente: 'Regla de Naegele', reverso: 'FUR − 3 meses + 7 días (+ 1 año) = fecha probable de parto.' },
        { id: 'fc-u1-16', tema: 'embriologia', revisado: false, frente: 'Surfactante pulmonar', reverso: 'Lo producen los neumocitos tipo II desde la semana 24 aproximadamente.' },
        { id: 'fc-u1-17', tema: 'columna', revisado: false, frente: 'Rasgos de la vértebra cervical', reverso: 'Agujero transverso, espinosa bífida, cuerpo pequeño.' },
        { id: 'fc-u1-18', tema: 'columna', revisado: false, frente: 'Rasgos de la vértebra lumbar', reverso: 'Cuerpo grande reniforme, espinosa corta y horizontal, sin fositas costales ni agujero transverso.' },
        { id: 'fc-u1-19', tema: 'columna', revisado: false, frente: 'Atlas y axis', reverso: 'Atlas (C1): sin cuerpo, cavidades glenoideas para el occipital. Axis (C2): apófisis odontoides.' },
        { id: 'fc-u1-20', tema: 'columna', revisado: false, frente: 'Agujero intervertebral', reverso: 'Formado por las escotaduras de dos pedículos vecinos; por él salen los nervios espinales.' },
        { id: 'fc-u1-21', tema: 'craneo', revisado: false, frente: 'Huesos del neurocráneo', reverso: 'Frontal, 2 parietales, 2 temporales, occipital, esfenoides, etmoides (8).' },
        { id: 'fc-u1-22', tema: 'craneo', revisado: false, frente: 'Bregma y lambda', reverso: 'Bregma: coronal + sagital. Lambda: sagital + lambdoidea.' },
        { id: 'fc-u1-23', tema: 'craneo', revisado: false, frente: 'Pterion', reverso: 'Unión de frontal, parietal, temporal y ala mayor del esfenoides; debajo, la arteria meníngea media.' },
        { id: 'fc-u1-24', tema: 'craneo', revisado: false, frente: 'Hendidura orbitaria superior', reverso: 'Pasan los nervios III, IV, VI y la rama oftálmica del V (V1).' },
        { id: 'fc-u1-25', tema: 'craneo', revisado: false, frente: 'Agujeros de la fosa media para el trigémino', reverso: 'Redondo mayor: V2 (maxilar). Oval: V3 (mandibular).' }
    ]);
})();
