---
title: "Battery charge by VIN"
---

This API returns information about the battery charge of a vehicle by VIN.

Works only for objects that have:

-    the VIN field filled in on the object [card](../../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html) 
    
-   a battery charge sensor connected
    

<table><tbody><tr><td><span></span></td><td><div>You can specify several VINs in the request; the response will then contain information for all the specified objects.</div></td></tr></tbody></table>

## How to get the data

### Request URL

To get the data, use the URL: https://<server\_address>/api/VTB/api\_vtb.php

### Request method

 POST

Working with this API takes two steps:

1\. Authorization — getting a token to access the data

2\. Data request — using the token to get battery information by VIN

### 1\. Authorization

Before requesting data, you must authorize.

Request body:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "login": "your_login",</div><div>&nbsp; "password": "your_password",</div><div>&nbsp; "cmd": "auth"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

In the response you will receive a token — a long unique string.

This token identifies the user in subsequent requests. Without the token, the API will not return battery data.

### 2\. Getting battery sensor data

After you get the token, you can request battery information.

Request parameters

-   Number — list of VINs of the vehicles you want to get information about.
    
-   DateFrom — date and time of the start of the period (in ISO 8601 format).
    
-   DateTo — date and time of the end of the period.
    
-   cmd=vehicle — API command for requesting vehicle data
    

Request headers:

-   Authorization: Bearer <token> — pass the token obtained during authorization
    
-   Content-Type: application/json — indicates that the request body is in JSON format
    

Request body:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "Number": ["object_VIN"],</div><div>&nbsp; "DateFrom": "2023-12-03T00:00:00",</div><div>&nbsp; "DateTo": "2023-12-12T00:00:00",</div><div>&nbsp; "cmd": "vehicle"</div><div>}</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "Number": "456789123",</div><div>&nbsp; &nbsp; "ApplicationNumber": null,</div><div>&nbsp; &nbsp; "CurrentStatus": "ACTIVE",</div><div>&nbsp; &nbsp; "CloseDateTime": "",</div><div>&nbsp; &nbsp; "LastSyncDate": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "AlarmDateTime": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "Latitude": "55.578352",</div><div>&nbsp; &nbsp; "Longitude": "38.125267",</div><div>&nbsp; &nbsp; "BatteryCharge": "полный заряд",</div><div>&nbsp; &nbsp; "LocationLinesID": "",</div><div>&nbsp; &nbsp; "FullAddress": "улица Гарнаева, Рынок, Жуковский, Московская область, Россия",</div><div>&nbsp; &nbsp; "Country": "Россия",</div><div>&nbsp; &nbsp; "Region": "Московская область",</div><div>&nbsp; &nbsp; "Town": "Жуковский",</div><div>&nbsp; &nbsp; "Street": "улица Гарнаева",</div><div>&nbsp; &nbsp; "House": null,</div><div>&nbsp; &nbsp; "numberRegion": 10</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

The API response contains:

-   Number — vehicle VIN
    
-   CurrentStatus — current object status
    
-   LastSyncDate — date of the last synchronization
    
-   BatteryCharge — battery charge level
    
-   FullAddress, Country, Region, Town, Street — object location
    
-   Latitude, Longitude — object coordinates
