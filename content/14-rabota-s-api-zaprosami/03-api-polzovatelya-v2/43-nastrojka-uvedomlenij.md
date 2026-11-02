---
title: "Настройка уведомлений"
source: nastrojka_uvedomlenij.html
---

Этот API для создания, получения, редактирования и удаления конфигураций уведомлений в PILOT.  Это не API для отправки уведомлений, а для задания условий, при которых в будущем будут срабатывать уведомления в системе.

## Методы

POST, GET, PUT, DELETE

### Адрес запроса

Для получения данных используйте адрес:  https://<address>/api/ptm/notification.php

<address\> — адрес сайта

## POST 

Создаёт новую конфигурацию уведомления.

Тело запроса обязательно.

### Запрос

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php</div></td></tr></tbody></table>

### Пример тела запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 0,</div><div>&nbsp; "agent_id": 123,</div><div>&nbsp; "type": "speed",</div><div>&nbsp; "geozones": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; "email": true,</div><div>&nbsp; "emails_list": [</div><div>&nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; ],</div><div>&nbsp; "sms": true,</div><div>&nbsp; "phones_list": [</div><div>&nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; "+79007654321"</div><div>&nbsp; ],</div><div>&nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; "webhook": true,</div><div>&nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; "ts": 1680000000,</div><div>&nbsp; "te": 1710000000,</div><div>&nbsp; "timezone": 3,</div><div>&nbsp; "zone_rule": "in",</div><div>&nbsp; "speed_rule": "&gt;",</div><div>&nbsp; "speed_value": 80,</div><div>&nbsp; "speed_time": 15,</div><div>&nbsp; "speed_time_units": "ss",</div><div>&nbsp; "ignition_rule": "on",</div><div>&nbsp; "geozones_rule": "in",</div><div>&nbsp; "break_duration": 0,</div><div>&nbsp; "break_time_units": "ss",</div><div>&nbsp; "tag_name": "грузовик",</div><div>&nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; "temperature_value": 30,</div><div>&nbsp; "temperature_time": 0,</div><div>&nbsp; "disconnect_time": 0,</div><div>&nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; "odometer_value": 100000,</div><div>&nbsp; "odometer_period": "abs"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление успешно создано",</div><div>&nbsp; "method": "POST",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": [</div><div>&nbsp; &nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "sms": true,</div><div>&nbsp; &nbsp; "phones_list": [</div><div>&nbsp; &nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; &nbsp; "+79007654321"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; &nbsp; "webhook": true,</div><div>&nbsp; &nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1710000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 80,</div><div>&nbsp; &nbsp; "speed_time": 15,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "on",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "грузовик",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 30,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 100000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

## GET

Получает конфигурацию уведомления по ID.

Параметры запроса:

-   id (обязательный) — ID уведомления
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?id=123</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление получено",</div><div>&nbsp; "method": "GET",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": [</div><div>&nbsp; &nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "sms": true,</div><div>&nbsp; &nbsp; "phones_list": [</div><div>&nbsp; &nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; &nbsp; "+79007654321"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; &nbsp; "webhook": true,</div><div>&nbsp; &nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1710000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 80,</div><div>&nbsp; &nbsp; "speed_time": 15,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "on",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "грузовик",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 30,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 100000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

##  PUT 

Обновляет существующую конфигурацию уведомления.

### Запрос

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php</div></td></tr></tbody></table>

### Пример тела запроса

Тот же JSON-формат, что и при создании (POST), но с актуальными значениями и нужным id.

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 123,</div><div>&nbsp; "agent_id": 123,</div><div>&nbsp; "type": "speed",</div><div>&nbsp; "geozones": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "name": "Обновлённое уведомление",</div><div>&nbsp; "email": true,</div><div>&nbsp; "emails_list": ["alerts@example.com"],</div><div>&nbsp; "sms": false,</div><div>&nbsp; "phones_list": [],</div><div>&nbsp; "message_text": "Обновлённое сообщение о превышении скорости",</div><div>&nbsp; "webhook": false,</div><div>&nbsp; "webhook_url": "",</div><div>&nbsp; "ts": 1680000000,</div><div>&nbsp; "te": 1720000000,</div><div>&nbsp; "timezone": 3,</div><div>&nbsp; "zone_rule": "in",</div><div>&nbsp; "speed_rule": "&gt;",</div><div>&nbsp; "speed_value": 90,</div><div>&nbsp; "speed_time": 10,</div><div>&nbsp; "speed_time_units": "ss",</div><div>&nbsp; "ignition_rule": "off",</div><div>&nbsp; "geozones_rule": "in",</div><div>&nbsp; "break_duration": 0,</div><div>&nbsp; "break_time_units": "ss",</div><div>&nbsp; "tag_name": "фургон",</div><div>&nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; "temperature_value": 35,</div><div>&nbsp; "temperature_time": 0,</div><div>&nbsp; "disconnect_time": 0,</div><div>&nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; "odometer_value": 120000,</div><div>&nbsp; "odometer_period": "abs"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление успешно обновлено",</div><div>&nbsp; "method": "PUT",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Обновлённое уведомление",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": ["alerts@example.com"],</div><div>&nbsp; &nbsp; "sms": false,</div><div>&nbsp; &nbsp; "phones_list": [],</div><div>&nbsp; &nbsp; "message_text": "Обновлённое сообщение о превышении скорости",</div><div>&nbsp; &nbsp; "webhook": false,</div><div>&nbsp; &nbsp; "webhook_url": "",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1720000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 90,</div><div>&nbsp; &nbsp; "speed_time": 10,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "off",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "фургон",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 35,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 120000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

##  DELETE 

Удаляет одно или несколько уведомлений.

Параметры запроса :

-   id (опциональный) — ID конкретного уведомления
    
-   agent\_id (опциональный) — Если передан, удаляются все уведомления для указанного агента
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?id=123</div></td></tr></tbody></table>

Также можно удалить все уведомления по agent\_id:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?agent_id=456</div></td></tr></tbody></table>

### Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "count": 1 // количество удалённых уведомлений</div><div>}</div></td></tr></tbody></table>

### Описание полей конфигурации уведомлений

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Поле</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; agent_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Идентификатор агента (устройства/транспортного средства)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип нотификации (speed,&nbsp;temperature,&nbsp;ignition, и т.д.)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; geozones</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Массив геозон, к которым применяется уведомление</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Включить отправку по email</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; emails_list</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список email-адресов</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sms</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Включить SMS-уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; phones_list</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список номеров телефонов</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; webhook_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL для webhook</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; webhook</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Включить отправку webhook</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_text</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Текст уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts,&nbsp;te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Временные рамки действия уведомления (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timezone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Смещение по времени (например,&nbsp;+3)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; zone_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Правило зоны (in,&nbsp;out)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Условие скорости (&gt;,&nbsp;&lt;,&nbsp;=)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Значение скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время превышения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_time_units</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Единицы времени (ss,&nbsp;mm,&nbsp;hh)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ignition_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Состояние зажигания (on,&nbsp;off)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; geozones_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поведение в геозонах (in,&nbsp;out)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Условие температуры (&gt;,&nbsp;&lt;)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Значение температуры</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время превышения температуры</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; disconnect_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время отключения устройства</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; disconnect_time_units</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Единицы времени отключения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Условие по пробегу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробег</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_period</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип подсчёта пробега (abs,&nbsp;rel)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; tag_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тег объекта (например, «грузовик»)</span></div></td></tr></tbody></table>
