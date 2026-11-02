---
title: "Creating an Account"
---

This API is used to create a new account (contract), including account information and user data (including the administrator's login and password). After the request is executed, an account with a unique ID is created, and the first user (administrator) is added with the specified login and password.

## How to get the data

To get the data, use the address: https://<server\_address>/ax/api.php?

### Method

POST

### Request parameters

Required parameters:

-   cmd=accountadd — command to add a new account
    
-   bill\_price — price list ID (must be obtained from the pricelist command).
    
-   inn —  organization's tax ID (INN)
    
-   node — the number of the node on which the command must be executed
    

Optional parameters:

-   acc\_deposit — deposit amount (0 by default)
    
-   acc\_type — billing type:
    
    — 1 by default — postpaid
    
    — 2— prepaid
    
    — 3— postpaid lite (with a shutdown threshold)
    
-   org\_type — organization type
    
    — 1 by default — legal entity
    
    — 2— individual
    
    — 3— sole proprietor
    
-   bill\_phone — organization's phone number
    
-   comment — comment on the account
    
-   code — 1C code
    
-   kpp —KPP (tax registration reason code)
    
-   block\_limit — shutdown threshold for postpaid lite billing
    
-   modules — comma-separated IDs of connected modules (obtained from the modlist command)
    
-   bill\_email — email for the account
    
-   org\_name — organization name
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=accountadd&amp;bill_price=143&amp;bill_email=demo1@skyelectronics.ru&amp;org_name=PUP&amp;comment=lalala&amp;inn=123456789012&amp;acc_type=1&amp;org_type=1&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": "4018",</div><div>&nbsp; &nbsp; "login": "demo1@skyelectronics.ru",</div><div>&nbsp; &nbsp; "password": "blPs0S"</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — response status
    
    — 0— the operation was successful
    
-   data — data about the new account
    
-   id — unique account identifier
    
-   login — login of the administrator created within this account
    
-   password — administrator's password
    
-   msg — message with the result of the operation
