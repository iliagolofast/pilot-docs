---
title: "Поточний статус транспорту"
---

Цей API використовується для отримання актуальної інформації про поточний статус одного або кількох транспортних засобів, зокрема дані про місцеположення, швидкість, показання датчиків і технічний стан.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

Щоб отримати потрібні дані, додайте до адреси запиту параметри. Параметри вказуються після знака питання «?» і розділяються знаком «&».

-   cmd = status— команда для отримання інформації про статус
    
-   imei — унікальний ідентифікатор GPS-трекера
    
-   agents — список ідентифікаторів agentid, указується через кому для запиту статусів кількох об’єктів
    
-   veh\_numbers — реєстраційний номер транспортного засобу, точно як він указаний у системі, з обов’язковим дотриманням регістру літер і цифр
    
-   node — номер вузла, на якому потрібно виконати команду
    

<table><tbody><tr><td><span></span></td><td><div>У запиті має бути присутній один із трьох параметрів: imei, agents або veh_numbers.</div></td></tr></tbody></table>

## Приклади

### Запит за IMEI

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=status&amp;imei=357073296325265<span>&amp;node=1</span></div></td></tr></tbody></table>

###  Запит за кількома ідентифікаторами агентів

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=status&amp;agents=51594,44841&amp;node=1</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 44841,</div><div>&nbsp; &nbsp; &nbsp; "imei": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM2200",</div><div>&nbsp; &nbsp; &nbsp; "typeid": 27,</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "NURKA",</div><div>&nbsp; &nbsp; &nbsp; "folder": "REAL",</div><div>&nbsp; &nbsp; &nbsp; "created_time": 1518167398,</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 65345,</div><div>&nbsp; &nbsp; &nbsp; "initial_mileage": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": null,</div><div>&nbsp; &nbsp; &nbsp; "model": "ВАЗ (Lada) Kalina",</div><div>&nbsp; &nbsp; &nbsp; "info": " test",</div><div>&nbsp; &nbsp; &nbsp; "vin": "XTA219470K0259832",</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 27,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "47.119755",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.667492",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "moving": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking": 9267,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "firing": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "sensors_status": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "150549",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "выкл.",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621423461",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "GROUP!"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Датчик топлива",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "368013",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1249.4 -",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1249.4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "myGroup"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "reqest_time": 0.0642</div><div>}</div></td></tr></tbody></table>

Відповідь повертається у форматі JSON і містить:

 imei — унікальний номер трекера

-   distance — пройдена відстань за вказаний період
    
-   agent\_id —  ідентифікатор пристрою стеження
    
-   account\_id — номер облікового запису в системі
    
-   code — код статусу (0 - успіх)
    
-   msg — повідомлення про статус виконання запиту
    
-   data — масив об’єктів з інформацією про транспортні засоби:
    
-   agentid — ідентифікатор договору
    
-   imei — міжнародний ідентифікатор пристрою стеження
    
-   vin — ідентифікаційний номер транспортного засобу
    
-   configuration — модель трекера
    
-   typeid — числовий ідентифікатор типу транспортного засобу
    
-   type — тип транспортного засобу
    
-   vehiclenumber — реєстраційний номер транспортного засобу
    
-   folder — організаційна група або філія
    
-   created\_time — час створення у форматі Unixtimestamp
    
-   uniqid — унікальний ідентифікатор
    
-   current\_mileage — поточний пробіг
    
-   initial\_mileage — початковий пробіг
    
-   driver\_name — ім’я водія
    
-   driver\_phone — телефон водія
    
-   model — модель транспортного засобу
    
-   info — додаткова інформація
    
-   status — інформація про поточний стан:
    
-   active — чи активний об’єкт (1 або 0)
    
-   speed — поточна швидкість
    
-   direction — поточний напрямок у градусах
    
-   lat — поточна широта
    
-   lon — поточна довгота
    
-   alt — поточна висота
    
-   satsinview — кількість видимих супутників
    
-   unixtimestamp — час останнього оновлення
    
-   moving — час у русі в секундах
    
-   parking — час паркування в секундах
    
-   firing — стан запалювання (1 — увімкнено, 0 — вимкнено)
    
-   sensors\_status — масив з інформацією про датчики:
    
-   name — назва датчика
    
-   id — ідентифікатор датчика
    
-   hum\_value — реальне значення після тарування
    
-   dig\_value — цифрове значення після тарування
    
-   raw\_value — необроблене значення до тарування
    
-   change\_ts — час останньої зміни значення у форматі Unixtimestamp
    
-   group — група датчика
    
-   reqest\_time — час виконання запиту в секундах
