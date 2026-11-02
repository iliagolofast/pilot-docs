---
title: "Carga de la batería por VIN"
---

Esta API obtiene información sobre el estado de carga de la batería de un vehículo según su VIN.

Funciona solo para objetos que cumplen lo siguiente:

-    tienen completado el campo VIN en la [ficha](../../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html) del objeto
    
-   tienen conectado un sensor de carga de la batería
    

<table><tbody><tr><td><span></span></td><td><div>En la solicitud se pueden indicar varios VIN; en ese caso, la respuesta contendrá la información de todos los objetos indicados.</div></td></tr></tbody></table>

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/VTB/api\_vtb.php

### Método de la solicitud

 POST

El trabajo con esta API consta de dos pasos:

1\. Autorización: obtención de un token para acceder a los datos

2\. Solicitud de datos: uso del token para obtener información sobre la batería según el VIN

### 1\. Autorización

Antes de solicitar los datos, es necesario autenticarse.

Cuerpo de la solicitud:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "login": "ваш_логин",</div><div>&nbsp; "password": "ваш_пароль",</div><div>&nbsp; "cmd": "auth"</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

En la respuesta recibirá un token: una cadena larga y única.

Este token sirve para identificar al usuario en las solicitudes posteriores. Sin el token, la API no devolverá los datos de la batería.

### 2\. Obtención de los datos del sensor de la batería

Una vez obtenido el token, puede solicitar la información de la batería.

Parámetros de la solicitud

-   Number — lista de VIN de los vehículos de los que desea obtener información.
    
-   DateFrom — fecha y hora de inicio del período (en formato ISO 8601).
    
-   DateTo — fecha y hora de fin del período.
    
-   cmd=vehicle — comando de la API para solicitar datos de un vehículo
    

Encabezados de la solicitud:

-   Authorization: Bearer <token> — indique el token obtenido en la autorización
    
-   Content-Type: application/json — indica que el cuerpo de la solicitud está en formato JSON
    

Cuerpo de la solicitud:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "Number": ["VIN_объекта"],</div><div>&nbsp; "DateFrom": "2023-12-03T00:00:00",</div><div>&nbsp; "DateTo": "2023-12-12T00:00:00",</div><div>&nbsp; "cmd": "vehicle"</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "Number": "456789123",</div><div>&nbsp; &nbsp; "ApplicationNumber": null,</div><div>&nbsp; &nbsp; "CurrentStatus": "ACTIVE",</div><div>&nbsp; &nbsp; "CloseDateTime": "",</div><div>&nbsp; &nbsp; "LastSyncDate": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "AlarmDateTime": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "Latitude": "55.578352",</div><div>&nbsp; &nbsp; "Longitude": "38.125267",</div><div>&nbsp; &nbsp; "BatteryCharge": "полный заряд",</div><div>&nbsp; &nbsp; "LocationLinesID": "",</div><div>&nbsp; &nbsp; "FullAddress": "улица Гарнаева, Рынок, Жуковский, Московская область, Россия",</div><div>&nbsp; &nbsp; "Country": "Россия",</div><div>&nbsp; &nbsp; "Region": "Московская область",</div><div>&nbsp; &nbsp; "Town": "Жуковский",</div><div>&nbsp; &nbsp; "Street": "улица Гарнаева",</div><div>&nbsp; &nbsp; "House": null,</div><div>&nbsp; &nbsp; "numberRegion": 10</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   Number — VIN del vehículo
    
-   CurrentStatus — estado actual del objeto
    
-   LastSyncDate — fecha de la última sincronización
    
-   BatteryCharge — nivel de carga de la batería
    
-   FullAddress, Country, Region, Town, Street — ubicación del objeto
    
-   Latitude, Longitude — coordenadas del objeto
