---
title: "List of Rates"
---

Use this API to get the list of rates available for an account, with information on currency, price and description.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=pricelist —  command to get the list of rates
    
-   node — the number of the node on which the command must be executed
    
    Additionally:
    
-   coden (optional) — currency code:
    
    — numeric (for example, 840 for USD, 810 for RUB)
    
    — alphabetic (for example, USD or RUR)
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=pricelist&amp;coden=840&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 143,</div><div>&nbsp; &nbsp; &nbsp; "code": "840",</div><div>&nbsp; &nbsp; &nbsp; "currency": 2,</div><div>&nbsp; &nbsp; &nbsp; "descr": "3 dollars per property per month",</div><div>&nbsp; &nbsp; &nbsp; "name": "US dollar",</div><div>&nbsp; &nbsp; &nbsp; "price": "3.00"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   code — request execution code (0 — success)
    
-   data — array of rates:
    
-   id — unique rate identifier
    
-   code — currency code (numeric)
    
-   currency — internal currency identifier
    
-   descr — rate description
    
-   name — rate name (for example, "US dollar")
    
-   price — rate price in the specified currency
    
-   message — text message about the result of the request
