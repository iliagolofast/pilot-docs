---
title: "Desasignar un contrato de un vehículo"
---

Esta API elimina la vinculación de un contrato existente con el vehículo indicado.

## Cómo obtener los datos

### Método

DELETE

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

• cmd=unlink\_contract: comando para desvincular el contrato

• PlateNum: matrícula del vehículo

• node: número del nodo en el que se debe ejecutar el comando (opcional)

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=unlink_contract&amp;PlateNum=test12345&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,&nbsp; &nbsp;</div><div>&nbsp; "msg": "Deletion is successful"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

• code: código de resultado (0, operación correcta)

• msg: mensaje del servidor sobre el resultado de la acción
