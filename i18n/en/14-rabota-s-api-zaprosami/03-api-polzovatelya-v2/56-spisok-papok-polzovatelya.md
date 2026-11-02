---
title: "List of user folders"
---

This API returns the list of folders the user has access to within the contract.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

• cmd=get\_folders\_user — command for getting the list of folders

For a POST request, the parameters can be passed in the body in JSON format

-   node — number of the node on which to run the command
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>&nbsp;https://&lt;server_address&gt;/api/api.php?cmd=get_folders_user&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

• code — result code (0 — operation succeeded)

• msg — server message

• data — array of user folders:

• id — folder identifier

• name — folder name
