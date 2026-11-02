---
title: "Setting up Tripia retranslation"
---

Tripia is a data retranslation protocol designed for transmitting vehicle telematics information to the external Tripia system in JSON format.

The Tripia protocol can transmit:

— vehicle coordinates and speed

— Trip data

— vehicle status

— Sensor data

— GPS, ADAS and DMS Events

— CAN bus data

— Driver identification information

Data is transmitted in real time.

## How to add a retranslation

1\. Go to the admin panel

2\. Go to the “Machines” tab

3\. Find the Object you need, right-click it and select “Retranslation” in the menu

**![](images/drex_nastrojka_retranslyatsii_tripia_custom.png)**

4. In the window that opens, click the button for adding a retranslation ![](images/drex_nastrojka_retranslyatsii_tripia_custom_2.png)

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_3.png)**

5\. In the “Configuration” window, fill in the fields to set up the retranslation

### Connection parameters

When creating an endpoint, specify the following parameters:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Value</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tripia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 64.225.12.166</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 3000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Protocol</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Data format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;JSON</span></div></td></tr></tbody></table>

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_4.png)**

### Data transfer frequency

Data is transmitted automatically:

— every 30 seconds when the ignition is on

— every 1 minute when the ignition is off

## Transmitted data

### Provider information

The data of the organization that owns the vehicle is transmitted:

-   provider name (Provider Name)
    
-   provider code (Provider Code)
    

### Vehicle information

The following is transmitted:

-   vehicle identifier
    
-   license plate number
    
-   dispatcher data
    

### Event registration data

The following is transmitted:

-   event time (Event Timestamp)
    
-   data sending time (Sent Timestamp)
    

### GPS data

The main navigation parameters are transmitted:

-   latitude (Latitude)
    
-   longitude (Longitude)
    
-   speed (Speed)
    
-   heading (Heading)
    
-   altitude (Altitude)
    
-   number of satellites (Satellites)
    
-   HDOP
    
-   PDOP
    

### Connection data

Mobile network parameters are transmitted:

-   signal level
    
-   mobile operator (MCC/MNC)
    
-   connection type
    
-   Cell ID
    

### Vehicle status

The following is transmitted:

-   ignition
    
-   movement
    
-   odometer
    
-   engine hours
    
-   battery voltage
    

### GPS Events

The following Events are transmitted:

-   battery disconnection
    
-   signal jamming (Jamming)
    
-   loss of satellites
    
-   vehicle towing
    
-   loss of communication signal
    
-   restoration of communication signal
    
-   harsh acceleration
    
-   harsh turn
    
-   harsh braking
    
-   accident (Crash)
    

### GPS Sensor data

Transmission of data from the following Sensors is supported:

-   Temperature Sensors
    
-   Door and body state Sensors:
    
    — driver door
    
    — passenger door
    
    — side cargo door
    
    — rear cargo door
    
    — engine hood
    
-   Additional Sensors:
    
    — panic button (Panic Button)
    

### Telemetry

Flags indicating the presence of the following subsystems are transmitted:

-   ADAS
    
-   DMS
    
-   Refrigerator
    
-   CAN Bus
    
-   Driver ID
    

### ADAS Events

Driver assistance system Events are transmitted:

-   FCW (forward collision warning)
    
-   LDW (lane departure warning)
    
-   LDWL
    
-   LDWR
    
-   PCW
    
-   PROX
    

### DMS Events

Driver monitoring system Events are transmitted:

-   blocking
    
-   face lost (Face Lost)
    
-   distraction
    
-   frequent yawning
    
-   looking aside
    
-   smoking
    
-   talking on the phone
    
-   drowsiness
    
-   seat belt not fastened
    

### CAN bus data

The following is transmitted:

-   fuel level (%)
    
-   fuel volume (liters)
    
-   fuel load
    
-   fuel consumption
    
-   speed
    
-   odometer
    
-   engine hours
    
-   driver door state
    
-   passenger door state
    

### Driver identification (Driver ID)

The following is transmitted:

-   identifier type
    
-   identifier code
    
-   Driver ID
    
-   Driver name
    

## Example of the transmitted packet structure

When transmitting data to Tripia, the system generates a JSON packet containing information about the vehicle, location, Sensors, Events and telemetry.

