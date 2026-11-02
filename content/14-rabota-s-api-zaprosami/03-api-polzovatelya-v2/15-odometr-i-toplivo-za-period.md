---
title: "Одометр и топливо за период"
source: odometr_i_toplivo_za_period.html
---

Этот API получает информацию о пробеге (показания одометра) и расходе топлива транспортного средства за выбранный промежуток времени.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

-   cmd=odo\_and\_fuel — команда для получения данных одометра и топлива
    
-   imei — идентификатор устройства (ID объекта)
    
-   start — время начала периода в формате Unix timestamp
    
-   stop — время конца периода в формате Unix timestamp
    
-   node — номер узла, на котором выполняется команда
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=odo_and_fuel<span>&amp;start=1767214800&amp;stop=1767560400&amp;imei=861076084529922&amp;node=6</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "ok",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fuel": 7.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start_odo": 407121.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_odo": 407229.4</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
    
-   fuel — количество израсходованного топлива за период
    
-   start\_odo — показания одометра в начале периода
    
-   stop\_odo — показания одометра в конце периода
