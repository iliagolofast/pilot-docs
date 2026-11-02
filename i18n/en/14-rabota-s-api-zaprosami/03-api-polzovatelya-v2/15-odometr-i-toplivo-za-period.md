---
title: "Odometer and Fuel for a Period"
---

This API gets information about the mileage (odometer readings) and fuel consumption of a vehicle for the selected time interval.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

-   cmd=odo\_and\_fuel — command to get odometer and fuel data
    
-   imei — device identifier (object ID)
    
-   start — start time of the period in Unix timestamp format
    
-   stop — end time of the period in Unix timestamp format
    
-   node — the number of the node on which the command is executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=odo_and_fuel<span>&amp;start=1767214800&amp;stop=1767560400&amp;imei=861076084529922&amp;node=6</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "ok",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fuel": 7.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start_odo": 407121.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_odo": 407229.4</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message
    
-   fuel — amount of fuel consumed during the period
    
-   start\_odo — odometer reading at the start of the period
    
-   stop\_odo — odometer reading at the end of the period
