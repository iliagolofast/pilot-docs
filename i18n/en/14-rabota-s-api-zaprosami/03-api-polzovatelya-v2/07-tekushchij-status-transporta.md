---
title: "Current Vehicle Status"
---

This API is used to get up-to-date information about the current status of one or more vehicles, including location, speed, sensor readings and technical condition.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

To get the data you need, add parameters to the request address. Parameters are specified after the question mark “?” and separated by the “&” sign.

-   cmd = status— command to get status information
    
-   imei — unique identifier of the GPS tracker
    
-   agents — list of agentid identifiers, comma-separated, to request the statuses of several objects
    
-   veh\_numbers — vehicle registration number, exactly as it is specified in the system, with letter and digit case strictly observed
    
-   node — the number of the node on which the command must be executed
    

<table><tbody><tr><td><span></span></td><td><div>The request must contain one of three parameters: imei, agents or veh_numbers.</div></td></tr></tbody></table>

## Examples

### Request by IMEI

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=status&amp;imei=357073296325265<span>&amp;node=1</span></div></td></tr></tbody></table>

###  Request by several agent identifiers

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=status&amp;agents=51594,44841&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 44841,</div><div>&nbsp; &nbsp; &nbsp; "imei": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM2200",</div><div>&nbsp; &nbsp; &nbsp; "typeid": 27,</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "NURKA",</div><div>&nbsp; &nbsp; &nbsp; "folder": "REAL",</div><div>&nbsp; &nbsp; &nbsp; "created_time": 1518167398,</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 65345,</div><div>&nbsp; &nbsp; &nbsp; "initial_mileage": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": null,</div><div>&nbsp; &nbsp; &nbsp; "model": "ВАЗ (Lada) Kalina",</div><div>&nbsp; &nbsp; &nbsp; "info": " test",</div><div>&nbsp; &nbsp; &nbsp; "vin": "XTA219470K0259832",</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 27,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "47.119755",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.667492",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "moving": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking": 9267,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "firing": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "sensors_status": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "150549",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "выкл.",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621423461",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "GROUP!"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Датчик топлива",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "368013",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1249.4 -",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1249.4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "myGroup"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "reqest_time": 0.0642</div><div>}</div></td></tr></tbody></table>

The response is returned in JSON format and contains:

 imei — unique tracker number

-   distance — distance covered during the specified period
    
-   agent\_id —  identifier of the tracking device
    
-   account\_id — account number in the system
    
-   code — status code (0 - success)
    
-   msg — message about the request execution status
    
-   data — array of objects with vehicle information:
    
-   agentid — contract identifier
    
-   imei — international identifier of the tracking device
    
-   vin — vehicle identification number
    
-   configuration — tracker model
    
-   typeid — numeric identifier of the vehicle type
    
-   type — vehicle type
    
-   vehiclenumber — vehicle registration number
    
-   folder — organizational group or branch
    
-   created\_time — creation time in Unix timestamp format
    
-   uniqid — unique identifier
    
-   current\_mileage — current mileage
    
-   initial\_mileage — initial mileage
    
-   driver\_name — driver's name
    
-   driver\_phone — driver's phone number
    
-   model — vehicle model
    
-   info — additional information
    
-   status — information about the current state:
    
-   active — whether the object is active (1 or 0)
    
-   speed — current speed
    
-   direction — current direction in degrees
    
-   lat — current latitude
    
-   lon — current longitude
    
-   alt — current altitude
    
-   satsinview — number of visible satellites
    
-   unixtimestamp — time of the last update
    
-   moving — driving time in seconds
    
-   parking — parking time in seconds
    
-   firing — ignition state (1 — on, 0 — off)
    
-   sensors\_status — array with sensor information:
    
-   name — sensor name
    
-   id — sensor identifier
    
-   hum\_value — real value after calibration
    
-   dig\_value — digital value after calibration
    
-   raw\_value — raw value before calibration
    
-   change\_ts — time of the last value change in Unix timestamp format
    
-   group — sensor group
    
-   reqest\_time — request execution time in seconds
