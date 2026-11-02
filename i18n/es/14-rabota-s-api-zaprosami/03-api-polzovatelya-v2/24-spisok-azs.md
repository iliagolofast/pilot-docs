---
title: "Lista de gasolineras"
---

Esta API obtiene la lista de gasolineras con coordenadas, tipo y descripción.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=azs: comando de la API que devuelve la lista de gasolineras
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=azs&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "list": [</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.5",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "30.3643",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС WOG&lt;/b&gt;&lt;br&gt;Телефон: (+38033)2787914&lt;br&gt;Адрес: Окр. дор., ул. Берковецкая, 6, между Варшавской и Житомирской тр., около Ашана и Эпицентра"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.6586",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "29.8808",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС Авиаком&lt;/b&gt;&lt;br&gt;Телефон: (+38045)7752175&lt;br&gt;Адрес: 56 км. тр. М-07 (Е-373) Киев-Ковель-Ягодин-Люблин"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.551",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "53.4085",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС ООО Протон-А&lt;/b&gt;&lt;br&gt;Телефон: 8-919-680-07-77&lt;br&gt;Адрес: 1130 км а/д М7, Татарстан, Актанышский район (слева)"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, correcto)
    
-   msg: mensaje del servidor (por ejemplo, «OK»)
    
-   list: arreglo de objetos de gasolineras:
    
-   lat: latitud de la gasolinera
    
-   lon: longitud de la gasolinera
    
-   type\_id: identificador del tipo de gasolinera
    
-   type\_name: nombre del tipo de gasolinera
    
-   descr: descripción de la gasolinera, incluidos la dirección y el teléfono de contacto
