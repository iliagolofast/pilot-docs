---
title: "Updating Additional Vehicle Fields"
---

This API changes the values of additional vehicle [fields](../../panel-administratora/dogovor/redaktor-polej-transportnogo-sredstva.html) in a single request by agent\_id or imei. You can change all fields or only some of them; the number of fields is not limited.

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/api/api.php

### Headers

Content-Type: application/json

Authorization: Basic <your\_credentials>

### Request parameters

-   cmd=agent\_update\_custom\_fields — API command
    
-   agent\_id — vehicle identifier (if you are not using imei).
    
-   imei — IMEI of the vehicle's device (if you are not using agent\_id).
    
-   custom\_fields — object with key-value pairs for updating additional fields
    

In custom\_fields you can specify any number of fields, for example extra\_field1, extra\_field2, … extra\_fieldN (provided that these fields have been created in the account). Field values can be numbers, strings or boolean values

### Example request

Updating several fields by agent\_id:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"agent_id": 30547,</div><div>"custom_fields": {</div><div>"extra_field1": "Путевой лист №123",</div><div>"extra_field2": "2025-11-01",</div><div>"extra_field7": "+79000000000"</div><div>}</div><div>}'</div></td></tr></tbody></table>

Updating by imei:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \'</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"imei": "359339099999999",</div><div>"custom_fields": {</div><div>"extra_field3": "Пропуск №A12345",</div><div>"extra_field4": "2025-12-31"</div><div>}</div><div>}'</div></td></tr></tbody></table>

### Example response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>"code": 1,</div><div>"msg": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — execution code: 1 — success, 0 — error
    
-   msg — text description of the result (for example, "OK" or an error message)
