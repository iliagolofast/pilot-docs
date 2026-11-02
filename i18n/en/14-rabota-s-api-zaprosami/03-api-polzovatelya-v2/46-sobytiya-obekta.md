---
title: "Object events"
---

This API returns real-time events for vehicles, including information about the contract, company, driver, speed and location of the event start.

## How to get the data

### Method

GET

### Request URL

To make the request, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=live\_events — command for getting real-time events
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=live_events&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "1264": {</div><div>&nbsp; &nbsp; "Contract Number": "CONTRACT ID",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "LEK",</div><div>&nbsp; &nbsp; "Vehicle Owner": "SUB-CONTRACTOR",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "5174 WA",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 18262972,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881932",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.185841",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.213230"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "1123": {</div><div>&nbsp; &nbsp; "Contract Number": "",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "",</div><div>&nbsp; &nbsp; "Vehicle Owner": "",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "6076MB",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 0,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881413",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.188658",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.206314"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   Object key (1264, 1123) — unique event identifier
    
-   Contract Number — contract number
    
-   Company Name — company name
    
-   Base Location — vehicle base
    
-   Vehicle Owner — vehicle owner
    
-   ID — internal event ID
    
-   EventID, EventType — event identifier and its type
    
-   VehicleID — license plate or vehicle identifier
    
-   Asset Category — vehicle category
    
-   Road Type — road type
    
-   DriverID — driver identifier
    
-   Event Start Time — event start time (Unix timestamp)
    
-   Event Start Speed — speed at the moment the event started
    
-   Event Start Location — coordinates of the event start (lat, lon)
