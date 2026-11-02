---
title: "Object Tracking Link"
---

This API gets a temporary link for tracking an object on the map, with activation and deactivation by specified geofences.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=get\_temp\_link — API command to get a temporary link
    
-   imei — identifier of the object (vehicle) in the system
    
-   startgeo — geofence for activating the link
    
-   stopgeo — geofence for deactivating the link
    
-   max\_duration — maximum link validity time in minutes (24 hours by default)
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_temp_link&amp;imei=356307045913463&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API&amp;max_duration=800</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/monitor_token.php?token=1f87a19c068ad47f3f769dc151527794&amp;lang=en&amp;zoom=10&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API</div></td></tr></tbody></table>

The response returns a direct link to the map with a temporary token. The link takes into account the specified activation (startgeo) and deactivation (stopgeo) geofences
