---
title: "State of All Account Objects"
---

This API provides a list of all vehicles assigned to a specific account, with their current state.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/backend/api.php?

### Request parameters

-   cmd=vehicles — command to get the list of vehicles
    
-   account\_id — ID of the account for which you need to get the list of objects
    
-   node — the number of the node on which the command must be executed
    
    Optional parameters:
    
-   is\_show\_deleted — show deleted vehicles (0 — show only active vehicles, 1 — show all vehicles, including deleted ones)
    

The format of the requested data is an array of vehicle data.

### Example request

Showing deleted objects:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 0,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM1100",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 69332,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "SSS",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.200989",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.634436",</div><div>&nbsp; &nbsp; &nbsp; "model": "HYUNDAI IX35",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79818775160",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 7,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457709039",</div><div>&nbsp; &nbsp; &nbsp; "type": "Static",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "356307045913463",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "IX35"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 0,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 1,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 8026,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM4200",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 17441,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.318118",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.995648",</div><div>&nbsp; &nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79110181596",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "100.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "350.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 9,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457726726",</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "354330031297057",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "nex"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API request returns:

active — object activity status: 1 — active, 0 — inactive

deleted — whether the object was deleted: 0 — not deleted, 1 — deleted

agentid — unique device number

configuration — name of the GPS hardware configuration (for example, Teltonika FM1100)

current\_mileage — vehicle mileage, km

dir — direction of movement

driver\_name — driver's name (if assigned)

driver\_phone — driver's phone number

folder — name of the folder/category in the system

lat — geographic latitude of the last position

lon — geographic longitude of the last position

model — vehicle model

msisdn — tracker SIM number

on — ignition (1 — on, 0 — off)

partner\_price — price for the partner

price — retail price

sats — number of satellites with which contact is established

speed — current speed, km/h

ts — timestamp (UNIX time) of the last position update

type — object type

uniqid — unique device identifier (usually the IMEI)

vehiclenumber — vehicle number
