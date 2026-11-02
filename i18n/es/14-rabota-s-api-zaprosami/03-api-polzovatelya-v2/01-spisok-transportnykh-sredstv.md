---
title: "Lista de vehículos"
---

Esta API transmite información sobre los vehículos, incluida su ubicación actual, los datos de los sensores, la información técnica y los parámetros adicionales.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada un comando a la dirección de la solicitud.

-   cmd=list: comando para obtener la lista de vehículos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

El formato de los datos solicitados es un arreglo de datos de vehículos.

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=list</span>&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "list": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "agentid": 9003,</span></div><div><span>&nbsp; &nbsp; &nbsp; "imei": "356307046873054",</span></div><div><span>&nbsp; &nbsp; &nbsp; "typeid": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "Car",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vehiclenumber": "Х444МР123",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vin": "TRDFG65876",</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": "Geo-Center OOO",</span></div><div><span>&nbsp; &nbsp; &nbsp; "created_time": 1414224633,</span></div><div><span>&nbsp; &nbsp; &nbsp; "current_mileage": 881,</span></div><div><span>&nbsp; &nbsp; &nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1418744535",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "43.5562",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.9084",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 268,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 246,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Parking", "description": "TEST SPEED" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Fuel sensor", "description": "Fuel sensor" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "External power supply", "description": "External power supply" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Ignition sensor", "description": "Ignition sensor" }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ],</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors_status": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187852",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "off",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "External power supply",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187851",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "26.27 V",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "26.27",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "26272",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Fuel sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187850",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1 l",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1626336197",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ]</span></div><div><span>&nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de estado (0, correcto)
    
-   msg: mensaje de estado
    
-   list: arreglo de objetos de vehículos, cada uno de los cuales contiene:
    
-   agentid: identificador único del dispositivo de seguimiento
    
-   imei: identificador internacional del equipo móvil
    
-   typeid: identificador numérico del tipo de vehículo
    
-   type: tipo de vehículo
    
-   vehiclenumber: número de matrícula del vehículo
    
-   vin: número de identificación del vehículo
    
-   folder: grupo organizativo
    
-   created\_time: hora de adición al sistema en formato Unixtimestamp
    
-   current\_mileage: kilometraje actual
    
-   status: información sobre el estado actual:
    
-   unixtimestamp: hora de la última actualización
    
-   lat: latitud
    
-   lon: longitud
    
-   speed: velocidad
    
-   dir: dirección de movimiento en grados
    
-   alt: altitud sobre el nivel del mar
    
-   satsinview: número de satélites GPS visibles
    
-   sensors: arreglo de sensores disponibles
    
-   sensors\_status: estado detallado de cada sensor, incluido:
    
-   name: nombre del sensor
    
-   id: identificador del sensor
    
-   hum\_value: valor real tras la calibración
    
-   dig\_value: valor digital tras la calibración
    
-   raw\_value: valor sin procesar antes de la calibración
    
-   change\_ts: hora del último cambio del valor
    
-   group: grupo de sensores
