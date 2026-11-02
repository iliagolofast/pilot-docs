---
title: "PILOT 7.6"
---

In version 7.6 we strengthened the security of our customers' data. We expanded functionality and improved system stability by adding new features and fixing bugs.

### Stronger security

We added extra protection for user data. We improved password storage security: passwords are now stored in encrypted form using a modern, reliable encryption algorithm.

### Improved Telegram bot

We updated our Telegram bot. We worked on stability: no more unexpected failures or repeated authorization. We added the ability to choose the language for communicating with the bot. We made vehicle search faster: just list the vehicles you are interested in, and the bot immediately provides the information.

### Additional account protection

Partners can now make two-factor authentication mandatory for all users when logging in. To log in, in addition to the username and password, the user must now enter a one-time code from an authenticator app.

![](images/drex_pilot_7_6__custom.png)

### Created a new API

With a single request you can get the most important information about your vehicles. The new API provides a report that includes distance traveled, speeding cases, harsh braking, and seat belt violations.

### New retransmission protocol

We added the Tripia retransmission protocol for sending vehicle data.

### Integrated Hikvision video devices

We added support for several Hikvision mobile devices: a portable video recorder for recording video, a car recorder for recording trips, and a camera that recognizes license plates automatically. These devices can now be connected and managed in our system.

### Language selection in the “Report scheduler”

You can now choose the language for generating reports in the scheduler settings. Select the language you want from the drop-down list, and it will be applied to reports regardless of the system interface language.

![](images/drex_pilot_7_6__custom_2.png)

### Sound alerts for notifications

Sound alerts for notifications are available in the system again. You can turn the function off if needed.

![](images/drex_pilot_7_6__custom_3.png)

### Access to the user guide

We added a “Manual” tab to the interface. Account users can view the documentation that administrators attach

![](images/drex_pilot_7_6__custom_4.png)

### Vehicle year of manufacture is optional

The “Year of manufacture” field is now optional. You can create new vehicles without specifying the year of manufacture if this information is unknown or unimportant. Save a vehicle without the year and edit this data later.

### Parking duration in history

The vehicle movement history now includes the number and duration of parking stops. You will see how much time each vehicle spent parked.

![](images/drex_pilot_7_6__custom_5.png)

### Exact display of time without connection

We improved the display of the “No connection” status. The system shows the exact time without a connection in hours, days, and months.

![](images/drex_pilot_7_6__custom_6.png)

### “Tachograph” module in the new interface

We added “Tachograph” to the updated interface. Managing the module settings and viewing reports is now easy.

![](images/drex_pilot_7_6__custom_7.png)

### Tracking changes in driver history

We added a function to the “Audit history” that lets administrators track changes in driver history, even if records were deleted.

### What's new in working with maps

You can choose which map opens first by default. You can also hide maps you don't use.

### Infrared map with separate passenger flow statistics

We added an infrared map for the “Passenger flow statistics” report, which clearly shows separate statistics for passengers boarding and alighting.

![](images/drex_pilot_7_6__custom_8.png)

### Report date in the e-mail

The subject of the e-mail now includes the report generation date.

### Saving “Service” notifications

If you received a notification from the “Service” module but missed it, information about it is automatically saved in “Events”.

### New fields and a data synchronization function in FOTA

In the FOTA interface, we added new fields for vehicles with Teltonika devices: ICCID, group identifier, and description, which help identify SIM cards, accounts, and vehicles. The synchronization button updates data between FOTA and Pilot and fills in the vehicle card automatically.

![](images/drex_pilot_7_6__custom_9.png)

### Added the last parking stop to the report

We fixed a bug in the “Trips and parking” report that caused parking stops after trips not to be displayed. Now in the report every trip ends with a parking stop.

![](images/drex_pilot_7_6__custom_10.png)

### Fixed the bug with the add service button

When you click the “Add new service” button, a pop-up window with a form for creating a service opens.

### Updated the “History” and “Reports” interfaces

Additional fields can now be displayed. You can customize the view of the information displayed in these sections for your tasks.

![](images/drex_pilot_7_6__custom_11.png)

### Added filtering by additional fields

You can now filter by the additional fields that you create for vehicles and drivers. When you add a new field in the field editor, search and filtering by this parameter automatically become available.

### New driver fields in the report

We added new fields with driver information to the “Report builder”. You can now include the driver's name, group, driver's license expiration date, phone number, tags, and description in a report.
