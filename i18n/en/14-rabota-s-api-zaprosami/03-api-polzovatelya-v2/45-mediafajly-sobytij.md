---
title: "Event media files"
---

This API is used to get the media files of selected objects for a given period. You can get links to photos and videos related to events, including ADAS and DMS.

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL: https://<server\_address>/api/api.php?

### Request parameters

-   cmd=get\_media — command for getting media files
    
-   agent\_id — object identifier or identifiers of several objects, separated by commas
    
-   start — start of the selection in Unix timestamp format
    
-   stop — end of the selection in Unix timestamp format
    

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_media&amp;agent_id=1234,5678&amp;start=1724623200&amp;stop=1724709600</div></td></tr></tbody></table>

A successful API request returns information about the media files of the selected objects for the specified period, along with links to view them. When you follow a link, the image or video related to the event opens in the browser.
