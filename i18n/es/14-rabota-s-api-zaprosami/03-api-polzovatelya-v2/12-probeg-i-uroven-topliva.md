---
title: "Kilometraje y nivel de combustible"
---

Esta API obtiene información sobre el kilometraje del vehículo y el nivel de combustible en un momento determinado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=istatus: comando de la API para obtener el estado
    
-   imei: identificador del objeto en PILOT
    
-   unixtimestamp: momento en formato Unix timestamp
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;unixtimestamp=1408840780&amp;imei=356495042533101<span>&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "код": 0,</div><div>&nbsp; &nbsp; "сообщение": "ОК",</div><div>&nbsp; &nbsp; "общий_пробег": 0,</div><div>&nbsp; &nbsp; "total_run_by_can": 0,</div><div>&nbsp; &nbsp; "моточасы": 0,</div><div>&nbsp; &nbsp; "топливные_датчики": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150325,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "t_53lls1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150326,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "lls2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "топливо": 0,</div><div>&nbsp; &nbsp; "unixtimestamp": 1408840780</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   общий\_пробег: kilometraje total del automóvil en ese momento (km)
    
-   total\_run\_by\_can: kilometraje según los datos del bus CAN (km)
    
-   моточасы: horas de motor en segundos
    
-   топливо: cantidad de combustible en el depósito en ese momento (l)
    
-   топливные\_датчики: arreglo de datos de cada sensor de combustible, si hay varios:
    
-   info: descripción del sensor
    
-   идентификатор: ID único del sensor
    
-   имя поля: nombre de sistema del sensor
    
-   топливо: nivel de combustible según este sensor (l)
    
-   unixtimestamp: momento para el que se devuelven los datos (Unix timestamp)
