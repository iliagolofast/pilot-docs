---
title: "List of route stops"
---

This API returns the list of all stops for the specified route, including coordinates, stop type, order and fare.

## How to get the data

### Method

GET

### Request URL

To make the request, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=stopList — command for getting the list of stops
    
-   line\_num — route number
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stopList&amp;line_num=1Б&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "line": {</div><div>&nbsp; &nbsp; "id": 1083,</div><div>&nbsp; &nbsp; "name": "1Б",</div><div>&nbsp; &nbsp; "number": "1Б",</div><div>&nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; "description": "1Б",</div><div>&nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; "interval": 25,</div><div>&nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5085,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Центр занятости",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3315",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5086,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Автовокзал",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9039",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3236",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   id— unique route/stop identifier
    
-   name— route or stop name
    
-   number— route number
    
-   bidirectional— 1 if the route is bidirectional
    
-   active— 1 if the route is active
    
-   price— fare
    
-   interval— headway in minutes
    
-   stops— array of route stops:
    
-   lat, lon — stop coordinates
    
-   radius— stop zone radius in meters
    
-   stop\_type— stop type: 0 — regular, 1 — technical, 2 — terminal
    
-   stop\_order— order of the stop in the route
    
-   silent— 1 — do not generate messages for this stop
