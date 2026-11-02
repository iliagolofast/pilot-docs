---
title: "Resumen diario de un vehículo"
---

Esta API obtiene los datos de un vehículo de las últimas 24 horas, incluidos kilometraje, nivel de combustible, repostajes y consumo de combustible.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = vehinfo\_24\_hours: comando para obtener la información de 24 horas
    
-   agent\_id: identificador del vehículo (pueden indicarse varios, separados por comas)
    
-   imei: identificador del dispositivo (pueden indicarse varios, separados por comas)
    
-   ts: marca de tiempo (Unix timestamp)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=vehinfo_24_hours&amp;imei=10518,165182&amp;ts=1617710825&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "10518": {</div><div>&nbsp; &nbsp; "total_mileage": 745851.44,</div><div>&nbsp; &nbsp; "fuel_start": 229.37,</div><div>&nbsp; &nbsp; "fuel_stop": 229.37,</div><div>&nbsp; &nbsp; "fuel_fill": 409.6,</div><div>&nbsp; &nbsp; "fuel_drain": 153.15,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 256.45,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 35,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 161.5658,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 22,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; },</div><div>&nbsp; "165182": {</div><div>&nbsp; &nbsp; "total_mileage": 100946.68,</div><div>&nbsp; &nbsp; "fuel_start": 0,</div><div>&nbsp; &nbsp; "fuel_stop": 0,</div><div>&nbsp; &nbsp; "fuel_fill": 0,</div><div>&nbsp; &nbsp; "fuel_drain": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 22.313,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 10,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   total\_mileage: kilometraje total
    
-   fuel\_start: cantidad de combustible al inicio del período
    
-   fuel\_stop: cantidad de combustible al final del período
    
-   fuel\_fill: repostaje
    
-   fuel\_drain: drenaje de combustible
    
-   fuel consumption (l): consumo real de combustible
    
-   fuel consumption (l/100km): consumo por cada 100 km
    
-   fuel\_consumption\_norm(l): consumo normativo de combustible
    
-   fuel\_consumption\_norm(l/100km): consumo normativo por cada 100 km
    
-   engine hours: horas de motor
