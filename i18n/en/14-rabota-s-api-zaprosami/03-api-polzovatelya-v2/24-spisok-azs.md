---
title: "List of Gas Stations"
---

This API gets a list of gas stations with coordinates, type and description.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=azs — API command that returns the list of gas stations
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=azs&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "list": [</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.5",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "30.3643",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС WOG&lt;/b&gt;&lt;br&gt;Телефон: (+38033)2787914&lt;br&gt;Адрес: Окр. дор., ул. Берковецкая, 6, между Варшавской и Житомирской тр., около Ашана и Эпицентра"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.6586",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "29.8808",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС Авиаком&lt;/b&gt;&lt;br&gt;Телефон: (+38045)7752175&lt;br&gt;Адрес: 56 км. тр. М-07 (Е-373) Киев-Ковель-Ягодин-Люблин"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.551",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "53.4085",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС ООО Протон-А&lt;/b&gt;&lt;br&gt;Телефон: 8-919-680-07-77&lt;br&gt;Адрес: 1130 км а/д М7, Татарстан, Актанышский район (слева)"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — success)
    
-   msg — server message (for example, “OK”)
    
-   list — array of gas station objects:
    
-   lat — gas station latitude
    
-   lon — gas station longitude
    
-   type\_id — gas station type identifier
    
-   type\_name — gas station type name
    
-   descr — gas station description, including the address and contact phone number
