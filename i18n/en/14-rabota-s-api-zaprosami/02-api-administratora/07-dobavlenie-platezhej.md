---
title: "Adding Payments"
---

This API is used to add payment information to a contract. You can specify the amount, date, payment ID in the external system and description.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/ax/api.php?

### Request parameters

Required:

-   cmd=payment — command to add a payment
    
-   inn — contract INN (unique identifier)
    
-   sum — payment amount (format dd.dd)
    
-   id — payment ID in the external system
    
-   date — payment date (format DDMMYYYY)
    
-   descr — payment description (string), for example: “payment for connection”
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=payment&amp;inn=123123123&amp;sum=10.00&amp;id=124&amp;date=04042016&amp;descr=test%20payment&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Payment inserted successfully",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "payment_id": 124,</div><div>&nbsp; &nbsp; "inn": "123123123",</div><div>&nbsp; &nbsp; "sum": 10.00,</div><div>&nbsp; &nbsp; "date": "04042016",</div><div>&nbsp; &nbsp; "descr": "test payment"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>
