---
title: "Getting Raw Object Points"
---

The API returns raw GPS track data of a vehicle for the specified period.

This request can only be made for a period of no more than 10 days.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

Required:

-   cmd=rawpoints — command to get raw points
    
-   ts — start date of the selection in UNIX timestamp format
    
-   te — end date of the selection in UNIX timestamp format
    
-   agentid — vehicle identifier
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?<span>cmd=rawpoints&amp;ts=1760216400&amp;te=1760302800&amp;agentid=157773</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 1,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215545",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706906",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 15,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 10,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14547;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022428</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 339,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215938",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706751",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 12,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14538;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022437</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "deb": [</div><div>&nbsp; &nbsp; 2914,</div><div>&nbsp; &nbsp; 1458022428,</div><div>&nbsp; &nbsp; 1458043980</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API request returns:

-   code — request execution code (0 — success)
    
-   data — array of points:
    
-   agentid — vehicle identifier
    
-   height/ altitude — altitude above sea level (m)
    
-   direction — direction of movement (degrees)
    
-   latitude/ longitude — coordinates of the point
    
-   satsinview — number of visible satellites
    
-   servertime — server time in UNIX timestamp
    
-   speed — speed in km/h
    
-   triggerdata — device trigger data
    
-   unixtimestamp — event time in UNIX timestamp
    
-   deb — array of debug information (agentid, start and end of the period)
    
-   message — message about the result of the request
