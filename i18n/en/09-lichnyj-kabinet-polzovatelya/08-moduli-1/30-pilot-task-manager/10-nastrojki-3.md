---
title: "Settings"
---

In the “Settings” section, the administrator can set the PTM system operating parameters, configure integrations with external services, and define the default system behavior.

All available settings sections are described below.

![](images/drex_nastrojki_3_custom.png)

Let's look at the available settings.

### GIS integration settings

This section configures the map services used for working with addresses, geocoding, and travel time calculation.

![](images/drex_nastrojki_3_custom_2.png)

1\. Connecting map services

 You can use services such as OSM, DaData, Google, HERE, Yandex, City Guide, and others.

To do this, specify:

-   Host, API key, or Token
    
-   Check boxes:
    
    — Use for geocoder — the service searches for addresses and coordinates
    
    — Use for forecasting — the service calculates routes and travel time
    
    2\. Geocoding priority:
    
    Set the order in which services are queried — the service with the highest priority is used first.
    
    3\. Map layers:
    
    Choose which maps (OSM, Yandex, Google, and others) are available in the system
    
    4\. Forecast parameters:
    
     Set the parameters for calculating the forecast time:
    

— Average speed

— Average loading/unloading time

— Maximum driving time

### Calendar settings

![](images/drex_nastrojki_3_custom_3.png)

This is where you configure how tasks are displayed in the calendar.

1\. Grouping by color:

-   By task type — tasks are displayed in different colors depending on their type (for example, delivery, repair, etc.).
    
-   By vehicle — tasks have different colors depending on which vehicle is assigned to perform them.
    
    2\. Show active tasks only:
    

If you enable this setting, the calendar shows only tasks with the following statuses:

-   New
    
-   In queue
    
-   Not assigned
    
-   Sent to driver
    
-   Accepted
    
-   En route
    
-   In progress
    
-   Pending approval
    

### Task settings

![](images/drex_nastrojki_3_custom_4.png)

Use the task settings to define how the dispatch system works:

1\. Requests:

You can specify the request storage and the request template:

-   Request storage — the reference book of requests received through the PARUS API integration. It is used to match requests with tasks in PTM
    
-   Request template — a pre-configured template used to group and process related tasks
    
    2\. Color highlighting:
    

Configure how tasks are highlighted in the table and calendar:

— By task type — each task has its own color depending on the type (for example, delivery, repair, etc.)

— By user — the color depends on which user is assigned as responsible for the task (for example, for different drivers or dispatchers). The user color is set in the user's card.

3\. Closing reasons:

You can enable selecting the task cancellation reason from a previously prepared reference book.

4\. Auto statuses by geofence

Auto statuses let you automatically change the task state based on visits to route geofences.

-   Geofence radius, m — the radius of the virtual geofence automatically created around a route point
    
-   Geofence accuracy, m — an additional value by which the geofence radius is increased when processing the task
    
-   Start in, min — defines how many minutes before the planned start time the task can automatically move to processing
    
-   Finish after, min — defines the time after the planned task end, after which the system can finish it automatically
    
-   Mark time, sec — the minimum time the vehicle must stay inside the geofence for a visit to be recorded. The check is performed both when entering and when leaving the geofence
    
-   Enable cyclic routes — allows correct processing of routes where a vehicle repeatedly moves between the same points and then returns to the base.
    
-   Completion function — defines the condition for automatic task completion. The following options are available:
    

— Return to base — the task is completed after the vehicle appears in the base geofence again.

The following can be used as the base:

-   the first route point
    
-   the last route point that matches the first
    
-   a point with the “Base” subtype
    
-   an alternative geofence created in the PILOT system
    

— Finish by shift — the task is completed after the estimated execution time ends: Planned end time + the value of the “Finish after” parameter

— Last waybill address (entry) — the task is completed after entry into the geofence of the last route point is recorded

— Last waybill address (exit) — the task is completed after exit from the geofence of the last route point is recorded.

![](images/drex_nastrojki_3_custom_5.png)

Additional task handling rules let you configure automation and refine task processing rules:

-   Enable task auto-completion — forcibly completes tasks the specified number of minutes after the planned end time. Not recommended for use together with auto statuses
    
-   Task execution time — used when calculating the planned end time if the execution time field cannot be edited manually
    
-   Allow sending unassigned tasks to all drivers — lets drivers pick tasks themselves from the common queue in the mobile app
    
-   Enable editing tasks in the table for the current day only — limits editing of tasks in the table to the current day. Works together with user permissions only for the dynamically generated task table (the table is generated dynamically based on all task templates).
    
-   Enable task autofill by key fields — the system automatically fills in data from previously created tasks based on the values entered by the user
    
-   Disable selection of system task types — hides service task types when creating new tasks
    
-   Enable color highlighting of task statuses — highlights status cells in the table according to the current task status
    
-   The current user is the initiator by default — when a task is created, the initiator is automatically set to the current user
    
-   Enable tooltips for table rows — brief task information is displayed when you hover the cursor over a row
    
-   Close task after signing — the task is closed automatically after the entire approval and document signing chain is completed
    
-   Enable waypoint building bypassing auto statuses — creates waypoints based on the route regardless of how the auto status mechanism works
    
-   Enable geofence priority on points — if a route point is linked to a PILOT system geofence, that geofence is used to record the visit
    
