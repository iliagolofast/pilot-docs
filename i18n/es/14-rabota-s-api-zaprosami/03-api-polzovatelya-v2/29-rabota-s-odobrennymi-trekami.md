---
title: "Trabajo con recorridos aprobados"
---

Esta API ayuda a trabajar con los recorridos aprobados de los vehículos: establecer períodos, obtener recorridos y utilizar el reproductor de recorridos.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Los parámetros se transmiten mediante la cadena de consulta con el método POST o GET, según el comando.

Para obtener los datos necesarios, añada parámetros a la dirección de la solicitud. Los parámetros se indican después del signo de interrogación «?» y se separan con el signo «&».

-   cmd=set\_approved\_tracks: comando para establecer los períodos aprobados
    
-   cmd=get\_approved\_tracks: comando para obtener los recorridos aprobados
    
-   veh: matrícula o identificador del vehículo
    
-   ts: inicio del período (timestamp)
    
-   te: fin del período (timestamp)
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Establecer períodos aprobados

Ejemplo de solicitud a la API

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=set_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=1537952400&amp;node=1</span></div></td></tr></tbody></table>

Respuesta de la API

<table><tbody><tr><td><span></span></td><td><div>{"code":0,"msg":"ОК обновлено"}</div></td></tr></tbody></table>

### Obtener recorridos aprobados

Ejemplo de solicitud a la API

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;admin_address&gt;<span>/api/api.php?cmd=get_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=153795 2400&amp;node=1</span></div></td></tr></tbody></table>

Respuesta de la API

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "data":{</div><div>&nbsp; &nbsp; "approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":2.8051348330013,"ts":1537948809,"te":1537949431,"max_speed":"59","avg_speed":26}</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "not_approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":1.8650025635569,"ts":1537945206,"te":1537946030,"max_speed":"40","avg_speed":12},</div><div>&nbsp; &nbsp; &nbsp; {"length":4.1987356239849,"ts":1537948298,"te":1537948798,"max_speed":"65","avg_speed":37}</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   approved: lista de recorridos aprobados
    
-   not\_approved: lista de recorridos que no fueron aprobados
    
-   length: longitud del recorrido en kilómetros
    
-   ts: hora de inicio del recorrido (timestamp)
    
-   te: hora de fin del recorrido (timestamp)
    
-   max\_speed: velocidad máxima en el recorrido
    
-   avg\_speed: velocidad media
    

### Reproductor de recorridos

El reproductor de recorridos es un servicio web que permite ver visualmente los recorridos de los vehículos. A diferencia de la API normal, devuelve directamente una página lista con el mapa y el recorrido, y no JSON ni XML.

Enlace para ver el recorrido:

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;server_address&gt;<span>/api/track_player.php?login=demo&amp;pass=demo&amp;ts=1536933600&amp;te=1536940800&amp;veh=в848ае199&amp;lang=ru&amp;node=1</span></div></td></tr></tbody></table>

Puede utilizar la URL como iframe src para mostrar el recorrido en una página.
