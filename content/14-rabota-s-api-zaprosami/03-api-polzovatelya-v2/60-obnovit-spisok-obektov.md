---
title: "Обновить список объектов"
source: obnovit_spisok_obektov.html
---

Этот API назначает пользователю доступ только к выбранным транспортным средствам.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

POST

### Параметры запроса

-   cmd=update\_user\_vehicles — команда для изменения списка объектов
    
-   vehicles — список идентификаторов объектов (ID транспортных средств) через запятую.
    
-   user\_id — идентификатор пользователя, которому обновляется доступ
    
-   node — номер узла, на котором выполняется команда
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_vehicles",</div><div>&nbsp; &nbsp; "vehicles": "2,18",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
