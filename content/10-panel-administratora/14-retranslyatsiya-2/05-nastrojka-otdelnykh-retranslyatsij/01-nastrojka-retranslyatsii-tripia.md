---
title: "Настройка ретрансляции Tripia"
source: nastrojka_retranslyatsii_tripia.html
---

Tripia — протокол ретрансляции данных, предназначенный для передачи телематической информации о транспортных средствах во внешнюю систему Tripia в формате JSON.

Через протокол Tripia можно передавать:

— координаты и скорость транспортного средства

— данные о поездках

— состояние транспортного средства

— данные датчиков

— события GPS, ADAS и DMS

— данные CAN-шины

— информацию об идентикации водителя

Передача данных выполняется в режиме реального времени.

## Как добавить ретрансляцию

1\. Зайдите в административную панель

2\. Перейдите во вкладку «Машины»

3\. Найдите нужный объект, кликните правой кнопкой мыши на него и выберите в меню «Ретрансляция»

**![](images/drex_nastrojka_retranslyatsii_tripia_custom.png)**

4. В открывшемся окне нажмите кнопку добавления ретрансляции ![](images/drex_nastrojka_retranslyatsii_tripia_custom_2.png)

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_3.png)**

5\. В окне «Конфигурация» заполните поля для настройки ретрансляции

### Параметры подключения

При создании endpoint укажите следующие параметры:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значение</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tripia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 64.225.12.166</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 3000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Формат данных</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;JSON</span></div></td></tr></tbody></table>

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_4.png)**

### Периодичность передачи данных

Передача данных выполняется автоматически:

— каждые 30 секунд при включенном зажигании

— каждую 1 минуту при выключенном зажигании

## Передаваемые данные

### Информация о провайдере

Передаются данные организации-владельца транспорта:

-   название провайдера (Provider Name)
    
-   код провайдера (Provider Code)
    

### Информация о транспортном средстве

Передаются:

-   идентификатор транспортного средства
    
-   государственный номер
    
-   данные диспетчера
    

### Данные регистрации события

Передаются:

-   время события (Event Timestamp)
    
-   время отправки данных (Sent Timestamp)
    

### GPS-данные

Передаются основные навигационные параметры:

-   широта (Latitude)
    
-   долгота (Longitude)
    
-   скорость (Speed)
    
-   курс движения (Heading)
    
-   высота (Altitude)
    
-   количество спутников (Satellites)
    
-   HDOP
    
-   PDOP
    

### Данные подключения

Передаются параметры мобильной сети:

-   уровень сигнала
    
-   оператор связи (MCC/MNC)
    
-   тип соединения
    
-   Cell ID
    

### Статус транспортного средства

Передаются:

-   зажигание
    
-   движение
    
-   одометр
    
-   моточасы
    
-   напряжение аккумулятора
    

### События GPS

Передаются следующие события:

-   отключение аккумулятора
    
-   глушение сигнала (Jamming)
    
-   потеря спутников
    
-   буксировка транспортного средства
    
-   потеря сигнала связи
    
-   восстановление сигнала связи
    
-   резкое ускорение
    
-   резкий поворот
    
-   резкое торможение
    
-   авария (Crash)
    

### Данные датчиков GPS

Поддерживается передача данных следующих датчиков:

-   Температурные датчики
    
-   Датчики дверей и состояния кузова:
    
    — дверь водителя
    
    — дверь пассажира
    
    — боковая грузовая дверь
    
    — задняя грузовая дверь
    
    — капот двигателя
    
-   Дополнительные датчики:
    
    — кнопка тревоги (Panic Button)
    

### Телеметрия

Передаются признаки наличия следующих подсистем:

-   ADAS
    
-   DMS
    
-   Рефрижератор
    
-   CAN Bus
    
-   Driver ID
    

### События ADAS

Передаются события системы помощи водителю:

-   FCW (предупреждение о фронтальном столкновении)
    
-   LDW (контроль полосы движения)
    
-   LDWL
    
-   LDWR
    
-   PCW
    
-   PROX
    

### События DMS

Передаются события системы контроля водителя:

-   блокировка
    
-   потеря лица (Face Lost)
    
-   отвлечение внимания
    
-   частое зевание
    
-   взгляд в сторону
    
-   курение
    
-   разговор по телефону
    
-   сонливость
    
-   отсутствие ремня безопасности
    

### Данные CAN-шины

Передаются:

-   уровень топлива (%)
    
-   объем топлива (литры)
    
-   загрузка топлива
    
-   расход топлива
    
-   скорость
    
-   одометр
    
-   моточасы двигателя
    
-   состояние двери водителя
    
-   состояние двери пассажира
    

### Идентификация водителя (Driver ID)

Передаются:

-   тип идентификатора
    
-   код идентификатора
    
-   ID водителя
    
-   имя водителя
    

## Пример структуры передаваемого пакета

При передаче данных в Tripia система формирует JSON-пакет, содержащий информацию о транспортном средстве, местоположении, датчиках, событиях и телеметрии.

