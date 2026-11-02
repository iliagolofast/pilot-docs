---
title: "Eventos del objeto"
---

Esta API devuelve los eventos en tiempo real de los vehículos, incluida la información sobre el contrato, la empresa, el conductor, la velocidad y la ubicación del inicio del evento.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para realizar la solicitud, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=live\_events — comando para obtener eventos en tiempo real
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=live_events&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "1264": {</div><div>&nbsp; &nbsp; "Contract Number": "CONTRACT ID",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "LEK",</div><div>&nbsp; &nbsp; "Vehicle Owner": "SUB-CONTRACTOR",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "5174 WA",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 18262972,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881932",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.185841",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.213230"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "1123": {</div><div>&nbsp; &nbsp; "Contract Number": "",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "",</div><div>&nbsp; &nbsp; "Vehicle Owner": "",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "6076MB",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 0,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881413",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.188658",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.206314"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   Clave del objeto (1264, 1123): identificador único del evento
    
-   Contract Number — número de contrato
    
-   Company Name — nombre de la empresa
    
-   Base Location — base del vehículo
    
-   Vehicle Owner — propietario del vehículo
    
-   ID — ID interno del evento
    
-   EventID, EventType — identificador del evento y su tipo
    
-   VehicleID — matrícula o identificador del vehículo
    
-   Asset Category — categoría del vehículo
    
-   Road Type — tipo de vía
    
-   DriverID — identificador del conductor
    
-   Event Start Time — hora de inicio del evento (Unix timestamp)
    
-   Event Start Speed — velocidad en el momento de inicio del evento
    
-   Event Start Location — coordenadas del inicio del evento (lat, lon)
