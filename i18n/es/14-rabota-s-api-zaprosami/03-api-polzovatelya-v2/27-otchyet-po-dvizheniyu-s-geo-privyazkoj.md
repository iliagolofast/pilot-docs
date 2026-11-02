---
title: "Informe de movimiento con georreferenciación"
---

Esta API permite obtener un informe de los desplazamientos de un vehículo durante el período seleccionado, con indicación de coordenadas e información geográfica (dirección, distrito, ciudad, etc.). Los datos contienen información sobre el inicio y el fin de cada tramo de movimiento, la velocidad media y máxima, la longitud del trayecto y el lugar según las coordenadas geográficas.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = rungeo: comando para obtener el informe
    
-   imei: identificador único del objeto en el sistema
    
-   start: hora de inicio de la selección en formato Unix timestamp
    
-   stop: hora de fin de la selección en formato Unix timestamp
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rungeo&amp;imei=356307045913463&amp;start=1439413200&amp;stop=1439586000&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "tracks": {</div><div>&nbsp; &nbsp; "1439443509": {</div><div>&nbsp; &nbsp; &nbsp; "avgspeed": 35.3889,</div><div>&nbsp; &nbsp; &nbsp; "length": 12.7304,</div><div>&nbsp; &nbsp; &nbsp; "maxspeed": 59,</div><div>&nbsp; &nbsp; &nbsp; "ts": 1439443509,</div><div>&nbsp; &nbsp; &nbsp; "te": 1439445837,</div><div>&nbsp; &nbsp; &nbsp; "slat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "slon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "elat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "elon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "sgeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya ulitsa",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "egeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya Street",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución (0 = correcto)
    
-   msg: mensaje de estado
    
-   tracks: objeto cuyas claves son las marcas de tiempo de inicio del viaje (Unix timestamp) y cuyos valores son los datos de cada viaje
    

Estas claves son al mismo tiempo los identificadores únicos de los recorridos (track\_id), que se pueden utilizar en la solicitud del método [gettrack](dannye-treka.html) para obtener los puntos detallados de la ruta.

Para cada viaje:

-   avgspeed: velocidad media (km/h)
    
-   maxspeed: velocidad máxima (km/h)
    
-   length: longitud de la ruta (km)
    
-   ts: hora de inicio del viaje (Unix timestamp)
    
-   te: hora de fin del viaje (Unix timestamp)
    
-   slat, slon: coordenadas de inicio (latitud, longitud)
    
-   elat, elon: coordenadas de fin
    
-   sgeo: dirección del lugar de inicio (ciudad, calle, número, código postal)
    
-   egeo: dirección del lugar de finalización
