---
title: "List of Geofences"
---

This API returns a list of all geofences with their characteristics, including coordinates, type, color and group.

## How to get the data

### Method

POST

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=geofencelist— command to get the list of geofences
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencelist&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 157828,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "Test Magnit",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 2,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": null,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#00CC00",</div><div>&nbsp; &nbsp; &nbsp; "info": "geozone text info",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Circle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [40.036497, 46.981936],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 305</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 153244,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "school",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": 1234,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#FF9900",</div><div>&nbsp; &nbsp; &nbsp; "info": "kml upload",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Polygon",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184334, 25.112866],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183512, 25.113472],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.182154, 25.112516],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183511, 25.111016],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184923, 25.112133]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message
    
-   data — array of geofence objects, each of which contains:
    
-   id — geofence identifier
    
-   zonename — geofence name
    
-   zonetype — geofence type (1 — polygon, 2 — circle)
    
-   external\_id — external identifier (if any)
    
-   created\_at — creation time (Unix timestamp)
    
-   updated\_at — update time (Unix timestamp)
    
-   color — geofence color in the interface
    
-   info— additional information
    
-   group\_name — name of the geofence group
    
-   group\_id — group identifier
    
-   geometry — zone geometry:
    
-   type — type (Circle or Polygon)
    
-   coordinates — coordinates (for a circle: \[longitude, latitude\]; for a polygon: array of coordinate arrays)
    
-   radius — radius for a circular geofence (in meters)
