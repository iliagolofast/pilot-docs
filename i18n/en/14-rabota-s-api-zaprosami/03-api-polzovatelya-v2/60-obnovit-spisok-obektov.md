---
title: "Updating the list of objects"
---

This API grants a user access only to the selected vehicles.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

POST

### Request parameters

-   cmd=update\_user\_vehicles — command for changing the list of objects
    
-   vehicles — comma-separated list of object identifiers (vehicle IDs).
    
-   user\_id — identifier of the user whose access is being updated
    
-   node — number of the node on which the command runs
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_vehicles",</div><div>&nbsp; &nbsp; "vehicles": "2,18",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message
