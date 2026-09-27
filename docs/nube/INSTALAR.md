# Progreso en la nube · instalación (una sola vez, ~5 minutos)

Las estudiantes sólo eligen un **nombre de usuario** (sin correo ni contraseña).
El progreso se guarda en una hoja de Google tuya, donde además ves el avance de cada una.

## 1. Crear la hoja

1. Con una cuenta **@gmail.com personal**, abre <https://sheets.new>.
   (Las cuentas institucionales suelen bloquear el acceso "Cualquier persona", que es necesario.)
2. Ponle de nombre `Progreso centro de estudio`.

## 2. Pegar el código

1. En la hoja: **Extensiones → Apps Script**.
2. Borra lo que aparece y pega todo el contenido de `docs/nube/Codigo.gs`.
3. Guarda (icono de disco).

## 3. Publicarlo como aplicación web

1. **Implementar → Nueva implementación**.
2. En el engranaje de "Seleccionar tipo", elige **Aplicación web**.
3. *Ejecutar como:* **Yo**. *Quién tiene acceso:* **Cualquier persona**.
4. **Implementar** → **Autorizar acceso** → elige tu cuenta.
   Google avisa que la app no está verificada (es tuya): **Configuración avanzada → Ir a … (no seguro) → Permitir**.
5. Copia la **URL de la aplicación web** (termina en `/exec`).

## 4. Conectar la página

Pega la URL en `data/nube.js`:

```js
CE.config = {
    nubeUrl: 'https://script.google.com/macros/s/…/exec'
};
```

y sube los cambios a GitHub. Desde ese momento aparece "Guardar mi progreso" en la barra superior.

## Qué ves en la hoja

Pestaña `progreso`: una fila por usuario con la última conexión, el porcentaje de la ruta,
los pasos hechos y los temas dominados. Las columnas `datos` son el progreso completo: no las edites.

## Tener en cuenta

- Si cambias el código, usa **Implementar → Gestionar implementaciones → editar → Nueva versión**
  para conservar la misma URL.
- Sin contraseña, quien conozca un usuario puede abrir su progreso. Recomienda nombres poco obvios
  (por ejemplo `nombre.apellido23`). El progreso no contiene datos personales.
- Si una estudiante cambia de dispositivo, entra con **Ya tengo usuario**.
