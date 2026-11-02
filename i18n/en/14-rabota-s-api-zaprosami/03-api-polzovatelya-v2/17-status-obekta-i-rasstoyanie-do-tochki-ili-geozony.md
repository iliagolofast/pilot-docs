---
title: "Object Status and Distance to a Point or Geofence"
---

This API provides the current status of a vehicle, as well as the time and distance to a specified point or geofence.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = get\_status\_and\_distance — command to get the status and distance
    
-   vehnum — fleet number or license plate of the vehicle, several can be specified, comma-separated
    
-   zone — geofence name (if you need to calculate the distance to a geofence)
    
-   point — coordinates of the point in the format latitude,longitude (if you need the distance to a specific point)
    
-   node — the number of the node on which the command must be executed
    

### Example requests

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;zone=Госпиталь%20Лапино&amp;node=1</div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;point=55.923032,37.659668&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "cstatus": 6,</div><div>&nbsp; "cstatus_timestamp": 1554985159,</div><div>&nbsp; "destination_name": "Zero coordinates",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "length": 27613,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "point": "55.923032,37.659668",</div><div>&nbsp; &nbsp; "time": 2002,</div><div>&nbsp; &nbsp; "type": "point"</div><div>&nbsp; },</div><div>&nbsp; "ignition": 1,</div><div>&nbsp; "rbu": "08",</div><div>&nbsp; "sensors": {</div><div>&nbsp; &nbsp; "Unloading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Loading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Ignition Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "FUEL SENSORS OPERATION SENSORS": "Operating|1554985138",</div><div>&nbsp; &nbsp; "Fuel ... fuel": "202.96 Liter|1554995669"</div><div>&nbsp; },</div><div>&nbsp; "source_name": "Loading_Chertanovo",</div><div>&nbsp; "status": 4,</div><div>&nbsp; "status_timestamp": 1554985072,</div><div>&nbsp; "unixtimestamp": 1554995864,</div><div>&nbsp; "vehiclenumber": "М897ЕТ777",</div><div>&nbsp; "zone": []</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   cstatus — current status of the object
    
-   cstatus\_timestamp — time the status was recorded (Unix timestamp)
    
-   destination\_name — name of the destination point
    
-   distance — object with information about the distance and time to the point or geofence:
    
-   length — distance in meters
    
-   time — time in seconds
    
-   type — object type (point or zone)
    
-   point — coordinates of the point (if type=point)
    
-   ignition — ignition state (1 = on)
    
-   rbu — concrete batching plant (RBU) identifier
    
-   sensors — state of various sensors (for example, loading/unloading, fuel)
    
-   source\_name — name of the data source
    
-   status — object status
    
-   status\_timestamp — time of the last status change
    
-   unixtimestamp — time the data was received
    
-   vehiclenumber — vehicle number
    
-   zone — array with the current geofences (if any)
