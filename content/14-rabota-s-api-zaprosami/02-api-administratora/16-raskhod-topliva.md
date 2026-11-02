---
title: "Расход топлива"
source: raskhod_topliva.html
---

Этот API получает данные о расходе топлива для конкретного транспортного средства за выбранный период времени.

Возвращается информация о заправках, израсходованном топливе, сливах и показаниях датчиков топлива на начало и конец периода.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=fuel — команда для получения данных о топливе
    
-   ts — дата начала выборки в формате Unix timestamp
    
-   te — дата конца выборки в формате Unix timestamp
    
-   agentid — ID транспортного средства (agent\_id)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=fuel&amp;ts=1708981200&amp;te=1709154000&amp;agentid=6477&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "fill": 100,&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "fuel": 84, &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stale": 0,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stop": 43 &nbsp; &nbsp;</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата запроса (0 = успешный запрос)
    
-   fill — количество топлива, заправленного в течение периода
    
-   fuel — количество израсходованного топлива
    
-   stale — количество топлива, слитого или потерянного
    
-   start — показания датчика топлива на начало периода
    
-   stop — показания датчика топлива на конец периода
    
-   msg — текстовое сообщение с результатом запроса
