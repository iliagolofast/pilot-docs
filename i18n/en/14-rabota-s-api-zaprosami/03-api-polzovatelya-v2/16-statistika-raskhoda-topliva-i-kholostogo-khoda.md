---
title: "Fuel Consumption and Idling Statistics"
---

This API gets data on how much fuel was consumed during the selected period, as well as how long the vehicle was idling.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=fuelconsumtion — command to get the report
    
-   imei — unique vehicle identifier
    
-   start — start time of the selection (Unix timestamp)
    
-   stop — end time of the selection (Unix timestamp)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=fuelconsumtion&amp;imei=7157153151020&amp;start=1644741475&amp;stop=1644914275&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "7157153151020": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "idle": 98872,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fuel consumed": 457.92</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 = success, other values = error)
    
-   data — data for the selected object:
    
-   idle — engine idling time (in seconds)
    
-   fuel consumed — volume of fuel consumed during the specified period (liters)
    
-   message — text message about the result
