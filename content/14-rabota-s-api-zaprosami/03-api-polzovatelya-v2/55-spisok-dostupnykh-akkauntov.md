---
title: "Список доступных аккаунтов"
source: spisok_dostupnykh_akkauntov.html
---

Этот API используется для того, чтобы получить список аккаунтов, к которым имеет доступ текущий пользователь.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

-   cmd=get\_account\_map — команда API для получения списка доступных аккаунтов
    
-   node —  номер узла, на котором выполняется команда
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_map&amp;node=1</div></td></tr></tbody></table>

### Пример POST-запроса

Тело запроса (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_map"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"account_id": 1005},</div><div>&nbsp; &nbsp; {"account_id": 1000}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения (0 означает успешную операцию)
    
-   data — список доступных аккаунтов пользователя
    
-   account\_id — идентификатор аккаунта (договора)
