---
title: "Список АЗС"
---

Цей API отримує список автозаправних станцій (АЗС) з координатами, типом і описом.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=azs — команда для API, яка повертає список АЗС
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=azs&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "list": [</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.5",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "30.3643",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС WOG&lt;/b&gt;&lt;br&gt;Телефон: (+38033)2787914&lt;br&gt;Адрес: Окр. дор., ул. Берковецкая, 6, между Варшавской и Житомирской тр., около Ашана и Эпицентра"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "50.6586",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "29.8808",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС Авиаком&lt;/b&gt;&lt;br&gt;Телефон: (+38045)7752175&lt;br&gt;Адрес: 56 км. тр. М-07 (Е-373) Киев-Ковель-Ягодин-Люблин"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.551",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "53.4085",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_id": 8,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type_name": "РосБерлио",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "descr": "&lt;b&gt;АЗС ООО Протон-А&lt;/b&gt;&lt;br&gt;Телефон: 8-919-680-07-77&lt;br&gt;Адрес: 1130 км а/д М7, Татарстан, Актанышский район (слева)"</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх)
    
-   msg — повідомлення сервера (наприклад, «OK»)
    
-   list — масив об’єктів АЗС:
    
-   lat — широта АЗС
    
-   lon — довгота АЗС
    
-   type\_id — ідентифікатор типу АЗС
    
-   type\_name — назва типу АЗС
    
-   descr — опис АЗС, зокрема адреса та контактний телефон
