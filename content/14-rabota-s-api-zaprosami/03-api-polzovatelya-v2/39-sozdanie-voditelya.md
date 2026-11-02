---
title: "Создание водителя"
source: sozdanie_voditelya.html
---

Этот API позволяет добавить нового водителя в систему или обновить данные существующего водителя. С его помощью можно указать ФИО, код iButton, контактную информацию, номер водительского удостоверения и список объектов, к которым водитель будет иметь доступ.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = drivers\_add — команда для добавления или обновления водителя
    
-   name — имя водителя (ФИО)
    
-   code — код iButton водителя (обязательный)
    
-   description — описание водителя (необязательный)
    
-   phone — номер телефона водителя (необязательный)
    
-   license — номер водительского удостоверения (необязательный)
    
-   email — адрес электронной почты
    
-   access — список идентификаторов объектов (agent\_id), к которым разрешён доступ водителю, через запятую
    
-   node — номер узла, на котором нужно выполнить команду
    

<table><tbody><tr><td><span></span></td><td><div>Если водитель с такими параметрами уже существует в системе, его данные будут обновлены. Если нет — будет создан новый водитель</div></td></tr></tbody></table>

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_add&amp;name=NewDriverName&amp;code=123456&amp;description=DESCR&amp;phone=122212343&amp;license=rrr3335552&amp;email=new@email.com&amp;access=1122,3344&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; "id": 16990,</div><div>&nbsp;&nbsp; &nbsp; "name": "NewDriverName",</div><div>&nbsp;&nbsp; &nbsp; "code": "123456",</div><div>&nbsp;&nbsp; &nbsp; "description": "DESCR",</div><div>&nbsp;&nbsp; &nbsp; "phone": "122212343",</div><div>&nbsp;&nbsp; &nbsp; "license": "rrr3335552",</div><div>&nbsp;&nbsp; &nbsp; "email": "new@email.com",</div><div>&nbsp;&nbsp; &nbsp; "access": [1122, 3344]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id— уникальный идентификатор водителя
    
-   name— ФИО водителя
    
-   code— код iButton водителя
    
-   description— описание водителя
    
-   phone— номер телефона
    
-   license— номер водительского удостоверения
    
-   email— адрес электронной почты
    
-   access— список идентификаторов объектов, к которым разрешён доступ
