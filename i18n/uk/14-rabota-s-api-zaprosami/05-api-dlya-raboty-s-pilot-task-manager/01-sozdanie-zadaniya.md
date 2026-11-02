---
title: "Створення завдання"
---

Цей API призначений для створення завдань у системі для договорів із підключеним модулем [PTM](../../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/index.html).

### Базовий шлях API 

<table><tbody><tr><td><span></span></td><td><div>/backend/public/api/task</div></td></tr></tbody></table>

### Адреса запиту

Для виконання запиту використовуйте формат адреси:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/api/task</div></td></tr></tbody></table>

### Доступ до API

Для доступу до API використовується HTTP Basic автентифікація. Логін і пароль мають бути у форматі:

<table><tbody><tr><td><span></span></td><td><div>логін_із_PILOT:пароль_із_PILOT</div></td></tr></tbody></table>

### Приклад запиту API

<table><tbody><tr><td><span></span></td><td><div>https://demo:demo@tasks.pilot-gps.com/backend/public/api/task/create_universal</div></td></tr></tbody></table>

### Формат відповіді API

Відповідь API стандартизована та має такий формат:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,&nbsp; // TRUE - успешный запрос, FALSE - ошибка</div><div>&nbsp; &nbsp; "msg": "OK",&nbsp; // Сообщение об ошибке, если она есть</div><div>&nbsp; &nbsp; "httpCode": 200,&nbsp; // Код ошибки</div><div>&nbsp; &nbsp; "data": [],&nbsp; // Данные ответа, если они есть</div><div>&nbsp; &nbsp; "et": 0,&nbsp; // Время выполнения запроса</div><div>&nbsp; &nbsp; "exceptionMsg": "Exception"&nbsp; // Сообщение об исключении</div><div>}</div></td></tr></tbody></table>

Статуси та коди помилок:

-   200 — Запит виконано успішно
    
-   400 — Відсутні обов’язкові параметри
    
-   401 — Помилка авторизації: неправильні логін або пароль
    
-   404 — Не знайдено маршрут API
    
-   500 — Помилка на сервері
    

### Як створити завдання

Метод запиту: POST

Для створення завдання із шаблоном Universal потрібно передати параметри. Шаблон Universal створюється автоматично в системі, а додаткові шаблони мають бути попередньо налаштовані в інтерфейсі PTM.

### Параметри завдання для шаблону Universal

Для завдання із шаблоном Universal використовується такий набір параметрів:

1\. external\_id: Зовнішній ідентифікатор завдання (рядок, за замовчуванням NULL)

2\. vehicle\_plate: Номер транспортного засобу (за замовчуванням NULL). Якщо номера не існує в системі, його буде створено як найманий транспорт

3\. driver\_name: ПІБ водія (за замовчуванням NULL). Якщо не вказано, використовується значення з vehicle\_plate. Якщо водія не існує в системі, його буде створено як найманого водія

4\. type\_name: Тип завдання (за замовчуванням Delivery). Якщо такого типу немає, його буде створено

5\. template\_name: Назва шаблону завдання (за замовчуванням Universal). Якщо шаблон відсутній, його буде створено

6\. time\_zone: Часова зона, зсув від UTC (число, час у хвилинах від UTC, за замовчуванням NULL)

7\. time\_zone\_name: Назва часової зони (рядок, за замовчуванням NULL)

8\. c\_begin\_time: Планований час початку завдання (число — мітка часу в секундах, за замовчуванням поточний час)

9\. c\_return\_time: Планований час завершення завдання (число, за замовчуванням NULL)

10\. route\_name: Назва маршруту (рядок, за замовчуванням NULL)

11\. cargo: Назва вантажу (рядок, за замовчуванням NULL)

12\. temp\_min: Мінімальна температура (число, за замовчуванням 2°C)

13\. temp\_max: Максимальна температура (число, за замовчуванням 8°C)

14\. description: Опис завдання (рядок, за замовчуванням NULL)

15\. addresses\_list (обов’язково): список адрес або точок маршруту (рядки з адресами або координатами)

### Параметри, пов’язані з адресою маршруту

Адреса для кожної точки маршруту може бути доповнена різними параметрами із суфіксами, які описують характеристики маршруту та географічні дані.

1\. addresses\_list: Список адрес або точок маршруту (рядки з адресами або координатами).

2\. addresses\_list\_lat: Масив широт точок маршруту. Якщо вказано, буде використано для кожної адреси

3\. addresses\_list\_lng: Масив довгот точок маршруту. Масив чисел, що позначають широту точок маршруту

4\. addresses\_list\_date\_point: Масив міток часу (секунди), що вказують планований час прибуття

5\. addresses\_list\_date\_point\_to: Масив міток часу (секунди), що вказують планований час відбуття. Розраховується автоматично, якщо не вказано

6\. addresses\_list\_time\_point: Масив часу завантаження/розвантаження на точці маршруту в хвилинах

7\. addresses\_list\_redirect: Ознака перенаправлення поточної адреси на наступну. Вказує, що адреса перенаправляється на наступну за маршрутом.

8\. addresses\_list\_geofence\_id: Ідентифікатори геозон для кожної точки маршруту

9\. addresses\_list\_warehouse: Назви складів або об’єктів для кожної точки маршруту

10\. addresses\_list\_ticket: Масив унікальних ідентифікаторів замовлень для кожної точки маршруту

11\. addresses\_list\_phones: Контактні телефони для кожної точки маршруту

12\. addresses\_list\_schedule: Робочий розклад для кожної точки маршруту

13\. addresses\_list\_vehicle\_volume: Обсяг вантажу в транспортному засобі

14\. addresses\_list\_trailer\_volume: Обсяг вантажу в причепі

15\. addresses\_list\_action: Опис дій для виконання на кожній точці маршруту

16\. addresses\_list\_agent\_id: Ідентифікатор об’єкта із системи PILOT, що використовується для сміттєвих контейнерів

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>fetch("https://tasks.pilot-gps.com/backend/public/api/task/create_universal", {</div><div>&nbsp; &nbsp; "headers": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Authorization": "Basic ZGVtbzpkZW1v", // base64 кодирование "demo:demo"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "method": "POST",</div><div>&nbsp; &nbsp; "body": JSON.stringify({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "external_id": "T-5677786754",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "vehicle_plate": "PT 125 AA 66",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type_name": "Delivery",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "template_name": "Universal",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone": -180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone_name": "Europe/Moscow",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_begin_time": 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_return_time": 1723238700,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "route_name": "My route",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "cargo": "Milk",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_min": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_max": 6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "description": "Test",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "215, улица Народного Ополчения, Ростов-на-Дону",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "47.227196,39.705228",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Client 2"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lat": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.234256,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.227196,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.216077</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lng": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706467,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.705228,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706928</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_date_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723234800,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723237800</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_time_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_rad_geo": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; })</div><div>});</div></td></tr></tbody></table>

### Приклад відповіді

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "httpCode": 200,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 12563</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "et": 0.5612</div><div>}</div></td></tr></tbody></table>
