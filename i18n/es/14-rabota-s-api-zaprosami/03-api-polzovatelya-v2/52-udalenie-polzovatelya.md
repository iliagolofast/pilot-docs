---
title: "Eliminación de un usuario"
---

Esta API elimina a un usuario existente en el sistema PILOT según su identificador.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

DELETE

### Parámetros de la solicitud

-   cmd=remove\_user — comando para eliminar un usuario
    
-   user\_id — identificador del usuario que se va a eliminar
    
-   node — número del nodo en el que debe ejecutarse el comando (opcional)
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_user&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success remove"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg— mensaje del servidor sobre el resultado de la acción
