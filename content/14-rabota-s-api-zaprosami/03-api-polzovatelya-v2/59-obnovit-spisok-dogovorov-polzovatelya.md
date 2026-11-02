---
title: "Обновить список договоров пользователя"
source: obnovit_spisok_dogovorov_polzovatelya.html
---

Этот API позволяет назначить пользователю доступ к определённым договорам.

Например, если в системе у партнёра несколько договоров, то администратор может выбрать, к каким именно будет иметь доступ конкретный пользователь.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

POST

### Параметры запроса

-   cmd=update\_user\_accounts\_map — команда для изменения списка доступных договоров
    
-   accounts — список идентификаторов договоров через запятую
    
    <table><tbody><tr><td><span></span></td><td><div>Договоры (accounts) должны принадлежать тому же партнёру, которому принадлежит пользователь.</div></td></tr></tbody></table>
    
-   user\_id — идентификатор пользователя, которому назначается доступ
    
-   node — номер узла, на котором выполняется команда
    
    <table><tbody><tr><td><span></span></td><td><div>Если у пользователя в системе партнёр равен 0 → назначить договоры невозможно (<a href="../../panel-administratora/administrator/account-mapping.html"><span>маппинг</span></a> не работает).</div></td></tr></tbody></table>
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_accounts_map",</div><div>&nbsp; &nbsp; "accounts": "1005",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
