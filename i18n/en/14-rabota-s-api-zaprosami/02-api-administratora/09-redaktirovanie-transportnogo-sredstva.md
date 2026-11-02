---
title: "Editing a Vehicle"
---

This API is used to edit vehicle data. You can change vehicle information, including type, model, license plate, VIN, year of manufacture, engine power, initial mileage and engine hours, as well as the assignment to a folder, driver or subdivision.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

Required:

-   cmd=vehedit — command to change vehicle information
    
-   agentid— vehicle identifier, or imei — unique device ID
    
-   node — the number of the node on which the command must be executed
    

Optional:

-   type — vehicle type, the ID is taken from the vehtypelist command
    
-   veh\_number — displayed name/license plate of the vehicle
    
-   veh\_type — custom vehicle type (string)
    
-   folder\_id — folder in which the object is placed; if the folder does not exist, it is created automatically. The root folder by default
    
-   model — vehicle model
    
-   initial\_motor\_hours — initial engine hours
    
-   driver\_id — driver ID
    
-   initial\_mileage — initial mileage (0 by default)
    
-   year — year of manufacture of the vehicle (1900 by default)
    
-   vin — vehicle VIN
    
-   engine\_horse — engine power
    
-   organization — organization
    
-   column — column
    
-   subdivision — subdivision
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehedit&amp;agentid=144&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"Success": "The vehicle data has been changed"</div><div>}</div></td></tr></tbody></table>
