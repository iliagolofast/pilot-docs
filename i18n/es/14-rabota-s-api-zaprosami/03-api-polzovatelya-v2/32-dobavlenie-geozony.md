---
title: "Adición de una geocerca"
---

Esta API crea una nueva geocerca, indicando su nombre, tipo, color, grupo y geometría.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=geofenceadd: comando para añadir una geocerca
    
-   zonename: nombre de la geocerca
    
-   zonetype: tipo de zona (1, polígono; 2, círculo)
    
-   color: color de la zona en formato HEX (por ejemplo, #FFFFFF)
    
-   info: información de texto sobre la geocerca
    
-   group\_name: nombre del grupo de geocercas (se crea si no existe, opcional)
    
-   group\_id: ID de un grupo existente (si se indica, group\_name se ignora, opcional)
    
-   geometry: GEOJson con la descripción del polígono o del círculo
    
-   external\_id: identificador externo de la geocerca (opcional)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

Polígono:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=1&amp;zonename=test_api_polygon&amp;external_id=12354&amp;info=blabla&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Polygon","coordinates":[[[55.184334,25.112866],[55.183512,25.113472],[55.182154,25.112516],[55.183511,25.111016],[55.184923,25.112133]]]}&amp;node=1</div></td></tr></tbody></table>

Círculo:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=2&amp;zonename=test_api_circle&amp;external_id=12345&amp;info=circle_info&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Circle","coordinates":[55.184334,25.112866],"radius":150}&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": 158412,</div><div>&nbsp; &nbsp; "zonename": "test_api_polygon",</div><div>&nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; "external_id": "12354",</div><div>&nbsp; &nbsp; "created_at": 1610536445,</div><div>&nbsp; &nbsp; "updated_at": 1610536445,</div><div>&nbsp; &nbsp; "color": "#FF3300",</div><div>&nbsp; &nbsp; "info": "blabla",</div><div>&nbsp; &nbsp; "group_id": 6984</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

En la respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor
    
-   data: objeto con información sobre la geocerca creada:
    
-   id: identificador de la geocerca
    
-   zonename: nombre de la geocerca
    
-   zonetype: tipo de zona (1, polígono; 2, círculo)
    
-   external\_id: identificador externo
    
-   created\_at: hora de creación (Unix timestamp)
    
-   updated\_at: hora de actualización (Unix timestamp)
    
-   color: color de la geocerca
    
-   info: información de texto
    
-   group\_id: identificador del grupo de geocercas
