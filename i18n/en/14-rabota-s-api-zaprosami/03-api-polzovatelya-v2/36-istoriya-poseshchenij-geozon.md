---
title: "Geofence visit history"
---

This API returns information about when objects visited specific geofences during a given period.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=ag\_geozones — API command for getting geofence history
    
-   start — start of the period (Unix timestamp)
    
-   stop — end of the period (Unix timestamp)
    
-   imei — vehicle identifier. You can specify several, separated by commas
    
-   node — number of the node on which to run the command
    

### Example request for one vehicle

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635<span>&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

### Example request for several vehicles

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635,867481037184458</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "865291046424635": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "867481037184458": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1607949101,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1607956478</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1608012176,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1608041334</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — success)
    
-   msg — server message (for example, "OK")
    
-   data — information about geofence visits
    
-   For one object, data is an array of visits
    
-   For several objects, data is an object whose keys are vehicle IMEIs and whose values are arrays of visits
    
-   group— geofence group
    
-   zonename— geofence name
    
-   ts— time of entering the geofence (Unix timestamp)
    
-   te— time of leaving the geofence (Unix timestamp)
