---
title: "Stop arrival forecast"
---

This API returns the predicted arrival time of buses, trolleybuses and minibuses at the specified stop.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = stationForecast — command for getting the arrival forecast
    
-   stopid — stop identifier (taken from the PILOT [interface](../../lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html)
    
-   node — number of the node on which to run the command
    

Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stationForecast&amp;stopid=7400&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "curent_stop": 1,</div><div>&nbsp; &nbsp; "line_id": 1371,</div><div>&nbsp; &nbsp; "line_name": "№ 17 С. КАЛЬФА - ПЛ. СУВОРОВА - УЛ. ГЕНЕРАЛА ЖИДИЛОВА",</div><div>&nbsp; &nbsp; "line_num": "17",</div><div>&nbsp; &nbsp; "line_type": "A",</div><div>&nbsp; &nbsp; "this_stop": 32,</div><div>&nbsp; &nbsp; "time": 4065,</div><div>&nbsp; &nbsp; "vehicle": "BUS FLIGHT",</div><div>&nbsp; &nbsp; "vehid": 48854</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>

The API response contains an array of objects with forecasts for each route at this stop:

-   curent\_stop — sequence number in the route of the stop where the vehicle is currently located
    
-   line\_id — route ID
    
-   line\_name — full route name
    
-   line\_num — route number
    
-   line\_type — route type: 'A' — bus, 'T' — trolleybus, 'M' — minibus
    
-   this\_stop — sequence number of this stop in the route
    
-   time — predicted arrival time at this stop, in seconds
    
-   vehicle — vehicle license plate
    
-   vehid — vehicle ID
