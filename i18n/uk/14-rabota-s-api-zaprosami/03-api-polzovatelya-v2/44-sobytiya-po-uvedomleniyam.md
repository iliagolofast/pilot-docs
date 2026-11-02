---
title: "Події за сповіщеннями"
---

Цей API використовується для отримання подій [сповіщень](../../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html) за обраний період, наприклад, перевищення швидкості, рух поза зоною або інші заздалегідь налаштовані оповіщення.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = notifications — команда для отримання подій сповіщень
    
-   ts — час початку вибірки (Unix timestamp)
    
-   te — час завершення вибірки (Unix timestamp)
    
-   notification — назва сповіщення, за яким потрібно отримати події
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=notifications&amp;ts=1606942800&amp;te=1607115600&amp;notification=test&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=52km/h Duration: 42 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988609</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=29km/h Duration: 12 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988438</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=17km/h Duration: 13 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988106</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "id": 3701</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   vehiclenumber — держномер або внутрішній номер транспортного засобу
    
-   agentid — ідентифікатор об’єкта в системі
    
-   message — текст події сповіщення
    
-   ts — час події у форматі Unix timestamp
    
-   id — ідентифікатор запиту/сесії
