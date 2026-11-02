---
title: "PetroApp Monthly Report"
---

The main purpose of the report is to calculate discrepancies in fuel consumption compared with factory figures.

**PetroApp Monthly** - the report is built by month only.

**The report contains:**

-   **Mileage** - the mileage at the time of the transaction.
    
-   **Transaction** - the transaction ID.
    
-   **Fuel price** \- the cost.
    
-   **Quantity** - the volume in liters.
    
-   **Effective mileage (KM)** - the total mileage for the period, calculated by the formula "Mileage of the last transaction" minus "Mileage of the first transaction".
    
-   **Effective consumption (Liters)** - the sum of all liters from the transactions.
    

![](images/drex_otchet_petroapp_monthly__custom.png)

 Only transactions that are followed by other transactions are included in the report.

For example, transactions:

1\. 07.03.2021 - 20 liters

2\. 08.03.2021 - 30 liters

3\. 09.03.2021 - 25 liters

4\. 10.03.2021 - 40 liters

Only 1, 2, 3 are included in the report.

<table><tbody><tr><td><span></span></td><td><div><span>Average factory consumption (L/100KM)&nbsp;- the factory figure. It is taken from the Object settings.</span></div><div><span>Consumption result&nbsp;- the difference as a percentage.</span></div><div><span>Effective consumption Rate (L/100KM)&nbsp;- the calculated consumption per 100 km.</span></div></td></tr></tbody></table>

The abbreviated **PetroApp Monthly** report with summary data.

![](images/drex_otchet_petroapp_monthly__custom_2.png)

For the report to work correctly, also make sure that the tank size matches the vehicle and its fuel consumption.

![](images/drex_otchet_petroapp_monthly__custom_3.png)
