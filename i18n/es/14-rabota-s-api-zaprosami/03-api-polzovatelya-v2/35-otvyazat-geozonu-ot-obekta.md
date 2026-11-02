---
title: "Desvincular una geocerca de un objeto"
---

Esta API elimina la vinculación de una geocerca existente con un vehículo.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=geofenceunlink: comando para eliminar la vinculación de la geocerca
    
-   zone\_id: identificador de la geocerca (obligatorio si no se indica external\_id)
    
-   external\_id: identificador externo de la geocerca (opcional; se ignora si se indica zone\_id)
    
-   agent\_id: identificador del agente (vehículo)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>http://&lt;address&gt;/api/api.php?cmd=geofenceunlink&amp;zone_id=158414&amp;agent_id=66497&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

En la respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor sobre el resultado de la acción
