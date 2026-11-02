---
title: "Configuración del envío de correo electrónico (SMTP)"
---

### Cómo configurar SMTP:

-   # En el panel de administración, vaya a la sección «Socios»
    

![](images/drex_nastrojka_otpravki_ehlektronnoj_pochty__smtp__custom.png)

2\. Haga doble clic en el socio seleccionado; se abrirá una ventana con los ajustes. Seleccione la pestaña SMPT.

<table><tbody><tr><td><span></span></td><td><div>La pestaña solo está disponible para socios.</div></td></tr></tbody></table>

La pestaña SMTP sirve para configurar el envío de correo electrónico a través de un servidor SMTP externo.

![](images/drex_nastrojka_otpravki_ehlektronnoj_pochty__smtp__custom_2.png)

Aquí se indican los parámetros del servidor de correo a través del cual el sistema enviará notificaciones, facturas y otros mensajes.

Parámetros de configuración

• SMTP Host — dirección del servidor SMTP

• SMTP Port — puerto del servidor SMTP

• SMTP Login — nombre de usuario para la autorización en el servidor de correo

• SMTP Passw — contraseña para la autorización

• SMTP Email — dirección de correo electrónico en cuyo nombre se enviarán los mensajes

• Seguridad SMTP — selección del tipo de conexión (sin cifrado, SSL, TLS, según los ajustes del servidor)

Compruebe con atención los datos introducidos: la entrega de los mensajes depende de que estos ajustes sean correctos.

## Comprobación del servidor SMTP

Después de introducir los parámetros se puede comprobar la conexión.

El sistema utiliza el protocolo SMTP (Simple Mail Transfer Protocol) para probar la conexión y la autorización.

La comprobación se realiza del siguiente modo:

1\. El sistema obtiene de la solicitud la dirección del servidor SMTP y comprueba si está indicada

2\. Obtiene el puerto de conexión. Si no se ha indicado, se utiliza el puerto estándar 25

3\. Se crea una instancia del cliente SMTP y se configuran el tiempo de espera de la conexión y el nivel de depuración

4\. Se intenta conectar con el servidor:

— si se ha seleccionado SSL, se añade automáticamente a la dirección el prefijo ssl://

— en la conexión por SSL se desactiva temporalmente la comprobación del certificado

5\. Tras la conexión correcta se envía el comando EHLO (comando de saludo ampliado de SMTP)

6\. El sistema obtiene la lista de extensiones ESMTP compatibles con el servidor

7\. Si se ha seleccionado el modo TLS y el servidor admite STARTTLS, el sistema:

— inicia una conexión segura

— vuelve a enviar el comando EHLO

8\. Si el servidor admite autenticación, se intenta iniciar sesión con el nombre de usuario y la contraseña indicados

### Gestión de errores

Si se produce un error en cualquier etapa:

— la información se registra en el registro de errores

— se devuelve el código HTTP 400

— se muestra el mensaje de error en formato JSON

Con independencia del resultado de la comprobación, la conexión se cierra correctamente con el comando QUIT.

Al final, la función devuelve los parámetros de conexión y el resultado de la comprobación.

Este procedimiento ayuda a comprobar que el servidor está disponible, admite el tipo de cifrado seleccionado y acepta las credenciales indicadas.

Si la comprobación no se supera, recomendamos volver a comprobar la dirección del servidor, el puerto, el tipo de seguridad y los datos de inicio de sesión.