-   Do not use the first point as the last point — disables automatic route closing and affects waybill generation
    
-   Enable selection of a replacement vehicle — lets you assign a backup vehicle without changing the main vehicle assigned to the task
    
-   Enable synchronization of address editing with the address classifier — when an address is changed in a task, the changes are automatically saved in the address reference book
    

### Integrations

![](images/drex_nastrojki_3_custom_6.png)

Integration with external services allows the system to exchange data with other platforms. You can:

1\. Connect external services

2\. Set up automatic data import and export via API, email, or webhooks

3\. Specify which events and data must be passed to the system and back

Integrations are used for:

-   creating notifications
    
-   automatically importing tasks from email using a specified template (for example, for the “Magnit” system)
    

To connect an integration, you need to:

1\. Select the integration group

2\. Select the integration system

3\. Fill in the connection parameters

If only the notification mechanism is used, for integration with the “Magnit” system it is enough to specify the email address without a password.

### Webhook settings

The following parameters are available for each integration:

-   Webhook URL — the address for sending webhooks
    
-   Webhook headers — additional HTTP headers, for example an authorization token
    
-   Webhook parameters — the payload sent in the webhook
    

Special functions are used for automatic data substitution:

-   fn\[getApiKey\] — get the API key from the configuration (for the ERP Sarmix system only)
    
-   fn\[getAgentId\] — get the vehicle ID from the PILOT system
    
-   fn\[getCurrentAgentLocation\] — get the current vehicle location
    
-   fn\[getCurrentUTC\] — get the current time of the vehicle packet in seconds
    
-   fn\[getCurrentZoneId\] — get the ID of the geofence the vehicle is in
    
-   fn\[getTaskId\] — get the ID of the task the vehicle is performing
    
-   fn\[getErpOrderId\] — get the request ID (for the ERP Sarmix system only)
    
-   fn\[getCurrentSpeed\] — get the current vehicle speed
    
-   fn\[getVehicleNumber\] — get the vehicle number
    

### Webhook parameters configuration example

The “Webhook parameters” field contains a JSON object with the data to be passed to the external system. Special functions are used for automatic value substitution.

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "access_token": "fn[getApiKey]",</span></div><div><span>&nbsp; "agent_id": "fn[getAgentId]",</span></div><div><span>&nbsp; "geolocation": "fn[getCurrentAgentLocation]",</span></div><div><span>&nbsp; "time_event": "fn[getCurrentUTC]",</span></div><div><span>&nbsp; "zone_id": "fn[getCurrentZoneId]",</span></div><div><span>&nbsp; "pilot_task_id": "fn[getTaskId]",</span></div><div><span>&nbsp; "erp_order_id": "fn[getErpOrderId]",</span></div><div><span>&nbsp; "speed": "fn[getCurrentSpeed]",</span></div><div><span>&nbsp; "vehiclenumber": "fn[getVehicleNumber]"</span></div><div><span>}</span></div><div>&nbsp;</div></td></tr></tbody></table>

As a result, the system automatically substitutes the actual values, for example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "access_token": "123456789abcdef",</span></div><div><span>&nbsp; "agent_id": "4521",</span></div><div><span>&nbsp; "geolocation": "55.751244,37.618423",</span></div><div><span>&nbsp; "time_event": "1750054800",</span></div><div><span>&nbsp; "zone_id": "125",</span></div><div><span>&nbsp; "pilot_task_id": "98765",</span></div><div><span>&nbsp; "erp_order_id": "ORD-4567",</span></div><div><span>&nbsp; "speed": "68",</span></div><div><span>&nbsp; "vehiclenumber": "А123ВС777"</span></div><div><span>}</span></div></td></tr></tbody></table>

### Additional integration parameters

-   Algorithm ID — the identifier of an algorithm created in the PILOT system for processing notifications by an operator
    

Algorithm data — the payload passed to the PILOT algorithm when a notification is triggered. It is configured by technical support when needed. The composition and structure of the data depend on the specific algorithm and processing scenario.

Algorithm data configuration example

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "-6": {</span></div><div><span>&nbsp; &nbsp; "text": "Выполните действия",</span></div><div><span>&nbsp; &nbsp; "options": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 3"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   Algorithm timer — the algorithm execution wait time in seconds
    
-   Sensor ID — the sensor identifier from the PILOT system
    
-   Emails — the list of email addresses for sending notifications
    

### Account settings

Here you can configure the main system parameters for your account:

![](images/drex_nastrojki_3_custom_7.png)

1\. Queue for the mobile app:

Enable the task queue for drivers and define whether they pick tasks from the common queue themselves or tasks are assigned automatically.

2\. Integration and profile settings:

— Set the login and password

— Specify the time zone and default language for the whole system

— Enable the ExactFarming integration and configure the token for this integration

3\. “Logistician – Dispatcher” workflow chain:

Enable the workflow chain and select the permission template that will be used for logisticians and dispatchers.

4\. Phone interface:

Enable the new interface for mobile devices, and also configure automatic generation of completion certificates.

5\. Sending messages:

Configure the system to send notifications to requesters and drivers when needed

6\. Event notifications:

Configure notifications about various errors, such as geocoding problems, missing vehicle or track, incorrect time intervals, geofence overlaps, and track gaps.
