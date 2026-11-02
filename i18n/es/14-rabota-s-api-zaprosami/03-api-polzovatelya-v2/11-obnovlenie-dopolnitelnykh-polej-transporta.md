---
title: "Actualización de los campos adicionales de un vehículo"
---

Esta API modifica con una sola solicitud los valores de los [campos](../../panel-administratora/dogovor/redaktor-polej-transportnogo-sredstva.html) adicionales de un vehículo por agent\_id o imei. Se pueden cambiar todos los campos a la vez o solo una parte; el número de campos no está limitado.

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php

### Encabezados

Content-Type: application/json

Authorization: Basic <sus\_credenciales>

### Parámetros de la solicitud

-   cmd=agent\_update\_custom\_fields: comando de la API
    
-   agent\_id: identificador del vehículo (si no utiliza imei).
    
-   imei: IMEI del dispositivo del vehículo (si no utiliza agent\_id).
    
-   custom\_fields: objeto con pares clave-valor para actualizar los campos adicionales
    

En custom\_fields se puede indicar cualquier cantidad de campos, por ejemplo extra\_field1, extra\_field2, … extra\_fieldN (siempre que esos campos estén creados en la cuenta). Los valores de los campos pueden ser números, cadenas de texto o valores booleanos

### Ejemplo de solicitud

Actualización de varios campos por agent\_id:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"agent_id": 30547,</div><div>"custom_fields": {</div><div>"extra_field1": "Путевой лист №123",</div><div>"extra_field2": "2025-11-01",</div><div>"extra_field7": "+79000000000"</div><div>}</div><div>}'</div></td></tr></tbody></table>

Actualización por imei:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \'</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"imei": "359339099999999",</div><div>"custom_fields": {</div><div>"extra_field3": "Пропуск №A12345",</div><div>"extra_field4": "2025-12-31"</div><div>}</div><div>}'</div></td></tr></tbody></table>

### Ejemplo de respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>"code": 1,</div><div>"msg": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución: 1, correcta; 0, error
    
-   msg: descripción en texto del resultado (por ejemplo, "OK" o un mensaje de error)
