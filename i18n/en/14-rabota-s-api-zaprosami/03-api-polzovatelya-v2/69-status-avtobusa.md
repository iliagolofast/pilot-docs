---
title: "Bus status"
---

This API returns the current state of a bus: the route, the current and next stops, and information about the route itself (number, fare, headway, etc.).

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=currentBusState — command for getting the bus status
    
-   vehnum — bus number
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=currentBusState&amp;vehnum=А%20086%20КХ%20116%20RUS&amp;node=1</div></td></tr></tbody></table>

**Response**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "lines": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1086,</div><div>&nbsp; &nbsp; &nbsp; "name": "1А",</div><div>&nbsp; &nbsp; &nbsp; "number": "1А",</div><div>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; &nbsp; "description": "1А",</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; &nbsp; "interval": 10,</div><div>&nbsp; &nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_id": 0,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_order": 0,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_id": 5217,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_order": 48</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API response contains:

-   id — route ID
    
-   name — route name
    
-   number — route number
    
-   bidirectional — bidirectional flag (1 — yes, 0 — no)
    
-   active — route active flag (1 — active)
    
-   price — fare
    
-   interval — headway in minutes
    
-   currentstop\_id — ID of the stop where the bus is currently located
    
-   currentstop\_order — sequence number of the current stop
    
-   nextstop\_id — ID of the next stop
    
-   nextstop\_order — sequence number of the next stop
