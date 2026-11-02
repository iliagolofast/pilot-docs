---
title: "Список остановок маршрута"
source: spisok_ostanovok_marshruta.html
---

Этот API возвращает список всех остановок для указанного маршрута, включая информацию о координатах, типе остановки, порядке следования и стоимости проезда.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=stopList — команда для получения списка остановок
    
-   line\_num — номер маршрута
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stopList&amp;line_num=1Б&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "line": {</div><div>&nbsp; &nbsp; "id": 1083,</div><div>&nbsp; &nbsp; "name": "1Б",</div><div>&nbsp; &nbsp; "number": "1Б",</div><div>&nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; "description": "1Б",</div><div>&nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; "interval": 25,</div><div>&nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5085,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Центр занятости",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3315",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5086,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Автовокзал",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9039",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3236",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id— уникальный идентификатор маршрута/остановки
    
-   name— название маршрута или остановки
    
-   number— номер маршрута
    
-   bidirectional— 1, если маршрут двунаправленный
    
-   active— 1, если маршрут активен
    
-   price— стоимость проезда
    
-   interval— интервал следования в минутах
    
-   stops— массив остановок маршрута:
    
-   lat, lon — координаты остановки
    
-   radius— радиус зоны остановки в метрах
    
-   stop\_type— тип остановки: 0 — обычная, 1 — техническая, 2 — конечная
    
-   stop\_order— порядок следования остановки в маршруте
    
-   silent— 1 — не генерировать сообщения для этой остановки
