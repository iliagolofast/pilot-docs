---
title: "Working with Atom Linux Commands"
---

This article describes the main API commands that let you interact with Linux systems through the Admin panel. With these commands you can send, receive, delete and view the history of commands for [Atoms](../../lichnyj-kabinet-polzovatelya/moduli-1/atom.html).

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php

### List of commands

-   cmd=atom\_get\_all — get the list of sent commands
    
-   cmd=atom\_get\_commands — get the list of command templates
    
-   cmd=atom\_create\_command —  send a Linux command
    
-   atom\_delete\_command — delete a Linux command
    

## Getting the list of sent Linux commands (command history)

This command lets you get the list of all commands sent to an Atom. The history includes the Atom identifier, the command sent, and the execution status.

Method: GET

### Request parameters

-   cmd=atom\_get\_all — command to get the history
    
-   ident — unique Atom identifier (for example, b0:44:6t:0d:a9:04)
    
-   node — the number of the node on which the command must be executed
    
    ### Example request
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_all&amp;ident=b0:44:6t:0d:a9:04&amp;node=1</div></td></tr></tbody></table>
    
    Response
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 27899,</div><div>&nbsp; &nbsp; "agent_id": null,</div><div>&nbsp; &nbsp; "ident": "8v:f5:8c:01:13:70",</div><div>&nbsp; &nbsp; "script": "ls /root/",</div><div>&nbsp; &nbsp; "processed": null,</div><div>&nbsp; &nbsp; "ts": 1712138610,</div><div>&nbsp; &nbsp; "result": null</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Getting the list of Linux command templates

This command lets you get the list of Linux command templates that can be used to send to an Atom. Templates contain a description and the command that will be executed on the device.

Method: GET

### Request parameters

-   cmd=atom\_get\_commands — command to get command templates.
    
-   ident — unique Atom identifier (for example, 80:c5:80:01:68:08).
    
-   node — the number of the node on which the command must be executed
    
    ### Example request
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_commands&amp;ident=80:c5:80:01:68:08&amp;node=1</div></td></tr></tbody></table>
    
    Response
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 36,</div><div>&nbsp; &nbsp; "command_name": "Список Видео",</div><div>&nbsp; &nbsp; "description": null,</div><div>&nbsp; &nbsp; "command": "ls -lsh /video/*.avi"</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Sending a Linux command

With this command you can send a Linux command to an Atom. The command is added to the queue and executed on the device.

Method: POST

### Request parameters

-   cmd=atom\_create\_command — command to create a new command.
    
-   ident — unique Atom identifier.
    
-   script — command script (optional).
    
-   node — the number of the node on which the command must be executed
    
    ### Example request
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_create_command&amp;ident=b1:42:67:00:00:fd&amp;node=1</div></td></tr></tbody></table>
    
    Response
    

<table><tbody><tr><td><span></span></td><td><div>27917 (<span>ID of the command added to the queue)</span></div></td></tr></tbody></table>

## Deleting a Linux command

If a command has not been executed yet, you can remove it from the queue using this method. Deletion is only possible before the command is processed.

Method: GET

### Request parameters

-   cmd=atom\_delete\_command — command to delete
    
-   ident — unique Atom identifier
    
-   command\_id — identifier of the command to delete
    
-   node — the number of the node on which the command must be executed
    
    ### Example request
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_delete_command&amp;ident=b0:44:6f:0d:av:88&amp;command_id=27921</div></td></tr></tbody></table>
    
    Response
    
    <table><tbody><tr><td><span></span></td><td><div>"Success delete"</div></td></tr></tbody></table>
    

### API error codes

-   400 Bad request — invalid data format or a required parameter is missing.
    
    Possible messages:
    
-   {"error": "Missing ident param"} — the Atom identifier is missing.
    
-   {"error": "Command already processed"} — the command has already been executed.
    
-   {"error": "Unknown macro: {Unknown macro}"} — unknown macro command.
    
-   500 Internal server error — internal server error
    

### Working with commands in the interface

In the PILOT interface, interaction with Atoms takes place through the “Auto Conductor → Buses” tab of the Admin panel, where the “Interact” command is available.

![](images/drex_rabota_s_linux_komandami_atomov_custom.png)

Through this function:

-   Commands (Linux commands) are sent to the Atom
    
-   You can view the list of available commands (templates)
    
-   The history of all sent commands is displayed
    
-   The result of each command's execution is available
    

![](images/drex_rabota_s_linux_komandami_atomov_custom_2.png)
