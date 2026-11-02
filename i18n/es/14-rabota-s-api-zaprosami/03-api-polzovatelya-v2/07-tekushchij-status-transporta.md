---
title: "Estado actual del vehículo"
---

Esta API se utiliza para obtener información actualizada sobre el estado actual de uno o varios vehículos, incluidos los datos de ubicación, velocidad, lecturas de los sensores y estado técnico.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada parámetros a la dirección de la solicitud. Los parámetros se indican después del signo de interrogación «?» y se separan con el signo «&».

-   cmd = status: comando para obtener la información de estado
    
-   imei: identificador único del rastreador GPS
    
-   agents: lista de identificadores agentid, separados por comas, para solicitar el estado de varios objetos
    
-   veh\_numbers: matrícula del vehículo, exactamente como figura en el sistema, respetando obligatoriamente las mayúsculas y minúsculas de letras y números
    
-   node: número del nodo en el que se debe ejecutar el comando
    

<table><tbody><tr><td><span></span></td><td><div>La solicitud debe incluir uno de los tres parámetros: imei, agents o veh_numbers.</div></td></tr></tbody></table>

## Ejemplos

### Solicitud por IMEI

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=status&amp;imei=357073296325265<span>&amp;node=1</span></div></td></tr></tbody></table>

###  Solicitud por varios identificadores de agentes

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=status&amp;agents=51594,44841&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 44841,</div><div>&nbsp; &nbsp; &nbsp; "imei": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM2200",</div><div>&nbsp; &nbsp; &nbsp; "typeid": 27,</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "NURKA",</div><div>&nbsp; &nbsp; &nbsp; "folder": "REAL",</div><div>&nbsp; &nbsp; &nbsp; "created_time": 1518167398,</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 65345,</div><div>&nbsp; &nbsp; &nbsp; "initial_mileage": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": null,</div><div>&nbsp; &nbsp; &nbsp; "model": "ВАЗ (Lada) Kalina",</div><div>&nbsp; &nbsp; &nbsp; "info": " test",</div><div>&nbsp; &nbsp; &nbsp; "vin": "XTA219470K0259832",</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 27,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "47.119755",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.667492",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "moving": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking": 9267,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "firing": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "sensors_status": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "150549",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "выкл.",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621423461",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "GROUP!"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Датчик топлива",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "368013",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1249.4 -",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1249.4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "myGroup"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "reqest_time": 0.0642</div><div>}</div></td></tr></tbody></table>

La respuesta se devuelve en formato JSON y contiene:

 imei: número único del rastreador

-   distance: distancia recorrida durante el período indicado
    
-   agent\_id :  identificador del dispositivo de seguimiento
    
-   account\_id: número de cuenta en el sistema
    
-   code: código de estado (0 = correcto)
    
-   msg: mensaje sobre el estado de ejecución de la solicitud
    
-   data: arreglo de objetos con información sobre los vehículos:
    
-   agentid: identificador del contrato
    
-   imei: identificador internacional del dispositivo de seguimiento
    
-   vin: número de identificación del vehículo
    
-   configuration: modelo del rastreador
    
-   typeid: identificador numérico del tipo de vehículo
    
-   type: tipo de vehículo
    
-   vehiclenumber: número de matrícula del vehículo
    
-   folder: grupo organizativo o sucursal
    
-   created\_time: hora de creación en formato Unixtimestamp
    
-   uniqid: identificador único
    
-   current\_mileage: kilometraje actual
    
-   initial\_mileage: kilometraje inicial
    
-   driver\_name: nombre del conductor
    
-   driver\_phone: teléfono del conductor
    
-   model: modelo del vehículo
    
-   info: información adicional
    
-   status: información sobre el estado actual:
    
-   active: si el objeto está activo (1 o 0)
    
-   speed: velocidad actual
    
-   direction: dirección actual en grados
    
-   lat: latitud actual
    
-   lon: longitud actual
    
-   alt: altitud actual
    
-   satsinview: número de satélites visibles
    
-   unixtimestamp: hora de la última actualización
    
-   moving: tiempo en movimiento en segundos
    
-   parking: tiempo de estacionamiento en segundos
    
-   firing: estado del encendido (1, activado; 0, desactivado)
    
-   sensors\_status: arreglo con información sobre los sensores:
    
-   name: nombre del sensor
    
-   id: identificador del sensor
    
-   hum\_value: valor real tras la calibración
    
-   dig\_value: valor digital tras la calibración
    
-   raw\_value: valor sin procesar antes de la calibración
    
-   change\_ts: hora del último cambio del valor en formato Unixtimestamp
    
-   group: grupo del sensor
    
-   reqest\_time: tiempo de ejecución de la solicitud en segundos
