---
title: "Mileage inside geofences"
---

This API returns information about vehicle mileage inside the specified geofences during the selected period.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = zones\_mileage — command for getting mileage in geofences
    
-   ts — start of the selection (Unix timestamp)
    
-   te — end of the selection (Unix timestamp)
    
-   imei — list of object IMEIs, separated by commas
    
-   zones — list of geofence names, separated by commas (optional; if omitted, mileage for all zones is returned)
    
-   node — number of the node on which to run the command
    

Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=zones_mileage&amp;ts=1596229200&amp;te=1597006800&amp;imei=867857035056105,123123123&amp;zones=Симферополь,Белогорск,Судак&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "ts":"1596229200",</div><div>&nbsp; "te":"1597006800",</div><div>&nbsp; "data":{</div><div>&nbsp;&nbsp; &nbsp; "867857035056105":[</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Симферополь",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":88308,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":259.84</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"За пределами города",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":21564,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":283.47</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Белогорск",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":704,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":10.77</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Судак",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":1332,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":11.45</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API response contains:

-   zone — geofence name
    
-   duration — time the object spent in the zone, in seconds
    
-   mileage — distance traveled in this zone, in kilometers