Пример структуры пакета:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "provider": {</span></div><div><span>&nbsp; &nbsp; "name": "Providers Name",</span></div><div><span>&nbsp; &nbsp; "code": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dispatcher": {</span></div><div><span>&nbsp; &nbsp; "name": "Dispatcher Name",</span></div><div><span>&nbsp; &nbsp; "identifier": "1234abc",</span></div><div><span>&nbsp; &nbsp; "licensePlate": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "registry": {</span></div><div><span>&nbsp; &nbsp; "eventTimestamp": "2016-01-01T00:00:00Z",</span></div><div><span>&nbsp; &nbsp; "sentTimestamp": "2016-01-01T00:00:00Z"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gps": {</span></div><div><span>&nbsp; &nbsp; "latitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "longitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "speed": 100,</span></div><div><span>&nbsp; &nbsp; "heading": 123,</span></div><div><span>&nbsp; &nbsp; "altitude": 123,</span></div><div><span>&nbsp; &nbsp; "satellites": 12,</span></div><div><span>&nbsp; &nbsp; "hdop": 1.2,</span></div><div><span>&nbsp; &nbsp; "pdop": 1.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "connection": {</span></div><div><span>&nbsp; &nbsp; "signal": 85,</span></div><div><span>&nbsp; &nbsp; "operatorMCCMNC": "Entel",</span></div><div><span>&nbsp; &nbsp; "type": 2,</span></div><div><span>&nbsp; &nbsp; "cellID": 123456789</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; "ignition": 1,</span></div><div><span>&nbsp; &nbsp; "movement": 1,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "hourMeter": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "battery": 12.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsEvents": {</span></div><div><span>&nbsp; &nbsp; "batteryDisconnected": 0,</span></div><div><span>&nbsp; &nbsp; "jamming": 1,</span></div><div><span>&nbsp; &nbsp; "satellitesLost": 0,</span></div><div><span>&nbsp; &nbsp; "towedVehicule": 1,</span></div><div><span>&nbsp; &nbsp; "signalLost": 0,</span></div><div><span>&nbsp; &nbsp; "signalRecovered": 1,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driving": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshAcceleration": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshTurn": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshBraking": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "crash": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsSensors": {</span></div><div><span>&nbsp; &nbsp; "temperature1": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature2": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature3": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature4": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature5": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature6": 12.3,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 0,</span></div><div><span>&nbsp; &nbsp; "sideLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "rearLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "engineHood": 1,</span></div><div><span>&nbsp; &nbsp; "panicButton": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "telemetry": {</span></div><div><span>&nbsp; &nbsp; "adas": 0,</span></div><div><span>&nbsp; &nbsp; "dms": 1,</span></div><div><span>&nbsp; &nbsp; "reefer": 0,</span></div><div><span>&nbsp; &nbsp; "canbus": 1,</span></div><div><span>&nbsp; &nbsp; "driverid": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "adasEvents": {</span></div><div><span>&nbsp; &nbsp; "fcw": 1,</span></div><div><span>&nbsp; &nbsp; "ldw": 1,</span></div><div><span>&nbsp; &nbsp; "ldwl": 1,</span></div><div><span>&nbsp; &nbsp; "ldwr": 1,</span></div><div><span>&nbsp; &nbsp; "pcw": 1,</span></div><div><span>&nbsp; &nbsp; "prox": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dmsEvents": {</span></div><div><span>&nbsp; &nbsp; "blocked": 0,</span></div><div><span>&nbsp; &nbsp; "faceLost": 0,</span></div><div><span>&nbsp; &nbsp; "distraction": 0,</span></div><div><span>&nbsp; &nbsp; "frequentYawning": 0,</span></div><div><span>&nbsp; &nbsp; "lookingAside": 1,</span></div><div><span>&nbsp; &nbsp; "smoking": 0,</span></div><div><span>&nbsp; &nbsp; "calling": 1,</span></div><div><span>&nbsp; &nbsp; "drowsiness": 0,</span></div><div><span>&nbsp; &nbsp; "seatbelt": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "canbusData": {</span></div><div><span>&nbsp; &nbsp; "fuelPercent": 12,</span></div><div><span>&nbsp; &nbsp; "fuelLiters": 128,</span></div><div><span>&nbsp; &nbsp; "fuelLoad": 80,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "speed": 123,</span></div><div><span>&nbsp; &nbsp; "fuelConsumption": 11.12,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 1,</span></div><div><span>&nbsp; &nbsp; "engineHours": 12345678.9</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "driveridData": {</span></div><div><span>&nbsp; &nbsp; "type": 1,</span></div><div><span>&nbsp; &nbsp; "codeId": "123456789",</span></div><div><span>&nbsp; &nbsp; "driverName": "Nombre conductor",</span></div><div><span>&nbsp; &nbsp; "driverId": "123456789"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Пример приведен для ознакомления со структурой данных. Фактический состав полей зависит от подключенного оборудования, настроек ретрансляции и доступных датчиков транспортного средства.
