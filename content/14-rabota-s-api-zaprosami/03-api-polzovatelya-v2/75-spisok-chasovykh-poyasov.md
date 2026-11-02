---
title: "Список часовых поясов"
source: spisok_chasovykh_poyasov.html
---

Этот API возвращает список доступных часовых поясов, которые можно использовать при настройке пользователя или объекта.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

-   cmd=get\_time\_zones — команда для получения списка часовых поясов
    
-   node — номер узла, на котором выполняется команда
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_time_zones&amp;node=1</div></td></tr></tbody></table>

### Пример POST-запроса

Тело запроса (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_time_zones"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "text": "Africa/Abidjan" },</div><div>&nbsp; &nbsp; { "text": "Africa/Accra" },</div><div>&nbsp; &nbsp; { "text": "Africa/Addis Ababa" },</div><div>&nbsp; &nbsp; { "text": "Africa/Algeria" },</div><div>&nbsp; &nbsp; { "text": "Africa/Asmara" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bamako" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bangui" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успешная операция)
    
-   data — список доступных часовых поясов
    
-   text — название часового пояса в формате Region/City
