---
title: "Kilometraje durante un período determinado"
---

Esta API devuelve el kilometraje y las horas de motor de un vehículo durante el intervalo de tiempo seleccionado.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

-   cmd=istatus: comando para obtener el kilometraje
    
-   imei: identificador del objeto en el sistema
    
-   start: inicio del intervalo (Unix timestamp)
    
-   stop: fin del intervalo (Unix timestamp)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;imei=6794i&amp;start=1664917200&amp;stop=1665003600&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "run": 126.79500000000007,</div><div>&nbsp; "run_by_can": 0,</div><div>&nbsp; "motorhours": 9897,</div><div>&nbsp; "unixtimestamp_start": 1664917200,</div><div>&nbsp; "unixtimestamp_stop": 1665003600</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   run: kilometraje durante el período, km
    
-   run\_by\_can: kilometraje según los datos CAN, km
    
-   motorhours: horas de motor durante el período, segundos
    
-   unixtimestamp\_start: inicio del intervalo
    
-   unixtimestamp\_stop: fin del intervalo
