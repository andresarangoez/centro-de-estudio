/* ============================================================
   CONTENIDO · Morfología · Unidad II · Sistema nervioso
   Elaborado a partir de: Generalidades del sistema nervioso
   (presentación y PDF de Enf. Mag. Aurora Moreno), Embriología del
   sistema nervioso, Guía de estudio Cráneo–columna–SN, Taller
   Sistema nervioso, médula espinal y tallo cerebral (Dr. Ariel
   Murcia), Taller Ojo y Taller Oído (Cátedra de Morfología FUCS).
   Ilustraciones: Netter / Machado. Verificado contra Moore.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/nervioso/';
    var F_SN = 'Presentación Generalidades del sistema nervioso, Morfología FUCS';
    var F_GUIA = 'Guía de estudio Cráneo, columna y sistema nervioso, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_TSN = 'Taller Sistema nervioso, médula espinal y tallo cerebral, Dr. Ariel Murcia (FUCS). Ilustraciones: Netter';
    var F_OJO = 'Taller Ojo, Cátedra de Morfología FUCS. Ilustraciones: Netter';
    var F_OIDO = 'Taller Oído, Dr. Ariel Murcia (FUCS). Ilustraciones: Netter';

    /* ---------------- GENERALIDADES ---------------- */
    CE.contenido('sistema-nervioso', {
        revisado: false,
        prerrequisitos: ['Columna vertebral: conducto vertebral y agujeros intervertebrales.', 'Cráneo: fosas y agujeros.', 'Embriología: el ectodermo forma el sistema nervioso.'],
        ideaPrincipal: 'El sistema nervioso recibe información del medio externo e interno, la integra y produce respuestas. Se divide en central (encéfalo y médula espinal), periférico (12 pares craneales y 31 pares raquídeos) y autónomo (simpático y parasimpático).',
        secciones: [
            { titulo: 'Clasificación',
              tabla: { columnas: ['División', 'Componentes'],
                       filas: [['Sistema nervioso central (SNC)', 'Encéfalo (cerebro, tallo cerebral, cerebelo) y médula espinal'],
                               ['Sistema nervioso periférico (SNP)', '12 pares craneales, 31 pares raquídeos (8 cervicales, 12 torácicos, 5 lumbares, 5 sacros, 1 coccígeo) y ganglios'],
                               ['Sistema nervioso autónomo', 'Simpático (lucha o huida) y parasimpático (reposo y digestión); vía de dos neuronas: preganglionar y posganglionar']] } },
            { titulo: 'Tejido nervioso',
              lista: ['Neuronas: unidad estructural y funcional; excitables, generan y conducen potenciales de acción.',
                      'Neuroglía: más abundante que las neuronas; las sostiene, aísla y nutre. En el SNC: astrocitos, oligodendrocitos (mielina), microglía y células ependimarias. En el SNP: células de Schwann (mielina) y células satélite.',
                      'Clasificación funcional de neuronas: sensitivas o aferentes (del receptor al SNC), motoras o eferentes (del SNC al músculo o glándula) e interneuronas (integran).',
                      'Clasificación morfológica: multipolares (motoras e interneuronas), bipolares (retina, bulbo olfatorio, oído interno) y seudounipolares (ganglios sensitivos).'] },
            { titulo: 'Sustancia gris y sustancia blanca',
              lista: ['Sustancia gris: cuerpos neuronales. En el cerebro y el cerebelo está por fuera (corteza); en la médula, por dentro (en forma de H o mariposa).',
                      'Sustancia blanca: axones mielinizados. Fibras de asociación (mismo hemisferio), comisurales (entre hemisferios, como el cuerpo calloso) y de proyección (corteza con estructuras inferiores).',
                      'Núcleo: grupo de cuerpos neuronales en el SNC. Ganglio: en el SNP. Tracto: haz de axones en el SNC. Nervio: en el SNP.'] },
            { titulo: 'Meninges y líquido cefalorraquídeo',
              lista: ['Duramadre (externa, gruesa), aracnoides (intermedia) y piamadre (interna, pegada al tejido nervioso).',
                      'Espacios: epidural (entre hueso y dura, real en la columna), subdural y subaracnoideo (entre aracnoides y piamadre, contiene el líquido cefalorraquídeo).',
                      'El líquido cefalorraquídeo se produce en los plexos coroideos de los ventrículos, circula por ventrículos laterales → tercer ventrículo → acueducto cerebral → cuarto ventrículo → espacio subaracnoideo, y se reabsorbe en las granulaciones aracnoideas.'] },
            { titulo: 'Médula espinal',
              lista: ['Se extiende desde el agujero magno hasta L1–L2 en el adulto; termina en el cono medular y la cola de caballo.',
                      'En corte: sustancia gris central con astas anteriores (motoras) y posteriores (sensitivas); sustancia blanca en cordones anterior, lateral y posterior; fisura media anterior y surco medio posterior; canal central.',
                      'Nervio raquídeo: se forma por la unión de la raíz posterior (sensitiva, con su ganglio) y la raíz anterior (motora); luego es mixto.',
                      'Dermatoma: área de piel inervada por un nervio raquídeo. Miotoma: masa muscular inervada por él.'] },
            { titulo: 'Desarrollo del sistema nervioso',
              texto: 'Se origina del ectodermo: placa neural → surco neural → tubo neural (4.ª semana). Hacia la 5.ª semana el extremo craneal forma cinco vesículas: telencéfalo (hemisferios), diencéfalo (tálamo, hipotálamo), mesencéfalo, metencéfalo (puente y cerebelo) y mielencéfalo (bulbo raquídeo).' },
            { titulo: 'Irrigación del encéfalo',
              texto: 'Dos sistemas: arterias carótidas internas (anterior) y arterias vertebrales, que se unen en el tronco basilar (posterior). Se conectan en la base del cerebro formando el polígono de Willis mediante las comunicantes anterior y posteriores.' }
        ],
        figuras: [
            { src: R + 'sn-clasificacion.jpg', alt: 'Esquema de clasificación del sistema nervioso', pie: 'Clasificación del sistema nervioso.', fuente: F_SN },
            { src: R + 'sn-neurona.jpg', alt: 'Estructura de la neurona', pie: 'Estructura neuronal.', fuente: F_SN },
            { src: R + 'sn-sustancia-blanca-gris.jpg', alt: 'Sustancia blanca y gris en cerebro, médula y cerebelo', pie: 'Sustancia blanca y gris.', fuente: F_SN },
            { src: R + 'sn-autonomo.jpg', alt: 'Esquema de neurona preganglionar y posganglionar', pie: 'Sistema autónomo: neuronas preganglionar y posganglionar.', fuente: F_SN },
            { src: R + 'meninges.jpg', alt: 'Meninges en corte frontal', pie: 'Meninges y senos venosos.', fuente: F_SN },
            { src: R + 'lcr-circulacion.jpg', alt: 'Circulación del líquido cefalorraquídeo', pie: 'Circulación del líquido cefalorraquídeo.', fuente: F_SN },
            { src: R + 'medula-corte-transversal.jpg', alt: 'Corte transversal de médula espinal', pie: 'Médula espinal en corte: sustancia gris en H y blanca alrededor.', fuente: F_SN },
            { src: R + 'nervios-espinales.jpg', alt: 'Nervios espinales por región', pie: '31 pares de nervios espinales.', fuente: F_SN },
            { src: R + 'guia-irrigacion-cerebral.jpg', alt: 'Irrigación cerebral en la base del encéfalo', pie: 'Irrigación cerebral: carótida interna, tronco basilar, vertebrales.', fuente: F_GUIA }
        ],
        enfermeria: [
            'En la punción lumbar la aguja llega al espacio subaracnoideo por debajo del final de la médula (L3–L4 o L4–L5).',
            'La valoración de dermatomas orienta el nivel de una lesión medular (por ejemplo, T4 a la altura de las mamilas, T10 del ombligo).',
            'Los signos del sistema simpático (taquicardia, midriasis, sudoración) y parasimpático (bradicardia, miosis, salivación) se observan en la valoración y en los efectos de muchos medicamentos.'
        ],
        errores: ['Pensar que la médula llega hasta el sacro en el adulto: termina en L1–L2.', 'Confundir núcleo (SNC) con ganglio (SNP).', 'Creer que en la médula la sustancia gris está por fuera, como en el cerebro.'],
        loQueDebesSaber: ['Divisiones del sistema nervioso.', 'Tipos de neuronas y neuroglía.', 'Meninges, espacios y circulación del LCR.', 'Estructura de la médula y formación del nervio raquídeo.', 'Vesículas encefálicas y sus derivados.'],
        laminas: [
            { id: 'sn-medula', src: R + 'lamina-medula-cortes.jpg', titulo: 'Médula espinal en cortes (22, 23, 24 y 27)', fuente: F_TSN + '. Los números 25 y 26 se revisan con la docente.',
              marcas: [{ n: '22', r: 'Asta anterior (sustancia gris)' }, { n: '23', r: 'Asta posterior (sustancia gris)' }, { n: '24', r: 'Cordón posterior (sustancia blanca)' }, { n: '27', r: 'Fisura media anterior' }],
              distractores: ['Canal central', 'Cordón lateral'] },
            { id: 'sn-raices', src: R + 'lamina-raices-espinales.jpg', titulo: 'Raíces del nervio raquídeo (28, 29 y 31)', fuente: F_TSN,
              marcas: [{ n: '28', r: 'Ganglio de la raíz posterior (espinal)' }, { n: '29', r: 'Raíz posterior (sensitiva)' }, { n: '31', r: 'Raíz anterior (motora)' }],
              distractores: ['Nervio raquídeo mixto', 'Médula espinal'] },
            { id: 'sn-corte-vert', src: R + 'lamina-corte-vertebral.jpg', titulo: 'Corte a nivel de una vértebra torácica (32, 33, 36 y 37)', fuente: F_TSN,
              marcas: [{ n: '32', r: 'Aorta' }, { n: '33', r: 'Cuerpo vertebral' }, { n: '36', r: 'Apófisis espinosa' }, { n: '37', r: 'Médula espinal' }],
              distractores: ['Costilla', 'Nervio espinal'] }
        ],
        minicaso: {
            situacion: 'Un motociclista sufre una caída y no siente ni mueve las piernas; la sensibilidad se pierde desde la altura del ombligo hacia abajo.',
            preguntas: ['¿A qué dermatoma corresponde el ombligo?', '¿Qué parte de la médula lleva la información sensitiva y cuál la motora?', '¿Por qué es clave inmovilizar la columna en el traslado?']
        },
        fuente: 'Generalidades del sistema nervioso (A. Moreno); Taller Sistema nervioso (A. Murcia); Guía Cráneo–columna–SN; Moore.'
    });

    /* ---------------- TALLO CEREBRAL ---------------- */
    CE.contenido('tallo-cerebral', {
        revisado: false,
        prerrequisitos: ['Generalidades del sistema nervioso.', 'Fosa craneal posterior (cráneo).'],
        ideaPrincipal: 'El tallo cerebral (tronco del encéfalo) conecta el cerebro con la médula espinal. Tiene tres partes: mesencéfalo, puente y bulbo raquídeo. Por él pasan todas las vías ascendentes y descendentes, de él salen diez de los doce pares craneales y contiene centros vitales de la respiración y la circulación.',
        secciones: [
            { titulo: 'Partes',
              tabla: { columnas: ['Parte', 'Rasgos externos', 'Pares craneales que emergen'],
                       filas: [['Mesencéfalo', 'Adelante: pedúnculos cerebrales y fosa interpeduncular. Atrás: colículos superiores (vía visual) e inferiores (vía auditiva)', 'III (oculomotor) y IV (troclear, el único que sale por detrás)'],
                               ['Puente (protuberancia)', 'Abultamiento anterior con fibras transversales que se continúan con los pedúnculos cerebelosos medios', 'V (trigémino); VI, VII y VIII en el surco bulboprotuberancial'],
                               ['Bulbo raquídeo (médula oblonga)', 'Pirámides (vía motora, donde se cruzan: decusación), olivas y, atrás, el piso del cuarto ventrículo', 'IX, X, XI y XII']] } },
            { titulo: 'Cara posterior y cuarto ventrículo',
              texto: 'Al retirar el cerebelo se ve la fosa romboidea, piso del cuarto ventrículo, formada por la cara posterior del puente y la parte superior del bulbo. El techo del cuarto ventrículo lo forma el cerebelo, unido al tallo por tres pares de pedúnculos cerebelosos (superiores, medios e inferiores).' },
            { titulo: 'Funciones',
              lista: ['Vía de paso de tractos motores (descendentes) y sensitivos (ascendentes).',
                      'Centros vitales en el bulbo: respiratorio, cardiovascular (frecuencia cardíaca y presión arterial), y reflejos de tos, deglución y vómito.',
                      'Formación reticular: regula el estado de alerta y el ciclo sueño–vigilia.',
                      'Núcleos de los pares craneales III a XII.'] }
        ],
        figuras: [
            { src: R + 'tallo-anterior.jpg', alt: 'Tallo cerebral en vista anterior', pie: 'Tallo cerebral, vista anterior: pedúnculos, puente, bulbo y pares craneales.', fuente: F_SN },
            { src: R + 'tallo-posterior.jpg', alt: 'Tallo cerebral en vista posterior', pie: 'Vista posterior: colículos, pedúnculos cerebelosos y piso del IV ventrículo.', fuente: F_SN },
            { src: R + 'cerebro-sagital-2.jpg', alt: 'Corte sagital del encéfalo', pie: 'Corte sagital: ubica mesencéfalo, puente y bulbo.', fuente: F_SN }
        ],
        enfermeria: [
            'Una compresión del tallo (por ejemplo, por edema cerebral que empuja hacia el agujero magno) altera la respiración y la frecuencia cardíaca: es una urgencia vital.',
            'Los reflejos pupilares (III par) y el reflejo de tos y deglución (IX y X) se valoran en el paciente neurológico y reflejan la función del tallo.',
            'En la escala de coma de Glasgow y la valoración pupilar se refleja la integridad del mesencéfalo.'
        ],
        errores: ['Incluir el cerebelo como parte del tallo: es una estructura aparte, unida por los pedúnculos.', 'Pensar que el IV par sale por delante: es el único que emerge por la cara posterior.'],
        loQueDebesSaber: ['Tres partes del tallo y sus rasgos.', 'Pares craneales que salen de cada parte.', 'Qué es el piso y el techo del cuarto ventrículo.', 'Centros vitales del bulbo.'],
        laminas: [
            { id: 'sn-tallo-ant', src: R + 'lamina-tallo-anterior.jpg', titulo: 'Tallo cerebral, vista anterior (12 a 14)', fuente: F_TSN,
              marcas: [{ n: '12', r: 'Nervio oculomotor (III)' }, { n: '13', r: 'Puente (protuberancia)' }, { n: '14', r: 'Nervio abducens (VI)' }],
              distractores: ['Pirámide del bulbo', 'Nervio trigémino (V)'] },
            { id: 'sn-tallo-post', src: R + 'lamina-tallo-posterior.jpg', titulo: 'Tallo cerebral, vista posterior (18 y 19)', fuente: F_TSN + '. Los números 15A, 16, 17, 20 y 21 se revisan con la docente.',
              marcas: [{ n: '18', r: 'Colículos (tubérculos cuadrigéminos)' }, { n: '19', r: 'Fosa romboidea (piso del IV ventrículo)' }],
              distractores: ['Pedúnculo cerebral', 'Pirámide del bulbo'] }
        ],
        minicaso: {
            situacion: 'Un paciente con trauma craneoencefálico presenta de pronto respiración irregular, bradicardia y una pupila dilatada que no reacciona.',
            preguntas: ['¿Qué parte del encéfalo contiene los centros respiratorio y cardiovascular?', '¿Qué par craneal controla la contracción pupilar y de qué parte del tallo sale?', '¿Qué harías de inmediato como enfermera?']
        },
        fuente: 'Taller Sistema nervioso y tallo cerebral (A. Murcia); Generalidades del SN; Moore.'
    });

    /* ---------------- CEREBELO ---------------- */
    CE.contenido('cerebelo', {
        revisado: false,
        prerrequisitos: ['Tallo cerebral y cuarto ventrículo.'],
        ideaPrincipal: 'El cerebelo está en la fosa craneal posterior, detrás del tallo. No inicia movimientos: los coordina, mantiene el equilibrio y el tono muscular, comparando lo que se planeó con lo que realmente se hace.',
        secciones: [
            { titulo: 'Configuración externa',
              lista: ['Dos hemisferios cerebelosos unidos en la línea media por el vermis.',
                      'Superficie con láminas (folias) paralelas separadas por surcos.',
                      'Lóbulos: anterior, posterior y floculonodular, separados por las fisuras primaria y posterolateral.',
                      'Tonsilas (amígdalas) cerebelosas: en la cara inferior, junto al agujero magno.',
                      'Se une al tallo por tres pares de pedúnculos: superiores (mesencéfalo), medios (puente) e inferiores (bulbo).'] },
            { titulo: 'Configuración interna',
              lista: ['Corteza cerebelosa (sustancia gris externa) y sustancia blanca interna, que en corte sagital forma el "árbol de la vida".',
                      'Núcleos profundos, de lateral a medial: dentado, emboliforme, globoso y fastigio.'] },
            { titulo: 'División funcional',
              tabla: { columnas: ['División', 'Corresponde a', 'Función'],
                       filas: [['Arquicerebelo (vestibulocerebelo)', 'Lóbulo floculonodular', 'Equilibrio y movimientos oculares'],
                               ['Paleocerebelo (espinocerebelo)', 'Vermis y zona paravermiana, lóbulo anterior', 'Tono muscular y postura; coordina los movimientos del tronco y las extremidades'],
                               ['Neocerebelo (cerebrocerebelo)', 'Hemisferios laterales, lóbulo posterior', 'Planeación y coordinación fina de los movimientos voluntarios']] } }
        ],
        figuras: [
            { src: R + 'cerebro-sagital.jpg', alt: 'Corte sagital del encéfalo con cerebelo', pie: 'Corte sagital: el cerebelo y su árbol de la vida detrás del tallo.', fuente: F_SN }
        ],
        enfermeria: [
            'Una lesión del cerebelo produce ataxia (marcha inestable, de base amplia), dismetría y temblor al intentar un movimiento: la valoras con la prueba dedo–nariz y la marcha en tándem.',
            'El paciente con alteración cerebelosa tiene alto riesgo de caídas: es un diagnóstico de enfermería prioritario.',
            'En la hipertensión intracraneal las tonsilas cerebelosas pueden herniarse por el agujero magno y comprimir el bulbo.'
        ],
        errores: ['Pensar que el cerebelo inicia el movimiento: lo coordina.', 'Confundir el vermis (línea media) con un hemisferio.'],
        loQueDebesSaber: ['Partes externas: hemisferios, vermis, lóbulos, pedúnculos.', 'Núcleos profundos en orden.', 'Función del arqui, paleo y neocerebelo.'],
        laminas: [
            { id: 'sn-cer-sup', src: R + 'lamina-cerebelo-superior.jpg', titulo: 'Cerebelo, cara superior (1 a 3)', fuente: F_TSN,
              marcas: [{ n: '1', r: 'Lóbulo anterior' }, { n: '2', r: 'Vermis' }, { n: '3', r: 'Lóbulo posterior' }],
              distractores: ['Lóbulo floculonodular', 'Tonsila cerebelosa'] },
            { id: 'sn-cer-inf', src: R + 'lamina-cerebelo-inferior.jpg', titulo: 'Cerebelo, cara inferior (4 a 7)', fuente: F_TSN,
              marcas: [{ n: '4', r: 'Pedúnculos cerebelosos (corte)' }, { n: '5', r: 'Tonsila (amígdala) cerebelosa' }, { n: '6', r: 'Vermis inferior' }, { n: '7', r: 'Flóculo (lóbulo floculonodular)' }],
              distractores: ['Lóbulo anterior'] },
            { id: 'sn-cer-nuc', src: R + 'lamina-nucleos-cerebelo.jpg', titulo: 'Núcleos del cerebelo (8 a 11)', fuente: F_TSN,
              marcas: [{ n: '8', r: 'Núcleo dentado' }, { n: '9', r: 'Núcleo emboliforme' }, { n: '10', r: 'Núcleo globoso' }, { n: '11', r: 'Núcleo del fastigio' }],
              distractores: ['Núcleo caudado'] }
        ],
        minicaso: {
            situacion: 'Una paciente consume alcohol en exceso por años. Al caminar separa mucho los pies, se tambalea y al tocar su nariz con el dedo lo hace temblando.',
            preguntas: ['¿Qué estructura del encéfalo está afectada?', '¿Qué división funcional del cerebelo controla el tono y la postura del tronco?', '¿Qué cuidados de seguridad priorizarías?']
        },
        fuente: 'Taller Sistema nervioso (A. Murcia); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PARES CRANEANOS ---------------- */
    CE.contenido('pares-craneanos', {
        revisado: false,
        prerrequisitos: ['Tallo cerebral: de dónde sale cada par.', 'Cráneo: agujeros de la base.'],
        ideaPrincipal: 'Los 12 pares craneales salen del encéfalo y atraviesan agujeros del cráneo. Pueden ser sensitivos, motores o mixtos, y algunos llevan fibras parasimpáticas. Su valoración es parte del examen neurológico de enfermería.',
        secciones: [
            { titulo: 'Los doce pares',
              tabla: { columnas: ['Par', 'Nombre', 'Tipo', 'Función principal', 'Cómo se valora'],
                       filas: [['I', 'Olfatorio', 'Sensitivo', 'Olfato', 'Oler una sustancia conocida con cada fosa nasal, ojos cerrados'],
                               ['II', 'Óptico', 'Sensitivo', 'Visión', 'Agudeza visual (tabla de Snellen) y campos visuales'],
                               ['III', 'Oculomotor (motor ocular común)', 'Motor + parasimpático', 'Mayoría de músculos del ojo, elevar el párpado, contraer la pupila', 'Reflejo pupilar a la luz, movimientos oculares, apertura del párpado'],
                               ['IV', 'Troclear (patético)', 'Motor', 'Músculo oblicuo superior (mirar hacia abajo y adentro)', 'Seguir un objeto con la mirada (movimientos en H)'],
                               ['V', 'Trigémino', 'Mixto', 'Sensibilidad de la cara; músculos de la masticación', 'Tacto en frente, mejilla y mentón; apretar los dientes; reflejo corneal'],
                               ['VI', 'Abducens (motor ocular externo)', 'Motor', 'Músculo recto lateral (mirar hacia afuera)', 'Mirada lateral'],
                               ['VII', 'Facial', 'Mixto + parasimpático', 'Músculos de la expresión facial; gusto de los 2/3 anteriores de la lengua; lágrimas y saliva', 'Sonreír, arrugar la frente, cerrar los ojos con fuerza, inflar las mejillas'],
                               ['VIII', 'Vestibulococlear (auditivo)', 'Sensitivo', 'Audición y equilibrio', 'Voz susurrada, pruebas de Rinne y Weber, equilibrio'],
                               ['IX', 'Glosofaríngeo', 'Mixto + parasimpático', 'Gusto del 1/3 posterior de la lengua; sensibilidad de la faringe; glándula parótida', 'Reflejo nauseoso, deglución'],
                               ['X', 'Vago (neumogástrico)', 'Mixto + parasimpático', 'Faringe y laringe (deglución, voz); parasimpático de vísceras torácicas y abdominales', 'Decir "aaa" y observar la úvula; voz; deglución'],
                               ['XI', 'Accesorio (espinal)', 'Motor', 'Músculos esternocleidomastoideo y trapecio', 'Encoger los hombros y girar la cabeza contra resistencia'],
                               ['XII', 'Hipogloso', 'Motor', 'Músculos de la lengua', 'Sacar la lengua y moverla a los lados']] },
              nota: 'Pares con fibras parasimpáticas: III, VII, IX y X (regla "1973").' },
            { titulo: 'Por dónde salen del cráneo',
              lista: ['I: lámina cribosa del etmoides. II: conducto óptico.',
                      'III, IV, V1 y VI: hendidura orbitaria superior. V2: agujero redondo mayor. V3: agujero oval.',
                      'VII y VIII: conducto auditivo interno (el VII sale al final por el agujero estilomastoideo).',
                      'IX, X y XI: agujero yugular (rasgado posterior). XII: conducto del hipogloso.'] }
        ],
        figuras: [
            { src: R + 'guia-pares-craneanos.jpg', alt: 'Pares craneanos y su distribución', pie: 'Pares craneanos y órganos que inervan.', fuente: F_GUIA },
            { src: R + 'pares-craneales.jpg', alt: 'Pares craneales desde la base del encéfalo', pie: 'Pares craneales en la base del encéfalo.', fuente: F_SN },
            { src: R + 'guia-cerebro-sagital.jpg', alt: 'Corte sagital con pares craneanos rotulados', pie: 'Corte sagital: tallo cerebral y salida de pares.', fuente: F_GUIA }
        ],
        enfermeria: [
            'La valoración pupilar (III par) se registra con tamaño, simetría y reacción a la luz en todo paciente neurológico.',
            'Antes de dar alimentos por boca a un paciente con accidente cerebrovascular se valora la deglución (IX, X y XII) para evitar broncoaspiración.',
            'En la parálisis facial periférica (VII) el paciente no puede cerrar el ojo: hay que proteger la córnea con lubricante y oclusión.'
        ],
        errores: ['Confundir el IV (troclear) con el VI (abducens).', 'Pensar que el trigémino mueve los músculos de la expresión facial: eso lo hace el facial; el trigémino da sensibilidad y mueve los de la masticación.'],
        loQueDebesSaber: ['Número, nombre y tipo de los doce pares.', 'Función principal y forma de valorarlos.', 'Pares con componente parasimpático.', 'Agujero de salida de cada par.'],
        minicaso: {
            situacion: 'Un señor de 58 años despierta con la mitad derecha de la cara caída: no puede arrugar la frente ni cerrar el ojo derecho, y al sonreír la boca se desvía.',
            preguntas: ['¿Qué par craneal está afectado?', '¿Qué otras funciones de ese par valorarías?', '¿Qué cuidado es prioritario para el ojo derecho?']
        },
        fuente: 'Guía Cráneo–columna–SN (Cátedra de Morfología FUCS); Taller Sistema nervioso (A. Murcia); Moore.'
    });

    /* ---------------- CEREBRO ---------------- */
    CE.contenido('cerebro', {
        revisado: false,
        prerrequisitos: ['Generalidades del sistema nervioso: sustancia gris y blanca, meninges.'],
        ideaPrincipal: 'El cerebro tiene dos hemisferios con corteza de sustancia gris plegada en giros y surcos, dividida en lóbulos con funciones propias. Por dentro tiene sustancia blanca, núcleos basales, el diencéfalo (tálamo e hipotálamo) y los ventrículos laterales.',
        secciones: [
            { titulo: 'Configuración externa',
              lista: ['Fisura longitudinal: separa los dos hemisferios.',
                      'Surco central (de Rolando): separa el lóbulo frontal del parietal.',
                      'Surco lateral (de Silvio): separa el lóbulo temporal del frontal y parietal; en su profundidad está la ínsula.',
                      'Peso aproximado: 400 g en el recién nacido y 1.400–1.500 g en el adulto.'],
              tabla: { columnas: ['Lóbulo', 'Ubicación', 'Funciones principales'],
                       filas: [['Frontal', 'Delante del surco central', 'Corteza motora primaria (giro precentral), planeación, razonamiento, personalidad, área motora del lenguaje (Broca)'],
                               ['Parietal', 'Detrás del surco central', 'Corteza somatosensorial (giro poscentral): tacto, presión, temperatura, dolor; integración de información'],
                               ['Temporal', 'Debajo del surco lateral', 'Área auditiva primaria (giro de Heschl), comprensión del lenguaje (Wernicke), memoria (hipocampo)'],
                               ['Occipital', 'Detrás del parietal y temporal', 'Área visual primaria'],
                               ['Ínsula', 'En el fondo del surco lateral', 'Integración del gusto, información visceral, dolor, funciones vestibulares, atención']] } },
            { titulo: 'Configuración interna',
              lista: ['Cuerpo calloso: gran comisura de sustancia blanca que une los dos hemisferios.',
                      'Núcleos basales: caudado, putamen y globo pálido; participan en el control del movimiento (su alteración produce, por ejemplo, la enfermedad de Parkinson).',
                      'Cápsula interna: sustancia blanca por la que pasan las vías motoras y sensitivas entre la corteza y el tallo.',
                      'Diencéfalo: tálamo (estación de relevo de casi toda la información sensitiva hacia la corteza), hipotálamo (temperatura, hambre, sed, hormonas, relación con la hipófisis) y epitálamo (glándula pineal).',
                      'Ventrículos laterales (uno en cada hemisferio) → tercer ventrículo (entre los tálamos).'] },
            { titulo: 'Homúnculo',
              texto: 'En los giros precentral (motor) y poscentral (sensitivo) el cuerpo está representado en orden y con tamaño proporcional a su precisión: manos, cara y labios ocupan un área enorme. Cada hemisferio controla el lado opuesto del cuerpo.' }
        ],
        figuras: [
            { src: R + 'cerebro-lobulos.jpg', alt: 'Lóbulos cerebrales en colores', pie: 'Lóbulos del hemisferio cerebral.', fuente: F_SN },
            { src: R + 'guia-lobulos.jpg', alt: 'Lóbulos cerebrales rotulados', pie: 'Lóbulos frontal, parietal, temporal y occipital (rotulados).', fuente: F_GUIA },
            { src: R + 'cerebro-lateral.jpg', alt: 'Cerebro en vista lateral', pie: 'Cara lateral: surcos central y lateral.', fuente: F_SN },
            { src: R + 'guia-cerebro-sagital.jpg', alt: 'Corte sagital del cerebro rotulado', pie: 'Corte sagital: hemisferio, cuerpo calloso, diencéfalo, tallo y cerebelo.', fuente: F_GUIA },
            { src: R + 'irrigacion-cerebral.jpg', alt: 'Base del encéfalo con arterias', pie: 'Base del encéfalo y su irrigación.', fuente: F_SN }
        ],
        enfermeria: [
            'Un accidente cerebrovascular en el hemisferio izquierdo produce debilidad en el lado derecho del cuerpo y, con frecuencia, alteraciones del lenguaje (afasia).',
            'La escala de coma de Glasgow valora apertura ocular, respuesta verbal y respuesta motora: refleja el funcionamiento de corteza, tálamo y tallo.',
            'El hipotálamo regula la temperatura: su lesión puede causar fiebre que no responde a antipiréticos.'
        ],
        errores: ['Pensar que cada hemisferio controla el mismo lado del cuerpo: controla el opuesto.', 'Confundir surco central (Rolando) con lateral (Silvio).', 'Ubicar el área visual en el lóbulo frontal.'],
        loQueDebesSaber: ['Surcos principales y lóbulos con sus funciones.', 'Qué es el cuerpo calloso.', 'Núcleos basales, tálamo e hipotálamo y su función.', 'Relación del homúnculo con la valoración neurológica.'],
        laminas: [
            { id: 'sn-cer-lat', src: R + 'lamina-cerebro-lateral.jpg', titulo: 'Cerebro, cara lateral (39 a 44)', fuente: F_TSN,
              marcas: [{ n: '39', r: 'Lóbulo frontal' }, { n: '40', r: 'Surco central (de Rolando)' }, { n: '41', r: 'Lóbulo parietal' }, { n: '42', r: 'Lóbulo occipital' }, { n: '43', r: 'Surco lateral (de Silvio)' }, { n: '44', r: 'Lóbulo temporal' }],
              distractores: ['Ínsula', 'Cerebelo'] },
            { id: 'sn-cer-sag', src: R + 'lamina-cerebro-sagital.jpg', titulo: 'Encéfalo, corte sagital (47, 50, 52, 53 y 54)', fuente: F_TSN + '. Los demás números se revisan con la docente.',
              marcas: [{ n: '47', r: 'Cuerpo calloso' }, { n: '50', r: 'Cerebelo (árbol de la vida)' }, { n: '52', r: 'Cuarto ventrículo' }, { n: '53', r: 'Bulbo raquídeo (médula oblonga)' }, { n: '54', r: 'Puente' }],
              distractores: ['Tálamo', 'Hipófisis'] },
            { id: 'sn-cer-ax', src: R + 'lamina-cerebro-axial.jpg', titulo: 'Cerebro, corte horizontal (56, 59 y 62)', fuente: F_TSN + '. Los demás números se revisan con la docente.',
              marcas: [{ n: '56', r: 'Ínsula' }, { n: '59', r: 'Cabeza del núcleo caudado' }, { n: '62', r: 'Tálamo' }],
              distractores: ['Putamen', 'Cápsula interna'] }
        ],
        minicaso: {
            situacion: 'Una mujer de 70 años presenta de repente debilidad del brazo y la pierna izquierdos y dificultad para reconocer que tiene ese lado afectado.',
            preguntas: ['¿En qué hemisferio está la lesión y por qué?', '¿Qué giro controla el movimiento voluntario y en qué lóbulo está?', '¿Qué valoraciones neurológicas harías de forma seriada?']
        },
        fuente: 'Generalidades del SN (A. Moreno); Taller Sistema nervioso (A. Murcia); Guía Cráneo–columna–SN; Moore.'
    });

    /* ---------------- OJO Y OÍDO ---------------- */
    CE.contenido('ojo-oido', {
        revisado: false,
        prerrequisitos: ['Pares craneales II, III, IV, VI y VIII.', 'Cráneo: órbita y hueso temporal.'],
        ideaPrincipal: 'El ojo capta la luz y la convierte en impulsos que viajan por el nervio óptico; el oído capta las ondas sonoras, las conduce por el oído medio y las transforma en impulsos en el oído interno, donde también está el órgano del equilibrio.',
        secciones: [
            { titulo: 'Órbita y anexos del ojo',
              lista: ['La órbita la forman siete huesos: frontal, esfenoides, etmoides, lagrimal, maxilar, cigomático y palatino.',
                      'Músculos extrínsecos: 4 rectos (superior, inferior, medial, lateral), 2 oblicuos (superior e inferior) y el elevador del párpado superior. Inervación: III (casi todos), IV (oblicuo superior) y VI (recto lateral).',
                      'Anexos: párpados, conjuntiva y aparato lagrimal (glándula lagrimal en la parte superolateral; las lágrimas drenan por los puntos lagrimales al conducto nasolagrimal).'] },
            { titulo: 'Globo ocular: tres túnicas',
              tabla: { columnas: ['Túnica', 'Partes', 'Función'],
                       filas: [['Externa o fibrosa', 'Esclerótica (blanca, posterior) y córnea (transparente, anterior)', 'Protección y forma; la córnea refracta la luz'],
                               ['Media o vascular (úvea)', 'Coroides, cuerpo ciliar e iris (con la pupila)', 'Nutrición; el cuerpo ciliar enfoca y produce el humor acuoso; el iris regula la luz'],
                               ['Interna o nerviosa', 'Retina (con conos y bastones, mácula, fóvea y disco óptico o punto ciego)', 'Convierte la luz en impulsos nerviosos']] },
              texto: 'Medios transparentes: humor acuoso (cámaras anterior y posterior), cristalino (lente sostenida por la zónula) y cuerpo vítreo (gel que ocupa la cavidad posterior).' },
            { titulo: 'Oído',
              tabla: { columnas: ['Parte', 'Estructuras', 'Función'],
                       filas: [['Externo', 'Pabellón auricular (hélix, antihélix, lóbulo) y conducto auditivo externo', 'Capta y conduce las ondas sonoras'],
                               ['Medio (caja timpánica)', 'Membrana timpánica, huesecillos (martillo, yunque y estribo), trompa auditiva (de Eustaquio)', 'Amplifica y transmite las vibraciones; la trompa iguala presiones con la faringe'],
                               ['Interno (laberinto)', 'Cóclea (audición), vestíbulo y conductos semicirculares (equilibrio)', 'Transforma la vibración en impulsos que viajan por el VIII par']] } }
        ],
        figuras: [
            { src: R + 'lamina-globo-ocular.jpg', alt: 'Corte del globo ocular (lámina del taller)', pie: 'Corte del globo ocular: identifica túnicas y medios.', fuente: F_OJO },
            { src: R + 'lamina-oido.jpg', alt: 'Corte del oído externo, medio e interno (lámina del taller)', pie: 'Oído externo, medio e interno.', fuente: F_OIDO }
        ],
        enfermeria: [
            'Para instilar gotas óticas en el adulto se tracciona el pabellón hacia arriba y atrás; en el niño pequeño, hacia abajo y atrás, porque el conducto es más recto.',
            'La trompa auditiva del niño es más corta y horizontal: por eso las infecciones de garganta pasan fácilmente al oído medio (otitis).',
            'Al irrigar el ojo el líquido se dirige del ángulo interno al externo, para no arrastrar partículas hacia el conducto lagrimal del otro lado.',
            'La valoración de la agudeza visual (Snellen) y la audición hace parte del control de crecimiento y desarrollo.'
        ],
        errores: ['Confundir esclerótica con córnea: ambas son la túnica externa, pero la córnea es la parte transparente anterior.', 'Pensar que el oído interno sólo sirve para oír: también controla el equilibrio.'],
        loQueDebesSaber: ['Huesos de la órbita y músculos extrínsecos con su inervación.', 'Túnicas del ojo y medios transparentes.', 'Partes del oído y huesecillos en orden.', 'Función de la trompa auditiva.'],
        laminas: [
            { id: 'sn-ojo', src: R + 'lamina-globo-ocular.jpg', titulo: 'Globo ocular (9, 13, 15, 16, 18 y 19)', fuente: F_OJO + '. Los números 10, 11, 12, 14 y 17 se revisan con la docente.',
              marcas: [{ n: '9', r: 'Córnea' }, { n: '13', r: 'Cristalino' }, { n: '15', r: 'Nervio óptico' }, { n: '16', r: 'Cuerpo vítreo' }, { n: '18', r: 'Esclerótica' }, { n: '19', r: 'Iris' }],
              distractores: ['Retina', 'Cuerpo ciliar'] },
            { id: 'sn-oido', src: R + 'lamina-oido.jpg', titulo: 'Oído (1 a 5)', fuente: F_OIDO + '. Los números 6, 7 y 8 se revisan con la docente.',
              marcas: [{ n: '1', r: 'Lóbulo de la oreja' }, { n: '2', r: 'Conducto auditivo externo' }, { n: '3', r: 'Pabellón auricular (hélix)' }, { n: '4', r: 'Membrana timpánica' }, { n: '5', r: 'Huesecillos del oído medio' }],
              distractores: ['Cóclea', 'Trompa auditiva'] }
        ],
        minicaso: {
            situacion: 'Un niño de 2 años llega con fiebre y llanto; se toca la oreja derecha. La madre cuenta que tuvo gripa la semana pasada.',
            preguntas: ['¿Qué estructura comunica la faringe con el oído medio?', '¿Por qué los niños pequeños tienen más otitis?', '¿Cómo traccionarías el pabellón para aplicar gotas en este niño?']
        },
        fuente: 'Taller Ojo y Taller Oído (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'sn-01', tema: 'sistema-nervioso', subtema: 'Generalidades del sistema nervioso', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuántos pares de nervios raquídeos hay?', opciones: ['12', '24', '31', '33'], correcta: 2,
          explicacion: '8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coccígeo.' },
        { id: 'sn-02', tema: 'sistema-nervioso', subtema: 'Generalidades del sistema nervioso', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las meninges de externa a interna.', orden: ['Duramadre', 'Aracnoides', 'Piamadre'],
          explicacion: 'El LCR circula entre aracnoides y piamadre (espacio subaracnoideo).' },
        { id: 'sn-03', tema: 'sistema-nervioso', subtema: 'Generalidades del sistema nervioso', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada término con su ubicación.',
          pares: [['Núcleo', 'Cuerpos neuronales en el SNC'], ['Ganglio', 'Cuerpos neuronales en el SNP'], ['Tracto', 'Haz de axones en el SNC'], ['Nervio', 'Haz de axones en el SNP']],
          explicacion: 'Muy preguntado: la diferencia es SNC vs. SNP.' },
        { id: 'sn-04', tema: 'sistema-nervioso', subtema: 'Generalidades del sistema nervioso', tipo: 'vf', revisado: false,
          enunciado: 'La raíz posterior del nervio raquídeo es sensitiva y tiene un ganglio.', correcta: true,
          explicacion: 'La raíz anterior es motora; al unirse forman un nervio mixto.' },
        { id: 'sn-05', tema: 'sistema-nervioso', subtema: 'Generalidades del sistema nervioso', tipo: 'multiple', revisado: false,
          enunciado: '¿Hasta qué nivel llega la médula espinal en el adulto?', opciones: ['C7', 'T12', 'L1–L2', 'S2'], correcta: 2,
          explicacion: 'Por eso la punción lumbar se hace más abajo, entre L3–L4 o L4–L5.' },
        { id: 'sn-06', tema: 'tallo-cerebral', subtema: 'Tallo cerebral', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las partes del tallo cerebral de superior a inferior.', orden: ['Mesencéfalo', 'Puente', 'Bulbo raquídeo'],
          explicacion: 'El bulbo se continúa con la médula espinal en el agujero magno.' },
        { id: 'sn-07', tema: 'tallo-cerebral', subtema: 'Tallo cerebral', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué parte del tallo contiene los centros respiratorio y cardiovascular?', opciones: ['Mesencéfalo', 'Puente', 'Bulbo raquídeo', 'Cerebelo'], correcta: 2,
          explicacion: 'Por eso su compresión es mortal.' },
        { id: 'sn-08', tema: 'cerebelo', subtema: 'Cerebelo', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada división del cerebelo con su función.',
          pares: [['Arquicerebelo', 'Equilibrio'], ['Paleocerebelo', 'Tono muscular y postura'], ['Neocerebelo', 'Coordinación fina de movimientos voluntarios']],
          explicacion: 'Pregunta directa del taller.' },
        { id: 'sn-09', tema: 'cerebelo', subtema: 'Cerebelo', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena los núcleos del cerebelo de lateral a medial.', orden: ['Dentado', 'Emboliforme', 'Globoso', 'Fastigio'],
          explicacion: 'Regla: "Don Emilio Gana Fácil".' },
        { id: 'sn-10', tema: 'pares-craneanos', subtema: 'Función de los pares craneanos', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada par con su nombre.',
          pares: [['III', 'Oculomotor'], ['V', 'Trigémino'], ['VII', 'Facial'], ['X', 'Vago'], ['XII', 'Hipogloso']],
          explicacion: 'Aprende nombre, número y tipo juntos.' },
        { id: 'sn-11', tema: 'pares-craneanos', subtema: 'Valoración para enfermería', tipo: 'multiple', revisado: false,
          enunciado: 'Le pides al paciente que encoja los hombros contra resistencia. Estás valorando el par:', opciones: ['X', 'XI', 'XII', 'IX'], correcta: 1,
          explicacion: 'El accesorio inerva trapecio y esternocleidomastoideo.' },
        { id: 'sn-12', tema: 'pares-craneanos', subtema: 'Valoración para enfermería', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué par valoras con el reflejo pupilar a la luz (respuesta de contracción)?', opciones: ['II únicamente', 'III (vía eferente), con el II como vía aferente', 'IV', 'VI'], correcta: 1,
          explicacion: 'El II capta la luz; el III contrae la pupila.' },
        { id: 'sn-13', tema: 'pares-craneanos', subtema: 'Función de los pares craneanos', tipo: 'vf', revisado: false,
          enunciado: 'El nervio facial (VII) mueve los músculos de la masticación.', correcta: false,
          explicacion: 'Los de la masticación los mueve el trigémino (V3). El facial mueve los de la expresión.' },
        { id: 'sn-14', tema: 'pares-craneanos', subtema: 'Función de los pares craneanos', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuáles pares llevan fibras parasimpáticas?', opciones: ['I, II, VIII', 'III, VII, IX, X', 'IV, VI, XI', 'V, XII'], correcta: 1,
          explicacion: 'Regla "1973": III, VII, IX y X.' },
        { id: 'sn-15', tema: 'cerebro', subtema: 'Configuración externa', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada lóbulo con una función.',
          pares: [['Frontal', 'Corteza motora y planeación'], ['Parietal', 'Sensibilidad somática'], ['Temporal', 'Audición'], ['Occipital', 'Visión']],
          explicacion: 'Pregunta del taller: "¿Qué áreas funcionales se localizan en cada lóbulo?".' },
        { id: 'sn-16', tema: 'cerebro', subtema: 'Configuración externa', tipo: 'multiple', revisado: false,
          enunciado: 'El surco que separa el lóbulo frontal del parietal es el:', opciones: ['Lateral (Silvio)', 'Central (Rolando)', 'Parietooccipital', 'Calcarino'], correcta: 1,
          explicacion: 'Delante está el giro precentral (motor), detrás el poscentral (sensitivo).' },
        { id: 'sn-17', tema: 'cerebro', subtema: 'Configuración interna', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué estructura es la principal estación de relevo sensitivo hacia la corteza?', opciones: ['Hipotálamo', 'Tálamo', 'Cerebelo', 'Puente'], correcta: 1,
          explicacion: 'Otra pregunta del taller: función del tálamo.' },
        { id: 'sn-18', tema: 'cerebro', subtema: 'Configuración interna', tipo: 'vf', revisado: false,
          enunciado: 'El cuerpo calloso une los dos hemisferios cerebrales.', correcta: true,
          explicacion: 'Es la principal comisura del cerebro.' },
        { id: 'sn-19', tema: 'ojo-oido', subtema: 'Ojo: estructuras y función', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada estructura con su túnica.',
          pares: [['Esclerótica', 'Túnica fibrosa'], ['Coroides', 'Túnica vascular'], ['Retina', 'Túnica nerviosa'], ['Iris', 'Túnica vascular']],
          explicacion: 'Córnea y esclerótica forman la túnica fibrosa.' },
        { id: 'sn-20', tema: 'ojo-oido', subtema: 'Oído: estructuras y función', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido del sonido.', orden: ['Pabellón auricular', 'Conducto auditivo externo', 'Membrana timpánica', 'Martillo', 'Yunque', 'Estribo', 'Cóclea'],
          explicacion: 'De la cóclea sale el impulso por el nervio vestibulococlear.' },
        { id: 'sn-21', tema: 'ojo-oido', subtema: 'Ojo: estructuras y función', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué nervio inerva el músculo recto lateral del ojo?', opciones: ['III', 'IV', 'VI', 'II'], correcta: 2,
          explicacion: 'El abducens "abduce" el ojo.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-sn-01', tema: 'sistema-nervioso', revisado: false, frente: 'Divisiones del sistema nervioso', reverso: 'SNC (encéfalo y médula), SNP (12 pares craneales, 31 raquídeos, ganglios) y autónomo (simpático y parasimpático).' },
        { id: 'fc-sn-02', tema: 'sistema-nervioso', revisado: false, frente: 'Espacio subaracnoideo', reverso: 'Entre aracnoides y piamadre; contiene el líquido cefalorraquídeo.' },
        { id: 'fc-sn-03', tema: 'sistema-nervioso', revisado: false, frente: 'Circulación del LCR', reverso: 'Plexos coroideos → ventrículos laterales → III ventrículo → acueducto → IV ventrículo → espacio subaracnoideo → granulaciones aracnoideas.' },
        { id: 'fc-sn-04', tema: 'sistema-nervioso', revisado: false, frente: 'Vesículas encefálicas secundarias', reverso: 'Telencéfalo, diencéfalo, mesencéfalo, metencéfalo y mielencéfalo.' },
        { id: 'fc-sn-05', tema: 'sistema-nervioso', revisado: false, frente: 'Neuroglía del SNC', reverso: 'Astrocitos, oligodendrocitos, microglía, células ependimarias.' },
        { id: 'fc-sn-06', tema: 'tallo-cerebral', revisado: false, frente: 'Partes del tallo cerebral', reverso: 'Mesencéfalo, puente y bulbo raquídeo.' },
        { id: 'fc-sn-07', tema: 'tallo-cerebral', revisado: false, frente: 'Pares que salen del bulbo', reverso: 'IX, X, XI y XII.' },
        { id: 'fc-sn-08', tema: 'cerebelo', revisado: false, frente: 'Núcleos del cerebelo (lateral a medial)', reverso: 'Dentado, emboliforme, globoso y fastigio.' },
        { id: 'fc-sn-09', tema: 'cerebelo', revisado: false, frente: 'Pedúnculos cerebelosos', reverso: 'Superiores (mesencéfalo), medios (puente) e inferiores (bulbo).' },
        { id: 'fc-sn-10', tema: 'pares-craneanos', revisado: false, frente: 'Pares sensitivos puros', reverso: 'I (olfatorio), II (óptico), VIII (vestibulococlear).' },
        { id: 'fc-sn-11', tema: 'pares-craneanos', revisado: false, frente: 'Pares motores puros', reverso: 'III, IV, VI, XI y XII.' },
        { id: 'fc-sn-12', tema: 'pares-craneanos', revisado: false, frente: 'Pares mixtos', reverso: 'V, VII, IX y X.' },
        { id: 'fc-sn-13', tema: 'pares-craneanos', revisado: false, frente: 'Cómo valorar el VII par', reverso: 'Arrugar la frente, cerrar los ojos con fuerza, sonreír, inflar las mejillas.' },
        { id: 'fc-sn-14', tema: 'pares-craneanos', revisado: false, frente: 'Cómo valorar el XII par', reverso: 'Sacar la lengua y moverla a los lados; observar desviación.' },
        { id: 'fc-sn-15', tema: 'cerebro', revisado: false, frente: 'Giro precentral y poscentral', reverso: 'Precentral (lóbulo frontal): corteza motora. Poscentral (lóbulo parietal): corteza sensitiva.' },
        { id: 'fc-sn-16', tema: 'cerebro', revisado: false, frente: 'Área de Broca y de Wernicke', reverso: 'Broca (frontal): expresión del lenguaje. Wernicke (temporal): comprensión.' },
        { id: 'fc-sn-17', tema: 'cerebro', revisado: false, frente: 'Función del hipotálamo', reverso: 'Temperatura, hambre, sed, ritmos, control de la hipófisis.' },
        { id: 'fc-sn-18', tema: 'ojo-oido', revisado: false, frente: 'Túnicas del ojo', reverso: 'Fibrosa (esclerótica y córnea), vascular (coroides, cuerpo ciliar, iris), nerviosa (retina).' },
        { id: 'fc-sn-19', tema: 'ojo-oido', revisado: false, frente: 'Huesecillos del oído', reverso: 'Martillo, yunque y estribo.' },
        { id: 'fc-sn-20', tema: 'ojo-oido', revisado: false, frente: 'Músculos extrínsecos del ojo e inervación', reverso: 'Rectos superior, inferior, medial (III), lateral (VI); oblicuo superior (IV), oblicuo inferior (III).' }
    ]);
})();
