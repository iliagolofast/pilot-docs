---
title: "Статус отправленной команды"
source: status_otpravlennoj_komandy.html
---

Этот API получает статус комплексной [команды](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html), включая общий статус и статус/ответ по всем объектам и командам, входящим в комплексную команду.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=get\_command\_status — команда для запроса статуса
    
-   command\_id — идентификатор комплексной команды
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_command_status&amp;command_id=3989&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "message": "",</div><div>&nbsp; "detailed_status": {</div><div>&nbsp; &nbsp; "43207": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Ver: 03.25.15_88 GPS: AXN_3.80_3333 Hw: FMB010 Mod: 3 IMEI: 352094083043221 Init: 2024-3-30 12:29 Uptime: 505289 MAC: 001E428490AF SPC: 0 (0) AXL: 0 OBD :0 BL:0,2 BT:3"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Data channel: 1 GPRS: 1 Phone: 0 SIM: 0 OP: 25001 Signal: 4 New SMS: 0 Roaming: 0 SMSFull: 0 LAC: 10 Cell ID: 11522 NetType: 1 FwUpd: -65536"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "general_status": "completed",</div><div>&nbsp; "version": "7.2.0"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   message — сообщение сервера о результате
    
-   detailed\_status — ассоциативный массив с детальной информацией по каждому агенту
    
-   ключ массива (например, 43207) — идентификатор агента
    
-   type — тип канала передачи данных
    
-   status — статус выполнения команды (accepted, executed, и т.д.)
    
-   response — текстовый ответ устройства
    
-   general\_status — общий статус комплексной команды (pending, completed, failed)
    
-   version — версия системы
