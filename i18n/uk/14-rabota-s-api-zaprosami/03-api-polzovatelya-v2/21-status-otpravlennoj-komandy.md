---
title: "Статус надісланої команди"
---

Цей API отримує статус комплексної [команди](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html), зокрема загальний статус і статус/відповідь за всіма об’єктами та командами, що входять до комплексної команди.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=get\_command\_status — команда для запиту статусу
    
-   command\_id — ідентифікатор комплексної команди
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_command_status&amp;command_id=3989&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "message": "",</div><div>&nbsp; "detailed_status": {</div><div>&nbsp; &nbsp; "43207": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Ver: 03.25.15_88 GPS: AXN_3.80_3333 Hw: FMB010 Mod: 3 IMEI: 352094083043221 Init: 2024-3-30 12:29 Uptime: 505289 MAC: 001E428490AF SPC: 0 (0) AXL: 0 OBD :0 BL:0,2 BT:3"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Data channel: 1 GPRS: 1 Phone: 0 SIM: 0 OP: 25001 Signal: 4 New SMS: 0 Roaming: 0 SMSFull: 0 LAC: 10 Cell ID: 11522 NetType: 1 FwUpd: -65536"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "general_status": "completed",</div><div>&nbsp; "version": "7.2.0"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   message — повідомлення сервера про результат
    
-   detailed\_status — асоціативний масив з детальною інформацією за кожним агентом
    
-   ключ масиву (наприклад, 43207) — ідентифікатор агента
    
-   type — тип каналу передавання даних
    
-   status — статус виконання команди (accepted, executed тощо)
    
-   response — текстова відповідь пристрою
    
-   general\_status — загальний статус комплексної команди (pending, completed, failed)
    
-   version — версія системи
