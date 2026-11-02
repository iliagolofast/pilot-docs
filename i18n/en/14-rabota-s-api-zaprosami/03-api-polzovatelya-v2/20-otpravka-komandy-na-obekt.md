---
title: "Sending a Command to an Object"
---

This API sends a command to a vehicle using a previously created command template in the [“Commands”](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html) module.

## How to get the data

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=send\_command — command to send a command to a vehicle
    
-   agent\_id — agent (vehicle) identifier
    
-   template\_name — command template name (created in the “Commands” module)
    
-   node — the number of the node on which the command must be executed (optional)
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=send_command&amp;agent_id=139849&amp;template_name=test123&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": null,</div><div>&nbsp; "command_id": 3989</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message about the result of the action
    
-   command\_id — identifier of the command sent
