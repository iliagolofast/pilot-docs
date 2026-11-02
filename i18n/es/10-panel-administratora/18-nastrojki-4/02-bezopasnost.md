---
title: "Seguridad"
---

Esta función está destinada únicamente a los socios.

La configuración de seguridad se encuentra en el panel de administración, en la sección de configuración.

**Se pueden configurar dos tipos de verificación:**

-   TOTP (mediante QR)
    
-   Verificación por correo electrónico.
    

![](images/drex_bezopasnost_custom.png)

**La autenticación TOTP** es una «contraseña de un solo uso basada en el tiempo» y constituye una forma de autenticación de dos factores.

Es un método seguro en el que, además de su contraseña habitual, el usuario utiliza una contraseña de un solo uso que se genera cada 30 segundos mediante una aplicación de autenticación en su dispositivo móvil.

**1\. Cómo configurar** **la autenticación TOTP**:

Descargue una aplicación de autenticación.

Instale en su dispositivo móvil una aplicación que genere contraseñas de un solo uso, como Google Authentication o Authy.

<table><tbody><tr><td><span></span></td><td><div><span><strong>Google Authentication</strong></span></div><div><span>para&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=ru</span></div><div><span>para iOS</span></div><div><span>https://apps.apple.com/ru/app/google-authenticator/id388497605</span></div><div>&nbsp;</div><div><span><strong>Microsoft Authentication</strong></span></div><div><span>&nbsp;para&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.azure.authenticator&amp;hl=ru</span></div><div><span>para iOS</span></div><div><span>https://apps.apple.com/us/app/microsoft-authenticator/id983156458</span></div><div>&nbsp;</div><div><span><strong>Authy</strong></span></div><div><span>para&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.authy.authy&amp;hl=ru</span></div><div><span>para iOS</span></div><div><span>https://apps.apple.com/us/app/twilio-authy/id494168017</span></div></td></tr></tbody></table>

**2\. Escanee el código QR.**

Utilice la aplicación de autenticación para escanear el código QR proporcionado por el servicio.

Esto vincula su cuenta con la aplicación y permite generar códigos únicos.

![](images/drex_bezopasnost_custom_2.png)

**3\. Introduzca el código obtenido.**

Introduzca el código actual que muestra la aplicación en el campo de confirmación del sitio web o de la aplicación para completar el proceso.

![](images/drex_bezopasnost_custom_3.png)

4. **Cómo usar la autenticación TOTP para iniciar sesión en el sistema.**

\- Introduzca el nombre de usuario y la contraseña. Comience introduciendo sus datos.

\- Abra la aplicación de autenticación. En su dispositivo móvil, abra la aplicación que utilizó para configurar **TOTP**.

\- Introduzca la contraseña de un solo uso. Consulte la contraseña de un solo uso actual en la aplicación e introdúzcala para completar el inicio de sesión.

5\. **Ventajas de usar TOTP.**

**Seguridad**

Aunque alguien conozca su contraseña, no podrá acceder a su cuenta sin la contraseña de un solo uso.

**Comodidad**

La aplicación de autenticación no necesita conexión a internet para generar el código.

**Versatilidad**

Muchos servicios admiten **TOTP**, lo que permite usar una sola aplicación para acceder a distintas cuentas.

**Autenticación por correo electrónico**

Para realizar la autenticación por correo electrónico es necesario:

-   Configurar SMTP en la configuración del socio.
    
-   Añadir la configuración **2FA\_EMAIL**.
    

![](images/drex_bezopasnost_custom_4.png)

![](images/drex_bezopasnost_custom_5.png)

Una vez introducidos los ajustes en la configuración del socio, en la pantalla principal de inicio de sesión, tras introducir el usuario y la contraseña del panel de administración, aparecerá la ventana de introducción del código.

Configuración para iniciar sesión en la interfaz de usuario mediante un código obtenido de la aplicación.

![](images/drex_bezopasnost_custom_6.png)

Pantalla de inicio de sesión e introducción del código.

Utilice el correo electrónico y la ventana de introducción.

![](images/drex_bezopasnost_custom_7.png)

Autenticación multifactor por defecto

En la parte administrativa es necesario añadir una clave para el socio o la cuenta.

A continuación, a todos los usuarios de esta cuenta se les propondrá añadir la autorización TOTP en sus cuentas.

**TOTP = 1**

![](images/drex_bezopasnost_custom_8.png)
