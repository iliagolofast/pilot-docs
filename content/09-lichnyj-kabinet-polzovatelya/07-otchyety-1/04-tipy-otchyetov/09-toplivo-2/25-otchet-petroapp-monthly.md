---
title: "Отчет PetroApp Monthly"
source: otchet_petroapp_monthly_.html
---

Основная задача отчета рассчитать расхождения расхода топлива по сравнению с заводскими показателями.

**PetroApp Monthly** - отчет строится только по месяцам.

**Отчёт содержит:**

-   **Mileage** - это пробег на момент совершения транзакции.
    
-   **Transaction** - это ID транзакции.
    
-   **Fuel price** \- стоимость.
    
-   **Quantity** - это объем в литрах.
    
-   **Effective mileage (KM)** - это общий пробег за период рассчитывается по формуле "Пробег последней транзакции" минус "Пробег первой транзакции".
    
-   **Effective consumption (Liters)** - сумма все литров из транзакций.
    

![](images/drex_otchet_petroapp_monthly__custom.png)

 В отчет попадают только те транзакции, за которыми есть другие транзакции.

Например транзакции:

1\. 07.03.2021 - 20 литров

2\. 08.03.2021 - 30 литров

3\. 09.03.2021 - 25 литров

4\. 10.03.2021 - 40 литров

В отчет попадают только 1,2,3.

<table><tbody><tr><td><span></span></td><td><div><span>Average factory consumption (L/100KM)&nbsp;- заводской показатель. Берется из настроек объекта.</span></div><div><span>Consumption result&nbsp;- разница в процентах.</span></div><div><span>Effective consumption Rate (L/100KM)&nbsp;- расчет расхода на 100 км.</span></div></td></tr></tbody></table>

Сокращенный отчет  **PetroApp Monthly**   с итоговыми  данными.

![](images/drex_otchet_petroapp_monthly__custom_2.png)

Для правильной  работы  отчета  так же  необходимо убедиться, что  размер  бака соответствует автомобилю и его  расходу  топлива.

![](images/drex_otchet_petroapp_monthly__custom_3.png)
