---
title: "Connecting to the BI Analytics API"
---

To connect to the BI Analytics API, you need to obtain the authorization data and configure the connection parameters correctly.

To connect, you will need:

— the login and password of the partner account

— the address of the server your account runs on

Once you have this data, you can use the BI Analytics API to connect to Power BI or any other BI system that supports working with REST API.

## Where to get the login and password

To connect to the BI Analytics API, you need the login and password of the partner account.

Use the same credentials that were issued to you when the partner account was registered. These are the same login and password that are used to log in to the admin panel.

If you have access with main administrator rights, you can view this data in the partner account card, on the “Main settings” tab:

-   Login — use as username
    
-   Password — use as password
    

![Connecting to the BI Analytics API](images/drex_podklyuchenie_k_bi_analytics_api_screen.png)

## How to choose the server address

To connect to the BI Analytics API, you must specify the server address in the BaseUrl parameter of the request. Use the server your account runs on.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Server</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Address</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Purpose</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Production</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Main server</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Saudi Arabia</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://ksa.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Regional server for Saudi Arabia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Regional server for Africa</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blade</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://blade.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Blade server</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://gps.iglit.tech</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit server</span></div></td></tr></tbody></table>

In the request, specify the URL you need, for example,

<table><tbody><tr><td><span></span></td><td><div>BaseUrl = "https://ksa.pilot-gps.com",</div></td></tr></tbody></table>
