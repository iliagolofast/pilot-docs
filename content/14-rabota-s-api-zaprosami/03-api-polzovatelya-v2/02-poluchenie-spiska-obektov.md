---
title: "Получение списка объектов"
source: poluchenie_spiska_obektov.html
---

Этот API передаёт информацию о транспортных средствах, включая их текущее местоположение.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметры запроса

Для получения данных необходимо выполнить запрос с авторизацией и указанием функции:

-   Username — логин пользователя
    
-   Password — пароль
    
-   functionName=api\_objectlist — команда для получения списка объектов
    
-   node — номер узла, на котором нужно выполнить команду
    

Формат запрашиваемых данных — массив объектов транспортных средств.

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectlist</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016703961657",</div><div>&nbsp;"PLATE": "6561",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 25.9131066,</div><div>&nbsp;"LONGITUDE": 46.4645949</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

В ответ на API-запрос возвращается массив объектов транспортных средств. Каждый объект содержит:

-   IMEI — идентификатор трекера, установленного на транспортном средстве
    
-   PLATE — номер транспортного средства
    
-   NAME — имя транспортного средства
    
-   LATITUDE — текущая широта местоположения объекта
    
-   LONGITUDE — текущая долгота местоположения объекта
