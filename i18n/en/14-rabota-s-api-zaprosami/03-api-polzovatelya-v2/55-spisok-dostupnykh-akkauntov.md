---
title: "List of available accounts"
---

This API is used to get the list of accounts the current user has access to.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=get\_account\_map — API command for getting the list of available accounts
    
-   node —  number of the node on which the command runs
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_map&amp;node=1</div></td></tr></tbody></table>

### Example POST request

Request body (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_map"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"account_id": 1005},</div><div>&nbsp; &nbsp; {"account_id": 1000}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — execution code (0 means the operation succeeded)
    
-   data — list of accounts available to the user
    
-   account\_id — account (contract) identifier
