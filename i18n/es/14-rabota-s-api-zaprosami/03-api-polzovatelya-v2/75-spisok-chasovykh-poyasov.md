---
title: "Lista de zonas horarias"
---

Esta API devuelve la lista de zonas horarias disponibles que se pueden utilizar al configurar un usuario o un objeto.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

-   cmd=get\_time\_zones — comando para obtener la lista de zonas horarias
    
-   node — número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_time_zones&amp;node=1</div></td></tr></tbody></table>

### Ejemplo de solicitud POST

Cuerpo de la solicitud (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_time_zones"</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "text": "Africa/Abidjan" },</div><div>&nbsp; &nbsp; { "text": "Africa/Accra" },</div><div>&nbsp; &nbsp; { "text": "Africa/Addis Ababa" },</div><div>&nbsp; &nbsp; { "text": "Africa/Algeria" },</div><div>&nbsp; &nbsp; { "text": "Africa/Asmara" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bamako" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bangui" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0 = operación correcta)
    
-   data — lista de zonas horarias disponibles
    
-   text — nombre de la zona horaria en formato Region/City
