---
title: "Historial de un objeto"
---

Esta API devuelve el historial de movimiento de un vehículo durante el período indicado: recorridos con información sobre kilometraje, tiempo de funcionamiento, estacionamientos, coordenadas de inicio y fin, etc.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Parámetros de la solicitud

Para obtener los datos es necesario realizar una solicitud con autorización e indicando la función y los parámetros:

-   Username: nombre de usuario
    
-   Password: contraseña
    
-   functionName=api\_objecthistory: comando para obtener el historial del objeto
    
-   parameters: cadena con los parámetros de la solicitud en el formato:
    
    IMEI,FROM\_DATETIME,TO\_DATETIME, donde:
    
-   IMEI: IMEI del objeto
    
-   FROM\_DATETIME: fecha y hora de inicio del período
    
-   TO\_DATETIME: fecha y hora de fin del período
    

El formato de los datos solicitados es un arreglo de recorridos del objeto durante el período indicado.

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objecthistory</div><div>parameters=352016704092097,2025-11-21 04:07:03,2025-11-23 04:07:03</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"FLCNSMD": 0,</div><div>&nbsp;"ENDTM": "2025-11-21 19:05:30",</div><div>&nbsp;"MILEGND": 106286.11,</div><div>&nbsp;"ENDLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"IDLDRTN": "00:00:00",</div><div>&nbsp;"CNT": 1,</div><div>&nbsp;"WRKNGDRTN": "07:47:22",</div><div>&nbsp;"MILEGN": 826.37,</div><div>&nbsp;"DRVR": "",</div><div>&nbsp;"startlatitude": 24.399892,</div><div>&nbsp;"OBJTID": 1344487,</div><div>&nbsp;"WRKNGSTRTTM": "2025-11-21 11:18:08",</div><div>&nbsp;"endlongitude": 48.20568,</div><div>&nbsp;"startlongitude": 39.644265,</div><div>&nbsp;"STPDRTN": "00:12:28",</div><div>&nbsp;"DY": "2025-11-21",</div><div>&nbsp;"endlatitude": 29.960238,</div><div>&nbsp;"OBJCTNME": "5209 ب د م",</div><div>&nbsp;"WRKNGSTRTLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"MXSPDP": 136</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve un arreglo de recorridos durante el período indicado. Cada elemento del arreglo describe un recorrido y contiene:

-   FLCNSMD: consumo de combustible en este recorrido
    
-   ENDTM: hora de finalización del recorrido
    
-   MILEGND: kilometraje total al final del recorrido
    
-   ENDLCTN: dirección del punto final del recorrido
    
-   IDLDRTN: tiempo total de funcionamiento al ralentí (idle) en este recorrido
    
-   CNT: número de orden (índice) del recorrido en el día
    
-   WRKNGDRTN: tiempo total de funcionamiento del motor o con el encendido activado
    
-   MILEGN: kilometraje recorrido dentro de este recorrido
    
-   DRVR: nombre del conductor
    
-   startlatitude: latitud del punto de inicio del recorrido
    
-   startlongitude: longitud del punto de inicio del recorrido
    
-   endlatitude: latitud del punto final del recorrido
    
-   endlongitude: longitud del punto final del recorrido
    
-   OBJTID: identificador interno del objeto
    
-   WRKNGSTRTTM: hora del primer encendido en este recorrido
    
-   STPDRTN: tiempo total de estacionamientos dentro del recorrido
    
-   DY: fecha del recorrido
    
-   OBJCTNME: nombre del objeto
    
-   WRKNGSTRTLCTN: dirección del punto de inicio del recorrido
    
-   MXSPDP: velocidad máxima alcanzada en este recorrido
