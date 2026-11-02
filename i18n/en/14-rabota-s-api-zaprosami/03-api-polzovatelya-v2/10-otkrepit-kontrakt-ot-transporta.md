---
title: "Unassigning a Contract from a Vehicle"
---

This API removes the link between an existing contract and the specified vehicle.

## How to get the data

### Method

DELETE

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

• cmd=unlink\_contract — command to unlink a contract

• PlateNum — vehicle license plate

• node — the number of the node on which the command must be executed (optional)

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=unlink_contract&amp;PlateNum=test12345&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,&nbsp; &nbsp;</div><div>&nbsp; "msg": "Deletion is successful"</div><div>}</div></td></tr></tbody></table>

The API request returns:

• code — result code (0 — successful operation)

• msg — server message about the result of the action
