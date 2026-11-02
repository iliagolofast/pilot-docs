---
title: "Assign a Geofence to an Object"
---

This API lets you assign an existing geofence to a vehicle, setting control parameters such as speed limit, idle time and alerts.

## How to get the data

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=geofencelink — command to assign a geofence
    
-   zone\_id — geofence identifier (required if external\_id is not set)
    
-   external\_id — external identifier of the geofence (optional, ignored if zone\_id is specified)
    
-   agent\_id — agent (vehicle) identifier
    
-   idle — idle control in the geofence in minutes (optional)
    
-   speedlimit — speed limit in the geofence in km/h (optional)
    
-   alerts — alerts:
    
-   0 — do not send
    
-   1 — idling
    
-   2 — border crossing
    
-   3 — borders and border checkpoints
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofencelink&amp;zone_id=158414&amp;agent_id=66497&amp;idle=10&amp;speedlimit=80&amp;alerts=0&amp;node=1</div></td></tr></tbody></table>

**Response**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code— result code (0 — successful operation)
    
-   msg— server message about the result of the action
