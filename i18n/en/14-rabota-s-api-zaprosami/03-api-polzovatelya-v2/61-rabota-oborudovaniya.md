---
title: "Hardware operation"
---

This API returns data on the operation of vehicle sensors for the selected period.

With it, you can:

— track the periods when sensors are on/operating (for example, ignition, equipment switched on).

— get location information at the moment a sensor turns on.

— analyze hardware behavior and vehicle operation.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=sensors — command for getting sensor operation data
    
-   imei — vehicle identifier in the system
    
-   start — start of the selection (Unix timestamp)
    
-   stop — End of the selection (Unix timestamp)
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=sensors&amp;imei=356307046690011&amp;start=1404637430&amp;stop=1404645198&amp;node=1</div></td></tr></tbody></table>

Response

Each sensor is represented by an object whose key is the sensor identifier in the system:

<table><tbody><tr><td><span></span></td><td><div>"sensors": {</div><div>&nbsp; &nbsp; "9175": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fieldname": "DIS1",&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик зажигания", &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 9175,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "work": {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404637430": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404637430,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404637834,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3825",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0031",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "Россия, Астраханская область, Наримановский район, Николаевское шоссе, 1б" // Address</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404638577": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404638577,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404639841,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3625",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0478",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "RU, Астрахань, улица Савушкина"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // ... next sensor operation periods</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   fieldname — sensor field name in the system (for example, DIS1)
    
-   info — sensor name in the system (for example, “Ignition sensor”)
    
-   id — sensor identifier in the system
    
-   work — object with the sensor operation periods; the keys are the turn-on times (ts)
    
-   ts — time the sensor turned on (Unix timestamp)
    
-   te — time the sensor turned off (Unix timestamp)
    
-   lat — latitude at the moment of turning on
    
-   lon — longitude at the moment of turning on
    
-   place — address or location at the moment the sensor turned on
