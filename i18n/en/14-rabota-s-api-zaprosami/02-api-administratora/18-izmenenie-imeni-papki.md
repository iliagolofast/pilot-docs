---
title: "Renaming a Folder"
---

This API lets you change the name of an existing folder. To do this, send a request with parameters that identify the folder to be renamed and the new name for it.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php

### Method

 POST

### Request parameters

-   cmd=editfoldername — command to change the folder name
    
-   folder\_id — identifier of the folder whose name needs to be changed
    
-   new\_folder\_name  — new name for the folder
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=editfoldername&amp;folder_id=454545&amp;new_folder_name=testname&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Имя папки успешно обновлено"</div><div>}</div></td></tr></tbody></table>
