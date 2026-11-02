---
title: "Назначить водителя на транспорт"
source: naznachit_voditelya_na_transport.html
---

Этот API закрепляет водителя за конкретным транспортным средством с помощью его идентификатора (IMEI) и метки (ключа).

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=linkdriver — команда для API, выполняющая привязку водителя
    
-   imei — уникальный идентификатор транспортного средства в системе
    
-   driver — ФИО водителя
    
-   driverkey— номер ключа (метки) водителя
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=linkdriver&amp;imei=548545218454&amp;driver=ADAS+driver&amp;driverkey=89185717259&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": [],</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех, другое значение — ошибка)
    
-   data — дополнительные данные (в данном случае пустой массив)
    
-   message — текстовое сообщение от сервера (например, «success»)
