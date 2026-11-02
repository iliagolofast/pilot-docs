---
title: "Object Information"
---

This API provides detailed information about a specific vehicle.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Request parameters

To get the data, you need to send a request with authorization and a function and an object specified:

-   Username — user login
    
-   Password — password
    
-   functionName=api\_objectdetails — command to get object details
    
-   parameters — IMEI of the object for which details are requested
    
-   node — the number of the node on which the command must be executed
    

The format of the requested data is a single vehicle object

### Example request

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectdetails</div><div>parameters=352217706092097</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209 ",</div><div>&nbsp;"INSTALLATIONDATE": "Dec 06, 2023",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>}</div></td></tr></tbody></table>

The API request returns an object with information about the vehicle:

-   IMEI — identifier of the tracker installed on the vehicle
    
-   PLATE —  vehicle number
    
-   INSTALLATIONDATE — date the tracker was installed on the vehicle
    
-   NAME — vehicle name
    
-   LATITUDE — current latitude of the object's location
    
-   LONGITUDE — current longitude of the object's location
