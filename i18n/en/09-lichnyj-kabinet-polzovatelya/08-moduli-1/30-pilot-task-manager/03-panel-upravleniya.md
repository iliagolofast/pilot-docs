---
title: "Dashboard"
---

The task dashboard is a section in PTM where you can see all created tasks and work with them. This panel is a window for viewing and managing tasks that have been assigned or are in progress.

![](images/drex_panel_upravleniya__custom.png)

In this article we cover:

— [how the task table is organized and what information its columns show](panel-upravleniya.html#_Как_устроена_таблица_заданий_и_какую_информацию_отображают_её_колонки)

— [buttons and functions for quick task management](panel-upravleniya.html#Кнопки_и_функции_для_быстрого_управления_заданиями)

— [how to create, upload, and export tasks using templates](panel-upravleniya.html#Как_создавать,_загружать_и_экспортировать_задания_с_помощью_шаблонов)

— [which actions are available when you right-click a task row](panel-upravleniya.html#Какие_действия_доступны_при_правом_клике_на_строку_задания)

— [how to switch between workspaces](panel-upravleniya.html#Как_переключаться_между_рабочими_областями)

## Task table

The center of the panel shows a table of created tasks. Each row in the table is a separate task. The table columns show task data, for example:

-   Task ID — the unique task number in the system
    
-   Received at — when the task was created
    
-   Task type — planned execution time or estimated task time
    
-   Order type — the task category (for example, "Delivery", "Booking", etc.)
    
-   Execution status — the current task status
    
-   Date and time (planned) — planned date and time of arrival/departure
    
-   Date and time (actual) — actual arrival and departure time (from tracker or driver data)
    
-   Vehicle — the vehicle assigned to the task
    
-   Driver — full name of the driver assigned to the task
    
-   Accepted by driver — when the driver confirmed receipt of the task
    
-   Started moving — actual time the movement started
    
-   Started execution — time the work on the task started
    
-   Completed execution — time the task was completed
    

![](images/drex_panel_upravleniya__custom_2.png)

## Task control panel

At the top of the task table is the task control panel — a set of buttons for managing tasks quickly.

![Dashboard ](images/drex_panel_upravleniya__screen.png)

<table><tbody><tr><td><div><h3>Task control panel</h3></div><div><img alt="" src="images/drex_panel_upravleniya__custom_3.png" data-full-src="drex_panel_upravleniya__custom_3.png" data-full-width="533" data-full-height="40"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

-   Add — [create a new task](kak-sozdat-zadanie.html)
    
-   Edit — open the selected task for editing
    
-   Delete — delete the selected tasks
    
-   Filter settings ![](images/drex_panel_upravleniya__custom_4.png) — configure task filtering to show only the tasks you need
    

![](images/drex_panel_upravleniya__custom_5.png)

Start vehicle reassignment ![](images/drex_panel_upravleniya__custom_6.png) —  start automatic selection and replacement of vehicles in tasks. Use this button when you need to update vehicle assignments, for example when the vehicle fleet changes.

When the process is finished, a window with the results appears:

-   Tasks found —  how many tasks were processed
    
-   Virtual vehicles — how many of them were assigned to virtual vehicles
    
-   Real vehicles – how many tasks were assigned to real vehicles
    
-   Substitutions made – how many tasks received a different vehicle
    
-   Tasks recalculated – how many tasks were recalculated (routes, time, mileage, etc. after the vehicle replacement)
    

![](images/drex_panel_upravleniya__custom_7.png)

## Task templates

On the right side of the task list panel you will find three buttons for working with task templates.

![Dashboard ](images/drex_panel_upravleniya__screen_2.png)

### Download a task template

![](images/drex_panel_upravleniya__custom_8.png) — this button lets you download an Excel template for bulk task creation.

Click this button — a window opens:

![](images/drex_panel_upravleniya__custom_9.png)

-   In the “Template” field, select the task type you need, for example “Organization”, “Private person”, “Waybill”, “Booking”, and others. The choice determines which columns the Excel file has
    
    2\. Click the “Download” button to download the template file
    
    3\. Open the downloaded file and fill it in with your data — addresses, dates, drivers, cargo, and so on
    

### Open the panel for uploading tasks from a template

![](images/drex_panel_upravleniya__custom_10.png)  — this button is used to upload tasks to the system from a previously filled template file that you downloaded with the button  ![](images/drex_panel_upravleniya__custom_8.png)

Click this button — a window opens:

![](images/drex_panel_upravleniya__custom_11.png)

1\. Click the Excel icon and select the template file on your device

2.  Click the “Upload” button. The system reads the file rows and creates or updates tasks in the log based on the template data

### Export to Excel

![](images/drex_panel_upravleniya__custom_12.png) — this button downloads the task list in Excel format

Click this button — a window opens:

![](images/drex_panel_upravleniya__custom_13.png)

1\. In the “Template” field, select a template. The choice determines which columns the Excel file has

2\. In the “From” and “To” fields, specify the period for which to export tasks

3\. If you want only the tasks displayed in the table with your filters applied (by status, vehicle, etc.) to be included in Excel, check the “Apply current filters” box.

4\. Click “Download”, and the system generates an Excel file with tasks according to the selected template and filters.

The download template works only if it has been set up in the system beforehand. If the template is not set up, the system shows an error. The setup is done in the [“Templates”](spravochniki-2.html) section by editing the template you need: there you set the parameters that are visible in the task table and exported to Excel.

## Task menu

When you right-click a task row in the log, the task menu opens, offering various actions for the selected task:

## ![](images/drex_panel_upravleniya__custom_14.png)

1\. Create from template

Creates a new task by copying the main fields from the current task (client, route, cargo, parameters, etc.) so you don't have to fill them in again. The task is copied with the status “Not assigned”.

2\. Pin task

The logistician assigns themselves as responsible for completing the task

3\. Export for requester

Exports the task data to a file that can be sent to the requester (client). This export works through a configured template.

4\. Assign logistician

Opens a submenu for selecting the logistician who will be responsible for completing this task.

5\. Edit

Open the task card to change its parameters

6\. Delete

Delete the task from the system

7\. Status audit

Show the history of task status changes

![](images/drex_panel_upravleniya__custom_15.png)

8\. Task audit

The full history of changes to the task (creation, editing, logistician assignment, etc.).

![](images/drex_panel_upravleniya__custom_16.png)

9\. Set status

Opens a submenu for selecting a new task status, for example “Closed”, “Client refusal”, “Visit”, “En route”, and others.

10\. Signatories 

Lets you view or assign responsible signatories for the task or documents related to it.

11\. Print 

Print the task document.

12\. Completion certificate 

Generates and prints the completion certificate for the task; available after the task is completed and if there is data for the certificate.

<table><tbody><tr><td><span></span></td><td><div>Some menu items may be grayed out and unavailable until the task reaches the required status or the necessary data is filled in.</div></td></tr></tbody></table>

## Selecting a workspace on the dashboard

Above the task control panel and the task table there are buttons that open additional workspaces:

-   Resources
    
-   Tasks
    
-   Signature
    
-   Tenders
    

![Dashboard ](images/drex_panel_upravleniya__screen_3.png)

### Resources

Clicking it opens a panel showing resources — vehicles and drivers. In this section you can see:

-   Resource status (online/offline)
    
-   Current or nearest task
    
-   Schedule and base address
    

Use this area to track which resources are free, which are busy, and who can be assigned to the next task.

![](images/drex_panel_upravleniya__custom_17.png)

### Tasks

The main workspace where all tasks are displayed. Here you can:

— create, edit, and filter tasks

— assign resources

— track task execution statuses

![](images/drex_panel_upravleniya__custom_2.png)

### Signature

A section for working with electronic signatures on tasks and documents.

### Tenders

A section for working with transportation tenders. With this panel you can:

— create tenders based on tasks

— send tenders to contractors and carriers

— track the proposals received
