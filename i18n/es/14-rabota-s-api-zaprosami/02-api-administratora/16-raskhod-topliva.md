---
title: "Consumo de combustible"
---

Esta API obtiene los datos de consumo de combustible de un vehículo concreto durante el período de tiempo seleccionado.

Se devuelve información sobre repostajes, combustible consumido, drenajes y lecturas de los sensores de combustible al inicio y al final del período.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=fuel: comando para obtener los datos de combustible
    
-   ts: fecha de inicio de la selección en formato Unix timestamp
    
-   te: fecha de fin de la selección en formato Unix timestamp
    
-   agentid: ID del vehículo (agent\_id)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=fuel&amp;ts=1708981200&amp;te=1709154000&amp;agentid=6477&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "fill": 100,&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "fuel": 84, &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stale": 0,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stop": 43 &nbsp; &nbsp;</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado de la solicitud (0 = solicitud correcta)
    
-   fill: cantidad de combustible repostado durante el período
    
-   fuel: cantidad de combustible consumido
    
-   stale: cantidad de combustible drenado o perdido
    
-   start: lectura del sensor de combustible al inicio del período
    
-   stop: lectura del sensor de combustible al final del período
    
-   msg: mensaje de texto con el resultado de la solicitud
