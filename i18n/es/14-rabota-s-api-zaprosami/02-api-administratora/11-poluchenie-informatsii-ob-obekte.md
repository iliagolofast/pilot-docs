---
title: "Obtención de información de un objeto"
---

Esta API se utiliza para obtener la información completa de un vehículo.

Se pueden solicitar los datos tanto por agent\_id como por el número IMEI del dispositivo.

La respuesta devuelve información detallada: matrícula, consumo de combustible, límites de velocidad, VIN, modelo, ajustes de configuración, conductor asignado y otros datos.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=vehinfo: comando para obtener la información del vehículo
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Debe indicarse uno de estos parámetros:

-   agentid: identificador del vehículo (agent\_id)
    
-   imei: número IMEI único del dispositivo
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehinfo&amp;agentid=81181&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "ownerid": 5374,</div><div>&nbsp; &nbsp; "vehiclenumber": "Howen C",</div><div>&nbsp; &nbsp; "typeid": 1,</div><div>&nbsp; &nbsp; "summer_fuel": "10",</div><div>&nbsp; &nbsp; "winter_fuel": "10",</div><div>&nbsp; &nbsp; "idle_fuel": "2",</div><div>&nbsp; &nbsp; "time_zone": "Europe/Moscow",</div><div>&nbsp; &nbsp; "speed_limit": 0,</div><div>&nbsp; &nbsp; "agentid": 81181,</div><div>&nbsp; &nbsp; "account_id": 3925,</div><div>&nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; "year": "1900",</div><div>&nbsp; &nbsp; "vin": "",</div><div>&nbsp; &nbsp; "fuel_type": "50",</div><div>&nbsp; &nbsp; "driver_name": "Test",</div><div>&nbsp; &nbsp; "driver_phone": "12121212121"</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   ownerid: ID del propietario
    
-   vehiclenumber: matrícula o nombre del vehículo
    
-   typeid: tipo de vehículo
    
-   summer\_fuel / winter\_fuel / idle\_fuel: normas de consumo de combustible (verano, invierno, ralentí)
    
-   time\_zone: zona horaria en la que se utiliza el vehículo
    
-   speed\_limit: límite de velocidad
    
-   account\_id: ID del contrato al que está asociado el vehículo
    
-   model / year / vin: modelo, año de fabricación y VIN del automóvil
    
-   fuel\_type: tipo de combustible
    
-   driver\_name / driver\_phone: nombre completo y teléfono del conductor asignado
    
-   config: JSON con configuración adicional (ajustes de combustible, horas de motor, restricciones, etc.)
