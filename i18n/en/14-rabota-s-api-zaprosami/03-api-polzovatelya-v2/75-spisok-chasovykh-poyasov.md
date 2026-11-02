---
title: "List of time zones"
---

This API returns the list of available time zones that can be used when configuring a user or an object.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=get\_time\_zones — command for getting the list of time zones
    
-   node — number of the node on which the command runs
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_time_zones&amp;node=1</div></td></tr></tbody></table>

### Example POST request

Request body (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_time_zones"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "text": "Africa/Abidjan" },</div><div>&nbsp; &nbsp; { "text": "Africa/Accra" },</div><div>&nbsp; &nbsp; { "text": "Africa/Addis Ababa" },</div><div>&nbsp; &nbsp; { "text": "Africa/Algeria" },</div><div>&nbsp; &nbsp; { "text": "Africa/Asmara" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bamako" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bangui" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = operation succeeded)
    
-   data — list of available time zones
    
-   text — time zone name in Region/City format
