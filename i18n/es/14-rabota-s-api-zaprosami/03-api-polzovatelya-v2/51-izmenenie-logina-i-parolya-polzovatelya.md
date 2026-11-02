---
title: "Cambio del nombre de usuario y la contraseña de un usuario"
---

Esta API permite cambiar el nombre de usuario (login) y la contraseña de un usuario existente en el sistema PILOT.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

-   cmd=update\_user\_auth — comando para editar los datos de autenticación
    
-   login — nuevo nombre de usuario (login)
    
-   password — nueva contraseña del usuario
    
-   user\_id — identificador del usuario cuyos datos se van a cambiar
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=update_user_auth&amp;login=TestAPI&amp;password=qwerty&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor sobre el resultado de la acción
