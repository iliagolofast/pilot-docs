---
title: "Как подключиться к API"
source: kak_podklyuchitsya_k_api_.html
---

В этой статье мы разберём, как авторизоваться и выполнить запрос к API.  После этого вы сможете отправлять команды на сервер и получать от него данные.

### Адрес API

Все запросы отправляются по адресу:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php</div></td></tr></tbody></table>

<server\_address> — это адрес сервера или хоста, где работает PILOT.

Например:

-   Для пользователей: https://pilot-gps.com/api/api.php
    
-   Для администраторов: https://admin.pilot-gps.com/ax/api.php
    

API может находиться в разных «папках» проекта, и это отражается в адресе запроса, например:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php</div><div>https://&lt;server_address&gt;/ax/api.php</div></td></tr></tbody></table>

Папки (api, backend, ax и другие) — это просто структура проекта. Они показывают, к какому набору команд вы обращаетесь. Всегда используйте полный путь к папке, который указан в конкретной команде API, иначе запрос не сработает.

### Тип авторизации

Для подключения к API используется Basic Auth.

Для обычного API (пользователя) для входа используйте логин и пароль вашего аккаунта.

Для работы с API администратора используйте логин и пароль администратора.

### Как выглядит запрос

Общая форма запроса такая:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;</div></td></tr></tbody></table>

-   cmd — команда, которую вы хотите выполнить
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример ответа

На ваш запрос сервер вернёт ответ в формате JSON:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; ...запрошенные данные...</div><div>}</div></td></tr></tbody></table>

-   code = 0 — всё прошло успешно
    
-   code = 1 — произошла ошибка
    
-   msg — сообщение от сервера (например, "OK" или описание ошибки)
    

Если вам удобнее работать с XML, добавьте к запросу параметр out=xml — и результат придёт в формате XML.

Пример запроса:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;&amp;out=xml</div></td></tr></tbody></table>

Ответ в этом случае будет таким:

<table><tbody><tr><td><span></span></td><td><div>&lt;response&gt;</div><div>&nbsp; &lt;code&gt;0&lt;/code&gt;</div><div>&nbsp; &lt;msg&gt;OK&lt;/msg&gt;</div><div>&nbsp; ...запрошенные данные...</div><div>&lt;/response&gt;</div></td></tr></tbody></table>

Если вы только начинаете знакомство с API, рекомендуем сначала прочитать статью [«Работа с API-запросами»](index.html), чтобы понять, что такое команды, параметры и форматы данных.
