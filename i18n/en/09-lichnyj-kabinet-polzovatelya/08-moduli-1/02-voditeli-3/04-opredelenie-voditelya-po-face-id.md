---
title: "Driver identification by Face ID"
---

Mettax cameras can recognize the driver’s face and send the driver’s identifier to PILOT. After successful recognition, PILOT automatically assigns the driver to the object on the same principle as for iButton and RFID tags.

This function lets you determine who is operating the vehicle when several drivers use the same object.

## Preparing drivers on the device

First, drivers must be registered on the Mettax device. After registration, the device creates a faceId identifier for each driver.

<table><tbody><tr><td><span></span></td><td><div>How drivers are added depends on the camera model and settings. If you do not know how to register drivers on the device, contact the specialist who installed or configured the camera.</div></td></tr></tbody></table>

After a driver is registered, the device must:

1\. Recognize the driver’s face

2\. Send the created faceId to PILOT

3\. Send the recognition result in the faceRecogn parameter

The faceId identifier is created by the Mettax device. The value received from the device is linked [to the card](opredelenie-voditelya-po-face-id.html#Связывание_Face_ID_с_водителем) of the corresponding driver in PILOT.

## Recognition data

During a face check, the device sends the following parameters to PILOT:

-   faceId: the driver identifier created on the device
    
-   faceRecogn: the recognition result
    
-   alarm: the type of check performed
    

The faceRecogn parameter can take the following values:

-   1: the face was successfully recognized
    
-   0: the check was unsuccessful
    
-   2: the face could not be detected
    
-   3: the comparison ended with an error
    

For automatic driver assignment, the device must send faceRecogn=1.

The camera can send the following check events:

-   alarm=647: periodic driver check
    
-   alarm=648: driver check when the ignition is turned on
    

## Data display in raw points

During a face check, the Mettax camera sends the alarm, faceId, and faceRecogn parameters in the object’s raw data.

![](images/drex_opredelenie_voditelya_po_face_id_custom.png)

The highlighted row in the example shows the following values:

<table><tbody><tr><td><span></span></td><td><div>alarm=647; faceId=1; faceRecogn=1;</div></td></tr></tbody></table>

Here:

-   alarm=647: the camera performed a periodic driver check
    
-   faceId=1: the device sent driver identifier 1
    
-   faceRecogn=1: the face was successfully recognized
    

In the rows above, the camera sent:

<table><tbody><tr><td><span></span></td><td><div>faceId=20210301001; faceRecogn=0;</div></td></tr></tbody></table>

The value faceRecogn=0 shows that the face could not be recognized.

In the row with alarm=648, the check was triggered when the ignition was turned on. The value faceRecogn=0 also means the face was not recognized.

For automatic driver assignment, the faceId identifier and a successful faceRecogn=1 result must arrive in the same point at the same time. The received faceId value must match the value in the [iButton](opredelenie-voditelya-po-face-id.html) field of the driver card.

## Setting up the Face ID sensor

For PILOT to use the received faceId to identify the driver, you need to create a special sensor with the iButton purpose on the object.

1\. Add a new sensor to the object

2\. Specify the following parameters:

-   Purpose: iButton
    
-   Type: Special
    
-   Name and description
    
-   Field: for example, faceId
    
-   Conversion formula: \*%faceRecogn%. It multiplies the faceId value by the recognition result. When recognition is successful (faceRecogn=1), the faceId value does not change, and PILOT can match it with the identifier in the driver card. With other values, the formula result does not match the original faceId.
    
-   Maximum value: a value that allows the faceId identifiers in use to be stored
    

![](images/drex_opredelenie_voditelya_po_face_id_custom_2.png)

5\. If necessary, enable “Close driver session when ignition is turned off”. After the ignition is turned off, the assigned driver is no longer considered active for the object

6\. Save the sensor

### Checking the formula

Before saving the sensor, check the formula on test data.

1\. Click “Test” next to the conversion formula

![](images/drex_opredelenie_voditelya_po_face_id_custom_3.png)

2\. In the window that opens, find the faceid and faceRecogn parameters

3\. In the faceid parameter, enter a test driver identifier, for example: faceid=20210301001

The value 20210301001 is an example of a faceId created by a Mettax device.

4\. Replace the automatically filled-in faceRecogn value with 1: faceRecogn=1. 

The parameter faceRecogn=1 corresponds to successful face recognition.

5\. Click Test

If the check is successful, the result should match the faceid value: Success: 20210301001

**![](images/drex_opredelenie_voditelya_po_face_id_custom_4.png)**

The formula \*%faceRecogn% multiplies faceid by the recognition result. With faceRecogn=1 it returns the original driver identifier. With other values, the formula result does not match the original faceId.

The automatically filled-in test values are not device data. Before checking, replace faceRecogn with one of the values supported by the Mettax camera: 0, 1, 2, or 3.

## Linking Face ID to a driver

When a driver is registered, the Mettax device creates a unique faceId identifier for the driver. For PILOT to identify the driver automatically, this identifier must be entered in the driver card.

1\. Find out the faceId assigned to the driver by the Mettax device

2\. Copy the faceId value

3\. Open the card of the corresponding driver in PILOT

4\. Go to the “Main” tab

5\. Paste the faceId value into the iButton field

![Driver identification by Face ID](images/drex_opredelenie_voditelya_po_face_id_screen.png)

6\. Save the changes

The value in the iButton field must exactly match the faceId identifier sent by the camera. A separate identifier is used for each driver.

After successful recognition, the camera sends faceId and faceRecogn=1. PILOT matches the received faceId with the value in the iButton field and assigns the corresponding driver to the object.
