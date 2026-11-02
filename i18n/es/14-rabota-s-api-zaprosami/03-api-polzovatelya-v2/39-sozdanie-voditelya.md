---
title: "Creación de un conductor"
---

Esta API permite añadir un nuevo conductor al sistema o actualizar los datos de uno existente. Con ella puede indicar el nombre completo, el código iButton, la información de contacto, el número de licencia de conducir y la lista de objetos a los que el conductor tendrá acceso.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = drivers\_add — comando para añadir o actualizar un conductor
    
-   name — nombre del conductor (nombre completo)
    
-   code — código iButton del conductor (obligatorio)
    
-   description — descripción del conductor (opcional)
    
-   phone — número de teléfono del conductor (opcional)
    
-   license — número de licencia de conducir (opcional)
    
-   email — dirección de correo electrónico
    
-   access — lista de identificadores de objetos (agent\_id) a los que se permite el acceso al conductor, separados por comas
    
-   node — número del nodo en el que debe ejecutarse el comando
    

<table><tbody><tr><td><span></span></td><td><div>Si en el sistema ya existe un conductor con estos parámetros, se actualizarán sus datos. Si no, se creará un nuevo conductor</div></td></tr></tbody></table>

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_add&amp;name=NewDriverName&amp;code=123456&amp;description=DESCR&amp;phone=122212343&amp;license=rrr3335552&amp;email=new@email.com&amp;access=1122,3344&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; "id": 16990,</div><div>&nbsp;&nbsp; &nbsp; "name": "NewDriverName",</div><div>&nbsp;&nbsp; &nbsp; "code": "123456",</div><div>&nbsp;&nbsp; &nbsp; "description": "DESCR",</div><div>&nbsp;&nbsp; &nbsp; "phone": "122212343",</div><div>&nbsp;&nbsp; &nbsp; "license": "rrr3335552",</div><div>&nbsp;&nbsp; &nbsp; "email": "new@email.com",</div><div>&nbsp;&nbsp; &nbsp; "access": [1122, 3344]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   id— identificador único del conductor
    
-   name— nombre completo del conductor
    
-   code— código iButton del conductor
    
-   description— descripción del conductor
    
-   phone— número de teléfono
    
-   license— número de licencia de conducir
    
-   email— dirección de correo electrónico
    
-   access— lista de identificadores de objetos a los que se permite el acceso
