---
title: "Movement Report with Geo-referencing"
---

This API lets you get a report on the movements of a vehicle for the selected period, with coordinates and geographic information (address, district, city, etc.). The data contains information about the start and end of each movement segment, average and maximum speed, route length and location by geo-coordinates.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd = rungeo — command to get the report
    
-   imei — unique identifier of the object in the system
    
-   start — start time of the selection in Unix timestamp format
    
-   stop — end time of the selection in Unix timestamp format
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rungeo&amp;imei=356307045913463&amp;start=1439413200&amp;stop=1439586000&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "tracks": {</div><div>&nbsp; &nbsp; "1439443509": {</div><div>&nbsp; &nbsp; &nbsp; "avgspeed": 35.3889,</div><div>&nbsp; &nbsp; &nbsp; "length": 12.7304,</div><div>&nbsp; &nbsp; &nbsp; "maxspeed": 59,</div><div>&nbsp; &nbsp; &nbsp; "ts": 1439443509,</div><div>&nbsp; &nbsp; &nbsp; "te": 1439445837,</div><div>&nbsp; &nbsp; &nbsp; "slat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "slon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "elat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "elon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "sgeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya ulitsa",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "egeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya Street",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — execution code (0 = success)
    
-   msg — status message
    
-   tracks — object whose keys are trip start timestamps (Unix timestamp) and whose values are data on each trip
    

These keys are also the unique track identifiers (track\_id) that can be used in the [gettrack](dannye-treka.html) method request to get the detailed route points.

For each trip:

-   avgspeed — average speed (km/h)
    
-   maxspeed — maximum speed (km/h)
    
-   length — route length (km)
    
-   ts — trip start time (Unix timestamp)
    
-   te — trip end time (Unix timestamp)
    
-   slat, slon — start coordinates (latitude, longitude)
    
-   elat, elon — end coordinates
    
-   sgeo — address of the start location (city, street, house, postal code)
    
-   egeo — address of the end location
