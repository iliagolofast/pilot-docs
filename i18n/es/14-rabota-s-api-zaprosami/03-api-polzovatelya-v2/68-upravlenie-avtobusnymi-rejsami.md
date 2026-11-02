---
title: "Gestión de viajes de autobús"
---

Esta API se utiliza para gestionar los viajes de autobús y la vinculación de vehículos a rutas. Crea rutas y asigna vehículos a los viajes.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php

### Parámetros de la solicitud

Para obtener los datos necesarios, añada un comando.

-   cmd — comando que se ejecutará
    

Comandos disponibles

-   setLine — creación de una nueva ruta de autobús
    
-   bindControl — vinculación de un vehículo a una ruta
    
-   bindLineToVeh — vinculación de una ruta a un vehículo por ID
    
-   unbindControl — eliminación de la vinculación de un vehículo
    
-   listLines — obtención de la lista de rutas
    
-   setControl — asignación de un autobús a un viaje
    
-   unsetControl — eliminación de la asignación a un viaje
    
-   data — datos en formato JSON que se envían en el cuerpo de la solicitud
    

## Ejemplos

### Creación de una ruta de autobús

El comando setLine crea una nueva ruta con los parámetros indicados y añade las paradas de la ruta.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=setLine</div></td></tr></tbody></table>

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"account_id": "3008", &nbsp;</span></div><div><span>&nbsp;"bidirectional": 1,&nbsp; &nbsp;</span></div><div><span>&nbsp;"description": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"label": "123",&nbsp; &nbsp;</span></div><div><span>&nbsp;"name": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"number": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp;"type_id": 0,&nbsp; &nbsp;</span></div><div><span>&nbsp;"uid": "dhqwdh"</span></div><div><span>&nbsp;"points": [&nbsp;</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "45.0207",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "33.9993",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "Аэропорт__", &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35, &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "91",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 600,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 700,&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e2-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "44.9078",</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "34.0784",</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "7я горбольница",</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35,</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "90",</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 1000,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 900,</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e8-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp;&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Parámetros de la solicitud

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; account_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Número de contrato</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; bidirectional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Viaje bidireccional (1: ida y vuelta; 0: unidireccional)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; label</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Etiqueta adicional de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de la ruta (texto o dígito)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de transporte: 0, autobús; 1, trolebús; 2, tranvía; 3, microbús.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; points</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Arreglo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lista de paradas de la ruta</span></div></td></tr></tbody></table>

Parámetros de la parada

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lat</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitud del centro de la parada (número decimal)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lon</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitud del centro de la parada (número decimal)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre de la parada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; price</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Costo del trayecto desde la parada anterior (número decimal)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; radius</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Radio de la zona de la parada en metros (número)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; silent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Prohibición de notificaciones: 1, prohibidas; 0, permitidas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; stop_type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>Tipo de parada: 0, normal; 1, técnica (no se cuentan los pasajeros); 2, terminal (el contador se restablece: todos los pasajeros bajan)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora de llegada a la parada con respecto a la anterior (en segundos)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo de estacionamiento en la parada (en segundos)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la parada</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут успешно создан",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "dhqwdh",</span></div><div><span>&nbsp; &nbsp; "lineuid": "2567"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Parámetros de la respuesta

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la ejecución:&nbsp;success&nbsp;o&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mensaje sobre el resultado de la ejecución</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Datos de la ruta creada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la ruta creada</span></div></td></tr></tbody></table>

### Vinculación de un vehículo a una ruta

El comando bindControl se utiliza para vincular un vehículo a una ruta concreta. El comando asocia el rastreador GPS con la ruta, indica el período de vigencia de la vinculación y configura la URL para recibir notificaciones de eventos, por ejemplo, la llegada a una parada o la apertura de puertas.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>bindControl</span></div></td></tr></tbody></table>

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "121e1e1e12",&nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "imei": "12304", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "lineuid": "2e23e23e2e", &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php"</span></div><div><span>}</span></div></td></tr></tbody></table>

Parámetros de la solicitud

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la vinculación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; IMEI del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la ruta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora de inicio de vigencia de la vinculación (en formato timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora de fin de vigencia de la vinculación (en formato timestamp; si no se indica, la vigencia es ilimitada)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL para notificaciones de eventos (por ejemplo, llegada a una parada)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; prognoze_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL para las previsiones de llegada a las paradas</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка успешно создана",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "121e1e1e12",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Parámetros de la respuesta

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la ejecución:&nbsp;success&nbsp;o&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mensaje sobre el resultado de la ejecución</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Datos de la vinculación creada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la vinculación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador único de la ruta</span></div></td></tr></tbody></table>

O bien utilice el comando bindLineToVeh para vincular de forma simplificada una ruta a un vehículo por el ID de la ruta.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindLineToVeh</div></td></tr></tbody></table>

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345",</div><div>&nbsp; &nbsp; "ts": "1392294840"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

### Eliminación de la vinculación de un vehículo a una línea de autobús

unbindControl: comando para eliminar una vinculación de un vehículo a una ruta creada anteriormente. En la solicitud se envía el identificador único de la vinculación uid que se creó antes.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>unbindControl</span></div></td></tr></tbody></table>

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>json</span></div><div><span>{</span></div><div><span>&nbsp;&nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>}</span></div></td></tr></tbody></table>

-   uid — identificador único de la vinculación
    

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка удалена",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Obtención de la lista de rutas

El comando listLines permite obtener la lista de todas las rutas disponibles para la cuenta actual.

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=listLines</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "data": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "id": 2955,</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "number": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "description": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "account_id": 18306,</span></div><div><span>&nbsp; &nbsp; &nbsp; "active": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "label": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type_id": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": "0.00",</span></div><div><span>&nbsp; &nbsp; &nbsp; "interval": 10,</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": null</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

### Creación de una ruta de autobús y vinculación de un vehículo a ella

El comando combinado setLine y bindControl crea una nueva ruta de autobús y vincula un vehículo a esa ruta.

Cuerpo de la solicitud

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "qiwduhqiwdqkdqkn",</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp;</span></div><div><span>&nbsp; "name": "test",&nbsp;</span></div><div><span>&nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; "number": "861A",&nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php",</span></div><div><span>&nbsp; "points": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "53.352142",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "83.758749",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Барнаульский автовокзал",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "50",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "52.534012",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "85.178777",</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Бийский автовокзал",</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "100",</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут и привязка успешно созданы",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>