Example of the packet structure:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "provider": {</span></div><div><span>&nbsp; &nbsp; "name": "Providers Name",</span></div><div><span>&nbsp; &nbsp; "code": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dispatcher": {</span></div><div><span>&nbsp; &nbsp; "name": "Dispatcher Name",</span></div><div><span>&nbsp; &nbsp; "identifier": "1234abc",</span></div><div><span>&nbsp; &nbsp; "licensePlate": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "registry": {</span></div><div><span>&nbsp; &nbsp; "eventTimestamp": "2016-01-01T00:00:00Z",</span></div><div><span>&nbsp; &nbsp; "sentTimestamp": "2016-01-01T00:00:00Z"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gps": {</span></div><div><span>&nbsp; &nbsp; "latitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "longitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "speed": 100,</span></div><div><span>&nbsp; &nbsp; "heading": 123,</span></div><div><span>&nbsp; &nbsp; "altitude": 123,</span></div><div><span>&nbsp; &nbsp; "satellites": 12,</span></div><div><span>&nbsp; &nbsp; "hdop": 1.2,</span></div><div><span>&nbsp; &nbsp; "pdop": 1.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "connection": {</span></div><div><span>&nbsp; &nbsp; "signal": 85,</span></div><div><span>&nbsp; &nbsp; "operatorMCCMNC": "Entel",</span></div><div><span>&nbsp; &nbsp; "type": 2,</span></div><div><span>&nbsp; &nbsp; "cellID": 123456789</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; "ignition": 1,</span></div><div><span>&nbsp; &nbsp; "movement": 1,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "hourMeter": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "battery": 12.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsEvents": {</span></div><div><span>&nbsp; &nbsp; "batteryDisconnected": 0,</span></div><div><span>&nbsp; &nbsp; "jamming": 1,</span></div><div><span>&nbsp; &nbsp; "satellitesLost": 0,</span></div><div><span>&nbsp; &nbsp; "towedVehicule": 1,</span></div><div><span>&nbsp; &nbsp; "signalLost": 0,</span></div><div><span>&nbsp; &nbsp; "signalRecovered": 1,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driving": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshAcceleration": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshTurn": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshBraking": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "crash": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsSensors": {</span></div><div><span>&nbsp; &nbsp; "temperature1": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature2": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature3": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature4": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature5": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature6": 12.3,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 0,</span></div><div><span>&nbsp; &nbsp; "sideLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "rearLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "engineHood": 1,</span></div><div><span>&nbsp; &nbsp; "panicButton": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "telemetry": {</span></div><div><span>&nbsp; &nbsp; "adas": 0,</span></div><div><span>&nbsp; &nbsp; "dms": 1,</span></div><div><span>&nbsp; &nbsp; "reefer": 0,</span></div><div><span>&nbsp; &nbsp; "canbus": 1,</span></div><div><span>&nbsp; &nbsp; "driverid": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "adasEvents": {</span></div><div><span>&nbsp; &nbsp; "fcw": 1,</span></div><div><span>&nbsp; &nbsp; "ldw": 1,</span></div><div><span>&nbsp; &nbsp; "ldwl": 1,</span></div><div><span>&nbsp; &nbsp; "ldwr": 1,</span></div><div><span>&nbsp; &nbsp; "pcw": 1,</span></div><div><span>&nbsp; &nbsp; "prox": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dmsEvents": {</span></div><div><span>&nbsp; &nbsp; "blocked": 0,</span></div><div><span>&nbsp; &nbsp; "faceLost": 0,</span></div><div><span>&nbsp; &nbsp; "distraction": 0,</span></div><div><span>&nbsp; &nbsp; "frequentYawning": 0,</span></div><div><span>&nbsp; &nbsp; "lookingAside": 1,</span></div><div><span>&nbsp; &nbsp; "smoking": 0,</span></div><div><span>&nbsp; &nbsp; "calling": 1,</span></div><div><span>&nbsp; &nbsp; "drowsiness": 0,</span></div><div><span>&nbsp; &nbsp; "seatbelt": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "canbusData": {</span></div><div><span>&nbsp; &nbsp; "fuelPercent": 12,</span></div><div><span>&nbsp; &nbsp; "fuelLiters": 128,</span></div><div><span>&nbsp; &nbsp; "fuelLoad": 80,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "speed": 123,</span></div><div><span>&nbsp; &nbsp; "fuelConsumption": 11.12,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 1,</span></div><div><span>&nbsp; &nbsp; "engineHours": 12345678.9</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "driveridData": {</span></div><div><span>&nbsp; &nbsp; "type": 1,</span></div><div><span>&nbsp; &nbsp; "codeId": "123456789",</span></div><div><span>&nbsp; &nbsp; "driverName": "Nombre conductor",</span></div><div><span>&nbsp; &nbsp; "driverId": "123456789"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

The example is given to illustrate the data structure. The actual set of fields depends on the connected hardware, the retranslation settings and the Sensors available on the vehicle.
