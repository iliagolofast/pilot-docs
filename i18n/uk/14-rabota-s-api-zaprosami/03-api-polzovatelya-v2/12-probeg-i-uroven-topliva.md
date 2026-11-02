---
title: "Пробіг і рівень палива"
---

Цей API отримує інформацію про пробіг транспорту та рівень палива на конкретний момент часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=istatus — команда API для отримання статусу
    
-   imei — ідентифікатор об’єкта в PILOT
    
-   unixtimestamp — момент часу у форматі Unix timestamp
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;unixtimestamp=1408840780&amp;imei=356495042533101<span>&amp;node=1</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "код": 0,</div><div>&nbsp; &nbsp; "сообщение": "ОК",</div><div>&nbsp; &nbsp; "общий_пробег": 0,</div><div>&nbsp; &nbsp; "total_run_by_can": 0,</div><div>&nbsp; &nbsp; "моточасы": 0,</div><div>&nbsp; &nbsp; "топливные_датчики": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150325,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "t_53lls1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150326,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "lls2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "топливо": 0,</div><div>&nbsp; &nbsp; "unixtimestamp": 1408840780</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   общий\_пробег — загальний пробіг автомобіля на момент часу (км)
    
-   total\_run\_by\_can — пробіг за даними CAN-шини (км)
    
-   моточасы — мотогодини в секундах
    
-   топливо — кількість палива в баку на момент часу (л)
    
-   топливные\_датчики — масив даних за кожним датчиком палива, якщо їх кілька:
    
-   info — опис датчика
    
-   идентификатор — унікальний ID датчика
    
-   имя поля — системна назва датчика
    
-   топливо — рівень палива за цим датчиком (л)
    
-   unixtimestamp — момент часу, для якого повернуто дані (Unix timestamp)
