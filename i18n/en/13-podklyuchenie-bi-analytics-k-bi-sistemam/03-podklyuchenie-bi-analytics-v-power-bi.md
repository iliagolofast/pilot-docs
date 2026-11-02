---
title: "Connecting BI Analytics in Power BI"
---

This article shows an example of connecting through Microsoft Power BI. You can connect in the same way to any BI system that supports working with REST API.

## How to add a query in Power BI

1\. Open Power BI Desktop

Launch Power BI Desktop on your computer. If it is not installed, download it free of charge from the official Microsoft website.

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom.png)

2\. On the main ribbon at the top, click the “Get data” button. A list of available data sources opens

![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen.png)

3\. From the list of data sources, select “Blank query”

![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_2.png)

4\. The Power Query Editor opens — a window where data queries are created and configured.

In this window, find the “Advanced Editor” button on the toolbar at the top and click it.

![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_3.png)

5\. The “Advanced Editor” window opens with an empty query template

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_2.png)

6\. Paste the query code (see the [query example](podklyuchenie-bi-analytics-v-power-bi.html#Пример_запроса_для_BI-системы) below)

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_3.png)

In the query you need to specify:

-   Server address 
    
-   Login — your login from the partner account
    
-   Password — your password from the partner account
    
-   Dates — the start and end date of the period
    
-   List of metrics — which data you want to get (see the full [list of metrics](podklyuchenie-bi-analytics-v-power-bi.html#Доступные_метрики) below)
    

7\. After pasting the code, click “Done”. Power BI starts connecting to the server and loading data

8\. After that, Power BI may show the warning “Information is required about data privacy”. Click “Continue”.

![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_4.png)

9\. The “Privacy Levels” window opens

In it, Power BI checks whether it is safe to combine and process data from the sources used in the query. In our case, the query accesses one trusted data source, and authorization is already performed inside the query itself. So that Power BI does not block loading or interfere with the query, select the “Skip privacy level checks for this file” checkbox.

Then click “Save”.

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_4.png)

10\. After you save, Power BI runs the query and opens a data preview in the Power Query Editor. A table with columns and rows appears on the screen — this is the data returned by your query.

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_5.png)

11\. Click “Close & Apply”. The data is then loaded into Power BI, and you can work with it.

![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_5.png)

You can now use the loaded data to create charts, tables and other visual elements. ![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_6.png)

The following panes are usually displayed on the right of the main Power BI Desktop window:

-   Visualizations — this is where the types of charts, diagrams, cards, tables and other visual elements are located. Select the type you need, then fill it with your fields
    
-   Data — this shows the list of tables and fields loaded from your query, for example, date, object ID, mileage, fuel consumption, average speed. Use these fields in visualizations: select them with checkboxes, drag them with the mouse or swap them
    
-   Filters — here you can limit the data by the conditions you need
    

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_7.png)

## How to build a chart

1\. In the “Visualizations” pane, click the chart type you need. An empty chart template appears on the report canvas

2\. In the “Data” pane, select the fields you want to show

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_8.png)

3\. Power BI automatically places the fields in the chart

In Power BI you can combine data:

-   add the same field to different charts
    
-   compare several indicators
    
-   build several visualizations on one page
    
-   replace fields without recreating the report
    

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_9.png)

## If the query does not refresh or login errors occur

Sometimes Power BI may keep the previous connection parameters for the data source. Because of this, even after you change the login, password or server address, the query may keep returning an authorization error. In this case, clear the saved permissions for the data source.

How to clear permissions:

1\. In the Power Query Editor, click “Data source settings” on the toolbar

2\. In the window that opens, select the data source you need, for example, your server address ![Connecting BI Analytics in Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_6.png)

1 — “Data source settings” button

2 — Selecting the data source

3 — “Clear Permissions” button

3\. Click “Clear Permissions”

4\. In the confirmation window, click “Delete”

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_10.png)

5\. Run the query again. Power BI then applies the connection parameters anew
