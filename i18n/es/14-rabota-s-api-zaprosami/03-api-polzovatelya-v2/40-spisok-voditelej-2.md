---
title: "Lista de conductores"
---

Esta API sirve para obtener información sobre los conductores registrados en la cuenta. Con ella puede obtener los datos de cada conductor, incluidos el nombre completo, la información de contacto, la descripción, los derechos de acceso y los identificadores.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = drivers\_list— comando para obtener la lista de conductores
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_list&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 317,</div><div>&nbsp; &nbsp; &nbsp; "name": "Ivan Ivanov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #3",</div><div>&nbsp; &nbsp; &nbsp; "phone": "798345546",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": "",</div><div>&nbsp; &nbsp; &nbsp; "access": []</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1122,</div><div>&nbsp; &nbsp; &nbsp; "name": "Andrey Petrov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #1",</div><div>&nbsp; &nbsp; &nbsp; "phone": "+525531696255",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": null,</div><div>&nbsp; &nbsp; &nbsp; "access": [1122]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   id — identificador del conductor
    
-   name — nombre completo del conductor
    
-   code — código del conductor (si existe)
    
-   description — descripción del conductor
    
-   phone — número de teléfono
    
-   license — datos de la licencia de conducir
    
-   email — dirección de correo electrónico
    
-   access — lista de ID de recursos u objetos a los que el conductor tiene acceso
