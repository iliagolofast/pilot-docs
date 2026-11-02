---
title: "Inicio de sesión"
---

Para iniciar sesión en la cuenta de usuario, siga estos pasos:

![Inicio de sesión ](images/drex_vkhod__screen.png)

<table><tbody><tr><td><ul><li><div>Introduzca su nombre de usuario, proporcionado por el administrador del contrato</div></li></ul></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>2. Introduzca su contraseña. Para mostrar la contraseña introducida, pulse el icono <img alt="" src="images/drex_vkhod__custom.png"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>3. Seleccione el idioma de la interfaz del sistema. El idioma puede cambiarse más adelante en la <a href="interfejs-lichnogo-kabineta/verkhnyaya-panel/index.html#Меню_доп_настроек"><span>configuración</span></a></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>4. Marque la casilla «Recordarme» si desea que el sistema recuerde sus datos de inicio de sesión.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>La función «Recordarme» permite iniciar sesión automáticamente la próxima vez que abra la página. No tendrá que introducir de nuevo el nombre de usuario y la contraseña cada vez.</span></div></td></tr></tbody></table>

<table><tbody><tr><td><div>5. Pulse el botón «Iniciar sesión»</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

## Si olvidó la contraseña

Si ya tiene una cuenta de PILOT y ha olvidado su contraseña, siga estos pasos:

1\. En la ventana de inicio de sesión, pulse el botón «¿Olvidó su contraseña?»

![Inicio de sesión ](images/drex_vkhod__screen_2.png)

2\. En la ventana que se abre, introduzca su nombre de usuario y pulse el botón «Enviar contraseña». Si los datos introducidos coinciden con los existentes en la base de datos, recibirá un correo en la dirección de correo electrónico indicada en el registro

![](images/drex_vkhod__custom_2.png)

![](images/drex_vkhod__custom_3.png)

3\. Siga el enlace del correo que ha recibido

4\. Escriba e introduzca una nueva contraseña

![](images/drex_vkhod__custom_4.png)

5\. Pulse el botón «Establecer contraseña»

6\. Después de cambiar la contraseña, entrará automáticamente en la cuenta de usuario

<table><tbody><tr><td><span></span></td><td><div>Si utilizó la función de recuperación de contraseña por error, elimine el correo recibido y utilice sus datos anteriores.</div></td></tr></tbody></table>

## Inicio de sesión en la cuenta de usuario con autenticación de dos factores

La autenticación de dos factores (2FA) es un nivel adicional de protección de la cuenta.

Además del nombre de usuario y la contraseña, para iniciar sesión se utiliza un código de un solo uso. Esto reduce el riesgo de acceso no autorizado, incluso si terceros llegan a conocer la contraseña.

En el sistema PILOT hay dos métodos de 2FA:

-   Autenticación TOTP: mediante una aplicación de autenticación
    
-   Autorización por correo electrónico: con confirmación por correo electrónico
    

<table><tbody><tr><td><span></span></td><td><div>La posibilidad de usar la autenticación de dos factores debe ser activada por el administrador del contrato.</div></td></tr></tbody></table>

### Autenticación de dos factores TOTP

es un nivel adicional de protección de su cuenta. Además de la contraseña habitual, utilizará un código temporal para iniciar sesión.

Cómo activar la autenticación de dos factores TOTP:

1\. Antes del primer inicio de sesión

instale una aplicación de autenticación de dos factores para iOS o Android

[Google Autentificator para Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ru)             [Google Authenticator para iOS](https://apps.apple.com/ru/app/google-authenticator/id388497605)

[Microsoft Autentificator para Android](https://play.google.com/store/apps/details?id=com.azure.authenticator)         [Microsoft Authenticator para iOS](https://apps.apple.com/ru/app/microsoft-authenticator/id983156458)

[Twilio Authy para Android](https://play.google.com/store/apps/details?id=com.authy.authy)                             [Twilio Authy para iOS](https://apps.apple.com/ru/app/twilio-authy/id494168017)

2\. En la pestaña [«Privacidad»](nastrojki-dogovora-2/privatnost.html#Двухфакторная_аутентификация) busque la sección «Autenticación de dos factores»

![](images/drex_vkhod__custom_5.png)

 3. Pulse el botón «Conectar» junto a «Autorización TOTP»

4\. Escanee el código QR con la aplicación instalada

![](images/drex_vkhod__custom_6.png)

5\. Introduzca el código de la aplicación

![](images/drex_vkhod__custom_7.png)

### Cómo iniciar sesión con TOTP:

1\. Abra el navegador y vaya al sitio [https://pilot-gps.com/](https://pilot-gps.com/)

2\. Introduzca sus credenciales: nombre de usuario y contraseña

3\. Pulse el botón «Iniciar sesión»

4\. En la ventana que aparece, introduzca el código de seis dígitos de la aplicación. Para ello, abra la aplicación de autenticación en el teléfono, busque el código de seis dígitos que se muestra e introdúzcalo en el campo correspondiente de la pantalla del ordenador.

![](images/drex_vkhod__custom_8.png)

<table><tbody><tr><td><span></span></td><td><div>El código se actualiza cada 30 segundos. Si no le ha dado tiempo a introducir el código antes de que se actualice, espere a que aparezca uno nuevo e introdúzcalo.</div></td></tr></tbody></table>

5\. Pulse el botón «Iniciar sesión»

### Autenticación de dos factores por correo electrónico (Email 2FA)

es un nivel adicional de protección de su cuenta. Después de introducir el nombre de usuario y la contraseña, el sistema solicitará además un código que llegará a su correo personal. Solo después de introducir ese código podrá entrar en el sistema.

Cómo activar Email 2FA

1\. En la pestaña [«Privacidad»](nastrojki-dogovora-2/privatnost.html#Двухфакторная_аутентификация) busque la sección «Autenticación de dos factores»

![](images/drex_vkhod__custom_5.png)

2\. Pulse «Conectar» junto a «Autorización por correo electrónico»

3\. Seleccione un correo electrónico confirmado de la lista

![](images/drex_vkhod__custom_9.png)

4\. Pulse «Enviar código». Al correo electrónico seleccionado se enviará un mensaje con el código de confirmación![](images/drex_vkhod__custom_10.png)

5\. Introduzca el código del correo y confirme la conexión

![](images/drex_vkhod__custom_11.png)

### Cómo iniciar sesión con Email 2FA

1\. Abra el navegador y vaya al sitio [https://pilot-gps.com/](https://pilot-gps.com/)

2\. Introduzca sus credenciales: nombre de usuario y contraseña

3\. Pulse el botón «Iniciar sesión»

4\. Introduzca el código de un solo uso enviado al correo electrónico

![](images/drex_vkhod__custom_12.png)

5\. Pulse «Iniciar sesión»
