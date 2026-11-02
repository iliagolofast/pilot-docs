---
title: "Lista de carpetas de otro usuario"
---

Esta API devuelve las carpetas a las que tiene acceso el usuario indicado.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

-   cmd=get\_folders\_user — comando para obtener la lista de carpetas
    
-   user\_id — identificador del usuario (obligatorio para solicitar las carpetas de otro usuario)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

En una solicitud POST, los parámetros pueden enviarse en el cuerpo en formato JSON

### Ejemplos de solicitudes

Solicitud GET:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?</span>cmd=get_folders_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

Solicitud POST:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_folders_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor
    
-   data — arreglo de carpetas del usuario:
    
-   id — identificador de la carpeta
    
-   name — nombre de la carpeta
