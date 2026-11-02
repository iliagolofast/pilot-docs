---
title: "Updating the list of user contracts"
---

This API lets you grant a user access to specific contracts.

For example, if a partner has several contracts in the system, the administrator can choose which of them a particular user will have access to.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

POST

### Request parameters

-   cmd=update\_user\_accounts\_map — command for changing the list of available contracts
    
-   accounts — comma-separated list of contract identifiers
    
    <table><tbody><tr><td><span></span></td><td><div>The contracts (accounts) must belong to the same partner as the user.</div></td></tr></tbody></table>
    
-   user\_id — identifier of the user to whom access is granted
    
-   node — number of the node on which the command runs
    
    <table><tbody><tr><td><span></span></td><td><div>If the user's partner in the system is 0, contracts cannot be assigned (<a href="../../panel-administratora/administrator/account-mapping.html"><span>mapping</span></a> does not work).</div></td></tr></tbody></table>
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_accounts_map",</div><div>&nbsp; &nbsp; "accounts": "1005",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message
