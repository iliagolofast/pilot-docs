---
title: "Actualizar la lista de carpetas"
---

Esta API permite cambiar el conjunto de carpetas a las que tiene acceso un usuario concreto.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

POST

### Parámetros de la solicitud

-   cmd=update\_user\_folders — comando para actualizar la lista de carpetas
    
-   folders — lista de ID de carpetas, separados por comas, que se deben asignar al usuario
    
-   user\_id — identificador del usuario cuyas carpetas se modifican
    

Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_folders",</div><div>&nbsp; &nbsp; "folders": "1,11",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor sobre el resultado de la acción
