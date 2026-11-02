---
title: "Eco-driving data"
---

This API lets you get information about the eco-friendliness of vehicle driving for a given period. 

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

To get the data you need, add parameters to the request URL. Parameters are specified after the question mark “?” and separated by the ampersand “&”.

-   cmd = mileco\_drive — command for getting trip data 
    
-   start — date and time of the start of the period you want to get data for
    
-   stop — date and time of the end of the period
    

Time is specified in Unix timestamp format — the number of seconds that have passed since January 1, 1970.

-   vehid — identifier of the vehicle to get data for. To get data for one vehicle, enter its ID; for several vehicles, list their IDs separated by commas.
    
    <table><tbody><tr><td><span></span></td><td><div>If you do not specify the&nbsp;vehid&nbsp;parameter, the system will automatically return information for all vehicles assigned to your account.</div></td></tr></tbody></table>
    
-   imei — unique number of the vehicle's GPS tracker. Use this parameter to get data for a specific tracker.
    
    <table><tbody><tr><td><span></span></td><td><div>When you specify&nbsp;imei, the&nbsp;vehid&nbsp;parameter is not needed.</div></td></tr></tbody></table>
    

Example API request with imei:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span><span>&lt;</span><span>address</span><span>&gt;</span><span>/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;imei=86645655031889725</span></div></td></tr></tbody></table>

-   time\_diff\_type — grouping of data by time. By default, data is collected for each day.
    
-   time\_diff\_type=1 — data will be collected for every 7 days
    
-   time\_diff\_type=2 — data will be collected for every month
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>&nbsp;<span>https://&lt;url&gt;/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;</span>vehid=32,53&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "32": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 842.75354055,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 511 ГР 123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "speed": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msg": "Speed",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cnt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "val": 1290,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fee": 12</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div><span>&nbsp; &nbsp; "53": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 53,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 8.24949075,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 619АК 67",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Bus",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": []</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }&nbsp; &nbsp;</span></div></td></tr></tbody></table>

The API response contains data for each vehicle:

-   veh\_id — vehicle identifier
    
-   imei — unique tracker number
    
-   distance — distance traveled during the specified period
    
-   agent\_id —  contract identifier
    
-   account\_id — account number in the system
    
-   account\_name —  account name
    
-   veh\_name — vehicle name
    
-   veh\_type — vehicle type
    
-   eco\_data — driving data
