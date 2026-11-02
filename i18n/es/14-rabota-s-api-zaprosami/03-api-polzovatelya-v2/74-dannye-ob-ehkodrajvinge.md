---
title: "Datos de conducción ecológica"
---

Esta API le permite obtener información sobre la eficiencia ecológica de la conducción de los vehículos durante el período indicado. 

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada parámetros a la dirección de la solicitud. Los parámetros se indican después del signo de interrogación “?” y se separan con el signo “&”.

-   cmd = mileco\_drive — comando para obtener los datos del viaje 
    
-   start — fecha y hora de inicio del período del que desea obtener los datos
    
-   stop — fecha y hora de fin del período
    

La hora se indica en formato Unixtimestamp, es decir, el número de segundos transcurridos desde el 1 de enero de 1970.

-   vehid — identificador del vehículo del que se necesita obtener los datos. Si necesita los datos de un solo vehículo, introduzca su ID; si son varios vehículos, enumere sus ID separados por comas.
    
    <table><tbody><tr><td><span></span></td><td><div>Si no indica el parámetro&nbsp;vehid, el sistema devolverá automáticamente la información de todos los vehículos asignados a su cuenta.</div></td></tr></tbody></table>
    
-   imei — número único del rastreador GPS del vehículo. Utilice este parámetro para obtener los datos de un rastreador concreto.
    
    <table><tbody><tr><td><span></span></td><td><div>Si indica&nbsp;imei, no es necesario indicar el parámetro&nbsp;vehid.</div></td></tr></tbody></table>
    

Ejemplo de solicitud de la API con imei:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span><span>&lt;</span><span>address</span><span>&gt;</span><span>/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;imei=86645655031889725</span></div></td></tr></tbody></table>

-   time\_diff\_type — agrupación de los datos por tiempo. De forma predeterminada, los datos se recopilan por cada día.
    
-   time\_diff\_type=1 — los datos se recopilarán por cada 7 días
    
-   time\_diff\_type=2 — los datos se recopilarán por cada mes
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>&nbsp;<span>https://&lt;url&gt;/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;</span>vehid=32,53&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "32": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 842.75354055,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 511 ГР 123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "speed": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msg": "Speed",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cnt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "val": 1290,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fee": 12</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div><span>&nbsp; &nbsp; "53": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 53,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 8.24949075,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 619АК 67",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Bus",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": []</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }&nbsp; &nbsp;</span></div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene los datos de cada vehículo:

-   veh\_id — identificador del vehículo
    
-   imei — número único del rastreador
    
-   distance — distancia recorrida durante el período indicado
    
-   agent\_id —  identificador del contrato
    
-   account\_id — número de la cuenta en el sistema
    
-   account\_name —  nombre de la cuenta
    
-   veh\_name — nombre del vehículo
    
-   veh\_type — tipo de vehículo
    
-   eco\_data — datos de conducción
