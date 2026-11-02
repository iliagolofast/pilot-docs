---
title: "Cómo conectarse a la API"
---

En este artículo veremos cómo autorizarse y realizar una solicitud a la API. Después podrá enviar comandos al servidor y recibir datos de él.

### Dirección de la API

Todas las solicitudes se envían a la dirección:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php</div></td></tr></tbody></table>

<server\_address> es la dirección del servidor o del host donde funciona PILOT.

Por ejemplo:

-   Para usuarios: https://pilot-gps.com/api/api.php
    
-   Para administradores: https://admin.pilot-gps.com/ax/api.php
    

La API puede encontrarse en distintas «carpetas» del proyecto, y esto se refleja en la dirección de la solicitud, por ejemplo:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php</div><div>https://&lt;server_address&gt;/ax/api.php</div></td></tr></tbody></table>

Las carpetas (api, backend, ax y otras) son simplemente la estructura del proyecto. Indican a qué conjunto de comandos se accede. Utilice siempre la ruta completa de la carpeta indicada en el comando concreto de la API; de lo contrario, la solicitud no funcionará.

### Tipo de autorización

Para conectarse a la API se utiliza Basic Auth.

Para la API normal (de usuario), utilice para iniciar sesión el nombre de usuario y la contraseña de su cuenta.

Para trabajar con la API de administrador, utilice el nombre de usuario y la contraseña del administrador.

### Cómo es una solicitud

La forma general de una solicitud es la siguiente:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;</div></td></tr></tbody></table>

-   cmd: el comando que desea ejecutar
    
-   node: el número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de respuesta

Ante su solicitud, el servidor devolverá una respuesta en formato JSON:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; ...datos solicitados...</div><div>}</div></td></tr></tbody></table>

-   code = 0: todo ha salido correctamente
    
-   code = 1: se ha producido un error
    
-   msg: mensaje del servidor (por ejemplo, "OK" o la descripción de un error)
    

Si le resulta más cómodo trabajar con XML, añada a la solicitud el parámetro out=xml y el resultado llegará en formato XML.

Ejemplo de solicitud:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;&amp;out=xml</div></td></tr></tbody></table>

La respuesta en este caso será la siguiente:

<table><tbody><tr><td><span></span></td><td><div>&lt;response&gt;</div><div>&nbsp; &lt;code&gt;0&lt;/code&gt;</div><div>&nbsp; &lt;msg&gt;OK&lt;/msg&gt;</div><div>&nbsp; ...datos solicitados...</div><div>&lt;/response&gt;</div></td></tr></tbody></table>

Si apenas empieza a conocer la API, le recomendamos leer primero el artículo [«Trabajo con solicitudes de API»](index.html) para entender qué son los comandos, los parámetros y los formatos de datos.
