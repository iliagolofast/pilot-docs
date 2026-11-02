---
title: "Cómo trabajar con una carretera de peaje"
---

Para configurar una carretera de peaje hay un menú especial.

Haga clic con el botón izquierdo del ratón en la carretera de peaje deseada y verá las siguientes funciones:

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom.png)

-   [Puertas](kak-rabotat-s-platnoj-dorogoj.html#Ворота): configuración de los puntos de entrada y salida
    
-   [Planificador](kak-rabotat-s-platnoj-dorogoj.html#Планировщик): definición de las condiciones y tarifas de la carretera de peaje
    
-   [Eliminar](kak-rabotat-s-platnoj-dorogoj.html#Удалить_платную_дорогу): eliminación de la carretera de peaje
    
    ## Cómo añadir puertas de peaje
    

Las puertas son puntos de la carretera de peaje que registran el momento en que el objeto entra al tramo de peaje y sale de él. Gracias a las puertas, el sistema determina con precisión cuándo el objeto comenzó y terminó el recorrido por la carretera de peaje.

Para contabilizar con precisión el inicio y el final del tramo de peaje, añada los puntos de entrada y salida: las puertas.

Cómo añadir puertas:

1\. Abra el menú de trabajo con la carretera de peaje y seleccione «Puertas»

2.  Haga clic en ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_2.png) para añadir un nuevo punto

3\. Indique el nombre de la puerta

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_3.png)

4\. Seleccione el tipo de puerta:

-   Entrada: marca el lugar de acceso a la carretera de peaje
    
-   Salida: marca el lugar de salida de la carretera de peaje
    
-   Compuesta (o compleja): puede ser tanto entrada como salida
    
    5\. En el mapa aparecerá la marca de la puerta. Se puede mover al lugar deseado.
    
     ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_4.png)
    
    6\. Una vez añadidas las puertas, haga clic en «Guardar».
    

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_5.png)

Según la estructura de la carretera de peaje y las particularidades de la circulación, en el sistema se pueden usar distintas variantes de configuración de las puertas. Así podrá contabilizar con precisión todos los viajes y calcular correctamente el coste del peaje para cualquier ruta.

Como ejemplos, veamos dos escenarios principales: el uso de puertas simples y de puertas complejas.

### Puertas simples

Las puertas simples son la variante en la que los puntos de entrada y salida están en la misma línea (un mismo tramo de la carretera de peaje). En este caso, simplemente marca el inicio y el final del tramo de peaje, y el sistema registra todos los viajes entre esos dos puntos.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_6.png)

Por ejemplo, el vehículo entra a la carretera de peaje por la «Puerta 1» y sale por la «Puerta 2» en este mismo tramo.

Incluso si en la carretera se pierde temporalmente la señal GPS (por ejemplo, en un túnel), el sistema recordará dónde estuvieron la entrada y la salida y calculará correctamente el coste del peaje.

### Puertas complejas

Las puertas complejas (o compuestas) son la variante en la que la entrada y la salida pueden estar en líneas distintas (tramos diferentes de carreteras de peaje). Puede vincular una línea como entrada con otra línea como salida, y puede haber varias de estas combinaciones. Estas puertas son convenientes para esquemas de circulación complejos, cuando en la carretera de peaje hay varias rutas, enlaces, entradas y salidas. Con ellas se pueden contabilizar los viajes entre distintos tramos de carreteras de peaje.

Por ejemplo, el vehículo entra a la carretera de peaje por la «Puerta A» (en un tramo) y sale por la «Puerta B» (en otro tramo). Se pueden crear varios vínculos de este tipo, por ejemplo: «Entrada 1» — «Salida 1», «Entrada 2» — «Salida 2», etc.

Cómo crear puertas complejas:

 1. Cree las carreteras de peaje en el mapa

Dibuje en el mapa el primer tramo de la carretera de peaje como una polilínea, establezca su ancho y póngale un nombre claro, por ejemplo, Polyline\_North.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_7.png)

Dibuje el segundo tramo de la carretera de peaje y póngale nombre, por ejemplo, Polyline\_South

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_8.png)

2\. Vaya a la configuración de una de las carreteras de peaje, por ejemplo, Polyline\_North

3\. En el menú de trabajo con la carretera de peaje seleccione «Puertas»

4\. Haga clic en ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_2.png) para añadir una puerta

5\. Indique el nombre de la puerta, por ejemplo, North\_to\_South

6\. Seleccione el tipo de puerta: compuesta (compleja)

7\. En el campo Link zone (Zona vinculada) seleccione la segunda carretera de peaje con la que desea vincular esta puerta, por ejemplo, Polyline\_South. En el campo «Ubicación» las coordenadas se rellenarán automáticamente.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_9.png)

8\. Haga clic en «Guardar»

9\. Configure las tarifas y el horario

Para este par compuesto de puertas puede abrir el [«Planificador»](kak-rabotat-s-platnoj-dorogoj.html#Планировщик) ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_10.png)y establecer tarifas y un horario individuales para la ruta entre, por ejemplo, Polyline\_North — Polyline\_South

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_11.png)

10\. Si es necesario, cree el sentido inverso para la segunda carretera de peaje

De este modo, si el vehículo entra a la carretera de peaje por la puerta de Polyline\_North y sale por la puerta de Polyline\_South, el sistema determina que se trata de la ruta North\_to\_South y aplica la tarifa y el horario correspondientes.

## Cómo trabajar con el planificador

El planificador es una herramienta para configurar las condiciones de circulación por la carretera de peaje.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_12.png)

Cómo configurar el planificador:

1\. Abra el menú de trabajo con la carretera de peaje

2\. Seleccione la opción «Planificador»

3\. En la ventana «Planificador» configure los parámetros

-   Períodos de tráfico:
    
    Para cada día de la semana (días laborables, sábado, domingo) establezca los intervalos de tiempo necesarios:
    
    — normal
    
    — alto
    
    — punta
    
    Para cada período indique su franja horaria, por ejemplo, 08:00–10:00: tráfico alto.
    
-   Tarifas para distintos tipos de vehículos:
    
    Para cada período indique el coste del peaje para:
    
    — motocicletas y turismos
    
    — autobuses y camiones
    
    — camiones con remolque
    
-   Tolerancia
    
    Haga clic en el botón de tolerancia e indique el tiempo de retraso o desviación permitido, para que el sistema no considere una infracción los pequeños retrasos.
    

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_13.png)

4\. Una vez rellenados todos los parámetros, haga clic en «Guardar» en la parte inferior de la ventana. Las condiciones de circulación por la carretera de peaje se tendrán en cuenta automáticamente según su configuración.

## Cómo eliminar una carretera de peaje

Para eliminar una carretera de peaje, abra el menú de trabajo con la carretera de peaje y seleccione la opción «Eliminar»: la carretera de peaje desaparecerá de la lista de zonas y dejará de mostrarse en el mapa.
