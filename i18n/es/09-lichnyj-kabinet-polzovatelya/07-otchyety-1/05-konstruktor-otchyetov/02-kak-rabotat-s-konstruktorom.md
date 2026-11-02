---
title: "Cómo trabajar con el constructor"
---

El constructor de informes le permite crear su propio formulario de informe con las columnas, los filtros y la lógica de cálculo que necesite.

En este artículo aprenderá:

-   [Cómo crear un informe](kak-rabotat-s-konstruktorom.html#Как_создать_отчёт) — configuración paso a paso del formulario del informe
    
-   [Cómo generar un informe](kak-rabotat-s-konstruktorom.html#Как_построить_отчёт) — ejecución del informe desde el constructor
    
-   [Agrupación del informe](kak-rabotat-s-konstruktorom.html#Группировка_отчёта_по_группам) — cómo combinar los datos por grupos
    
-   [Descripción de la interfaz](kak-rabotat-s-konstruktorom.html#Обзор_интерфейса_конструктора) — de qué se compone el constructor
    
-   [Configuración del informe](kak-rabotat-s-konstruktorom.html#Конфигурация_отчёта) — cómo ajustar el informe con más detalle
    
-   [Importación y exportación](kak-rabotat-s-konstruktorom.html#Импорт_и_экспорт_отчётов) — cómo transferir informes entre cuentas
    

## Cómo crear un informe

1\. Vaya a la sección «Informes»

![Cómo trabajar con el constructor](images/drex_kak_rabotat_s_konstruktorom_screen.png)

2\. Busque el botón «Constructor» ![](images/drex_kak_rabotat_s_konstruktorom_custom.png)

3\. Haga clic en él: se abrirá la ventana del constructor

![](images/drex_kak_rabotat_s_konstruktorom_custom_2.png)

En el constructor:

4\. Haga clic en «Añadir» ![](images/drex_kak_rabotat_s_konstruktorom_custom_3.png)

5\. Seleccione el [tipo de informe](tipy-otchyetov-v-konstruktore.html)

![](images/drex_kak_rabotat_s_konstruktorom_custom_4.png)

6\. En el campo «Nombre» indique el nombre del informe

![](images/drex_kak_rabotat_s_konstruktorom_custom_5.png)

7\. En el bloque «Columnas» haga clic en «+» y añada los campos necesarios

8\. Indique los datos, las fórmulas, los filtros y otros parámetros de las columnas

9\. Si es necesario, rellene el campo «Configuración»

10\. Haga clic en «Guardar»

Tras guardarlo, el informe estará disponible en la sección «Informes».

### Ejemplo de informe

Por ejemplo, puede crear el informe Idle – Summary Table.

![](images/drex_kak_rabotat_s_konstruktorom_custom_6.png)

Tipo de informe: «Tabla resumen»

Columnas añadidas:

-   Vehículo — objeto para el que se genera el informe
    
-   Tiempo de parada — duración de la parada
    
-   Número total de paradas — número de eventos
    
-   Combustible al inicio — remanente de combustible al inicio
    
-   Combustible al final — remanente de combustible al final
    

En el campo «Configuración» puede definir un filtro para que en el informe se incluyan solo los datos necesarios.

![Cómo trabajar con el constructor](images/drex_kak_rabotat_s_konstruktorom_screen_2.png)

Por ejemplo, solo los objetos con paradas:

<table><tbody><tr><td><span></span></td><td><div>{"filter":[{"key":"total_idle_events_number","rule":"&gt;","value":0}]}</div></td></tr></tbody></table>

Una vez creado y guardado el informe en el constructor, estará disponible en la sección «Informes».

![](images/drex_kak_rabotat_s_konstruktorom_custom_7.png)

## Cómo generar un informe

1\. Vaya a la sección «Informes»

2\. Seleccione el objeto (márquelo con una casilla en la lista)

3\. Seleccione el informe necesario creado en el constructor

![](images/drex_kak_rabotat_s_konstruktorom_custom_7.png)

4\. Indique el período y los parámetros adicionales

5\. Haga clic en «Generar informe»

![](images/drex_kak_rabotat_s_konstruktorom_custom_8.png)

El sistema generará el informe con el formulario definido.

![](images/drex_kak_rabotat_s_konstruktorom_custom_9.png)

El informe terminado se puede:

— consultar y analizar

— exportar a CSV, Excel, PDF — ![](images/drex_kak_rabotat_s_konstruktorom_custom_10.png)

— imprimir ![](images/drex_kak_rabotat_s_konstruktorom_custom_11.png)

![](images/drex_kak_rabotat_s_konstruktorom_custom_12.png)

## Agrupación del informe

Los datos de un informe creado en el constructor se pueden combinar en bloques independientes mediante la agrupación. Según el tipo de informe, están disponibles las siguientes opciones:

-   por conductores
    
-   por fechas
    
-   por objetos
    
-   por grupos de objetos
    

Para configurar la agrupación:

1\. Vaya a la sección «Informes»

2\. Seleccione el informe creado en el constructor

3\. En el campo «Agrupación» seleccione la opción adecuada

![Cómo trabajar con el constructor](images/drex_kak_rabotat_s_konstruktorom_screen_3.png)

4\. Seleccione los objetos y, si es necesario, otros datos para generar el informe

5\. Haga clic en «Generar informe»

Por ejemplo, al agrupar por grupos de objetos, para cada grupo seleccionado se genera un bloque independiente con los datos que le corresponden.

![](images/drex_kak_rabotat_s_konstruktorom_custom_13.png)

## Descripción de la interfaz del constructor

![](images/drex_kak_rabotat_s_konstruktorom_custom_14.png)

A la izquierda se encuentra el panel «Informes» con la lista de informes ya creados.

![](images/drex_kak_rabotat_s_konstruktorom_custom_15.png)

Contiene la lista de informes creados y los botones de gestión:

Aquí también están los botones de gestión:

![](images/drex_kak_rabotat_s_konstruktorom_custom_16.png) — crear un informe nuevo

![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png)  ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png) — importar o exportar un informe

![](images/drex_kak_rabotat_s_konstruktorom_custom_19.png) — actualizar la lista

A la derecha se encuentra el área de configuración del informe seleccionado:

![](images/drex_kak_rabotat_s_konstruktorom_custom_20.png)

-   Tipo — tipo de constructor del informe
    
-   Nombre — nombre del informe
    
-   Total — indicador principal del resumen
    
-   Ordenación — orden de visualización de los datos
    
-   Desc — ordenación descendente
    
-   Columnas — configuración de la composición del informe
    
-   Configuración — configuración adicional del informe en formato JSON. Con ella puede controlar cómo se mostrarán los datos en el informe.
    

## Configuración del informe

El campo «Configuración» sirve para los ajustes adicionales del informe. Los parámetros se indican en formato JSON y determinan la forma de procesar y mostrar los datos.

![Cómo trabajar con el constructor](images/drex_kak_rabotat_s_konstruktorom_screen_4.png)

### Desglose de datos por horas

Para dividir los datos en intervalos de una hora, indique:

<table><tbody><tr><td><span></span></td><td><div>{"split": "hour"}</div></td></tr></tbody></table>

Al generar el informe, los datos de cada hora se mostrarán en un bloque independiente.

![](images/drex_kak_rabotat_s_konstruktorom_custom_21.png)

### Desglose de datos por turnos

Los datos del informe se pueden dividir por turnos de trabajo. Para cada turno, el sistema creará un intervalo independiente y calculará los indicadores solo con los datos que le correspondan.

Para configurar el desglose, indique en el parámetro split la hora de inicio y de fin de cada turno, por ejemplo,

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"]</div><div>}</div></td></tr></tbody></table>

![](images/drex_kak_rabotat_s_konstruktorom_custom_22.png)

En este ejemplo se han configurado dos turnos:

-   de 08:00 a 20:00
    
-   de 20:00 a 08:00 del día siguiente
    

Si el parámetro show no está indicado, en el informe se muestran todos los turnos configurados.

**Ejemplo de informe de todos los turnos**

En el ejemplo, el informe «Cronología de explotación del cargador» está dividido en turnos de día y de noche. Para cada turno se muestra un bloque independiente con el objeto, la hora de inicio y de fin del intervalo y los indicadores de funcionamiento del equipo.

El turno de noche se muestra como un único intervalo continuo desde las 20:00 del día en curso hasta las 08:00 del día siguiente.

Como el período seleccionado del informe comienza a las 00:00, al principio del informe también se muestra la parte restante del turno de noche, de 00:00 a 08:00.

![](images/drex_kak_rabotat_s_konstruktorom_custom_23.png)

**Visualización de un solo turno**

Para incluir en el informe solo uno de los turnos configurados, añada el parámetro show:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "show": 1</div><div>}</div></td></tr></tbody></table>

El valor del parámetro corresponde al número de orden del turno en la lista:

-   show: 1— mostrar el primer turno, de 08:00 a 20:00
    
-   show: 2— mostrar el segundo turno, de 20:00 a 08:00
    

**Ejemplo de informe de un solo turno**

En el ejemplo se indica el parámetro show: 1, por lo que el informe contiene solo los turnos de día de 08:00 a 20:00. Para cada día se genera un bloque independiente. Los turnos de noche no se muestran en el informe.

![](images/drex_kak_rabotat_s_konstruktorom_custom_24.png)

**División del turno al pasar la medianoche**

Por defecto, el turno de 20:00 a 08:00 se considera un único intervalo continuo. Para dividirlo por el límite de los días naturales, añada el parámetro split\_days:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "split_days": 1</div><div>}</div></td></tr></tbody></table>

El turno de noche se dividirá en dos intervalos:

-   de 20:00 a 00:00
    
-   de 00:00 a 08:00
    

El turno de día sigue siendo un único bloque de 08:00 a 20:00.

El parámetro show no está indicado, ya que en el informe están presentes tanto el turno de día como el de noche.

![](images/drex_kak_rabotat_s_konstruktorom_custom_25.png)

Todos los parámetros se pueden usar a la vez:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "show": 1,</div><div>&nbsp; "split_days": 1</div><div>}</div></td></tr></tbody></table>

En este ejemplo, el informe muestra solo el primer turno, y los turnos que pasan la medianoche se dividen por días naturales.

### Filtrado de datos

Con la configuración puede definir qué datos deben incluirse en el informe.

Por ejemplo, para el informe Idle – Summary Table puede añadir las siguientes columnas:

-   Vehículo
    
-   Tiempo de parada
    
-   Número total de paradas
    
-   Combustible al inicio
    
-   Combustible al final
    

Para incluir en el informe solo los objetos para los que se haya registrado al menos una parada, indique:

<table><tbody><tr><td><span></span></td><td><div>{"filter":[{"key":"total_idle_events_number","rule":"&gt;","value":0}]}</div></td></tr></tbody></table>

Como resultado, las filas en las que el valor del campo «Número total de paradas» sea cero no se mostrarán.

![](images/drex_kak_rabotat_s_konstruktorom_custom_6.png)

### Combinación de filas

Para combinar varias filas de un mismo período de desglose en una fila de totales, indique:

<table><tbody><tr><td><span></span></td><td><div>{"merge": true}</div></td></tr></tbody></table>

 En la fila combinada se muestran los valores de las columnas configuradas, y las filas intermedias se ocultan. Configure las columnas que deben formar parte del informe y guarde los cambios.

![](images/drex_kak_rabotat_s_konstruktorom_custom_26.png)

Ejemplo de combinación de filas

![](images/drex_kak_rabotat_s_konstruktorom_custom_27.png)

En el ejemplo, el informe está agrupado por conductores y desglosado por días. Para cada conductor se crea un bloque independiente y sus datos de cada día se combinan en una sola fila. La fila muestra el vehículo, la fecha, la hora de inicio del primer viaje y de fin del último, el tiempo total de movimiento y de parada, así como el kilometraje total del día.

## Importación y exportación de informes

Los informes del constructor se pueden transferir entre cuentas. Para ello utilice los botones «Exportar» ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png) e «Importar»![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png)   

![Cómo trabajar con el constructor](images/drex_kak_rabotat_s_konstruktorom_screen_5.png)

### Cómo exportar un informe

1\. Haga clic en «Exportar» ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png)

2\. Seleccione una ubicación en el dispositivo

3\. Guarde el archivo

### Cómo importar un informe

1\. Haga clic en «Importar» ![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png)

2\. En la ventana que se abre, si es necesario, active la opción Remove existing reports (Eliminar informes existentes) para eliminar los informes existentes en el constructor  
![](images/drex_kak_rabotat_s_konstruktorom_custom_28.png)

3\. Seleccione el archivo del informe

4\. Haga clic en «Importar»

El informe se cargará en la cuenta.
