---
title: "Getting a Report"
---

This API generates a report on vehicles, drivers, geofences, customers or tags for the selected period of time, with detailed configuration of the content.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

Required:

-   cmd=get\_report — command to get the report
    
-   report\_type — report type (numeric [identifier](spisok-otchyetov-2.html#идентификатор_отчёта_для_апи))
    
-   start — start of the period (Unix timestamp)
    
-   stop — end of the period (Unix timestamp)
    
-   veh\_id — vehicle identifiers (comma-separated)
    
-   explode — data splitting by: 1 — days, 2 — weeks, 3 — do not split
    
-   group — data grouping: 1 — by days, 2 — by objects, 3 — by geofences, 4 — by drivers, 5 — by customers, 6 — by groups, 7 — by tags
    
-   format — report format: json, pdf, xls
    
-   tz —  time zone used to generate dates and times in the report. Specify a valid IANA time zone identifier, for example Africa/Johannesburg. If an unknown or invalid time zone is passed, the API returns an error.
    

Optional:

-   drivers\_id — list of driver IDs
    
-   zones\_id — list of geofence IDs
    
-   fillings — include refuel data
    
-   stales — include drains
    
-   speed — include speed
    
-   rashod — include fuel consumption
    
-   stops — include stops
    
-   run — include vehicle runs
    
-   contr\_time / type — control time
    
-   tags — list of tag IDs
    
-   template — report template ID
    
-   outside\_zones — include outside geofences
    
-   work\_hours — take only working hours into account
    
-   fuel — include fuel
    
-   vehicle\_not\_moving\_time — downtime for the report
    
-   vehicles\_has\_covered\_km — vehicle mileage
    
-   notifications — list of notification IDs
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_report&amp;report_type=1&amp;start=1724623200&amp;stop=1724709600&amp;veh_id=1234,5678&amp;explode=1&amp;group=2</div><div>&amp;format=json&amp;tz=Africa/Johannesburg&amp;node=1</div></td></tr></tbody></table>

### Example POST request

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_report",</div><div>&nbsp; &nbsp; "report_type": 1,</div><div>&nbsp; &nbsp; "start": 1724623200,</div><div>&nbsp; &nbsp; "stop": 1724709600,</div><div>&nbsp; &nbsp; "veh_id": "1234,5678",</div><div>&nbsp; &nbsp; "explode": 1,</div><div>&nbsp; &nbsp; "group": 2,</div><div>&nbsp; &nbsp; "format": "json",</div><div>&nbsp; &nbsp; "tz": "Africa/Johannesburg"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "1234",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 125.5,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 15.2,</div><div>&nbsp; &nbsp; &nbsp; "stops": 5,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 60</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "5678",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 98.3,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 12.7,</div><div>&nbsp; &nbsp; &nbsp; "stops": 4,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 55</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message
    
-   data — array of report data
    
-   veh\_id — vehicle identifier
    
-   date — report record date
    
-   distance — distance covered (km)
    
-   fuel\_consumption — fuel consumption
    
-   stops — number of stops
    
-   speed\_avg — average speed
