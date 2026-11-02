---
title: "List of another user's folders"
---

This API returns the folders the specified user has access to.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=get\_folders\_user — command for getting the list of folders
    
-   user\_id — user identifier (required when requesting another user's folders)
    
-   node — number of the node on which to run the command
    

For a POST request, the parameters can be passed in the body in JSON format

### Example requests

GET request:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?</span>cmd=get_folders_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

POST request:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_folders_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message
    
-   data — array of user folders:
    
-   id — folder identifier
    
-   name — folder name
