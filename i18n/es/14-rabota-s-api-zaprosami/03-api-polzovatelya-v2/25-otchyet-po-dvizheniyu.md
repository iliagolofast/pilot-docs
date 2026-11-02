---
title: "Informe de movimiento"
---

Con esta API obtendrá información sobre los viajes de un vehículo durante el período seleccionado. Si el módulo «Geocercas» está activado, cada viaje se divide en tramos según la entrada y la salida de las zonas.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

Parámetros de la solicitud

-   cmd=run: comando para obtener el informe
    
-   imei: identificador único del objeto (vehículo)
    
-   start: hora de inicio de la selección en formato Unix timestamp
    
-   stop: hora de fin de la selección en formato Unix timestamp
    
-   zones: inclusión de la información de geocercas:
    
    — 0: los recorridos se incluyen completos, sin dividirlos por zonas
    
    — 1: los recorridos se dividen en tramos según los momentos de entrada y salida de las geocercas
    
-   eco: inclusión de los datos de conducción ecológica en los recorridos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=run&amp;imei=359772039289781&amp;start=1406318400&amp;stop=1406404800&amp;zones=1&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "zones": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "213854753412306",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Гараж",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3861",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7127",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 2</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406353422": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406353422,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "966971618589014",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Барнаульский автовокзал",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3508",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7593",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 1</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "tracks": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341955": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341955,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 0.26,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "17",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 17</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406353389,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 119.83,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "96",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 58</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; }</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

Arreglo de zonas (zones): puntos de entrada y salida de las geocercas:

-   ts: hora del evento (Unix timestamp)
    
-   stopuid: identificador único de la geocerca
    
-   stopname: nombre de la geocerca
    
-   lat: latitud del punto
    
-   lon: longitud del punto
    
-   msgtype: tipo de evento (1 = entrada, 2 = salida)
    

Arreglo de recorridos (tracks): información sobre los viajes:

-   ts: hora de inicio del viaje (Unix timestamp)
    
-   te: hora de fin del viaje (Unix timestamp)
    
-   length: longitud del viaje en kilómetros
    
-   maxspeed: velocidad máxima (km/h)
    
-   avgspeed: velocidad media (km/h)
    
-   lats: latitud del punto de inicio
    
-   lons: longitud del punto de inicio
    
-   late: latitud del punto final
    
-   lone: longitud del punto final
    
-   eco: datos de conducción ecológica (si el parámetro eco está activado):
    
-   Acceleration, Braking, Speed: indicadores de cada parámetro
