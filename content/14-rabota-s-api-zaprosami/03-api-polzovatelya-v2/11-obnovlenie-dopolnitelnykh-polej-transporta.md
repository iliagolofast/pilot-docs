---
title: "Обновление дополнительных полей транспорта"
source: obnovlenie_dopolnitelnykh_polej_transporta.html
---

Этот API изменяет значения дополнительных [полей](../../panel-administratora/dogovor/redaktor-polej-transportnogo-sredstva.html) транспорта одним запросом по agent\_id или imei. Можно менять сразу все поля или их часть, количество полей не ограничено.

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php

### Заголовки

Content-Type: application/json

Authorization: Basic <ваши\_учётные\_данные>

### Параметры запроса

-   cmd=agent\_update\_custom\_fields — команда для API
    
-   agent\_id — идентификатор транспортного средства (если не используете imei).
    
-   imei — IMEI устройства ТС (если не используете agent\_id).
    
-   custom\_fields — объект с парами ключ-значение для обновления дополнительных полей
    

В custom\_fields можно указывать любое количество полей, например extra\_field1, extra\_field2, … extra\_fieldN (при условии, что эти поля созданы в аккаунте). Значения полей могут быть числами, строками или булевыми значениями

### Пример запроса

Обновление нескольких полей по agent\_id:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"agent_id": 30547,</div><div>"custom_fields": {</div><div>"extra_field1": "Путевой лист №123",</div><div>"extra_field2": "2025-11-01",</div><div>"extra_field7": "+79000000000"</div><div>}</div><div>}'</div></td></tr></tbody></table>

Обновление по imei:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \'</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"imei": "359339099999999",</div><div>"custom_fields": {</div><div>"extra_field3": "Пропуск №A12345",</div><div>"extra_field4": "2025-12-31"</div><div>}</div><div>}'</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>"code": 1,</div><div>"msg": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения: 1 — успешно, 0 — ошибка
    
-   msg — текстовое описание результата (например, "OK" или сообщение об ошибке)
