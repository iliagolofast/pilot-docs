---
title: "Getting the Nearest Vehicles"
---

This API is designed to find vehicles within a given radius of a specified point, sorted by distance.

It is suitable for rapid-response scenarios (for example, police and special services), when an operator needs to quickly determine which vehicles are closest to the scene of an incident.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

To get the data you need, add a command to the request address.

-   cmd= get\_nearest\_vehicles 
    
-   group\_id — ID of the vehicle group (orgdep.id)
    
-   lat — latitude of the target point (from −90 to 90)
    
-   lon — longitude of the target point (from −180 to 180)
    
-   radius — search radius. Supports values such as 500M, 1KM, 10KM, 20KM, or a number in meters
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_nearest_vehicles&amp;group_id=228&amp;lat=43.28191&amp;lon=76.90723&amp;radius=50KM</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>&nbsp;</div><div>&nbsp;{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "group_id": 123,</div><div>&nbsp; "group_name": "Police Fleet",</div><div>&nbsp; "location": { "latitude": 24.4539, "longitude": 54.3773 },</div><div>&nbsp; "radius_meters": 10000,</div><div>&nbsp; "vehicles_found": 2,</div><div>&nbsp; "vehicles": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "POL-001",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 456,</div><div>&nbsp; &nbsp; &nbsp; "veh_id": 789,</div><div>&nbsp; &nbsp; &nbsp; "imei": "123456789",</div><div>&nbsp; &nbsp; &nbsp; "model": "Toyota Land Cruiser",</div><div>&nbsp; &nbsp; &nbsp; "vehicle_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "address": "Sheikh Zayed Road, Dubai, UAE",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "latitude": 24.4550,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "longitude": 54.3780,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ignition": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1706964000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zone": []</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "distance": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "meters": 1234,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "kilometers": 1.23,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "straight_line_meters": 1200</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "travel_time": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "seconds": 180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "minutes": 3.0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "formatted": "3 min"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   group\_id — ID of the vehicle group
    
-   group\_name — group name
    
-   location — coordinates of the target point
    
-   latitude— latitude
    
-   longitude— longitude
    
-   radius\_meters — search radius in meters
    
-   vehicles\_found — number of vehicles found
    
-   vehicles — array of objects with vehicle information:
    
-   vehiclenumber— vehicle number
    
-   agentid— agent/device ID
    
-   veh\_id— object ID
    
-   imei— device IMEI
    
-   model— vehicle model
    
-   vehicle\_type— vehicle type (Car, Truck, etc.)
    
-   location— vehicle location
    
-   address— address (from the geocoder data)
    
-   latitude, longitude, altitude
    
-   status— current vehicle state
    
-   active— activity (1 = in operation)
    
-   speed— speed, km/h
    
-   direction— direction of movement
    
-   altitude— altitude
    
-   satsinview— number of satellites
    
-   ignition— ignition (1 = on)
    
-   unixtimestamp— event time in UNIX format
    
-   zone— array of current geofences
    
-   distance— distance to the target
    
-   meters— in meters
    
-   kilometers— in kilometers
    
-   straight\_line\_meters— straight-line distance in meters
    
-   travel\_time— estimated travel time to the target
    
-   seconds — in seconds
    
-   minutes — in minutes
    
-   formatted— formatted time (for example, "3 min")
