---
title: "List of Hardware"
---

This API is used to get the list of all hardware types (device models) used in a contract, with the manufacturer indicated.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=vehmodellist — command to get the list of hardware models
    
-   node — the number of the node on which the command must be executed
    
    ### Example request
    

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehmodellist&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 Lite GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — request execution code (0 — success)
    
-   data — array of hardware models:
    
-   identifier — unique model identifier
    
-   name — hardware model name
    
-   supplier — hardware manufacturer
    
-   message — text message about the result of the request
