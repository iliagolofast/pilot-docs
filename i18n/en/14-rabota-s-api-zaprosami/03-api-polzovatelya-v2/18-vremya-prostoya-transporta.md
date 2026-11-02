---
title: "Vehicle Downtime"
---

This API returns a list of vehicle downtime (idle) periods for the selected time interval.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

Parameters are passed in the query string or in the body of a POST request:

-   cmd=get\_idle — command to get downtimes
    
-   time\_start — start of the period (timestamp, unixtime)
    
-   time\_end — end of the period (timestamp, unixtime)
    
-   imei — IMEI of the monitoring device. If there are several devices, specify them comma-separated: imei=887556,io9987,76573
    
-   node — the number of the node on which the command must be executed
    

### Example API request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_idle&amp;time_start=16878956&amp;time_end=16878755&amp;imei=887556,io9987,76573&amp;node=1</div></td></tr></tbody></table>

### Example response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "2914": [</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": "1641814740", "idle_end": 1641814984},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641815547, "idle_end": 1641825619},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641827105, "idle_end": 1641893307},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641893623, "idle_end": 1641898037}</div><div>&nbsp; &nbsp; &nbsp; // ... remaining records ...</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code: 0 — success 1 — error
    
-   data — dictionary whose keys are vehicle identifiers and whose values are lists of downtime periods:
    
-   idle\_start — downtime start time (timestamp)
    
-   idle\_end — downtime end time (timestamp)
    
-   message — text message about the result of the request
