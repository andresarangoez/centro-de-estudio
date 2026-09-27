/* ============================================================
   DATOS · TEMAS DE ESTUDIO
   Cada tema sale de una línea del plan calendario. Los subtemas
   se copian del plan; no se agregan subtemas que no estén allí.

   CAMPOS
   id          identificador único (se usa en la URL: #/tema/<id>)
   asignatura  'morfologia' | 'biologia' | …
   unidad      id de unidad en data/calendario.js
   titulo      nombre visible
   subtemas    lista copiada del plan
   tipo        orienta la técnica recomendada:
               'terminologia' | 'generalidades' | 'proceso' | 'estructural'
   criterios   columnas de la tabla comparativa del paso 04
               (salen de lo que el plan pide para cada tema)
   contenido   material académico por paso. Mientras sea null la
               interfaz muestra [CONTENIDO ACADÉMICO PENDIENTE].

   El contenido de cada tema vive en data/contenido/*.js y se adjunta
   con CE.contenido('id-del-tema', { … }). Formato (todo opcional):
   {
       revisado: false,              // true cuando el tutor lo valida
       prerrequisitos: ['…'],
       ideaPrincipal: '…',
       explicacion: ['párrafo'],
       secciones: [{ titulo, texto, lista: [], tabla: { columnas, filas }, figura, nota }],
       figuras: [{ src: 'assets/images/…', alt: '…', pie: '…', fuente: '…' }],
       enfermeria: ['aplicación clínica'],
       errores: ['…'],
       loQueDebesSaber: ['…'],
       laminas: [{ id, src, titulo, fuente, marcas: [{ n: '1', r: 'respuesta' }], distractores: [] }],
       minicaso: { situacion: '…', preguntas: ['…'] },
       fuente: '…'
   }
   Preguntas y flashcards del mismo archivo se añaden con
   CE.agregar('preguntas', [ … ]) y CE.agregar('flashcards', [ … ]).
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

(function () {
    var ANATOMIA = ['Ubicación', 'Relaciones', 'Irrigación', 'Inervación', 'Función', 'Importancia para enfermería'];

    CE.datos.temas = [
        /* ---------- UNIDAD I · GENERALIDADES ---------- */
        { id: 'nomenclatura', asignatura: 'morfologia', unidad: 'm-u1',
          titulo: 'Nomenclatura, planos y posición anatómica',
          subtemas: ['Nomenclatura', 'Planos anatómicos', 'Posición anatómica', 'Terminología'],
          tipo: 'terminologia',
          criterios: ['Significado', 'Término opuesto', 'Ejemplo en el cuerpo'],
          contenido: null },

        { id: 'generalidades-osteo-artro-mio', asignatura: 'morfologia', unidad: 'm-u1',
          titulo: 'Generalidades de osteología, artrología y miología',
          subtemas: ['Generalidades de osteología', 'Generalidades de artrología', 'Generalidades de miología'],
          tipo: 'generalidades',
          criterios: ['¿Qué estudia?', 'Elementos que la forman', 'Clasificación', 'Función'],
          contenido: null },

        { id: 'embriologia', asignatura: 'morfologia', unidad: 'm-u1',
          titulo: 'Generalidades de embriología',
          subtemas: ['Generalidades de embriología'],
          tipo: 'proceso',
          criterios: ['Momento', '¿Qué ocurre?', '¿Qué se forma?'],
          contenido: null },

        { id: 'columna', asignatura: 'morfologia', unidad: 'm-u1',
          titulo: 'Columna vertebral',
          subtemas: ['Región cervical', 'Región torácica', 'Región lumbar', 'Región coccígea'],
          tipo: 'estructural',
          criterios: ['Número de vértebras', 'Rasgo que la distingue', 'Relaciones', 'Importancia para enfermería'],
          contenido: null },

        { id: 'craneo', asignatura: 'morfologia', unidad: 'm-u1',
          titulo: 'Cráneo: endocráneo y exocráneo',
          subtemas: ['Endocráneo', 'Exocráneo'],
          tipo: 'estructural',
          criterios: ['Huesos que participan', 'Estructuras que se observan', 'Qué pasa por allí', 'Relaciones'],
          contenido: null },

        /* ---------- UNIDAD II · SISTEMA NERVIOSO ---------- */
        { id: 'sistema-nervioso', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Generalidades del sistema nervioso',
          subtemas: ['Generalidades del sistema nervioso'],
          tipo: 'generalidades',
          criterios: ['Componentes', 'Ubicación', 'Función'],
          contenido: null },

        { id: 'tallo-cerebral', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Tallo cerebral',
          subtemas: ['Tallo cerebral'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'cerebelo', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Cerebelo',
          subtemas: ['Cerebelo'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'pares-craneanos', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Pares craneanos: función y valoración para enfermería',
          subtemas: ['Función de los pares craneanos', 'Valoración para enfermería'],
          tipo: 'estructural',
          criterios: ['Nombre', 'Sensitivo, motor o mixto', 'Función', '¿Cómo lo valoro?'],
          contenido: null },

        { id: 'cerebro', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Cerebro: configuración externa e interna',
          subtemas: ['Configuración externa', 'Configuración interna'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'ojo-oido', asignatura: 'morfologia', unidad: 'm-u2',
          titulo: 'Ojo y oído: estructuras y función',
          subtemas: ['Ojo: estructuras y función', 'Oído: estructuras y función'],
          tipo: 'estructural',
          criterios: ['Estructuras', 'Función', 'Relaciones', 'Importancia para enfermería'],
          contenido: null },

        /* ---------- UNIDAD III · CARA Y CUELLO ---------- */
        { id: 'cara', asignatura: 'morfologia', unidad: 'm-u3',
          titulo: 'Cara',
          subtemas: ['Estructuras', 'Miología', 'Inervación', 'Irrigación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'cuello', asignatura: 'morfologia', unidad: 'm-u3',
          titulo: 'Cuello',
          subtemas: ['Estructuras según los triángulos del cuello', 'Inervación', 'Irrigación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'laringe-faringe', asignatura: 'morfologia', unidad: 'm-u3',
          titulo: 'Laringe y faringe',
          subtemas: ['Laringe: cartílagos y membranas', 'Laringe: irrigación e inervación',
                     'Faringe: estructuras', 'Faringe: irrigación e inervación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        /* ---------- UNIDAD IV · TÓRAX ---------- */
        { id: 'pared-toracica', asignatura: 'morfologia', unidad: 'm-u4',
          titulo: 'Pared torácica y glándula mamaria',
          subtemas: ['Reja costal (irrigación e inervación)', 'Esternón', 'Músculos intercostales', 'Glándula mamaria'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'via-aerea-pulmon', asignatura: 'morfologia', unidad: 'm-u4',
          titulo: 'Tráquea, bronquios, pulmón y pleura',
          subtemas: ['Tráquea', 'Bronquios', 'Pulmón', 'Pleura'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'corazon', asignatura: 'morfologia', unidad: 'm-u4',
          titulo: 'Corazón: configuración interna y externa',
          subtemas: ['Configuración externa', 'Configuración interna'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        /* ---------- UNIDAD V · ABDOMEN ---------- */
        { id: 'peritoneo', asignatura: 'morfologia', unidad: 'm-u5',
          titulo: 'Peritoneo',
          subtemas: ['Relaciones', 'Irrigación', 'Inervación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'estomago-bazo-pancreas-higado', asignatura: 'morfologia', unidad: 'm-u5',
          titulo: 'Estómago, bazo, páncreas, hígado y vía biliar',
          subtemas: ['Estómago', 'Bazo', 'Páncreas', 'Hígado y vía biliar'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'intestino-recto', asignatura: 'morfologia', unidad: 'm-u5',
          titulo: 'Duodeno, yeyuno, íleon, colon y recto',
          subtemas: ['Duodeno', 'Yeyuno e íleon', 'Colon', 'Recto'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'vasos-abdominales', asignatura: 'morfologia', unidad: 'm-u5',
          titulo: 'Aorta abdominal, vena cava y circulación porta',
          subtemas: ['Aorta abdominal: tronco celíaco y mesentéricas', 'Vena cava', 'Circulación porta hepática'],
          tipo: 'estructural',
          criterios: ['Origen', 'Trayecto', 'Ramas o afluentes', 'Territorio que irriga o drena'],
          contenido: null },

        { id: 'rinon-retroperitoneo', asignatura: 'morfologia', unidad: 'm-u5',
          titulo: 'Riñón, uréter y órganos retroperitoneales',
          subtemas: ['Riñón', 'Uréter', 'Órganos retroperitoneales'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        /* ---------- UNIDAD VI · SISTEMA REPRODUCTOR ---------- */
        { id: 'genital-femenino', asignatura: 'morfologia', unidad: 'm-u6',
          titulo: 'Genital femenino',
          subtemas: ['Órganos internos', 'Órganos externos'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'pelvis-vejiga-uretra', asignatura: 'morfologia', unidad: 'm-u6',
          titulo: 'Pelvis, vejiga y uretra',
          subtemas: ['Pelvis y sus diámetros', 'Vejiga', 'Uretra'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'genital-masculino', asignatura: 'morfologia', unidad: 'm-u6',
          titulo: 'Genital masculino',
          subtemas: ['Órganos internos', 'Órganos externos'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        /* ---------- UNIDAD VII · MIEMBROS ---------- */
        { id: 'miembro-superior', asignatura: 'morfologia', unidad: 'm-u7',
          titulo: 'Miembro superior',
          subtemas: ['Osteología', 'Miología', 'Inervación', 'Irrigación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null },

        { id: 'miembro-inferior', asignatura: 'morfologia', unidad: 'm-u7',
          titulo: 'Miembro inferior',
          subtemas: ['Osteología', 'Miología', 'Inervación', 'Irrigación'],
          tipo: 'estructural', criterios: ANATOMIA, contenido: null }

        /* ---------- BIOLOGÍA ----------
           Temas tomados del material del curso (sin plan calendario aún). */
        ,{ id: 'bio-celula', asignatura: 'biologia', unidad: 'b-u1',
           titulo: 'La célula: procariota y eucariota',
           subtemas: ['Características de los seres vivos', 'Célula procariota', 'Célula eucariota animal y vegetal', 'Organelos', 'Teoría endosimbiótica'],
           tipo: 'estructural', criterios: ['Qué es', 'Dónde está', 'Función', 'Ejemplo'], contenido: null }
        ,{ id: 'bio-laboratorio', asignatura: 'biologia', unidad: 'b-u1',
           titulo: 'Laboratorio: bioseguridad y microscopio',
           subtemas: ['Bioseguridad y residuos', 'Partes del microscopio', 'Cálculo del aumento', 'Coloraciones (Gram, azul de metileno)'],
           tipo: 'terminologia', criterios: ['Qué es', 'Para qué sirve', 'Precaución'], contenido: null }
        ,{ id: 'bio-biomoleculas', asignatura: 'biologia', unidad: 'b-u2',
           titulo: 'Agua y biomoléculas',
           subtemas: ['Agua e iones', 'Carbohidratos', 'Lípidos', 'Proteínas', 'Ácidos nucleicos'],
           tipo: 'generalidades', criterios: ['Monómero', 'Enlace', 'Ejemplos', 'Función en el cuerpo'], contenido: null }
        ,{ id: 'bio-enzimas', asignatura: 'biologia', unidad: 'b-u2',
           titulo: 'Enzimas y vitaminas',
           subtemas: ['Qué son las enzimas', 'Mecanismo enzima–sustrato', 'Inhibidores', 'Coenzimas y vitaminas'],
           tipo: 'proceso', criterios: ['Qué es', 'Cómo actúa', 'Ejemplo'], contenido: null }
        ,{ id: 'bio-metabolismo', asignatura: 'biologia', unidad: 'b-u2',
           titulo: 'Metabolismo energético y diabetes',
           subtemas: ['Catabolismo y anabolismo', 'Glucólisis', 'Fosforilación oxidativa', 'Regulación de la glucosa', 'Diabetes mellitus'],
           tipo: 'proceso', criterios: ['Dónde ocurre', 'Qué entra', 'Qué produce', '¿Necesita O₂?'], contenido: null }
        ,{ id: 'bio-membrana', asignatura: 'biologia', unidad: 'b-u3',
           titulo: 'Membrana plasmática y transporte',
           subtemas: ['Estructura de la membrana', 'Transporte pasivo', 'Transporte activo', 'Ósmosis y soluciones', 'Medio intra y extracelular'],
           tipo: 'proceso', criterios: ['Qué es', 'Gasta ATP', 'Ejemplo'], contenido: null }
        ,{ id: 'bio-adn', asignatura: 'biologia', unidad: 'b-u4',
           titulo: 'ADN, ARN y síntesis de proteínas',
           subtemas: ['Nucleótidos', 'Diferencias ADN–ARN', 'Replicación', 'Transcripción', 'Traducción y código genético'],
           tipo: 'proceso', criterios: ['Dónde ocurre', 'Molde', 'Producto', 'Enzima clave'], contenido: null }
        ,{ id: 'bio-ciclo', asignatura: 'biologia', unidad: 'b-u5',
           titulo: 'Ciclo celular y mitosis',
           subtemas: ['Interfase (G1, S, G2)', 'Fases de la mitosis', 'Cromosomas y cariotipo', 'Cáncer y apoptosis'],
           tipo: 'proceso', criterios: ['Qué ocurre', 'Cromosomas', 'Duración o momento'], contenido: null }
        ,{ id: 'bio-meiosis', asignatura: 'biologia', unidad: 'b-u5',
           titulo: 'Meiosis y gametogénesis',
           subtemas: ['Meiosis I y II', 'Entrecruzamiento', 'Espermatogénesis y ovogénesis', 'Mitosis vs. meiosis'],
           tipo: 'proceso', criterios: ['Número de divisiones', 'Células hijas', 'Ploidía', 'Para qué sirve'], contenido: null }
        ,{ id: 'bio-sangre', asignatura: 'biologia', unidad: 'b-u6',
           titulo: 'Sangre y células sanguíneas',
           subtemas: ['Plasma y suero', 'Hematopoyesis', 'Eritrocitos y hemoglobina', 'Leucocitos', 'Plaquetas y coagulación'],
           tipo: 'estructural', criterios: ['Valor normal', 'Función', 'Aumenta en', 'Disminuye en'], contenido: null }
        ,{ id: 'bio-grupos', asignatura: 'biologia', unidad: 'b-u6',
           titulo: 'Grupos sanguíneos y pruebas de laboratorio',
           subtemas: ['Sistema ABO', 'Factor Rh', 'Transfusiones', 'Pruebas de laboratorio clínico'],
           tipo: 'terminologia', criterios: ['Antígeno', 'Anticuerpo', 'Puede recibir de', 'Puede donar a'], contenido: null }
        ,{ id: 'bio-neuro', asignatura: 'biologia', unidad: 'b-u7',
           titulo: 'Neurona, potencial de acción y sinapsis',
           subtemas: ['Partes de la neurona', 'Potencial de reposo y de acción', 'Bomba sodio–potasio', 'Sinapsis', 'Neurotransmisores'],
           tipo: 'proceso', criterios: ['Qué es', 'Iones involucrados', 'Qué produce'], contenido: null }
    ];

    /* Los archivos de data/contenido/ usan estas dos funciones para
       adjuntar material sin tocar este archivo. */
    CE.contenido = function (id, obj) {
        var t = CE.datos.temas.find(function (x) { return x.id === id; });
        if (t) t.contenido = obj; else console.warn('Tema no encontrado:', id);
    };
    CE.agregar = function (tipo, lista) {
        CE.datos[tipo] = (CE.datos[tipo] || []).concat(lista);
    };
})();
