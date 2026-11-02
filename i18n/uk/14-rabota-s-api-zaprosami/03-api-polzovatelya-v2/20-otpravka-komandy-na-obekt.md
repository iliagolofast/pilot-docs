---
title: "Надсилання команди на об’єкт"
---

Цей API надсилає команду на транспортний засіб, використовуючи заздалегідь створений шаблон команди в модулі [«Команди»](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html).

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=send\_command — команда для надсилання команди на транспортний засіб
    
-   agent\_id — ідентифікатор агента (транспортного засобу)
    
-   template\_name — назва шаблону команди (створюється в модулі «Команди»)
    
-   node — номер вузла, на якому потрібно виконати команду (необов’язково)
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=send_command&amp;agent_id=139849&amp;template_name=test123&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": null,</div><div>&nbsp; "command_id": 3989</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера про результат дії
    
-   command\_id — ідентифікатор надісланої команди
