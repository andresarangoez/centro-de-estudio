/* ============================================================
   CONTENIDO · Biología
   Elaborado a partir de: Taller 1, Taller 2 (Biomoléculas),
   Laboratorios III (La célula), IV (Pruebas de laboratorio
   clínico), V (Tipos celulares) y VI (Membranas), Taller de repaso
   del parcial final y presentaciones del curso (Ciclo celular y
   mitosis, Meiosis, DNA y RNA, Enzimas, Medio intra y extracelular,
   Sangre, Neurotransmisión). Facultad de Enfermería FUCS, 2023-2.
   Verificado contra Cooper, La célula.
   No hay plan calendario 2026-2 de Biología: confirmar temas y
   énfasis con la docente actual.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/biologia/';
    var F = 'Presentaciones de Biología, Facultad de Enfermería FUCS';
    var F_LAB = 'Guías de laboratorio de Biología, Facultad de Enfermería FUCS';
    function fig(n, alt, pie) { return { src: R + n + '.jpg', alt: alt, pie: pie || alt, fuente: F }; }

    /* ---------------- LA CÉLULA ---------------- */
    CE.contenido('bio-celula', {
        revisado: false,
        prerrequisitos: ['Ninguno: es el punto de partida de la asignatura.'],
        ideaPrincipal: 'La célula es la unidad morfológica y funcional de todo ser vivo. Hay dos grandes tipos: procariotas (sin núcleo verdadero, como las bacterias) y eucariotas (con núcleo y organelos, como las de animales, plantas, hongos y protistas).',
        secciones: [
            { titulo: 'Características de todas las células vivas',
              lista: ['Tienen membrana plasmática que las separa del medio.', 'Guardan su información genética en ADN.', 'Tienen metabolismo: obtienen y usan energía (ATP).', 'Se reproducen.',
                      'Según su número de células los organismos son unicelulares o pluricelulares; el ser humano tiene del orden de 10¹⁴ células, de unos 10 µm cada una.'] },
            { titulo: 'Procariota vs. eucariota',
              tabla: { columnas: ['Característica', 'Procariota', 'Eucariota'],
                       filas: [['Núcleo', 'No: ADN libre en el nucleoide', 'Sí, rodeado por envoltura nuclear'],
                               ['Organelos membranosos', 'No', 'Sí (mitocondrias, retículo, Golgi…)'],
                               ['ADN', 'Circular', 'Lineal, en cromosomas'],
                               ['Tamaño', 'Pequeña (1–10 µm)', 'Mayor (10–100 µm)'],
                               ['Ejemplos', 'Bacterias y arqueas', 'Células animales, vegetales, hongos, protistas']] } },
            { titulo: 'Célula animal vs. vegetal',
              tabla: { columnas: ['Estructura', 'Animal', 'Vegetal'],
                       filas: [['Pared celular', 'No', 'Sí (celulosa)'], ['Cloroplastos', 'No', 'Sí (fotosíntesis)'],
                               ['Vacuola', 'Pequeñas', 'Una grande central'], ['Centriolos', 'Sí', 'No'], ['Forma', 'Variable', 'Geométrica']] },
              nota: 'Laboratorio III: en Elodea se ven pared, citoplasma y cloroplastos; en la mucosa bucal teñida con azul de metileno, membrana, núcleo y citoplasma.' },
            { titulo: 'Organelos y su función',
              tabla: { columnas: ['Organelo', 'Función'],
                       filas: [['Núcleo', 'Guarda el ADN; allí ocurren la replicación y la transcripción'],
                               ['Ribosomas', 'Síntesis de proteínas (traducción)'],
                               ['Retículo endoplasmático rugoso', 'Tiene ribosomas: síntesis de proteínas que se exportan'],
                               ['Retículo endoplasmático liso', 'Síntesis de lípidos y esteroides, detoxificación (en el hígado), almacén de calcio'],
                               ['Aparato de Golgi', 'Modifica, clasifica y empaca proteínas; forma glucoproteínas'],
                               ['Mitocondria', 'Respiración celular y producción de ATP (fosforilación oxidativa)'],
                               ['Lisosomas', 'Digestión intracelular'],
                               ['Membrana plasmática', '"Carta de presentación" de la célula: controla lo que entra y sale']] } },
            { titulo: 'Teoría endosimbiótica',
              texto: 'Mitocondrias y cloroplastos se originaron de bacterias primitivas que fueron englobadas por otra célula y vivieron en simbiosis. Evidencias: tienen su propio ADN circular, ribosomas parecidos a los bacterianos, doble membrana y se dividen por sí mismos.' }
        ],
        figuras: [fig('cuatro-procesos', 'Célula eucariota con los procesos del núcleo al citoplasma', 'Célula eucariota: núcleo, ribosomas y organelos.'), fig('membrana-plasmatica', 'Modelo de membrana plasmática')],
        enfermeria: ['La diferencia procariota–eucariota explica por qué los antibióticos pueden atacar a las bacterias (pared, ribosomas distintos) sin dañar nuestras células.',
                     'La detoxificación de medicamentos en el retículo liso del hígado explica por qué la enfermedad hepática altera las dosis.'],
        errores: ['Pensar que las bacterias tienen núcleo.', 'Atribuir la síntesis de proteínas al núcleo: ocurre en los ribosomas.'],
        loQueDebesSaber: ['Características comunes de las células.', 'Diferencias procariota–eucariota y animal–vegetal.', 'Función de cada organelo.', 'Evidencias de la teoría endosimbiótica.'],
        minicaso: { situacion: 'Un paciente con cirrosis tiene efectos exagerados con dosis normales de un sedante.', preguntas: ['¿Qué organelo del hepatocito detoxifica medicamentos?', '¿Por qué su daño aumenta el efecto del fármaco?'] },
        fuente: 'Taller 1 y Laboratorio III (Biología FUCS); Cooper, La célula.'
    });

    /* ---------------- LABORATORIO ---------------- */
    CE.contenido('bio-laboratorio', {
        revisado: false,
        prerrequisitos: ['La célula.'],
        ideaPrincipal: 'El laboratorio exige normas de bioseguridad y el manejo correcto del microscopio, la herramienta que permite ver las células.',
        secciones: [
            { titulo: 'Bioseguridad',
              lista: ['Elementos de protección: bata, guantes, tapabocas, gorro y gafas.',
                      'Manejo de residuos según su riesgo; los cortopunzantes (lancetas, agujas) van al guardián de seguridad.',
                      'Los pictogramas indican el riesgo de cada sustancia (inflamable, corrosiva, tóxica…).'] },
            { titulo: 'El microscopio óptico compuesto',
              lista: ['Parte mecánica: base, brazo, platina, tornillos macrométrico y micrométrico, revólver.',
                      'Parte óptica: oculares, objetivos (4x, 10x, 40x, 100x), condensador, diafragma y fuente de luz.',
                      'Aumento total = aumento del ocular × aumento del objetivo (ej.: 10x × 40x = 400x).',
                      'Se enfoca siempre de menor a mayor aumento. El objetivo de 100x requiere aceite de inmersión.',
                      'La imagen se ve invertida.'] },
            { titulo: 'Coloraciones',
              lista: ['Azul de metileno: tiñe núcleos (se usa en células epiteliales y cebolla).',
                      'Coloración de Gram: gram positivas (moradas, pared gruesa de peptidoglicano, ej. Staphylococcus aureus, Streptococcus pyogenes) y gram negativas (rosadas, pared delgada, ej. Salmonella, Neisseria).',
                      'Hematoxilina–eosina: estándar para tejidos. Eosina: tiñe espermatozoides muertos. Wright: frotis de sangre.'] }
        ],
        enfermeria: ['El descarte correcto de cortopunzantes previene accidentes biológicos, un riesgo real para enfermería.', 'El Gram orienta el antibiótico inicial antes del cultivo.'],
        errores: ['Enfocar directamente con el objetivo de 100x.', 'Sumar los aumentos en vez de multiplicarlos.'],
        loQueDebesSaber: ['Elementos de protección y manejo de residuos.', 'Partes del microscopio.', 'Cálculo del aumento total.', 'Gram positivo vs. negativo.'],
        fuente: 'Laboratorios I a III (Biología FUCS).'
    });

    /* ---------------- BIOMOLÉCULAS ---------------- */
    CE.contenido('bio-biomoleculas', {
        revisado: false,
        prerrequisitos: ['La célula.'],
        ideaPrincipal: 'Las células están hechas de agua y cuatro grandes grupos de macromoléculas: carbohidratos, lípidos, proteínas y ácidos nucleicos. Cada una se forma uniendo monómeros con un tipo de enlace característico.',
        secciones: [
            { titulo: 'Agua e iones',
              lista: ['El agua es la molécula más abundante: polar, disolvente universal, regula la temperatura.',
                      'Moléculas hidrofílicas (se disuelven en agua), hidrofóbicas (la repelen) y anfipáticas (tienen ambas partes, como los fosfolípidos).',
                      'Los iones (Na⁺, K⁺, Cl⁻, Ca²⁺) se disuelven en el agua y participan en la señal nerviosa, la contracción y el equilibrio de líquidos.'] },
            { titulo: 'Las cuatro macromoléculas',
              tabla: { columnas: ['Macromolécula', 'Monómero', 'Enlace', 'Ejemplos', 'Función'],
                       filas: [['Carbohidratos', 'Monosacárido (glucosa)', 'Glucosídico', 'Glucosa, fructosa; sacarosa, lactosa, maltosa; glucógeno, almidón, celulosa', 'Energía rápida y reserva (glucógeno en hígado y músculo)'],
                               ['Lípidos', 'Ácidos grasos + glicerol', 'Éster', 'Triglicéridos, fosfolípidos, glucolípidos, colesterol', 'Reserva energética, membranas, hormonas esteroides'],
                               ['Proteínas', 'Aminoácido', 'Peptídico', 'Enzimas, hemoglobina, insulina, anticuerpos', 'Estructura, transporte, catálisis, defensa'],
                               ['Ácidos nucleicos', 'Nucleótido', 'Fosfodiéster', 'ADN y ARN', 'Información genética']] } },
            { titulo: 'Ideas clave',
              lista: ['Es más eficiente guardar energía en grasas que en carbohidratos: rinden más del doble de energía por gramo.',
                      'Si cambia el orden de los aminoácidos de una proteína, cambia su forma y con ello su función.',
                      'Lipoproteínas: transportan colesterol y triglicéridos en la sangre (LDL, "colesterol malo"; HDL, "bueno").',
                      'Hormonas proteicas: insulina, glucagón, hormona de crecimiento. Hormonas lipídicas (esteroides): cortisol, estrógenos, testosterona.'] }
        ],
        figuras: [fig('lipoproteinas', 'Metabolismo de lipoproteínas', 'Transporte de lípidos: lipoproteínas.'), fig('compartimentos-liquidos', 'Compartimentos de líquidos del cuerpo')],
        enfermeria: ['El perfil lipídico (colesterol total, LDL, HDL, triglicéridos) se toma en ayunas.', 'Las estatinas bajan el colesterol inhibiendo su síntesis en el hígado.'],
        errores: ['Confundir monómero (unidad) con polímero (cadena).', 'Pensar que todas las hormonas son proteínas.'],
        loQueDebesSaber: ['Monómero, enlace y ejemplo de cada macromolécula.', 'Moléculas polares, apolares y anfipáticas.', 'Qué son las lipoproteínas.'],
        minicaso: { situacion: 'Un paciente de 50 años tiene LDL elevado y HDL bajo.', preguntas: ['¿Qué transportan las lipoproteínas?', '¿Por qué el LDL alto aumenta el riesgo cardiovascular?'] },
        fuente: 'Taller 2 Biomoléculas (Biología FUCS); Cooper, La célula.'
    });

    /* ---------------- ENZIMAS ---------------- */
    CE.contenido('bio-enzimas', {
        revisado: false,
        prerrequisitos: ['Proteínas (biomoléculas).'],
        ideaPrincipal: 'Las enzimas son proteínas que aceleran las reacciones químicas de la célula disminuyendo la energía de activación, sin gastarse en el proceso. Son muy específicas: cada una reconoce su sustrato en su sitio activo.',
        secciones: [
            { titulo: 'Cómo funcionan',
              lista: ['Sustrato + Enzima → complejo Enzima–Sustrato → Enzima + Producto (E + S → ES → E + P).',
                      'El sustrato se une al sitio activo ("grietas" de la superficie de la enzima) por enlaces no covalentes; la enzima lo orienta y facilita la reacción.',
                      'Seis grupos: oxidorreductasas, transferasas, hidrolasas, isomerasas, liasas y ligasas.'] },
            { titulo: 'Enzimas digestivas de importancia',
              tabla: { columnas: ['Enzima', 'Actúa sobre', 'Dónde se produce'],
                       filas: [['Amilasa', 'Almidones', 'Glándulas salivales y páncreas (pH 7)'], ['Pepsina (proteasa)', 'Proteínas', 'Estómago (pH 2–3)'],
                               ['Lipasa', 'Grasas → ácidos grasos y glicerol', 'Páncreas e intestino'], ['Lactasa', 'Lactosa → glucosa + galactosa', 'Intestino; disminuye con la edad']] } },
            { titulo: 'Inhibidores, coenzimas y vitaminas',
              lista: ['Inhibidores reversibles (competitivos): ocupan temporalmente el sitio activo. Irreversibles (venenos): lo anulan de forma permanente.',
                      'Coenzimas: pequeñas moléculas orgánicas, muchas derivadas de vitaminas, que ayudan a la enzima (ej. coenzima A).',
                      '13 vitaminas. Hidrosolubles (B1, B2, B3, B6, B12, ácido pantoténico, biotina, folato y C): no se almacenan. Liposolubles (A, D, E, K): se almacenan en el tejido graso.'] }
        ],
        figuras: [fig('enzima-sustrato', 'Complejo enzima–sustrato'), fig('energia-activacion', 'Gráfica de energía de activación con y sin enzima'), fig('inhibidores-enzimaticos', 'Inhibidores enzimáticos'), fig('vitaminas', 'Clasificación de las vitaminas')],
        enfermeria: ['Enzimas en sangre como marcadores de daño: troponina y CK-MB (corazón), transaminasas (hígado), amilasa y lipasa (páncreas).', 'La intolerancia a la lactosa se explica por la disminución de lactasa.'],
        errores: ['Pensar que la enzima se consume en la reacción.', 'Creer que la vitamina D es hidrosoluble.'],
        loQueDebesSaber: ['Mecanismo E + S → ES → E + P.', 'Enzimas digestivas y su sitio.', 'Tipos de inhibidores.', 'Vitaminas hidrosolubles y liposolubles.'],
        fuente: 'Presentación Enzimas y Taller 2 (Biología FUCS).'
    });

    /* ---------------- METABOLISMO ---------------- */
    CE.contenido('bio-metabolismo', {
        revisado: false,
        prerrequisitos: ['Biomoléculas.', 'Enzimas.', 'Mitocondria (la célula).'],
        ideaPrincipal: 'El metabolismo es el conjunto de reacciones de la célula: el catabolismo rompe moléculas y libera energía (ATP); el anabolismo construye moléculas y consume energía. La glucosa se oxida en el citoplasma (glucólisis) y en la mitocondria (fosforilación oxidativa).',
        secciones: [
            { titulo: 'Rutas metabólicas del curso',
              tabla: { columnas: ['Proceso', 'Dónde', 'Reacción resumida', 'Rendimiento'],
                       filas: [['Glucólisis (anaerobia)', 'Citoplasma', 'Glucosa → 2 piruvato (o ácido láctico sin O₂)', '2 ATP'],
                               ['Fotosíntesis', 'Cloroplastos (plantas)', '6 CO₂ + 6 H₂O + luz → glucosa + 6 O₂', 'Produce glucosa'],
                               ['Metabolismo oxidativo', 'Mitocondria', 'Glucosa + 6 O₂ → 6 CO₂ + 6 H₂O', '≈ 36–38 ATP']] },
              nota: 'Después de un ejercicio intenso, cuando falta oxígeno, el músculo produce ácido láctico por glucólisis anaerobia: esa es una causa del dolor muscular.' },
            { titulo: 'Términos del metabolismo de la glucosa',
              tabla: { columnas: ['Término', 'Qué es', 'Tipo'],
                       filas: [['Glucólisis', 'Degradación de glucosa a piruvato', 'Catabólico'], ['Glucogenogénesis', 'Formación de glucógeno a partir de glucosa', 'Anabólico'],
                               ['Glucogenólisis', 'Degradación de glucógeno a glucosa', 'Catabólico'], ['Gluconeogénesis', 'Formación de glucosa a partir de moléculas no carbohidratos', 'Anabólico'],
                               ['Lipólisis', 'Degradación de grasas', 'Catabólico'], ['Lipogénesis', 'Formación de grasas', 'Anabólico']] } },
            { titulo: 'Regulación de la glucosa y diabetes',
              lista: ['Páncreas endocrino: células beta producen insulina (baja la glucosa); células alfa, glucagón (la sube); células delta, somatostatina.',
                      'Diabetes tipo 1: autoinmune, destruye las células beta; aparece en la infancia; requiere insulina.',
                      'Diabetes tipo 2: resistencia a la insulina y luego menor producción; relacionada con obesidad y estilo de vida; se maneja con dieta, ejercicio y medicamentos.',
                      'Otras: gestacional, neonatal (genética), secundarias. Complicaciones microvasculares (ojo, riñón, nervios) y macrovasculares (corazón, cerebro).'] }
        ],
        figuras: [fig('rutas-metabolicas', 'Rutas metabólicas: glucólisis, fotosíntesis, metabolismo oxidativo'), fig('diabetes-mapa', 'Mapa de clasificación de la diabetes')],
        enfermeria: ['La glucometría y la hemoglobina glicosilada (HbA1c, promedio de 3 meses) son parte del seguimiento del paciente diabético.', 'La hipoglucemia (sudoración, temblor, confusión) se trata de inmediato con carbohidratos de absorción rápida.'],
        errores: ['Pensar que la glucólisis ocurre en la mitocondria: ocurre en el citoplasma.', 'Confundir glucogenólisis (romper glucógeno) con gluconeogénesis (fabricar glucosa nueva).'],
        loQueDebesSaber: ['Catabolismo vs. anabolismo.', 'Dónde ocurre cada ruta y cuánto ATP da.', 'Hormonas del páncreas.', 'Diferencias entre diabetes tipo 1 y 2.'],
        minicaso: { situacion: 'Un joven de 14 años llega con sed intensa, orina mucho y ha perdido peso.', preguntas: ['¿Qué tipo de diabetes sospechas y por qué?', '¿Qué células del páncreas están afectadas?', '¿Qué examen de control refleja los últimos 3 meses?'] },
        fuente: 'Taller 1, Taller 2 y resumen Diabetes mellitus (Biología FUCS).'
    });

    /* ---------------- MEMBRANA ---------------- */
    CE.contenido('bio-membrana', {
        revisado: false,
        prerrequisitos: ['Lípidos y proteínas (biomoléculas).'],
        ideaPrincipal: 'La membrana plasmática es una bicapa de fosfolípidos con proteínas y carbohidratos que deja pasar sólo algunas sustancias (permeabilidad selectiva). El agua se mueve por ósmosis hacia donde hay más solutos.',
        secciones: [
            { titulo: 'Estructura (modelo de mosaico fluido)',
              lista: ['Bicapa de fosfolípidos: cabezas hidrofílicas hacia afuera, colas hidrofóbicas hacia adentro.', 'Proteínas integrales (canales, transportadores) y periféricas.',
                      'Colesterol: da estabilidad. Glucocálix (glucoproteínas y glucolípidos): reconocimiento celular, como los antígenos de grupo sanguíneo.',
                      'Funciones: regular el transporte, crear señales y permitir la adhesión entre células.'] },
            { titulo: 'Transporte',
              tabla: { columnas: ['Tipo', 'Gasta ATP', 'Sentido', 'Ejemplo'],
                       filas: [['Difusión simple', 'No', 'A favor del gradiente', 'O₂, CO₂'], ['Difusión facilitada', 'No', 'A favor, con proteína', 'Glucosa'],
                               ['Ósmosis', 'No', 'El agua va hacia más soluto', 'Agua'], ['Transporte activo', 'Sí', 'En contra del gradiente', 'Bomba Na⁺/K⁺ (saca 3 Na⁺, entra 2 K⁺)'],
                               ['Endocitosis / exocitosis', 'Sí', 'Vesículas', 'Fagocitosis, liberación de neurotransmisores']] } },
            { titulo: 'Soluciones y glóbulos rojos (Laboratorio VI)',
              tabla: { columnas: ['Solución', 'Concentración de solutos', 'Qué pasa con el eritrocito', 'Ejemplo clínico'],
                       filas: [['Isotónica', 'Igual a la célula', 'No cambia', 'Solución salina 0,9 %, lactato de Ringer'],
                               ['Hipotónica', 'Menor', 'Entra agua, se hincha y puede romperse (hemólisis)', 'Solución salina 0,45 %'],
                               ['Hipertónica', 'Mayor', 'Sale agua, se arruga (crenación)', 'Solución salina 3 %']] } },
            { titulo: 'Medio intra y extracelular',
              texto: 'Alrededor del 60 % del peso corporal es agua: dos tercios dentro de las células (líquido intracelular, rico en K⁺) y un tercio fuera (líquido extracelular: plasma e intersticio, rico en Na⁺).' }
        ],
        figuras: [fig('membrana-plasmatica', 'Modelo de membrana plasmática con proteínas, colesterol y fosfolípidos'), fig('compartimentos-liquidos', 'Compartimentos de líquidos del cuerpo')],
        enfermeria: ['La elección de líquidos endovenosos (isotónicos, hipotónicos, hipertónicos) aplica directamente la ósmosis.', 'Administrar agua destilada directo a la vena provocaría hemólisis.'],
        errores: ['Pensar que en la ósmosis se mueve el soluto: se mueve el agua.', 'Confundir hemólisis (hipotónica) con crenación (hipertónica).'],
        loQueDebesSaber: ['Componentes de la membrana.', 'Transporte pasivo vs. activo.', 'Qué pasa con la célula en cada tipo de solución.'],
        minicaso: { situacion: 'Un paciente deshidratado recibirá líquidos endovenosos.', preguntas: ['¿Qué tipo de solución no altera el volumen de los eritrocitos?', '¿Qué pasaría si se administrara una solución muy hipotónica?'] },
        fuente: 'Laboratorio VI Membranas y presentación Medio intra y extracelular (Biología FUCS).'
    });

    /* ---------------- ADN ---------------- */
    CE.contenido('bio-adn', {
        revisado: false,
        prerrequisitos: ['Ácidos nucleicos (biomoléculas).', 'Núcleo y ribosomas (la célula).'],
        ideaPrincipal: 'El ADN guarda la información genética. Según el dogma central, el ADN se copia a sí mismo (replicación), se transcribe a ARN (transcripción) y el ARN se traduce a proteína en los ribosomas (traducción).',
        secciones: [
            { titulo: 'Nucleótidos y bases',
              lista: ['Nucleótido = azúcar (pentosa) + fosfato + base nitrogenada; se unen por enlaces fosfodiéster.',
                      'Purinas: adenina (A) y guanina (G). Pirimidinas: citosina (C), timina (T, sólo ADN) y uracilo (U, sólo ARN).',
                      'Apareamiento: A–T (A–U en ARN) y G–C.'] },
            { titulo: 'ADN vs. ARN',
              tabla: { columnas: ['', 'ADN', 'ARN'],
                       filas: [['Cadenas', 'Doble hélice (bicatenario)', 'Una cadena'], ['Azúcar', 'Desoxirribosa', 'Ribosa'], ['Bases', 'A, T, C, G', 'A, U, C, G'],
                               ['Función', 'Almacenar y duplicar la información', 'Llevarla y traducirla a proteína'], ['Tipos', '—', 'Mensajero (ARNm), ribosomal (ARNr), de transferencia (ARNt)']] } },
            { titulo: 'Los tres procesos',
              tabla: { columnas: ['Proceso', 'Dónde', 'Produce', 'Clave'],
                       filas: [['Replicación', 'Núcleo (fase S)', 'Dos moléculas de ADN', 'Semiconservativa; ADN polimerasa'],
                               ['Transcripción', 'Núcleo', 'ARN mensajero', 'ARN polimerasa'],
                               ['Traducción', 'Ribosomas (citoplasma, RER)', 'Proteína', 'Codones del ARNm leídos por anticodones del ARNt']] },
              texto: 'El código genético usa tripletes (codones): cada codón codifica un aminoácido. Una proteína de 110 aminoácidos requiere, en teoría, 110 codones y 110 anticodones.' }
        ],
        figuras: [fig('dogma-central', 'Dogma central de la biología'), fig('nucleotidos', 'Estructura de nucleótidos y bases'), fig('dna-doble-helice', 'Doble hélice del ADN'), fig('replicacion-dna', 'Replicación del ADN'),
                  fig('diferencias-dna-rna', 'Tabla de diferencias entre ADN y ARN'), fig('clases-rna', 'Clases de ARN'), fig('transcripcion', 'Transcripción'), fig('traduccion-rnat', 'Traducción y ARN de transferencia'), fig('codigo-genetico', 'Código genético')],
        enfermeria: ['Muchos antivirales y quimioterapéuticos actúan bloqueando la replicación o la síntesis de ácidos nucleicos: por eso afectan células que se dividen rápido (mucosas, médula ósea, cabello).'],
        errores: ['Decir que la traducción ocurre en el núcleo.', 'Poner timina en el ARN.'],
        loQueDebesSaber: ['Partes del nucleótido y apareamiento de bases.', 'Diferencias ADN–ARN.', 'Replicación, transcripción y traducción: dónde y qué producen.', 'Codón y anticodón.'],
        fuente: 'Presentación DNA y RNA y Taller de repaso (Biología FUCS).'
    });

    /* ---------------- CICLO CELULAR ---------------- */
    CE.contenido('bio-ciclo', {
        revisado: false,
        prerrequisitos: ['ADN y replicación.'],
        ideaPrincipal: 'El ciclo celular es la secuencia por la que una célula crece, duplica su ADN y se divide en dos células hijas idénticas. Tiene una interfase larga (G1, S, G2) y una fase M corta (mitosis y citocinesis).',
        secciones: [
            { titulo: 'Interfase',
              tabla: { columnas: ['Fase', 'Qué ocurre'],
                       filas: [['G1', 'Crecimiento, transcripción de genes y síntesis de proteínas'], ['G0', 'Reposo: células que no se dividen (neuronas, músculo esquelético)'],
                               ['S', 'Síntesis (replicación) del ADN'], ['G2', 'Preparación: condensación progresiva de los futuros cromosomas']] } },
            { titulo: 'Mitosis',
              tabla: { columnas: ['Fase', 'Qué ocurre'],
                       filas: [['Profase', 'Los cromosomas se condensan; se forma el huso mitótico'], ['Prometafase', 'Se rompe la envoltura nuclear'],
                               ['Metafase', 'Los cromosomas se alinean en el centro (placa ecuatorial)'], ['Anafase', 'Se separan las cromátides hermanas hacia los polos'],
                               ['Telofase', 'Se forman dos núcleos'], ['Citocinesis', 'Se divide el citoplasma: dos células hijas diploides idénticas']] } },
            { titulo: 'Cromosomas',
              lista: ['Célula somática humana: 46 cromosomas (23 pares): 22 pares de autosomas + 1 par sexual (XX o XY). Es diploide (2n).',
                      'Cromátide: cada una de las dos copias idénticas de un cromosoma duplicado, unidas por el centrómero.',
                      'En anafase de una célula humana se cuentan 92 cromátides separándose (46 hacia cada polo).',
                      'Cariotipo: prueba que ordena y examina los cromosomas para buscar anomalías.'] },
            { titulo: 'Cáncer y muerte celular',
              lista: ['Las células cancerosas escapan a los controles del ciclo y a la apoptosis: se dividen sin límite ("inmortales") y pasan rápido por las fases S y M.',
                      'Apoptosis: muerte celular programada, ordenada. Necrosis: muerte por daño, con inflamación.',
                      'Metástasis: diseminación del cáncer a otros órganos.'] }
        ],
        figuras: [fig('ciclo-celular-fases', 'Fases del ciclo celular'), fig('ciclo-celular-esquema', 'Esquema del ciclo celular'), fig('mitosis-fases', 'Fases de la mitosis'), fig('mitosis-fotos', 'Fotografías de las fases de la mitosis'), fig('mitosis-esquema', 'Esquema de la mitosis')],
        enfermeria: ['La quimioterapia ataca células que se dividen rápido: explica la caída del cabello, las úlceras orales y la disminución de leucocitos.'],
        errores: ['Pensar que la replicación ocurre durante la mitosis: ocurre en la fase S.', 'Decir que las neuronas se dividen como las de la piel: la mayoría están en G0.'],
        loQueDebesSaber: ['Fases de la interfase y de la mitosis.', 'Número de cromosomas y cromátides.', 'Qué es G0.', 'Relación del ciclo con el cáncer.'],
        fuente: 'Presentación Ciclo celular y mitosis y Taller de repaso (Biología FUCS).'
    });

    /* ---------------- MEIOSIS ---------------- */
    CE.contenido('bio-meiosis', {
        revisado: false,
        prerrequisitos: ['Ciclo celular y mitosis.'],
        ideaPrincipal: 'La meiosis es la división que forma los gametos: con dos divisiones seguidas, una célula diploide (2n = 46) produce cuatro células haploides (n = 23) genéticamente distintas, gracias al entrecruzamiento.',
        secciones: [
            { titulo: 'Mitosis vs. meiosis',
              tabla: { columnas: ['', 'Mitosis', 'Meiosis'],
                       filas: [['Divisiones', 'Una', 'Dos (meiosis I y II)'], ['Células hijas', '2 diploides (2n)', '4 haploides (n)'],
                               ['Genéticamente', 'Idénticas a la madre', 'Distintas (entrecruzamiento)'], ['Dónde', 'Células somáticas', 'Células germinales (gónadas)'], ['Para qué', 'Crecimiento y reparación', 'Reproducción sexual']] } },
            { titulo: 'Entrecruzamiento',
              texto: 'En la profase I los cromosomas homólogos se aparean e intercambian segmentos (entrecruzamiento o crossing-over). Así cada gameto lleva una combinación única de genes.' },
            { titulo: 'Gametogénesis',
              lista: ['Espermatogénesis: cada espermatogonia origina 4 espermatozoides; continua desde la pubertad.',
                      'Ovogénesis: cada ovogonia origina 1 óvulo y cuerpos polares. Los ovocitos quedan detenidos en profase I desde antes del nacimiento hasta la ovulación.',
                      'Laboratorio V: el espermograma evalúa volumen, movilidad (grados a–d), morfología y vitalidad (con eosina, los muertos se tiñen).'] }
        ],
        figuras: [fig('meiosis-fases', 'Fases de la meiosis'), fig('meiosis-entrecruzamiento', 'Mecanismo de entrecruzamiento'), fig('gametogenesis', 'Gametogénesis masculina y femenina'), fig('mitosis-vs-meiosis', 'Comparación mitosis vs. meiosis')],
        enfermeria: ['Los errores de separación en la meiosis (no disyunción) producen alteraciones como el síndrome de Down (trisomía 21), más frecuentes con la edad materna avanzada.'],
        errores: ['Pensar que la meiosis produce células idénticas.', 'Decir que el óvulo termina la meiosis antes de nacer.'],
        loQueDebesSaber: ['Diferencias mitosis–meiosis.', 'Qué es el entrecruzamiento.', 'Espermatogénesis vs. ovogénesis.'],
        fuente: 'Presentación Meiosis, Laboratorio V (Biología FUCS).'
    });

    /* ---------------- SANGRE ---------------- */
    CE.contenido('bio-sangre', {
        revisado: false,
        prerrequisitos: ['Tipos celulares.', 'Proteínas (hemoglobina).'],
        ideaPrincipal: 'La sangre es un tejido circulante: una parte líquida (plasma) y una parte celular (eritrocitos, leucocitos y plaquetas) que se forman en la médula ósea. Es entre el 7 y el 8 % del peso corporal (unos 5–6 litros en el adulto).',
        secciones: [
            { titulo: 'Componentes',
              tabla: { columnas: ['Componente', 'Valor normal aproximado', 'Función'],
                       filas: [['Eritrocitos (glóbulos rojos)', '4,5–5,5 millones/mm³', 'Transportan O₂ con la hemoglobina; no tienen núcleo'],
                               ['Leucocitos (glóbulos blancos)', '5.000–10.000/mm³', 'Defensa'],
                               ['Plaquetas (trombocitos)', '150.000–450.000/mm³', 'Coagulación; no tienen núcleo'],
                               ['Plasma', '≈ 55 % de la sangre', 'Agua, proteínas (albúmina, fibrinógeno, inmunoglobulinas), hormonas, nutrientes']] },
              nota: 'Plasma vs. suero: el suero es el plasma sin fibrinógeno ni factores de coagulación (quedan en el coágulo).' },
            { titulo: 'Leucocitos',
              tabla: { columnas: ['Tipo', '%', 'Aumenta en'],
                       filas: [['Neutrófilos', '54–62 % (los más abundantes)', 'Infecciones bacterianas'], ['Linfocitos', '20–40 %', 'Infecciones virales; producen anticuerpos y memoria'],
                               ['Monocitos', '4–10 %', 'Se convierten en macrófagos'], ['Eosinófilos', '≈ 3 %', 'Asma, alergias y parásitos'], ['Basófilos', '0–1 %', 'Liberan histamina; su aumento sugiere enfermedad hematológica']] } },
            { titulo: 'Hematopoyesis y hemoglobina',
              lista: ['Todas las células sanguíneas vienen de una célula madre de la médula ósea; los eritrocitos y plaquetas, que no tienen núcleo, no se dividen.',
                      'La eritropoyetina, producida por el riñón cuando falta oxígeno, estimula la formación de eritrocitos.',
                      'Hemoglobina: proteína de 4 cadenas (2 alfa y 2 beta) con grupos hemo que llevan hierro y se unen al oxígeno.',
                      'Al degradarse los eritrocitos se produce bilirrubina; su acumulación causa ictericia.'] },
            { titulo: 'Coagulación',
              texto: 'Las plaquetas forman un tapón y la cascada de coagulación convierte el fibrinógeno en fibrina gracias a la trombina. La hemofilia es un déficit hereditario (ligado al cromosoma X) de los factores VIII o IX. La trombocitopenia es la disminución de plaquetas.' }
        ],
        figuras: [fig('sangre-componentes', 'Componentes de la sangre'), fig('hematopoyesis', 'Origen de las células sanguíneas'), fig('hemoglobina', 'Estructura de la hemoglobina'),
                  fig('neutrofilos', 'Neutrófilos'), fig('linfocitos', 'Linfocitos'), fig('monocitos', 'Monocitos'), fig('eosinofilos', 'Eosinófilos'), fig('basofilos', 'Basófilos')],
        enfermeria: ['El hemograma orienta: neutrofilia sugiere infección bacteriana; linfocitosis, viral; eosinofilia, alergia o parásitos.', 'La aspirina inhibe las plaquetas: está contraindicada en hemofilia y trastornos de coagulación.', 'Con trombocitopenia se evitan inyecciones intramusculares y se vigilan sangrados.'],
        errores: ['Pensar que los eritrocitos se dividen: no tienen núcleo, se forman en la médula.', 'Confundir plasma con suero.'],
        loQueDebesSaber: ['Valores normales y función de cada célula.', 'Los 5 tipos de leucocitos y cuándo aumentan.', 'Plasma vs. suero.', 'Hemoglobina, eritropoyetina y bilirrubina.'],
        minicaso: { situacion: 'Una paciente de 54 años con infección urinaria que progresó a bacteriemia tiene un hemograma alterado.', preguntas: ['¿Qué leucocito esperas aumentado?', '¿Por qué?'] },
        fuente: 'Presentación Sangre, Laboratorio V y Taller de repaso (Biología FUCS).'
    });

    /* ---------------- GRUPOS Y LABORATORIO ---------------- */
    CE.contenido('bio-grupos', {
        revisado: false,
        prerrequisitos: ['Membrana (glucoproteínas).', 'Sangre.'],
        ideaPrincipal: 'El grupo sanguíneo depende de los antígenos que tiene el eritrocito en su membrana (A, B, Rh). El plasma tiene anticuerpos contra los antígenos que la persona no tiene: por eso una transfusión incompatible destruye los glóbulos rojos.',
        secciones: [
            { titulo: 'Sistema ABO y Rh',
              tabla: { columnas: ['Grupo', 'Antígeno en el eritrocito', 'Anticuerpos en el plasma', 'Puede recibir de'],
                       filas: [['A', 'A', 'Anti-B', 'A y O'], ['B', 'B', 'Anti-A', 'B y O'], ['AB', 'A y B', 'Ninguno', 'Todos (receptor universal)'], ['O', 'Ninguno', 'Anti-A y anti-B', 'Sólo O (donante universal)']] },
              lista: ['Rh positivo: tiene el antígeno D. Rh negativo: no lo tiene y puede formar anticuerpos anti-D si se expone.',
                      'Donante universal: O negativo. Receptor universal: AB positivo.',
                      'Incompatibilidad Rh: madre Rh– con hijo Rh+; en un segundo embarazo sus anticuerpos pueden destruir los eritrocitos del bebé. Se previene con inmunoglobulina anti-D.'] },
            { titulo: 'Pruebas de laboratorio clínico (Laboratorio IV)',
              tabla: { columnas: ['Área', 'Pruebas'],
                       filas: [['Química', 'Glicemia, curva de glucosa, hemoglobina glicosilada'], ['Hematología y hemostasia', 'Hemoglobina, hematocrito, tiempo de protrombina (PT/INR), tiempo parcial de tromboplastina (PTT)'],
                               ['Perfil lipídico', 'Colesterol total, HDL, LDL, triglicéridos'], ['Gases arteriales', 'pH, PaCO₂, PaO₂, SO₂, HCO₃'],
                               ['Función hepática', 'Transaminasas, fosfatasa alcalina, bilirrubinas, GGT, albúmina'], ['Función cardíaca', 'Troponina, CK, CK-MB, LDH'],
                               ['Función renal', 'Creatinina, BUN, ácido úrico, proteinuria'], ['Endocrinología', 'TSH, T3, T4, cortisol, insulina, gonadotropina coriónica']] } }
        ],
        enfermeria: ['Antes de una transfusión se verifican grupo, Rh, pruebas cruzadas e identidad del paciente con doble chequeo; durante los primeros 15 minutos se vigila de cerca.', 'pH normal de la sangre: 7,35–7,45; por debajo es acidosis y por encima, alcalosis.'],
        errores: ['Pensar que el grupo O tiene antígenos: no tiene A ni B.', 'Confundir donante universal (O–) con receptor universal (AB+).'],
        loQueDebesSaber: ['Antígenos y anticuerpos de cada grupo.', 'Compatibilidades.', 'Incompatibilidad Rh.', 'Pruebas de laboratorio por área.'],
        minicaso: { situacion: 'Un paciente grupo A+ necesita una transfusión urgente.', preguntas: ['¿Qué grupos de glóbulos rojos puede recibir?', '¿Qué pasaría si recibe sangre B?'] },
        fuente: 'Laboratorios IV y VII y Taller de repaso (Biología FUCS).'
    });

    /* ---------------- NEUROTRANSMISIÓN ---------------- */
    CE.contenido('bio-neuro', {
        revisado: false,
        prerrequisitos: ['Membrana y transporte activo (bomba Na⁺/K⁺).', 'Generalidades del sistema nervioso (Morfología).'],
        ideaPrincipal: 'La neurona transmite información como señal eléctrica (potencial de acción) a lo largo del axón y como señal química (neurotransmisores) en la sinapsis.',
        secciones: [
            { titulo: 'Partes de la neurona',
              texto: 'Soma (cuerpo con el núcleo), dendritas (reciben señales), cono axónico (donde se origina el potencial de acción), axón (conduce la señal), vaina de mielina (aumenta la velocidad) y terminales axónicos (liberan neurotransmisores).' },
            { titulo: 'Potenciales',
              tabla: { columnas: ['Fenómeno', 'Qué ocurre'],
                       filas: [['Potencial de reposo', 'Membrana cargada negativamente por dentro (≈ −70 mV); lo mantiene la bomba Na⁺/K⁺ (saca 3 Na⁺, entra 2 K⁺, gasta ATP)'],
                               ['Umbral', 'Nivel de despolarización necesario para disparar el potencial de acción'],
                               ['Despolarización', 'Entra Na⁺: el interior se vuelve positivo'],
                               ['Repolarización', 'Sale K⁺: el potencial vuelve a ser negativo'],
                               ['Hiperpolarización', 'El potencial queda más negativo que el reposo por un momento']] } },
            { titulo: 'Sinapsis y neurotransmisores',
              lista: ['Sinapsis química: al llegar el potencial de acción entra Ca²⁺, las vesículas liberan el neurotransmisor por exocitosis y este se une a receptores postsinápticos.',
                      'Sinapsis excitatoria (acerca al umbral) o inhibitoria (aleja del umbral).',
                      'Clasificación: colinérgicos (acetilcolina); catecolaminas (adrenalina, noradrenalina, dopamina); indolaminas (serotonina, melatonina, histamina); aminoácidos (GABA, glicina, glutamato, aspartato); péptidos (endorfinas, encefalinas, oxitocina, vasopresina, sustancia P); gases y otros (óxido nítrico, CO, ATP).',
                      'Hormona vs. neurotransmisor: la hormona viaja por la sangre a distancia (endocrina); el neurotransmisor actúa localmente en la sinapsis.'] }
        ],
        figuras: [fig('neurona-partes', 'Partes de la neurona'), fig('potencial-membrana', 'Canales iónicos y potencial de membrana'), fig('sinapsis-quimica', 'Sinapsis química'), fig('sinapsis', 'Sinapsis'),
                  fig('hormona-vs-neurotransmisor', 'Tipos de señalización: hormona y neurotransmisor'), fig('neurotransmisores-clasificacion', 'Clasificación de neurotransmisores')],
        enfermeria: ['El potasio sérico alto o bajo altera el potencial de membrana y puede producir arritmias: por eso el K⁺ endovenoso se administra diluido y lento, nunca en bolo.', 'Muchos medicamentos actúan sobre neurotransmisores: antidepresivos (serotonina), antipsicóticos (dopamina), benzodiacepinas (GABA).'],
        errores: ['Pensar que en la despolarización sale sodio: entra.', 'Confundir hormona con neurotransmisor.'],
        loQueDebesSaber: ['Partes de la neurona.', 'Secuencia reposo–despolarización–repolarización–hiperpolarización.', 'Función de la bomba Na⁺/K⁺.', 'Pasos de la sinapsis química.', 'Clasificación de neurotransmisores.'],
        fuente: 'Presentación Neurotransmisión y Taller de repaso (Biología FUCS).'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'bio-01', tema: 'bio-celula', subtema: 'Célula procariota', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada característica con el tipo celular.',
          pares: [['Sin núcleo verdadero', 'Procariota'], ['ADN circular libre', 'Procariota'], ['Organelos membranosos', 'Eucariota'], ['Envoltura nuclear', 'Eucariota']],
          explicacion: 'Las bacterias son procariotas.' },
        { id: 'bio-02', tema: 'bio-celula', subtema: 'Organelos', tipo: 'multiple', revisado: false,
          enunciado: 'El organelo que clasifica, modifica y empaca las proteínas recién sintetizadas es:', opciones: ['Núcleo', 'Retículo endoplasmático rugoso', 'Aparato de Golgi', 'Ribosoma'], correcta: 2,
          explicacion: 'Pregunta del taller de repaso.' },
        { id: 'bio-03', tema: 'bio-celula', subtema: 'Organelos', tipo: 'multiple', revisado: false,
          enunciado: 'En las células hepáticas, ¿qué estructura realiza la detoxificación?', opciones: ['Retículo endoplasmático rugoso', 'Retículo endoplasmático liso', 'Membrana celular', 'Aparato de Golgi'], correcta: 1,
          explicacion: 'El REL también sintetiza lípidos y almacena calcio.' },
        { id: 'bio-04', tema: 'bio-celula', subtema: 'Teoría endosimbiótica', tipo: 'vf', revisado: false,
          enunciado: 'Las mitocondrias tienen su propio ADN circular, lo que apoya la teoría endosimbiótica.', correcta: true,
          explicacion: 'También tienen doble membrana y ribosomas parecidos a los bacterianos.' },
        { id: 'bio-05', tema: 'bio-laboratorio', subtema: 'Cálculo del aumento', tipo: 'multiple', revisado: false,
          enunciado: 'Con un ocular de 10x y un objetivo de 40x, el aumento total es:', opciones: ['50x', '400x', '40x', '4.000x'], correcta: 1,
          explicacion: 'Se multiplican: 10 × 40.' },
        { id: 'bio-06', tema: 'bio-biomoleculas', subtema: 'Proteínas', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada macromolécula con su enlace característico.',
          pares: [['Proteínas', 'Peptídico'], ['Carbohidratos', 'Glucosídico'], ['Ácidos nucleicos', 'Fosfodiéster'], ['Triglicéridos', 'Éster']],
          explicacion: 'Pregunta del taller de repaso.' },
        { id: 'bio-07', tema: 'bio-biomoleculas', subtema: 'Carbohidratos', tipo: 'multiple', revisado: false,
          enunciado: '¿Dónde se almacena principalmente el glucógeno?', opciones: ['Cerebro', 'Hígado y músculo', 'Piel', 'Riñón'], correcta: 1,
          explicacion: 'Es la reserva de glucosa del cuerpo.' },
        { id: 'bio-08', tema: 'bio-biomoleculas', subtema: 'Lípidos', tipo: 'vf', revisado: false,
          enunciado: 'Los fosfolípidos son moléculas anfipáticas.', correcta: true,
          explicacion: 'Tienen cabeza hidrofílica y colas hidrofóbicas.' },
        { id: 'bio-09', tema: 'bio-enzimas', subtema: 'Qué son las enzimas', tipo: 'multiple', revisado: false,
          enunciado: 'Las enzimas aceleran las reacciones porque:', opciones: ['Aumentan la temperatura', 'Disminuyen la energía de activación', 'Se consumen en la reacción', 'Cambian el producto final'], correcta: 1,
          explicacion: 'No se gastan y no cambian el resultado de la reacción.' },
        { id: 'bio-10', tema: 'bio-enzimas', subtema: 'Coenzimas y vitaminas', tipo: 'relacionar', revisado: false,
          enunciado: 'Clasifica cada vitamina.',
          pares: [['Vitamina C', 'Hidrosoluble'], ['Vitamina D', 'Liposoluble'], ['Vitamina B12', 'Hidrosoluble'], ['Vitamina K', 'Liposoluble']],
          explicacion: 'Liposolubles: A, D, E, K.' },
        { id: 'bio-11', tema: 'bio-metabolismo', subtema: 'Glucólisis', tipo: 'multiple', revisado: false,
          enunciado: '¿Dónde ocurre la glucólisis?', opciones: ['Mitocondria', 'Núcleo', 'Citoplasma', 'Ribosoma'], correcta: 2,
          explicacion: 'Produce piruvato, que entra a la mitocondria si hay oxígeno.' },
        { id: 'bio-12', tema: 'bio-metabolismo', subtema: 'Catabolismo y anabolismo', tipo: 'relacionar', revisado: false,
          enunciado: 'Clasifica cada proceso.',
          pares: [['Glucogenólisis', 'Catabólico'], ['Gluconeogénesis', 'Anabólico'], ['Lipólisis', 'Catabólico'], ['Glucogenogénesis', 'Anabólico']],
          explicacion: 'Catabólico: rompe. Anabólico: construye.' },
        { id: 'bio-13', tema: 'bio-metabolismo', subtema: 'Diabetes mellitus', tipo: 'multiple', revisado: false,
          enunciado: 'La diabetes tipo 1 se caracteriza por:', opciones: ['Resistencia a la insulina por obesidad', 'Destrucción autoinmune de las células beta', 'Exceso de glucagón', 'Aparición exclusiva en el embarazo'], correcta: 1,
          explicacion: 'Requiere insulina externa.' },
        { id: 'bio-14', tema: 'bio-membrana', subtema: 'Ósmosis y soluciones', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada solución con lo que le pasa al eritrocito.',
          pares: [['Hipotónica', 'Se hincha y se rompe (hemólisis)'], ['Hipertónica', 'Se arruga (crenación)'], ['Isotónica', 'No cambia']],
          explicacion: 'Laboratorio VI.' },
        { id: 'bio-15', tema: 'bio-membrana', subtema: 'Transporte activo', tipo: 'multiple', revisado: false,
          enunciado: 'La bomba sodio–potasio:', opciones: ['Es transporte pasivo', 'Saca 3 Na⁺ y entra 2 K⁺ gastando ATP', 'Mueve agua', 'Sólo existe en bacterias'], correcta: 1,
          explicacion: 'Es el ejemplo clásico de transporte activo.' },
        { id: 'bio-16', tema: 'bio-adn', subtema: 'Diferencias ADN–ARN', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada característica con el ácido nucleico.',
          pares: [['Desoxirribosa', 'ADN'], ['Uracilo', 'ARN'], ['Doble hélice', 'ADN'], ['Una sola cadena', 'ARN']],
          explicacion: 'Tres diferencias clásicas: azúcar, bases y número de cadenas.' },
        { id: 'bio-17', tema: 'bio-adn', subtema: 'Traducción y código genético', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada proceso con el lugar donde ocurre.',
          pares: [['Replicación', 'Núcleo'], ['Transcripción', 'Núcleo'], ['Traducción', 'Ribosomas']],
          explicacion: 'Pregunta del taller de repaso.' },
        { id: 'bio-18', tema: 'bio-adn', subtema: 'Replicación', tipo: 'multiple', revisado: false,
          enunciado: 'Una mutación en el ADN que luego se expresa en una proteína se originó en la:', opciones: ['Transcripción', 'Traducción', 'Replicación', 'Glicosilación'], correcta: 2,
          explicacion: 'Pregunta del taller de repaso.' },
        { id: 'bio-19', tema: 'bio-ciclo', subtema: 'Fases de la mitosis', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena las fases de la mitosis.', orden: ['Profase', 'Prometafase', 'Metafase', 'Anafase', 'Telofase'],
          explicacion: 'Al final ocurre la citocinesis.' },
        { id: 'bio-20', tema: 'bio-ciclo', subtema: 'Cromosomas y cariotipo', tipo: 'multiple', revisado: false,
          enunciado: 'En la anafase de una célula humana, ¿cuántas cromátides se pueden contar en total?', opciones: ['46', '23', '22', '92'], correcta: 3,
          explicacion: 'Las 46 duplicadas dan 92 cromátides, que se separan 46 a cada polo.' },
        { id: 'bio-21', tema: 'bio-ciclo', subtema: 'Interfase (G1, S, G2)', tipo: 'multiple', revisado: false,
          enunciado: '¿En qué fase se replica el ADN?', opciones: ['G1', 'S', 'G2', 'M'], correcta: 1,
          explicacion: 'S = síntesis.' },
        { id: 'bio-22', tema: 'bio-meiosis', subtema: 'Mitosis vs. meiosis', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada característica con el tipo de división.',
          pares: [['4 células haploides', 'Meiosis'], ['2 células idénticas', 'Mitosis'], ['Entrecruzamiento', 'Meiosis'], ['Reparación de tejidos', 'Mitosis']],
          explicacion: 'La meiosis forma gametos.' },
        { id: 'bio-23', tema: 'bio-meiosis', subtema: 'Espermatogénesis y ovogénesis', tipo: 'multiple', revisado: false,
          enunciado: '¿En qué fase se encuentran detenidos los ovocitos hasta la ovulación?', opciones: ['G0', 'Profase I', 'Metafase II', 'Telofase'], correcta: 1,
          explicacion: 'Pregunta del taller de repaso.' },
        { id: 'bio-24', tema: 'bio-sangre', subtema: 'Leucocitos', tipo: 'multiple', revisado: false,
          enunciado: 'Paciente con infección urinaria que evoluciona a bacteriemia. En el hemograma esperas aumento de:', opciones: ['Eosinófilos', 'Neutrófilos', 'Basófilos', 'Monocitos'], correcta: 1,
          explicacion: 'Los neutrófilos aumentan en infecciones bacterianas.' },
        { id: 'bio-25', tema: 'bio-sangre', subtema: 'Plaquetas y coagulación', tipo: 'multiple', revisado: false,
          enunciado: 'La aspirina inhibe las plaquetas. NO debería tomarla un paciente con:', opciones: ['Anemia', 'Bacteriemia', 'Policitemia', 'Hemofilia'], correcta: 3,
          explicacion: 'En la hemofilia ya hay riesgo de sangrado.' },
        { id: 'bio-26', tema: 'bio-sangre', subtema: 'Leucocitos', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada leucocito con la situación en que aumenta.',
          pares: [['Neutrófilos', 'Infección bacteriana'], ['Linfocitos', 'Infección viral'], ['Eosinófilos', 'Parásitos y asma']],
          explicacion: 'Útil para interpretar el hemograma.' },
        { id: 'bio-27', tema: 'bio-sangre', subtema: 'Plasma y suero', tipo: 'vf', revisado: false,
          enunciado: 'El suero es plasma sin fibrinógeno ni factores de coagulación.', correcta: true,
          explicacion: 'Esos factores quedan atrapados en el coágulo.' },
        { id: 'bio-28', tema: 'bio-grupos', subtema: 'Sistema ABO', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada concepto.',
          pares: [['Donante universal', 'O negativo'], ['Receptor universal', 'AB positivo'], ['Grupo con anticuerpos anti-A y anti-B', 'O']],
          explicacion: 'El grupo O no tiene antígenos A ni B.' },
        { id: 'bio-29', tema: 'bio-grupos', subtema: 'Pruebas de laboratorio clínico', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada prueba con el órgano que evalúa.',
          pares: [['Troponina', 'Corazón'], ['Creatinina', 'Riñón'], ['Transaminasas', 'Hígado'], ['TSH', 'Tiroides']],
          explicacion: 'Laboratorio IV.' },
        { id: 'bio-30', tema: 'bio-neuro', subtema: 'Potencial de reposo y de acción', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena los eventos del potencial de acción.', orden: ['Potencial de reposo', 'Umbral', 'Despolarización', 'Repolarización', 'Hiperpolarización'],
          explicacion: 'Entra Na⁺ en la despolarización y sale K⁺ en la repolarización.' },
        { id: 'bio-31', tema: 'bio-neuro', subtema: 'Neurotransmisores', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada neurotransmisor con su grupo.',
          pares: [['Acetilcolina', 'Colinérgico'], ['Dopamina', 'Catecolamina'], ['GABA', 'Aminoácido'], ['Endorfina', 'Péptido']],
          explicacion: 'Clasificación de la presentación de neurotransmisión.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-bio-01', tema: 'bio-celula', revisado: false, frente: 'Procariota vs. eucariota', reverso: 'Procariota: sin núcleo ni organelos membranosos, ADN circular (bacterias). Eucariota: núcleo y organelos.' },
        { id: 'fc-bio-02', tema: 'bio-celula', revisado: false, frente: 'Función del aparato de Golgi', reverso: 'Modifica, clasifica y empaca proteínas; forma glucoproteínas.' },
        { id: 'fc-bio-03', tema: 'bio-celula', revisado: false, frente: 'Retículo endoplasmático liso', reverso: 'Síntesis de lípidos y esteroides, detoxificación, almacén de calcio.' },
        { id: 'fc-bio-04', tema: 'bio-laboratorio', revisado: false, frente: 'Aumento total del microscopio', reverso: 'Ocular × objetivo (10x × 40x = 400x).' },
        { id: 'fc-bio-05', tema: 'bio-laboratorio', revisado: false, frente: 'Gram positivo vs. negativo', reverso: 'Positivo: morado, pared gruesa de peptidoglicano. Negativo: rosado, pared delgada.' },
        { id: 'fc-bio-06', tema: 'bio-biomoleculas', revisado: false, frente: 'Monómeros de las macromoléculas', reverso: 'Monosacárido, ácido graso + glicerol, aminoácido, nucleótido.' },
        { id: 'fc-bio-07', tema: 'bio-biomoleculas', revisado: false, frente: 'Molécula anfipática', reverso: 'Tiene una parte hidrofílica y otra hidrofóbica (ej. fosfolípidos).' },
        { id: 'fc-bio-08', tema: 'bio-enzimas', revisado: false, frente: 'Mecanismo enzimático', reverso: 'E + S → ES → E + P; disminuye la energía de activación.' },
        { id: 'fc-bio-09', tema: 'bio-enzimas', revisado: false, frente: 'Vitaminas liposolubles', reverso: 'A, D, E y K; se almacenan en el tejido graso.' },
        { id: 'fc-bio-10', tema: 'bio-metabolismo', revisado: false, frente: 'Rendimiento de ATP', reverso: 'Glucólisis: 2 ATP (citoplasma). Metabolismo oxidativo: ≈ 36–38 ATP (mitocondria).' },
        { id: 'fc-bio-11', tema: 'bio-metabolismo', revisado: false, frente: 'Hormonas del páncreas', reverso: 'Beta: insulina. Alfa: glucagón. Delta: somatostatina.' },
        { id: 'fc-bio-12', tema: 'bio-metabolismo', revisado: false, frente: 'Diabetes tipo 1 vs. 2', reverso: 'Tipo 1: autoinmune, sin insulina. Tipo 2: resistencia a la insulina, estilo de vida.' },
        { id: 'fc-bio-13', tema: 'bio-membrana', revisado: false, frente: 'Hemólisis y crenación', reverso: 'Hemólisis: en solución hipotónica (entra agua). Crenación: en hipertónica (sale agua).' },
        { id: 'fc-bio-14', tema: 'bio-membrana', revisado: false, frente: 'Transporte activo vs. pasivo', reverso: 'Activo: gasta ATP, contra gradiente (bomba Na⁺/K⁺). Pasivo: sin ATP, a favor (difusión, ósmosis).' },
        { id: 'fc-bio-15', tema: 'bio-adn', revisado: false, frente: 'Dogma central', reverso: 'ADN → (replicación) ADN; ADN → (transcripción) ARN → (traducción) proteína.' },
        { id: 'fc-bio-16', tema: 'bio-adn', revisado: false, frente: 'Tipos de ARN', reverso: 'Mensajero (lleva el mensaje), ribosomal (forma ribosomas), de transferencia (trae aminoácidos).' },
        { id: 'fc-bio-17', tema: 'bio-adn', revisado: false, frente: 'Codón', reverso: 'Triplete de nucleótidos del ARNm que codifica un aminoácido.' },
        { id: 'fc-bio-18', tema: 'bio-ciclo', revisado: false, frente: 'Fases de la interfase', reverso: 'G1 (crecimiento), S (replicación del ADN), G2 (preparación). G0: reposo.' },
        { id: 'fc-bio-19', tema: 'bio-ciclo', revisado: false, frente: 'Cromosomas humanos', reverso: '46 (23 pares): 22 pares de autosomas + 1 par sexual.' },
        { id: 'fc-bio-20', tema: 'bio-meiosis', revisado: false, frente: 'Resultado de la meiosis', reverso: '4 células haploides (n = 23), genéticamente distintas.' },
        { id: 'fc-bio-21', tema: 'bio-sangre', revisado: false, frente: 'Valores normales de la sangre', reverso: 'Eritrocitos 4,5–5,5 millones/mm³; leucocitos 5.000–10.000/mm³; plaquetas 150.000–450.000/mm³.' },
        { id: 'fc-bio-22', tema: 'bio-sangre', revisado: false, frente: 'Tipos de leucocitos', reverso: 'Neutrófilos, linfocitos, monocitos, eosinófilos, basófilos.' },
        { id: 'fc-bio-23', tema: 'bio-sangre', revisado: false, frente: 'Eritropoyetina', reverso: 'Hormona del riñón que estimula la producción de eritrocitos.' },
        { id: 'fc-bio-24', tema: 'bio-grupos', revisado: false, frente: 'Donante y receptor universal', reverso: 'Donante: O negativo. Receptor: AB positivo.' },
        { id: 'fc-bio-25', tema: 'bio-neuro', revisado: false, frente: 'Bomba sodio–potasio', reverso: 'Saca 3 Na⁺ y entra 2 K⁺ gastando ATP; mantiene el potencial de reposo.' },
        { id: 'fc-bio-26', tema: 'bio-neuro', revisado: false, frente: 'Despolarización', reverso: 'Entrada de Na⁺: el interior de la membrana se vuelve positivo.' }
    ]);
})();
