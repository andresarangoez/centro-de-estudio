# Centro de estudio · Enfermería I

Recurso educativo de acompañamiento académico en Enfermería.
**Elaborado por soy Andrés Arango.** No es una plataforma oficial de la FUCS.

## Cómo abrirlo

- **VS Code + Live Server:** clic derecho en `index.html` → *Open with Live Server*.
- **Sin servidor:** doble clic en `index.html` también funciona (scripts clásicos, sin `fetch`).
- **Probar otra fecha:** `index.html?hoy=2026-10-01` simula ese día (útil para revisar el tablero).

El progreso de la estudiante se guarda en `localStorage` de su navegador
(clave `centro-estudio-v1`). En el pie de página hay botones para descargar y
restaurar una copia.

## Contenido

- **Morfología:** 27 temas (7 unidades del plan calendario 2026-2) con explicación, tablas, figuras, aplicación en enfermería, láminas de identificación, mini caso, preguntas y flashcards.
- **Biología:** 12 temas organizados desde el material del curso (sin plan calendario 2026-2 todavía).
- Detalle de fuentes y qué revisar: `docs/MATERIAL-INTEGRADO.md`.

## Estructura

```
index.html                 esqueleto + orden de carga de scripts
css/                       01-variables · 02-base · 03-layout · 04-componentes · 05-vistas
data/                      CONTENIDO (se edita sin tocar la interfaz)
  calendario.js            plan calendario: unidades, sesiones, evaluaciones
  temas.js                 lista de temas (y formato del contenido)
  tecnicas.js              técnicas de "Aprende a estudiar"
  preguntas.js             preguntas generales
  flashcards.js            flashcards generales
  contenido/               contenido por unidad: explicación, figuras, láminas,
                           preguntas y flashcards de cada tema
js/core/                   util (fechas, iconos, consultas) · estado (progreso) · router
js/components/             progreso · modal · tabla · flashcards · quiz · lamina · temporizador
js/modules/                inicio · plan · aprende · asignatura · tema · practica · empezar · sesion
js/99-arranque.js          conecta acciones globales e inicia el router
assets/branding/           logo real de soy Andrés Arango (copia sin modificar)
assets/images/             morfologia/<unidad>/ y biologia/ — figuras del material del curso
docs/                      análisis del plan calendario e inventario del material
```

## Cómo agregar contenido

| Quiero agregar…      | Dónde | Qué hacer |
|----------------------|-------|-----------|
| Contenido de un tema | `data/contenido/*.js` | `CE.contenido('id-del-tema', { … })`. El formato está documentado al inicio de `data/temas.js`. |
| Preguntas            | mismo archivo | `CE.agregar('preguntas', [ … ])`. Tipos: `multiple`, `vf`, `relacionar`, `ordenar`, `identificar`, `abierta`. |
| Flashcards           | mismo archivo | `CE.agregar('flashcards', [ … ])`. |
| Lámina interactiva   | `contenido.laminas` | `{ id, src, titulo, marcas: [{ n, r }], distractores }`. |
| Una imagen           | `assets/images/…` | Referénciala con `src`, `alt` y `fuente`. |
| Un tema nuevo        | `data/temas.js` | Agrega el objeto y, si tiene clase, su `id` en `temas` de la sesión en `data/calendario.js`. |
| Plan de Biología     | `data/calendario.js` | Quita `sinPlan`, agrega sesiones (`unidad: 'b-u…'`, `temas: ['bio-…']`) y evaluaciones. |

Todo lo que tiene `revisado: false` muestra **Borrador · por revisar**. Al validarlo, cambia a `revisado: true`.

## Reglas del proyecto

- Los temas salen del plan calendario (Morfología) o del material del curso (Biología). Lo inferido se marca como tal.
- Los porcentajes de progreso salen de pasos y actividades completadas, nunca son decorativos.
- Paleta: azul profundo `#092755`, azul `#0A3E7C`, amarillo `#FBD785` (sólo acento), blanco.
- El logo se usa desde el archivo real, en proporción 1:1, sin rediseñarlo.
- Las imágenes del curso se usan sólo en este repositorio de tutoría, sin distribución pública.
