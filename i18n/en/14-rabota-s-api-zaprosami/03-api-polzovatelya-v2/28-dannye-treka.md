---
title: "Track Data"
---

This API loads the detailed points of the route (track) for a trip previously obtained via the [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html) method. Each track point contains coordinates, speed and the absolute registration time of the point in Unix timestamp format.

## How to get the data

### Method

GET

### Request address

To get the data, use the address: https://<server\_address>/api/api.php?

### Request parameters

-   cmd = gettrack — command to get the track.
    
-   id — track identifier obtained in the response of the [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html#трек_id) API
    
-   node — the number of the node on which the command must be executed
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettrack&amp;id=70685695&amp;node=1</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "track_data": "47.2037;39.6325;10;1439443509:47.2037;39.6324;13;1439443510:47.2037;39.6323;15;1439443512:47.2036;39.6304;22;1439443568",</div><div>&nbsp; "track_id": 70685695,</div><div>&nbsp; "unixstarttimestamp": 1439443509</div><div>}</div></td></tr></tbody></table>

The API request returns:

-   track\_id— unique track identifier;
    
-   unixstarttimestamp— date and time of the track start in Unix timestamp format;
    
-   track\_data— sequence of track points separated by a colon (:).
    

Each track point consists of four values separated by a semicolon (;):

1\. latitude — latitude;

2\. longitude — longitude;

3\. speed\_kmh — speed in km/h;

4\. point\_unix\_timestamp — absolute registration time of the point in Unix timestamp format, UTC.

Point format:

<table><tbody><tr><td><span></span></td><td><div>latitude;longitude;speed_kmh;point_unix_timestamp</div></td></tr></tbody></table>

Example:

<table><tbody><tr><td><span></span></td><td><div>47.2037;39.6325;10;1439443509</div></td></tr></tbody></table>

The value 1439443509 is the absolute registration time of the point, not the number of seconds from the start of the track.

To calculate the time elapsed since the start of the track, use the formula: elapsed\_seconds = point\_unix\_timestamp - unixstarttimestamp. For example: 1439443568 - 1439443509 = 59
