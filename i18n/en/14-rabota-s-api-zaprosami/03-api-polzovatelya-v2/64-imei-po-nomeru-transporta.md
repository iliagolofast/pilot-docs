---
title: "IMEI by vehicle number"
---

This API is used to determine the IMEI of the device installed on a vehicle by the vehicle number.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=get\_imei — API command
    
-   vehnum — vehicle number
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_imei&amp;vehnum=IX35&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "imei": "356307045913463"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = success)
    
-   msg — server message
    
-   imei — IMEI of the device installed in the vehicle
