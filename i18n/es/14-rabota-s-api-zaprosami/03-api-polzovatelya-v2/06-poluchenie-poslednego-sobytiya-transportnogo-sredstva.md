---
title: "Obtención del último evento de un vehículo"
---

La API sirve para obtener el último evento de un vehículo de las últimas 24 horas.

El método admite la correspondencia de cuentas: el usuario puede obtener el evento de un vehículo de una cuenta vinculada si tiene acceso a ese vehículo.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:

https://<server\_address>/api/v3/events/live

Sustituya <server\_address> por la dirección del servidor PILOT.

### Parámetros de la solicitud

Añada a la dirección de la solicitud el parámetro:

-   agent\_id: identificador del vehículo en PILOT.
    

El vehículo debe estar disponible para el usuario autorizado.

## Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>GET https://&lt;server_address&gt;/api/v3/events/live?agent_id=2000</div><div>Authorization: Bearer &lt;token&gt;</div><div>X-Node: 0</div></td></tr></tbody></table>

### Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "events": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "Cotract Number": 1102,</div><div>&nbsp; &nbsp; &nbsp; "Company Name": "Boooch Test",</div><div>&nbsp; &nbsp; &nbsp; "AgentId": 2000,</div><div>&nbsp; &nbsp; &nbsp; "VehicleID": "10-14262 Sunny",</div><div>&nbsp; &nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; &nbsp; "EventID": 4531206,</div><div>&nbsp; &nbsp; &nbsp; "Event Type": 103,</div><div>&nbsp; &nbsp; &nbsp; "Event Message": "SpeedN|110|&gt;|112|10|ss|17",</div><div>&nbsp; &nbsp; &nbsp; "Event Start Time": 1785746496,</div><div>&nbsp; &nbsp; &nbsp; "Event Start Speed": null,</div><div>&nbsp; &nbsp; &nbsp; "Event Start location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.164997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.235535"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "Event End Time": null,</div><div>&nbsp; &nbsp; &nbsp; "Event duration": null</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "process_time": 0.0222</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución de la solicitud. El valor 0 significa que se ejecutó correctamente
    
-   msg: resultado de la ejecución de la solicitud
    
-   events: arreglo de eventos encontrados
    
-   process\_time: tiempo de procesamiento de la solicitud en segundos
    

El arreglo events contiene:

-   Cotract Number: identificador de la cuenta a la que pertenece el vehículo
    
-   Company Name: nombre de la cuenta
    
-   AgentId: identificador del vehículo en PILOT
    
-   VehicleID: nombre del vehículo
    
-   Road Type: tipo de superficie de la carretera. En la versión actual se devuelve Blacktop
    
-   EventID: identificador del evento
    
-   Event Type: tipo de evento
    
-   Event Message: texto del evento
    
-   Event Start Time: hora de inicio del evento en formato Unix timestamp
    
-   Event Start Speed: velocidad en el momento de inicio del evento. Si no hay datos, se devuelve null
    
-   Event Start location: coordenadas del vehículo en el momento de inicio del evento:
    
-   lat: latitud
    
-   lon: longitud
    
-   Event End Time: hora de finalización del evento en formato Unix timestamp. Si no hay datos, se devuelve null
    
-   Event duration: duración del evento en segundos. Se calcula como la diferencia entre la hora de finalización y la hora de inicio del evento. Si falta alguno de los valores, se devuelve null
