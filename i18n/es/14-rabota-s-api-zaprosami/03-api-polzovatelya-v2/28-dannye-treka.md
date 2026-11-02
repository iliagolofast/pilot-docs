---
title: "Datos del recorrido"
---

Esta API carga los puntos detallados de la ruta (recorrido) de un viaje obtenido previamente mediante el método [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html). Cada punto del recorrido contiene las coordenadas, la velocidad y la hora absoluta de registro del punto en formato Unix timestamp.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = gettrack: comando para obtener el recorrido.
    
-   id: identificador del recorrido, obtenido en la respuesta de la API [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html#трек_id)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettrack&amp;id=70685695&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "track_data": "47.2037;39.6325;10;1439443509:47.2037;39.6324;13;1439443510:47.2037;39.6323;15;1439443512:47.2036;39.6304;22;1439443568",</div><div>&nbsp; "track_id": 70685695,</div><div>&nbsp; "unixstarttimestamp": 1439443509</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   track\_id: identificador único del recorrido;
    
-   unixstarttimestamp: fecha y hora de inicio del recorrido en formato Unix timestamp;
    
-   track\_data: secuencia de puntos del recorrido, separados por dos puntos (:).
    

Cada punto del recorrido consta de cuatro valores separados por punto y coma (;):

1\. latitude: latitud;

2\. longitude: longitud;

3\. speed\_kmh: velocidad en km/h;

4\. point\_unix\_timestamp: hora absoluta de registro del punto en formato Unix timestamp, UTC.

Formato del punto:

<table><tbody><tr><td><span></span></td><td><div>latitude;longitude;speed_kmh;point_unix_timestamp</div></td></tr></tbody></table>

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div>47.2037;39.6325;10;1439443509</div></td></tr></tbody></table>

El valor 1439443509 es la hora absoluta de registro del punto, no el número de segundos desde el inicio del recorrido.

Para calcular el tiempo transcurrido desde el inicio del recorrido, utilice la fórmula: elapsed\_seconds = point\_unix\_timestamp - unixstarttimestamp. Por ejemplo: 1439443568 - 1439443509 = 59
