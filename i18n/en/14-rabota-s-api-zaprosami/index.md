---
title: "Working with API requests"
---

An API (Application Programming Interface) is a set of rules and tools that lets programs interact with each other. In PILOT, the API is used to exchange data between systems, services, applications and the platform.

An API request consists of:

-   URL — the API server address and the command
    
-   Request parameters — the data sent to the server
    
-   Request method — the way of interacting with the server
    
    ## How the API works in PILOT
    

PILOT uses a distributed infrastructure that includes several servers, for example, BLADE, KSA, AFRICA, USA. Each server can have several nodes, each with its own number.

When you send an API request to the system, specify the particular server (for example, BLADE) and the particular node within that server — node. This way, the request is processed directly on the selected server and node, without extra forwarding and with minimal response time.

Example request

<table><tbody><tr><td><span></span></td><td><div><span>https://blade.pilot-gps.com/api/api.php?cmd=list&amp;node=14&nbsp;</span></div></td></tr></tbody></table>

blade.pilot-gps.com is the server name

node=14 indicates the node (server) where the request must be processed.

To learn more about how to authorize and send requests to the PILOT server, read the next [article](kak-podklyuchitsya-k-api.html).

## Request methods in the API

### GET

A method for getting data. It is used, for example, to request the list of objects or account information.

In a GET request, the command and parameters are passed directly in the URL. Parameters are added after the ? sign and separated by the & character.

Example

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

cmd=bindControl — command

uid=123, imei=456, lineuid=789 — parameters

### POST

A method for sending data. It is used, for example, to create a new object or generate a report.

In a POST request, the command and parameters can be passed in the request body, or the command is specified in the URL and the parameters are passed in the body.

Example 1

URL: https://<server\_address>/api/api.php?cmd=bindControl

Request body

<table><tbody><tr><td><span></span></td><td><div><span>&nbsp;{</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

Example 2

URL: https://<server\_address>/api/api.php

Request body

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; &nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

PUT

A method for updating data. This type of request is used, for example, to change the parameters of an object or account.

PUT is most often used to update a specific resource, so the identifier is usually specified in the URL and the data to update in the body.

Example

URL: https://<server\_address>/api/api.php/123

 Request body:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "updateControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789",</span></div><div><span>&nbsp; "status": "active"</span></div><div><span>}</span></div></td></tr></tbody></table>

### DELETE

A method for deleting data. For example, this method is used to delete an object or an account.

In a DELETE request, the command and parameters are usually passed in the URL.

Example

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

## Data format

The API supports various formats for both requests and responses.

JSON:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789"</span></div><div><span>}</span></div></td></tr></tbody></table>

Form-encoded:

<table><tbody><tr><td><span></span></td><td><div><span>cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</span></div></td></tr></tbody></table>

XML:

<table><tbody><tr><td><span></span></td><td><div><span>&lt;request&gt;</span></div><div><span>&nbsp; &lt;cmd&gt;bindControl&lt;/cmd&gt;</span></div><div><span>&nbsp; &lt;uid&gt;123&lt;/uid&gt;</span></div><div><span>&nbsp; &lt;imei&gt;456&lt;/imei&gt;</span></div><div><span>&nbsp; &lt;lineuid&gt;789&lt;/lineuid&gt;</span></div><div><span>&lt;/request&gt;</span></div></td></tr></tbody></table>

## Data types

The API uses various data types to transfer information between the client and the server. Let's look at the main data types you may encounter in API requests and responses.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Data type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Example in JSON format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; What they are used for</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Text in quotes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;"name": "Маршрут №9"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For text data: names, descriptions,</span></div><div><span>&nbsp; identifiers</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>Numeric value, integer or fractional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "price": 15.35</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For numeric data: prices,</span></div><div><span>&nbsp; identifiers, coordinates, time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Array</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ordered list of elements of any type</span></div></td><td colspan="1" rowspan="1"><div><span>"points": [{"lat": "53.352142", "lon": "83.758749"},&nbsp; {"lat": "52.534012", "lon": "85.178777"}]</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For lists of data: stops, goods,</span></div><div><span>&nbsp; users</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Set of "key — value" pairs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "uid": "1", "lat": "53.352142", "lon":"83.758749"}</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For structured data:</span></div><div><span>&nbsp; information about a stop, user, order</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Boolean type</span></div><div><span>&nbsp; (Boolean)</span></div></td><td colspan="1" rowspan="1"><div><span>Logical value&nbsp;true/false or&nbsp;1/0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "bidirectional": 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For flags or states:</span></div><div><span>&nbsp; active/inactive, available/unavailable</span></div></td></tr></tbody></table>
