---
title: "Updating the list of folders"
---

This API lets you change the set of folders a specific user has access to.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

POST

### Request parameters

-   cmd=update\_user\_folders — command for updating the list of folders
    
-   folders — comma-separated list of folder IDs to assign to the user
    
-   user\_id — identifier of the user whose folders are being changed
    

Example request

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_folders",</div><div>&nbsp; &nbsp; "folders": "1,11",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message about the result of the action
