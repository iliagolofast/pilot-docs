---
title: "Lista de geocercas"
---

Esta API devuelve la lista de todas las geocercas con sus características, incluidas las coordenadas, el tipo, el color y el grupo.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=geofencelist: comando para obtener la lista de geocercas
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencelist&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 157828,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "Test Magnit",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 2,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": null,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#00CC00",</div><div>&nbsp; &nbsp; &nbsp; "info": "geozone text info",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Circle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [40.036497, 46.981936],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 305</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 153244,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "school",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": 1234,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#FF9900",</div><div>&nbsp; &nbsp; &nbsp; "info": "kml upload",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Polygon",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184334, 25.112866],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183512, 25.113472],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.182154, 25.112516],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183511, 25.111016],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184923, 25.112133]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

En la respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor
    
-   data: arreglo de objetos de geocercas, cada uno de los cuales contiene:
    
-   id: identificador de la geocerca
    
-   zonename: nombre de la geocerca
    
-   zonetype: tipo de geocerca (1, polígono; 2, círculo)
    
-   external\_id: identificador externo (si existe)
    
-   created\_at: hora de creación (Unix timestamp)
    
-   updated\_at: hora de actualización (Unix timestamp)
    
-   color: color de la geocerca en la interfaz
    
-   info: información adicional
    
-   group\_name: nombre del grupo de geocercas
    
-   group\_id: identificador del grupo
    
-   geometry: geometría de la zona:
    
-   type: tipo (Circle o Polygon)
    
-   coordinates: coordenadas (para un círculo: \[longitud, latitud\]; para un polígono: arreglo de arreglos de coordenadas)
    
-   radius: radio de la geocerca circular (en metros)
