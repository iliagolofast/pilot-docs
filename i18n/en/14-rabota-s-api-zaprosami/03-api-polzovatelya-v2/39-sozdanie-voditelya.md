---
title: "Creating a driver"
---

This API lets you add a new driver to the system or update an existing driver. You can specify the full name, iButton code, contact information, driver license number and the list of objects the driver will have access to.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL:  https://<server\_address>/api/api.php?

### Request parameters

-   cmd = drivers\_add — command for adding or updating a driver
    
-   name — driver name (full name)
    
-   code — driver iButton code (required)
    
-   description — driver description (optional)
    
-   phone — driver phone number (optional)
    
-   license — driver license number (optional)
    
-   email — e-mail address
    
-   access — list of identifiers of the objects (agent\_id) the driver is allowed to access, separated by commas
    
-   node — number of the node on which to run the command
    

<table><tbody><tr><td><span></span></td><td><div>If a driver with these parameters already exists in the system, the driver's data will be updated. Otherwise, a new driver will be created</div></td></tr></tbody></table>

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_add&amp;name=NewDriverName&amp;code=123456&amp;description=DESCR&amp;phone=122212343&amp;license=rrr3335552&amp;email=new@email.com&amp;access=1122,3344&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; "id": 16990,</div><div>&nbsp;&nbsp; &nbsp; "name": "NewDriverName",</div><div>&nbsp;&nbsp; &nbsp; "code": "123456",</div><div>&nbsp;&nbsp; &nbsp; "description": "DESCR",</div><div>&nbsp;&nbsp; &nbsp; "phone": "122212343",</div><div>&nbsp;&nbsp; &nbsp; "license": "rrr3335552",</div><div>&nbsp;&nbsp; &nbsp; "email": "new@email.com",</div><div>&nbsp;&nbsp; &nbsp; "access": [1122, 3344]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   id— unique driver identifier
    
-   name— driver's full name
    
-   code— driver iButton code
    
-   description— driver description
    
-   phone— phone number
    
-   license— driver license number
    
-   email— e-mail address
    
-   access— list of identifiers of the objects the driver is allowed to access
