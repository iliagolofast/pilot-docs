---
title: "List of Users"
---

This API is used to get the list of users of a specific account with basic information about each user.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=users — command to get the list of users
    
-   accountid — ID of the account for which users are requested
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=users&amp;accountid=56832</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"data": [</div><div>&nbsp;{</div><div>&nbsp;"id": 88977,</div><div>&nbsp;"name": "valera_test",</div><div>&nbsp;"login": "valera17totsenko@gmail.com",</div><div>&nbsp;"passwd": "123456",</div><div>&nbsp;"info": null,</div><div>&nbsp;"email": "valera17totsenko@gmail.com",</div><div>&nbsp;"lang": "en",</div><div>&nbsp;"roleid": 0</div><div>&nbsp;}</div><div>&nbsp;],</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   id — user ID
    
-   name — display name
    
-   login — login
    
-   passwd — password
    
-   info — additional user information
    
-   email — email address
    
-   lang — user interface language
    
-   roleid — role ID
