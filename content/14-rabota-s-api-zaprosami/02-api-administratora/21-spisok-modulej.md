---
title: "Список модулей"
source: spisok_modulej.html
---

С помощью этого API получайте полный список доступных модулей в договоре с их идентификаторами и описанием.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/ax/api.php?

### Параметры запроса

-   cmd=modlist — команда для получения списка модулей
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=modlist&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "код": 0,</div><div>&nbsp; "данные": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль топливных карт",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 7,</div><div>&nbsp; &nbsp; &nbsp; "имя": "топливо"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль блокировки двигателя",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 8,</div><div>&nbsp; &nbsp; &nbsp; "имя": "блок"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль уведомлений",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 27,</div><div>&nbsp; &nbsp; &nbsp; "имя": "уведомление"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "сообщение": "ОК"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   код — код выполнения запроса (0 — успешно)
    
-   данные — массив объектов с модулями:
    
-   descr — описание модуля
    
-   идентификатор — уникальный ID модуля
    
-   имя — системное имя модуля
    
-   сообщение — текстовое сообщение о результате запроса
