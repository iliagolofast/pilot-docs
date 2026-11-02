---
title: "List of users of your account"
---

This API is used to get the list of all users registered in your account.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=get\_account\_user\_list — API command for getting the list of account users
    
-   node — number of the node on which the command runs
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_user_list&amp;node=1</div></td></tr></tbody></table>

### Example POST request

Request body (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_user_list"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 = operation succeeded)
    
-   data — array of account users:
    
-   id — user identifier
    
-   roleid — user role (0 — Admin, 1 — User, 2 — Logistic, etc.)
    
-   info — additional information
    
-   msisdn — phone number
    
-   email— user e-mail
    
-   name — user name
    
-   account\_id — identifier of the account the user belongs to
    
-   lang — user interface language
    
-   parent\_id — identifier of the parent user (if any)
