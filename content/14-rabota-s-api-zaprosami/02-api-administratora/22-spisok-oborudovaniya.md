---
title: "Список оборудования"
source: spisok_oborudovaniya.html
---

Этот API используется для получения списка всех типов оборудования (моделей устройств), которые используется в договоре, с указанием производителя.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=vehmodellist — команда для получения списка моделей оборудования
    
-   node — номер узла, на котором нужно выполнить команду
    
    ### Пример запроса
    

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehmodellist&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 Lite GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения запроса (0 — успешно)
    
-   data — массив моделей оборудования:
    
-   identifier — уникальный идентификатор модели
    
-   name — название модели оборудования
    
-   supplier — производитель оборудования
    
-   message — текстовое сообщение о результате запроса
