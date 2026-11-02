---
title: "Assigning a driver to a vehicle"
---

This API assigns a driver to a specific vehicle using its identifier (IMEI) and a tag (key).

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=linkdriver — API command that assigns the driver
    
-   imei — unique vehicle identifier in the system
    
-   driver — driver's full name
    
-   driverkey— driver key (tag) number
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=linkdriver&amp;imei=548545218454&amp;driver=ADAS+driver&amp;driverkey=89185717259&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": [],</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — success, any other value — error)
    
-   data — additional data (an empty array in this case)
    
-   message — text message from the server (for example, “success”)
