---
title: "Creación de un usuario"
---

Esta API crea un nuevo usuario de PILOT y le asigna los datos principales: nombre de usuario, contraseña, nombre, rol, teléfono, correo electrónico y contratos disponibles.

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

• cmd=create\_user  : comando para crear un usuario

• login: nombre de usuario del nuevo usuario

• password: contraseña del nuevo usuario

• name: nombre del usuario

• role\_id: ID del rol del usuario

• phone: número de teléfono del usuario

• email: correo electrónico del usuario

• accounts: lista de ID de los contratos a los que el usuario debe tener acceso. Si hay varios contratos, indíquelos separados por comas

• account\_id: ID del contrato en el que se crea el usuario

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=create_user&amp;login=TestAPI13&amp;password=Qwerty123&amp;name=test Api 13&amp;role_id=1&amp;phone=789995&amp;email=testapi13@mailinator.com&amp;accounts=1106,1131&amp;account_id=1003</div></td></tr></tbody></table>

### Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "Success create user: 729",</span></div><div><span>&nbsp; "user_id": 729</span></div><div><span>}</span></div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

• code: código de resultado de la ejecución del comando. El valor 0 significa que se ejecutó correctamente

• msg: mensaje de texto con el resultado de la ejecución del comando

• user\_id: ID del usuario creado
