---
title: "Робота з Linux-командами Атомів"
---

У цій статті описано основні команди API, які дають змогу взаємодіяти з Linux-системами через панель адміністратора. За допомогою цих команд можна надсилати, отримувати, видаляти й переглядати історію команд для [Атомів](../../lichnyj-kabinet-polzovatelya/moduli-1/atom.html).

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php

### Список команд

-   cmd=atom\_get\_all — отримати список надісланих команд
    
-   cmd=atom\_get\_commands — отримати список шаблонів команд
    
-   cmd=atom\_create\_command —  надіслати команду Linux
    
-   atom\_delete\_command — видалити команду Linux
    

## Отримання списку надісланих Linux-команд (Історія команд)

Ця команда дає змогу отримати список усіх команд, надісланих на атом. Історія містить ідентифікатор атома, надіслану команду, а також статус виконання.

Метод: GET

### Параметри запиту

-   cmd=atom\_get\_all — команда для отримання історії
    
-   ident — унікальний ідентифікатор атома (наприклад, b0:44:6t:0d:a9:04)
    
-   node — номер вузла, на якому потрібно виконати команду
    
    ### Приклад запиту
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_all&amp;ident=b0:44:6t:0d:a9:04&amp;node=1</div></td></tr></tbody></table>
    
    Відповідь
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 27899,</div><div>&nbsp; &nbsp; "agent_id": null,</div><div>&nbsp; &nbsp; "ident": "8v:f5:8c:01:13:70",</div><div>&nbsp; &nbsp; "script": "ls /root/",</div><div>&nbsp; &nbsp; "processed": null,</div><div>&nbsp; &nbsp; "ts": 1712138610,</div><div>&nbsp; &nbsp; "result": null</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Отримання списку шаблонів команд Linux

Ця команда дає змогу отримати список шаблонів команд Linux, які можна використовувати для надсилання на атом. Шаблони містять опис і команду, що буде виконана на пристрої.

Метод: GET

### Параметри запиту

-   cmd=atom\_get\_commands — команда для отримання шаблонів команд.
    
-   ident — унікальний ідентифікатор атома (наприклад, 80:c5:80:01:68:08).
    
-   node — номер вузла, на якому потрібно виконати команду
    
    ### Приклад запиту
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_commands&amp;ident=80:c5:80:01:68:08&amp;node=1</div></td></tr></tbody></table>
    
    Відповідь
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 36,</div><div>&nbsp; &nbsp; "command_name": "Список Видео",</div><div>&nbsp; &nbsp; "description": null,</div><div>&nbsp; &nbsp; "command": "ls -lsh /video/*.avi"</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Надсилання команди Linux

За допомогою цієї команди можна надіслати команду Linux на атом. Команду буде додано до черги й виконано на пристрої.

Метод: POST

### Параметри запиту

-   cmd=atom\_create\_command — команда для створення нової команди.
    
-   ident — унікальний ідентифікатор атома.
    
-   script — скрипт команди (необов’язково).
    
-   node — номер вузла, на якому потрібно виконати команду
    
    ### Приклад запиту
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_create_command&amp;ident=b1:42:67:00:00:fd&amp;node=1</div></td></tr></tbody></table>
    
    Відповідь
    

<table><tbody><tr><td><span></span></td><td><div>27917 (<span>ID команди, доданої до черги)</span></div></td></tr></tbody></table>

## Видалення команди Linux

Якщо команду ще не було виконано, її можна видалити з черги за допомогою цього методу. Видалення можливе лише до того, як команду буде оброблено.

Метод: GET

### Параметри запиту

-   cmd=atom\_delete\_command — команда для видалення
    
-   ident — унікальний ідентифікатор атома
    
-   command\_id — ідентифікатор команди для видалення
    
-   node — номер вузла, на якому потрібно виконати команду
    
    ### Приклад запиту
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_delete_command&amp;ident=b0:44:6f:0d:av:88&amp;command_id=27921</div></td></tr></tbody></table>
    
    Відповідь
    
    <table><tbody><tr><td><span></span></td><td><div>"Success delete"</div></td></tr></tbody></table>
    

### Коди помилок API

-   400 Bad request — неправильний формат даних або відсутній обов’язковий параметр.
    
    Можливі повідомлення:
    
-   {"error": "Missing ident param"} — відсутній ідентифікатор атома.
    
-   {"error": "Command already processed"} — команду вже виконано.
    
-   {"error": "Unknown macro: {Unknown macro}"} — невідома макрокоманда.
    
-   500 Internal server error — внутрішня помилка сервера
    

### Взаємодія з командами в інтерфейсі

В інтерфейсі PILOT взаємодія з атомами відбувається через вкладку панелі адміністратора «Автокондуктор → Автобуси», де доступна команда «Взаємодіяти».

![](images/drex_rabota_s_linux_komandami_atomov_custom.png)

Через цю функцію:

-   Надсилаються команди (Linux-команди) на атом
    
-   Можна переглядати список доступних команд (шаблони)
    
-   Відображається історія всіх надісланих команд
    
-   Доступний результат виконання кожної команди
    

![](images/drex_rabota_s_linux_komandami_atomov_custom_2.png)
