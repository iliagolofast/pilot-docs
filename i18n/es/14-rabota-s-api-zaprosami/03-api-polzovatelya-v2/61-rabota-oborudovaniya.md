---
title: "Funcionamiento del equipo"
---

Esta API permite obtener datos sobre el funcionamiento de los sensores del vehículo durante el período seleccionado.

Con ella puede:

— hacer un seguimiento de los períodos de funcionamiento/activación de los sensores (por ejemplo, encendido, activación del equipo).

— obtener información sobre la ubicación en el momento de activarse el sensor.

— analizar el comportamiento del equipo y el funcionamiento del vehículo.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=sensors — comando para obtener datos sobre el funcionamiento de los sensores
    
-   imei — identificador del vehículo en el sistema
    
-   start — hora de inicio de la selección (Unix timestamp)
    
-   stop — hora de fin de la selección (Unix timestamp)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=sensors&amp;imei=356307046690011&amp;start=1404637430&amp;stop=1404645198&amp;node=1</div></td></tr></tbody></table>

Respuesta

Cada sensor se representa mediante un objeto cuya clave es el identificador del sensor en el sistema:

<table><tbody><tr><td><span></span></td><td><div>"sensors": {</div><div>&nbsp; &nbsp; "9175": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fieldname": "DIS1",&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик зажигания", &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 9175,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "work": {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404637430": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404637430,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404637834,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3825",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0031",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "Россия, Астраханская область, Наримановский район, Николаевское шоссе, 1б" // Dirección</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404638577": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404638577,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404639841,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3625",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0478",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "RU, Астрахань, улица Савушкина"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // ... siguientes períodos de funcionamiento del sensor</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   fieldname — nombre del campo del sensor en el sistema (por ejemplo, DIS1)
    
-   info — nombre del sensor en el sistema (por ejemplo, “Sensor de encendido”)
    
-   id — identificador del sensor en el sistema
    
-   work — objeto con los períodos de funcionamiento del sensor; las claves son la hora de activación (ts)
    
-   ts — hora de activación del sensor (Unix timestamp)
    
-   te — hora de desactivación del sensor (Unix timestamp)
    
-   lat — latitud en el momento de la activación
    
-   lon — longitud en el momento de la activación
    
-   place — dirección o ubicación en el momento de activarse el sensor
