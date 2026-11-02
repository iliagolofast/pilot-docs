---
title: "Налаштування ретрансляції Tripia"
---

Tripia — протокол ретрансляції даних, призначений для передавання телематичної інформації про транспортні засоби у зовнішню систему Tripia у форматі JSON.

Через протокол Tripia можна передавати:

— координати та швидкість транспортного засобу

— дані про поїздки

— стан транспортного засобу

— дані датчиків

— події GPS, ADAS і DMS

— дані CAN-шини

— інформацію про ідентифікацію водія

Передавання даних виконується в режимі реального часу.

## Як додати ретрансляцію

1\. Зайдіть в адміністративну панель

2\. Перейдіть на вкладку «Машини»

3\. Знайдіть потрібний об’єкт, клацніть на ньому правою кнопкою миші та виберіть у меню «Ретрансляція»

**![](images/drex_nastrojka_retranslyatsii_tripia_custom.png)**

4. У вікні, що відкрилося, натисніть кнопку додавання ретрансляції ![](images/drex_nastrojka_retranslyatsii_tripia_custom_2.png)

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_3.png)**

5\. У вікні «Конфігурація» заповніть поля для налаштування ретрансляції

### Параметри підключення

Під час створення endpoint вкажіть такі параметри:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значення</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tripia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 64.225.12.166</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 3000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Формат даних</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;JSON</span></div></td></tr></tbody></table>

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_4.png)**

### Періодичність передавання даних

Передавання даних виконується автоматично:

— кожні 30 секунд за ввімкненого запалювання

— кожну 1 хвилину за вимкненого запалювання

## Дані, що передаються

### Інформація про провайдера

Передаються дані організації-власника транспорту:

-   назва провайдера (Provider Name)
    
-   код провайдера (Provider Code)
    

### Інформація про транспортний засіб

Передаються:

-   ідентифікатор транспортного засобу
    
-   державний номер
    
-   дані диспетчера
    

### Дані реєстрації події

Передаються:

-   час події (Event Timestamp)
    
-   час надсилання даних (Sent Timestamp)
    

### GPS-дані

Передаються основні навігаційні параметри:

-   широта (Latitude)
    
-   довгота (Longitude)
    
-   швидкість (Speed)
    
-   курс руху (Heading)
    
-   висота (Altitude)
    
-   кількість супутників (Satellites)
    
-   HDOP
    
-   PDOP
    

### Дані підключення

Передаються параметри мобільної мережі:

-   рівень сигналу
    
-   оператор зв’язку (MCC/MNC)
    
-   тип з’єднання
    
-   Cell ID
    

### Статус транспортного засобу

Передаються:

-   запалювання
    
-   рух
    
-   одометр
    
-   мотогодини
    
-   напруга акумулятора
    

### Події GPS

Передаються такі події:

-   відключення акумулятора
    
-   глушіння сигналу (Jamming)
    
-   втрата супутників
    
-   буксирування транспортного засобу
    
-   втрата сигналу зв’язку
    
-   відновлення сигналу зв’язку
    
-   різке прискорення
    
-   різкий поворот
    
-   різке гальмування
    
-   аварія (Crash)
    

### Дані датчиків GPS

Підтримується передавання даних таких датчиків:

-   Температурні датчики
    
-   Датчики дверей і стану кузова:
    
    — двері водія
    
    — двері пасажира
    
    — бічні вантажні двері
    
    — задні вантажні двері
    
    — капот двигуна
    
-   Додаткові датчики:
    
    — кнопка тривоги (Panic Button)
    

### Телеметрія

Передаються ознаки наявності таких підсистем:

-   ADAS
    
-   DMS
    
-   Рефрижератор
    
-   CAN Bus
    
-   Driver ID
    

### Події ADAS

Передаються події системи допомоги водієві:

-   FCW (попередження про фронтальне зіткнення)
    
-   LDW (контроль смуги руху)
    
-   LDWL
    
-   LDWR
    
-   PCW
    
-   PROX
    

### Події DMS

Передаються події системи контролю водія:

-   блокування
    
-   втрата обличчя (Face Lost)
    
-   відволікання уваги
    
-   часте позіхання
    
-   погляд убік
    
-   куріння
    
-   розмова по телефону
    
-   сонливість
    
-   відсутність ременя безпеки
    

### Дані CAN-шини

Передаються:

-   рівень палива (%)
    
-   обсяг палива (літри)
    
-   завантаження палива
    
-   витрата палива
    
-   швидкість
    
-   одометр
    
-   мотогодини двигуна
    
-   стан дверей водія
    
-   стан дверей пасажира
    

### Ідентифікація водія (Driver ID)

Передаються:

-   тип ідентифікатора
    
-   код ідентифікатора
    
-   ID водія
    
-   ім’я водія
    

## Приклад структури пакета, що передається

Під час передавання даних у Tripia система формує JSON-пакет, що містить інформацію про транспортний засіб, місцезнаходження, датчики, події та телеметрію.

