---
title: "Creating a Folder"
---

This API is used to create a new folder in the system. You can specify the parent folder, the name of the new folder, and access rights for users.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

Required:

-   cmd=addfolder — command to create a folder
    
-   account\_id — contract ID
    
-   parent\_id — parent folder ID
    
-   folder\_name — name of the folder to be created
    
-   node — the number of the node on which the command must be executed
    

Optional:

-   users— comma-separated list of IDs of users who should be given rights to this folder
    
-   The value users=admins — gives rights to all users of the contract with the administrator role
    
    If the parameter is not set or is empty, the rights are copied from the parent folder
    

### Example requests

Folder rights for all administrators:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=admins&amp;node=1</div></td></tr></tbody></table>

Folder rights for specific users:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=123,212,432&amp;node=1</div></td></tr></tbody></table>

The folder is created with the rights of the parent folder (default):

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Создана новая папка my_folder с идентификатором 27330"</div><div>}</div></td></tr></tbody></table>
