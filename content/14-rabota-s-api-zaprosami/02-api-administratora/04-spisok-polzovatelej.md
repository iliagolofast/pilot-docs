---
title: "Список пользователей"
source: spisok_polzovatelej.html
---

Этот API используется для получения списка пользователей конкретного аккаунта с основной информацией о каждом пользователе.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=users — команда для получения списка пользователей
    
-   accountid — ID аккаунта, для которого запрашиваются пользователи
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=users&amp;accountid=56832</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"data": [</div><div>&nbsp;{</div><div>&nbsp;"id": 88977,</div><div>&nbsp;"name": "valera_test",</div><div>&nbsp;"login": "valera17totsenko@gmail.com",</div><div>&nbsp;"passwd": "123456",</div><div>&nbsp;"info": null,</div><div>&nbsp;"email": "valera17totsenko@gmail.com",</div><div>&nbsp;"lang": "en",</div><div>&nbsp;"roleid": 0</div><div>&nbsp;}</div><div>&nbsp;],</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id — ID пользователя
    
-   name — отображаемое имя
    
-   login — логин
    
-   passwd — пароль
    
-   info — доп. информация о пользователе
    
-   email — адрес электронной почты
    
-   lang — язык интерфейса пользователя
    
-   roleid — ID роли
