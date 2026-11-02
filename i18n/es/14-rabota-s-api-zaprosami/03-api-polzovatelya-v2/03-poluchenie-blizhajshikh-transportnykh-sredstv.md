---
title: "Obtención de los vehículos más cercanos"
---

La API sirve para buscar vehículos dentro de un radio determinado a partir de un punto indicado, ordenados por distancia.

Es adecuada para escenarios de respuesta operativa (por ejemplo, policía o servicios especiales), cuando el operador necesita determinar rápidamente qué vehículos se encuentran más cerca del lugar del incidente.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada un comando a la dirección de la solicitud.

-   cmd= get\_nearest\_vehicles 
    
-   group\_id: ID del grupo de vehículos (orgdep.id)
    
-   lat: latitud del punto objetivo (de −90 a 90)
    
-   lon: longitud del punto objetivo (de −180 a 180)
    
-   radius: radio de búsqueda. Admite valores como 500M, 1KM, 10KM, 20KM o un número en metros
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_nearest_vehicles&amp;group_id=228&amp;lat=43.28191&amp;lon=76.90723&amp;radius=50KM</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>&nbsp;</div><div>&nbsp;{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "group_id": 123,</div><div>&nbsp; "group_name": "Police Fleet",</div><div>&nbsp; "location": { "latitude": 24.4539, "longitude": 54.3773 },</div><div>&nbsp; "radius_meters": 10000,</div><div>&nbsp; "vehicles_found": 2,</div><div>&nbsp; "vehicles": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "POL-001",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 456,</div><div>&nbsp; &nbsp; &nbsp; "veh_id": 789,</div><div>&nbsp; &nbsp; &nbsp; "imei": "123456789",</div><div>&nbsp; &nbsp; &nbsp; "model": "Toyota Land Cruiser",</div><div>&nbsp; &nbsp; &nbsp; "vehicle_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "address": "Sheikh Zayed Road, Dubai, UAE",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "latitude": 24.4550,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "longitude": 54.3780,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ignition": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1706964000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zone": []</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "distance": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "meters": 1234,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "kilometers": 1.23,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "straight_line_meters": 1200</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "travel_time": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "seconds": 180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "minutes": 3.0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "formatted": "3 min"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   group\_id: ID del grupo de vehículos
    
-   group\_name: nombre del grupo
    
-   location: coordenadas del punto objetivo
    
-   latitude: latitud
    
-   longitude: longitud
    
-   radius\_meters: radio de búsqueda en metros
    
-   vehicles\_found: número de vehículos encontrados
    
-   vehicles: arreglo de objetos con información sobre los vehículos:
    
-   vehiclenumber: matrícula del vehículo
    
-   agentid: ID del agente o dispositivo
    
-   veh\_id: ID del objeto
    
-   imei: IMEI del dispositivo
    
-   model: modelo del vehículo
    
-   vehicle\_type: tipo de vehículo (Car, Truck, etc.)
    
-   location: ubicación del vehículo
    
-   address: dirección (según los datos del geocodificador)
    
-   latitude, longitude, altitude
    
-   status: estado actual del vehículo
    
-   active: actividad (1 = en servicio)
    
-   speed: velocidad, km/h
    
-   direction: dirección de movimiento
    
-   altitude: altitud
    
-   satsinview: número de satélites
    
-   ignition: encendido (1 = activado)
    
-   unixtimestamp: hora del evento en formato UNIX
    
-   zone: arreglo de las geocercas actuales
    
-   distance: distancia al objetivo
    
-   meters: en metros
    
-   kilometers: en kilómetros
    
-   straight\_line\_meters: en línea recta, en metros
    
-   travel\_time: tiempo de desplazamiento estimado hasta el objetivo
    
-   seconds: en segundos
    
-   minutes: en minutos
    
-   formatted: tiempo con formato (por ejemplo, "3 min")
