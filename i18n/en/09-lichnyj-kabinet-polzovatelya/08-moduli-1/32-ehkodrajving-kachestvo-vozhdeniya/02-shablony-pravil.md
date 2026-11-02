---
title: "Rule templates"
---

A rule template is a saved set of driving quality settings. With a template you can apply ready-made rules to a vehicle without configuring each rule manually. You can pick a template by device type and vehicle type, apply it to an object, or create your own.

In this article:

-   [Ready-made templates](shablony-pravil.html#Готовые_шаблоны)
    
-   [How to apply a template](shablony-pravil.html#Как_применить_шаблон)
    
-   [How to create a template](shablony-pravil.html#Как_создать_собственный_шаблон)
    
-   [How to set up template applicability](shablony-pravil.html#Как_настроить_применимость_шаблона)
    
-   [Importing and exporting rules](shablony-pravil.html#Импорт_и_экспорт_правил)
    

## Ready-made templates

To open the template list:

1\. Open the vehicle card

2\. Go to the “Driving quality” tab

3\. Expand the “Template” list

The list shows the suitable templates and a separate “Universal templates” group.

![](images/drex_shablony_pravil_custom.png)

 Universal templates are not tied to a specific device or vehicle type, so they can be applied to different vehicles.

The system also provides ready-made templates for certain telematics equipment models:

-   CIPIA
    

![](images/drex_shablony_pravil_custom_2.png)

-   FLEX — for devices working over the Flex protocol, for example Smart 2333
    

![](images/drex_shablony_pravil_custom_3.png)

-   GB100 ECO — for Queclink GB100
    

![](images/drex_shablony_pravil_custom_4.png)

-   GV65 ECO — for Queclink GV65
    

![](images/drex_shablony_pravil_custom_5.png)

-   Ruptela
    

![](images/drex_shablony_pravil_custom_6.png)

-   Teltonika
    

![](images/drex_shablony_pravil_custom_7.png)

Choose the template that matches the equipment and vehicle type.

## How to apply a template

1\. Open the “Driving quality” tab

2\. In the “Template” field, select the template you need

![](images/drex_shablony_pravil_custom.png)

3\. Click “Apply” ![](images/drex_shablony_pravil_custom_8.png)

![Rule templates](images/drex_shablony_pravil_screen.png)

4\. The rules from the template are loaded into the table. Check them and click “Save” at the bottom of the vehicle card.

![](images/drex_shablony_pravil_custom_9.png)

<table><tbody><tr><td><span></span></td><td><div>When a new vehicle is created, PILOT selects templates by device type and vehicle type. If the vehicle type is not specified, the “Passenger car” type is used for selection, but the field in the card is not filled in automatically.</div></td></tr></tbody></table>

## How to create your own template

First set up the driving quality rules. To add a rule:

1\. Click the plus icon ![](images/drex_shablony_pravil_custom_10.png)

2\. Fill in the rule parameters

3\. Click “Save” in the rule row

![](images/drex_shablony_pravil_custom_11.png)

To save the configured rules as a template:

1\. Click the save icon ![](images/drex_shablony_pravil_custom_12.png) next to the “Template” list

![Rule templates](images/drex_shablony_pravil_screen_2.png)

2\. In the “Save as template” window, specify:

-   Template name
    
-   Device type — optional
    
-   Vehicle type — optional
    

![](images/drex_shablony_pravil_custom_13.png)

3\. Click “Save”

<table><tbody><tr><td><span></span></td><td><div>If you leave the device type or vehicle type blank, the template can be used with any value of that parameter.</div></td></tr></tbody></table>

The created template appears in the list of available templates.

![](images/drex_shablony_pravil_custom_14.png)

## How to set up template applicability

Applicability defines which devices and vehicles the template will be available for.

### Template scope

A template can be linked:

— to a device type and a vehicle type

— to a device type only

— to a vehicle type only

-   — to neither type — such a template is considered universal
    

<table><tbody><tr><td><span></span></td><td><div>If the device type is not specified, the template can be used with any device. If the vehicle type is not specified, the template suits all vehicle types.</div></td></tr></tbody></table>

### To set up applicability:

-   In the upper right part of the window, find the tools for managing eco-driving settings
    

![Rule templates](images/drex_shablony_pravil_screen_3.png)

2.  Click the icon

### ![](images/drex_shablony_pravil_custom_15.png)

at the top of the “Driving quality” tab

3\. In the “Template applicability” window, select:

-   Device type
    
-   Vehicle type
    
-   Template
    

![](images/drex_shablony_pravil_custom_16.png)

-   Device type
    
-   Vehicle type
    
-   Template
    
    3\. Click “Link”
    

In the “Device type” field you can select a specific equipment model.

![](images/drex_shablony_pravil_custom_17.png)

In the “Vehicle type” field you can select a specific vehicle type or leave the value “For all vehicle types”.

![](images/drex_shablony_pravil_custom_18.png)

In the “Template” field, select the template for which applicability is being set up.

![](images/drex_shablony_pravil_custom_19.png)

For example, a template can be linked to a FleetGuide device and the “Passenger car” vehicle type.

![](images/drex_shablony_pravil_custom_20.png)

To clear the selected value, click the cross icon in the corresponding field.

After linking, PILOT takes the device type and vehicle type into account when selecting available templates. A template is not applied automatically: you choose it and confirm the application.

<table><tbody><tr><td><span></span></td><td><div>After a template is applied, its rules are copied into the vehicle settings.</div><div>If you change the rules manually, the settings will differ from the original template. Later changes to the template itself also will not change the settings of vehicles it was applied to earlier.</div></td></tr></tbody></table>

## Importing and exporting rules

Import and export let you transfer rules between vehicles or save a copy of them.

At the top of the “Driving quality” window, find the export and import tools.

![Rule templates](images/drex_shablony_pravil_screen_4.png)

**Export **![](images/drex_shablony_pravil_custom_21.png) — saves the current rules to a JSON file

To do this:

1\. Click the export button

2\. Save the file to your computer

All rule parameters are saved to the JSON file.

**Import **![](images/drex_shablony_pravil_custom_22.png) — loads a previously saved JSON file

To do this:

1\. Click the import button

2\. Select the file

3\. The settings are loaded into the table automatically

<table><tbody><tr><td><span></span></td><td><div>Imported rules replace the current set of rules in the table. If needed, save the existing settings with export before importing a new file.</div></td></tr></tbody></table>
