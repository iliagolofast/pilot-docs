---
title: "Cómo instalar la aplicación e iniciar sesión"
---

En este artículo veremos cómo empezar a trabajar con la aplicación móvil PILOT. Aprenderá:

— [cómo instalar la aplicación en el smartphone](kak-ustanovit-i-vojti-v-prilozhenie.html#как_установить_мобпилот)

— [cómo iniciar sesión como usuario normal](kak-ustanovit-i-vojti-v-prilozhenie.html#как_войти_в_мобпилот)

— [cómo autorizarse como administrador y trabajar con las cuentas de usuario](kak-ustanovit-i-vojti-v-prilozhenie.html#как_войти_админу_в_мобпилот)

— [cómo iniciar sesión en la aplicación con autenticación de dos factores](kak-ustanovit-i-vojti-v-prilozhenie.html#Вход_в_приложение_с_двухфакторной_аутентификацией_)

— [qué ajustes de inicio de sesión hay disponibles](kak-ustanovit-i-vojti-v-prilozhenie.html#какие_настройки_входа)

## Instalación de la aplicación

Para empezar a trabajar con la versión móvil de PILOT, instale la aplicación en su smartphone.

### Método 1. Desde la tienda de aplicaciones

1\. Abra la tienda de aplicaciones de su teléfono:

-   Google Play, si tiene Android
    
-   App Store, si utiliza un iPhone
    
    2\. En el cuadro de búsqueda escriba: ПИЛОТ
    
    3\. Busque la aplicación con el icono de la marca y pulse «Instalar»
    

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom.png)

### Método 2. Mediante enlace directo

Puede ir directamente a la tienda de aplicaciones mediante el enlace desde su smartphone:

[Ir a Google Play](https://play.google.com/store/apps/details?id=ru.octys.pilot) 

[Ir a App Store](https://itunes.apple.com/us/app/pilot/id917533772?l=ru&ls=1&mt=8)

Tras acceder, instale la aplicación PILOT.

Cuando termine la instalación, aparecerá el icono de PILOT en la pantalla del smartphone; púlselo para abrir la aplicación.

## Inicio de sesión en la aplicación

Para iniciar sesión en la aplicación, asegúrese de tener:

-   Un smartphone con la aplicación móvil PILOT instalada
    
-   Conexión a internet
    
-   El usuario y la contraseña de su cuenta de PILOT
    

### Cómo iniciar sesión

1\. Abra la aplicación PILOT

2\. En la pantalla de inicio, introduzca el usuario y la contraseña de su cuenta web

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_2.png)

3\. Pulse «Iniciar sesión»

4\. Si desea que los datos se guarden y no tener que introducirlos cada vez, marque la casilla «Recordarme»

5\. Seleccione el servidor de acceso

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_3.png)

Tras iniciar sesión correctamente, accederá a la pantalla principal de la aplicación con sus secciones.

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_4.png)

### Iniciar sesión como administrador

Los administradores pueden iniciar sesión en la aplicación con su propio usuario y ver de inmediato los perfiles de todos los usuarios del contrato. Se puede cambiar rápidamente entre cuentas, ayudar a los compañeros y gestionar la configuración en la aplicación móvil.

1\. Introduzca el usuario y la contraseña del administrador

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_5.png)

2\. Pulse «Iniciar sesión»

3\. Seleccione el servidor de acceso

4\. En la aplicación aparecerá la lista de contratos asignados al administrador

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_6.png)

5\. Pulse el contrato que necesite

6\. Seleccione el usuario concreto dentro del contrato y acceda a su cuenta de usuario

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_7.png)

## Inicio de sesión en la aplicación con autenticación de dos factores

La autenticación de dos factores (2FA) protege adicionalmente su cuenta de PILOT. Para iniciar sesión se necesitará no solo el usuario y la contraseña, sino también un código de un solo uso. Aunque otra persona llegue a conocer la contraseña, sin este código no podrá acceder a la cuenta.

En PILOT hay dos métodos para confirmar el inicio de sesión:

-   Código de la aplicación de autenticación (TOTP): el código se genera en una aplicación conectada, por ejemplo, Google Authenticator o Microsoft Authenticator
    
-   Código por correo electrónico (Email 2FA): el sistema envía el código a una dirección de correo electrónico confirmada
    

