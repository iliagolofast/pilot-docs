---
title: "Changing User Access to Contracts"
---

This API changes the list of contracts that a PILOT user has access to.

### Method

GET

### Request address

To execute the request, use the address: https://<server\_address>/backend/api.php?

### Request parameters

• cmd=update\_user\_accounts\_map — command to change user access to contracts

• accounts — list of IDs of the contracts the user should have access to. If there are several contracts, separate them with commas

• user\_id — ID of the user whose access is being changed

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087&amp;user_id=535</div></td></tr></tbody></table>

If you need to specify several contracts:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087,1131&amp;user_id=535</div></td></tr></tbody></table>

### Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

The API request returns:

• code — command result code. A value of 0 means successful execution

• msg — text message with the result of the command
