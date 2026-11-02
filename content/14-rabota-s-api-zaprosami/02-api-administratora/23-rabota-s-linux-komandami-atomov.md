---
title: "Работа с Linux-командами Атомов"
source: rabota_s_linux_komandami_atomov.html
---

В этой статье описаны основные команды API, которые позволяют взаимодействовать с Linux-системами через панель администратора. С помощью этих команд можно отправлять, получать, удалять и просматривать историю команд для [Атомов](../../lichnyj-kabinet-polzovatelya/moduli-1/atom.html).

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php

### Список команд

-   cmd=atom\_get\_all — получить список отправленных команд
    
-   cmd=atom\_get\_commands — получить список шаблонов команд
    
-   cmd=atom\_create\_command —  отправить команду Linux
    
-   atom\_delete\_command — удалить команду Linux
    

## Получение списка отправленных Linux команд (История команд)

Эта команда позволяет получить список всех команд, отправленных на атом. История включает идентификатор атома, отправленную команду, а также статус выполнения.

Метод: GET

### Параметры запроса

-   cmd=atom\_get\_all — команда для получения истории
    
-   ident — уникальный идентификатор атома (например, b0:44:6t:0d:a9:04)
    
-   node — номер узла, на котором нужно выполнить команду
    
    ### Пример запроса
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_all&amp;ident=b0:44:6t:0d:a9:04&amp;node=1</div></td></tr></tbody></table>
    
    Ответ
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 27899,</div><div>&nbsp; &nbsp; "agent_id": null,</div><div>&nbsp; &nbsp; "ident": "8v:f5:8c:01:13:70",</div><div>&nbsp; &nbsp; "script": "ls /root/",</div><div>&nbsp; &nbsp; "processed": null,</div><div>&nbsp; &nbsp; "ts": 1712138610,</div><div>&nbsp; &nbsp; "result": null</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Получение списка шаблонов команд Linux

Эта команда позволяет получить список шаблонов команд Linux, которые могут быть использованы для отправки на атом. Шаблоны содержат описание и команду, которая будет выполнена на устройстве.

Метод: GET

### Параметры запроса

-   cmd=atom\_get\_commands — команда для получения шаблонов команд.
    
-   ident — уникальный идентификатор атома (например, 80:c5:80:01:68:08).
    
-   node — номер узла, на котором нужно выполнить команду
    
    ### Пример запроса
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_commands&amp;ident=80:c5:80:01:68:08&amp;node=1</div></td></tr></tbody></table>
    
    Ответ
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 36,</div><div>&nbsp; &nbsp; "command_name": "Список Видео",</div><div>&nbsp; &nbsp; "description": null,</div><div>&nbsp; &nbsp; "command": "ls -lsh /video/*.avi"</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Отправка команды Linux

С помощью этой команды можно отправить команду Linux на атом. Команда будет добавлена в очередь и выполнена на устройстве.

Метод: POST

### Параметры запроса

-   cmd=atom\_create\_command — команда для создания новой команды.
    
-   ident — уникальный идентификатор атома.
    
-   script — скрипт команды (опционально).
    
-   node — номер узла, на котором нужно выполнить команду
    
    ### Пример запроса
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_create_command&amp;ident=b1:42:67:00:00:fd&amp;node=1</div></td></tr></tbody></table>
    
    Ответ
    

<table><tbody><tr><td><span></span></td><td><div>27917 (<span>ID команды, добавленной в очередь)</span></div></td></tr></tbody></table>

## Удаление команды Linux

Если команда еще не была выполнена, ее можно удалить из очереди с помощью этого метода. Удаление возможно только до того, как команда будет обработана.

Метод: GET

### Параметры запроса

-   cmd=atom\_delete\_command — команда для удаления
    
-   ident — уникальный идентификатор атома
    
-   command\_id — идентификатор команды для удаления
    
-   node — номер узла, на котором нужно выполнить команду
    
    ### Пример запроса
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_delete_command&amp;ident=b0:44:6f:0d:av:88&amp;command_id=27921</div></td></tr></tbody></table>
    
    Ответ
    
    <table><tbody><tr><td><span></span></td><td><div>"Success delete"</div></td></tr></tbody></table>
    

### Коды ошибок API

-   400 Bad request — неверный формат данных или отсутствует обязательный параметр.
    
    Возможные сообщения:
    
-   {"error": "Missing ident param"} — отсутствует идентификатор атома.
    
-   {"error": "Command already processed"} — команда уже выполнена.
    
-   {"error": "Unknown macro: {Unknown macro}"} — неизвестная макро-команда.
    
-   500 Internal server error — внутренняя ошибка сервера
    

### Взаимодействие с командами в интерфейсе

В интерфейсе PILOT взаимодействие с атомами происходит через вкладку административной панели «Автокондуктор → Автобусы», где доступна команда «Взаимодействовать».

![](images/drex_rabota_s_linux_komandami_atomov_custom.png)

Через эту функцию:

-   Отправляются команды (Linux-команды) на атом
    
-   Можно просматривать список доступных команд (шаблоны)
    
-   Отображается история всех отправленных команд
    
-   Доступен результат выполнения каждой команды
    

![](images/drex_rabota_s_linux_komandami_atomov_custom_2.png)
