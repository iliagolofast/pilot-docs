---
title: "Driver activity report"
---

This API returns information about the activity of vehicle drivers during the selected period. The response lists the various work modes (for example, driving, work, rest).

## How to get the data

### Method

GET

### Request URL

To make the request, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd = gettachodata — command for getting tachograph data
    
-   agent\_id — vehicle identifier / several vehicles, separated by commas
    
-   imei — device identifier (alternative to agent\_id)
    
-   ts — start of the selection (Unix timestamp)
    
-   te — end of the selection (Unix timestamp)
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettachodata&amp;ts=1624568400&amp;te=1624586400&amp;agent_id=120407,120646&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "С 220 СК 750": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Work": 4997,</div><div>&nbsp; &nbsp; &nbsp; "Drive": 248,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 1722,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "А 152 АК 790": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Drive": 5436,</div><div>&nbsp; &nbsp; &nbsp; "Work": 1706,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 4995,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   vehicle number
    
-   First driver / Second driver — data for each driver
    
-   Drive — driving time
    
-   Work — working time
    
-   Rest — rest time
    
-   Driver available — time when the driver was available for work
