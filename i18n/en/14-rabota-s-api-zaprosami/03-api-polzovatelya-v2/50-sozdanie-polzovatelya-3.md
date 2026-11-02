---
title: "Creating a user"
---

This API lets you create a new user in PILOT with the specified parameters: login, password, role and contact details.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

cmd=create\_user — command for creating a user

login — login of the new user

password — user password

name — user name

phone — user phone number

email — user e-mail

role\_id — user role: 0 — Admin, 1 — User

vehicles — list of available vehicles (IDs or count)

folders — list of available folders (IDs or count)

-   node — number of the node on which to run the command
    

<table><tbody><tr><td><span></span></td><td><div>The request must include the login and password of the administrator who creates the user.</div></td></tr></tbody></table>

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=create_user&amp;login=TestAPI3&amp;password=123456&amp;name=Test API&amp;role_id=1&amp;phone=789995&amp;email=testapi5@mailinator.com&amp;vehicles=15&amp;folders=5&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success create user: 48"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message with the ID of the created user
