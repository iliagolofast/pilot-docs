---
title: "List of drivers"
---

This API returns information about the drivers registered in the account. You can get data on each driver, including full name, contact information, description, access rights and identifiers.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = drivers\_list— command for getting the list of drivers
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_list&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 317,</div><div>&nbsp; &nbsp; &nbsp; "name": "Ivan Ivanov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #3",</div><div>&nbsp; &nbsp; &nbsp; "phone": "798345546",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": "",</div><div>&nbsp; &nbsp; &nbsp; "access": []</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1122,</div><div>&nbsp; &nbsp; &nbsp; "name": "Andrey Petrov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #1",</div><div>&nbsp; &nbsp; &nbsp; "phone": "+525531696255",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": null,</div><div>&nbsp; &nbsp; &nbsp; "access": [1122]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   id — driver identifier
    
-   name — driver's full name
    
-   code — driver code (if any)
    
-   description — driver description
    
-   phone — phone number
    
-   license — driver license data
    
-   email — e-mail address
    
-   access — list of IDs of resources or objects the driver has access to
