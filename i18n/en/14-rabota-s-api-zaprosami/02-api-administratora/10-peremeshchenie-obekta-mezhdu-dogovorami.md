---
title: "Moving an Object Between Contracts"
---

This API is used to move a vehicle between accounts.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

To get the data you need, add parameters to the request address. Parameters are specified after the question mark “?” and separated by the “&” sign.

-   cmd = veh\_move\_account — command to move objects to another account
    
-   vehicle\_id — identifier of the vehicle to be moved to the account
    
-   account\_id — number of the new account
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd</span>=veh_move_account&amp;vehicle_id=23&amp;account_id=1005&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{"code": 1, "msg": "Success move vehicle 23 to account 1005"}</div></td></tr></tbody></table>

The API request returns:

-   code — result code:
    

— 1 — the operation was completed successfully

— 0 — an error occurred during the operation

-   msg —message with a text description of the result of the operation
