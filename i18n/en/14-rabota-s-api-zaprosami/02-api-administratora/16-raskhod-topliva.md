---
title: "Fuel Consumption"
---

This API gets fuel consumption data for a specific vehicle over the selected period of time.

It returns information about refuels, fuel consumed, drains and fuel sensor readings at the start and end of the period.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=fuel — command to get fuel data
    
-   ts — start date of the selection in Unix timestamp format
    
-   te — end date of the selection in Unix timestamp format
    
-   agentid — vehicle ID (agent\_id)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=fuel&amp;ts=1708981200&amp;te=1709154000&amp;agentid=6477&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "fill": 100,&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "fuel": 84, &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stale": 0,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stop": 43 &nbsp; &nbsp;</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — request result code (0 = successful request)
    
-   fill — amount of fuel refueled during the period
    
-   fuel — amount of fuel consumed
    
-   stale — amount of fuel drained or lost
    
-   start — fuel sensor reading at the start of the period
    
-   stop — fuel sensor reading at the end of the period
    
-   msg — text message with the result of the request
