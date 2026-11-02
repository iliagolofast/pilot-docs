---
title: "Lista de carpetas del usuario"
---

Esta API devuelve la lista de carpetas a las que el usuario tiene acceso en el contrato.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

• cmd=get\_folders\_user — comando para obtener la lista de carpetas

En una solicitud POST, los parámetros pueden enviarse en el cuerpo en formato JSON

-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>&nbsp;https://&lt;server_address&gt;/api/api.php?cmd=get_folders_user&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

• code — código de resultado (0: operación correcta)

• msg — mensaje del servidor

• data — arreglo de carpetas del usuario:

• id — identificador de la carpeta

• name — nombre de la carpeta
