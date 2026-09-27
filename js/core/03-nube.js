/* ============================================================
   NÚCLEO · Progreso en la nube
   Sólo con un nombre de usuario: sin correo ni contraseña.
   El servidor es un Google Apps Script con una hoja de cálculo
   (docs/nube/). La URL se configura en data/nube.js.

   - El progreso sigue guardándose primero en el navegador.
   - Cada cambio se sube a los pocos segundos.
   - Al abrir la página se trae la copia más reciente.
   - Si no hay internet, se reintenta al volver la conexión.
   ============================================================ */

window.CE = window.CE || {};

CE.nube = (function () {
    var CLAVE_USUARIO = 'centro-estudio-usuario';
    var CLAVE_OMITIR = 'centro-estudio-nube-omitida';
    var esc = CE.u.esc, I = CE.u.icono;
    var estado = 'local';            // local · guardando · ok · error
    var pendiente = false, enVuelo = false, temporizador = null, ultimoOk = null;

    function url() { return (CE.config && CE.config.nubeUrl) || ''; }
    function activo() { return !!url(); }
    function leerLS(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function escribirLS(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } }
    function usuario() { return activo() ? leerLS(CLAVE_USUARIO) : null; }

    function normalizar(u) { return String(u || '').trim().toLowerCase().replace(/\s+/g, '.'); }
    function valido(u) { return /^[a-z0-9._-]{3,30}$/.test(u); }

    /* ---------- Comunicación con el servidor ---------- */
    function leer(u) {
        return fetch(url() + '?accion=leer&u=' + encodeURIComponent(u), { redirect: 'follow' })
            .then(function (r) { return r.json(); })
            .then(function (j) { if (!j.ok) throw new Error(j.error || 'servidor'); return j; });
    }
    function enviar(u, nuevo, keepalive) {
        var d = CE.estado.datos;
        var cuerpo = JSON.stringify({ accion: 'guardar', u: u, nuevo: !!nuevo, datos: d, actualizado: d.actualizado, resumen: CE.estado.resumen() });
        /* text/plain evita la verificación previa (CORS) de Apps Script */
        return fetch(url(), { method: 'POST', body: cuerpo, redirect: 'follow', keepalive: !!keepalive && cuerpo.length < 60000 })
            .then(function (r) { return r.json(); });
    }

    /* ---------- Subida de cambios ---------- */
    function cambio() {
        if (!usuario()) return;
        pendiente = true;
        pintar('guardando');
        clearTimeout(temporizador);
        temporizador = setTimeout(subir, 3000);
    }
    function subir() {
        var u = usuario();
        if (!u || !pendiente) return Promise.resolve();
        if (enVuelo) { clearTimeout(temporizador); temporizador = setTimeout(subir, 1500); return Promise.resolve(); }
        enVuelo = true; pendiente = false;
        pintar('guardando');
        return enviar(u, false).then(function (j) {
            enVuelo = false;
            if (!j.ok) throw new Error(j.error);
            ultimoOk = new Date();
            pintar(pendiente ? 'guardando' : 'ok');
        }).catch(function () {
            enVuelo = false; pendiente = true;
            pintar('error');
        });
    }

    /* Al abrir: trae la copia más reciente */
    function sincronizar() {
        var u = usuario(); if (!u) return;
        pintar('guardando');
        leer(u).then(function (j) {
            var local = CE.estado.datos;
            if (!j.existe) { pendiente = true; return subir(); }
            if (local.usuario !== u || (j.actualizado || 0) > (local.actualizado || 0)) {
                CE.estado.reemplazar(j.datos, u);
                ultimoOk = new Date();
                pintar('ok');
                CE.router.render();
            } else if ((local.actualizado || 0) > (j.actualizado || 0)) {
                pendiente = true; return subir();
            } else { ultimoOk = new Date(); pintar('ok'); }
        }).catch(function () { pintar('error'); });
    }

    /* ---------- Interfaz ---------- */
    function pintar(e) {
        if (e) estado = e;
        var u = usuario();
        var b = document.querySelector('[data-cuenta]');
        if (b) {
            b.hidden = !activo();
            b.dataset.estado = u ? estado : 'local';
            b.innerHTML = I(u ? 'nube' : 'usuario') + '<span class="cuenta__txt">' + (u ? esc(u) : 'Guardar mi progreso') + '</span>' +
                (u ? '<span class="cuenta__punto" aria-hidden="true"></span>' : '');
            b.title = u ? textoEstado() : 'Guarda tu progreso en la nube con un nombre de usuario';
            b.setAttribute('aria-label', u ? 'Cuenta ' + u + '. ' + textoEstado() : 'Guardar mi progreso en la nube');
        }
        var nota = document.querySelector('[data-nube-nota]');
        if (nota) nota.textContent = u ? 'Tu progreso se guarda en este navegador y en la nube con el usuario «' + u + '».'
            : 'Tu progreso se guarda sólo en este navegador.' + (activo() ? ' Crea un usuario para guardarlo en la nube.' : '');
    }
    function textoEstado() {
        if (estado === 'guardando') return 'Guardando en la nube…';
        if (estado === 'error') return 'Sin conexión: se guardó en este navegador y se subirá al volver internet.';
        if (estado === 'ok') return 'Progreso guardado en la nube' + (ultimoOk ? ' a las ' + ultimoOk.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }) : '') + '.';
        return '';
    }

    function abrir() {
        if (!activo()) return;
        if (usuario()) return abrirCuenta();
        var modo = 'nuevo';
        CE.c.modal.abrir({
            titulo: 'Guarda tu progreso',
            html:
                '<p class="suave">Elige un nombre de usuario y sigue estudiando desde cualquier celular o computador. No necesitas correo ni contraseña.</p>' +
                '<div class="segmento" role="group" aria-label="¿Ya tienes usuario?" style="margin:var(--s-3) 0">' +
                '<button type="button" data-modo="nuevo" aria-pressed="true">Soy nuevo</button>' +
                '<button type="button" data-modo="existe" aria-pressed="false">Ya tengo usuario</button></div>' +
                '<form data-form-cuenta novalidate>' +
                '<div class="campo"><label for="cuenta-u">Nombre de usuario</label>' +
                '<input id="cuenta-u" class="entrada" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="30" placeholder="Ej.: andres.arango">' +
                '<small class="tenue" data-ayuda>Entre 3 y 30 caracteres: letras, números, punto o guion. Anótalo: lo necesitas para entrar desde otro dispositivo.</small></div>' +
                '<p class="peque" data-error role="alert" style="color:var(--err);min-height:1.2em;margin:var(--s-2) 0"></p>' +
                '<div class="fila" style="justify-content:space-between">' +
                '<button type="button" class="btn btn-texto" data-omitir>Ahora no</button>' +
                '<button type="submit" class="btn btn-primario" data-enviar>Crear usuario</button></div></form>',
            montar: function (el) {
                var campo = el.querySelector('#cuenta-u'), err = el.querySelector('[data-error]'), btn = el.querySelector('[data-enviar]');
                el.querySelector('.segmento').addEventListener('click', function (e) {
                    var b = e.target.closest('[data-modo]'); if (!b) return;
                    modo = b.dataset.modo;
                    el.querySelectorAll('[data-modo]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
                    btn.textContent = modo === 'nuevo' ? 'Crear usuario' : 'Entrar';
                    err.textContent = ''; campo.focus();
                });
                el.querySelector('[data-omitir]').addEventListener('click', function () {
                    try { sessionStorage.setItem(CLAVE_OMITIR, '1'); } catch (e) { /* nada */ }
                    CE.c.modal.cerrar();
                });
                el.querySelector('[data-form-cuenta]').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var u = normalizar(campo.value);
                    if (!valido(u)) { err.textContent = 'Usa entre 3 y 30 caracteres: letras sin tilde, números, punto o guion.'; campo.focus(); return; }
                    btn.disabled = true; err.textContent = ''; btn.textContent = 'Un momento…';
                    (modo === 'nuevo' ? crear(u) : entrar(u)).then(function (msg) {
                        CE.c.modal.cerrar();
                        CE.u.aviso(msg);
                        CE.router.render();
                    }).catch(function (x) {
                        btn.disabled = false; btn.textContent = modo === 'nuevo' ? 'Crear usuario' : 'Entrar';
                        err.textContent = x.message === 'ocupado' ? 'Ese usuario ya existe. Si es tuyo, elige «Ya tengo usuario»; si no, prueba con otro.'
                            : x.message === 'noexiste' ? 'No encontramos ese usuario. Revisa cómo lo escribiste o crea uno nuevo.'
                            : 'No hay conexión con la nube. Revisa tu internet e intenta de nuevo.';
                    });
                });
            }
        });
    }

    function crear(u) {
        var local = CE.estado.datos;
        /* El progreso sin dueño de este navegador pasa al usuario nuevo */
        if (local.usuario && local.usuario !== u) CE.estado.reiniciar();
        CE.estado.reemplazar(CE.estado.datos, u);
        return enviar(u, true).then(function (j) {
            if (!j.ok) { CE.estado.reemplazar(CE.estado.datos, null); throw new Error(j.error); }
            escribirLS(CLAVE_USUARIO, u);
            ultimoOk = new Date(); pintar('ok');
            return 'Listo: tu progreso se guarda como «' + u + '»';
        }, function (x) { CE.estado.reemplazar(CE.estado.datos, null); throw x; });
    }
    function entrar(u) {
        return leer(u).then(function (j) {
            if (!j.existe) throw new Error('noexiste');
            var local = CE.estado.datos;
            escribirLS(CLAVE_USUARIO, u);
            if (local.usuario === u && (local.actualizado || 0) > (j.actualizado || 0)) { pendiente = true; subir(); }
            else { CE.estado.reemplazar(j.datos, u); ultimoOk = new Date(); pintar('ok'); }
            return 'Bienvenido de nuevo, ' + u;
        });
    }

    function abrirCuenta() {
        var u = usuario();
        CE.c.modal.abrir({
            titulo: 'Tu progreso en la nube',
            html:
                '<p>Estás guardando como <b>' + esc(u) + '</b>.</p>' +
                '<p class="suave peque" data-texto-estado>' + esc(textoEstado()) + '</p>' +
                '<p class="suave peque">Para seguir en otro dispositivo, abre la página allí y elige <b>Ya tengo usuario</b>.</p>' +
                '<div class="fila" style="justify-content:space-between;margin-top:var(--s-4)">' +
                '<button class="btn btn-secundario" data-salir>Cerrar sesión en este dispositivo</button>' +
                '<button class="btn btn-primario" data-ahora>' + I('nube') + 'Guardar ahora</button></div>',
            montar: function (el) {
                el.querySelector('[data-ahora]').addEventListener('click', function () {
                    pendiente = true;
                    subir().then(function () { el.querySelector('[data-texto-estado]').textContent = textoEstado(); CE.u.aviso(estado === 'ok' ? 'Guardado en la nube' : 'Sin conexión: se reintentará'); });
                });
                el.querySelector('[data-salir]').addEventListener('click', function () {
                    var fin = function () {
                        escribirLS(CLAVE_USUARIO, null);
                        CE.estado.reiniciar();
                        pendiente = false; pintar('local');
                        CE.c.modal.cerrar();
                        CE.u.aviso('Sesión cerrada en este dispositivo');
                        CE.router.render();
                    };
                    if (pendiente || enVuelo) {
                        subir().then(function () {
                            if (estado === 'error' && !confirm('No se pudo subir el último cambio. ¿Cerrar sesión de todas formas? Se perderá lo que no se subió.')) return;
                            fin();
                        });
                    } else fin();
                });
            }
        });
    }

    function iniciar() {
        pintar();
        if (!activo()) return;
        if (usuario()) sincronizar();
        else {
            var omitida = false;
            try { omitida = !!sessionStorage.getItem(CLAVE_OMITIR); } catch (e) { /* nada */ }
            if (!omitida) setTimeout(abrir, 400);
        }
        window.addEventListener('online', function () { if (pendiente) subir(); });
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden' && pendiente && usuario()) {
                clearTimeout(temporizador); pendiente = false;
                enviar(usuario(), false, true).catch(function () { pendiente = true; });
            } else if (document.visibilityState === 'visible' && usuario() && !pendiente && !enVuelo) sincronizar();
        });
    }

    return { activo: activo, usuario: usuario, cambio: cambio, iniciar: iniciar, abrir: abrir, subir: subir };
})();
