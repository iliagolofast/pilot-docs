---
title: "Звіт PetroApp Monthly"
---

Основне завдання звіту — розрахувати розбіжності витрати пального порівняно із заводськими показниками.

**PetroApp Monthly** - звіт будується лише за місяцями.

**Звіт містить:**

-   **Mileage** - це пробіг на момент здійснення транзакції.
    
-   **Transaction** - це ID транзакції.
    
-   **Fuel price** \- вартість.
    
-   **Quantity** - це об’єм у літрах.
    
-   **Effective mileage (KM)** - це загальний пробіг за період, розраховується за формулою «Пробіг останньої транзакції» мінус «Пробіг першої транзакції».
    
-   **Effective consumption (Liters)** - сума всіх літрів із транзакцій.
    

![](images/drex_otchet_petroapp_monthly__custom.png)

 До звіту потрапляють лише ті транзакції, після яких є інші транзакції.

Наприклад, транзакції:

1\. 07.03.2021 - 20 літрів

2\. 08.03.2021 - 30 літрів

3\. 09.03.2021 - 25 літрів

4\. 10.03.2021 - 40 літрів

До звіту потрапляють лише 1,2,3.

<table><tbody><tr><td><span></span></td><td><div><span>Average factory consumption (L/100KM)&nbsp;- заводський показник. Береться з налаштувань об’єкта.</span></div><div><span>Consumption result&nbsp;- різниця у відсотках.</span></div><div><span>Effective consumption Rate (L/100KM)&nbsp;- розрахунок витрати на 100 км.</span></div></td></tr></tbody></table>

Скорочений звіт **PetroApp Monthly** з підсумковими даними.

![](images/drex_otchet_petroapp_monthly__custom_2.png)

Для правильної роботи звіту також необхідно переконатися, що розмір бака відповідає автомобілю та його витраті пального.

![](images/drex_otchet_petroapp_monthly__custom_3.png)
