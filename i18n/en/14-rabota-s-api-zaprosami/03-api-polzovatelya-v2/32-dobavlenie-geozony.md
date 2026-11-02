---
title: "Adding a Geofence"
---

This API creates a new geofence by specifying its name, type, color, group and geometry.

## How to get the data

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=geofenceadd — command to add a geofence
    
-   zonename — geofence name
    
-   zonetype — zone type (1 — polygon, 2 — circle)
    
-   color — zone color in HEX format (for example, #FFFFFF)
    
-   info — text information about the geofence
    
-   group\_name — name of the geofence group (created if it does not exist, optional)
    
-   group\_id — ID of an existing group (if specified, group\_name is ignored, optional)
    
-   geometry — GeoJSON describing the polygon or circle
    
-   external\_id — external identifier of the geofence (optional)
    
-   node — the number of the node on which the command must be executed
    

### Example request

Polygon:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=1&amp;zonename=test_api_polygon&amp;external_id=12354&amp;info=blabla&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Polygon","coordinates":[[[55.184334,25.112866],[55.183512,25.113472],[55.182154,25.112516],[55.183511,25.111016],[55.184923,25.112133]]]}&amp;node=1</div></td></tr></tbody></table>

Circle:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=2&amp;zonename=test_api_circle&amp;external_id=12345&amp;info=circle_info&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Circle","coordinates":[55.184334,25.112866],"radius":150}&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": 158412,</div><div>&nbsp; &nbsp; "zonename": "test_api_polygon",</div><div>&nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; "external_id": "12354",</div><div>&nbsp; &nbsp; "created_at": 1610536445,</div><div>&nbsp; &nbsp; "updated_at": 1610536445,</div><div>&nbsp; &nbsp; "color": "#FF3300",</div><div>&nbsp; &nbsp; "info": "blabla",</div><div>&nbsp; &nbsp; "group_id": 6984</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message
    
-   data — object with information about the created geofence:
    
-   id — geofence identifier
    
-   zonename — geofence name
    
-   zonetype — zone type (1 — polygon, 2 — circle)
    
-   external\_id — external identifier
    
-   created\_at — creation time (Unix timestamp)
    
-   updated\_at — update time (Unix timestamp)
    
-   color — geofence color
    
-   info — text information
    
-   group\_id— geofence group identifier
