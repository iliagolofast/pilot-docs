---
title: "Отправка команды на объект"
source: otpravka_komandy_na_obekt.html
---

Этот API отправляя команду на транспортное средство, используя заранее созданный шаблон команды в модуле [«Команды»](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html).

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=send\_command — команда для отправки команды на транспортное средство
    
-   agent\_id — идентификатор агента (транспортного средства)
    
-   template\_name — название шаблона команды (создаётся в модуле «Команды»)
    
-   node — номер узла, на котором нужно выполнить команду (необязательно)
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=send_command&amp;agent_id=139849&amp;template_name=test123&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": null,</div><div>&nbsp; "command_id": 3989</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
    
-   command\_id — идентификатор отправленной команды
