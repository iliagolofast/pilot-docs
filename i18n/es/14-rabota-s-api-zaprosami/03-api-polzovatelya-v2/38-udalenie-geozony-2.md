---
title: "Eliminación de una geocerca"
---

Esta API elimina una geocerca del sistema. Al eliminar una geocerca, se quitan automáticamente todas sus asignaciones a vehículos.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para realizar la solicitud, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=geofencedel — comando para eliminar una geocerca
    
-   zone\_id — identificador interno de la geocerca
    
-   external\_id — identificador externo de la geocerca (opcional)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencedel&amp;zone_id=473989&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"data": {</div><div>&nbsp;"zones_deleted": [</div><div>&nbsp;473989</div><div>&nbsp;]</div><div>&nbsp;}</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   message — mensaje del servidor sobre el resultado de la acción
    
-   data.zones\_deleted — arreglo de ID de las geocercas eliminadas (zone\_id) para las que la operación se realizó correctamente
