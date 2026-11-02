---
title: "Lista de paradas de una ruta"
---

Esta API devuelve la lista de todas las paradas de la ruta indicada, con información sobre las coordenadas, el tipo de parada, el orden de las paradas y la tarifa del viaje.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para realizar la solicitud, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=stopList — comando para obtener la lista de paradas
    
-   line\_num — número de la ruta
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stopList&amp;line_num=1Б&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "line": {</div><div>&nbsp; &nbsp; "id": 1083,</div><div>&nbsp; &nbsp; "name": "1Б",</div><div>&nbsp; &nbsp; "number": "1Б",</div><div>&nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; "description": "1Б",</div><div>&nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; "interval": 25,</div><div>&nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5085,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Центр занятости",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3315",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5086,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Автовокзал",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9039",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3236",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   id— identificador único de la ruta/parada
    
-   name— nombre de la ruta o de la parada
    
-   number— número de la ruta
    
-   bidirectional— 1, si la ruta es bidireccional
    
-   active— 1, si la ruta está activa
    
-   price— tarifa del viaje
    
-   interval— intervalo de paso en minutos
    
-   stops— arreglo de paradas de la ruta:
    
-   lat, lon — coordenadas de la parada
    
-   radius— radio de la zona de la parada en metros
    
-   stop\_type— tipo de parada: 0, normal; 1, técnica; 2, terminal
    
-   stop\_order— orden de la parada dentro de la ruta
    
-   silent— 1: no generar mensajes para esta parada
