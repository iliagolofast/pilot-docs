---
title: "Datos sin procesar por IMEI"
---

Esta API permite obtener los datos sin procesar de un dispositivo durante el período de tiempo indicado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = ag\_events — comando para obtener los puntos sin procesar
    
-   imei — identificador único del dispositivo
    
-   ts — hora de inicio de la selección (Unix timestamp)
    
-   te — hora de fin de la selección (Unix timestamp)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_events&amp;ts=1498201000&amp;te=1498201200&amp;imei=356307045913463&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201016": {"alt": 33, "lat": "47.2124", "lon": "39.6922", "sat": 15, "speed": 0, "ts": 1498201016},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201037": {"alt": 29, "lat": "47.2124", "lon": "39.6924", "sat": 15, "speed": 6, "ts": 1498201037},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201097": {"alt": 31, "lat": "47.2128", "lon": "39.6933", "sat": 15, "speed": 0, "ts": 1498201097}</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "vehicle": {"agentid": 2914, "created_time": 1359797592, "current_mileage": 90224, "folder": "Sky Electronics", "imei": "356307045913463", "type": "Cow", "typeid": 31, "vehiclenumber": "IX35"}</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: correcto)
    
-   msg — mensaje del servidor
    
-   data — objeto con los puntos sin procesar, cuyas claves son el timestamp de los puntos y cuyos valores son:
    
-   lat — latitud
    
-   lon — longitud
    
-   alt — altitud
    
-   sat — número de satélites
    
-   speed — velocidad
    
-   ts — hora del evento (Unix timestamp)
    
-   vehicle — información del objeto:
    
-   agentid — identificador del agente
    
-   created\_time — hora de creación del objeto
    
-   current\_mileage — kilometraje actual
    
-   folder — nombre de la carpeta/grupo
    
-   imei — identificador del dispositivo
    
-   type — tipo de objeto
    
-   typeid — identificador del tipo de objeto
    
-   vehiclenumber — número del vehículo
