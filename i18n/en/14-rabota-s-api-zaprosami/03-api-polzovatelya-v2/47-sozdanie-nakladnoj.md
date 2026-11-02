---
title: "Creating a waybill"
---

This API creates a new waybill for a given period.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=add\_waybill — command for adding a waybill
    
-   ts — start time (Unix timestamp)
    
-   te — end time (Unix timestamp)
    
-   agent\_id — agent identifier
    
-   name — waybill name
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;name=test+bill1&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = success)
    
-   data — object with the data of the created waybill
    
-   ts — waybill start time
    
-   te — waybill end time
    
-   agent\_id — agent identifier
    
-   account\_id — account identifier
    
-   waybill.name — waybill name
