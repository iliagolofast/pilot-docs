---
title: "Blocking or Unblocking Objects"
---

This API blocks or unblocks objects by the agent\_id, imei or account\_id parameters. Depending on the status passed, the vehicle is either blocked or activated. Blocking or unblocking can be performed based on identifiers such as the agent, IMEI or contract number.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Method

POST

### Request parameters

Required:

-   cmd=setvehblock  — command to block or unblock a vehicle.
    
-   status —  blocking status. Value: 0— blocked; 1— active (unblocked)
    
-   node — the number of the node on which the command must be executed
    

One of these parameters must be specified:

-   agentid — agent identifier
    
-   imei — IMEI number of the device
    
-   accountid — contract number
    

### Example requests

Blocking a vehicle by IMEI:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=0&amp;imei=1231231231&amp;node=1</div></td></tr></tbody></table>

Unblocking a vehicle by agentid:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=1&amp;agentid=2914&amp;node=1</div></td></tr></tbody></table>

Response

If the vehicle is blocked or unblocked successfully, you will receive the following response:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "status": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — response code. Value:
    
    — 0 — the operation was successful
    
    — other possible values: errors such as 400 or 500 if problems occurred.
    
-   data — blocking/unblocking data
    
-   agentid — Identifier of the agent whose status was changed
    
-   status — Vehicle status: 0— blocked; 1— active (unblocked)
    
-   msg — message about whether the operation succeeded
