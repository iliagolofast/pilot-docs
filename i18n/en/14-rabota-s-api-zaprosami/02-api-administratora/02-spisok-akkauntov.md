---
title: "List of Accounts"
---

This API retrieves a list of accounts with basic information: contract ID, name, balance and number of vehicles.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=accountslist — command to get the list of accounts
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=accountslist&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 10,</div><div>&nbsp; "org_name": "Test relaying",</div><div>&nbsp; "org_type": 2,</div><div>&nbsp; "balance": "0.00",</div><div>&nbsp; "acc_deposit": "40000.00",</div><div>&nbsp; "comment": null,</div><div>&nbsp; "inn": null,</div><div>&nbsp; "kpp": null,</div><div>&nbsp; "bill_email": "relay@mail.com",</div><div>&nbsp; "bill_phone": "43542554",</div><div>&nbsp; "hidden": 1,</div><div>&nbsp; "veh_count": 0</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   id — unique account identifier
    
-   org\_name — name of the organization or contract
    
-   org\_type — organization type
    
-   balance — current contract balance
    
-   acc\_deposit — deposit amount on the contract
    
-   comment — additional comment on the contract
    
-   inn — organization's INN (taxpayer identification number)
    
-   kpp — organization's KPP (tax registration reason code)
    
-   bill\_email — email specified for invoicing or billing notifications
    
-   bill\_phone — phone number for billing inquiries
    
-   hidden — deleted account flag: 0 — the account is not deleted, 1 — the account is deleted
    
-   veh\_count — number of vehicles assigned to this contract
