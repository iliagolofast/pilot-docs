---
title: "Route and arrival time calculation"
---

This API builds a route between two points and returns an arrival time forecast depending on the selected transport type.

## How to get the data

### Method

GET

### Request URL

To make the request, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd = route — command for building a route
    
-   mode — transport type, one of:
    
-   bicycle — bicycle
    
-   bus — bus
    
-   car — car
    
-   pedestrian — pedestrian
    
-   scooter — scooter
    
-   taxi — taxi
    
-   truck — truck
    
-   origin — coordinates of the departure point (lat,long)
    
-   destination — coordinates of the arrival point (lat,long)
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=route&amp;mode=bus&amp;origin=47.211908,39.613767&amp;destination=47.201699,39.668183&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "routes": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": "79de74af-5040-441a-ab7a-62d3d9f7a4b4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sections": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "2cc5fff7-fd4f-43ac-bcda-00d662207c63",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "vehicle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "departure": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2023-02-22T09:40:07+03:00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "place",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.2119,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.61372</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "originalLocation": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.211908,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.613767</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrival": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2023-02-22T09:52:32+03:00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "place",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.2017113,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.668221</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "originalLocation": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.201699,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.668183</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "summary": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration": 745,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 5452,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "baseDuration": 530</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "transport": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mode": "bus"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = success)
    
-   routes — list of built routes
    
-   sections — route segments with data:
    
-   departure / arrival — time and coordinates of the start and end of the route
    
-   summary — information about the duration and length of the route
    
-   transport.mode — selected transport type
