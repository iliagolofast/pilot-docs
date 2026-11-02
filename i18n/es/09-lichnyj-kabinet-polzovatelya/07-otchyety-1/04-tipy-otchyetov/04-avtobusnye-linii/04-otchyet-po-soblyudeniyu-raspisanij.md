---
title: "Informe de cumplimiento de horarios"
---

El informe sirve para controlar el cumplimiento real del horario en la línea de autobús seleccionada.

Compara la hora planificada de paso por las paradas (según la matriz del horario) con la hora real de visita a las paradas y muestra de forma clara en qué medida el movimiento real coincidió con el planificado.

![](images/drex_otchyet_po_soblyudeniyu_raspisanij_custom.png)

### Qué se muestra en el informe

El informe se genera para una línea de autobús seleccionada y tiene la forma de una tabla en la que:

-   La primera columna — nombre del horario

-   Cada columna siguiente — una parada de la ruta

-   En cada celda — datos de una parada concreta para un viaje concreto

En cada celda se muestra:

-   Plan — hora planificada de llegada a la parada

-   Real — hora real de llegada a la parada

-   Diferencia — desviación de la hora real respecto a la planificada

-   Objeto — vehículo (matrícula) que realmente efectuó la parada

Si no se registró la visita real, la celda se marca como «Incumplimiento» (no ejecución)

![](images/drex_otchyet_po_soblyudeniyu_raspisanij_custom_2.png)

###  Cómo se genera el informe

1\. Se toma la línea de autobús seleccionada y su lista de paradas

2\. Se carga el historial de versiones del horario vigentes en el período indicado

3\. Para cada día del intervalo del informe se determina qué tabla de horarios debe aplicarse:

-   por fecha concreta

-   por día de la semana

-   o diariamente

4\. Para cada viaje planificado y cada parada se busca la visita real más cercana a esa parada

5\. Si el evento se encuentra dentro de la ventana de desviación admisible, en la celda se muestran Plan / Real / Diferencia / Objeto

6\. Si el evento no se encuentra, la celda se marca como «Incumplimiento»

### Lógica de comparación

-   El informe comprueba el cumplimiento del horario no por un autobús concreto, sino por el hecho de que se haya efectuado la parada en la línea.

-   Si en la línea trabajan varios autobuses a la vez, el informe tiene en cuenta cualquier autobús que haya efectuado realmente la parada a la hora requerida.

-   Para cada hora planificada se utiliza como máximo un evento real.

-   Un mismo evento real no se utiliza de nuevo para confirmar varias activaciones planificadas.

-   Si el horario cambia dentro del período del informe, se aplica la versión del horario que estaba vigente en el momento del viaje planificado concreto.

### Indicación por colores del informe

-   Verde — desviación mínima, la parada se efectuó cerca de lo planificado

-    Amarillo — desviación admisible respecto al horario

-   Naranja — desviación de tiempo apreciable.

-   Rojo — desviación grande o incumplimiento (no hay visita real)
