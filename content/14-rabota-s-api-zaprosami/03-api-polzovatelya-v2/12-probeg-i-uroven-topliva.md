---
title: "Пробег и уровень топлива"
source: probeg_i_uroven_topliva_.html
---

Этот API получает информацию о пробеге транспорта и уровне топлива на конкретный момент времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=istatus — команда API для получения статуса
    
-   imei — идентификатор объекта в PILOT
    
-   unixtimestamp — момент времени в формате Unix timestamp
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;unixtimestamp=1408840780&amp;imei=356495042533101<span>&amp;node=1</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "код": 0,</div><div>&nbsp; &nbsp; "сообщение": "ОК",</div><div>&nbsp; &nbsp; "общий_пробег": 0,</div><div>&nbsp; &nbsp; "total_run_by_can": 0,</div><div>&nbsp; &nbsp; "моточасы": 0,</div><div>&nbsp; &nbsp; "топливные_датчики": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150325,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "t_53lls1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150326,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "lls2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "топливо": 0,</div><div>&nbsp; &nbsp; "unixtimestamp": 1408840780</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   общий\_пробег — общий пробег автомобиля на момент времени (км)
    
-   total\_run\_by\_can — пробег по данным CAN-шины (км)
    
-   моточасы — моточасы в секундах
    
-   топливо — количество топлива в баке на момент времени (л)
    
-   топливные\_датчики — массив данных по каждому датчику топлива, если их несколько:
    
-   info — описание датчика
    
-   идентификатор — уникальный ID датчика
    
-   имя поля — системное имя датчика
    
-   топливо — уровень топлива по данному датчику (л)
    
-   unixtimestamp — момент времени, для которого возвращены данные (Unix timestamp)
