---
title: "Asignar un contrato a un vehículo"
---

Esta API vincula un contrato a un vehículo, indicando su matrícula, la fecha de inicio de vigencia, el nombre del contrato y la distancia.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=link\_contract: comando para vincular el contrato
    
-   PlateNum: matrícula del vehículo
    
-   Date: hora de inicio de vigencia del contrato (Unix timestamp)
    
-   Name: nombre del contrato
    
-   Distance: distancia (por ejemplo, kilometraje según el contrato)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=link_contract&amp;PlateNum=test12345&amp;Distance=1111&amp;Date=1623927270&amp;Name=1212&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "The linking is successful"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor sobre el resultado de la acción
