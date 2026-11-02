---
title: "Создание задания"
source: sozdanie_zadaniya.html
---

Этот API предназначен для создания заданий в системе для договоров с подключённым модулем [PTM](../../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/index.html).

### Базовый путь API 

<table><tbody><tr><td><span></span></td><td><div>/backend/public/api/task</div></td></tr></tbody></table>

### Адрес запроса

Для выполнения запроса используйте формат адреса:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/api/task</div></td></tr></tbody></table>

### Доступ к API

Для доступа к API используется HTTP Basic аутентификация. Логин и пароль должны быть в формате:

<table><tbody><tr><td><span></span></td><td><div>логин_из_PILOT:пароль_из_PILOT</div></td></tr></tbody></table>

### Пример запроса API

<table><tbody><tr><td><span></span></td><td><div>https://demo:demo@tasks.pilot-gps.com/backend/public/api/task/create_universal</div></td></tr></tbody></table>

### Формат ответа API

Ответ API стандартизирован и имеет такой формат:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,&nbsp; // TRUE - успешный запрос, FALSE - ошибка</div><div>&nbsp; &nbsp; "msg": "OK",&nbsp; // Сообщение об ошибке, если она есть</div><div>&nbsp; &nbsp; "httpCode": 200,&nbsp; // Код ошибки</div><div>&nbsp; &nbsp; "data": [],&nbsp; // Данные ответа, если они есть</div><div>&nbsp; &nbsp; "et": 0,&nbsp; // Время выполнения запроса</div><div>&nbsp; &nbsp; "exceptionMsg": "Exception"&nbsp; // Сообщение об исключении</div><div>}</div></td></tr></tbody></table>

Статусы и коды ошибок:

-   200 — Запрос выполнен успешно
    
-   400 — Отсутствуют обязательные параметры
    
-   401 — Ошибка авторизации: неверные логин или пароль
    
-   404 — Не найден маршрут API
    
-   500 — Ошибка на сервере
    

### Как создать задание

Метод запроса: POST

Для создания задания с шаблоном Universal нужно передать параметры. Шаблон Universal создаётся автоматически в системе, и дополнительные шаблоны должны быть предварительно настроены в интерфейсе PTM.

### Параметры задания для шаблона Universal

Для задания с шаблоном Universal используется следующий набор параметров:

1\. external\_id: Внешний идентификатор задания (строка, по умолчанию NULL)

2\. vehicle\_plate: Номер транспортного средства (по умолчанию NULL). Если номер не существует в системе, он будет создан как наёмный транспорт

3\. driver\_name: ФИО водителя (по умолчанию NULL). Если не указано, используется значение из vehicle\_plate. Если водитель не существует в системе, он будет создан как наёмный водитель

4\. type\_name: Тип задания (по умолчанию Delivery). Если такого типа нет, он будет создан

5\. template\_name: Название шаблона задания (по умолчанию Universal). Если шаблон отсутствует, он будет создан

6\. time\_zone: Временная зона, смещение от UTC (число, время в минутах от UTC, по умолчанию NULL)

7\. time\_zone\_name: Название временной зоны (строка, по умолчанию NULL)

8\. c\_begin\_time: Плановое время начала задания (число — метка времени в секундах, по умолчанию текущее время)

9\. c\_return\_time: Плановое время завершения задания (число, по умолчанию NULL)

10\. route\_name: Название маршрута (строка, по умолчанию NULL)

11\. cargo: Название груза (строка, по умолчанию NULL)

12\. temp\_min: Минимальная температура (число, по умолчанию 2°C)

13\. temp\_max: Максимальная температура (число, по умолчанию 8°C)

14\. description: Описание задания (строка, по умолчанию NULL)

15\. addresses\_list (обязательно): Список адресов или точек маршрута (строки с адресами или координатами)

### Параметры, связанные с адресом маршрута

Адрес для каждой точки маршрута может быть дополнен различными параметрами с суффиксами, которые описывают характеристики маршрута и географические данные.

1\. addresses\_list: Список адресов или точек маршрута (строки с адресами или координатами).

2\. addresses\_list\_lat: Массив широт точек маршрута. Если указана, будет использована для каждого адреса

3\. addresses\_list\_lng: Массив долгот точек маршрута. Массив чисел, обозначающих широту точек маршрута

4\. addresses\_list\_date\_point: Массив меток времени (секунды), указывающих плановое время прибытия

5\. addresses\_list\_date\_point\_to: Массив меток времени (секунды), указывающих плановое время убытия. Рассчитывается автоматически, если не указано

6\. addresses\_list\_time\_point: Массив времени загрузки/разгрузки на точке маршрута в минутах

7\. addresses\_list\_redirect: Признак перенаправления текущего адреса в следующий. Указывает, что адрес перенаправляется в следующий по маршруту.

8\. addresses\_list\_geofence\_id: Идентификаторы геозон для каждой точки маршрута

9\. addresses\_list\_warehouse: Названия складов или объектов для каждой точки маршрута

10\. addresses\_list\_ticket: Массив уникальных идентификаторов заказов для каждой точки маршрута

11\. addresses\_list\_phones: Контактные телефоны для каждой точки маршрута

12\. addresses\_list\_schedule: Рабочее расписание для каждой точки маршрута

13\. addresses\_list\_vehicle\_volume: Объём груза в транспортном средстве

14\. addresses\_list\_trailer\_volume: Объём груза в прицепе

15\. addresses\_list\_action: Описание действий для выполнения на каждой точке маршрута

16\. addresses\_list\_agent\_id: Идентификатор объекта из системы PILOT, используемый для мусорных контейнеров

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>fetch("https://tasks.pilot-gps.com/backend/public/api/task/create_universal", {</div><div>&nbsp; &nbsp; "headers": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Authorization": "Basic ZGVtbzpkZW1v", // base64 кодирование "demo:demo"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "method": "POST",</div><div>&nbsp; &nbsp; "body": JSON.stringify({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "external_id": "T-5677786754",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "vehicle_plate": "PT 125 AA 66",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type_name": "Delivery",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "template_name": "Universal",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone": -180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone_name": "Europe/Moscow",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_begin_time": 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_return_time": 1723238700,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "route_name": "My route",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "cargo": "Milk",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_min": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_max": 6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "description": "Test",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "215, улица Народного Ополчения, Ростов-на-Дону",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "47.227196,39.705228",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Client 2"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lat": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.234256,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.227196,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.216077</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lng": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706467,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.705228,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706928</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_date_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723234800,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723237800</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_time_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_rad_geo": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; })</div><div>});</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "httpCode": 200,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 12563</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "et": 0.5612</div><div>}</div></td></tr></tbody></table>
