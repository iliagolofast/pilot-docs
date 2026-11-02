---
title: "Информация об объекте"
source: informatsiya_ob_obekte.html
---

Этот API передаёт подробную информацию о конкретном транспортном средстве.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметры запроса

Для получения данных необходимо выполнить запрос с авторизацией и указанием функции и объекта:

-   Username — логин пользователя
    
-   Password — пароль
    
-   functionName=api\_objectdetails — команда для получения деталей объекта
    
-   parameters — IMEI объекта, по которому запрашиваются детали
    
-   node — номер узла, на котором нужно выполнить команду
    

Формат запрашиваемых данных — один объект транспортного средства

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectdetails</div><div>parameters=352217706092097</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209 ",</div><div>&nbsp;"INSTALLATIONDATE": "Dec 06, 2023",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается объект с информацией о транспортном средстве:

-   IMEI — идентификатор трекера, установленного на транспортном средстве
    
-   PLATE —  номер транспортного средства
    
-   INSTALLATIONDATE — дата установки трекера на транспортное средство
    
-   NAME — имя транспортного средства
    
-   LATITUDE — текущая широта местоположения объекта
    
-   LONGITUDE — текущая долгота местоположения объекта
