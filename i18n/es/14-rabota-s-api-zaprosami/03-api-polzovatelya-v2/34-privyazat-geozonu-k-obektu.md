---
title: "Vincular una geocerca a un objeto"
---

Esta API permite vincular una geocerca existente a un vehículo, estableciendo parámetros de control como el límite de velocidad, el tiempo de inactividad y las alertas.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=geofencelink: comando para vincular la geocerca
    
-   zone\_id: identificador de la geocerca (obligatorio si no se indica external\_id)
    
-   external\_id: identificador externo de la geocerca (opcional; se ignora si se indica zone\_id)
    
-   agent\_id: identificador del agente (vehículo)
    
-   idle: control de inactividad en la geocerca en minutos (opcional)
    
-   speedlimit: límite de velocidad en la geocerca en km/h (opcional)
    
-   alerts: alertas:
    
-   0: no enviar
    
-   1: inactividad
    
-   2: cruce de límites
    
-   3: límites y pasos fronterizos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofencelink&amp;zone_id=158414&amp;agent_id=66497&amp;idle=10&amp;speedlimit=80&amp;alerts=0&amp;node=1</div></td></tr></tbody></table>

**Respuesta**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

En la respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor sobre el resultado de la acción
