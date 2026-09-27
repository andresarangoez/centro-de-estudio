/* ============================================================
   DATOS · FLASHCARDS
   frente: pregunta o concepto · reverso: respuesta.
   Las tarjetas que crea la estudiante NO van aquí: se guardan en
   su navegador (localStorage) desde la propia plataforma.

   revisado: false → borrador semilla, visible como tal.
   ============================================================ */

window.CE = window.CE || {};
CE.datos = CE.datos || {};

CE.datos.flashcards = [
    { id: 'fc-nom-01', tema: 'nomenclatura', revisado: false,
      frente: '¿Cómo es la posición anatómica?',
      reverso: 'De pie, erguido, mirando al frente, miembros superiores a los lados con las palmas hacia adelante y miembros inferiores juntos con los pies hacia adelante.' },

    { id: 'fc-nom-02', tema: 'nomenclatura', revisado: false,
      frente: 'Plano sagital medio',
      reverso: 'Plano vertical que pasa por la línea media y divide el cuerpo en mitades derecha e izquierda.' },

    { id: 'fc-nom-03', tema: 'nomenclatura', revisado: false,
      frente: 'Plano coronal (frontal)',
      reverso: 'Plano vertical perpendicular al sagital. Divide el cuerpo en parte anterior y parte posterior.' },

    { id: 'fc-nom-04', tema: 'nomenclatura', revisado: false,
      frente: 'Plano transversal (horizontal o axial)',
      reverso: 'Plano perpendicular a los anteriores. Divide el cuerpo en parte superior y parte inferior.' },

    { id: 'fc-nom-05', tema: 'nomenclatura', revisado: false,
      frente: 'Medial vs. lateral',
      reverso: 'Medial: más cerca del plano medio. Lateral: más lejos del plano medio.' },

    { id: 'fc-nom-06', tema: 'nomenclatura', revisado: false,
      frente: 'Proximal vs. distal',
      reverso: 'En los miembros. Proximal: más cerca de la raíz del miembro. Distal: más lejos.' },

    { id: 'fc-nom-07', tema: 'nomenclatura', revisado: false,
      frente: 'Superficial vs. profundo',
      reverso: 'Superficial: más cerca de la superficie del cuerpo. Profundo: más lejos de la superficie.' },

    { id: 'fc-nom-08', tema: 'nomenclatura', revisado: false,
      frente: 'Anterior (ventral) vs. posterior (dorsal)',
      reverso: 'Anterior: hacia la parte delantera del cuerpo. Posterior: hacia la parte de atrás.' }
];
