---
title: "Sensor values"
---

This API returns the values of discrete sensors (fuel level, temperature, weight, etc.) for a given period.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

-   cmd =get\_discrete\_sensor\_data — command for getting sensor data
    
-   imei — object identifier
    
-   start — start of the period (Unix timestamp)
    
-   stop — end of the period (Unix timestamp)
    
-   tag\_id — sensor identifier
    
-   agent\_id — agent identifier (optional)
    
-   node — number of the node on which to run the command
    

<table><tbody><tr><td><span></span></td><td><div>Sensor data can only be requested for a 24-hour period.</div></td></tr></tbody></table>

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_discrete_sensor_data&amp;imei=350424062310402&amp;start=1677682645&amp;stop=1677761845&amp;tag_id=1158&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "sensor_data": {</div><div>&nbsp; &nbsp; "966960": {</div><div>&nbsp; &nbsp; &nbsp; "1677682772": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682772,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "95.09",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "0"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1677682950": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682950,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "94.9",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "12"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   sensor\_id — sensor identifier
    
-   unixtimestamp — time the value was recorded (Unix timestamp)
    
-   calibrated\_value — calibrated sensor value (for example, liters of fuel or degrees of temperature)
    
-   speed — object speed at the moment of measurement
