---
title: "Робота з API-запитами"
---

API (Application Programming Interface) — це набір правил та інструментів для взаємодії програм між собою. У PILOT API використовується для обміну даними між системами, сервісами, застосунками та платформою.

API-запит складається з:

-   URL —  адреса API-сервера та команда
    
-   Параметра запиту — дані, які передаються на сервер
    
-   Методу запиту — спосіб взаємодії із сервером
    
    ## Як працює API в PILOT
    

PILOT використовує розподілену інфраструктуру, що включає кілька серверів, наприклад, BLADE, KSA, AFRICA, USA. У кожного сервера може бути кілька вузлів — нод, зі своїм номером.

Коли ви надсилаєте API-запит до системи, вкажіть конкретний сервер (наприклад, BLADE), а також конкретний вузол усередині цього сервера — node. Так запит буде оброблено безпосередньо на вибраному сервері та конкретному вузлі без зайвих пересилань і з мінімальним часом відгуку.

Приклад запиту

<table><tbody><tr><td><span></span></td><td><div><span>https://blade.pilot-gps.com/api/api.php?cmd=list&amp;node=14&nbsp;</span></div></td></tr></tbody></table>

blade.pilot-gps.com — це ім’я сервера

node=14 — вказівка на вузол (сервер), де має бути оброблено запит. 

Докладніше про те, як авторизуватися та надсилати запити до сервера PILOT, читайте в наступній [статті](kak-podklyuchitsya-k-api.html).

## Методи запитів в API

### GET

Метод для отримання даних. Використовується, наприклад, для запиту списку об’єктів або інформації про акаунт. 

У GET-запиті команда та параметри передаються безпосередньо в URL. Параметри додаються після знака ? і розділяються символом &.

Приклад

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

cmd=bindControl — команда

uid=123, imei=456, lineuid=789 — параметри

### POST

Метод для надсилання даних. Наприклад, використовується для створення нового об’єкта або формування звіту.

У POST-запиті команда та параметри можуть передаватися в тілі запиту, або команда вказується в URL, а параметри передаються в тілі.

Приклад 1

URL: https://<server\_address>/api/api.php?cmd=bindControl

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>&nbsp;{</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

Приклад 2

URL: https://<server\_address>/api/api.php

Тіло запиту

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; &nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

PUT

Метод для оновлення даних. Цей вид запиту використовується, наприклад, для зміни параметрів об’єкта або акаунта.

Найчастіше PUT використовується для оновлення конкретного ресурсу, тому ідентифікатор зазвичай указується в URL, а дані, що оновлюються, — в тілі.

Приклад

URL: https://<server\_address>/api/api.php/123

 Тіло запиту:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "updateControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789",</span></div><div><span>&nbsp; "status": "active"</span></div><div><span>}</span></div></td></tr></tbody></table>

### DELETE

Метод для видалення даних. Наприклад, якщо потрібно видалити об’єкт або акаунт, використовується цей метод.

У DELETE-запиті команда та параметри зазвичай передаються в URL.

Приклад

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

## Формат даних

API підтримує різні формати як для запитів, так і для відповідей.

JSON:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789"</span></div><div><span>}</span></div></td></tr></tbody></table>

Form-encoded:

<table><tbody><tr><td><span></span></td><td><div><span>cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</span></div></td></tr></tbody></table>

XML:

<table><tbody><tr><td><span></span></td><td><div><span>&lt;request&gt;</span></div><div><span>&nbsp; &lt;cmd&gt;bindControl&lt;/cmd&gt;</span></div><div><span>&nbsp; &lt;uid&gt;123&lt;/uid&gt;</span></div><div><span>&nbsp; &lt;imei&gt;456&lt;/imei&gt;</span></div><div><span>&nbsp; &lt;lineuid&gt;789&lt;/lineuid&gt;</span></div><div><span>&lt;/request&gt;</span></div></td></tr></tbody></table>

## Типи даних

В API використовуються різні типи даних для передачі інформації між клієнтом і сервером. Розглянемо основні типи даних, які можуть траплятися в запитах і відповідях API.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Тип даних</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Приклад у json-форматі</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для чого використовуються</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Рядок (String)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Текст у лапках</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;"name": "Маршрут №9"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для текстових даних: назви, описи</span></div><div><span>&nbsp; ідентифікатори</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Число (Number)</span></div></td><td colspan="1" rowspan="1"><div><span>Числове значення, ціле або дробове</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "price": 15.35</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для числових даних: ціни</span></div><div><span>&nbsp; ідентифікатори, координати, час</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Масив (Array)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Впорядкований список елементів будь-якого типу</span></div></td><td colspan="1" rowspan="1"><div><span>"points": [{"lat": "53.352142", "lon": "83.758749"},&nbsp; {"lat": "52.534012", "lon": "85.178777"}]</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для списків даних: зупинки, товари,</span></div><div><span>&nbsp; користувачі</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Об’єкт (Object)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Набір пар "ключ — значення"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "uid": "1", "lat": "53.352142", "lon":"83.758749"}</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для структурованих даних:</span></div><div><span>&nbsp; інформація про зупинку, користувача, замовлення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Булів тип</span></div><div><span>&nbsp; (Boolean)</span></div></td><td colspan="1" rowspan="1"><div><span>Логічне значення&nbsp;true/false або&nbsp;1/0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "bidirectional": 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Для прапорців або станів:</span></div><div><span>&nbsp; активний/неактивний, доступний/недоступний</span></div></td></tr></tbody></table>
