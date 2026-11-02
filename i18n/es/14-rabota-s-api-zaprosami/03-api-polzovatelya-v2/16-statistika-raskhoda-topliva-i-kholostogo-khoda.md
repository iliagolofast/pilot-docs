---
title: "Estadísticas de consumo de combustible y de ralentí"
---

Esta API obtiene datos sobre cuánto combustible se consumió durante el período de tiempo seleccionado, así como cuánto tiempo funcionó el vehículo al ralentí.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=fuelconsumtion: comando para obtener el informe
    
-   imei: identificador único del vehículo
    
-   start: hora de inicio de la selección (Unix timestamp)
    
-   stop: hora de fin de la selección (Unix timestamp)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=fuelconsumtion&amp;imei=7157153151020&amp;start=1644741475&amp;stop=1644914275&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "7157153151020": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "idle": 98872,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fuel consumed": 457.92</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0 = correcto, otros valores = error)
    
-   data: datos del objeto seleccionado:
    
-   idle: tiempo de funcionamiento del motor al ralentí (en segundos)
    
-   fuel consumed: volumen de combustible consumido durante el período indicado (litros)
    
-   message: mensaje de texto con el resultado
