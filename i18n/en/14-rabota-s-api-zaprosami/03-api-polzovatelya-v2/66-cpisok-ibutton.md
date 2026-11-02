---
title: "List of iButtons"
---

This API returns the list of iButtons assigned to a vehicle during a given period.

iButton is a small electronic device (tag) used to identify drivers or objects. It is typically used for access control, working time tracking, or recording the start and end of work with a vehicle.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd=take\_ibutton\_list — API command, in this case
    
-   ts — start of the period (Unix timestamp)
    
-   te — end of the period (Unix timestamp)
    
-   agentId — vehicle identifier
    
-   node — number of the node on which to run the command
    

Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=take_ibutton_list&amp;ts=1643662800&amp;te=1645045200&amp;AgentID=79673<span>&amp;node=1</span></div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "data": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000000",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000001",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — success)
    
-   msg — server message (for example, "OK")
    
-   data — array with iButton information:
    
-   ibutton — unique iButton identifier
    
-   ts — iButton recording time (Unix timestamp)
