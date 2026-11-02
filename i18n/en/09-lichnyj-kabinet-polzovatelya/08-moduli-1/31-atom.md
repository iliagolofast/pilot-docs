---
title: "Atom"
---

The “Atom” module creates a network connection with the auto-conductors on vehicles and opens remote access to their file system.

Main module features:

-   Real-time monitoring of auto-conductor status
    
-   Remote download of video recordings from DVR cameras
    
-   Download of files from passenger counting cameras
    
-   Retrieval of diagnostic information about device operation
    

## Monitoring auto-conductor status

When working with the “Atom” module, the object list shows information about the status of auto-conductors:

-   Connection status — the icon shows whether the auto-conductor is on ![](images/drex_atom_custom.png) or off ![](images/drex_atom_custom_2.png). You immediately see whether the device is available for work.
    

<table><tbody><tr><td><span></span></td><td><div>Commands sent to an auto-conductor are processed only when the object comes online. If you see that the device is off, the commands are queued and executed as soon as the device connects to the network.</div></td></tr></tbody></table>

![](images/drex_atom_custom_3.png)

-   Additional columns in the object list for device monitoring:
    

1 — Atom IP — shows the IP address of the auto-conductor

2 — Atom Update — shows information about the last device update

3 — Atom status — the auto-conductor connection status

![Atom](images/drex_atom_screen.png)

To learn how to configure the columns of the object table, see [here](../obekty-1/spisok-obektov.html#Настройка_списка_объекта).

![](images/drex_atom_custom_4.png)

-   The tooltip with Atom information contains:
    

— the Atom IP address

— power state

— current device status

![](images/drex_atom_custom_5.png)

## Uploading and downloading files from the auto-conductor

### How to upload files:

-   In the main menu, go to the “Atom” section
    
    2\. Select an object from the list, which contains the following information:
    
-   Agent ID — the object identifier
    
-   Object — the object name
    
-   License — the license assigned to the object
    
-   MAC — the MAC address of the object
    
-   Valid until — the auto-conductor license expiration date
    
-   Comment — a user comment
    

![](images/drex_atom_custom_6.png)

3\. After selecting the object, go to the file system.

![Atom](images/drex_atom_screen_2.png)

The file system shows the files available from the object with the following information:

-   Folder — the file location in the folder hierarchy
    
-   File name — the file name
    
-   Size — the file size
    
-   Date — the file creation date
    
    Available video file types:
    
-   Files from /mnt/VREG — DVR recordings
    
-   Files from /Video/ — recordings from passenger counting cameras
    
    4\. Find the files to upload to the server.
    
     To search, select the folder you need from the drop-down list and set the file creation date using the calendar.
    

![](images/drex_atom_custom_7.png)

5\. Select the files you need by checking the boxes next to them.

![Atom](images/drex_atom_screen_3.png)

6\. Click the “Add selected to upload queue” button ![](images/drex_atom_custom_8.png).

In the file system, use two buttons to get up-to-date information:

The “Refresh” button ![](images/drex_atom_custom_9.png)— click this button to refresh the entire list of folders and files. Use this button if you have connected to the device and want to see the current folder structure, or if changes were made to the file system.

The “Refresh file information” button ![](images/drex_atom_custom_10.png) — click this button to refresh file details (size, creation date) in the current folder without reloading the whole structure. Use this button if you need to see up-to-date information about the files in the selected folder.

### How to download files:

-   Go to the “Uploaded files” tab, which shows files that have already been uploaded from Atom to the server.
    

![](images/drex_atom_custom_11.png)

2\. On this tab you see a list of files with the following information:

-   Agent ID — the agent the file was uploaded from
    
-   Object — the source object of the file
    
-   Time — the file upload time
    
-   Name — the file name
    
-   Size — the size of the uploaded file
    
    3\. To download the file you need to your device, click the download icon next to it.
