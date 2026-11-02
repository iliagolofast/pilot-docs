---
title: "Import from Wialon"
---

To transfer data from the Wialon system, use the “Import from Wialon” module. Data is transferred through the migration wizard — select the Objects you need and transfer them to PILOT.

<table><tbody><tr><td><span></span></td><td><div>Before transferring data, make sure your Wialon account has export rights — access&nbsp;to&nbsp;the Import/Export function. If you do not have these rights, “Import from Wialon” will not be able to export Objects.</div></td></tr></tbody></table>

![Import from Wialon](images/drex_import_iz_wialon_screen.png)

<table><tbody><tr><td><span></span></td><td><div>For a clear understanding of how to work with the migration wizard and transfer data from Wialon to PILOT, watch the video <a href="https://youtu.be/TMAA7MX-EQU"><span>“How to transfer data from Wialon to PILOT”</span></a>.</div><div><div><a href="https://youtu.be/TMAA7MX-EQU" title="560_315">https://youtu.be/TMAA7MX-EQU</a></div></div></td></tr></tbody></table>

## How to transfer data:

1\. Connect the “Import from Wialon” module in the admin panel. After that, the “Import from Wialon” button appears on the “General” tab

![Import from Wialon](images/drex_import_iz_wialon_screen_2.png)

2\. Click the button ![](images/drex_import_iz_wialon_custom.png)

3\. The migration wizard window opens, divided into two parts:

On the left — the list of migration jobs

On the right — the list of Wialon Objects that will be transferred

![Import from Wialon](images/drex_import_iz_wialon_screen_3.png)

4\. Create a new migration job:

1) Click the “Add job” button ![](images/drex_import_iz_wialon_custom_2.png)

2) In the window that appears, fill in the fields:

![Import from Wialon](images/drex_import_iz_wialon_screen_4.png)

-   Wialon login  — your Wialon login
    
-   Wialon password — your Wialon password
    

3) Click the “Load Objects from Wialon” button

4) A list of Objects that can be transferred appears below. Check the ones you want to import.

<table><tbody><tr><td><span></span></td><td><div>Objects marked&nbsp;processed&nbsp;have already been selected in other jobs and are not available for selection.</div></td></tr></tbody></table>

![](images/drex_import_iz_wialon_custom_3.png)

5) Click “Save”

5\. The new job appears in the list on the left in the migration wizard window. All of its statuses will be empty —  this means the job has not been run yet.

![Import from Wialon](images/drex_import_iz_wialon_screen_5.png)

6\. To start the data transfer, click the job in the list and click “Run job” ![](images/drex_import_iz_wialon_custom_4.png)

<table><tbody><tr><td><span></span></td><td><div>Once started, the job cannot be changed.</div></td></tr></tbody></table>

7\. After the job is started, the data transfer begins automatically

The stage statuses will be updated in the migration wizard window — this usually takes no more than a minute.

Wait for the process to finish: you will see the statuses change and new data appear.

![Import from Wialon](images/drex_import_iz_wialon_screen_6.png)

To follow the migration process and see current statuses, click the “Refresh” button ![](images/drex_import_iz_wialon_custom_5.png).

In this example, after the job with id: 322 was completed, the only Wialon Object was fully and successfully transferred to PILOT.

![](images/drex_import_iz_wialon_custom_6.png)

## Migration stages

The migration stages are displayed for each Object:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Stage</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The job has started. Migration has begun, the system has started executing the job</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; auth</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization in the Wialon API. The system connects to Wialon to gain access to the data</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wlp</span></div></td><td colspan="1" rowspan="1"><div><span>Export of Object parameters.</span></div><div><span>The main Object parameters are exported from Wialon (number of successfully processed files with Wialon Object parameters / total number of Wialon Objects in this job)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wln</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Export of Object Events.</span></div><div><span>&nbsp; Object Events are exported from Wialon (number of successfully processed files with Wialon Object Events / total number of Wialon Objects in this job)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh</span></div></td><td colspan="1" rowspan="1"><div><span>Creation of Objects in PILOT</span></div><div><span>(number of successfully created PILOT Objects / total number of Wialon Objects in this job)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sns</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sensor import. Transfer of data about the Sensors installed on Objects</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; evt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Event import. All Events related to Objects are imported (for example, speeding, refuels, alarms)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rc</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data recalculation:</span></div><div><span>&nbsp; rc1 — Tracks:&nbsp;recalculation of routes and movement Tracks</span></div><div><span>&nbsp; rc2 — binary sensors: recalculation of data for Sensors with two states (for example, on/off)</span></div><div><span>&nbsp; rc3 — sensors: recalculation of data for all Sensors</span></div><div><span>&nbsp; rc4 — odometer: Mileage recalculation</span></div><div><span>&nbsp; rc5 — eco: recalculation of driving style data (eco-driving)</span></div><div><span>&nbsp; r6 — multi-sensors:&nbsp;recalculation of data for complex (multichannel) Sensors</span></div></td></tr></tbody></table>

## Migration stage statuses

The status field values can be as follows:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Description</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; empty</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The migration stage was not run</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_7.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The stage completed successfully</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_8.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The stage completed with errors</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1001</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Wialon API error code</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; no data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Wialon API error message (no data)</span></div></td></tr></tbody></table>
