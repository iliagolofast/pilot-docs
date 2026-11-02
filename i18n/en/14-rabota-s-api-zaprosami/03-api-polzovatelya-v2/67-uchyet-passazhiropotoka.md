---
title: "Passenger flow counting"
---

This API is used to get passenger flow data for vehicles equipped with an automatic conductor system.

With it, you can:

— see how many passengers boarded and exited at each stop

 — get stop coordinates, event time and video identifier (if the system supports video recording)

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd= pass\_counter — command for calling the API
    
-   ts — start of the selection in Unix timestamp format
    
-   te — end of the selection in Unix timestamp format
    
-   node — number of the node on which to run the command
    

Optional:

-   imei — IMEI of the vehicle equipped with the automatic conductor. If omitted, data is returned for all vehicles with the equipment
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=pass_counter&amp;ts=1554670800&amp;te=1554757200&amp;imei=963852741159753&amp;node=1</div></td></tr></tbody></table>

### Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "36571": {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 36571,</div><div>&nbsp; &nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9346",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.8981",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554696995,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 13</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9238",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.9098",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554697232,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 14</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "autoconductor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API response contains:

-   code — execution code (0 = success)
    
-   msg — status message (for example, OK)
    
-   data — main object with passenger flow data.
    
-   agent\_id — vehicle ID in the system
    
-   vehiclenumber — internal vehicle number or equipment name (for example, autoconductor)
    
-   stops — array of stops with passenger flow data
    
-   busline\_id — route ID
    
-   door\_id — number of the door through which passenger movement was recorded
    
-   lat — stop latitude
    
-   lon — stop longitude
    
-   p\_in — number of passengers who boarded
    
-   p\_out — number of passengers who exited
    
-   ts — event time (Unix timestamp)
    
-   video\_id — ID of the video recording related to the event (if any)
