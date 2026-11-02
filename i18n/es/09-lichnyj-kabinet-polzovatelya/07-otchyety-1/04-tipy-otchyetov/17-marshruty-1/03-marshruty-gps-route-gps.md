---
title: "Rutas GPS (Route GPS)"
---

El informe **Route GPS** le ayuda a controlar la ejecución de los viajes planificados: la visita a los puntos de control, el tiempo de movimiento, la duración del viaje, la distancia recorrida y las paradas no planificadas.

En el informe solo se incluyen las rutas en las que el objeto realizó un viaje en el período seleccionado. Si no hubo viajes por la ruta, la ruta no se muestra.

![](images/drex_marshruty_gps__route_gps__custom.png)

El informe está diseñado para rutas circulares formadas por tres puntos de control:

1\. punto inicial — instalaciones de la empresa

2\. punto intermedio — ubicación del cliente

3\. punto final — las mismas instalaciones de la empresa

### Qué se muestra en el informe

-   Vehicle No (número del vehículo) — número del objeto
    
-   Customer Name (nombre del cliente) — nombre del penúltimo punto de control de la ruta
    
-   Actual Start Time (hora real de inicio) — fecha y hora de inicio del viaje por la ruta
    
-   Time arrived at customer location (hora de llegada al cliente) — fecha y hora de llegada del objeto al segundo punto de control de la ruta
    
-   End Time (hora de finalización) — fecha y hora de finalización del viaje, cuando el objeto regresó al punto de control final. En una ruta circular, el punto final coincide con el inicial
    
-   Actual Route (ruta real) — ruta por la que se realizó el viaje
    
-   Trip Status (estado del viaje) — resultado de la ejecución de la ruta. El estado indica si el conductor visitó todos los puntos de control previstos:
    
-   Finished (finalizado) — se han visitado todos los puntos de control
    
-   Unfinished (no finalizado) — uno o varios puntos de control no se han visitado o el viaje aún no ha terminado
    
-   Time In Transit (tiempo en ruta) — tiempo de movimiento del objeto durante el viaje
    
-   Trip Duration (duración del viaje) — tiempo desde el inicio hasta el fin del viaje
    
-   Distance Travelled (distancia recorrida) — distancia que recorrió el objeto durante el viaje
    
-   Number of Stops Outside Planned Geofence (número de paradas fuera de las geocercas planificadas) — número de paradas realizadas fuera de los puntos de control de la ruta
    
-   Number of planned stoppage (número de paradas planificadas) — número de puntos de control previstos en la ruta
    

![](images/drex_marshruty_gps__route_gps__custom_2.png)

### Visualización de la ruta en el mapa

Para estudiar con más detalle el movimiento del objeto, despliegue el panel «Mapa» y haga clic en la fila del informe que necesite. En el mapa se mostrarán los datos del día seleccionado:

-   los viajes del objeto — con líneas con flechas que indican la dirección del movimiento
    
-   los estacionamientos — con marcadores P
    
-   la ruta planificada — con una línea discontinua
    
-   los puntos de control de la ruta — con marcadores numerados
    

Si durante el día hubo varios viajes, sus líneas pueden superponerse.

![](images/drex_marshruty_gps__route_gps__custom_3.png)

En la parte izquierda del mapa aparecerá un panel plegable «Viajes». Para cada viaje se indican la hora de inicio, la fecha y la distancia recorrida. Haga clic en el viaje que necesite para dejar en el mapa solo su recorrido.

![](images/drex_marshruty_gps__route_gps__custom_4.png)

Haga clic en el marcador de un punto de control para ver

-   el nombre del punto
    
-   las coordenadas
    
-   la dirección
    

![](images/drex_marshruty_gps__route_gps__custom_5.png)

### Cómputo de los estacionamientos

En el mapa se muestran todos los estacionamientos correspondientes al día seleccionado. El último estacionamiento también se tiene en cuenta si comenzó el día seleccionado y terminó al día siguiente.

Por ejemplo, si el objeto se detuvo a las 17:00 y reanudó el movimiento a las 09:00 del día siguiente, el tiempo de ese estacionamiento se incluirá en Trip Duration (duración del viaje). Por eso, el valor de la duración a veces puede superar las 24 horas.
