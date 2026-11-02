---
title: "Cписок iButton"
source: cpisok_ibutton.html
---

Этот API получает список iButton, закреплённых за транспортным средством, за указанный период времени.

iButton — это небольшое электронное устройство (метка), которое используется для идентификации водителей или объектов. Обычно применяется для контроля доступа, учета рабочего времени или фиксации начала/окончания работы с транспортным средством.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=take\_ibutton\_list — команда для API, в данном случае
    
-   ts — дата начала периода (Unix timestamp)
    
-   te — дата конца периода (Unix timestamp)
    
-   agentId — идентификатор транспортного средства
    
-   node — номер узла, на котором нужно выполнить команду
    

Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=take_ibutton_list&amp;ts=1643662800&amp;te=1645045200&amp;AgentID=79673<span>&amp;node=1</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "data": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000000",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000001",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех)
    
-   msg — сообщение сервера (например, "OK")
    
-   data — массив с информацией о iButton:
    
-   ibutton — уникальный идентификатор iButton
    
-   ts — время фиксации iButton (Unix timestamp)
