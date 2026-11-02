---
title: "Список водителей"
source: spisok_voditelej_2.html
---

Этот API предназначен для получения информации о водителях, зарегистрированных в аккаунте. С его помощью можно получить данные о каждом водителе, включая ФИО, контактную информацию, описание, права доступа и идентификаторы.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = drivers\_list— команда для получения списка водителей
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_list&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 317,</div><div>&nbsp; &nbsp; &nbsp; "name": "Ivan Ivanov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #3",</div><div>&nbsp; &nbsp; &nbsp; "phone": "798345546",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": "",</div><div>&nbsp; &nbsp; &nbsp; "access": []</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1122,</div><div>&nbsp; &nbsp; &nbsp; "name": "Andrey Petrov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #1",</div><div>&nbsp; &nbsp; &nbsp; "phone": "+525531696255",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": null,</div><div>&nbsp; &nbsp; &nbsp; "access": [1122]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id — идентификатор водителя
    
-   name — ФИО водителя
    
-   code — код водителя (если есть)
    
-   description — описание водителя
    
-   phone — номер телефона
    
-   license — данные водительского удостоверения
    
-   email — адрес электронной почты
    
-   access — список ID ресурсов или объектов, к которым имеет доступ водитель
