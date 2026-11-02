---
title: "Cómo configurar las columnas del informe"
---

Para que el informe contenga los datos necesarios, en el constructor hay que añadir y configurar columnas. Cada columna determina qué información se mostrará en el informe y cómo se procesará.

Para añadir una columna:

1\. En el constructor de informes haga clic en el botón ![](images/drex_kak_nastroit_kolonki_otchyeta_custom.png)  del bloque «Columnas»

2\. Rellene los parámetros de la nueva columna

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_2.png)

### Parámetros de la columna

1\. Nombre

Indique el nombre de la columna que se mostrará en el encabezado del informe.

2\. Datos

Seleccione en la lista desplegable el campo de datos que se utilizará en la columna

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_3.png)

3\. Grupos de sensores

Seleccione el grupo de sensores cuyos valores deben mostrarse en la columna. Al generar el informe, el sistema mostrará automáticamente los valores de los sensores del grupo seleccionado.

Los informes admiten la visualización de valores de sensores discretos, de dos posiciones y multiposición.

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_4.png)

4\. Total Functions (Valores totales)

Este parámetro determina cómo calculará el sistema los valores totales en la parte inferior de la tabla (en la fila resumen).  
**![](images/drex_kak_nastroit_kolonki_otchyeta_custom_5.png)**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Valor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué hace</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Ninguno</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No se calcula el valor total de la columna</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Suma</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Suma todos los valores de la columna</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Media</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula la media aritmética (suma ÷ número de objetos)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Máx.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Muestra el valor máximo de la columna</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Mín.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Muestra el valor mínimo de la columna</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Fórmula</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Permite definir una fórmula de cálculo propia</span></div></td></tr></tbody></table>

Puede seleccionar varias funciones a la vez para una misma columna.

Ejemplo de uso de valores totales en un informe de kilometraje:

-   Kilometraje por CAN — Suma, Máx.
    
-   Kilometraje por GPS — Mín.
    
-   Kilometraje por CAN al inicio — Suma
    
-   Kilometraje por CAN al final — Media
    

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_6.png)

En el informe generado aparecerán en la parte inferior de la tabla las filas de totales, donde se mostrarán los valores calculados según las funciones seleccionadas.

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_7.png)

5\. Unidades de medida

Indique la unidad de medida de los datos (km, l, km/h, °C, horas, etc.).

6\. Fórmula

Permite usar expresiones matemáticas, por ejemplo, (%odometer\_end% - %odometer\_begin%) / 100

7\. Filtro

Para cualquier columna con valores numéricos se puede configurar el filtrado de las filas del informe. En el campo «Filtro» indique una de las condiciones:

-   \> X— el valor es mayor que X
    
-   < X— el valor es menor que X
    
-   \= X— el valor es igual a X
    

Por ejemplo, si para la columna «Velocidad» indica > 25, el informe mostrará solo los eventos registrados a una velocidad superior a 25 km/h.

8\. Función de formato

Permite definir un formato especial del valor (redondeo, conversión de fechas, conversión de unidades de medida, etc.). Se utiliza para dar a los datos el aspecto necesario.

9\. Ocultar

Marque la casilla si la columna solo es necesaria para los cálculos (por ejemplo, para una fórmula), pero no debe mostrarse en el informe final.

### Cómo eliminar una columna

Haga clic en la columna y a continuación haga clic en ![](images/drex_kak_nastroit_kolonki_otchyeta_custom_8.png).

## Cómo configurar la tabla de columnas

Configure la tabla de columnas como le resulte más cómodo. Seleccione qué columnas con parámetros se mostrarán.

1\. En el encabezado de cualquier columna haga clic en la flecha ![](images/drex_kak_nastroit_kolonki_otchyeta_custom_9.png). Aparecerá un menú con los ajustes de la columna:

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_10.png)

-   Ordenación de los datos de forma ascendente o descendente
    
-   Selección de las columnas que se mostrarán
    
    2\. Para configurar qué columnas se muestran:
    
-   Haga clic en «Columnas»: se abrirá la lista de parámetros disponibles para mostrar en la columna de la tabla
    
-   Marque las casillas de los parámetros que desea ver
    

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_11.png)

## Cómo usar fórmulas en las columnas del informe

En el constructor de informes hay dos formas de añadir fórmulas:

1\. Fórmula para un campo ya existente — añadir una fórmula a un campo de datos ya existente

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_12.png)

2\. Fórmula independiente — crear una nueva columna a partir de una fórmula de varios campos

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_13.png)

### Fórmula para un campo ya existente

Este método se utiliza cuando es necesario modificar los datos de un campo ya existente.

Cómo configurarlo:

1\. Añada una columna con un campo de datos ya existente (por ejemplo, «Tiempo de parada»).

2\. En el campo «Fórmula» introduzca la expresión que se aplicará a este campo

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_12.png)

Por ejemplo, el informe Fuel Consumption While Driving con la columna «Tiempo de parada». En el campo «Fórmula» se indica =%te%-%ts%: esta expresión calcula la diferencia entre la hora de finalización (te) y la hora de inicio (ts) de la parada

### Fórmula independiente

Este método se utiliza cuando es necesario crear una nueva columna a partir de varios campos de datos.

Cómo configurarlo:

1\. Añada una nueva columna

2\. En el campo «Datos» seleccione «Fórmula»

3\. En el campo «Fórmula» introduzca la expresión utilizando los identificadores de los campos de datos

Por ejemplo, el informe Fuel Consumption While Driving con la columna «Consumo en movimiento»:

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_13.png)

-   En el campo «Datos» está seleccionado Fórmula
    
-   En el campo Fórmula se indica =%fuel%/((%te%-%ts%)/60/60): esta expresión calcula el consumo de combustible por hora:
    
    — %fuel% — consumo de combustible según el sensor
    
    — (%te%-%ts%)/60/60 — tiempo en horas (diferencia entre la hora de finalización y la de inicio del evento, dividida entre 3600 segundos)
    

Tras guardar el informe, el sistema calculará automáticamente el valor de cada fila según la fórmula indicada.

Encontrará más información sobre la sintaxis de las fórmulas en un [artículo](../../datchiki-1/primenenie-formul.html) aparte.
