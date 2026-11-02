---
title: "Assigning a Contract to a Vehicle"
---

This API links a contract to a vehicle, specifying its license plate, start date, contract name and distance.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=link\_contract — command to link a contract
    
-   PlateNum — vehicle license plate
    
-   Date — contract start time (Unix timestamp)
    
-   Name — contract name
    
-   Distance — distance (for example, mileage under the contract)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=link_contract&amp;PlateNum=test12345&amp;Distance=1111&amp;Date=1623927270&amp;Name=1212&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "The linking is successful"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message about the result of the action
