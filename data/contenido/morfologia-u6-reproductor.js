/* ============================================================
   CONTENIDO · Morfología · Unidad VI · Sistema reproductor
   Elaborado a partir de: Guía de estudio Genital femenino y
   masculino, Taller Genital femenino (Dr. Ariel Murcia) y Guía de
   estudio Sistema urinario (Cátedra de Morfología FUCS).
   Ilustraciones: Netter / Machado. Verificado contra Moore.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/reproductor/';
    var F_GUIA = 'Guía de estudio Genital femenino y masculino, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_TAL = 'Taller Genital femenino, Dr. Ariel Murcia (FUCS). Ilustraciones: Netter';

    /* ---------------- GENITAL FEMENINO ---------------- */
    CE.contenido('genital-femenino', {
        revisado: false,
        prerrequisitos: ['Pelvis ósea.', 'Peritoneo: fondos de saco.', 'Embriología: ovogénesis y fecundación.'],
        ideaPrincipal: 'Los órganos genitales femeninos internos (ovarios, trompas uterinas, útero y vagina) están en la pelvis menor, entre la vejiga y el recto. Los externos forman la vulva. El útero normalmente está en anteversión y anteflexión.',
        secciones: [
            { titulo: 'Órganos internos',
              tabla: { columnas: ['Órgano', 'Descripción', 'Función'],
                       filas: [['Ovarios', 'Dos, a los lados del útero, fijados por el ligamento suspensorio y el ligamento propio del ovario', 'Producen ovocitos y hormonas (estrógenos y progesterona)'],
                               ['Trompas uterinas', 'Unos 10 cm: infundíbulo con fimbrias, ampolla (sitio de la fecundación), istmo y porción uterina', 'Captan el ovocito y conducen el cigoto al útero'],
                               ['Útero', 'Órgano muscular hueco: fondo, cuerpo, istmo y cuello (cérvix) con orificio externo. Pared: endometrio, miometrio y perimetrio', 'Alberga y nutre el embarazo; su endometrio se descama en la menstruación'],
                               ['Vagina', 'Conducto fibromuscular del cuello uterino al vestíbulo; fórnix (fondos de saco) alrededor del cuello', 'Canal del parto, salida del flujo menstrual, órgano de la cópula']] } },
            { titulo: 'Posición del útero y medios de fijación',
              lista: ['Anteversión: el eje del útero está inclinado hacia adelante respecto a la vagina. Anteflexión: el cuerpo está doblado hacia adelante sobre el cuello. Es la posición normal.',
                      'Variantes: retroversión (útero inclinado hacia atrás) y retroflexión (cuerpo doblado hacia atrás).',
                      'Ligamento ancho: pliegue de peritoneo que cubre útero, trompas y ovarios. Ligamento redondo: del útero al conducto inguinal, mantiene la anteversión. Ligamentos cardinales y uterosacros: sostén principal del cuello.',
                      'Fondo de saco rectouterino (de Douglas): punto más bajo de la cavidad peritoneal en la mujer.'] },
            { titulo: 'Irrigación',
              lista: ['Arteria uterina (rama de la ilíaca interna): cruza por encima del uréter cerca del cuello uterino ("el agua pasa bajo el puente").',
                      'Arteria ovárica: nace directamente de la aorta abdominal.'] },
            { titulo: 'Genitales externos (vulva)',
              texto: 'Monte del pubis, labios mayores, labios menores, clítoris con su prepucio, vestíbulo de la vagina con el orificio uretral externo (por delante) y el orificio vaginal (por detrás), glándulas vestibulares mayores (de Bartholin) y el periné entre la vulva y el ano.' }
        ],
        figuras: [
            { src: R + 'guia-pelvis-femenina-sagital.jpg', alt: 'Corte sagital de la pelvis femenina rotulado', pie: 'Corte sagital: ovario, útero, vejiga, recto, pubis.', fuente: F_GUIA },
            { src: R + 'guia-pelvis-femenina-axial.jpg', alt: 'Pelvis femenina vista superior rotulada', pie: 'Vista superior: útero, trompas, ovarios, vejiga.', fuente: F_GUIA },
            { src: R + 'guia-pelvis-femenina-axial-2.jpg', alt: 'Pelvis femenina con ligamento redondo rotulada', pie: 'Útero, ligamento redondo, ovario, recto.', fuente: F_GUIA }
        ],
        enfermeria: [
            'Para la citología cervicovaginal y la inserción de dispositivos se debe conocer la posición del útero; en la retroversión la técnica cambia.',
            'El fondo de saco de Douglas es donde se acumula sangre en un embarazo ectópico roto.',
            'La ampolla de la trompa es el sitio más frecuente del embarazo ectópico, que se presenta con dolor en fosa ilíaca y signos de sangrado.',
            'La glándula de Bartholin puede formar quistes o abscesos a los lados del orificio vaginal.'
        ],
        errores: ['Pensar que la fecundación ocurre en el útero: ocurre en la ampolla de la trompa.', 'Confundir anteversión (inclinación) con anteflexión (doblez).', 'Ubicar el orificio uretral por detrás del vaginal: está por delante.'],
        loQueDebesSaber: ['Partes de trompa y útero.', 'Capas de la pared uterina.', 'Posición normal del útero y variantes.', 'Ligamentos del útero y fondo de saco rectouterino.', 'Estructuras de la vulva en orden.'],
        laminas: [
            { id: 'rp-sag', src: R + 'lamina-pelvis-sagital.jpg', titulo: 'Pelvis femenina, corte sagital (13, 14, 15, 18, 19 y 20)', fuente: F_TAL + '. Los números 16 y 17 se revisan con la docente.',
              marcas: [{ n: '13', r: 'Trompa uterina (fimbrias)' }, { n: '14', r: 'Sacro' }, { n: '15', r: 'Recto' }, { n: '18', r: 'Vejiga urinaria' }, { n: '19', r: 'Útero' }, { n: '20', r: 'Ovario' }],
              distractores: ['Vagina', 'Sínfisis del pubis'] },
            { id: 'rp-utero', src: R + 'lamina-utero-corte.jpg', titulo: 'Útero y anexos, corte (50, 51, 52, 55 y 56)', fuente: F_TAL + '. Los números 53 y 54 se revisan con la docente.',
              marcas: [{ n: '50', r: 'Fondo del útero' }, { n: '51', r: 'Trompa uterina' }, { n: '52', r: 'Fimbrias' }, { n: '55', r: 'Cuello uterino (orificio externo)' }, { n: '56', r: 'Miometrio' }],
              distractores: ['Ovario', 'Endometrio'] },
            { id: 'rp-posicion', src: R + 'lamina-posicion-utero.jpg', titulo: 'Posición del útero (57 a 59)', fuente: F_TAL,
              marcas: [{ n: '57', r: 'Anteversión y anteflexión (normal)' }, { n: '58', r: 'Retroversión' }, { n: '59', r: 'Retroflexión' }],
              distractores: ['Prolapso uterino'] },
            { id: 'rp-vulva', src: R + 'lamina-vulva.jpg', titulo: 'Genitales externos femeninos (60 a 64 y 66)', fuente: F_TAL + '. El número 65 se revisa con la docente.',
              marcas: [{ n: '60', r: 'Monte del pubis' }, { n: '61', r: 'Prepucio del clítoris' }, { n: '62', r: 'Clítoris' }, { n: '63', r: 'Orificio uretral externo' }, { n: '64', r: 'Orificio vaginal' }, { n: '66', r: 'Labio mayor' }],
              distractores: ['Labio menor', 'Periné'] }
        ],
        minicaso: {
            situacion: 'Una mujer de 26 años con 7 semanas de retraso menstrual llega con dolor intenso en la fosa ilíaca derecha, palidez y taquicardia.',
            preguntas: ['¿En qué parte de la trompa ocurre con más frecuencia el embarazo ectópico?', '¿Dónde se acumularía la sangre en la cavidad peritoneal?', '¿Qué signos vitales vigilarías con prioridad?']
        },
        fuente: 'Guía de estudio Genital femenino y Taller Genital femenino (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- PELVIS, VEJIGA Y URETRA ---------------- */
    CE.contenido('pelvis-vejiga-uretra', {
        revisado: false,
        prerrequisitos: ['Sacro y cóccix (columna).', 'Articulaciones cartilaginosas (sínfisis).', 'Uréter (Unidad V).'],
        ideaPrincipal: 'La pelvis ósea (dos coxales, sacro y cóccix) forma un anillo que protege los órganos pélvicos y, en la mujer, es el canal del parto. Sus diámetros definen si un parto vaginal es posible. La vejiga almacena la orina y la uretra la conduce al exterior.',
        secciones: [
            { titulo: 'Pelvis ósea',
              lista: ['Formada por dos huesos coxales (ilion, isquion y pubis fusionados en el acetábulo), el sacro y el cóccix.',
                      'Articulaciones: sacroilíacas (sinoviales), sínfisis del pubis (cartilaginosa) y sacrococcígea.',
                      'Estrecho superior (línea terminal: promontorio, líneas arcuatas, borde del pubis) separa la pelvis mayor (falsa) de la menor (verdadera).',
                      'Estrecho inferior: cóccix, tuberosidades isquiáticas y arco del pubis.'] },
            { titulo: 'Pelvis femenina vs. masculina',
              tabla: { columnas: ['Rasgo', 'Femenina', 'Masculina'],
                       filas: [['Forma general', 'Ancha y poco profunda', 'Estrecha y profunda'],
                               ['Estrecho superior', 'Ovalado', 'En forma de corazón'],
                               ['Ángulo subpúbico', 'Amplio (≈ 90° o más)', 'Agudo (≈ 70°)'],
                               ['Agujero obturador', 'Ovalado', 'Redondeado']] } },
            { titulo: 'Diámetros de la pelvis (obstétricos)',
              lista: ['Estrecho superior: conjugado verdadero (promontorio–borde superior del pubis, ≈ 11 cm); conjugado obstétrico (promontorio–cara posterior del pubis, el más corto, ≈ 10,5 cm); transverso (≈ 13 cm) y oblicuos (≈ 12 cm).',
                      'Conjugado diagonal (promontorio–borde inferior del pubis, ≈ 12,5 cm): el único que se mide en el tacto vaginal; al restarle 1,5 cm se estima el obstétrico.',
                      'Estrecho medio: diámetro interespinoso (entre espinas isquiáticas, ≈ 10 cm), el más estrecho de la pelvis.',
                      'Estrecho inferior: diámetro intertuberoso (≈ 11 cm).'],
              nota: 'Las líneas rojas de la lámina del taller representan los diámetros anteroposterior, transverso y oblicuos del estrecho superior.' },
            { titulo: 'Piso pélvico',
              texto: 'El diafragma pélvico (músculos elevador del ano y coccígeo) sostiene las vísceras pélvicas. Lo atraviesan la uretra, la vagina y el recto. Se debilita con los partos y la edad.' },
            { titulo: 'Vejiga urinaria',
              lista: ['Órgano muscular hueco detrás de la sínfisis del pubis. Vacía está en la pelvis; llena asciende hacia el abdomen y se palpa sobre el pubis.',
                      'Capacidad aproximada 400–600 mL; el deseo de orinar aparece hacia los 150–300 mL.',
                      'Pared con músculo detrusor. Trígono vesical: triángulo liso entre los dos orificios de los uréteres y el orificio uretral interno.',
                      'Relaciones: en el hombre, el recto por detrás; en la mujer, el útero y la vagina.'] },
            { titulo: 'Uretra',
              tabla: { columnas: ['Característica', 'Femenina', 'Masculina'],
                       filas: [['Longitud', '≈ 4 cm', '≈ 18–20 cm'],
                               ['Porciones', 'Una sola, recta', 'Prostática, membranosa y esponjosa (peneana)'],
                               ['Función', 'Sólo urinaria', 'Urinaria y reproductiva (conduce el semen)'],
                               ['Desembocadura', 'Vestíbulo, por delante del orificio vaginal', 'Meato en el glande']] } }
        ],
        figuras: [
            { src: R + 'lamina-pelvis.jpg', alt: 'Pelvis ósea con diámetros del estrecho superior', pie: 'Pelvis ósea: las líneas rojas marcan los diámetros del estrecho superior.', fuente: F_TAL },
            { src: R + 'guia-pelvis-femenina-sagital.jpg', alt: 'Corte sagital de pelvis femenina con vejiga', pie: 'Vejiga, útero y recto en la pelvis femenina.', fuente: F_GUIA },
            { src: R + 'guia-pelvis-masculina-sagital-2.jpg', alt: 'Corte sagital de pelvis masculina', pie: 'Vejiga, próstata y uretra en la pelvis masculina.', fuente: F_GUIA }
        ],
        enfermeria: [
            'La uretra femenina corta explica que las infecciones urinarias sean más frecuentes en la mujer; la higiene de adelante hacia atrás es parte de la educación.',
            'Para el sondaje vesical masculino se sostiene el pene a 90° del cuerpo para rectificar la uretra; en la mujer se identifica el meato por delante del orificio vaginal.',
            'La vejiga distendida (globo vesical) se palpa y percute por encima del pubis.',
            'Los diámetros pélvicos se valoran en el control prenatal para anticipar dificultades en el parto.'
        ],
        errores: ['Pensar que la vejiga siempre está en el abdomen: vacía está detrás del pubis.', 'Confundir el conjugado diagonal (medible) con el obstétrico (estimado).'],
        loQueDebesSaber: ['Huesos y articulaciones de la pelvis.', 'Estrechos y diámetros pélvicos.', 'Diferencias de la pelvis femenina y masculina.', 'Vejiga: ubicación, trígono y capacidad.', 'Diferencias entre uretra femenina y masculina.'],
        laminas: [
            { id: 'rp-pelvis', src: R + 'lamina-pelvis.jpg', titulo: 'Pelvis ósea (2, 3, 4 y 6)', fuente: F_TAL + '. Los números 1 y 5 se revisan con la docente.',
              marcas: [{ n: '2', r: 'Cresta ilíaca' }, { n: '3', r: 'Agujero obturador' }, { n: '4', r: 'Sínfisis del pubis' }, { n: '6', r: 'Espina isquiática' }],
              distractores: ['Promontorio', 'Acetábulo'] }
        ],
        minicaso: {
            situacion: 'Un señor de 72 años no ha orinado en 10 horas después de una cirugía. Está inquieto y refiere dolor sobre el pubis.',
            preguntas: ['¿Dónde palparías el globo vesical?', '¿Qué porciones de la uretra masculina atraviesa una sonda vesical?', '¿Qué estructura que rodea la uretra suele crecer con la edad y dificultar el paso?']
        },
        fuente: 'Taller Genital femenino (A. Murcia); Guías de estudio Genital y Sistema urinario (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- GENITAL MASCULINO ---------------- */
    CE.contenido('genital-masculino', {
        revisado: false,
        prerrequisitos: ['Pared abdominal: conducto inguinal.', 'Uretra masculina.'],
        ideaPrincipal: 'Los espermatozoides se forman en los testículos, maduran en el epidídimo y viajan por el conducto deferente hasta la uretra, recibiendo en el camino las secreciones de las vesículas seminales, la próstata y las glándulas bulbouretrales, que forman el semen.',
        secciones: [
            { titulo: 'Órganos internos',
              tabla: { columnas: ['Órgano', 'Ubicación', 'Función'],
                       filas: [['Testículos', 'En el escroto, fuera del abdomen (temperatura más baja)', 'Producen espermatozoides (túbulos seminíferos) y testosterona (células de Leydig)'],
                               ['Epidídimo', 'Sobre el borde posterior del testículo: cabeza, cuerpo y cola', 'Almacena y madura los espermatozoides'],
                               ['Conducto deferente', 'Sube por el cordón espermático, atraviesa el conducto inguinal, cruza sobre el uréter y llega detrás de la vejiga', 'Transporta los espermatozoides'],
                               ['Vesículas seminales', 'Detrás de la vejiga; su conducto se une al deferente formando el conducto eyaculador', 'Producen la mayor parte del líquido seminal (rico en fructosa)'],
                               ['Próstata', 'Debajo de la vejiga, rodeando la uretra prostática; delante del recto', 'Secreción que forma parte del semen'],
                               ['Glándulas bulbouretrales (de Cowper)', 'A los lados de la uretra membranosa', 'Secreción lubricante previa a la eyaculación']] } },
            { titulo: 'Recorrido de los espermatozoides',
              texto: 'Túbulos seminíferos → epidídimo → conducto deferente → conducto eyaculador (atraviesa la próstata) → uretra prostática → uretra membranosa → uretra esponjosa → meato uretral.' },
            { titulo: 'Genitales externos',
              lista: ['Escroto: bolsa de piel y músculo dartos que aloja los testículos y regula su temperatura.',
                      'Pene: raíz, cuerpo y glande. Formado por dos cuerpos cavernosos y un cuerpo esponjoso (que contiene la uretra y forma el glande). El prepucio cubre el glande.',
                      'Cordón espermático: conducto deferente, arteria testicular, plexo venoso pampiniforme, nervios y linfáticos; pasa por el conducto inguinal.'] },
            { titulo: 'Irrigación',
              texto: 'Arteria testicular, rama directa de la aorta abdominal (por el origen embriológico del testículo en la pared posterior del abdomen). Las venas testiculares forman el plexo pampiniforme; la izquierda drena en la vena renal izquierda y la derecha en la vena cava inferior.' }
        ],
        figuras: [
            { src: R + 'guia-pelvis-masculina-sagital.jpg', alt: 'Corte sagital de pelvis masculina rotulado', pie: 'Conducto deferente, vejiga, próstata, vesículas seminales, testículo, epidídimo.', fuente: F_GUIA },
            { src: R + 'guia-pelvis-masculina-sagital-2.jpg', alt: 'Corte sagital de pelvis masculina con glándulas rotuladas', pie: 'Vejiga, pubis, próstata, recto, vesículas seminales y glándulas bulbouretrales.', fuente: F_GUIA }
        ],
        enfermeria: [
            'Como la próstata está delante del recto, se palpa en el tacto rectal: parte de la tamización del cáncer de próstata.',
            'El crecimiento prostático benigno comprime la uretra prostática y dificulta orinar: es causa frecuente de retención urinaria en adultos mayores.',
            'Enseñar el autoexamen testicular (masa dura e indolora) es educación para la salud en hombres jóvenes.',
            'Al instalar una sonda vesical en el hombre, la resistencia a nivel de la próstata no se debe forzar.'
        ],
        errores: ['Pensar que los espermatozoides se forman en el epidídimo: se forman en el testículo y maduran en el epidídimo.', 'Creer que la mayor parte del semen viene de la próstata: la mayor parte la producen las vesículas seminales.'],
        loQueDebesSaber: ['Órganos internos masculinos con su función.', 'Recorrido de los espermatozoides.', 'Estructura del pene.', 'Contenido del cordón espermático.'],
        minicaso: {
            situacion: 'Un hombre de 68 años consulta porque orina con chorro débil, se levanta varias veces en la noche y siente que no vacía la vejiga.',
            preguntas: ['¿Qué glándula rodea la primera porción de la uretra?', '¿Cómo se explora esa glándula y por qué es posible?', '¿Qué complicación urinaria vigilarías?']
        },
        fuente: 'Guía de estudio Genital masculino (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'rp-01', tema: 'genital-femenino', subtema: 'Órganos internos', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las partes de la trompa uterina desde el ovario hacia el útero.', orden: ['Infundíbulo (fimbrias)', 'Ampolla', 'Istmo', 'Porción uterina'],
          explicacion: 'La fecundación ocurre en la ampolla.' },
        { id: 'rp-02', tema: 'genital-femenino', subtema: 'Órganos internos', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las capas de la pared uterina de interna a externa.', orden: ['Endometrio', 'Miometrio', 'Perimetrio'],
          explicacion: 'El endometrio es el que se descama en la menstruación.' },
        { id: 'rp-03', tema: 'genital-femenino', subtema: 'Órganos internos', tipo: 'multiple', revisado: false,
          enunciado: 'La posición normal del útero es:', opciones: ['Retroversión y retroflexión', 'Anteversión y anteflexión', 'Vertical', 'Retroversión y anteflexión'], correcta: 1,
          explicacion: 'Inclinado y doblado hacia adelante, sobre la vejiga.' },
        { id: 'rp-04', tema: 'genital-femenino', subtema: 'Órganos externos', tipo: 'vf', revisado: false,
          enunciado: 'El orificio uretral externo está por delante del orificio vaginal.', correcta: true,
          explicacion: 'Clave para el sondaje vesical en la mujer.' },
        { id: 'rp-05', tema: 'genital-femenino', subtema: 'Órganos internos', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuál es el punto más bajo de la cavidad peritoneal en la mujer?', opciones: ['Receso hepatorrenal', 'Fondo de saco vesicouterino', 'Fondo de saco rectouterino (Douglas)', 'Fórnix vaginal'], correcta: 2,
          explicacion: 'Allí se acumula sangre o líquido.' },
        { id: 'rp-06', tema: 'pelvis-vejiga-uretra', subtema: 'Pelvis y sus diámetros', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué diámetro pélvico se puede medir directamente en el tacto vaginal?', opciones: ['Conjugado obstétrico', 'Conjugado diagonal', 'Transverso', 'Interespinoso'], correcta: 1,
          explicacion: 'Restándole 1,5 cm se estima el conjugado obstétrico.' },
        { id: 'rp-07', tema: 'pelvis-vejiga-uretra', subtema: 'Pelvis y sus diámetros', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada rasgo con el tipo de pelvis.',
          pares: [['Ángulo subpúbico amplio', 'Femenina'], ['Estrecho superior en forma de corazón', 'Masculina'], ['Estrecho superior ovalado', 'Femenina']],
          explicacion: 'La pelvis femenina está adaptada al parto.' },
        { id: 'rp-08', tema: 'pelvis-vejiga-uretra', subtema: 'Vejiga', tipo: 'multiple', revisado: false,
          enunciado: 'El trígono vesical está limitado por:', opciones: ['Dos uréteres y la uretra', 'Pubis y recto', 'Útero y vagina', 'Dos arterias vesicales'], correcta: 0,
          explicacion: 'Orificios ureterales y orificio uretral interno.' },
        { id: 'rp-09', tema: 'pelvis-vejiga-uretra', subtema: 'Uretra', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las porciones de la uretra masculina desde la vejiga.', orden: ['Prostática', 'Membranosa', 'Esponjosa'],
          explicacion: 'La membranosa es la más estrecha y fija.' },
        { id: 'rp-10', tema: 'pelvis-vejiga-uretra', subtema: 'Uretra', tipo: 'vf', revisado: false,
          enunciado: 'La uretra femenina mide aproximadamente 4 cm.', correcta: true,
          explicacion: 'Por eso las infecciones urinarias son más frecuentes en la mujer.' },
        { id: 'rp-11', tema: 'genital-masculino', subtema: 'Órganos internos', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido de los espermatozoides.', orden: ['Túbulos seminíferos', 'Epidídimo', 'Conducto deferente', 'Conducto eyaculador', 'Uretra'],
          explicacion: 'Las vesículas seminales vierten su secreción en el conducto eyaculador.' },
        { id: 'rp-12', tema: 'genital-masculino', subtema: 'Órganos internos', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada estructura con su función.',
          pares: [['Testículo', 'Produce espermatozoides y testosterona'], ['Epidídimo', 'Madura y almacena espermatozoides'], ['Vesícula seminal', 'Produce la mayor parte del líquido seminal'], ['Próstata', 'Rodea la uretra; secreción del semen']],
          explicacion: 'Todas las glándulas contribuyen al semen.' },
        { id: 'rp-13', tema: 'genital-masculino', subtema: 'Órganos externos', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué cuerpo eréctil contiene la uretra?', opciones: ['Cuerpo cavernoso derecho', 'Cuerpo esponjoso', 'Cuerpo cavernoso izquierdo', 'Ninguno'], correcta: 1,
          explicacion: 'El cuerpo esponjoso forma también el glande.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-rp-01', tema: 'genital-femenino', revisado: false, frente: 'Partes del útero', reverso: 'Fondo, cuerpo, istmo y cuello (cérvix).' },
        { id: 'fc-rp-02', tema: 'genital-femenino', revisado: false, frente: 'Sitio de la fecundación', reverso: 'Ampolla de la trompa uterina.' },
        { id: 'fc-rp-03', tema: 'genital-femenino', revisado: false, frente: 'Anteversión vs. anteflexión', reverso: 'Anteversión: inclinación del útero hacia adelante respecto a la vagina. Anteflexión: doblez del cuerpo sobre el cuello.' },
        { id: 'fc-rp-04', tema: 'genital-femenino', revisado: false, frente: 'Ligamentos del útero', reverso: 'Ancho, redondo, cardinales y uterosacros.' },
        { id: 'fc-rp-05', tema: 'genital-femenino', revisado: false, frente: 'Estructuras de la vulva', reverso: 'Monte del pubis, labios mayores y menores, clítoris, vestíbulo con orificios uretral y vaginal, glándulas de Bartholin.' },
        { id: 'fc-rp-06', tema: 'pelvis-vejiga-uretra', revisado: false, frente: 'Huesos de la pelvis', reverso: 'Dos coxales (ilion, isquion, pubis), sacro y cóccix.' },
        { id: 'fc-rp-07', tema: 'pelvis-vejiga-uretra', revisado: false, frente: 'Conjugado obstétrico', reverso: 'Promontorio a cara posterior del pubis (≈ 10,5 cm); el más corto del estrecho superior.' },
        { id: 'fc-rp-08', tema: 'pelvis-vejiga-uretra', revisado: false, frente: 'Diámetro más estrecho de la pelvis', reverso: 'Interespinoso (entre espinas isquiáticas), ≈ 10 cm.' },
        { id: 'fc-rp-09', tema: 'pelvis-vejiga-uretra', revisado: false, frente: 'Trígono vesical', reverso: 'Área lisa entre los orificios ureterales y el orificio uretral interno.' },
        { id: 'fc-rp-10', tema: 'pelvis-vejiga-uretra', revisado: false, frente: 'Porciones de la uretra masculina', reverso: 'Prostática, membranosa y esponjosa.' },
        { id: 'fc-rp-11', tema: 'genital-masculino', revisado: false, frente: 'Recorrido del espermatozoide', reverso: 'Túbulos seminíferos → epidídimo → deferente → eyaculador → uretra.' },
        { id: 'fc-rp-12', tema: 'genital-masculino', revisado: false, frente: 'Glándulas anexas masculinas', reverso: 'Vesículas seminales, próstata y bulbouretrales.' },
        { id: 'fc-rp-13', tema: 'genital-masculino', revisado: false, frente: 'Contenido del cordón espermático', reverso: 'Conducto deferente, arteria testicular, plexo pampiniforme, nervios y linfáticos.' }
    ]);
})();
