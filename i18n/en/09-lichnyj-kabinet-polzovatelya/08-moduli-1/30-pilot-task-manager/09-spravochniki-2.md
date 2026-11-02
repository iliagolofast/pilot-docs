---
title: "Reference books"
---

In the “Reference books” section you can create and configure data lists used when working with tasks, vehicles, and drivers. For example, these can be lists of drivers, task statuses, or cargo types. Reference books make creating tasks easier, because you only need to select the data you need from ready-made lists instead of entering it manually every time.

### How to enable the “Reference books” section

1\. The “Reference books” section is not always available in the PTM menu and is enabled on request. To enable this section, contact technical support

2\. After it is enabled, the section is empty, because there are no ready-made reference books in the system. You can add and configure reference books yourself, creating the lists you need

## How to create a reference book

![](images/drex_spravochniki_2_custom.png)

1\. Open the “Reference books” section

2\. In the “Reference book list” panel, click the “Add” button ![](images/drex_spravochniki_2_custom_2.png)

3\. The “Add new reference book” window opens

![](images/drex_spravochniki_2_custom_3.png)

On the left, set the general information about the reference book:

-   Name — the reference book name (for example: “Cargo type”, “Cancellation reasons”, “Service types”)
    
-   Alias — the technical name of the reference book
    
-   Primary key, Secondary key, Display key, Parent alias — these fields relate to the reference book structure and links with other tables.
    

<table><tbody><tr><td><span></span></td><td><div>If you are not sure about the meaning of these parameters, it is better to consult technical support.</div></td></tr></tbody></table>

On the right, set the structure of the reference book rows:

4\. Click “Add” above the table on the right ![](images/drex_spravochniki_2_custom_2.png)

5\. Specify:

-   Column alias — the internal field name
    
-   Type — select the data type
    

Check the flags as needed:

-   “Empty value” — allow empty values for this field
    
-   “Unique” — the field must contain unique data
    
-   “Formula” — if the field will be calculated by a formula
    

![](images/drex_spravochniki_2_custom_4.png)

6\. Repeat steps 4–5 for all the fields you want in the reference book.

When the structure is set up:

7\. Click “Save”

8\. The new reference book appears in the list on the left

![](images/drex_spravochniki_2_custom_5.png)

9\. Select it in the “Reference book list” — the “Reference book data” table opens on the right, where you can:

— add rows ![](images/drex_spravochniki_2_custom_2.png)

— edit and delete records

<table><tbody><tr><td><span></span></td><td><div>If creating the reference book structure is difficult, you can contact technical support. Then, once the structure is ready, you can fill it with values yourself.</div></td></tr></tbody></table>

## Reference book examples

In the “Reference books” section you can create and configure various data lists that help simplify your work with tasks. The initial list is always empty, and you need to fill it with the information you need. Let's look at a few examples of reference books you can set up.

### Templates reference book

The “Templates” tab stores the list of all task and document types. Each template determines which fields are shown in the task card, which columns the dispatcher sees in the log, and which completion certificate forms are used for the task.

![](images/drex_spravochniki_2_custom_6.png)

How to add a new template:

1\. Open Reference books → Templates

2\. Click “Add” ![](images/drex_spravochniki_2_custom_2.png). The “Add template” window opens

![](images/drex_spravochniki_2_custom_7.png)

In it, fill in:

-   Enter a clear template name, for example: “City delivery”, “Service call”, etc.
    
    2\. Describe what this template is for
    
    3\. Set the additional flags:
    
-   Default template — if enabled, this template is filled in automatically when a new task is created
    
-   Send SMS to driver — when a task is created from this template, an SMS is sent to the driver
    
-   Send SMS to initiator —  the task initiator receives an SMS
    
    4\. Header template — this field stores the technical description of the table “header” and the Excel export. If you don't know what to enter here, contact technical support.
    
    5\. Click “Submit” — the new template appears in the list
    

After you create a template and it appears in the list, you need to fill it with fields. Click “Parameters” to configure:

![Reference books](images/drex_spravochniki_2_screen.png)

— which fields are in the task card

— in what order they are shown

— which columns are in the task log

— which fields are mandatory, service fields, etc.

How to add a new field to a template:

1\. In the “Templates” section, select the template you need

2\. Click “Parameters” — the field table opens

![](images/drex_spravochniki_2_custom_8.png)

3\. Click “Add” ![](images/drex_spravochniki_2_custom_2.png)

4\. In the add form, fill in:

![](images/drex_spravochniki_2_custom_9.png)

-   Type — select the data type
    
-   Alias — the internal field name in Latin letters
    
-   Name — what the field will be called
    
-   Group name
    
-   Default value
    
-   Weight — determines the order in which the field is displayed
    
-   Settings — check the boxes:
    

— Value is a formula result? — the field is filled in automatically by a formula

— Field can be empty —  if enabled, the field is optional

— Field is active — the field is used and shown in the form

—  Field can be deleted —  allows deleting this field from the template in the future

— Visible only when editing — the field is visible only when the task is being edited and is hidden in view mode