Приклад структури пакета:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "provider": {</span></div><div><span>&nbsp; &nbsp; "name": "Providers Name",</span></div><div><span>&nbsp; &nbsp; "code": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dispatcher": {</span></div><div><span>&nbsp; &nbsp; "name": "Dispatcher Name",</span></div><div><span>&nbsp; &nbsp; "identifier": "1234abc",</span></div><div><span>&nbsp; &nbsp; "licensePlate": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "registry": {</span></div><div><span>&nbsp; &nbsp; "eventTimestamp": "2016-01-01T00:00:00Z",</span></div><div><span>&nbsp; &nbsp; "sentTimestamp": "2016-01-01T00:00:00Z"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gps": {</span></div><div><span>&nbsp; &nbsp; "latitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "longitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "speed": 100,</span></div><div><span>&nbsp; &nbsp; "heading": 123,</span></div><div><span>&nbsp; &nbsp; "altitude": 123,</span></div><div><span>&nbsp; &nbsp; "satellites": 12,</span></div><div><span>&nbsp; &nbsp; "hdop": 1.2,</span></div><div><span>&nbsp; &nbsp; "pdop": 1.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "connection": {</span></div><div><span>&nbsp; &nbsp; "signal": 85,</span></div><div><span>&nbsp; &nbsp; "operatorMCCMNC": "Entel",</span></div><div><span>&nbsp; &nbsp; "type": 2,</span></div><div><span>&nbsp; &nbsp; "cellID": 123456789</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; "ignition": 1,</span></div><div><span>&nbsp; &nbsp; "movement": 1,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "hourMeter": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "battery": 12.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsEvents": {</span></div><div><span>&nbsp; &nbsp; "batteryDisconnected": 0,</span></div><div><span>&nbsp; &nbsp; "jamming": 1,</span></div><div><span>&nbsp; &nbsp; "satellitesLost": 0,</span></div><div><span>&nbsp; &nbsp; "towedVehicule": 1,</span></div><div><span>&nbsp; &nbsp; "signalLost": 0,</span></div><div><span>&nbsp; &nbsp; "signalRecovered": 1,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driving": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshAcceleration": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshTurn": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshBraking": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "crash": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsSensors": {</span></div><div><span>&nbsp; &nbsp; "temperature1": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature2": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature3": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature4": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature5": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature6": 12.3,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 0,</span></div><div><span>&nbsp; &nbsp; "sideLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "rearLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "engineHood": 1,</span></div><div><span>&nbsp; &nbsp; "panicButton": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "telemetry": {</span></div><div><span>&nbsp; &nbsp; "adas": 0,</span></div><div><span>&nbsp; &nbsp; "dms": 1,</span></div><div><span>&nbsp; &nbsp; "reefer": 0,</span></div><div><span>&nbsp; &nbsp; "canbus": 1,</span></div><div><span>&nbsp; &nbsp; "driverid": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "adasEvents": {</span></div><div><span>&nbsp; &nbsp; "fcw": 1,</span></div><div><span>&nbsp; &nbsp; "ldw": 1,</span></div><div><span>&nbsp; &nbsp; "ldwl": 1,</span></div><div><span>&nbsp; &nbsp; "ldwr": 1,</span></div><div><span>&nbsp; &nbsp; "pcw": 1,</span></div><div><span>&nbsp; &nbsp; "prox": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dmsEvents": {</span></div><div><span>&nbsp; &nbsp; "blocked": 0,</span></div><div><span>&nbsp; &nbsp; "faceLost": 0,</span></div><div><span>&nbsp; &nbsp; "distraction": 0,</span></div><div><span>&nbsp; &nbsp; "frequentYawning": 0,</span></div><div><span>&nbsp; &nbsp; "lookingAside": 1,</span></div><div><span>&nbsp; &nbsp; "smoking": 0,</span></div><div><span>&nbsp; &nbsp; "calling": 1,</span></div><div><span>&nbsp; &nbsp; "drowsiness": 0,</span></div><div><span>&nbsp; &nbsp; "seatbelt": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "canbusData": {</span></div><div><span>&nbsp; &nbsp; "fuelPercent": 12,</span></div><div><span>&nbsp; &nbsp; "fuelLiters": 128,</span></div><div><span>&nbsp; &nbsp; "fuelLoad": 80,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "speed": 123,</span></div><div><span>&nbsp; &nbsp; "fuelConsumption": 11.12,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 1,</span></div><div><span>&nbsp; &nbsp; "engineHours": 12345678.9</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "driveridData": {</span></div><div><span>&nbsp; &nbsp; "type": 1,</span></div><div><span>&nbsp; &nbsp; "codeId": "123456789",</span></div><div><span>&nbsp; &nbsp; "driverName": "Nombre conductor",</span></div><div><span>&nbsp; &nbsp; "driverId": "123456789"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Приклад наведено для ознайомлення зі структурою даних. Фактичний склад полів залежить від підключеного обладнання, налаштувань ретрансляції та доступних датчиків транспортного засобу.
