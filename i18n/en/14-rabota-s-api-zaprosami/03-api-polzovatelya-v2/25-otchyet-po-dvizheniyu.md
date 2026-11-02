---
title: "Movement Report"
---

Use this API to get information about vehicle trips for the selected period. When the “Geofences” module is enabled, each trip is split into segments by entering and leaving geofences.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

Request parameters

-   cmd=run — command to get the report
    
-   imei — unique identifier of the object (vehicle)
    
-   start — start time of the selection in Unix timestamp format
    
-   stop — end time of the selection in Unix timestamp format
    
-   zones — enable geofence information:
    
    — 0 — tracks are included whole, without splitting by geofences
    
    — 1 — tracks are split into segments at the moments of entering and leaving geofences
    
-   eco— include eco-driving data in tracks
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=run&amp;imei=359772039289781&amp;start=1406318400&amp;stop=1406404800&amp;zones=1&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "zones": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "213854753412306",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Гараж",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3861",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7127",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 2</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406353422": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406353422,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "966971618589014",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Барнаульский автовокзал",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3508",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7593",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 1</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "tracks": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341955": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341955,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 0.26,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "17",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 17</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406353389,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 119.83,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "96",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 58</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

Array of zones (zones) — points of entering and leaving geofences:

-   ts — event time (Unix timestamp)
    
-   stopuid — unique geofence identifier
    
-   stopname — geofence name
    
-   lat — latitude of the point
    
-   lon — longitude of the point
    
-   msgtype — event type (1 = entry, 2 = exit)
    

Array of tracks (tracks) — trip information:

-   ts — trip start time (Unix timestamp)
    
-   te — trip end time (Unix timestamp)
    
-   length — trip length in kilometers
    
-   maxspeed — maximum speed (km/h)
    
-   avgspeed — average speed (km/h)
    
-   lats — latitude of the start point
    
-   lons — longitude of the start point
    
-   late — latitude of the end point
    
-   lone — longitude of the end point
    
-   eco — eco-driving data (when the eco parameter is enabled):
    
-   Acceleration, Braking, Speed — indicators for each parameter
