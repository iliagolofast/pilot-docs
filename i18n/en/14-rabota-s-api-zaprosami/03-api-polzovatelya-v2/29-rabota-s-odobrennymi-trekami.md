---
title: "Working with Approved Tracks"
---

This API helps you work with approved vehicle tracks: set periods, get tracks and use the track player.

## How to get the data

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request parameters

Parameters are passed in the query string using the POST or GET method, depending on the command.

To get the data you need, add parameters to the request address. Parameters are specified after the question mark “?” and separated by the “&” sign.

-   cmd=set\_approved\_tracks — command to set approved periods
    
-   cmd=get\_approved\_tracks — command to get approved tracks
    
-   veh — license plate or identifier of the vehicle
    
-   ts — start of the period (timestamp)
    
-   te — end of the period (timestamp)
    
-   node — the number of the node on which the command must be executed
    

### Set approved periods

Example API request

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=set_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=1537952400&amp;node=1</span></div></td></tr></tbody></table>

API response

<table><tbody><tr><td><span></span></td><td><div>{"code":0,"msg":"ОК обновлено"}</div></td></tr></tbody></table>

### Get approved tracks

Example API request

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;admin_address&gt;<span>/api/api.php?cmd=get_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=153795 2400&amp;node=1</span></div></td></tr></tbody></table>

API response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "data":{</div><div>&nbsp; &nbsp; "approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":2.8051348330013,"ts":1537948809,"te":1537949431,"max_speed":"59","avg_speed":26}</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "not_approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":1.8650025635569,"ts":1537945206,"te":1537946030,"max_speed":"40","avg_speed":12},</div><div>&nbsp; &nbsp; &nbsp; {"length":4.1987356239849,"ts":1537948298,"te":1537948798,"max_speed":"65","avg_speed":37}</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   approved— list of approved tracks
    
-   not\_approved— list of tracks that were not approved
    
-   length— track length in kilometers
    
-   ts— track start time (timestamp)
    
-   te— track end time (timestamp)
    
-   max\_speed— maximum speed on the track
    
-   avg\_speed— average speed
    

### Track player

The track player is a web service that lets you view vehicle tracks visually. Unlike the regular API, it immediately returns a ready page with a map and a track, rather than JSON or XML.

Link for viewing a track:

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;server_address&gt;<span>/api/track_player.php?login=demo&amp;pass=demo&amp;ts=1536933600&amp;te=1536940800&amp;veh=в848ае199&amp;lang=ru&amp;node=1</span></div></td></tr></tbody></table>

You can use the URL as an iframe src to display the track on a page.
