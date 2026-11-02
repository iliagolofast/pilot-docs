---
title: "Analytics"
---

On this tab of the “Service” module, you can:

-   [View the list of fleet objects](analitika.html#список_объектов_в_Сервисе)
    
-   [Use the dashboard to view data visually](analitika.html#дашборд_в_Сервисе)
    
-   [Track reminders and maintenance costs](analitika.html#количество_Тс_по_статусу_напоминаний_о_сервисе)
    
-   [Analyze data for each vehicle](analitika.html#Аналитика_конкретного_объекта_в_Сервисе)
    

## Objects

![](images/drex_analitika_custom.png)

The object list shows data for each vehicle:

![](images/drex_analitika_custom_2.png)

-   Number of services performed
    
-   Date of the last maintenance
    
-   Whether the service is currently active
    
-   Reminder about the next maintenance
    
-   Current mileage
    
-   Mileage until the next service
    
-   Total maintenance cost
    
-   [Quick jump to the analytics](analitika.html#Аналитика_конкретного_объекта_в_Сервисе) of the object
    

You can customize the display of the object list columns and use filters for convenient searching.

 How to customize the object list:

1\. Click the arrow ![](images/drex_analitika_custom_3.png)in the header of any column — a menu appears.

![](images/drex_analitika_custom_4.png)

2\. In the menu, you can:

-   Sort the data in ascending or descending order
    
-   Choose which columns to display
    
    To choose which columns to show:
    
-   Click “Columns” — a list of parameters available for display in the list opens
    
-   Select the check boxes next to the parameters you want to see
    

![](images/drex_analitika_custom_5.png)

Use filters to display objects in the list. 

How to use filters:

-   Set up a filter by object type — select specific types of objects to view, for example, only passenger cars or special equipment
    

![](images/drex_analitika_custom_6.png)

2\. Or, for a more precise search, use the “Show filters” button —![](images/drex_analitika_custom_7.png)

![](images/drex_analitika_custom_8.png)

3\. Filter fields appear in the table header

![](images/drex_analitika_custom_9.png)

4\. You can use filters with the following conditions:

-   Contains
    
-   Equals
    
-   Not equal
    
-   Empty / Not empty
    
-   Greater than / Greater than or equal to
    
-   Less than / Less than or equal to
    
    ![](images/drex_analitika_custom_10.png)
    

Examples

-   In the “Objects” column, select the “Contains” filter and enter part of the name — all objects with this value are displayed.
    

![](images/drex_analitika_custom_11.png)

-   In the “Last service” column, select the “Equals” filter, enter the date manually or choose it from the calendar — all objects serviced on that day are displayed.
    

![](images/drex_analitika_custom_12.png)

To refresh the object list, click the button ![](images/drex_analitika_custom_13.png).

## Dashboard

The dashboard is a screen with visual data in the form of diagrams and charts.

![](images/drex_analitika_custom_14.png)

How to work with the dashboard:

1. Expand the dashboard to full screen to work with the analytics

-   Find the button ![](images/drex_analitika_custom_15.png)
    

![Analytics](images/drex_analitika_screen.png)

-   Click it — the dashboard opens in full-screen mode, and you can focus only on the charts
    
    ![](images/drex_analitika_custom_16.png)
    
-   To exit full-screen mode, click the button ![](images/drex_analitika_custom_17.png)
    
    2\. To refresh the data on the charts, click the button ![](images/drex_analitika_custom_13.png)
    

The dashboard includes a pie chart with the number of service reminder statuses.

![](images/drex_analitika_custom_18.png)

This chart shows how many vehicles are in each service reminder status:

-   Active
    
-   Overdue
    
-   Completed
    
-   Service needed soon
    

The dashboard also has a chart with maintenance costs. It shows information about the cost of service maintenance by month.

![](images/drex_analitika_custom_19.png)

## Object analytics

To view the analytics of a specific object:

1\. Find the “Analytics” column in the object list.

![](images/drex_analitika_custom_2.png)

2\. Click the chart icon ![](images/drex_analitika_custom_20.png)

You will go to the detailed analytics, where you can calculate:

-   Life cycle estimate
    
-   Maintenance cost estimate
    
-   Fuel cost estimate
    

![](images/drex_analitika_custom_21.png)

In the analytics of a specific object, you manage the data yourself and customize the analytics to your needs. You can change the parameters at any time and immediately see the updated calculations.

### Analytics chart

The chart shows how the cost of owning the object changes over the years.

![](images/drex_analitika_custom_22.png)

All data on the chart is calculated based on the values you enter in the sections:

-   Life cycle estimate
    
-   Maintenance cost estimate
    
-   Fuel cost estimate
    

When you change these parameters, the chart is updated automatically.

![](images/drex_analitika_custom_23.png)

What is shown on the chart:

-   Bars show expenses by year:
    
    — maintenance costs
    
    — fuel costs
    
    — planned and actual values
    
-   The TCO line shows the total cost of ownership of the object for each year
    
-   The depreciation curve helps you see how the value of the object decreases over time
    
-   Cost per km shows the average cost of one kilometer of mileage, planned and actual
    

### Life cycle estimate

![](images/drex_analitika_custom_24.png)

Fill in the following fields:

-   Estimated service life (in months)
    

Specify the service life of the object or equipment in months. For example: 60 months for a car.

-   Expected purchase price.
    
    This is the price you expected to spend on the object.
    
-   Disposal cost estimate
    

How much you plan to spend on disposing of or writing off the object at the end of its service life.

-   Estimated annual mileage (in miles)
    

If it is, for example, a car, specify how many miles it travels per year.

-   Actual purchase price
    

The real amount that was spent on the purchase.

-   Estimated residual value
    

How much the object will be worth at the end of its service life.

-   Fuel consumption (l/km)
    

Specify how many liters of fuel are consumed per kilometer.

### Depreciation method

Choose the depreciation calculation method that suits your object:

-   Accelerated or double-declining balance method
    

Writes off the value quickly in the first years. A doubled straight-line depreciation rate is applied to the residual value.

For example:

A car costs $10,000, service life is 5 years

Straight-line rate = 1/5 = 20%

Doubled rate = 40%

Year 1: 10,000 × 40% = $4,000

Year 2: (10,000 – 4,000) × 40% = $2,400

This method is usually used for assets that lose value quickly or provide more benefit at the beginning of their service life.

-   Sum of years' digits
    

A smoother way of writing off value than the accelerated method. First, all years of the service life are summed, then each year's share of this sum is calculated.

For example:

Service life: 5 years

Sum of years: 1+2+3+4+5 = 15

Year 1: 5/15 of the value

Year 2: 4/15

Year 3: 3/15 and so on

The method is suitable for assets with uneven wear but without a sharp drop in value.

### Maintenance cost estimate

Enter planned and actual values by year. This shows how closely expenses match expectations.

![](images/drex_analitika_custom_25.png)

### Fuel cost estimate

Similarly, set the plan and actual for each year.

![](images/drex_analitika_custom_26.png)
