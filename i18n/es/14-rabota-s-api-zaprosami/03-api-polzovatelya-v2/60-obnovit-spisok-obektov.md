---
title: "Actualizar la lista de objetos"
---

Esta API asigna al usuario acceso únicamente a los vehículos seleccionados.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

POST

### Parámetros de la solicitud

-   cmd=update\_user\_vehicles — comando para cambiar la lista de objetos
    
-   vehicles — lista de identificadores de objetos (ID de vehículos), separados por comas.
    
-   user\_id — identificador del usuario cuyo acceso se actualiza
    
-   node — número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_vehicles",</div><div>&nbsp; &nbsp; "vehicles": "2,18",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor
