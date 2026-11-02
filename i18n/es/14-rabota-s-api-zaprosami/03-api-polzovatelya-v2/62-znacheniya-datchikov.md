---
title: "Valores de los sensores"
---

Esta API obtiene los valores de los sensores discretos (nivel de combustible, temperatura, peso, etc.) durante el período de tiempo indicado.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

-   cmd =get\_discrete\_sensor\_data — comando para obtener los datos de los sensores
    
-   imei — identificador del objeto
    
-   start — inicio del período (Unix timestamp)
    
-   stop — fin del período (Unix timestamp)
    
-   tag\_id — identificador del sensor
    
-   agent\_id — identificador del agente (opcional)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

<table><tbody><tr><td><span></span></td><td><div>Los datos de los sensores solo se pueden obtener para un período de 24 horas.</div></td></tr></tbody></table>

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_discrete_sensor_data&amp;imei=350424062310402&amp;start=1677682645&amp;stop=1677761845&amp;tag_id=1158&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "sensor_data": {</div><div>&nbsp; &nbsp; "966960": {</div><div>&nbsp; &nbsp; &nbsp; "1677682772": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682772,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "95.09",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "0"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1677682950": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682950,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "94.9",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "12"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   sensor\_id — identificador del sensor
    
-   unixtimestamp — hora de registro del valor (Unix timestamp)
    
-   calibrated\_value — valor calibrado del sensor (por ejemplo, litros de combustible o grados de temperatura)
    
-   speed — velocidad del objeto en el momento de la medición
