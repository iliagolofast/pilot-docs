---
title: "How to work with webhook notifications"
---

A webhook is a way to automatically pass event data from the system to an external service or to your server.

For example, if a vehicle exceeds the speed limit, the system sends a request to the address you specified and passes the event information.

### How webhook notifications work

1\. You specify a URL — where to send the data

2\. When the notification is triggered, the system sends a POST request with JSON

3\. Your server receives the data and processes it as needed

Before you start, make sure that:

— the URL is correct and reachable

— the server responds with code 200 (OK)

— if the server does not respond or returns an error, the address is temporarily blacklisted

## How to set up a webhook

1\. Go to [creating](kak-sozdat-uvedomlenie.html) or editing a notification

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom.png)

2\. In the “Type and name” block, select the webhook sending method

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_2.png)

3\. To set up webhook notifications, click the edit field ![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_3.png)— the Webhook Details window opens, where you set the data sending parameters.

In the Webhook Details window you will see three fields:

![How to work with webhook notifications ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen.png)

<table><tbody><tr><td><div><strong>1. URL</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Specify the address the data will be sent to.

<table><tbody><tr><td><div><strong>2. Header</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

This is where the format of the transmitted data is specified. The required value is already set by default:

<table><tbody><tr><td><span></span></td><td><div>["ContentType: application/json"]</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>3. Body (request body)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

This is the data that will be sent. The following template is used by default:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": "%AGENTID%",</div><div>&nbsp;"vehiclenumber": "%VEHNUM%",</div><div>&nbsp;"ts": "%TS%",</div><div>&nbsp;"lat": "%LAT%",</div><div>&nbsp;"lon": "%LON%",</div><div>&nbsp;"speed": "%SPEED%",</div><div>&nbsp;"data": "%DATA%",</div><div>&nbsp;"zone": "%ZONE%",</div><div>&nbsp;"driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>4. Variables for the request body</strong></div><div>You can modify or extend the request body using the&nbsp;allowed variables&nbsp;from the list on the right.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Keep to the format —&nbsp;"value":&nbsp; "%VALUE%". If the syntax is broken, the webhook will not work.</div></td></tr></tbody></table>

**Allowed variables**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Variable</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; What it passes</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Account ID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Object ID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Timestamp</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Date and time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitude</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitude</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mileage (from the sensor)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Notification data</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID of the first geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Name of the first geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Maximum speed (for speeding notifications)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Duration of the violation</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Set speed limit (Speed control)</span></div></td></tr></tbody></table>

### How to insert a sensor value

If you need to pass the data of a specific sensor:

1\. Open the [“Sensors”](../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик) tab

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_4.png)

![How to work with webhook notifications ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen_2.png)

2\. Copy the exact sensor name

3\. Return to the webhook settings window and in the Body field insert the variable in the format %Sensor name%. For example, if the sensor is called Fuel sensor status, write %Fuel sensor status%.

### How to get raw data

You can pass data directly from the device:

1\. Go to the [“Points”](../../obekty-1/menyu-obekta.html#сырые_точки) tab

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_5.png)

2\. Find the parameter in the “Raw data” column

3\. Insert it into the Body field in the Webhook window in the format %Parameter name%. For example, if the parameter is called Valid, write %Valid%.

## Request example

When the notification is triggered, your server receives data that looks roughly like this:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": 4328,</div><div>&nbsp;"ts": 1545254055,</div><div>&nbsp;"data": ["У286НМ 67", "Parkingdur", "2", "1", "мм"]</div><div>}</div></td></tr></tbody></table>

The data set depends on which variables you specified in the request body and which notification type is configured.
