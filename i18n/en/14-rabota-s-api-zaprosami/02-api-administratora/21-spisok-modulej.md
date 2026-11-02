---
title: "List of Modules"
---

Use this API to get the full list of modules available in a contract, with their identifiers and descriptions.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/ax/api.php?

### Request parameters

-   cmd=modlist — command to get the list of modules
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=modlist&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "код": 0,</div><div>&nbsp; "данные": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль топливных карт",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 7,</div><div>&nbsp; &nbsp; &nbsp; "имя": "топливо"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль блокировки двигателя",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 8,</div><div>&nbsp; &nbsp; &nbsp; "имя": "блок"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль уведомлений",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 27,</div><div>&nbsp; &nbsp; &nbsp; "имя": "уведомление"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "сообщение": "ОК"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   код — request execution code (0 — success)
    
-   данные — array of module objects:
    
-   descr — module description
    
-   идентификатор — unique module ID
    
-   имя — system name of the module
    
-   сообщение — text message about the result of the request
