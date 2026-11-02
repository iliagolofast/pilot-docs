---
title: "List of Vehicles"
---

This API provides information about vehicles, including their current location, sensor data, technical information and additional parameters.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

To get the data you need, add a command to the request address.

-   cmd=list — command to get the list of vehicles
    
-   node — the number of the node on which the command must be executed
    

The format of the requested data is an array of vehicle data.

### Example request

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=list</span>&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "list": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "agentid": 9003,</span></div><div><span>&nbsp; &nbsp; &nbsp; "imei": "356307046873054",</span></div><div><span>&nbsp; &nbsp; &nbsp; "typeid": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "Car",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vehiclenumber": "Х444МР123",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vin": "TRDFG65876",</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": "Geo-Center OOO",</span></div><div><span>&nbsp; &nbsp; &nbsp; "created_time": 1414224633,</span></div><div><span>&nbsp; &nbsp; &nbsp; "current_mileage": 881,</span></div><div><span>&nbsp; &nbsp; &nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1418744535",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "43.5562",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.9084",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 268,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 246,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Parking", "description": "TEST SPEED" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Fuel sensor", "description": "Fuel sensor" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "External power supply", "description": "External power supply" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Ignition sensor", "description": "Ignition sensor" }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ],</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors_status": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187852",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "off",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "External power supply",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187851",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "26.27 V",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "26.27",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "26272",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Fuel sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187850",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1 l",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1626336197",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ]</span></div><div><span>&nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

The API request returns:

-   code — status code (0 — success)
    
-   msg — status message
    
-   list — array of vehicle objects, each of which contains:
    
-   agentid — unique identifier of the tracking device
    
-   imei — International Mobile Equipment Identity
    
-   typeid — numeric identifier of the vehicle type
    
-   type — vehicle type
    
-   vehiclenumber — vehicle registration number
    
-   vin — vehicle identification number
    
-   folder — organizational group
    
-   created\_time — time of addition to the system in Unix timestamp format
    
-   current\_mileage —current mileage
    
-   status — information about the current state:
    
-   unixtimestamp — time of the last update
    
-   lat — latitude
    
-   lon — longitude
    
-   speed — speed
    
-   dir — direction of movement in degrees
    
-   alt — altitude above sea level
    
-   satsinview — number of visible GPS satellites
    
-   sensors — array of available sensors
    
-   sensors\_status — detailed status of each sensor, including:
    
-   name — sensor name
    
-   id — sensor identifier
    
-   hum\_value — real value after calibration
    
-   dig\_value — digital value after calibration
    
-   raw\_value — raw value before calibration
    
-   change\_ts — time of the last value change
    
-   group — sensor group