— Show warehouse name / Show order ID — special options for templates that need this data

— Is a key index for search — the field will be used for search

-   Field permissions:
    

— Permission templates  — select the roles (rights templates) that the field will be available to.

— Deny editing for permission templates — roles for which the field will be read-only \\

3\. After filling in, click “Save” in the parameter form. The new field appears in this template

How to create a completion certificate for a template:

1\. Go to Reference books → Templates

2\. Select the template you need

3\. At the top, click the “Completion certificate” button

<table><tbody><tr><td><span></span></td><td><div>If this item is not displayed, it needs to be added in the rights of the <a href="spravochniki-2.html#Шаблон_разрешений"><span>permission template</span></a>. If you have problems, contact technical support.</div></td></tr></tbody></table>

![Reference books](images/drex_spravochniki_2_screen_2.png)

4\. A window with the list of certificates for this template opens

![](images/drex_spravochniki_2_custom_10.png)

5\. In the window, click “Add” ![](images/drex_spravochniki_2_custom_2.png) — the “Add completion certificate” form opens

6\. Fill in the fields at the top:

-   Name —  what the certificate will be called
    
-   Existing file — if you want to use an existing file template as a basis.
    
-   File —  if needed, you can upload your own template file from disk
    

 7. Compose the certificate text — write the text of the certificate on the “Editor” tab

To have data from the task automatically inserted into the certificate:

![Reference books](images/drex_spravochniki_2_screen_3.png)

1\. On the right, in the “Certificate parameters” block, select the parameter you need:

![](images/drex_spravochniki_2_custom_11.png)

-   “Basic” tab — task number, dates, addresses, amounts, etc.;
    
-   “Executor” tab — what the driver fills in the certificate in the mobile app. The fields for driver certificates must appear after the basic data in the certificate text
    
-   “Template” tab — fields specific to this particular template
    

2\. In the tab lists, select the fields you need (for example, text fields, check boxes, signature, etc.) and copy their names into the certificate text.

![](images/drex_spravochniki_2_custom_12.png)

3\. If needed, mark this certificate as the default for the template

![Reference books](images/drex_spravochniki_2_screen_4.png)

4\. Click “Save”

Now, for tasks of this template, you can print the certificate in the configured form.

### Signatories reference book

This is where you set up the people who will sign documents and certificates. With signature templates you can easily define who must sign documents and in what order.

![](images/drex_spravochniki_2_custom_13.png)

### Task types

This is where you set up various task types, for example “Delivery”, “Repair”, “Loading”. You can also specify priorities and a description.

![](images/drex_spravochniki_2_custom_14.png)

### Task priorities

This reference book sets various task urgency levels: “Not urgent”, “Urgent”, “Very urgent”.

![](images/drex_spravochniki_2_custom_15.png)

### Task statuses

This reference book defines all possible task statuses: “New”, “In progress”, “Completed”, “Sent to driver”, and so on.

![](images/drex_spravochniki_2_custom_16.png)

### Address classifier

This reference book stores addresses that have already been used in tasks. Instead of entering each address manually when creating a new task, you can select the address you need from this list.

![](images/drex_spravochniki_2_custom_17.png)

### Drivers reference book

Here you can store information about drivers working under the contract. This reference book is needed to assign such drivers to tasks.

![](images/drex_spravochniki_2_custom_18.png)

### Notification settings

In this reference book you set which notifications to send and how — via SMS, email, Push notifications, or Telegram.

![](images/drex_spravochniki_2_custom_19.png)

To add a notification, click ![](images/drex_spravochniki_2_custom_2.png) and fill in the notification form:

![](images/drex_spravochniki_2_custom_20.png)

1\. “Notification information” block:

-   Name — create a clear rule name, for example “Unloading time exceeded”
    
-    Notification — select which event triggers the rule
    
-   Resources — if the notification does not apply to all, select specific vehicles/resources.
    
    If it should be triggered for all — check “All”.
    

2\. “Parameters” block

-   Event color — select the color used to mark the notification in the interface
    
-   Select delivery channels:
    

— E-mail — specify e-mail addresses in the field below

— SMS — specify phone numbers in the field below

— Telegram 

— Pop-up window

— Push to the mobile app

-   For all users — if the notification should be visible to everyone
    
-   Geofence address — specify a point/geofence if the notification is tied to a specific place
    

3\. “Condition” block

Here you specify exactly when the notification is triggered:

-   Template type — if needed, limit the rule to specific task templates, or check “All”.
    
-   Task types — select which types the notification applies to
    
-   Device statuses — which tracker/vehicle statuses the rule works on
    
-   Task statuses — for which task statuses
    
-   Time in status, min — if it should be triggered not immediately, but only if the task is “stuck” in a status for longer than the specified time
    

4.  Check the filled-in fields and click “Save” at the bottom right. The new rule appears in the notification settings list and starts working according to the specified conditions.

### Permission templates

Here you can configure sets of access rights for users so that each of them has only the necessary information.

![](images/drex_spravochniki_2_custom_21.png)
