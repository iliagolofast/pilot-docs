---
title: "Notification events"
---

This API is used to get events of [notifications](../../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html) for the selected period, for example, speeding, movement outside a zone or other preconfigured alerts.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = notifications — command for getting notification events
    
-   ts — start of the selection (Unix timestamp)
    
-   te — end of the selection (Unix timestamp)
    
-   notification — name of the notification to get events for
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=notifications&amp;ts=1606942800&amp;te=1607115600&amp;notification=test&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=52km/h Duration: 42 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988609</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=29km/h Duration: 12 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988438</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=17km/h Duration: 13 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988106</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "id": 3701</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   vehiclenumber — license plate or internal vehicle number
    
-   agentid — object identifier in the system
    
-   message — text of the notification event
    
-   ts — event time in Unix timestamp format
    
-   id — request/session identifier
