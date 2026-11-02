---
title: "Mileage and Fuel Level"
---

This API gets information about vehicle mileage and fuel level at a specific point in time.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=istatus — API command to get the status
    
-   imei — object identifier in PILOT
    
-   unixtimestamp — point in time in Unix timestamp format
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;unixtimestamp=1408840780&amp;imei=356495042533101<span>&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "код": 0,</div><div>&nbsp; &nbsp; "сообщение": "ОК",</div><div>&nbsp; &nbsp; "общий_пробег": 0,</div><div>&nbsp; &nbsp; "total_run_by_can": 0,</div><div>&nbsp; &nbsp; "моточасы": 0,</div><div>&nbsp; &nbsp; "топливные_датчики": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150325,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "t_53lls1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150326,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "lls2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "топливо": 0,</div><div>&nbsp; &nbsp; "unixtimestamp": 1408840780</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   общий\_пробег — total vehicle mileage at that point in time (km)
    
-   total\_run\_by\_can — mileage according to CAN bus data (km)
    
-   моточасы — engine hours in seconds
    
-   топливо — amount of fuel in the tank at that point in time (l)
    
-   топливные\_датчики — array of data for each fuel sensor, if there are several:
    
-   info — sensor description
    
-   идентификатор — unique sensor ID
    
-   имя поля — system name of the sensor
    
-   топливо — fuel level according to this sensor (l)
    
-   unixtimestamp — point in time for which the data is returned (Unix timestamp)
