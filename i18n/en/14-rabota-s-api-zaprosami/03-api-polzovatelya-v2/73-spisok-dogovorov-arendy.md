---
title: "List of rental contracts"
---

This API provides information about rental contracts from the Rent Car (AVIS) module: open, booked and closed contracts. For each contract, it returns data about the renter, the rental start and end points, the planned pick-up and return dates, and the contract and vehicle numbers.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request parameters

To get the data you need, add the following parameters to the request URL:

-   cmd=rentcar\_contracts — command for getting the list of rental contracts.
    
-   status — status of the contracts to get. You can pass one status or several, separated by commas:
    
-   open — open contracts (the rental is currently active)
    
-   booked — booked contracts (reservation, the rental has not started yet)
    
-   closed — closed contracts (the rental is finished)
    

The requested data is returned as an array of rental contracts.

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rentcar_contracts&amp;status=open,booked,closed</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"list": [</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"mva": "12312",</div><div>&nbsp;"ra": "16",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "Private house"</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "rgergrr"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "erterter"</div><div>&nbsp;},</div><div>&nbsp;"mva": "2222",</div><div>&nbsp;"ra": "17",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "ABC-123"</div><div>&nbsp;}</div><div>&nbsp;]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   code — status code (0 — success)
    
-   msg — status message (OK — the request was completed successfully)
    
-   list — array of rental contracts, each of which contains:
    
-   driver\_name — name of the renter (driver) the contract is issued to
    
-   driver\_phone — renter's contact phone number
    
-   start\_location — rental start point (vehicle pick-up):
    
-   title — name/address of the pick-up point
    
-   end\_location — rental end point (vehicle return):
    
-   title — name/address of the return point
    
-   mva — rental contract number (Master Vehicle Agreement)
    
-   ra — reservation / rental agreement number (Rental Agreement)
    
-   ts\_expected — planned rental start time (Unix timestamp)
    
-   te\_expected — planned rental end time (Unix timestamp)
    
-   plate\_number — vehicle license plate number under the contract
