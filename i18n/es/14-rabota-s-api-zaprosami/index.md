---
title: "Trabajo con solicitudes de API"
---

API (Application Programming Interface) es un conjunto de reglas y herramientas para la interacción entre programas. En PILOT, la API se utiliza para intercambiar datos entre sistemas, servicios, aplicaciones y la plataforma.

Una solicitud de API consta de:

-   URL: la dirección del servidor de la API y el comando
    
-   Parámetros de la solicitud: los datos que se envían al servidor
    
-   Método de la solicitud: la forma de interactuar con el servidor
    
    ## Cómo funciona la API en PILOT
    

PILOT utiliza una infraestructura distribuida que incluye varios servidores, por ejemplo, BLADE, KSA, AFRICA, USA. Cada servidor puede tener varios nodos, cada uno con su propio número.

Cuando envíe una solicitud de API al sistema, indique un servidor concreto (por ejemplo, BLADE) y un nodo concreto dentro de ese servidor: node. Así, la solicitud se procesará directamente en el servidor y el nodo seleccionados, sin redirecciones innecesarias y con el menor tiempo de respuesta.

Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div><span>https://blade.pilot-gps.com/api/api.php?cmd=list&amp;node=14&nbsp;</span></div></td></tr></tbody></table>

blade.pilot-gps.com — es el nombre del servidor

node=14 — indica el nodo (servidor) donde debe procesarse la solicitud. 

Para obtener más información sobre cómo autenticarse y enviar solicitudes al servidor PILOT, consulte el siguiente [artículo](kak-podklyuchitsya-k-api.html).

## Métodos de solicitud en la API

### GET

Método para obtener datos. Se utiliza, por ejemplo, para solicitar la lista de objetos o la información de la cuenta. 

En una solicitud GET, el comando y los parámetros se envían directamente en la URL. Los parámetros se añaden después del signo ? y se separan con el símbolo &.

Ejemplo

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

cmd=bindControl: comando

uid=123, imei=456, lineuid=789: parámetros

### POST

Método para enviar datos. Se utiliza, por ejemplo, para crear un nuevo objeto o generar un informe.

En una solicitud POST, el comando y los parámetros pueden enviarse en el cuerpo de la solicitud, o bien el comando se indica en la URL y los parámetros se envían en el cuerpo.

Ejemplo 1

URL: https://<server\_address>/api/api.php?cmd=bindControl

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>&nbsp;{</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

Ejemplo 2

URL: https://<server\_address>/api/api.php

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; &nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

PUT

Método para actualizar datos. Este tipo de solicitud se utiliza, por ejemplo, para cambiar los parámetros de un objeto o de una cuenta.

Lo más habitual es que PUT se utilice para actualizar un recurso concreto, por lo que el identificador normalmente se indica en la URL y los datos que se actualizan, en el cuerpo.

Ejemplo

URL: https://<server\_address>/api/api.php/123

 Cuerpo de la solicitud:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "updateControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789",</span></div><div><span>&nbsp; "status": "active"</span></div><div><span>}</span></div></td></tr></tbody></table>

### DELETE

Método para eliminar datos. Por ejemplo, este método se utiliza cuando es necesario eliminar un objeto o una cuenta.

En una solicitud DELETE, el comando y los parámetros normalmente se envían en la URL.

Ejemplo

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

## Formato de los datos

La API admite varios formatos, tanto para las solicitudes como para las respuestas.

JSON:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789"</span></div><div><span>}</span></div></td></tr></tbody></table>

Form-encoded:

<table><tbody><tr><td><span></span></td><td><div><span>cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</span></div></td></tr></tbody></table>

XML:

<table><tbody><tr><td><span></span></td><td><div><span>&lt;request&gt;</span></div><div><span>&nbsp; &lt;cmd&gt;bindControl&lt;/cmd&gt;</span></div><div><span>&nbsp; &lt;uid&gt;123&lt;/uid&gt;</span></div><div><span>&nbsp; &lt;imei&gt;456&lt;/imei&gt;</span></div><div><span>&nbsp; &lt;lineuid&gt;789&lt;/lineuid&gt;</span></div><div><span>&lt;/request&gt;</span></div></td></tr></tbody></table>

## Tipos de datos

En la API se utilizan varios tipos de datos para transmitir información entre el cliente y el servidor. A continuación se describen los principales tipos de datos que pueden aparecer en las solicitudes y las respuestas de la API.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ejemplo en formato JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para qué se utilizan</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena (String)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Texto entre comillas</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;"name": "Маршрут №9"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para datos de texto: nombres, descripciones</span></div><div><span>&nbsp; identificadores</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Número (Number)</span></div></td><td colspan="1" rowspan="1"><div><span>Valor numérico, entero o decimal</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "price": 15.35</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para datos numéricos: precios</span></div><div><span>&nbsp; identificadores, coordenadas, hora</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Arreglo (Array)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lista ordenada de elementos de cualquier tipo</span></div></td><td colspan="1" rowspan="1"><div><span>"points": [{"lat": "53.352142", "lon": "83.758749"},&nbsp; {"lat": "52.534012", "lon": "85.178777"}]</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para listas de datos: paradas, productos,</span></div><div><span>&nbsp; usuarios</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Objeto (Object)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conjunto de pares "clave: valor"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "uid": "1", "lat": "53.352142", "lon":"83.758749"}</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para datos estructurados:</span></div><div><span>&nbsp; información sobre una parada, un usuario, un pedido</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo booleano</span></div><div><span>&nbsp; (Boolean)</span></div></td><td colspan="1" rowspan="1"><div><span>Valor lógico&nbsp;true/false o&nbsp;1/0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "bidirectional": 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Para indicadores o estados:</span></div><div><span>&nbsp; activo/inactivo, disponible/no disponible</span></div></td></tr></tbody></table>
