---
title: "Список iButton"
---

Цей API отримує список iButton, закріплених за транспортним засобом, за вказаний період часу.

iButton — це невеликий електронний пристрій (мітка), який використовується для ідентифікації водіїв або об’єктів. Зазвичай застосовується для контролю доступу, обліку робочого часу або фіксації початку/завершення роботи з транспортним засобом.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=take\_ibutton\_list — команда для API, у цьому разі
    
-   ts — дата початку періоду (Unix timestamp)
    
-   te — дата кінця періоду (Unix timestamp)
    
-   agentId — ідентифікатор транспортного засобу
    
-   node — номер вузла, на якому потрібно виконати команду
    

Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=take_ibutton_list&amp;ts=1643662800&amp;te=1645045200&amp;AgentID=79673<span>&amp;node=1</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "data": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000000",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000001",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх)
    
-   msg — повідомлення сервера (наприклад, "OK")
    
-   data — масив з інформацією про iButton:
    
-   ibutton — унікальний ідентифікатор iButton
    
-   ts — час фіксації iButton (Unix timestamp)
