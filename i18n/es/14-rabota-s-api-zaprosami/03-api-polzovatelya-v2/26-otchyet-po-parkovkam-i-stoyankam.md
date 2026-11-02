---
title: "Informe de estacionamientos y paradas"
---

Esta API obtiene información sobre las paradas y los estacionamientos de un vehículo durante el período indicado. Se pueden conocer las coordenadas, la duración y la dirección del lugar de la parada o del estacionamiento.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=runstops: comando de la API para obtener el informe de paradas y estacionamientos
    
-   imei: identificador del vehículo en el sistema
    
-   start: hora de inicio de la selección (Unix timestamp)
    
-   stop: hora de fin de la selección (Unix timestamp)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=runstops&amp;start=1676840400&amp;stop=1676926800&amp;imei=16518<span>&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676840400,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676873376,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 32976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.733388",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "61.051853",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Р-351",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Белоярский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "624053",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676875342,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676880065,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 4723,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.893278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "60.770452",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Екатеринбургская кольцевая автомобильная дорога",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Берёзовский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623703",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "parkings": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676887881,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676889637,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 1756,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.781017",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "58.40189",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Подъезд к д. Зобнина от км 216+740 а/д «г. Пермь — г. Екатеринбург»",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Achitsky District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623235",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, correcto)
    
-   msg: mensaje del servidor (por ejemplo, "OK")
    
-   stops: arreglo de datos de paradas:
    
-   ts: hora de inicio de la parada (Unix timestamp)
    
-   te: hora de fin de la parada (Unix timestamp)
    
-   dur: duración de la parada en segundos
    
-   lat: latitud del punto
    
-   lon: longitud del punto
    
-   address: información de la dirección de la parada (calle, distrito, provincia, región, código postal, país, código de país)
    
-   parkings: arreglo de datos de estacionamientos (con los mismos campos que stops)
