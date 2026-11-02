---
title: "Bloqueo o desbloqueo de objetos"
---

Esta API bloquea o desbloquea objetos según los parámetros agent\_id, imei o account\_id. Según el estado transmitido, el vehículo se bloqueará o se activará. El bloqueo o desbloqueo puede realizarse a partir de identificadores como el agente, el IMEI o el número de contrato.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Método

POST

### Parámetros de la solicitud

Obligatorios:

-   cmd=setvehblock  : comando para bloquear o desbloquear un vehículo.
    
-   status :  estado de bloqueo. Valor: 0, bloqueado; 1, activo (desbloqueado)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Debe indicarse uno de estos parámetros:

-   agentid: identificador del agente
    
-   imei: número IMEI del dispositivo
    
-   accountid: número de contrato
    

### Ejemplos de solicitud

Bloqueo de un vehículo por IMEI:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=0&amp;imei=1231231231&amp;node=1</div></td></tr></tbody></table>

Desbloqueo de un vehículo por agentid:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=1&amp;agentid=2914&amp;node=1</div></td></tr></tbody></table>

Respuesta

Si el vehículo se bloquea o desbloquea correctamente, recibirá la siguiente respuesta:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "status": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de respuesta. Valor:
    
    — 0: la operación se realizó correctamente
    
    — otros valores posibles: errores como 400 o 500, si se produjeron problemas.
    
-   data: datos sobre el bloqueo o desbloqueo
    
-   agentid: identificador del agente cuyo estado se modificó
    
-   status: estado del vehículo: 0, bloqueado; 1, activo (desbloqueado)
    
-   msg: mensaje sobre el éxito de la operación
