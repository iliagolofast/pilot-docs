---
title: "Managing Rental Contracts"
---

This API provides capabilities for managing vehicle rental contracts. With this API you can start, update and stop a rental, as well as authenticate and generate tokens for authorization.

## Authorization

To use the API, you must authenticate with a Bearer token.

### Getting an authorization token

Before sending requests, you must get a token by generating it with the login and password for the Admin panel.

### Authorization example

Token generation request:

<table><tbody><tr><td><span></span></td><td><div><span>curl --location --request GET 'https://</span>&lt;admin_address&gt;<span>/backend/app/contracts.php' \</span></div><div><span>--header 'Content-Type: application/json' \</span></div><div><span>--data-raw '{</span></div><div><span>&nbsp; &nbsp; "cmd": "generate_token",</span></div><div><span>&nbsp; &nbsp; "login": "YOUR_LOGIN_FOR_ADMIN_PANEL",</span></div><div><span>&nbsp; &nbsp; "password": "YOUR_PASSWORD_FOR_ADMIN_PANEL"</span></div><div><span>}'</span></div></td></tr></tbody></table>

Example response:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "0",</div><div>&nbsp; &nbsp; "message": "007898667a1b5711682399ea38a84f61"</div><div>}</div></td></tr></tbody></table>

The response contains a token. Use it in the Authorization header for subsequent requests.

Example header:

<table><tbody><tr><td><span></span></td><td><div>Authorization: Bearer 007898667a1b5711682399ea38a84f61</div></td></tr></tbody></table>

## Main commands

To perform operations, you need to specify the cmd parameter, which defines which operation you want to perform.

-   generate\_token — get an authorization token
    
-   start — start a vehicle rental
    
-   update — update rental data
    
-   stop — stop a vehicle rental
    

## Request parameters

All parameters are passed in JSON format

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parameter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Required</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mva</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Numeric identifier of the rented vehicle</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ra</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rental contract number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; plate_number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle license plate</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Name of the driver renting the vehicle</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_phone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's phone number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_passport</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's passport</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_address</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's address</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's license number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; License expiry date</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's email</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_birth_date</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's date of birth</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_sex</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sex (m or f)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_country</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver's country</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver rating</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Expected rental start time (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Expected rental end time (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Actual rental start time (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Actual rental end time (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rental start location (with latitude, longitude or an address string — lat, lon, address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; end_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rental end location (lat, lon or address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rate_code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rental rate code under the contract</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; car_group_charged</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle group</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; checkout_branch</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Pick-up branch</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mileage_limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mileage limit</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>cid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identifier of the customer, the driver renting the vehicle</span></div></td></tr></tbody></table>

## Example requests

### Starting a rental

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Content-Type: application/json' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "start",</div><div>&nbsp; &nbsp; "mva": 111,</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "ts_expected": 1644927600,</div><div>&nbsp; &nbsp; "te_expected": 1644981600,</div><div>&nbsp; &nbsp; "start_location": { "lat": 40.712776, "lon": -74.005974 },</div><div>&nbsp; &nbsp; "car_group_charged": "Economy"</div><div>}'</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1233",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

The response returns:

code — response code

odo — odometer value

message — text message about the result of the request

### Updating a rental

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "update",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "mileage_limit": 2000</div><div>}'</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Stopping a rental

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer YOUR_TOKEN' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "stop",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "driver_rating": 4,</div><div>&nbsp; &nbsp; "end_location": {"address": "Ilino 2c"}</div><div>}'</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Response and error codes

0 — the operation was successful

1 — vehicle not found

2 — no changes to update

3 — rental contract not found

4 — authentication error

5 — unknown error

6 — no rights to perform the operation

7 — the contracts module is not active

8 — this rental contract number is already used by another account

9 — the vehicle is rented by another account

10 — the vehicle is not rented

11 — invalid request

12 — invalid location parameter

13 — this rental contract number is used by another agent

14 — the passport was provided, but the driver name is not specified

15 — the driver name was provided, but the passport is not specified

16 — driver not found by the provided data

17 — the driver data does not match the previously saved data

18 — rental contract with this number not found

19 — this rental contract is already completed

20 — the vehicle is already rented

21 — the driver is specified incorrectly

22 — the existing contract was closed, a new one was created

500 — internal server error
