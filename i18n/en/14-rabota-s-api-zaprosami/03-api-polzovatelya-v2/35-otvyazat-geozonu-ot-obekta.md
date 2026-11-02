---
title: "Unassign a Geofence from an Object"
---

This API removes the link between an existing geofence and a vehicle.

## How to get the data

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=geofenceunlink — command to remove the geofence link
    
-   zone\_id — geofence identifier (required if external\_id is not set)
    
-   external\_id — external identifier of the geofence (optional, ignored if zone\_id is specified)
    
-   agent\_id — agent (vehicle) identifier
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>http://&lt;address&gt;/api/api.php?cmd=geofenceunlink&amp;zone_id=158414&amp;agent_id=66497&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message about the result of the action
