---
title: "Deleting a user"
---

This API deletes an existing user in the PILOT system by the user's identifier.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

DELETE

### Request parameters

-   cmd=remove\_user — command for deleting a user
    
-   user\_id — identifier of the user to delete
    
-   node — number of the node on which to run the command (optional)
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_user&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success remove"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg—  server message about the result of the action
