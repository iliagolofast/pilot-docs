---
title: "Adding a Vehicle"
---

Use this API to add an object to a contract.

## How to get the data

### Method

POST

### Request address

To get the data, use the address:  https://<server\_address>/backend/api.php?

### Request parameters

To get the data you need, add parameters to the request address. Parameters are specified after the question mark “?” and separated by the “&” sign.

Required:

-   cmd = vehadd — command to add a vehicle
    
-   account\_id — contract number in the system
    
-   vehmodel — monitoring device model. The model ID is taken from the response of the vehmodellist command
    
-   imei — unique number of the monitoring device
    
-   type — vehicle type. The vehicle type ID is taken from the response of the vehtypelist command. If the required type is not in the list, you can specify a new ID
    
-   name — license plate or name of the vehicle
    
-   msisdn — number of the device's primary SIM card
    
-   msisdn2 — number of the device's second SIM card
    
-   mac — MAC address, identifier of the bus conductor device.  If the mac parameter is specified, the system automatically creates a record of the object in the “Buses” tab in the Admin panel. 
    
-   node — the number of the node on which the command must be executed
    

Optional:

-   folder — name of the folder to add the vehicle to. If the specified folder does not exist, it will be created. If no folder is specified, the vehicle is added to the general list — the root folder
    
-   info — additional information about the vehicle
    
-   summer\_fuel — fuel consumption in summer
    
-   winter\_fuel — fuel consumption in winter
    
-   fuel\_type — type of fuel used . 50-diesel, 80-92-95-98-gasoline, 100-gas. If the parameter is not specified, the system automatically sets diesel
    
-   lost\_connection\_time — time after which connection loss is registered (in seconds)
    
-   time\_zone — vehicle time zone. Europe/Moscow is set by default
    
-   initial\_motor\_hours — initial engine hours reading
    
-   driver\_id — driver identifier
    
-   initial\_mileage — initial mileage of the vehicle. If not specified, counting starts from zero
    
-   speed\_limit — maximum permitted speed. If not specified, speed control is disabled
    
-   minsat — minimum number of satellites. 4 by default
    
-   maxhdop — maximum HDOP. 21 by default
    
-   mintime — minimum parking time for splitting tracks. 3600 seconds by default
    
-   maxspeed — maximum possible speed. 250 by default
    
-   minspeed — minimum speed for detecting the start of movement. 10 km/h by default
    
-   minparking — minimum parking time on a route. 300 seconds by default
    
-   model — make and model of the vehicle
    
-   year — year of manufacture of the vehicle. If the year of manufacture is not specified, it defaults to 1900
    
-   vin — vehicle identification number
    
-   engine\_horse: — engine power
    
-   organization — name of the owner organization
    
-   column — column number
    
-   subdivision — subdivision
    

### Example request

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd=vehadd&amp;account_id=4019&amp;type=1&amp;name=testveh&amp;imei=80987898789987&amp;vehmodel=13&amp;msisdn=7903&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"code": 0,</span></div><div><span>&nbsp;"msg": "OK",</span></div><div><span>&nbsp;"agent_id": "20518",</span></div><div><span>&nbsp;"veh_id": "18994"</span></div><div><span>}</span></div></td></tr></tbody></table>

The API request returns:

-   code — response code that shows how the request was processed
    
-   msg — message with a text description of the result of the operation
    
-   agent\_id — identifier of the agent that processed the request
    
-   veh\_id — identifier of the vehicle this response refers to
