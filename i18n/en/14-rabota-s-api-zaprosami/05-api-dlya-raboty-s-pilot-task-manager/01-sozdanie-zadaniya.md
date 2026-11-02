---
title: "Creating a task"
---

This API is used to create tasks in the system for contracts with the [PTM](../../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/index.html) module connected.

### API base path 

<table><tbody><tr><td><span></span></td><td><div>/backend/public/api/task</div></td></tr></tbody></table>

### Request URL

To make the request, use the following URL format:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/api/task</div></td></tr></tbody></table>

### API access

API access uses HTTP Basic authentication. The login and password must be in the format:

<table><tbody><tr><td><span></span></td><td><div>PILOT_login:PILOT_password</div></td></tr></tbody></table>

### API request example

<table><tbody><tr><td><span></span></td><td><div>https://demo:demo@tasks.pilot-gps.com/backend/public/api/task/create_universal</div></td></tr></tbody></table>

### API response format

The API response is standardized and has the following format:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,&nbsp; // TRUE - successful request, FALSE - error</div><div>&nbsp; &nbsp; "msg": "OK",&nbsp; // Error message, if any</div><div>&nbsp; &nbsp; "httpCode": 200,&nbsp; // Error code</div><div>&nbsp; &nbsp; "data": [],&nbsp; // Response data, if any</div><div>&nbsp; &nbsp; "et": 0,&nbsp; // Request execution time</div><div>&nbsp; &nbsp; "exceptionMsg": "Exception"&nbsp; // Exception message</div><div>}</div></td></tr></tbody></table>

Statuses and error codes:

-   200 — Request completed successfully
    
-   400 — Required parameters are missing
    
-   401 — Authorization error: incorrect login or password
    
-   404 — API route not found
    
-   500 — Server error
    

### How to create a task

Request method: POST

To create a task with the Universal template, you need to pass parameters. The Universal template is created automatically in the system; additional templates must be configured in advance in the PTM interface.

### Task parameters for the Universal template

A task with the Universal template uses the following set of parameters:

1\. external\_id: External task identifier (string, NULL by default)

2\. vehicle\_plate: Vehicle number (NULL by default). If the number does not exist in the system, it will be created as a hired vehicle

3\. driver\_name: Driver's full name (NULL by default). If not specified, the value from vehicle\_plate is used. If the driver does not exist in the system, the driver will be created as a hired driver

4\. type\_name: Task type (Delivery by default). If there is no such type, it will be created

5\. template\_name: Task template name (Universal by default). If the template does not exist, it will be created

6\. time\_zone: Time zone, offset from UTC (number, time in minutes from UTC, NULL by default)

7\. time\_zone\_name: Time zone name (string, NULL by default)

8\. c\_begin\_time: Planned task start time (number — timestamp in seconds, current time by default)

9\. c\_return\_time: Planned task completion time (number, NULL by default)

10\. route\_name: Route name (string, NULL by default)

11\. cargo: Cargo name (string, NULL by default)

12\. temp\_min: Minimum temperature (number, 2°C by default)

13\. temp\_max: Maximum temperature (number, 8°C by default)

14\. description: Task description (string, NULL by default)

15\. addresses\_list (required): List of addresses or route points (strings with addresses or coordinates)

### Parameters related to the route address

The address of each route point can be supplemented with various suffixed parameters that describe route characteristics and geographic data.

1\. addresses\_list: List of addresses or route points (strings with addresses or coordinates).

2\. addresses\_list\_lat: Array of latitudes of the route points. If specified, it will be used for each address

3\. addresses\_list\_lng: Array of longitudes of the route points. An array of numbers representing the longitude of the route points

4\. addresses\_list\_date\_point: Array of timestamps (seconds) indicating the planned arrival time

5\. addresses\_list\_date\_point\_to: Array of timestamps (seconds) indicating the planned departure time. Calculated automatically if not specified

6\. addresses\_list\_time\_point: Array of loading/unloading times at the route point, in minutes

7\. addresses\_list\_redirect: Flag for redirecting the current address to the next one. Indicates that the address is redirected to the next one along the route.

8\. addresses\_list\_geofence\_id: Geofence identifiers for each route point

9\. addresses\_list\_warehouse: Names of warehouses or objects for each route point

10\. addresses\_list\_ticket: Array of unique order identifiers for each route point

11\. addresses\_list\_phones: Contact phone numbers for each route point

12\. addresses\_list\_schedule: Working hours for each route point

13\. addresses\_list\_vehicle\_volume: Cargo volume in the vehicle

14\. addresses\_list\_trailer\_volume: Cargo volume in the trailer

15\. addresses\_list\_action: Description of actions to perform at each route point

16\. addresses\_list\_agent\_id: Object identifier from the PILOT system, used for waste containers

### Example request

<table><tbody><tr><td><span></span></td><td><div>fetch("https://tasks.pilot-gps.com/backend/public/api/task/create_universal", {</div><div>&nbsp; &nbsp; "headers": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Authorization": "Basic ZGVtbzpkZW1v", // base64 encoding of "demo:demo"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "method": "POST",</div><div>&nbsp; &nbsp; "body": JSON.stringify({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "external_id": "T-5677786754",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "vehicle_plate": "PT 125 AA 66",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type_name": "Delivery",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "template_name": "Universal",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone": -180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone_name": "Europe/Moscow",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_begin_time": 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_return_time": 1723238700,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "route_name": "My route",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "cargo": "Milk",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_min": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_max": 6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "description": "Test",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "215, улица Народного Ополчения, Ростов-на-Дону",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "47.227196,39.705228",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Client 2"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lat": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.234256,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.227196,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.216077</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lng": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706467,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.705228,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706928</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_date_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723234800,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723237800</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_time_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_rad_geo": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; })</div><div>});</div></td></tr></tbody></table>

### Example response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "httpCode": 200,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 12563</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "et": 0.5612</div><div>}</div></td></tr></tbody></table>
