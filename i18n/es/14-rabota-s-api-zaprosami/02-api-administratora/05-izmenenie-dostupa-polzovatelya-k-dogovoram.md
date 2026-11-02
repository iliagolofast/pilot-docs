---
title: "Cambio del acceso de un usuario a los contratos"
---

Esta API modifica la lista de contratos a los que tiene acceso un usuario de PILOT.

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

• cmd=update\_user\_accounts\_map: comando para cambiar el acceso del usuario a los contratos

• accounts: lista de ID de los contratos a los que el usuario debe tener acceso. Si hay varios contratos, indíquelos separados por comas

• user\_id: ID del usuario cuyo acceso se modifica

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087&amp;user_id=535</div></td></tr></tbody></table>

Si necesita indicar varios contratos:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087,1131&amp;user_id=535</div></td></tr></tbody></table>

### Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

• code: código de resultado de la ejecución del comando. El valor 0 significa que se ejecutó correctamente

• msg: mensaje de texto con el resultado de la ejecución del comando
