---
title: "Odómetro y combustible durante un período"
---

Esta API obtiene información sobre el kilometraje (lecturas del odómetro) y el consumo de combustible de un vehículo durante el intervalo de tiempo seleccionado.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

-   cmd=odo\_and\_fuel: comando para obtener los datos del odómetro y del combustible
    
-   imei: identificador del dispositivo (ID del objeto)
    
-   start: hora de inicio del período en formato Unix timestamp
    
-   stop: hora de fin del período en formato Unix timestamp
    
-   node: número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=odo_and_fuel<span>&amp;start=1767214800&amp;stop=1767560400&amp;imei=861076084529922&amp;node=6</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "ok",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fuel": 7.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start_odo": 407121.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_odo": 407229.4</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor
    
-   fuel: cantidad de combustible consumido durante el período
    
-   start\_odo: lectura del odómetro al inicio del período
    
-   stop\_odo: lectura del odómetro al final del período
