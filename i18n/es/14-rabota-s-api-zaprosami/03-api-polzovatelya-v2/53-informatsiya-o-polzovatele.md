---
title: "Información de un usuario"
---

Esta API obtiene los datos de un usuario según su user\_id.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

-   cmd=get\_user — comando de la API para obtener información sobre un usuario
    
-   user\_id — identificador del usuario del que se necesita obtener información
    
-   node — número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

### Ejemplo de solicitud POST

Cuerpo de la solicitud (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0 = operación correcta)
    
-   msg — mensaje del servidor
    
-   data — objeto con la información del usuario:
    
-   id — identificador del usuario
    
-   roleid — rol del usuario (0, Admin; 1, User)
    
-   info — información adicional sobre el usuario
    
-   msisdn — número de teléfono
    
-   email — correo electrónico del usuario
    
-   name — nombre del usuario
    
-   account\_id — identificador de la cuenta a la que pertenece el usuario
    
-   lang — idioma de la interfaz del usuario
    
-   parent\_id— identificador del usuario padre (si existe)
