---
title: "Estado del objeto y distancia a un punto o a una geocerca"
---

Esta API transmite el estado actual de un vehículo, así como el tiempo y la distancia hasta un punto o una geocerca determinados.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = get\_status\_and\_distance: comando para obtener el estado y la distancia
    
-   vehnum: número de flota o matrícula del automóvil; se pueden indicar varios, separados por comas
    
-   zone: nombre de la geocerca (si es necesario calcular la distancia hasta la zona)
    
-   point: coordenadas del punto en formato latitud,longitud (si se necesita la distancia hasta un punto concreto)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplos de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;zone=Госпиталь%20Лапино&amp;node=1</div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;point=55.923032,37.659668&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "cstatus": 6,</div><div>&nbsp; "cstatus_timestamp": 1554985159,</div><div>&nbsp; "destination_name": "Zero coordinates",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "length": 27613,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "point": "55.923032,37.659668",</div><div>&nbsp; &nbsp; "time": 2002,</div><div>&nbsp; &nbsp; "type": "point"</div><div>&nbsp; },</div><div>&nbsp; "ignition": 1,</div><div>&nbsp; "rbu": "08",</div><div>&nbsp; "sensors": {</div><div>&nbsp; &nbsp; "Unloading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Loading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Ignition Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "FUEL SENSORS OPERATION SENSORS": "Operating|1554985138",</div><div>&nbsp; &nbsp; "Fuel ... fuel": "202.96 Liter|1554995669"</div><div>&nbsp; },</div><div>&nbsp; "source_name": "Loading_Chertanovo",</div><div>&nbsp; "status": 4,</div><div>&nbsp; "status_timestamp": 1554985072,</div><div>&nbsp; "unixtimestamp": 1554995864,</div><div>&nbsp; "vehiclenumber": "М897ЕТ777",</div><div>&nbsp; "zone": []</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   cstatus: estado actual del objeto
    
-   cstatus\_timestamp: hora de registro del estado (Unix timestamp)
    
-   destination\_name: nombre del punto de destino
    
-   distance: objeto con información sobre la distancia y el tiempo hasta el punto o la zona:
    
-   length: distancia en metros
    
-   time: tiempo en segundos
    
-   type: tipo de objeto (point o zone)
    
-   point: coordenadas del punto (si type=point)
    
-   ignition: estado del encendido (1 = activado)
    
-   rbu: identificador de la planta de hormigón (RBU)
    
-   sensors: estado de diversos sensores (por ejemplo, carga/descarga, combustible)
    
-   source\_name: nombre de la fuente de datos
    
-   status: estado del objeto
    
-   status\_timestamp: hora del último cambio de estado
    
-   unixtimestamp: hora de recepción de los datos
    
-   vehiclenumber: matrícula del vehículo
    
-   zone: arreglo con las zonas actuales (si las hay)
