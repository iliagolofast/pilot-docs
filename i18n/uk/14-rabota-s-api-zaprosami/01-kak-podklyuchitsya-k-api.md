---
title: "Як підключитися до API"
---

У цій статті ми розберемо, як авторизуватися та виконати запит до API.  Після цього ви зможете надсилати команди на сервер і отримувати від нього дані.

### Адреса API

Усі запити надсилаються за адресою:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php</div></td></tr></tbody></table>

<server\_address> — це адреса сервера або хоста, на якому працює PILOT.

Наприклад:

-   Для користувачів: https://pilot-gps.com/api/api.php
    
-   Для адміністраторів: https://admin.pilot-gps.com/ax/api.php
    

API може розташовуватися в різних «папках» проєкту, і це відображається в адресі запиту, наприклад:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php</div><div>https://&lt;server_address&gt;/ax/api.php</div></td></tr></tbody></table>

Папки (api, backend, ax та інші) — це просто структура проєкту. Вони показують, до якого набору команд ви звертаєтеся. Завжди використовуйте повний шлях до папки, указаний у конкретній команді API, інакше запит не спрацює.

### Тип авторизації

Для підключення до API використовується Basic Auth.

Для звичайного API (користувача) для входу використовуйте логін і пароль вашого облікового запису.

Для роботи з API адміністратора використовуйте логін і пароль адміністратора.

### Як виглядає запит

Загальна форма запиту така:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;</div></td></tr></tbody></table>

-   cmd — команда, яку ви хочете виконати
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад відповіді

На ваш запит сервер поверне відповідь у форматі JSON:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; ...запитані дані...</div><div>}</div></td></tr></tbody></table>

-   code = 0 — усе пройшло успішно
    
-   code = 1 — сталася помилка
    
-   msg — повідомлення від сервера (наприклад, "OK" або опис помилки)
    

Якщо вам зручніше працювати з XML, додайте до запиту параметр out=xml — і результат прийде у форматі XML.

Приклад запиту:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;&amp;out=xml</div></td></tr></tbody></table>

Відповідь у цьому разі буде такою:

<table><tbody><tr><td><span></span></td><td><div>&lt;response&gt;</div><div>&nbsp; &lt;code&gt;0&lt;/code&gt;</div><div>&nbsp; &lt;msg&gt;OK&lt;/msg&gt;</div><div>&nbsp; ...запитані дані...</div><div>&lt;/response&gt;</div></td></tr></tbody></table>

Якщо ви тільки починаєте знайомство з API, рекомендуємо спочатку прочитати статтю [«Робота з API-запитами»](index.html), щоб зрозуміти, що таке команди, параметри та формати даних.
