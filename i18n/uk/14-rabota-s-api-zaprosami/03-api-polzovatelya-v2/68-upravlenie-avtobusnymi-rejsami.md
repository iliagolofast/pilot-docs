---
title: "Керування автобусними рейсами"
---

Цей API використовується для керування автобусними рейсами та прив’язкою транспортних засобів до маршрутів. Він створює маршрути та призначає транспортні засоби на рейси.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php

### Параметри запиту

Щоб отримати потрібні дані, додайте команду.

-   cmd — команда для виконання
    

Доступні команди

-   setLine — створення нового автобусного маршруту
    
-   bindControl — прив’язка транспортного засобу до маршруту
    
-   bindLineToVeh — прив’язка маршруту до транспорту за ID
    
-   unbindControl — видалення прив’язки транспортного засобу
    
-   listLines — отримання списку маршрутів
    
-   setControl — призначення автобуса на рейс
    
-   unsetControl — видалення призначення на рейс
    
-   data — дані у форматі JSON, які передаються в тілі запиту
    

## Приклади

### Створення автобусного маршруту

Команда setLine створює новий маршрут із указаними параметрами та додає зупинки маршруту.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=setLine</div></td></tr></tbody></table>

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"account_id": "3008", &nbsp;</span></div><div><span>&nbsp;"bidirectional": 1,&nbsp; &nbsp;</span></div><div><span>&nbsp;"description": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"label": "123",&nbsp; &nbsp;</span></div><div><span>&nbsp;"name": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"number": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp;"type_id": 0,&nbsp; &nbsp;</span></div><div><span>&nbsp;"uid": "dhqwdh"</span></div><div><span>&nbsp;"points": [&nbsp;</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "45.0207",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "33.9993",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "Аэропорт__", &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35, &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "91",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 600,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 700,&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e2-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "44.9078",</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "34.0784",</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "7я горбольница",</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35,</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "90",</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 1000,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 900,</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e8-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp;&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметри запиту

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип даних</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; account_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Номер договору</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; bidirectional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рейс двоспрямований (1 — туди й назад, 0 — односпрямований)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; label</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Додаткова мітка маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер маршруту (текст або цифра)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип транспорту: 0 — автобус, 1 — тролейбус, 2 — трамвай, 3 — маршрутка.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; points</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Масив</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список зупинок маршруту</span></div></td></tr></tbody></table>

Параметри зупинки

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип даних</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lat</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта центру зупинки (десяткове число)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lon</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Довгота центру зупинки (десяткове число)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва зупинки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; price</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вартість проїзду від попередньої зупинки (десяткове число)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; radius</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Радіус зони зупинки в метрах (число)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; silent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заборона сповіщень: 1 — заборонено, 0 — дозволено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; stop_type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>Тип зупинки: 0 — звичайна, 1 — технічна (пасажири не рахуються), 2 — кінцева (лічильник обнуляється — усі пасажири виходять)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час прибуття на зупинку відносно попередньої (у секундах)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Число</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час стоянки на зупинці (у секундах)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор зупинки</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут успешно создан",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "dhqwdh",</span></div><div><span>&nbsp; &nbsp; "lineuid": "2567"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметри відповіді

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус виконання:&nbsp;success&nbsp;або&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повідомлення про результат виконання</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дані про створений маршрут</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор створеного маршруту</span></div></td></tr></tbody></table>

### Прив’язка транспортного засобу до маршруту

Команда bindControl використовується для прив’язки транспортного засобу до конкретного маршруту. Команда пов’язує GPS-трекер із маршрутом, вказує час дії прив’язки та налаштовує URL для отримання сповіщень про події, наприклад, прибуття на зупинку або відчинення дверей.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>bindControl</span></div></td></tr></tbody></table>

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "121e1e1e12",&nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "imei": "12304", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "lineuid": "2e23e23e2e", &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php"</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметри запиту

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип даних</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор прив’язки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; IMEI транспортного засобу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор маршруту</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час початку дії прив’язки (у форматі timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час завершення дії прив’язки (у форматі timestamp; якщо не вказано, то термін дії не обмежений)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL для сповіщень про події (наприклад, прибуття на зупинку)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; prognoze_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL для прогнозів прибуття на зупинки</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка успешно создана",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "121e1e1e12",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Параметри відповіді

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус виконання:&nbsp;success&nbsp;або&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повідомлення про результат виконання</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дані про створену прив’язку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор прив’язки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Унікальний ідентифікатор маршруту</span></div></td></tr></tbody></table>

Або використайте команду bindLineToVeh для спрощеної прив’язки маршруту до транспортного засобу за ID маршруту.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindLineToVeh</div></td></tr></tbody></table>

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345",</div><div>&nbsp; &nbsp; "ts": "1392294840"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

### Видалення прив’язки транспортного засобу до автобусної лінії

unbindControl — команда для видалення раніше створеної прив’язки транспортного засобу до маршруту. У запиті передається унікальний ідентифікатор прив’язки uid, який було створено раніше.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>unbindControl</span></div></td></tr></tbody></table>

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>json</span></div><div><span>{</span></div><div><span>&nbsp;&nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>}</span></div></td></tr></tbody></table>

-   uid — унікальний ідентифікатор прив’язки
    

Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка удалена",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Отримання списку маршрутів

Команда listLines дає змогу отримати список усіх маршрутів, доступних для поточного акаунта.

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=listLines</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "data": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "id": 2955,</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "number": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "description": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "account_id": 18306,</span></div><div><span>&nbsp; &nbsp; &nbsp; "active": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "label": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type_id": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": "0.00",</span></div><div><span>&nbsp; &nbsp; &nbsp; "interval": 10,</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": null</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

### Створення автобусного маршруту та прив’язка до нього транспорту

Комбінована команда setLine і bindControl створює новий автобусний маршрут і прив’язує транспортний засіб до цього маршруту.

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "qiwduhqiwdqkdqkn",</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp;</span></div><div><span>&nbsp; "name": "test",&nbsp;</span></div><div><span>&nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; "number": "861A",&nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php",</span></div><div><span>&nbsp; "points": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "53.352142",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "83.758749",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Барнаульский автовокзал",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "50",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "52.534012",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "85.178777",</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Бийский автовокзал",</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "100",</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут и привязка успешно созданы",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>
