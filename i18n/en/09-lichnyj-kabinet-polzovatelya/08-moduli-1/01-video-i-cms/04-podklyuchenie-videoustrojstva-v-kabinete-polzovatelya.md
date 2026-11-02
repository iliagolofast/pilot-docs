---
title: "Connecting a video device in the user account"
---

After the administrator has [configured the modules](nastrojka-modulej-v-paneli-administratora.html) “Video” and “CMS” in the admin panel, the user needs to create an object and set up the cameras.

## Creating an object

1\. Log in to the user account

2\. Go to the “Main” section

3\. Click “Create object” ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom.png)

![Connecting a video device in the user account](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen.png)

4\. Fill in the data in the [object card](../../obekty-1/kartochka-obekta/index.html):

-   Vehicle number or object name
    
-   Device ID
    
    5\. In the “Device type” field, select:
    
-   CMS, if you have a CMS device
    
-   Howen, if you have a Howen device
    
-   or other types
    

![Connecting a video device in the user account](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_2.png)

1 — Device type

2 — Template. For CMS, the system already has ready-made global templates (settings for quick connection)

Other devices have no templates, so simply select the device type.

6\. Click “Save”. The settings are applied and the object appears in the list.

## Setting up cameras for an object

After saving the object, you need to specify how many cameras are connected and how they will work.

1\. Open the object card by double-clicking the object in the list

2\. Go to the “Video” tab

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_2.png)

3\. Click “Add camera” ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_3.png)

4\. Specify:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_4.png)

-   Camera name
    
-   Device type
    
-   Channel number
    
    If you select the Main stream check box, the camera transmits high-quality video (a sharper picture with more detail), but internet traffic consumption is higher.
    

If you leave the check box cleared, the sub-stream is used: the picture quality is lower, but traffic is used more economically.

5\. Click “Save”

6\. Repeat for all the cameras you want to add

## Connecting an additional video device

In PILOT you can add an additional video device to an object if you already have a primary device (for example, Teltonika).

This is useful, for example, when:

-   Teltonika collects telemetry (speed, tracks, sensors),
    
-   while CMS or Howen handles video.
    

This way, one object can work with both GPS data and a video stream at the same time.

### Adding an additional device

1\. Open the object card

![Connecting a video device in the user account](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_3.png)

2\. Go to the “Additional IMEI” field and click ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_5.png)

3\. In the window that opens, click the “Add” button

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_6.png)

4\. Select the device type from the list

5\. When adding the device, you can select parameters:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_7.png)

-   Ignore coordinates
    
    Coordinates from the additional video device will not be used, since the primary device already transmits coordinates.
    
-   Ignore Retrans
    
    Data retransmission from the additional device will be disabled so that data is not duplicated and does not interfere with the primary telematics.
    

6\. Click “Save”, and do not forget to also save the changes in the object card.
