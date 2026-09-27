/* ============================================================
   DATOS · BANCO DE PREGUNTAS
   Separado de la interfaz: agregar preguntas NO requiere tocar
   ningún otro archivo.

   CAMPOS COMUNES
   id, tema (id de data/temas.js), subtema (texto exacto del plan,
   para que la retroalimentación diga qué reforzar), tipo,
   enunciado, explicacion, revisado (true cuando el tutor la valida).

   TIPOS
   'multiple'     opciones: ['…'], correcta: índice
   'vf'           correcta: true | false
   'relacionar'   pares: [['izquierda', 'derecha'], …]
   'ordenar'      orden: ['primero', 'segundo', …]   (se barajan solas)
   'identificar'  imagen: { src, alt }, opciones, correcta
   'abierta'      modelo: 'respuesta de referencia'  (autocalificada)

   Las preguntas con revisado: false son un BORRADOR semilla para
   probar el sistema; se muestran con esa etiqueta.
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

CE.datos.preguntas = [
    { id: 'nom-01', tema: 'nomenclatura', subtema: 'Posición anatómica', tipo: 'multiple',
      enunciado: 'En la posición anatómica, las palmas de las manos miran hacia:',
      opciones: ['Adelante (anterior)', 'Atrás (posterior)', 'El tronco (medial)', 'Abajo (inferior)'],
      correcta: 0,
      explicacion: 'En la posición anatómica la persona está de pie, mirando al frente, con los miembros superiores a los lados y las palmas hacia adelante.',
      revisado: false },

    { id: 'nom-02', tema: 'nomenclatura', subtema: 'Planos anatómicos', tipo: 'vf',
      enunciado: 'El plano sagital medio divide el cuerpo en mitades derecha e izquierda.',
      correcta: true,
      explicacion: 'El plano sagital medio pasa por la línea media y separa el cuerpo en dos mitades, derecha e izquierda.',
      revisado: false },

    { id: 'nom-03', tema: 'nomenclatura', subtema: 'Planos anatómicos', tipo: 'multiple',
      enunciado: '¿Qué plano divide el cuerpo en una parte anterior y una posterior?',
      opciones: ['Plano sagital', 'Plano coronal (frontal)', 'Plano transversal', 'Plano sagital medio'],
      correcta: 1,
      explicacion: 'El plano coronal o frontal es vertical y separa lo anterior (ventral) de lo posterior (dorsal).',
      revisado: false },

    { id: 'nom-04', tema: 'nomenclatura', subtema: 'Planos anatómicos', tipo: 'multiple',
      enunciado: 'El plano transversal (horizontal o axial) divide el cuerpo en:',
      opciones: ['Derecha e izquierda', 'Anterior y posterior', 'Superior e inferior', 'Superficial y profundo'],
      correcta: 2,
      explicacion: 'El plano transversal es perpendicular a los otros dos y separa una parte superior de una inferior.',
      revisado: false },

    { id: 'nom-05', tema: 'nomenclatura', subtema: 'Terminología', tipo: 'relacionar',
      enunciado: 'Relaciona cada término con su significado.',
      pares: [
          ['Superior', 'Más cerca de la cabeza'],
          ['Inferior', 'Más cerca de los pies'],
          ['Medial', 'Más cerca del plano medio'],
          ['Lateral', 'Más lejos del plano medio']
      ],
      explicacion: 'Estos términos siempre se interpretan con el cuerpo en posición anatómica.',
      revisado: false },

    { id: 'nom-06', tema: 'nomenclatura', subtema: 'Terminología', tipo: 'vf',
      enunciado: 'Los términos proximal y distal se usan sobre todo para describir posiciones en los miembros.',
      correcta: true,
      explicacion: 'Proximal indica más cerca de la raíz del miembro; distal, más lejos. Ejemplo: la mano es distal respecto al codo.',
      revisado: false },

    { id: 'nom-07', tema: 'nomenclatura', subtema: 'Posición anatómica', tipo: 'abierta',
      enunciado: 'Explica con tus palabras por qué la posición anatómica es útil cuando enfermería registra la ubicación de una lesión.',
      modelo: 'Porque es una referencia común: aunque el paciente esté acostado o sentado, la ubicación se describe como si estuviera en posición anatómica. Así cualquier profesional que lea el registro entiende exactamente dónde está la lesión.',
      explicacion: 'Compara tu respuesta con la de referencia: lo importante es la idea de "referencia común que evita ambigüedades".',
      revisado: false },

    { id: 'col-01', tema: 'columna', subtema: 'Región cervical', tipo: 'ordenar',
      enunciado: 'Ordena las regiones de la columna vertebral de superior a inferior.',
      orden: ['Cervical', 'Torácica', 'Lumbar', 'Sacra', 'Coccígea'],
      explicacion: 'De la cabeza hacia la pelvis: cervical, torácica, lumbar, sacra y coccígea.',
      revisado: false }
];
