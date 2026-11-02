---
title: "Управление автобусными рейсами"
source: upravlenie_avtobusnymi_rejsami.html
---

Этот API используется для управления автобусными рейсами и привязкой транспортных средств к маршрутам. Он создаёт маршруты и назначает транспортные средства на рейсы.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php

### Параметры запроса

Чтобы получить нужные данные, добавьте команду.

-   cmd — команда для выполнения
    

Доступные команды

-   setLine — создание нового автобусного маршрута
    
-   bindControl — привязка транспортного средства к маршруту
    
-   bindLineToVeh — привязка маршрута к транспорту по ID
    
-   unbindControl — удаление привязки транспортного средства
    
-   listLines — получение списка маршрутов
    
-   setControl — назначение автобуса на рейс
    
-   unsetControl — удаление назначения на рейс
    
-   data — данные в формате JSON, которые передаются в теле запроса
    

## Примеры

### Создание автобусного маршрута

Команда setLine создаёт новый маршрут с указанными параметрами и добавляет остановки маршрута.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=setLine</div></td></tr></tbody></table>

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"account_id": "3008", &nbsp;</span></div><div><span>&nbsp;"bidirectional": 1,&nbsp; &nbsp;</span></div><div><span>&nbsp;"description": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"label": "123",&nbsp; &nbsp;</span></div><div><span>&nbsp;"name": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"number": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp;"type_id": 0,&nbsp; &nbsp;</span></div><div><span>&nbsp;"uid": "dhqwdh"</span></div><div><span>&nbsp;"points": [&nbsp;</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "45.0207",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "33.9993",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "Аэропорт__", &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35, &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "91",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 600,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 700,&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e2-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "44.9078",</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "34.0784",</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "7я горбольница",</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35,</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "90",</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 1000,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 900,</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e8-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp;&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметры запроса

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип данных</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; account_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Номер договора</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; bidirectional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рейс двунаправленный (1 — туда-обратно, 0 — однонаправленный)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; label</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дополнительная метка маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер маршрута (текст или цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип транспорта: 0 — автобус, 1 — троллейбус, 2 — трамвай, 3 — маршрутка.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; points</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Массив</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список остановок маршрута</span></div></td></tr></tbody></table>

Параметры остановки

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип данных</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lat</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта центра остановки (десятичная цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lon</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Долгота центра остановки (десятичная цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название остановки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; price</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стоимость проезда от предыдущей остановки (десятичная цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; radius</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Радиус зоны остановки в метрах (цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; silent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Запрет уведомлений: 1 — запрещено, 0 — разрешено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; stop_type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>Тип остановки: 0 — обычная, 1 — техническая (пассажиры не считаются), 2 — конечная (счётчик обнуляется — все пассажиры выходят)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время прибытия на остановку относительно предыдущей (в секундах)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время стоянки на остановке (в секундах)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор остановки</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут успешно создан",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "dhqwdh",</span></div><div><span>&nbsp; &nbsp; "lineuid": "2567"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметры ответа

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус выполнения:&nbsp;success&nbsp;или&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сообщение о результате выполнения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Данные о созданном маршруте</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор созданного маршрута</span></div></td></tr></tbody></table>

### Привязка транспортного средства к маршруту

Команда bindControl используется для привязки транспортного средства к конкретному маршруту. Команда связывает GPS-трекер с маршрутом, указывает время действия привязки и настраивает URL для получения уведомлений о событиях, например, прибытие на остановку или открытие дверей.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>bindControl</span></div></td></tr></tbody></table>

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "121e1e1e12",&nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "imei": "12304", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "lineuid": "2e23e23e2e", &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php"</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметры запроса

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип данных</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор привязки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; IMEI транспортного средства</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор маршрута</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время начала действия привязки (в формате timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время окончания действия привязки (в формате timestamp; если не указано, то срок действия не ограничен)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL для уведомлений о событиях (например, прибытие на остановку)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; prognoze_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Строка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL для прогнозов прибытия на остановки</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка успешно создана",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "121e1e1e12",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметры ответа

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус выполнения:&nbsp;success&nbsp;или&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сообщение о результате выполнения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Данные о созданной привязке</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор привязки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уникальный идентификатор маршрута</span></div></td></tr></tbody></table>

Или используйте команду bindLineToVeh для упрощённой привязки маршрута к транспортному средству по ID маршрута.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindLineToVeh</div></td></tr></tbody></table>

Тело запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345",</div><div>&nbsp; &nbsp; "ts": "1392294840"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

### Удаление привязки транспортного средства к автобусной линии

unbindControl — команда для удаления ранее созданной привязки транспортного средства к маршруту. В запросе передаётся уникальный идентификатор привязки uid, который был создан ранее.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>unbindControl</span></div></td></tr></tbody></table>

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>json</span></div><div><span>{</span></div><div><span>&nbsp;&nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>}</span></div></td></tr></tbody></table>

-   uid — уникальный идентификатор привязки
    

Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка удалена",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Получение списка маршрутов

Команда listLines позволяет получить список всех маршрутов, доступных для текущего аккаунта.

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=listLines</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "data": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "id": 2955,</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "number": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "description": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "account_id": 18306,</span></div><div><span>&nbsp; &nbsp; &nbsp; "active": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "label": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type_id": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": "0.00",</span></div><div><span>&nbsp; &nbsp; &nbsp; "interval": 10,</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": null</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

### Создание автобусного маршрута и привязка к нему транспорта

Комбинированная команда setLine и bindControl создаёт новый автобусный маршрут и привязывает транспортное средство к этому маршруту.

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "qiwduhqiwdqkdqkn",</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp;</span></div><div><span>&nbsp; "name": "test",&nbsp;</span></div><div><span>&nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; "number": "861A",&nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php",</span></div><div><span>&nbsp; "points": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "53.352142",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "83.758749",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Барнаульский автовокзал",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "50",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "52.534012",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "85.178777",</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Бийский автовокзал",</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "100",</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут и привязка успешно созданы",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>
