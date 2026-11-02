---
title: "Informe de turnos"
---

El informe de turnos sirve para controlar el trabajo de los vehículos según el horario de turnos en el módulo [«Control de tiempo»](../../../moduli-1/kontrol-vremeni.html). Con él puede comparar la hora real de salida y regreso del vehículo con los límites establecidos del turno, detectar retrasos y ver los intervalos de movimiento y de estacionamiento.

Para cada vehículo se tiene en cuenta un turno al día. El límite del día se determina según la zona horaria indicada en los ajustes del objeto.

![](images/drex_otchyet_po_smenam_custom.png)

### Cómo se determina el turno

-   Se considera inicio del turno la salida del vehículo de la geocerca establecida

-   Se considera fin del turno el regreso del vehículo a esa geocerca

-   Para el turno se definen las horas admisibles de inicio y de finalización

-   Si el vehículo salió más tarde de la hora establecida, el sistema puede registrar el evento «Salida tardía»

-   Si el vehículo regresó más tarde de la hora establecida, el sistema puede registrar el evento «Regreso tardío»

El informe muestra de forma secuencial los intervalos de movimiento y de estacionamiento del vehículo durante el turno

### Qué se muestra en el informe

-   Vehículo — nombre, matrícula o número de garaje del vehículo

-   Salida/Regreso — evento de inicio o fin del turno: salida de la geocerca establecida o regreso a ella

-   Incumplimiento del horario laboral — desviación detectada respecto al horario establecido, por ejemplo, salida tardía o regreso tardío

-   Estado — estado del vehículo en el intervalo correspondiente, por ejemplo Movement o Parking

-   Fecha — fecha a la que pertenece el turno

-   Hora de inicio — hora real de inicio del intervalo de movimiento o de estacionamiento mostrado

-   Hora de finalización — hora real de finalización del intervalo

-   Inicio del turno — hora establecida de inicio del turno

-   Fin del turno — hora establecida de finalización del turno

-   Duración — duración del intervalo correspondiente.

-   Distancia — distancia recorrida por el vehículo en el intervalo. En los estacionamientos normalmente se muestra el valor cero.

-   Lugar de inicio — dirección o descripción de la ubicación del objeto al inicio del intervalo.

-   Lugar de finalización — dirección o descripción de la ubicación del objeto al final del intervalo.

![](images/drex_otchyet_po_smenam_custom_2.png)

Para determinar correctamente el inicio y el fin del turno, configure previamente la geocerca de trabajo y el horario del vehículo:

1\. En los ajustes de la geocerca, asigne el objeto necesario y marque para él la casilla «De trabajo». La salida de esta geocerca se considerará el inicio del turno, y el regreso a ella, el fin del turno.

![Informe de turnos](images/drex_otchyet_po_smenam_screen.png)

2\. En la ficha del objeto, abra la pestaña [«Horario laboral»](../../../moduli-1/kontrol-vremeni.html#Рабочее_время_объекта), seleccione los días laborables y defina el horario para los días laborables y los fines de semana.

![](images/drex_otchyet_po_smenam_custom_3.png)

3\. Compruebe la zona horaria del objeto: con ella se determinan los límites del día y se comparan los eventos reales con el horario establecido

4\. Compruebe el tiempo mínimo de estacionamiento en los ajustes del objeto. Este parámetro determina tras cuánto tiempo un objeto inmóvil se contabilizará en el informe como estacionamiento.

![Informe de turnos](images/drex_otchyet_po_smenam_screen_2.png)
