---
title: "Object History"
---

This API returns the movement history of a vehicle for a given period: tracks with information on mileage, operating time, parking, start and end coordinates, etc.

## How to get the data

### Method

POST

### Request address

To get the data, use the address: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Request parameters

To get the data, you need to send a request with authorization and a function and parameters specified:

-   Username — user login
    
-   Password — password
    
-   functionName=api\_objecthistory — command to get the object history
    
-   parameters — string with request parameters in the format:
    
    IMEI,FROM\_DATETIME,TO\_DATETIME, where:
    
-   IMEI — IMEI of the object
    
-   FROM\_DATETIME — start date/time of the period
    
-   TO\_DATETIME — end date/time of the period
    

The format of the requested data is an array of the object's tracks for the specified period.

### Example request

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objecthistory</div><div>parameters=352016704092097,2025-11-21 04:07:03,2025-11-23 04:07:03</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"FLCNSMD": 0,</div><div>&nbsp;"ENDTM": "2025-11-21 19:05:30",</div><div>&nbsp;"MILEGND": 106286.11,</div><div>&nbsp;"ENDLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"IDLDRTN": "00:00:00",</div><div>&nbsp;"CNT": 1,</div><div>&nbsp;"WRKNGDRTN": "07:47:22",</div><div>&nbsp;"MILEGN": 826.37,</div><div>&nbsp;"DRVR": "",</div><div>&nbsp;"startlatitude": 24.399892,</div><div>&nbsp;"OBJTID": 1344487,</div><div>&nbsp;"WRKNGSTRTTM": "2025-11-21 11:18:08",</div><div>&nbsp;"endlongitude": 48.20568,</div><div>&nbsp;"startlongitude": 39.644265,</div><div>&nbsp;"STPDRTN": "00:12:28",</div><div>&nbsp;"DY": "2025-11-21",</div><div>&nbsp;"endlatitude": 29.960238,</div><div>&nbsp;"OBJCTNME": "5209 ب د م",</div><div>&nbsp;"WRKNGSTRTLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"MXSPDP": 136</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

The API request returns an array of tracks for the specified period. Each array element describes one track and contains:

-   FLCNSMD — fuel consumption in this track
    
-   ENDTM — track end time
    
-   MILEGND — total mileage at the end of the track
    
-   ENDLCTN — address of the track end point
    
-   IDLDRTN — total idle time in this track
    
-   CNT — sequence number (index) of the track within the day
    
-   WRKNGDRTN — total engine running time / ignition “on”
    
-   MILEGN — mileage covered within this track
    
-   DRVR — driver's name
    
-   startlatitude — latitude of the track start point
    
-   startlongitude — longitude of the track start point
    
-   endlatitude — latitude of the track end point
    
-   endlongitude — longitude of the track end point
    
-   OBJTID — internal object identifier
    
-   WRKNGSTRTTM — time of the first ignition on in this track
    
-   STPDRTN — total parking time within the track
    
-   DY — track date
    
-   OBJCTNME — object name
    
-   WRKNGSTRTLCTN — address of the track start point
    
-   MXSPDP — maximum speed reached in this track