Antes de iniciar sesión en la aplicación móvil, el método de 2FA elegido debe [conectarse](../../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/privatnost.html#Двухфакторная_аутентификация) en el perfil de usuario en la interfaz web de PILOT.

En una cuenta pueden estar conectados ambos métodos de autenticación de dos factores a la vez. En ese caso, al iniciar sesión deberá superar ambas etapas de confirmación de forma consecutiva: introducir el código de la aplicación de autenticación y, a continuación, el código recibido por correo electrónico.

### Inicio de sesión con código de la aplicación de autenticación (TOTP)

Con este método de confirmación se utiliza un código de seis dígitos de la aplicación de autenticación.

Para saber cómo conectar la autenticación TOTP en la interfaz web, lea [aquí](../../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/privatnost.html#Как_подключить_двухфакторную_аутентификацию_TOTP:).

Para iniciar sesión en la aplicación móvil:

1\. Abra la aplicación PILOT

2\. Introduzca el usuario y la contraseña

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_2.png)

3\. Pulse «Iniciar sesión»

4\. Abra la aplicación de autenticación y busque el código de la cuenta de PILOT

5\. Introduzca el código de seis dígitos en la pantalla de confirmación de inicio de sesión

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_8.png)     ![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_9.png)

6\. Pulse «Iniciar sesión»

Tras verificar correctamente el código, se abrirá la aplicación

<table><tbody><tr><td><span></span></td><td><div>El código se actualiza cada 30 segundos. Si el código ha caducado, espere a que aparezca uno nuevo e introdúzcalo.</div></td></tr></tbody></table>

### Inicio de sesión con código por correo electrónico (Email 2FA)

Con este método, tras comprobar el usuario y la contraseña, PILOT envía un código de un solo uso a la dirección de correo electrónico indicada en el perfil del usuario.

Para saber cómo conectar la confirmación del inicio de sesión por correo electrónico en la interfaz web, lea [aquí](../../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/privatnost.html#Как_подключить_Email_2FA:).

Para iniciar sesión en la aplicación móvil:

1\. Abra la aplicación PILOT

2\. Introduzca el usuario y la contraseña

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_2.png)

3\. Pulse «Iniciar sesión»

4\. Revise su correo electrónico y busque el mensaje con el código

5\. Introduzca el código recibido en la pantalla de confirmación de inicio de sesión

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_10.png)   ![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_11.png)

6\. Pulse «Iniciar sesión»

Tras verificar correctamente el código, se abrirá la aplicación.

Si no ha recibido el mensaje, revise las carpetas «Spam» y «Correo no deseado» y asegúrese de que en el perfil figura la dirección correcta. No comparta el código de un solo uso con otras personas.

## Ajustes de inicio de sesión

En la pantalla de inicio de sesión, en la esquina superior derecha, hay un icono ![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_12.png) . Púlselo para abrir los «Ajustes de inicio de sesión».

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_13.png)

Aquí puede:

### Registrarse mediante

### [código QR del dispositivo](../../panel-administratora/qr-kody.html)

—  la aplicación lee un código QR en el que ya están registrados los datos del objeto:

-   Escanee el código QR del dispositivo
    

Apunte la cámara del smartphone al código QR que se encuentra en el dispositivo o en el sistema PILOT. Asegúrese de que el código QR quede dentro del marco de la pantalla; la aplicación lo leerá automáticamente.

2\. Seleccione la acción:

-   Iniciar sesión: si ya tiene una cuenta en el sistema PILOT. En ese caso, el dispositivo se vinculará automáticamente a su cuenta existente.
    
-   Registrarse: si no tiene cuenta. La aplicación le propondrá crear una cuenta nueva y el dispositivo se añadirá a la nueva cuenta.
    

Registro de un nuevo usuario:

1\. Rellene los datos:

— Email

— número de teléfono

— contraseña

— confirmación de la contraseña

 Pulse «Continuar».

2\. Confirme el Email

Se enviará un código de confirmación al correo electrónico que indicó. Introduzca el código en la pantalla de confirmación. Si no ha recibido el mensaje, podrá solicitar un nuevo envío cuando termine el temporizador. Pulse «Confirmar».

Tras la confirmación correcta, iniciará sesión automáticamente en la aplicación y el dispositivo escaneado mediante el código QR quedará vinculado a su cuenta en el sistema PILOT

### Cambiar de servidor

— indique la dirección del servidor que necesite y guarde los cambios pulsando «Aceptar».

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_14.png)

### Ir a los ajustes del sistema

— abra los ajustes de su smartphone y conceda a la aplicación los permisos necesarios.

![](images/drex_kak_ustanovit_i_vojti_v_prilozhenie_custom_15.png)

Para salir de la sección «Ajustes de inicio de sesión», pulse «Cancelar».
