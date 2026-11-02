---
title: "Eventos de notificaciones"
---

Esta API se utiliza para obtener eventos de [notificaciones](../../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html) durante el período seleccionado, por ejemplo, exceso de velocidad, movimiento fuera de la zona u otras alertas configuradas previamente.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = notifications — comando para obtener los eventos de notificaciones
    
-   ts — hora de inicio de la selección (Unix timestamp)
    
-   te — hora de fin de la selección (Unix timestamp)
    
-   notification — nombre de la notificación cuyos eventos se desea obtener
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=notifications&amp;ts=1606942800&amp;te=1607115600&amp;notification=test&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=52km/h Duration: 42 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988609</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=29km/h Duration: 12 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988438</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=17km/h Duration: 13 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988106</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "id": 3701</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   vehiclenumber — matrícula o número interno del vehículo
    
-   agentid — identificador del objeto en el sistema
    
-   message — texto del evento de la notificación
    
-   ts — hora del evento en formato Unix timestamp
    
-   id — identificador de la solicitud/sesión
