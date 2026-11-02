---
title: "List of Reports"
---

This API gets the list of all reports available in the account, with their identifiers, names and the groups they belong to.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request method

GET or POST

### Request parameters

-   cmd=reports\_list — command to get the list of reports
    
-   node — the number of the node on which the command is executed
    

### Example GET request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=reports_list&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "id": 266, "name": "Административные действия", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 258, "name": "Заблокированные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 263, "name": "Созданы пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 261, "name": "Отключенная учетная запись пользователя", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 265, "name": "Отключенные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 267, "name": "Неудачные попытки входа", "group": "Администратор" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — result code (0 — successful operation)
    
-   data — array of reports, where each report contains:
    
-   id — unique report identifier
    
-   name — report name
    
-   group — the group the report belongs to
