---
title: "Creating a User"
---

This API creates a new PILOT user and assigns the main data to them: login, password, name, role, phone, email and available contracts.

### Method

GET

### Request address

To execute the request, use the address:: https://<server\_address>/backend/api.php?

### Request parameters

• cmd=create\_user  — command to create a user

• login — login of the new user

• password — password of the new user

• name — user's name

• role\_id — ID of the user's role

• phone — user's phone number

• email — user's email

• accounts — list of IDs of the contracts the user should get access to. If there are several contracts, separate them with commas

• account\_id — ID of the contract in which the user is created

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=create_user&amp;login=TestAPI13&amp;password=Qwerty123&amp;name=test Api 13&amp;role_id=1&amp;phone=789995&amp;email=testapi13@mailinator.com&amp;accounts=1106,1131&amp;account_id=1003</div></td></tr></tbody></table>

### Response

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "Success create user: 729",</span></div><div><span>&nbsp; "user_id": 729</span></div><div><span>}</span></div></td></tr></tbody></table>

The API request returns:

• code — command result code. A value of 0 means successful execution

• msg — text message with the result of the command

• user\_id — ID of the created user
