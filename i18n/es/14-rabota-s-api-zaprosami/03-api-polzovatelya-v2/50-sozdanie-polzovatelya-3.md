---
title: "Creación de un usuario"
---

Esta API permite crear un nuevo usuario en PILOT con los parámetros indicados: nombre de usuario, contraseña, rol y datos de contacto.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET

### Parámetros de la solicitud

cmd=create\_user — comando para crear un usuario

login — nombre de usuario (login) del nuevo usuario

password — contraseña del usuario

name — nombre del usuario

phone — número de teléfono del usuario

email — correo electrónico del usuario

role\_id — rol del usuario: 0, Admin; 1, User

vehicles — lista de vehículos disponibles (ID o cantidad)

folders — lista de carpetas disponibles (ID o cantidad)

-   node — número del nodo en el que debe ejecutarse el comando
    

<table><tbody><tr><td><span></span></td><td><div>En la solicitud debe indicar el nombre de usuario y la contraseña del administrador que crea al usuario.</div></td></tr></tbody></table>

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=create_user&amp;login=TestAPI3&amp;password=123456&amp;name=Test API&amp;role_id=1&amp;phone=789995&amp;email=testapi5@mailinator.com&amp;vehicles=15&amp;folders=5&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success create user: 48"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor con el ID del usuario creado
