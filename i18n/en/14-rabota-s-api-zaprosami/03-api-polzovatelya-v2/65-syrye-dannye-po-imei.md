---
title: "Raw data by IMEI"
---

This API returns the raw data of a device for a given period.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = ag\_events — command for getting raw points
    
-   imei — unique device identifier
    
-   ts — start of the selection (Unix timestamp)
    
-   te — end of the selection (Unix timestamp)
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_events&amp;ts=1498201000&amp;te=1498201200&amp;imei=356307045913463&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201016": {"alt": 33, "lat": "47.2124", "lon": "39.6922", "sat": 15, "speed": 0, "ts": 1498201016},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201037": {"alt": 29, "lat": "47.2124", "lon": "39.6924", "sat": 15, "speed": 6, "ts": 1498201037},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201097": {"alt": 31, "lat": "47.2128", "lon": "39.6933", "sat": 15, "speed": 0, "ts": 1498201097}</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "vehicle": {"agentid": 2914, "created_time": 1359797592, "current_mileage": 90224, "folder": "Sky Electronics", "imei": "356307045913463", "type": "Cow", "typeid": 31, "vehiclenumber": "IX35"}</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — success)
    
-   msg — server message
    
-   data — object with raw points; the keys are point timestamps, the values are:
    
-   lat — latitude
    
-   lon — longitude
    
-   alt — altitude
    
-   sat — number of satellites
    
-   speed — speed
    
-   ts — event time (Unix timestamp)
    
-   vehicle — object information:
    
-   agentid — agent identifier
    
-   created\_time — object creation time
    
-   current\_mileage — current mileage
    
-   folder — folder/group name
    
-   imei — device identifier
    
-   type — object type
    
-   typeid — object type identifier
    
-   vehiclenumber — vehicle number
