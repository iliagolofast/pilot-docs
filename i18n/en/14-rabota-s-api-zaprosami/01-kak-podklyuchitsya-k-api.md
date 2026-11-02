---
title: "How to Connect to the API"
---

This article explains how to authorize and send a request to the API.  After that you will be able to send commands to the server and receive data from it.

### API address

All requests are sent to the following address:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php</div></td></tr></tbody></table>

<server\_address> is the address of the server or host where PILOT runs.

For example:

-   For users: https://pilot-gps.com/api/api.php
    
-   For administrators: https://admin.pilot-gps.com/ax/api.php
    

The API can be located in different “folders” of the project, and this is reflected in the request address, for example:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php</div><div>https://&lt;server_address&gt;/ax/api.php</div></td></tr></tbody></table>

Folders (api, backend, ax and others) are simply the project structure. They show which set of commands you are accessing. Always use the full folder path given in the specific API command, otherwise the request will not work.

### Authorization type

Basic Auth is used to connect to the API.

For the regular (user) API, sign in with the login and password of your account.

To work with the administrator API, use the administrator's login and password.

### What a request looks like

The general form of a request is:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;</div></td></tr></tbody></table>

-   cmd — the command you want to execute
    
-   node — the number of the node on which the command must be executed
    

### Example response

In reply to your request, the server returns a response in JSON format:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; ...requested data...</div><div>}</div></td></tr></tbody></table>

-   code = 0 — everything completed successfully
    
-   code = 1 — an error occurred
    
-   msg — a message from the server (for example, "OK" or an error description)
    

If you prefer to work with XML, add the parameter out=xml to the request, and the result will come in XML format.

Example request:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;&amp;out=xml</div></td></tr></tbody></table>

The response in this case will be:

<table><tbody><tr><td><span></span></td><td><div>&lt;response&gt;</div><div>&nbsp; &lt;code&gt;0&lt;/code&gt;</div><div>&nbsp; &lt;msg&gt;OK&lt;/msg&gt;</div><div>&nbsp; ...requested data...</div><div>&lt;/response&gt;</div></td></tr></tbody></table>

If you are just getting started with the API, we recommend first reading the article [“Working with API requests”](index.html) to understand what commands, parameters and data formats are.
