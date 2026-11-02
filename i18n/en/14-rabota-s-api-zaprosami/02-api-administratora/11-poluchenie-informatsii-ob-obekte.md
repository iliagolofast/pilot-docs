---
title: "Getting Object Information"
---

This API is used to get complete information about a vehicle.

You can request data either by agent\_id or by the device IMEI number.

The response returns detailed information: license plate, fuel consumption, speed limits, VIN, model, configuration settings, assigned driver and more.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

Required:

-   cmd=vehinfo — command to get vehicle information
    
-   node — the number of the node on which the command must be executed
    

One of these parameters must be specified:

-   agentid — vehicle identifier (agent\_id)
    
-   imei — unique IMEI number of the device
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehinfo&amp;agentid=81181&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "ownerid": 5374,</div><div>&nbsp; &nbsp; "vehiclenumber": "Howen C",</div><div>&nbsp; &nbsp; "typeid": 1,</div><div>&nbsp; &nbsp; "summer_fuel": "10",</div><div>&nbsp; &nbsp; "winter_fuel": "10",</div><div>&nbsp; &nbsp; "idle_fuel": "2",</div><div>&nbsp; &nbsp; "time_zone": "Europe/Moscow",</div><div>&nbsp; &nbsp; "speed_limit": 0,</div><div>&nbsp; &nbsp; "agentid": 81181,</div><div>&nbsp; &nbsp; "account_id": 3925,</div><div>&nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; "year": "1900",</div><div>&nbsp; &nbsp; "vin": "",</div><div>&nbsp; &nbsp; "fuel_type": "50",</div><div>&nbsp; &nbsp; "driver_name": "Test",</div><div>&nbsp; &nbsp; "driver_phone": "12121212121"</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

The API request returns:

-   ownerid — owner ID
    
-   vehiclenumber — license plate or name of the vehicle
    
-   typeid — vehicle type
    
-   summer\_fuel / winter\_fuel / idle\_fuel — fuel consumption norms (summer, winter, idling)
    
-   time\_zone — time zone in which the vehicle is used
    
-   speed\_limit — speed limit
    
-   account\_id — ID of the contract the vehicle is assigned to
    
-   model / year / vin — model, year of manufacture and VIN of the vehicle
    
-   fuel\_type — fuel type
    
-   driver\_name / driver\_phone — full name and phone number of the assigned driver
    
-   config — JSON with additional configuration (settings for fuel, engine hours, restrictions, etc.)
