---
title: "Deleting a Folder"
---

This API deletes the specified folder and moves all vehicles from it to the root folder.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=deletefolder — command to delete a folder
    
-   folder\_id— identifier of the folder to be deleted
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=deletefolder&amp;folder_id=545&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Папка успешно удалена"</div><div>}</div></td></tr></tbody></table>
