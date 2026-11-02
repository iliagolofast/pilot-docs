---
title: "Parking and Stops Report"
---

This API gets information about vehicle stops and parkings for the specified period. You can find out the coordinates, duration and the address of the stop or parking location.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=runstops — API command to get the report on stops and parkings
    
-   imei — vehicle identifier in the system
    
-   start — start time of the selection (Unix timestamp)
    
-   stop — end time of the selection (Unix timestamp)
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=runstops&amp;start=1676840400&amp;stop=1676926800&amp;imei=16518<span>&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676840400,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676873376,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 32976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.733388",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "61.051853",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Р-351",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Белоярский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "624053",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676875342,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676880065,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 4723,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.893278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "60.770452",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Екатеринбургская кольцевая автомобильная дорога",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Берёзовский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623703",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "parkings": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676887881,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676889637,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 1756,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.781017",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "58.40189",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Подъезд к д. Зобнина от км 216+740 а/д «г. Пермь — г. Екатеринбург»",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Achitsky District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623235",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — success)
    
-   msg — server message (for example, "OK")
    
-   stops — array of stop data:
    
-   ts— stop start time (Unix timestamp)
    
-   te— stop end time (Unix timestamp)
    
-   dur— stop duration in seconds
    
-   lat— latitude of the point
    
-   lon— longitude of the point
    
-   address— information about the stop address (street, district, oblast, region, postal code, country, country code)
    
-   parkings— array of parking data (same fields as stops)
