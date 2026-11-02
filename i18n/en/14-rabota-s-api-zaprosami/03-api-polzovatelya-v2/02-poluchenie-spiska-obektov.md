---
title: "Getting the List of Objects"
---

This API provides information about vehicles, including their current location.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Request parameters

To get the data, you need to send a request with authorization and a function specified:

-   Username — user login
    
-   Password — password
    
-   functionName=api\_objectlist — command to get the list of objects
    
-   node — the number of the node on which the command must be executed
    

The format of the requested data is an array of vehicle objects.

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectlist</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016703961657",</div><div>&nbsp;"PLATE": "6561",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 25.9131066,</div><div>&nbsp;"LONGITUDE": 46.4645949</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

The API request returns an array of vehicle objects. Each object contains:

-   IMEI — identifier of the tracker installed on the vehicle
    
-   PLATE — vehicle number
    
-   NAME — vehicle name
    
-   LATITUDE — current latitude of the object's location
    
-   LONGITUDE — current longitude of the object's location
