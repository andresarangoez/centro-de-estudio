/* ============================================================
   CONTENIDO · Morfología · Unidad V · Abdomen
   Elaborado a partir de: Guías de estudio Sistema gastrointestinal,
   Pared abdominal y Sistema urinario, y Taller Región
   retroperitoneal (Cátedra de Morfología FUCS). Ilustraciones:
   Netter / Machado. Verificado contra Moore.
   Estado: borrador para validación del tutor (revisado: false).
   ============================================================ */

(function () {
    var R = 'assets/images/morfologia/abdomen/';
    var F_GI = 'Guía de estudio Sistema gastrointestinal, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_PA = 'Guía de estudio Pared abdominal, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_UR = 'Guía de estudio Sistema urinario, Cátedra de Morfología FUCS (ilustraciones Netter)';
    var F_TA = 'Taller Región retroperitoneal, Cátedra de Morfología FUCS. Ilustraciones: F. H. Netter';

    /* ---------------- PERITONEO ---------------- */
    CE.contenido('peritoneo', {
        revisado: false,
        prerrequisitos: ['Diafragma y sus orificios (Unidad IV).', 'Planos y términos de relación.'],
        ideaPrincipal: 'El peritoneo es una membrana serosa que tapiza la cavidad abdominal (peritoneo parietal) y envuelve a muchos órganos (peritoneo visceral). Saber qué órganos están dentro o detrás de él explica su movilidad, su irrigación y el tipo de dolor que producen.',
        secciones: [
            { titulo: 'Antes del peritoneo: regiones y planos de la pared',
              texto: 'La guía divide la pared abdominal en nueve regiones con dos líneas verticales (medioclaviculares) y dos horizontales:',
              tabla: { columnas: ['', 'Derecha', 'Centro', 'Izquierda'],
                       filas: [['Superior', 'Hipocondrio derecho', 'Epigastrio', 'Hipocondrio izquierdo'],
                               ['Media', 'Flanco derecho', 'Mesogastrio (umbilical)', 'Flanco izquierdo'],
                               ['Inferior', 'Fosa ilíaca derecha', 'Hipogastrio', 'Fosa ilíaca izquierda']] },
              nota: 'Planos de la pared a nivel umbilical, de fuera hacia dentro: piel, tejido celular subcutáneo, músculos (oblicuo externo, oblicuo interno y transverso; en la línea media el recto dentro de su vaina), fascia transversalis y peritoneo.' },
            { titulo: 'Hojas y cavidad peritoneal',
              lista: ['Peritoneo parietal: tapiza la cara interna de la pared abdominal.',
                      'Peritoneo visceral: cubre la superficie de los órganos.',
                      'Cavidad peritoneal: espacio virtual entre ambas hojas con una pequeña cantidad de líquido que permite el deslizamiento de las vísceras.',
                      'Mesenterios: dobles hojas de peritoneo que unen un órgano a la pared posterior y por las que llegan sus vasos y nervios (mesenterio del intestino delgado, mesocolon transverso, mesosigmoides).'] },
            { titulo: 'Relaciones: intraperitoneales y retroperitoneales',
              tabla: { columnas: ['Posición', 'Órganos', 'Consecuencia'],
                       filas: [['Intraperitoneales (casi totalmente cubiertos)', 'Estómago, hígado, bazo, yeyuno, íleon, colon transverso, colon sigmoide', 'Son móviles: tienen mesenterio u omento.'],
                               ['Retroperitoneales', 'Riñones, suprarrenales, uréteres, aorta, vena cava inferior, casi todo el duodeno, páncreas (excepto la cola), colon ascendente y descendente, parte del recto', 'Son fijos, pegados a la pared posterior.']] } },
            { titulo: 'Omentos y espacios',
              lista: ['Omento (epiplón) mayor: cuelga como un delantal desde la curvatura mayor del estómago sobre las asas intestinales; su parte superior es el ligamento gastrocólico.',
                      'Omento menor: une la curvatura menor del estómago y el duodeno con el hígado. Su borde libre (ligamento hepatoduodenal) contiene la vena porta, la arteria hepática propia y el colédoco.',
                      'Bolsa omental: espacio detrás del estómago, comunicado con el resto de la cavidad por el foramen omental (epiploico).',
                      'El mesocolon transverso divide la cavidad en región supramesocólica (hígado, estómago, bazo) e inframesocólica (intestino delgado y colon).',
                      'Espacios declives donde se acumula líquido: receso hepatorrenal (en decúbito) y el fondo de saco rectouterino o rectovesical en la pelvis.'] },
            { titulo: 'Irrigación e inervación',
              lista: ['Peritoneo parietal: se irriga por los vasos de la pared abdominal y lo inervan nervios somáticos (intercostales inferiores y lumbares). Por eso su dolor es agudo y bien localizado.',
                      'Peritoneo visceral: comparte irrigación e inervación autónoma con el órgano que cubre. Su dolor es sordo, mal localizado y a veces referido.'] }
        ],
        figuras: [
            { src: R + 'guia-regiones-abdominales.jpg', alt: 'División topográfica de la pared abdominal en nueve regiones', pie: 'Las nueve regiones abdominales.', fuente: F_GI },
            { src: R + 'guia-pared-corte-axial.jpg', alt: 'Corte axial de la pared abdominal a nivel umbilical', pie: 'Planos de la pared abdominal a nivel umbilical.', fuente: F_PA },
            { src: R + 'guia-pared-abdominal-anterior.jpg', alt: 'Pared abdominal anterior con músculo oblicuo externo', pie: 'Pared abdominal anterior: oblicuo externo y trayecto inguinal.', fuente: F_PA },
            { src: R + 'guia-cavidad-epiplon.jpg', alt: 'Cavidad abdominal con epiplón mayor', pie: 'Al abrir la cavidad se ve el epiplón mayor cubriendo las asas.', fuente: F_GI },
            { src: R + 'guia-cavidad-intestinos.jpg', alt: 'Cavidad abdominal con epiplón levantado', pie: 'Epiplón mayor levantado: colon transverso, colon ascendente, yeyuno e íleon.', fuente: F_GI }
        ],
        enfermeria: [
            'Describir el dolor por regiones (por ejemplo, "dolor en fosa ilíaca derecha") orienta al órgano comprometido.',
            'En la peritonitis se irrita el peritoneo parietal: el paciente prefiere quedarse quieto y el abdomen se pone rígido.',
            'En la diálisis peritoneal se usa el peritoneo como membrana de intercambio: la técnica aséptica es clave para evitar peritonitis.',
            'El líquido libre (ascitis, sangre) tiende a acumularse en los recesos declives según la posición del paciente.'
        ],
        errores: ['Pensar que los riñones están dentro de la cavidad peritoneal: son retroperitoneales.',
                  'Confundir omento mayor (delantal sobre las asas) con omento menor (estómago–hígado).'],
        loQueDebesSaber: ['Las nueve regiones abdominales.', 'Peritoneo parietal vs. visceral y su tipo de dolor.', 'Órganos intra y retroperitoneales.', 'Omentos mayor y menor; qué contiene el ligamento hepatoduodenal.'],
        minicaso: {
            situacion: 'Un joven de 19 años refiere dolor que empezó alrededor del ombligo y horas después se localizó en la parte baja derecha del abdomen. Al moverse el dolor aumenta.',
            preguntas: ['¿En qué región abdominal está ahora el dolor?', '¿Por qué al inicio el dolor era difuso y luego se localizó? Relaciónalo con peritoneo visceral y parietal.', '¿Qué órgano sospecharías?']
        },
        fuente: 'Guías de estudio Sistema gastrointestinal y Pared abdominal (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- ESTÓMAGO, BAZO, PÁNCREAS, HÍGADO Y VÍA BILIAR ---------------- */
    CE.contenido('estomago-bazo-pancreas-higado', {
        revisado: false,
        prerrequisitos: ['Peritoneo: intra y retroperitoneal, omentos.', 'Regiones abdominales.'],
        ideaPrincipal: 'En la región supramesocólica están el estómago, el bazo, el páncreas y el hígado con su vía biliar. Todos reciben sangre del tronco celíaco y comparten relaciones estrechas: por eso una lesión en uno suele afectar a sus vecinos.',
        secciones: [
            { titulo: 'Estómago',
              lista: ['Ubicación: epigastrio e hipocondrio izquierdo, bajo el diafragma. Es intraperitoneal.',
                      'Partes: cardias (unión con el esófago), fondo (por encima del cardias), cuerpo, porción pilórica (antro y canal) y píloro, que se abre al duodeno.',
                      'Curvatura menor (derecha, de ella sale el omento menor) y curvatura mayor (izquierda, de ella cuelga el omento mayor).',
                      'Irrigación: ramas del tronco celíaco: gástricas izquierda y derecha (curvatura menor), gastroomentales (curvatura mayor) y gástricas cortas (fondo).',
                      'Inervación: nervio vago (parasimpático: secreción y movimiento) y plexo celíaco (simpático).'] },
            { titulo: 'Bazo',
              lista: ['En el hipocondrio izquierdo, protegido por las costillas 9 a 11. Intraperitoneal.',
                      'Órgano linfoide: filtra la sangre, destruye glóbulos rojos envejecidos y participa en la inmunidad.',
                      'Irrigación: arteria esplénica (tronco celíaco). Su vena esplénica participa en la formación de la vena porta.',
                      'Es friable y muy vascularizado: en trauma abdominal izquierdo puede romperse y sangrar mucho.'] },
            { titulo: 'Páncreas',
              lista: ['Retroperitoneal (excepto la cola), detrás del estómago, cruzando la columna a nivel de L1–L2.',
                      'Partes: cabeza (dentro de la curva del duodeno), cuello, cuerpo y cola (llega al hilio del bazo).',
                      'Conducto pancreático principal: se une al colédoco en la ampolla hepatopancreática, que se abre en la papila duodenal mayor (2.ª porción del duodeno).',
                      'Doble función: exocrina (jugo pancreático con enzimas digestivas) y endocrina (insulina y glucagón de los islotes).'] },
            { titulo: 'Hígado',
              lista: ['La glándula más grande del cuerpo; ocupa hipocondrio derecho y epigastrio, bajo el diafragma.',
                      'Cara diafragmática: lóbulos derecho e izquierdo separados por el ligamento falciforme; en su borde libre, el ligamento redondo (vena umbilical obliterada).',
                      'Cara visceral: además tiene los lóbulos cuadrado y caudado, la vesícula biliar y el hilio hepático.',
                      'Hilio hepático: entran la vena porta y la arteria hepática; sale el conducto hepático.',
                      'Doble irrigación: vena porta (sangre del tubo digestivo, cerca del 75 %) y arteria hepática (sangre oxigenada). Drena por las venas hepáticas a la vena cava inferior.'] },
            { titulo: 'Vía biliar',
              lista: ['Conductos hepáticos derecho e izquierdo → conducto hepático común.',
                      'Conducto cístico (de la vesícula) + hepático común → conducto colédoco.',
                      'Colédoco + conducto pancreático → ampolla hepatopancreática → papila duodenal mayor en la 2.ª porción del duodeno, controlada por el esfínter de Oddi.',
                      'Vesícula biliar: fondo, cuerpo y cuello. Almacena y concentra la bilis producida por el hígado.'],
              figura: { src: R + 'guia-via-biliar.jpg', alt: 'Vía biliar rotulada', pie: 'Vía biliar: conducto cístico, hepático común, colédoco y 2.ª porción del duodeno.', fuente: F_GI } }
        ],
        figuras: [
            { src: R + 'guia-region-supramesocolica.jpg', alt: 'Región supramesocólica rotulada', pie: 'Región supramesocólica: hígado, vesícula, estómago, bazo, páncreas y colon transverso.', fuente: F_GI },
            { src: R + 'guia-higado-cara-diafragmatica.jpg', alt: 'Cara diafragmática del hígado rotulada', pie: 'Cara diafragmática del hígado: lóbulos y ligamentos falciforme y redondo.', fuente: F_GI },
            { src: R + 'guia-higado-cara-visceral.jpg', alt: 'Cara visceral del hígado rotulada', pie: 'Cara visceral: hilio hepático (colédoco, arteria hepática, vena porta) y vesícula biliar.', fuente: F_GI },
            { src: R + 'guia-tronco-celiaco.jpg', alt: 'Tronco celíaco y órganos supramesocólicos', pie: 'Tronco celíaco, arteria hepática, vena porta, estómago, bazo, páncreas y duodeno.', fuente: F_GI }
        ],
        enfermeria: [
            'El dolor de la vesícula (colecistitis) se ubica en el hipocondrio derecho y puede irradiarse al hombro derecho.',
            'La obstrucción del colédoco produce ictericia: piel y escleras amarillas, orina oscura y heces claras.',
            'Tras un trauma en el costado izquierdo, vigila signos de sangrado interno por posible ruptura del bazo.',
            'La valoración del abdomen se hace en orden: inspección, auscultación, percusión y palpación (se ausculta antes de palpar para no alterar los ruidos).'
        ],
        errores: ['Pensar que el hígado recibe toda su sangre por la arteria hepática: la mayor parte llega por la vena porta.',
                  'Confundir conducto cístico (de la vesícula) con colédoco (conducto común).',
                  'Ubicar el bazo a la derecha.'],
        loQueDebesSaber: ['Partes y curvaturas del estómago.', 'Ubicación y función del bazo.', 'Partes del páncreas y su doble función.', 'Caras, lóbulos, ligamentos e hilio del hígado.', 'Recorrido completo de la bilis hasta el duodeno.'],
        minicaso: {
            situacion: 'Una mujer de 45 años consulta por dolor en el hipocondrio derecho después de una comida grasa. Al día siguiente notas que sus escleras están amarillas.',
            preguntas: ['¿Qué órgano está en el hipocondrio derecho y almacena la bilis?', 'Si un cálculo obstruye el colédoco, ¿por qué aparece la ictericia?', '¿En qué porción del duodeno desemboca normalmente la bilis?']
        },
        fuente: 'Guía de estudio Sistema gastrointestinal (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- INTESTINO ---------------- */
    CE.contenido('intestino-recto', {
        revisado: false,
        prerrequisitos: ['Peritoneo y mesenterios.', 'Regiones abdominales.'],
        ideaPrincipal: 'El intestino delgado (duodeno, yeyuno e íleon) digiere y absorbe; el grueso (ciego, colon y recto) absorbe agua y forma las heces. Su posición respecto al peritoneo define qué partes son móviles y cuáles están fijas.',
        secciones: [
            { titulo: 'Duodeno',
              lista: ['Primera porción del intestino delgado (unos 25 cm), en forma de C alrededor de la cabeza del páncreas.',
                      'Cuatro porciones: superior (1.ª), descendente (2.ª, donde está la papila duodenal mayor), horizontal (3.ª) y ascendente (4.ª).',
                      'Casi todo es retroperitoneal. Termina en la flexura duodenoyeyunal, sostenida por el ligamento suspensorio (de Treitz).'] },
            { titulo: 'Yeyuno e íleon',
              tabla: { columnas: ['Característica', 'Yeyuno', 'Íleon'],
                       filas: [['Ubicación', 'Cuadrante superior izquierdo', 'Cuadrante inferior derecho'],
                               ['Pared y calibre', 'Más gruesa y ancha', 'Más delgada y estrecha'],
                               ['Vascularización', 'Más vascular; vasos rectos largos', 'Menos vascular; más arcadas y vasos rectos cortos'],
                               ['Grasa del mesenterio', 'Poca', 'Abundante']] },
              texto: 'Ambos son intraperitoneales y cuelgan del mesenterio. El íleon termina en la válvula ileocecal, en la fosa ilíaca derecha.' },
            { titulo: 'Colon',
              lista: ['Ciego: fondo de saco en la fosa ilíaca derecha; de él sale el apéndice vermiforme.',
                      'Colon ascendente (retroperitoneal) → flexura cólica derecha (hepática) → colon transverso (intraperitoneal, con mesocolon) → flexura cólica izquierda (esplénica) → colon descendente (retroperitoneal) → colon sigmoide (intraperitoneal, con mesosigmoides).',
                      'Rasgos que lo distinguen del intestino delgado: tenias (tres bandas musculares), haustras (saculaciones) y apéndices omentales (grasa).'] },
            { titulo: 'Recto',
              lista: ['Continúa al colon sigmoide en la pelvis y termina en el conducto anal.',
                      'Su parte inferior se dilata en la ampolla rectal, que almacena las heces.',
                      'No tiene tenias, haustras ni apéndices omentales.',
                      'Irrigación: arterias rectales superior (de la mesentérica inferior), media e inferior (ramas de la ilíaca interna).'] },
            { titulo: 'Irrigación del intestino',
              lista: ['Arteria mesentérica superior: duodeno distal, yeyuno, íleon, ciego, apéndice (arteria apendicular), colon ascendente y dos tercios del transverso.',
                      'Arteria mesentérica inferior: último tercio del transverso, colon descendente, sigmoide y parte superior del recto.'] }
        ],
        figuras: [
            { src: R + 'guia-colon.jpg', alt: 'Vista anterior del colon rotulada', pie: 'Colon: ascendente, transverso, descendente, sigmoide, válvula ileocecal, apéndice y recto.', fuente: F_GI },
            { src: R + 'guia-fosa-iliaca-derecha.jpg', alt: 'Fosa ilíaca derecha con ciego y apéndice', pie: 'Fosa ilíaca derecha: ciego, apéndice vermicular, colon ascendente e íleon.', fuente: F_GI },
            { src: R + 'guia-cavidad-intestinos.jpg', alt: 'Asas intestinales con epiplón levantado', pie: 'Colon transverso, colon ascendente, yeyuno e íleon.', fuente: F_GI },
            { src: R + 'guia-irrigacion-colon.jpg', alt: 'Irrigación del colon por mesentéricas superior e inferior', pie: 'Irrigación del colon: mesentérica superior, mesentérica inferior y arteria apendicular.', fuente: F_GI }
        ],
        enfermeria: [
            'Punto de McBurney: unión del tercio lateral con los dos tercios mediales de la línea entre la espina ilíaca anterosuperior derecha y el ombligo; allí duele la apendicitis.',
            'Una colostomía toma el nombre del segmento abocado (ascendente, transversa, descendente, sigmoidea): sus heces serán más líquidas cuanto más proximal sea.',
            'Al colocar un enema, el paciente en decúbito lateral izquierdo (Sims) facilita que el líquido siga el recorrido del recto y sigmoide.',
            'La auscultación de ruidos intestinales valora el movimiento del intestino.'
        ],
        errores: ['Llamar "colon" al intestino delgado.', 'Olvidar que el colon ascendente y el descendente son retroperitoneales y el transverso y el sigmoide no.', 'Ubicar el apéndice en la fosa ilíaca izquierda.'],
        loQueDebesSaber: ['Porciones del duodeno y dónde desemboca la bilis.', 'Diferencias entre yeyuno e íleon.', 'Segmentos del colon en orden y su relación con el peritoneo.', 'Rasgos del intestino grueso.', 'Qué irriga cada mesentérica.'],
        minicaso: {
            situacion: 'A un paciente le realizaron una colostomía en el colon sigmoide. Te pregunta por qué no tiene "diarrea" como su vecino de cama, que tiene una ileostomía.',
            preguntas: ['¿Qué parte del intestino absorbe más agua?', '¿Cómo cambian las heces a lo largo del colon?', '¿Qué arteria irriga el colon sigmoide?']
        },
        fuente: 'Guía de estudio Sistema gastrointestinal (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- VASOS ABDOMINALES ---------------- */
    CE.contenido('vasos-abdominales', {
        revisado: false,
        prerrequisitos: ['Orificios del diafragma (aorta T12, cava T8).', 'Órganos supramesocólicos e intestino.'],
        ideaPrincipal: 'La aorta abdominal lleva sangre a las vísceras por tres ramas impares (tronco celíaco, mesentérica superior e inferior) y a los riñones por ramas pares. La sangre del tubo digestivo no vuelve directo a la cava: pasa primero por el hígado a través de la vena porta.',
        secciones: [
            { titulo: 'Aorta abdominal',
              lista: ['Entra al abdomen por el hiato aórtico (T12) y se divide en las arterias ilíacas comunes a nivel de L4.',
                      'Ramas impares anteriores: tronco celíaco (T12–L1), mesentérica superior (L1) y mesentérica inferior (L3).',
                      'Ramas pares laterales: suprarrenales, renales (L1–L2) y gonadales. También frénicas inferiores y lumbares.'],
              tabla: { columnas: ['Rama', 'Ramas principales', 'Qué irriga'],
                       filas: [['Tronco celíaco', 'Gástrica izquierda, esplénica, hepática común', 'Esófago abdominal, estómago, duodeno proximal, hígado, vesícula, páncreas, bazo'],
                               ['Mesentérica superior', 'Pancreaticoduodenales, yeyunales, ileales, ileocólica (apendicular), cólicas derecha y media', 'Duodeno distal, intestino delgado, ciego, colon ascendente, 2/3 del transverso'],
                               ['Mesentérica inferior', 'Cólica izquierda, sigmoideas, rectal superior', 'Último tercio del transverso, descendente, sigmoide, recto superior']] } },
            { titulo: 'Vena cava inferior',
              lista: ['Se forma por la unión de las venas ilíacas comunes (L5), a la derecha de la aorta.',
                      'Recibe venas lumbares, renales, gonadal derecha, suprarrenal derecha y venas hepáticas.',
                      'La vena renal izquierda es más larga: cruza por delante de la aorta y recibe la gonadal y la suprarrenal izquierdas.',
                      'Atraviesa el diafragma por el centro tendinoso (T8) y termina en la aurícula derecha.'] },
            { titulo: 'Circulación porta hepática',
              lista: ['La vena porta se forma detrás del cuello del páncreas por la unión de la vena mesentérica superior y la vena esplénica (la mesentérica inferior suele drenar en la esplénica).',
                      'Lleva al hígado la sangre del tubo digestivo, el bazo, el páncreas y la vesícula, rica en nutrientes absorbidos.',
                      'En el hígado la sangre se procesa y sale por las venas hepáticas hacia la vena cava inferior.',
                      'Anastomosis portocava (esófago, recto, región umbilical): si la presión portal sube, estas venas se dilatan (várices esofágicas, "cabeza de medusa").'] }
        ],
        figuras: [
            { src: R + 'guia-tronco-celiaco.jpg', alt: 'Tronco celíaco y vena porta', pie: 'Tronco celíaco, arteria hepática y vena porta.', fuente: F_GI },
            { src: R + 'guia-irrigacion-colon.jpg', alt: 'Arterias mesentéricas', pie: 'Aorta y arterias mesentéricas superior e inferior.', fuente: F_GI },
            { src: R + 'guia-pared-posterior-urinario.jpg', alt: 'Pared posterior del abdomen con aorta y cava', pie: 'Pared posterior: aorta abdominal y vena cava inferior.', fuente: F_UR }
        ],
        enfermeria: [
            'Al palpar el abdomen de una persona delgada puede sentirse el pulso de la aorta en el epigastrio; una masa pulsátil grande sugiere aneurisma.',
            'En pacientes con cirrosis (hipertensión portal) vigila sangrado digestivo alto por várices esofágicas.',
            'La isquemia mesentérica produce dolor abdominal intenso y desproporcionado al examen.'
        ],
        errores: ['Pensar que la vena porta lleva sangre del hígado al corazón: la lleva del intestino al hígado.', 'Confundir el territorio de las mesentéricas: la superior llega hasta 2/3 del colon transverso.'],
        loQueDebesSaber: ['Ramas impares de la aorta con su nivel y territorio.', 'Formación y afluentes de la vena cava inferior.', 'Formación de la vena porta y su función.', 'Qué son las anastomosis portocava.'],
        laminas: [
            { id: 'ab-vasos', src: R + 'lamina-rinones-grandes-vasos.jpg', titulo: 'Grandes vasos del abdomen (números 28, 32, 35 y 36)', fuente: F_TA,
              marcas: [{ n: '28', r: 'Vena cava inferior' }, { n: '32', r: 'Aorta abdominal' }, { n: '35', r: 'Vena renal derecha' }, { n: '36', r: 'Arteria renal derecha' }],
              distractores: ['Tronco celíaco', 'Vena porta', 'Arteria mesentérica superior'] }
        ],
        minicaso: {
            situacion: 'Un paciente con cirrosis hepática ingresa por vómito con sangre. En el abdomen se ven venas dilatadas alrededor del ombligo.',
            preguntas: ['¿Por qué la sangre del intestino "no puede pasar" bien por el hígado?', '¿Qué venas se dilatan y por qué?', '¿Qué dos venas forman la vena porta?']
        },
        fuente: 'Guías de estudio Sistema gastrointestinal y Sistema urinario; Taller Región retroperitoneal (Cátedra de Morfología FUCS); Moore.'
    });

    /* ---------------- RIÑÓN, URÉTER Y RETROPERITONEO ---------------- */
    CE.contenido('rinon-retroperitoneo', {
        revisado: false,
        prerrequisitos: ['Peritoneo: órganos retroperitoneales.', 'Aorta abdominal y vena cava inferior.'],
        ideaPrincipal: 'Los riñones, las glándulas suprarrenales y los uréteres están detrás del peritoneo, contra la pared posterior. El riñón filtra la sangre y forma la orina, que sale por los cálices y la pelvis renal hacia el uréter y la vejiga.',
        secciones: [
            { titulo: 'Riñón: configuración externa',
              lista: ['Ubicación: retroperitoneal, a los lados de la columna entre T12 y L3. El derecho está un poco más bajo por el hígado.',
                      'Borde lateral convexo y borde medial cóncavo con el hilio renal.',
                      'Pedículo renal (de adelante hacia atrás): vena renal, arteria renal y pelvis renal.',
                      'Envolturas: cápsula fibrosa (pegada al riñón), grasa perirrenal, fascia renal y grasa pararrenal.'] },
            { titulo: 'Riñón: configuración interna',
              lista: ['Corteza renal: zona externa; se prolonga entre las pirámides formando las columnas renales.',
                      'Médula renal: pirámides renales, cuyo vértice es la papila renal.',
                      'La orina sale por la papila a un cáliz menor → cálices mayores → pelvis renal → uréter.',
                      'Nefrona: unidad funcional (corpúsculo renal con glomérulo y cápsula, túbulo contorneado proximal, asa de Henle, túbulo contorneado distal y túbulo colector). El taller pide describirla.'] },
            { titulo: 'Irrigación renal',
              texto: 'Arteria renal (rama de la aorta) → arterias segmentarias → interlobulares (entre pirámides) → arcuatas (base de las pirámides) → interlobulillares → arteriolas aferentes hacia el glomérulo. La vena renal drena a la vena cava inferior.' },
            { titulo: 'Glándulas suprarrenales',
              lista: ['Sobre el polo superior de cada riñón, dentro de la fascia renal. La derecha es piramidal y la izquierda semilunar.',
                      'Corteza: produce aldosterona, cortisol y andrógenos.',
                      'Médula: produce adrenalina y noradrenalina.'] },
            { titulo: 'Uréter',
              lista: ['Conducto muscular de 25–30 cm que lleva la orina de la pelvis renal a la vejiga, descendiendo sobre el músculo psoas.',
                      'Tres estrechamientos donde suelen detenerse los cálculos: unión pieloureteral, cruce de los vasos ilíacos al entrar a la pelvis y entrada en la vejiga.'] },
            { titulo: 'Órganos retroperitoneales',
              texto: 'Riñones, glándulas suprarrenales, uréteres, aorta abdominal, vena cava inferior, casi todo el duodeno, páncreas (excepto la cola), colon ascendente y descendente, y parte del recto.' }
        ],
        figuras: [
            { src: R + 'guia-pared-posterior-urinario.jpg', alt: 'Pared posterior del abdomen con sistema urinario rotulado', pie: 'Pared posterior: riñón, suprarrenal, uréter, vejiga, aorta y cava.', fuente: F_UR },
            { src: R + 'guia-rinon-superficie.jpg', alt: 'Superficie anterior del riñón rotulada', pie: 'Riñón: cápsula fibrosa y pedículo renal (arteria, vena y pelvis).', fuente: F_UR },
            { src: R + 'guia-rinon-interno.jpg', alt: 'Configuración interna del riñón rotulada', pie: 'Corteza, pirámides, papilas, columnas, cálices menores y mayores, pelvis.', fuente: F_UR },
            { src: R + 'guia-rinones-suprarrenales.jpg', alt: 'Riñones y glándulas suprarrenales rotulados', pie: 'Riñones y suprarrenales con aorta y vena cava inferior.', fuente: F_UR }
        ],
        enfermeria: [
            'El dolor del cálculo renal (cólico) va de la región lumbar hacia la ingle siguiendo el trayecto del uréter.',
            'La puñopercusión lumbar valora dolor renal; el ángulo costovertebral es su referencia.',
            'El balance de líquidos (ingresos y egresos) refleja la función renal: una diuresis menor de 0,5 mL/kg/h en adultos es una alerta.',
            'Al instalar una sonda vesical recuerda que la orina ya recorrió riñón, uréter y vejiga: la técnica estéril protege todo ese sistema.'
        ],
        errores: ['Pensar que la orina sale de la corteza directo al uréter: pasa por papilas, cálices y pelvis.', 'Ubicar los riñones en la parte anterior del abdomen.', 'Confundir médula suprarrenal (adrenalina) con corteza (cortisol, aldosterona).'],
        loQueDebesSaber: ['Ubicación y relaciones de los riñones.', 'Elementos del pedículo renal y su orden.', 'Configuración interna y recorrido de la orina.', 'Hormonas de la suprarrenal.', 'Estrechamientos del uréter.'],
        laminas: [
            { id: 'ab-retro', src: R + 'lamina-retroperitoneo.jpg', titulo: 'Región retroperitoneal (números 1 a 7)', fuente: F_TA,
              marcas: [{ n: '1', r: 'Vena cava inferior' }, { n: '2', r: 'Diafragma' }, { n: '3', r: 'Riñón izquierdo' }, { n: '4', r: 'Aorta abdominal' }, { n: '5', r: 'Vejiga urinaria' }, { n: '6', r: 'Recto' }, { n: '7', r: 'Glándula suprarrenal derecha' }],
              distractores: ['Uréter', 'Músculo psoas'] },
            { id: 'ab-relaciones', src: R + 'lamina-relaciones-retroperitoneo.jpg', titulo: 'Relaciones de los riñones (números 8, 12, 13 y 14)', fuente: F_TA + '. Los números 9, 10 y 11 se revisan con la docente.',
              marcas: [{ n: '8', r: 'Diafragma' }, { n: '12', r: 'Páncreas' }, { n: '13', r: 'Duodeno' }, { n: '14', r: 'Riñón derecho' }],
              distractores: ['Bazo', 'Estómago', 'Colon transverso'] },
            { id: 'ab-rinon-ext', src: R + 'lamina-rinon-externo.jpg', titulo: 'Riñón, configuración externa (números 15 a 20)', fuente: F_TA,
              marcas: [{ n: '15', r: 'Borde lateral del riñón' }, { n: '16', r: 'Cápsula fibrosa' }, { n: '17', r: 'Pedículo renal' }, { n: '18', r: 'Arteria renal' }, { n: '19', r: 'Vena renal' }, { n: '20', r: 'Uréter' }],
              distractores: ['Glándula suprarrenal', 'Grasa perirrenal'] },
            { id: 'ab-rinon-int', src: R + 'lamina-rinon-corte.jpg', titulo: 'Riñón, configuración interna (números 21 a 27)', fuente: F_TA,
              marcas: [{ n: '21', r: 'Corteza renal' }, { n: '22', r: 'Columna renal' }, { n: '23', r: 'Pirámide renal' }, { n: '24', r: 'Cáliz menor' }, { n: '25', r: 'Pelvis renal' }, { n: '26', r: 'Cálices mayores' }, { n: '27', r: 'Papila renal' }],
              distractores: ['Seno renal'] },
            { id: 'ab-grandes-vasos', src: R + 'lamina-rinones-grandes-vasos.jpg', titulo: 'Riñones y grandes vasos (números 28 a 36)', fuente: F_TA,
              marcas: [{ n: '28', r: 'Vena cava inferior' }, { n: '29', r: 'Esófago' }, { n: '30', r: 'Glándula suprarrenal izquierda' }, { n: '31', r: 'Riñón izquierdo' }, { n: '32', r: 'Aorta abdominal' }, { n: '33', r: 'Uréter derecho' }, { n: '34', r: 'Pelvis renal derecha' }, { n: '35', r: 'Vena renal derecha' }, { n: '36', r: 'Arteria renal derecha' }],
              distractores: ['Tronco celíaco'] },
            { id: 'ab-rinon-vasc', src: R + 'lamina-rinon-vascular.jpg', titulo: 'Riñón, corte con vasos (números 37 a 43)', fuente: F_TA + '. Los números 38 y 42 se revisan con la docente.',
              marcas: [{ n: '37', r: 'Pirámide renal' }, { n: '39', r: 'Cáliz menor' }, { n: '40', r: 'Uréter' }, { n: '41', r: 'Pelvis renal' }, { n: '43', r: 'Cáliz mayor' }],
              distractores: ['Arteria renal', 'Corteza renal'] }
        ],
        minicaso: {
            situacion: 'Un hombre de 35 años llega con dolor intenso en la región lumbar izquierda que se irradia a la ingle, náuseas y orina rosada.',
            preguntas: ['¿Qué estructura recorre el dolor desde la región lumbar hasta la ingle?', 'Nombra los tres sitios donde un cálculo suele detenerse.', '¿Qué registrarías en tu valoración para vigilar la función renal?']
        },
        fuente: 'Guía de estudio Sistema urinario y Taller Región retroperitoneal (Cátedra de Morfología FUCS); Moore, Anatomía con orientación clínica.'
    });

    /* ---------------- PREGUNTAS ---------------- */
    CE.agregar('preguntas', [
        { id: 'ab-01', tema: 'peritoneo', subtema: 'Relaciones', tipo: 'multiple', revisado: false,
          enunciado: '¿Cuál de estos órganos es retroperitoneal?', opciones: ['Estómago', 'Bazo', 'Riñón', 'Colon transverso'], correcta: 2,
          explicacion: 'Los riñones están detrás del peritoneo, contra la pared posterior.' },
        { id: 'ab-02', tema: 'peritoneo', subtema: 'Relaciones', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada órgano con su posición respecto al peritoneo.',
          pares: [['Colon ascendente', 'Retroperitoneal'], ['Colon transverso', 'Intraperitoneal'], ['Páncreas (cabeza y cuerpo)', 'Retroperitoneal'], ['Yeyuno', 'Intraperitoneal']],
          explicacion: 'Los segmentos con mesenterio (transverso, yeyuno) son intraperitoneales y móviles.' },
        { id: 'ab-03', tema: 'peritoneo', subtema: 'Inervación', tipo: 'multiple', revisado: false,
          enunciado: 'El dolor del peritoneo parietal es:', opciones: ['Sordo y mal localizado', 'Agudo y bien localizado', 'Siempre referido al hombro', 'Inexistente'], correcta: 1,
          explicacion: 'Está inervado por nervios somáticos de la pared, igual que la piel.' },
        { id: 'ab-04', tema: 'peritoneo', subtema: 'Relaciones', tipo: 'vf', revisado: false,
          enunciado: 'El omento mayor cuelga desde la curvatura mayor del estómago.', correcta: true,
          explicacion: 'Cubre como un delantal las asas intestinales.' },
        { id: 'ab-05', tema: 'peritoneo', subtema: 'Relaciones', tipo: 'multiple', revisado: false,
          enunciado: 'La región abdominal central superior se llama:', opciones: ['Mesogastrio', 'Hipogastrio', 'Epigastrio', 'Hipocondrio'], correcta: 2,
          explicacion: 'Epigastrio (superior), mesogastrio (medio) e hipogastrio (inferior).' },
        { id: 'ab-06', tema: 'estomago-bazo-pancreas-higado', subtema: 'Hígado y vía biliar', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido de la bilis desde el hígado hasta el duodeno.',
          orden: ['Conductos hepáticos derecho e izquierdo', 'Conducto hepático común', 'Conducto colédoco', 'Ampolla hepatopancreática', 'Papila duodenal mayor'],
          explicacion: 'El cístico se une al hepático común para formar el colédoco.' },
        { id: 'ab-07', tema: 'estomago-bazo-pancreas-higado', subtema: 'Hígado y vía biliar', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué estructuras entran o salen por el hilio hepático?', opciones: ['Venas hepáticas y cava', 'Vena porta, arteria hepática y conducto hepático', 'Arteria esplénica y vena esplénica', 'Colédoco y conducto pancreático'], correcta: 1,
          explicacion: 'Las venas hepáticas salen por la cara posterior hacia la cava, no por el hilio.' },
        { id: 'ab-08', tema: 'estomago-bazo-pancreas-higado', subtema: 'Estómago', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada parte del estómago con su descripción.',
          pares: [['Cardias', 'Unión con el esófago'], ['Fondo', 'Parte por encima del cardias'], ['Píloro', 'Salida hacia el duodeno']],
          explicacion: 'El cuerpo y el antro completan la anatomía gástrica.' },
        { id: 'ab-09', tema: 'estomago-bazo-pancreas-higado', subtema: 'Páncreas', tipo: 'vf', revisado: false,
          enunciado: 'El páncreas tiene función exocrina y endocrina.', correcta: true,
          explicacion: 'Exocrina: enzimas digestivas. Endocrina: insulina y glucagón.' },
        { id: 'ab-10', tema: 'estomago-bazo-pancreas-higado', subtema: 'Bazo', tipo: 'multiple', revisado: false,
          enunciado: '¿Dónde se ubica el bazo?', opciones: ['Hipocondrio derecho', 'Epigastrio', 'Hipocondrio izquierdo', 'Fosa ilíaca izquierda'], correcta: 2,
          explicacion: 'Protegido por las costillas 9 a 11 del lado izquierdo.' },
        { id: 'ab-11', tema: 'intestino-recto', subtema: 'Duodeno', tipo: 'multiple', revisado: false,
          enunciado: '¿En qué porción del duodeno desembocan el colédoco y el conducto pancreático?', opciones: ['Superior (1.ª)', 'Descendente (2.ª)', 'Horizontal (3.ª)', 'Ascendente (4.ª)'], correcta: 1,
          explicacion: 'Lo hacen en la papila duodenal mayor.' },
        { id: 'ab-12', tema: 'intestino-recto', subtema: 'Colon', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el intestino grueso desde el íleon hasta el ano.',
          orden: ['Ciego', 'Colon ascendente', 'Colon transverso', 'Colon descendente', 'Colon sigmoide', 'Recto'],
          explicacion: 'Las flexuras hepática y esplénica marcan los cambios de dirección.' },
        { id: 'ab-13', tema: 'intestino-recto', subtema: 'Yeyuno e íleon', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada característica con el segmento correcto.',
          pares: [['Pared gruesa y muy vascular', 'Yeyuno'], ['Mucha grasa en el mesenterio', 'Íleon'], ['Termina en la válvula ileocecal', 'Íleon']],
          explicacion: 'El yeyuno está arriba a la izquierda; el íleon abajo a la derecha.' },
        { id: 'ab-14', tema: 'intestino-recto', subtema: 'Colon', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué rasgo tiene el intestino grueso pero no el delgado?', opciones: ['Vellosidades', 'Tenias y haustras', 'Mesenterio', 'Papila mayor'], correcta: 1,
          explicacion: 'Tenias, haustras y apéndices omentales identifican al colon.' },
        { id: 'ab-15', tema: 'intestino-recto', subtema: 'Recto', tipo: 'vf', revisado: false,
          enunciado: 'El recto tiene tenias y haustras igual que el colon.', correcta: false,
          explicacion: 'En el recto las tenias se unen formando una capa continua y no hay haustras.' },
        { id: 'ab-16', tema: 'vasos-abdominales', subtema: 'Aorta abdominal: tronco celíaco y mesentéricas', tipo: 'relacionar', revisado: false,
          enunciado: 'Relaciona cada arteria con un órgano que irriga.',
          pares: [['Tronco celíaco', 'Bazo'], ['Mesentérica superior', 'Íleon'], ['Mesentérica inferior', 'Colon sigmoide']],
          explicacion: 'Celíaco: supramesocólico. Superior: intestino medio. Inferior: intestino posterior.' },
        { id: 'ab-17', tema: 'vasos-abdominales', subtema: 'Circulación porta hepática', tipo: 'multiple', revisado: false,
          enunciado: 'La vena porta se forma por la unión de:', opciones: ['Venas renales', 'Mesentérica superior y esplénica', 'Venas hepáticas', 'Ilíacas comunes'], correcta: 1,
          explicacion: 'Se forma detrás del cuello del páncreas.' },
        { id: 'ab-18', tema: 'vasos-abdominales', subtema: 'Vena cava', tipo: 'vf', revisado: false,
          enunciado: 'La vena renal izquierda es más larga que la derecha y cruza por delante de la aorta.', correcta: true,
          explicacion: 'Porque la cava está a la derecha de la aorta.' },
        { id: 'ab-19', tema: 'rinon-retroperitoneo', subtema: 'Riñón', tipo: 'ordenar', revisado: false,
          enunciado: 'Ordena el recorrido de la orina dentro del riñón.',
          orden: ['Papila renal', 'Cáliz menor', 'Cáliz mayor', 'Pelvis renal', 'Uréter'],
          explicacion: 'La orina formada en las nefronas drena por las papilas de las pirámides.' },
        { id: 'ab-20', tema: 'rinon-retroperitoneo', subtema: 'Riñón', tipo: 'multiple', revisado: false,
          enunciado: 'Orden de los elementos del pedículo renal de anterior a posterior:', opciones: ['Arteria, vena, pelvis', 'Vena, arteria, pelvis', 'Pelvis, arteria, vena', 'Vena, pelvis, arteria'], correcta: 1,
          explicacion: 'VAP: vena, arteria y pelvis.' },
        { id: 'ab-21', tema: 'rinon-retroperitoneo', subtema: 'Órganos retroperitoneales', tipo: 'multiple', revisado: false,
          enunciado: '¿Qué hormona produce la médula suprarrenal?', opciones: ['Cortisol', 'Aldosterona', 'Adrenalina', 'Insulina'], correcta: 2,
          explicacion: 'La corteza produce cortisol, aldosterona y andrógenos.' },
        { id: 'ab-22', tema: 'rinon-retroperitoneo', subtema: 'Uréter', tipo: 'abierta', revisado: false,
          enunciado: 'Nombra los tres estrechamientos del uréter y explica su importancia clínica.',
          modelo: 'Unión pieloureteral, cruce de los vasos ilíacos al entrar a la pelvis y unión ureterovesical. Son los sitios donde suelen detenerse los cálculos, causando dolor cólico y obstrucción.',
          explicacion: 'Compara con la referencia.' }
    ]);

    /* ---------------- FLASHCARDS ---------------- */
    CE.agregar('flashcards', [
        { id: 'fc-ab-01', tema: 'peritoneo', revisado: false, frente: 'Peritoneo parietal vs. visceral', reverso: 'Parietal: tapiza la pared; dolor agudo y localizado. Visceral: cubre órganos; dolor sordo y mal localizado.' },
        { id: 'fc-ab-02', tema: 'peritoneo', revisado: false, frente: 'Órganos retroperitoneales', reverso: 'Riñones, suprarrenales, uréteres, aorta, cava inferior, casi todo el duodeno, páncreas (menos la cola), colon ascendente y descendente, parte del recto.' },
        { id: 'fc-ab-03', tema: 'peritoneo', revisado: false, frente: 'Omento menor', reverso: 'Une estómago y duodeno con el hígado. Su borde libre (hepatoduodenal) lleva vena porta, arteria hepática y colédoco.' },
        { id: 'fc-ab-04', tema: 'peritoneo', revisado: false, frente: 'Nueve regiones abdominales', reverso: 'Hipocondrio D, epigastrio, hipocondrio I; flanco D, mesogastrio, flanco I; fosa ilíaca D, hipogastrio, fosa ilíaca I.' },
        { id: 'fc-ab-05', tema: 'estomago-bazo-pancreas-higado', revisado: false, frente: 'Partes del estómago', reverso: 'Cardias, fondo, cuerpo, porción pilórica (antro y canal) y píloro.' },
        { id: 'fc-ab-06', tema: 'estomago-bazo-pancreas-higado', revisado: false, frente: 'Hilio hepático', reverso: 'Vena porta, arteria hepática y conducto hepático.' },
        { id: 'fc-ab-07', tema: 'estomago-bazo-pancreas-higado', revisado: false, frente: 'Recorrido de la bilis', reverso: 'Hepáticos D e I → hepático común (+ cístico) → colédoco → ampolla hepatopancreática → papila duodenal mayor.' },
        { id: 'fc-ab-08', tema: 'estomago-bazo-pancreas-higado', revisado: false, frente: 'Doble irrigación del hígado', reverso: 'Vena porta (≈75 %, sangre del tubo digestivo) y arteria hepática (sangre oxigenada).' },
        { id: 'fc-ab-09', tema: 'estomago-bazo-pancreas-higado', revisado: false, frente: 'Partes del páncreas', reverso: 'Cabeza (en la C del duodeno), cuello, cuerpo y cola (hacia el bazo).' },
        { id: 'fc-ab-10', tema: 'intestino-recto', revisado: false, frente: 'Porciones del duodeno', reverso: 'Superior, descendente (papila mayor), horizontal y ascendente.' },
        { id: 'fc-ab-11', tema: 'intestino-recto', revisado: false, frente: 'Rasgos del intestino grueso', reverso: 'Tenias, haustras y apéndices omentales.' },
        { id: 'fc-ab-12', tema: 'intestino-recto', revisado: false, frente: 'Punto de McBurney', reverso: 'Tercio lateral de la línea espina ilíaca anterosuperior derecha–ombligo: dolor de apendicitis.' },
        { id: 'fc-ab-13', tema: 'intestino-recto', revisado: false, frente: 'Flexuras del colon', reverso: 'Derecha o hepática (ascendente–transverso) e izquierda o esplénica (transverso–descendente).' },
        { id: 'fc-ab-14', tema: 'vasos-abdominales', revisado: false, frente: 'Ramas impares de la aorta abdominal', reverso: 'Tronco celíaco (T12–L1), mesentérica superior (L1), mesentérica inferior (L3).' },
        { id: 'fc-ab-15', tema: 'vasos-abdominales', revisado: false, frente: 'Ramas del tronco celíaco', reverso: 'Gástrica izquierda, esplénica y hepática común.' },
        { id: 'fc-ab-16', tema: 'vasos-abdominales', revisado: false, frente: 'Formación de la vena porta', reverso: 'Mesentérica superior + esplénica, detrás del cuello del páncreas.' },
        { id: 'fc-ab-17', tema: 'vasos-abdominales', revisado: false, frente: 'Bifurcación de la aorta abdominal', reverso: 'A nivel de L4, en las arterias ilíacas comunes.' },
        { id: 'fc-ab-18', tema: 'rinon-retroperitoneo', revisado: false, frente: 'Pedículo renal (anterior a posterior)', reverso: 'Vena renal, arteria renal, pelvis renal (VAP).' },
        { id: 'fc-ab-19', tema: 'rinon-retroperitoneo', revisado: false, frente: 'Configuración interna del riñón', reverso: 'Corteza, columnas renales, pirámides con papilas, cálices menores y mayores, pelvis renal.' },
        { id: 'fc-ab-20', tema: 'rinon-retroperitoneo', revisado: false, frente: 'Partes de la nefrona', reverso: 'Corpúsculo renal (glomérulo + cápsula), túbulo contorneado proximal, asa de Henle, túbulo contorneado distal, túbulo colector.' },
        { id: 'fc-ab-21', tema: 'rinon-retroperitoneo', revisado: false, frente: 'Hormonas suprarrenales', reverso: 'Corteza: aldosterona, cortisol, andrógenos. Médula: adrenalina y noradrenalina.' },
        { id: 'fc-ab-22', tema: 'rinon-retroperitoneo', revisado: false, frente: 'Estrechamientos del uréter', reverso: 'Unión pieloureteral, cruce de vasos ilíacos, unión ureterovesical.' }
    ]);
})();
