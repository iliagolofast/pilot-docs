---
title: "Mileage for a Given Period"
---

This API returns the mileage and engine hours of a vehicle for the selected time interval.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

-   cmd=istatus — command to get mileage
    
-   imei — object identifier in the system
    
-   start — start of the interval (Unix timestamp)
    
-   stop — end of the interval (Unix timestamp)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;imei=6794i&amp;start=1664917200&amp;stop=1665003600&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "run": 126.79500000000007,</div><div>&nbsp; "run_by_can": 0,</div><div>&nbsp; "motorhours": 9897,</div><div>&nbsp; "unixtimestamp_start": 1664917200,</div><div>&nbsp; "unixtimestamp_stop": 1665003600</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   run — mileage for the period, km
    
-   run\_by\_can — mileage according to CAN data, km
    
-   motorhours — engine hours for the period, seconds
    
-   unixtimestamp\_start — start of the interval
    
-   unixtimestamp\_stop — end of the interval
