---
title: "Weather on the map"
---

The system has built-in weather visualization from Windy.com, an online platform with interactive weather maps and forecasts.

Weather data is displayed on top of the map and is automatically synchronized with its panning and zooming.

![Weather on the map](images/drex_pogoda_na_karte_screen.png)

## How to connect the weather layer

-   Getting an API key
    
    1) Register on the Windy API portal
    
    2) Create an API key
    
    3.) You will receive a key in this format: 4epwZKT8erOIe6Boq2gfdhffs50ky
    

By default, a trial (test) key is issued

Trial limitations:

— the GFS model is available

— available layers: wind, temperature, pressure

2\. Setting up the key in PILOT

To make the weather layer available:

1.) The Windy [configuration must be connected](../../../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html) in the contract

2.) In the admin panel, add the following parameter in the contract settings:

windy\_api\_key = your\_key

![](images/drex_pogoda_na_karte_custom.png)

After you save the settings, the weather functionality becomes available to the contract's users.

## How to enable weather

1\. Open the map

2\. A “Weather” checkbox appears in the list of layers

![Weather on the map](images/drex_pogoda_na_karte_screen_2.png)

3\. Select the checkbox

4\. After you enable it, the weather layer appears on top of the map, and the forecast time panel is displayed at the bottom

![](images/drex_pogoda_na_karte_custom_2.png)

To turn weather off, just clear the checkbox.

## How to choose a forecast model

Click the globe icon ![](images/drex_pogoda_na_karte_custom_3.png) in the weather panel and select a model.

![](images/drex_pogoda_na_karte_custom_4.png)

The availability of models depends on the plan.

**Free**

-   GFS: a global model with basic detail. Suitable for a general understanding of the weather situation around the world
    

**Pro**

-   ICON: high detail for Europe
    
-   NAM: an accurate model for North America
    
-   AROME: very high detail (especially for France and nearby regions)
    
-   GEOS5: a NASA model for global analysis
    
-   CAMS: an air quality monitoring model
    
-   HRRR: frequent hourly updates for the USA
    

**ECMWF** (with a separate subscription)

-   ECMWF: one of the most accurate global forecast models, used for professional analysis
    

The system automatically detects the plan and shows only the available models.

## How to choose the weather layer type

Click the drop-down arrow and select the data type.

![](images/drex_pogoda_na_karte_custom_5.png)

**Free:**

-   Wind
    
-   Temperature
    
-   Pressure
    

![](images/drex_pogoda_na_karte_custom_6.png)

**Pro** (additionally):

-   Humidity
    
-   Precipitation
    
-   Thunderstorms
    
-   Cloud cover
    
-   Visibility
    
-   Satellite images
    
-   Weather radar
    
    and other professional parameters.
    
    After you make a selection, the map updates automatically.
    

## How to work with the time panel

When the weather layer is on, a time panel appears at the bottom of the map. It helps you view the forecast by hours and days.

-   ![](images/drex_pogoda_na_karte_custom_7.png) Play: starts the forecast animation. The map shows how the weather changes over time
    
-   ![](images/drex_pogoda_na_karte_custom_8.png) Pause: stops the animation at the selected moment
    
-   Time slider: drag it manually to go to the date and time you need
    

The panel is shown only when the weather layer is on. If you turn weather off, the panel is hidden automatically.

![](images/drex_pogoda_na_karte_custom_9.png)
