---
title: "How to prepare RFID tags for use"
---

Before you start, install an RFID reader, connect it to the tracker, and set up the transmission of identifiers to PILOT.

### 1\. Install the hardware

1\. Install the RFID reader on a vehicle or other machinery

2\. Connect the reader to the tracker that transmits data to PILOT

3\. Attach RFID tags to the objects you need to recognize. Tags can be attached, for example, to containers, trailers, equipment, checkpoints, and stationary and movable objects

### 2\. Configure the RFID reader in PILOT

1\. [Add an RFID sensor](../../datchiki-1/dobavlenie-datchika.html) to the object's sensors

![How to prepare RFID tags for use](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen.png)

2\. Select the device field in which the reader transmits the tag identifier

![How to prepare RFID tags for use](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen_2.png)

3\. Save the settings

After configuration, PILOT starts receiving identifiers from the hardware and looking for matching records in the RFID tag directory.

![](images/drex_kak_podgotovit_rfid_metki_k_rabote_custom.png)

If the reader transmits an identifier that is not in the RFID tag directory, the system cannot match it with an existing record. Such a tag may be displayed as **Unknown**.

![](images/drex_kak_podgotovit_rfid_metki_k_rabote_custom_2.png)

Once an RFID tag with the corresponding identifier is added to the system, PILOT will recognize it correctly on subsequent reads.

4\. Add the RFID tags used on your objects to the directory.

For each tag, specify its unique ID and other required parameters. After saving, PILOT will be able to match the identifiers received from the reader with the tags you created. For detailed instructions, see the article [“How to manage RFID tags”](kak-upravlyat-rfid-metkami.html).

## RFID in the object card

The object card has an RFID field. In it, you can specify the identifier of the tag associated with this object.

For example, if the monitoring object is a container with an RFID tag, enter the identifier of the installed tag in the field. PILOT uses this information in the RFID module and when generating [reports](../../otchyety-1/tipy-otchyetov/metki/index.html).

![How to prepare RFID tags for use](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen_3.png)
