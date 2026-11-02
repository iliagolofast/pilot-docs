---
title: "Отчёт об активности водителей"
source: otchyet_ob_aktivnosti_voditelej.html
---

Этот API получает информацию о деятельности водителей транспортных средств за выбранный период. В ответе указываются различные режимы работы (например, движение, работа, отдых).

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = gettachodata — команда для получения данных тахографа
    
-   agent\_id — идентификатор транспортного средства / нескольких ТС через запятую
    
-   imei — идентификатор устройства (альтернатива agent\_id)
    
-   ts — время начала выборки (Unix timestamp)
    
-   te — время окончания выборки (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettachodata&amp;ts=1624568400&amp;te=1624586400&amp;agent_id=120407,120646&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "С 220 СК 750": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Work": 4997,</div><div>&nbsp; &nbsp; &nbsp; "Drive": 248,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 1722,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "А 152 АК 790": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Drive": 5436,</div><div>&nbsp; &nbsp; &nbsp; "Work": 1706,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 4995,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   номер транспортного средства
    
-   First driver / Second driver — данные по каждому водителю
    
-   Drive — время в движении
    
-   Work — рабочее время
    
-   Rest — время отдыха
    
-   Driver available — время, когда водитель был доступен для работы
