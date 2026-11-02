---
title: "Перемещение объекта между договорами"
source: peremeshchenie_obekta_mezhdu_dogovorami.html
---

Этот API используется для перемещения транспортного средства между аккаунтами.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса параметры. Параметры указываются после знака вопроса «?» и разделяются знаком «&».

-   cmd = veh\_move\_account — команда для перемещения объектов в другой аккаунт
    
-   vehicle\_id — идентификатор транспортного средства, которое нужно перемести в аккаунт
    
-   account\_id — номер нового аккаунта
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd</span>=veh_move_account&amp;vehicle_id=23&amp;account_id=1005&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{"code": 1, "msg": "Success move vehicle 23 to account 1005"}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата:
    

— 1 — операция выполнена успешно

— 0 — ошибка при выполнении операции

-   msg —сообщение с текстовым описанием результата операции
