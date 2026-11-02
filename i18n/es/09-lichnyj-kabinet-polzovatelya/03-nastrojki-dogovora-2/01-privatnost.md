---
title: "Privacidad"
---

En «Privacidad» puede configurar la seguridad de la cuenta y las notificaciones:

— [configurar el correo electrónico](privatnost.html#Электронная_почта)

— [cambiar la contraseña](privatnost.html#Смена_пароляяя)

— [restringir el acceso por IP](privatnost.html#Защита_по_IP)

— [activar una protección adicional mediante código](privatnost.html#Двухфакторная_аутентификация)

[— seleccionar el tipo y el método de recepción de las notificaciones](privatnost.html#Уведомления)

— restablecer la caché

![](images/drex_privatnost_custom.png)

## Configuración del correo electrónico

En PILOT el correo electrónico se utiliza para recibir informes y notificaciones.

![](images/drex_privatnost_custom_2.png)

### Cómo añadir un correo electrónico:

1\. En la pestaña «Configuración personal», busque la sección «Dirección de correo electrónico de los usuarios»

2\. Pulse el botón «Añadir Email» ![](images/drex_privatnost_custom_3.png)

3\. Introduzca una dirección de correo electrónico válida

4\. Pulse el botón «Guardar»

<table><tbody><tr><td><span></span></td><td><div>Para recibir informes y notificaciones, es imprescindible confirmar su dirección de correo electrónico. Solo después de la confirmación el sistema le enviará información.</div></td></tr></tbody></table>

Estados del correo:

![](images/drex_privatnost_custom_4.png) — correo confirmado

![](images/drex_privatnost_custom_5.png) — correo no confirmado

### Cómo confirmar el correo electrónico:

1\. Pulse el botón «Enviar correo de confirmación» ![](images/drex_privatnost_custom_6.png)

2\. Abra su bandeja de correo

3\. Busque el mensaje del sistema PILOT

4\. Siga el enlace del mensaje

5\. El correo se confirmará automáticamente

El botón «Actualizar lista de email» ![](images/drex_privatnost_custom_7.png) actualiza los estados de las direcciones de correo añadidas.

## Cambio de contraseña

### Cómo cambiar la contraseña de la cuenta:

![](images/drex_privatnost_custom_8.png)

1\. En la pestaña «Privacidad», busque la sección «Cambio de contraseña»

2\. Elija una nueva contraseña segura

3\. Introduzca la nueva contraseña

4\. Repita la nueva contraseña en el campo contiguo

5\. Pulse el botón «Guardar contraseña»

Si marca la casilla «Enviar por correo», se enviará un mensaje con la nueva contraseña a la dirección de correo electrónico indicada en su cuenta.

## Protección mediante filtrado por IP

El filtrado por IP es una tecnología que da acceso a la cuenta solo a las direcciones IP permitidas.

### Cómo activar el filtrado por direcciones IP:

![](images/drex_privatnost_custom_9.png)

1\. En la pestaña «Privacidad», busque la sección «Filtrado por direcciones IP»

2\. Marque la casilla «Filtrado por direcciones IP»

3\. Introduzca las direcciones IP desde las que permite iniciar sesión en su cuenta. Por ejemplo, las direcciones de los ordenadores del trabajo y de casa.

4\. Pulse «Guardar»

<table><tbody><tr><td><span></span></td><td><div><span>Al activar la función, su dirección IP actual se añadirá automáticamente para que no pierda el acceso.</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>&nbsp;Solo se podrá iniciar sesión en la cuenta desde las direcciones IP indicadas.</div></td></tr></tbody></table>

Si desea desactivar esta función, simplemente desmarque la casilla y guarde los cambios.

## Autenticación de dos factores

La autenticación de dos factores (2FA) es un nivel adicional de protección de la cuenta.

Además del nombre de usuario y la contraseña, para iniciar sesión se utiliza un código de un solo uso. Esto reduce el riesgo de acceso no autorizado, incluso si terceros llegan a conocer la contraseña.

En el sistema PILOT hay dos métodos de 2FA:

-   Autenticación TOTP: mediante una aplicación de autenticación
    
-   Autorización por correo electrónico: con confirmación por correo electrónico
    

![](images/drex_privatnost_custom_10.png)

<table><tbody><tr><td><span></span></td><td><div>&nbsp;La posibilidad de usar la autenticación de dos factores debe ser activada por el administrador del contrato.</div></td></tr></tbody></table>

### Autenticación de dos factores TOTP

es un nivel adicional de protección de su cuenta. Además de la contraseña habitual, utilizará un código temporal para iniciar sesión.

Cómo activar la autenticación de dos factores TOTP:

1\. Antes del primer inicio de sesión

instale una aplicación de autenticación de dos factores para iOS o Android

[Google Autentificator para Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ru)             [Google Authenticator para iOS](https://apps.apple.com/ru/app/google-authenticator/id388497605)

[Microsoft Autentificator para Android](https://play.google.com/store/apps/details?id=com.azure.authenticator)         [Microsoft Authenticator para iOS](https://apps.apple.com/ru/app/microsoft-authenticator/id983156458)

[Twilio Authy para Android](https://play.google.com/store/apps/details?id=com.authy.authy)                             [Twilio Authy para iOS](https://apps.apple.com/ru/app/twilio-authy/id494168017)

2\. En la pestaña «Privacidad», busque la sección «Autenticación de dos factores»

![](images/drex_privatnost_custom_10.png)

 3. Pulse el botón «Conectar» junto a «Autorización TOTP»

4\. Escanee el código QR con la aplicación instalada

![](images/drex_privatnost_custom_11.png)

5\. Introduzca el código de la aplicación

![](images/drex_privatnost_custom_12.png)

### Cómo iniciar sesión con TOTP:

1\. Abra el navegador y vaya al sitio [https://pilot-gps.com/](https://pilot-gps.com/)

2\. Introduzca sus credenciales: nombre de usuario y contraseña

3\. Pulse el botón «Iniciar sesión»

4\. En la ventana que aparece, introduzca el código de seis dígitos de la aplicación. Para ello, abra la aplicación de autenticación en el teléfono, busque el código de seis dígitos que se muestra e introdúzcalo en el campo correspondiente de la pantalla del ordenador.

![](images/drex_privatnost_custom_13.png)

<table><tbody><tr><td><span></span></td><td><div>El código se actualiza cada 30 segundos. Si no le ha dado tiempo a introducir el código antes de que se actualice, espere a que aparezca uno nuevo e introdúzcalo.</div></td></tr></tbody></table>

5\. Pulse el botón «Iniciar sesión»

### Autenticación de dos factores por correo electrónico (Email 2FA)

es un nivel adicional de protección de su cuenta. Después de introducir el nombre de usuario y la contraseña, el sistema solicitará además un código que llegará a su correo personal. Solo después de introducir ese código podrá entrar en el sistema.

Cómo activar Email 2FA:

1\. En la pestaña «Privacidad», busque la sección «Autenticación de dos factores»

![](images/drex_privatnost_custom_10.png)

2\. Pulse «Conectar» junto a «Autorización por correo electrónico»

3\. Seleccione un correo electrónico confirmado de la lista

![](images/drex_privatnost_custom_14.png)

4\. Pulse «Enviar código». Al correo electrónico seleccionado se enviará un mensaje con el código de confirmación![](images/drex_privatnost_custom_15.png)

5\. Introduzca el código del correo y confirme la conexión

![](images/drex_privatnost_custom_16.png)

### Cómo iniciar sesión con Email 2FA

1\. Abra el navegador y vaya al sitio [https://pilot-gps.com/](https://pilot-gps.com/)

2\. Introduzca sus credenciales: nombre de usuario y contraseña

3\. Pulse el botón «Iniciar sesión»

4\. Introduzca el código de un solo uso enviado al correo electrónico

![](images/drex_privatnost_custom_17.png)

5\. Pulse «Iniciar sesión»

### Cómo desactivar 2FA

Vaya a la sección «Autenticación de dos factores» y pulse «Desactivar» junto al método activo.

![](images/drex_privatnost_custom_18.png)

## Configuración de notificaciones

Usted mismo elige qué notificaciones recibir. Seleccione solo las que realmente sean importantes.

![](images/drex_privatnost_custom_19.png)

<table><tbody><tr><td><span></span></td><td><div><span>Para recibir notificaciones, debe confirmar su dirección de correo electrónico.</span></div></td></tr></tbody></table>

### Cómo configurar las notificaciones:

-   En la pestaña «Privacidad», busque la sección «Configuración de notificaciones»
    
-   Consulte la lista de notificaciones disponibles
    
    3\. Marque las casillas de los tipos de notificaciones que desea recibir
    

4\. Para cada tipo de notificación seleccionado, marque los formatos de recepción de las notificaciones

5\. Pulse el botón «Guardar»

## Restablecer la caché

A veces el sistema puede no mostrar toda la información actualizada: esto ocurre porque en el navegador se conservan datos antiguos.

Para que todo vuelva a funcionar correctamente:

1\. Busque en la esquina superior derecha de la pestaña «Privacidad» el botón «Restablecer caché» ![](images/drex_privatnost_custom_20.png)

2\. Púlselo: el sistema borrará los datos antiguos y cargará los actuales

Después de esto, todo volverá a mostrarse correctamente.
