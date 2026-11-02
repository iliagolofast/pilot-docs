---
title: "Obtención de puntos sin procesar de un objeto"
---

La API devuelve los datos sin procesar de los recorridos GPS de un vehículo durante el período indicado.

Esta solicitud solo puede realizarse para un período de no más de 10 días.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=rawpoints: comando para obtener los puntos sin procesar
    
-   ts: fecha de inicio de la selección en formato UNIX timestamp
    
-   te: fecha de fin de la selección en formato UNIX timestamp
    
-   agentid: identificador del vehículo
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?<span>cmd=rawpoints&amp;ts=1760216400&amp;te=1760302800&amp;agentid=157773</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 1,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215545",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706906",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 15,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 10,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14547;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022428</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 339,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215938",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706751",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 12,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14538;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022437</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "deb": [</div><div>&nbsp; &nbsp; 2914,</div><div>&nbsp; &nbsp; 1458022428,</div><div>&nbsp; &nbsp; 1458043980</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución de la solicitud (0, correcta)
    
-   data: arreglo de puntos:
    
-   agentid: identificador del vehículo
    
-   height/ altitude: altitud sobre el nivel del mar (m)
    
-   direction: dirección de movimiento (grados)
    
-   latitude/ longitude: coordenadas del punto
    
-   satsinview: número de satélites visibles
    
-   servertime: hora del servidor en UNIX timestamp
    
-   speed: velocidad en km/h
    
-   triggerdata: datos de los disparadores del dispositivo
    
-   unixtimestamp: hora del evento en UNIX timestamp
    
-   deb: arreglo de información de depuración (agentid, inicio y fin del período)
    
-   message: mensaje con el resultado de la solicitud
