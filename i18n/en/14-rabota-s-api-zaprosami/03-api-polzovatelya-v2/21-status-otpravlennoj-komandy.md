---
title: "Status of a Sent Command"
---

This API gets the status of a complex [command](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html), including the overall status and the status/response for all objects and commands included in the complex command.

## How to get the data

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=get\_command\_status — command to request the status
    
-   command\_id — complex command identifier
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_command_status&amp;command_id=3989&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "message": "",</div><div>&nbsp; "detailed_status": {</div><div>&nbsp; &nbsp; "43207": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Ver: 03.25.15_88 GPS: AXN_3.80_3333 Hw: FMB010 Mod: 3 IMEI: 352094083043221 Init: 2024-3-30 12:29 Uptime: 505289 MAC: 001E428490AF SPC: 0 (0) AXL: 0 OBD :0 BL:0,2 BT:3"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Data channel: 1 GPRS: 1 Phone: 0 SIM: 0 OP: 25001 Signal: 4 New SMS: 0 Roaming: 0 SMSFull: 0 LAC: 10 Cell ID: 11522 NetType: 1 FwUpd: -65536"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "general_status": "completed",</div><div>&nbsp; "version": "7.2.0"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   message — server message about the result
    
-   detailed\_status — associative array with detailed information for each agent
    
-   array key (for example, 43207) — agent identifier
    
-   type — data transmission channel type
    
-   status — command execution status (accepted, executed, etc.)
    
-   response — text response of the device
    
-   general\_status — overall status of the complex command (pending, completed, failed)
    
-   version — system version
