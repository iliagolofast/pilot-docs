---
title: "User information"
---

This API returns user data by the user's user\_id.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=get\_user — API command for getting user information
    
-   user\_id — identifier of the user whose information you want to get
    
-   node — number of the node on which the command runs
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

### Example POST request

Request body (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = operation succeeded)
    
-   msg — server message
    
-   data — object with user information:
    
-   id — user identifier
    
-   roleid — user role (0 — Admin, 1 — User)
    
-   info — additional user information
    
-   msisdn — phone number
    
-   email — user e-mail
    
-   name — user name
    
-   account\_id — identifier of the account the user belongs to
    
-   lang — user interface language
    
-   parent\_id— identifier of the parent user (if any)
