---
title: "Информация о пользователе"
source: informatsiya_o_polzovatele.html
---

Этот API получает данные о пользователе по его user\_id.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

-   cmd=get\_user — команда API для получения информации о пользователе
    
-   user\_id — идентификатор пользователя, информацию о котором необходимо получить
    
-   node — номер узла, на котором выполняется команда
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

### Пример POST-запроса

Тело запроса (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успешная операция)
    
-   msg — сообщение сервера
    
-   data — объект с информацией о пользователе:
    
-   id — идентификатор пользователя
    
-   roleid — роль пользователя (0 — Admin, 1 — User)
    
-   info — дополнительная информация о пользователе
    
-   msisdn — номер телефона
    
-   email — Email пользователя
    
-   name — имя пользователя
    
-   account\_id — идентификатор аккаунта, к которому принадлежит пользователь
    
-   lang — язык интерфейса пользователя
    
-   parent\_id— идентификатор родительского пользователя (если есть)
