---
title: "Daily Vehicle Summary"
---

This API gets information about a vehicle for the last 24 hours, including mileage, fuel level, refuels and fuel consumption.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = vehinfo\_24\_hours — command to get information for 24 hours
    
-   agent\_id — vehicle identifier (several can be specified, comma-separated)
    
-   imei — device identifier (several can be specified, comma-separated)
    
-   ts — timestamp (Unix timestamp)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=vehinfo_24_hours&amp;imei=10518,165182&amp;ts=1617710825&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "10518": {</div><div>&nbsp; &nbsp; "total_mileage": 745851.44,</div><div>&nbsp; &nbsp; "fuel_start": 229.37,</div><div>&nbsp; &nbsp; "fuel_stop": 229.37,</div><div>&nbsp; &nbsp; "fuel_fill": 409.6,</div><div>&nbsp; &nbsp; "fuel_drain": 153.15,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 256.45,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 35,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 161.5658,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 22,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; },</div><div>&nbsp; "165182": {</div><div>&nbsp; &nbsp; "total_mileage": 100946.68,</div><div>&nbsp; &nbsp; "fuel_start": 0,</div><div>&nbsp; &nbsp; "fuel_stop": 0,</div><div>&nbsp; &nbsp; "fuel_fill": 0,</div><div>&nbsp; &nbsp; "fuel_drain": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 22.313,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 10,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   total\_mileage — total mileage
    
-   fuel\_start — amount of fuel at the start of the period
    
-   fuel\_stop — amount of fuel at the end of the period
    
-   fuel\_fill — refuel
    
-   fuel\_drain — fuel drain
    
-   fuel consumption (l) — actual fuel consumption
    
-   fuel consumption (l/100km) — consumption per 100 km
    
-   fuel\_consumption\_norm(l) — standard fuel consumption
    
-   fuel\_consumption\_norm(l/100km) — standard consumption per 100 km
    
-   engine hours — engine hours
