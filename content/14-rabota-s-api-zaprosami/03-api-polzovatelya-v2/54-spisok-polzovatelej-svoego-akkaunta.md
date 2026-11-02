---
title: "Список пользователей своего аккаунта"
source: spisok_polzovatelej_svoego_akkaunta.html
---

Этот API используется для получения списка всех пользователей, зарегистрированных в вашем аккаунте.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

-   cmd=get\_account\_user\_list — команда API для получения списка пользователей аккаунта
    
-   node — номер узла, на котором выполняется команда
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_user_list&amp;node=1</div></td></tr></tbody></table>

### Пример POST-запроса

Тело запроса (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_user_list"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успешная операция)
    
-   data — массив пользователей аккаунта:
    
-   id — идентификатор пользователя
    
-   roleid — роль пользователя (0 — Admin, 1 — User, 2 — Logistic и т.д.)
    
-   info — дополнительная информация
    
-   msisdn — номер телефона
    
-   email— Email пользователя
    
-   name — имя пользователя
    
-   account\_id — идентификатор аккаунта, к которому принадлежит пользователь
    
-   lang — язык интерфейса пользователя
    
-   parent\_id — идентификатор родительского пользователя (если есть)ъ
