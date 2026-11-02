---
title: "Работа с API-запросами"
source: rabota_s_api_zaprosami.html
---

API (Application Programming Interface) — это набор правил и инструментов для взаимодействия программ друг с другом. В PILOT API используется для обмена данными между системами, сервисами, приложениями и платформой.

API-запрос состоит из:

-   URL —  адрес API-сервера и команда
    
-   Параметра запроса — данные, которые передаются на сервер
    
-   Метода запроса — способ взаимодействия с сервером
    
    ## Как работает API в PILOT
    

PILOT использует распределённую инфраструктуру, которая включает несколько серверов, например, BLADE, KSA, AFRICA, USA. У каждого сервера может быть несколько узлов — нод, со своим номером.

Когда вы отправляете API-запроса к системе, укажите конкретный сервер (например, BLADE), а также конкретный узел внутри этого сервера —  node. Так, запрос будет обработан напрямую на выбранном сервере и конкретном узле без лишних пересылок и с минимальным временем отклика.

Пример запроса

<table><tbody><tr><td><span></span></td><td><div><span>https://blade.pilot-gps.com/api/api.php?cmd=list&amp;node=14&nbsp;</span></div></td></tr></tbody></table>

blade.pilot-gps.com — это имя сервера

node=14 — указание на узел (сервер), где должен быть обработан запрос. 

Подробнее о том, как авторизоваться и отправить запросы к серверу PILOT, читайте в следующей [статье](kak-podklyuchitsya-k-api.html).

## Методы запросов в API

### GET

Метод для получения данных. Используется, например, для запроса списка объектов или информации об аккаунте. 

В GET-запросе команда и параметры передаются прямо в URL. Параметры добавляются после знака ? и разделяются символом &.

Пример

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

cmd=bindControl — команда

uid=123, imei=456, lineuid=789 — параметры

### POST

Метод для отправки данных. Например, используется для создания нового объекта или формирования отчёта.

В POST-запросе команда и параметры могут передаваться в теле запроса или команда указывается в URL, а параметры передаются в теле.

Пример 1

URL: https://<server\_address>/api/api.php?cmd=bindControl

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>&nbsp;{</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

Пример 2

URL: https://<server\_address>/api/api.php

Тело запроса

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; &nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

PUT

Метод для обновления данных. Этот вид запроса используется, например, для изменения параметров объекта или аккаунта.

Чаще всего PUT используется для обновления конкретного ресурса, поэтому идентификатор обычно указывается в URL, а обновляемые данные — в теле.

Пример

URL: https://<server\_address>/api/api.php/123

 Тело запроса:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "updateControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789",</span></div><div><span>&nbsp; "status": "active"</span></div><div><span>}</span></div></td></tr></tbody></table>

### DELETE

Метод для удаления данных. Например, если нужно удалить объект или аккаунт, используется этот метод.

В DELETE-запросе команда и параметры обычно передаются в URL.

Пример

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

## Формат данных

API поддерживает различные форматы как для запросов, так и для ответов.

JSON:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789"</span></div><div><span>}</span></div></td></tr></tbody></table>

Form-encoded:

<table><tbody><tr><td><span></span></td><td><div><span>cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</span></div></td></tr></tbody></table>

XML:

<table><tbody><tr><td><span></span></td><td><div><span>&lt;request&gt;</span></div><div><span>&nbsp; &lt;cmd&gt;bindControl&lt;/cmd&gt;</span></div><div><span>&nbsp; &lt;uid&gt;123&lt;/uid&gt;</span></div><div><span>&nbsp; &lt;imei&gt;456&lt;/imei&gt;</span></div><div><span>&nbsp; &lt;lineuid&gt;789&lt;/lineuid&gt;</span></div><div><span>&lt;/request&gt;</span></div></td></tr></tbody></table>

## Типы данных

В API используются различные типы данных для передачи информации между клиентом и сервером. Рассмотрим основные типы данных, которые могут встречаться в запросах и ответах API.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Тип данных</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пример в json-формате</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для чего используются</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Строка (String)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Текст в кавычках</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;"name": "Маршрут №9"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для текстовых данных: названия, описания</span></div><div><span>&nbsp; идентификаторы</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Число (Number)</span></div></td><td colspan="1" rowspan="1"><div><span>Числовое значение, целое или дробное</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "price": 15.35</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для числовых данных: цены</span></div><div><span>&nbsp; идентификаторы, координаты, время</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Массив (Array)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Упорядоченный список элементов любого типа</span></div></td><td colspan="1" rowspan="1"><div><span>"points": [{"lat": "53.352142", "lon": "83.758749"},&nbsp; {"lat": "52.534012", "lon": "85.178777"}]</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для списков данных: остановки, товары,</span></div><div><span>&nbsp; пользователи</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Объект (Object)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Набор пар "ключ — значение"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "uid": "1", "lat": "53.352142", "lon":"83.758749"}</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для структурированных данных:</span></div><div><span>&nbsp; информация об остановке, пользователе, заказе</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Булевый тип</span></div><div><span>&nbsp; (Boolean)</span></div></td><td colspan="1" rowspan="1"><div><span>Логическое значение&nbsp;true/false или&nbsp;1/0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "bidirectional": 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для флагов или состояний:</span></div><div><span>&nbsp; активен/неактивен, доступен/ недоступен</span></div></td></tr></tbody></table>
