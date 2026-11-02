---
title: "Getting the List of Folders"
---

This API is used to get the list of folders. The response returns a list with unique folder IDs, their names and parent folders.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

Required:

-   cmd=getfolders — command to get the list of folders
    
-   node — the number of the node on which the command must be executed
    

Optional:

-   account\_id — ID of the account for which you need to get the list of folders
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=getfolders&amp;account_id=3925&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "9793": {"name": "АС-Капитал", "parent": "Колонна №1"},</div><div>&nbsp; "11462": {"name": "Ленэнерго", "parent": "Колонна №1"},</div><div>&nbsp; "12551": {"name": "Вектор", "parent": "test123"},</div><div>&nbsp; "16453": {"name": "test_alex", "parent": "1april"},</div><div>&nbsp; "18492": {"name": "31Novfolder", "parent": "Колонна №1"}</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   key (for example, "9793") — unique folder ID
    
-   name — folder name
    
-   parent — the parent folder that the current folder belongs to
