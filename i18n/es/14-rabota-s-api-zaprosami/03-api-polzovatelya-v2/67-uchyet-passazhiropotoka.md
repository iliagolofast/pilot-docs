---
title: "Conteo de pasajeros"
---

Esta API se utiliza para obtener datos de flujo de pasajeros en vehículos equipados con el sistema de autoconductor (conteo automático de pasajeros).

Con ella puede:

— ver cuántos pasajeros subieron y bajaron en cada parada

 — obtener las coordenadas de las paradas, la hora del evento y el identificador de video (si el sistema admite grabación de video)

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd= pass\_counter — comando para llamar a la API
    
-   ts — hora de inicio de la selección en formato Unix timestamp
    
-   te — hora de fin de la selección en formato Unix timestamp
    
-   node — número del nodo en el que debe ejecutarse el comando
    

Adicionalmente:

-   imei — IMEI del vehículo equipado con autoconductor. Si no se indica, la selección incluirá todos los vehículos con el equipo
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=pass_counter&amp;ts=1554670800&amp;te=1554757200&amp;imei=963852741159753&amp;node=1</div></td></tr></tbody></table>

### Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "36571": {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 36571,</div><div>&nbsp; &nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9346",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.8981",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554696995,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 13</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9238",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.9098",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554697232,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 14</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "autoconductor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de ejecución (0 = correcto)
    
-   msg — mensaje de estado (por ejemplo, OK)
    
-   data — objeto principal con los datos del flujo de pasajeros.
    
-   agent\_id — ID del vehículo en el sistema
    
-   vehiclenumber — número interno del vehículo o nombre del equipo (por ejemplo, autoconductor)
    
-   stops — arreglo de paradas con los datos del flujo de pasajeros
    
-   busline\_id — ID de la ruta
    
-   door\_id — número de la puerta por la que se registró el movimiento de pasajeros
    
-   lat — latitud de la parada
    
-   lon — longitud de la parada
    
-   p\_in — número de pasajeros que subieron
    
-   p\_out — número de pasajeros que bajaron
    
-   ts — hora del evento (Unix timestamp)
    
-   video\_id — ID de la grabación de video asociada al evento (si existe)
