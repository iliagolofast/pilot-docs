---
title: "Changing a user's login and password"
---

This API lets you change the login and password of an existing user in the PILOT system.

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request method

GET

### Request parameters

-   cmd=update\_user\_auth — command for editing authorization data
    
-   login — new user login
    
-   password — new user password
    
-   user\_id — identifier of the user whose data you want to change
    
-   node — number of the node on which to run the command
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=update_user_auth&amp;login=TestAPI&amp;password=qwerty&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — result code (0 — operation succeeded)
    
-   msg — server message about the result of the action
