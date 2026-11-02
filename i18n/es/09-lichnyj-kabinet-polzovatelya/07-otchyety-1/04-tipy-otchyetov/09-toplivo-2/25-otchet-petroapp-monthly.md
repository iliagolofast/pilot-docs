---
title: "Informe PetroApp Monthly"
---

La tarea principal del informe es calcular las discrepancias del consumo de combustible respecto a los valores de fábrica.

**PetroApp Monthly** - el informe se genera solo por meses.

**El informe contiene:**

-   **Mileage** - es el kilometraje en el momento de realizar la transacción.
    
-   **Transaction** - es el ID de la transacción.
    
-   **Fuel price** \- coste.
    
-   **Quantity** - es el volumen en litros.
    
-   **Effective mileage (KM)** - es el kilometraje total del período, que se calcula con la fórmula "Kilometraje de la última transacción" menos "Kilometraje de la primera transacción".
    
-   **Effective consumption (Liters)** - suma de todos los litros de las transacciones.
    

![](images/drex_otchet_petroapp_monthly__custom.png)

 En el informe solo se incluyen las transacciones que van seguidas de otras transacciones.

Por ejemplo, las transacciones:

1\. 07.03.2021 - 20 litros

2\. 08.03.2021 - 30 litros

3\. 09.03.2021 - 25 litros

4\. 10.03.2021 - 40 litros

En el informe solo se incluyen la 1, la 2 y la 3.

<table><tbody><tr><td><span></span></td><td><div><span>Average factory consumption (L/100KM)&nbsp;- valor de fábrica. Se toma de la configuración del objeto.</span></div><div><span>Consumption result&nbsp;- diferencia en porcentaje.</span></div><div><span>Effective consumption Rate (L/100KM)&nbsp;- cálculo del consumo por 100 km.</span></div></td></tr></tbody></table>

Informe abreviado **PetroApp Monthly** con datos totales.

![](images/drex_otchet_petroapp_monthly__custom_2.png)

Para que el informe funcione correctamente, también es necesario comprobar que el tamaño del depósito corresponda al vehículo y a su consumo de combustible.

![](images/drex_otchet_petroapp_monthly__custom_3.png)
