---
title: "Getting the Latest Vehicle Event"
---

The API is designed to get the latest event of a vehicle over the previous 24 hours.

The method supports account mapping: a user can get an event of a vehicle from a linked account if they have access to that vehicle.

## How to get the data

### Method

GET

### Request address

To get the data, use the address:

https://<server\_address>/api/v3/events/live

Replace <server\_address> with the address of the PILOT server.

### Request parameters

Add the following parameter to the request address:

-   agent\_id — vehicle identifier in PILOT.
    

The vehicle must be available to the authorized user.

## Example request

<table><tbody><tr><td><span></span></td><td><div>GET https://&lt;server_address&gt;/api/v3/events/live?agent_id=2000</div><div>Authorization: Bearer &lt;token&gt;</div><div>X-Node: 0</div></td></tr></tbody></table>

### Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "events": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "Cotract Number": 1102,</div><div>&nbsp; &nbsp; &nbsp; "Company Name": "Boooch Test",</div><div>&nbsp; &nbsp; &nbsp; "AgentId": 2000,</div><div>&nbsp; &nbsp; &nbsp; "VehicleID": "10-14262 Sunny",</div><div>&nbsp; &nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; &nbsp; "EventID": 4531206,</div><div>&nbsp; &nbsp; &nbsp; "Event Type": 103,</div><div>&nbsp; &nbsp; &nbsp; "Event Message": "SpeedN|110|&gt;|112|10|ss|17",</div><div>&nbsp; &nbsp; &nbsp; "Event Start Time": 1785746496,</div><div>&nbsp; &nbsp; &nbsp; "Event Start Speed": null,</div><div>&nbsp; &nbsp; &nbsp; "Event Start location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.164997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.235535"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "Event End Time": null,</div><div>&nbsp; &nbsp; &nbsp; "Event duration": null</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "process_time": 0.0222</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — request execution code. A value of 0 means successful execution
    
-   msg — result of the request
    
-   events — array of events found
    
-   process\_time — request processing time in seconds
    

The events array contains:

-   Cotract Number — identifier of the account that owns the vehicle
    
-   Company Name — account name
    
-   AgentId — vehicle identifier in PILOT
    
-   VehicleID — vehicle name
    
-   Road Type — road surface type. In the current version, Blacktop is returned
    
-   EventID — event identifier
    
-   Event Type — event type
    
-   Event Message — event text
    
-   Event Start Time — event start time in Unix timestamp format
    
-   Event Start Speed — speed at the moment the event started. If no data is available, null is returned
    
-   Event Start location — coordinates of the vehicle at the moment the event started:
    
-   lat — latitude
    
-   lon — longitude
    
-   Event End Time — event end time in Unix timestamp format. If no data is available, null is returned
    
-   Event duration — event duration in seconds. Calculated as the difference between the end time and the start time of the event. If one of the values is missing, null is returned
