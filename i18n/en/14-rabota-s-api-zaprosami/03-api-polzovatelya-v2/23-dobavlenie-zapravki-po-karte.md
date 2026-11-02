---
title: "Adding a Refuel by Card"
---

This API adds a record of fuel consumption by card, including information on the amount of fuel, cost, location and driver.

## How to get the data

### Method

POST

### Request address

To execute the request, use the address: https://<server\_address>/api/api.php?

### Request parameters

Required:

-   cmd=add\_fuel\_transaction — command to add a transaction
    
-   card\_num — fuel card number
    
-   operation — operation type (for example, refill)
    
-   unixtimestamp — transaction time in Unix timestamp format
    
-   place — location of the operation
    
-   azs — gas station name
    
-   liters — number of liters of fuel
    
-   fuel — fuel type
    
-   price — price without discount
    
-   sum — amount without discount
    
-   node — the number of the node on which the command must be executed
    

Optional:

-   priceg — price with discount
    
-   sumg — amount with discount
    
-   driver — driver's full name
    
-   lat — latitude of the transaction location
    
-   lon — longitude of the transaction location
    
-   info — additional information
    
-   internal\_id — internal transaction identifier
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_fuel_transaction&amp;node=1</div></td></tr></tbody></table>

Example request body (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "card_num": "1234567890123456",</div><div>&nbsp; "operation": "refill",</div><div>&nbsp; "unixtimestamp": 1695000000,</div><div>&nbsp; "place": "Main street 12",</div><div>&nbsp; "azs": "WOG",</div><div>&nbsp; "liters": 50,</div><div>&nbsp; "fuel": "Diesel",</div><div>&nbsp; "price": 55.0,</div><div>&nbsp; "sum": 2750.0,</div><div>&nbsp; "driver": "Ivan Ivanov"</div><div>}</div></td></tr></tbody></table>

Response

{

  "code": 0,

  "msg": "OK"

}

The API request returns:

-   code — result code (0 — successful operation)
    
-   msg — server message about the result of the action
