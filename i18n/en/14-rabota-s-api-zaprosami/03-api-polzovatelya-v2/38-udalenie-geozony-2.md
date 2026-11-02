---
title: "Deleting a geofence"
---

This API deletes a geofence from the system. When a geofence is deleted, all its assignments to vehicles are removed automatically.

## How to get the data

### Method

GET

### Request URL

To make the request, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=geofencedel — command for deleting a geofence
    
-   zone\_id — internal geofence identifier
    
-   external\_id — external geofence identifier (optional)
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencedel&amp;zone_id=473989&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"data": {</div><div>&nbsp;"zones_deleted": [</div><div>&nbsp;473989</div><div>&nbsp;]</div><div>&nbsp;}</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   message — server message about the result of the action
    
-   data.zones\_deleted — array of IDs of deleted geofences (zone\_id) for which the operation succeeded
