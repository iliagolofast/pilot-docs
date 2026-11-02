---
title: "Tiempo de inactividad de un vehículo"
---

Esta API devuelve la lista de períodos de inactividad de un vehículo durante el intervalo de tiempo seleccionado.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

Los parámetros se transmiten mediante la cadena de consulta o en el cuerpo de una solicitud POST:

-   cmd=get\_idle: comando para obtener los períodos de inactividad
    
-   time\_start: inicio del período (timestamp, unixtime)
    
-   time\_end: fin del período (timestamp, unixtime)
    
-   imei: IMEI del dispositivo de monitoreo. Si hay varios dispositivos, se indican separados por comas: imei=887556,io9987,76573
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud a la API

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_idle&amp;time_start=16878956&amp;time_end=16878755&amp;imei=887556,io9987,76573&amp;node=1</div></td></tr></tbody></table>

### Ejemplo de respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "2914": [</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": "1641814740", "idle_end": 1641814984},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641815547, "idle_end": 1641825619},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641827105, "idle_end": 1641893307},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641893623, "idle_end": 1641898037}</div><div>&nbsp; &nbsp; &nbsp; // ... resto de los registros ...</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado: 0, correcto; 1, error
    
-   data: diccionario cuyas claves son los identificadores de los vehículos y cuyos valores son la lista de períodos de inactividad:
    
-   idle\_start: hora de inicio de la inactividad (timestamp)
    
-   idle\_end: hora de fin de la inactividad (timestamp)
    
-   message: mensaje de texto con el resultado de la solicitud
