---
title: "Request Parameters and Available Metrics"
---

When sending requests to the BI Analytics API, you must specify parameters that define which data to retrieve and in what form to return it.

In addition to the request parameters, you must select metrics — the indicators that will be included in the result. They determine what data the API returns, for example mileage, fuel consumption, number of trips or eco-driving violations.

## Main request parameters

Request parameters define the data source, the way the data is grouped and additional selection conditions.

### source

The source field defines which data the selection is built from.

Available values:

-   vehicle — vehicle data
    
-   driver — driver data
    

### group\_by

The group\_by field defines how to group the result.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Value</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; What it shows</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Example response structure</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; total</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Total for all vehicles or drivers for the period</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "metric": 123 }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Total for all vehicles or drivers for each day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "20260301": { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Each source, total for the period</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Each source, each day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "20260301": { "metric": 123 } } }</span></div></td></tr></tbody></table>

### ACCOUNT\_ID

The ACCOUNT\_ID parameter lets you limit the export to the data of a single contract.

If the request specifies the login and password of a partner account, then without ACCOUNT\_ID the system exports all vehicles under all contracts available to this partner.

If you specify ACCOUNT\_ID in the request, only the objects of the selected contract will be loaded.

## Available metrics

Metrics define which indicators the API returns. They are passed in the metrics parameter as a list.

For example:

<table><tbody><tr><td><span></span></td><td><div><span>metrics = [</span></div><div><span>&nbsp; &nbsp; "veh_driving_dist",</span></div><div><span>&nbsp; &nbsp; "veh_fuel_cons",</span></div><div><span>&nbsp; &nbsp; "average_speed"</span></div><div><span>]</span></div></td></tr></tbody></table>

Below is the list of supported metrics.

### Vehicles — general

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of trips</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mileage (km)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driving time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Parking time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_ignition_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ignition-on time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Idle time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_motor_hours</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Engine hours</span></div></td></tr></tbody></table>

### Vehicles — fuel

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel consumption</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel refueled</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel drained</span></div></td></tr></tbody></table>

### Vehicles — violations

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Eco-driving penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of eco-driving violations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh acceleration penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh accelerations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh braking penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh brakings</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh turning penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh turns</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of speeding events</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unfastened seat belt penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of seat belt violations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Idling penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of idling violations</span></div></td></tr></tbody></table>

### Vehicles — costs

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel cost per km</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_service_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Maintenance cost per km</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_amount_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Total expenses</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;cost_of_using</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cost of use</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;average_speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Average speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_cars_counter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of vehicles</span></div></td></tr></tbody></table>

### Drivers

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of trips</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mileage (km)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driving time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Parking time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel consumption</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel refueled</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel drained</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Eco-driving penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of eco-driving violations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh acceleration penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh accelerations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh braking penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh brakings</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh turning penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of harsh turns</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of speeding events</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Unfastened seat belt penalty</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number of seat belt violations</span></div></td></tr></tbody></table>

### Metrics for individual eco-event types

To get data on individual types of [Eco-driving](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/index.html) events, use metrics in the following format:

-   eco\_{N}\_fine — number of penalty points for the event type
    
-   eco\_{N}\_cnt — number of registered events of this type
    

Here N is the identifier (ID) of the driving quality event type.

Each event type has its own unique ID, which the system assigns automatically when the type is created. This identifier is used in the API to form metric names.

For example, in the [types directory](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) of driving quality, the standard events may have the following identifiers:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ID</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Event type</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat Belt</span></div></td></tr></tbody></table>

![](images/drex_parametry_zaprosov_i_dostupnye_metriki_custom.png)

If [custom event types have been created](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:) in the system, they are also assigned unique IDs automatically.

When composing a request, specify the ID of the required event type instead of N.

### Examples

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; What it returns</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_1_fine / eco_1_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty points and number of Acceleration events</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_2_fine / eco_2_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty points and number of Braking events</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_4_fine / eco_4_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty points and number of Speed events</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;eco_5_fine / eco_5_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty points and number of Seat Belt events</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>You can view event type identifiers <a href="../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения"><span>in the “Driving quality types” directory</span></a>. The value is shown in the ID column. When a new type is created, the system automatically assigns it a unique identifier, which is then used in BI Analytics API metrics.</div></td></tr></tbody></table>
