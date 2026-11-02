---
title: "RFID tags"
---

The “RFID tags” module is designed for creating and managing RFID tags, which are used for automatic identification of objects in the monitoring system.

Tags help the system determine which object a vehicle interacted with. For example, they can be used to determine which container a garbage truck serviced or which checkpoint a vehicle visited.

![](images/drex_rfid_metki_2_custom.png)

In the module, you can:

— [add RFID tags](kak-upravlyat-rfid-metkami.html#Как_добавить_RFID-метку) and [combine them into groups](kak-upravlyat-rfid-metkami.html#Как_создать_группу_RFID-меток)

— [check the time of the last read](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_проверить_последнее_считывание)

— [view the location of a tag on the map](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_показать_одну_метку_на_карте)

— [view the read history](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_посмотреть_историю_RFID-метки)

## How RFID tags work

RFID requires two elements:

— RFID reader — a device on the vehicle that detects nearby tags

— RFID tag — a device with a unique identifier, installed on a container, trailer, equipment, or another object

When a tag comes within range of the reader:

1\. The RFID reader on the vehicle detects the tag

2\. The reader receives the tag's unique identifier and transmits it to PILOT

3\. PILOT looks for a tag with this identifier in the RFID tag directory

4\. If the tag is found, the system updates the information about its last read

5\. If automatic actions are defined for the tag or its associated object, the system performs them

## Where RFID tags are used

### Automatic trailer linking

An RFID tag is installed on the trailer and a reader on the tractor unit. When the trailer comes within range of the reader, PILOT recognizes the tag and can automatically link the trailer to the vehicle.

### Route control

RFID or BLE tags are installed at checkpoints: at stops, warehouses, company premises, and other locations. When a vehicle is near a tag, PILOT records the visit to the checkpoint.

### Container servicing control

RFID tags are installed on containers, and readers on garbage trucks or other service machinery. On each read, PILOT saves information about the container, the time and place of service, and the vehicle that performed the work.

### Vehicle identification

RFID tags help recognize vehicles when entering company premises, passing checkpoints, and performing production operations.

### Driver identification

A personal RFID tag can be assigned to a driver. After the read, PILOT identifies the driver and can link a trip, events, or completed work to them.
