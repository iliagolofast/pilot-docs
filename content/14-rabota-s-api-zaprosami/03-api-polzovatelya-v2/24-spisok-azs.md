---
title: "Список АЗС"
source: spisok_azs.html
---

Этот API получает список автозаправочных станций (АЗС) с координатами, типом и описанием.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=azs — команда для API, которая возвращает список АЗС
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=azs&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "list": [</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.5",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "30.3643",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС WOG&lt;/b&gt;&lt;br&gt;Телефон: (+38033)2787914&lt;br&gt;Адрес: Окр. дор., ул. Берковецкая, 6, между Варшавской и Житомирской тр., около Ашана и Эпицентра"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.6586",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "29.8808",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС Авиаком&lt;/b&gt;&lt;br&gt;Телефон: (+38045)7752175&lt;br&gt;Адрес: 56 км. тр. М-07 (Е-373) Киев-Ковель-Ягодин-Люблин"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.551",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "53.4085",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС ООО Протон-А&lt;/b&gt;&lt;br&gt;Телефон: 8-919-680-07-77&lt;br&gt;Адрес: 1130 км а/д М7, Татарстан, Актанышский район (слева)"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех)
    
-   msg — сообщение сервера (например, «OK»)
    
-   list — массив объектов АЗС:
    
-   lat — широта АЗС
    
-   lon — долгота АЗС
    
-   type\_id — идентификатор типа АЗС
    
-   type\_name — название типа АЗС
    
-   descr — описание АЗС, включая адрес и контактный телефон
