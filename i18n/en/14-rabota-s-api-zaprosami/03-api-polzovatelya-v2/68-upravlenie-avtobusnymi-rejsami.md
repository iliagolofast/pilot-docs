---
title: "Managing bus trips"
---

This API is used to manage bus trips and to assign vehicles to routes. It creates routes and assigns vehicles to trips.

## How to get the data

### Method

POST

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php

### Request parameters

To get the data you need, add a command.

-   cmd — command to execute
    

Available commands

-   setLine — creating a new bus route
    
-   bindControl — assigning a vehicle to a route
    
-   bindLineToVeh — assigning a route to a vehicle by ID
    
-   unbindControl — removing a vehicle assignment
    
-   listLines — getting the list of routes
    
-   setControl — assigning a bus to a trip
    
-   unsetControl — removing a trip assignment
    
-   data — data in JSON format passed in the request body
    

## Examples

### Creating a bus route

The setLine command creates a new route with the specified parameters and adds the route stops.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=setLine</div></td></tr></tbody></table>

Request body

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"account_id": "3008", &nbsp;</span></div><div><span>&nbsp;"bidirectional": 1,&nbsp; &nbsp;</span></div><div><span>&nbsp;"description": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"label": "123",&nbsp; &nbsp;</span></div><div><span>&nbsp;"name": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"number": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp;"type_id": 0,&nbsp; &nbsp;</span></div><div><span>&nbsp;"uid": "dhqwdh"</span></div><div><span>&nbsp;"points": [&nbsp;</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "45.0207",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "33.9993",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "Аэропорт__", &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35, &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "91",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 600,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 700,&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e2-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "44.9078",</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "34.0784",</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "7я горбольница",</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35,</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "90",</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 1000,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 900,</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e8-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp;&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Request parameters

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; account_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Contract number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; bidirectional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bidirectional trip (1 — round trip, 0 — one-way)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Route description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; label</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Additional route label</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Route name</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Route number (text or digit)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Transport type: 0 — bus, 1 — trolleybus, 2 — tram, 3 — minibus.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique route identifier</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; points</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Array</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; List of route stops</span></div></td></tr></tbody></table>

Stop parameters

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lat</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitude of the stop center (decimal number)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lon</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitude of the stop center (decimal number)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Stop name</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; price</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fare from the previous stop (decimal number)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; radius</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Stop zone radius in meters (number)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; silent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Notifications ban: 1 — banned, 0 — allowed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; stop_type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>Stop type: 0 — regular, 1 — technical (passengers are not counted), 2 — terminal (the counter is reset — all passengers exit)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Arrival time at the stop relative to the previous one (in seconds)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dwell time at the stop (in seconds)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique stop identifier</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут успешно создан",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "dhqwdh",</span></div><div><span>&nbsp; &nbsp; "lineuid": "2567"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Response parameters

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Execution status:&nbsp;success&nbsp;or&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Message about the result of the execution</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data about the created route</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique route identifier</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique identifier of the created route</span></div></td></tr></tbody></table>

### Assigning a vehicle to a route

The bindControl command is used to assign a vehicle to a specific route. The command links a GPS tracker to a route, sets the validity period of the assignment and configures the URL for receiving event notifications, for example, arrival at a stop or door opening.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>bindControl</span></div></td></tr></tbody></table>

Request body

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "121e1e1e12",&nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "imei": "12304", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "lineuid": "2e23e23e2e", &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php"</span></div><div><span>}</span></div></td></tr></tbody></table>

Request parameters

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique assignment identifier</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle IMEI</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique route identifier</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Start time of the assignment (in timestamp format)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; End time of the assignment (in timestamp format; if omitted, the assignment has no expiration)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL for event notifications (for example, arrival at a stop)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; prognoze_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; URL for stop arrival forecasts</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка успешно создана",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "121e1e1e12",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Response parameters

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Execution status:&nbsp;success&nbsp;or&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Message about the result of the execution</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data about the created assignment</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique assignment identifier</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unique route identifier</span></div></td></tr></tbody></table>

Or use the bindLineToVeh command to assign a route to a vehicle in a simplified way, by route ID.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindLineToVeh</div></td></tr></tbody></table>

Request body

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345",</div><div>&nbsp; &nbsp; "ts": "1392294840"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

### Removing a vehicle assignment from a bus line

unbindControl is the command for removing a previously created assignment of a vehicle to a route. The request passes the unique assignment identifier uid that was created earlier.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>unbindControl</span></div></td></tr></tbody></table>

Request body

<table><tbody><tr><td><span></span></td><td><div><span>json</span></div><div><span>{</span></div><div><span>&nbsp;&nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>}</span></div></td></tr></tbody></table>

-   uid — unique assignment identifier
    

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка удалена",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Getting the list of routes

The listLines command returns the list of all routes available to the current account.

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=listLines</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "data": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "id": 2955,</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "number": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "description": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "account_id": 18306,</span></div><div><span>&nbsp; &nbsp; &nbsp; "active": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "label": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type_id": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": "0.00",</span></div><div><span>&nbsp; &nbsp; &nbsp; "interval": 10,</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": null</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

### Creating a bus route and assigning a vehicle to it

The combined setLine and bindControl command creates a new bus route and assigns a vehicle to that route.

Request body

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "qiwduhqiwdqkdqkn",</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp;</span></div><div><span>&nbsp; "name": "test",&nbsp;</span></div><div><span>&nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; "number": "861A",&nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php",</span></div><div><span>&nbsp; "points": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "53.352142",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "83.758749",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Барнаульский автовокзал",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "50",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "52.534012",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "85.178777",</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Бийский автовокзал",</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "100",</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут и привязка успешно созданы",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>
