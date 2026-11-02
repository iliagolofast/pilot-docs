---
title: "Deleting a waybill"
---

This API deletes an existing waybill for the specified period.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=remove\_waybill — command for deleting a waybill
    
-   ts — start time (Unix timestamp)
    
-   te — end time (Unix timestamp)
    
-   agent\_id — agent identifier
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": 1</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code— result code (0 = success)
    
-   data— deletion result (1 = deleted successfully)
