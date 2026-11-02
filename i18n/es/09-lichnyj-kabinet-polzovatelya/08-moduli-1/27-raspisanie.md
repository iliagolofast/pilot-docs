---
title: "Horario"
---

El módulo «Horario» se utiliza junto con el módulo [«Viajes»](rejsy-2/index.html). En el horario se indica a qué hora debe pasar el vehículo por los puntos de control del viaje o iniciar la siguiente vuelta de la ruta.

![](images/drex_raspisanie_custom.png)

Los datos del horario se utilizan en el informe [de viajes circulares](../otchyety-1/tipy-otchyetov/avtobusnye-linii/otchyet-po-krugorejsam.html). Con este informe se puede comparar la hora planificada con la hora real de circulación del vehículo y determinar la desviación respecto al horario.

El módulo «Viajes» define la ruta de circulación, y el módulo «Horario», la hora planificada de circulación por esa ruta.

## Cómo crear un horario

Para crear un horario:

1\. Abra la pestaña «Horario»

2\. Haga clic en el botón «Añadir horario» ![](images/drex_raspisanie_custom_2.png)

![Horario](images/drex_raspisanie_screen.png)

3\. Rellene los parámetros del horario:

![](images/drex_raspisanie_custom_3.png)

-   Nombre: introduzca el nombre del horario
    
-   Línea de autobús: seleccione el viaje para el que se crea el horario. Previamente [el viaje debe estar creado](rejsy-2/kak-sozdat-rejs.html) en el módulo «Viajes». Tras seleccionar el viaje, el horario quedará asociado a la ruta correspondiente.
    

![](images/drex_raspisanie_custom_4.png)

-   Hora: indique la hora planificada de paso por las paradas del viaje seleccionado. Introduzca la hora y haga clic en el botón ![](images/drex_raspisanie_custom_5.png). Cada valor se añade por separado y aparece en la lista de la parte inferior del formulario.
    

Por ejemplo, para un viaje con tres paradas consecutivas se pueden añadir:

— 07:15: hora de paso por la primera parada

— 07:30: por la segunda parada

— 07:45: por la tercera parada

![](images/drex_raspisanie_custom_6.png)

-   Vincular al inicio de la vuelta: marque la casilla si los valores añadidos deben indicar la hora de inicio de nuevas vueltas
    

![](images/drex_raspisanie_custom_7.png)

Por ejemplo, si añade 07:12, 08:12 y 09:12, el vehículo debe:

— a las 07:12 iniciar la primera vuelta

— a las 08:12 iniciar la segunda vuelta

— a las 09:12 iniciar la tercera vuelta

Por nueva vuelta se entiende el siguiente recorrido del vehículo por la ruta seleccionada desde su punto inicial.

Los valores añadidos se muestran en la parte inferior del formulario, en la sección «Hora». Para eliminar un valor, haga clic en el icono de papelera junto a él.

![Horario](images/drex_raspisanie_screen_2.png)

4\. Haga clic en «Guardar»
