---
title: "Informe BRAG de seguridad de conducción (BRAG Report)"
---

El informe BRAG Report está diseñado para evaluar la seguridad de conducción y clasificar a los conductores en las categorías BRAG. El informe se ha desarrollado conforme a los requisitos de QatarEnergy para los sistemas de monitoreo de vehículos IVMS.

El sistema analiza las infracciones registradas: exceso de velocidad, aceleraciones, frenadas y giros bruscos, así como el incumplimiento de las normas de uso del cinturón de seguridad. Con base en los resultados, a cada conductor activo se le asigna una puntuación final y una categoría de color.

Antes de generar el informe, es necesario seleccionar el período y los vehículos o un grupo de vehículos. En el cálculo se incluyen los conductores de los que se recibieron datos en el período seleccionado.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom.png)

### Información general

En la parte superior del informe se muestran:

-   Contractor — nombre del contratista

-   Project — nombre del proyecto

-   Departamento — división para la que se generó el informe

-   Período del informe — inicio y fin del período analizado

-   Generated — fecha y hora de generación del informe

-   Tipo de informe — tipo de informe, por ejemplo, Weekly/Monthly

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_2.png)

### Fleet Overview

El bloque Fleet Overview contiene datos generales de la flota:

-   Total Vehicles — número total de vehículos seleccionados

-   Active Drivers — número de conductores con actividad registrada en el período seleccionado

-   Total Distance (km) — kilometraje total de los vehículos en kilómetros

-   Duración total — duración total del trabajo de los vehículos

El número de conductores activos puede ser menor que el de vehículos: en la distribución BRAG solo se incluyen los conductores de los que el sistema recibió los datos necesarios.

### BRAG Performance Distribution

El bloque BRAG Performance Distribution muestra la distribución de los conductores activos en cuatro categorías. Para cada categoría se muestran el número de conductores y su proporción respecto al total de conductores activos:

-   BLUE — Outstanding — resultados de conducción sobresalientes

-   GREEN — Acceptable — resultados aceptables

-   AMBER — Attention Required — resultados que requieren atención

-   RED — Action Required — es necesario tomar medidas

El color de la categoría también se utiliza para resaltar el nombre del conductor en la tabla detallada:

-   azul — categoría BLUE

-   verde — categoría GREEN

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_3.png)

-   amarillo — categoría AMBER

-   rojo — categoría RED

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_4.png)

Cuanto mayores son la puntuación final y el número de infracciones, más atención requiere el estilo de conducción.

### Fleet Performance Summary

El bloque Fleet Performance Summary contiene los indicadores resumidos de la flota seleccionada:

-   Fleet Average Score — puntuación final media de los conductores

-   Total events — número total de eventos e infracciones registrados

-   Events per 100 km — número medio de eventos por cada 100 km de kilometraje. Este indicador permite comparar los resultados de conductores y divisiones con distinto kilometraje.

### Individual Driver Performance

El bloque Individual Driver Performance presenta los resultados detallados de cada conductor.

La tabla muestra:

-   Driver ID — identificador del conductor

-   Driver Name — nombre del conductor

-   Duración HH:MM:SS — duración total del trabajo del conductor

-   Distancia (km) — distancia recorrida

-   Overspeed 120 kph — número de eventos de exceso de velocidad en la categoría de 120 km/h

-   Overspeed 100 kph — número de eventos de exceso de velocidad en la categoría de 100–119 km/h

-   Overspeed 80 kph — número de eventos de exceso de velocidad en la categoría de 80–99 km/h

-   Overspeed 60 kph — número de eventos de exceso de velocidad en la categoría de 60–79 km/h

-   Overspeed 40 kph — número de eventos de exceso de velocidad en la categoría de 40–59 km/h

-   Overspeed 30 kph — número de eventos de exceso de velocidad en la categoría de 30–39 km/h

-   Harsh Accel — número de aceleraciones bruscas

-   Harsh Braking — número de frenadas bruscas

-   Harsh Cornering — número de casos de giros bruscos

-   Seatbelt Violation — número de infracciones de las normas de uso del cinturón de seguridad

-   Driver Score — puntuación final del conductor, con base en la cual se determina su categoría BRAG

## Preparación de los datos para el informe

Los datos sobre infracciones llegan al informe desde las [notificaciones](../../../moduli-1/uvedomleniya/index.html) configuradas para los vehículos. Por ello, antes de usar el informe es necesario [crear las notificaciones necesarias](../../../moduli-1/uvedomleniya/kak-sozdat-uvedomlenie.html) y asignarlas a los vehículos correspondientes.

El algoritmo determina el tipo de evento por el nombre de la notificación. Los nombres deben ajustarse estrictamente a la plantilla establecida:

-   BRAG Harsh Braking

-   BRAG Harsh Acceleration

-   BRAG Harsh Cornering

-   BRAG Overspeed

-   BRAG Overspeed 30-39

-   BRAG Overspeed 40-59

-   BRAG Overspeed 60-79

-   BRAG Overspeed 80-99

-   BRAG Overspeed 100-119

-   BRAG Overspeed 120

-   BRAG Seatbelt Violation

![Informe BRAG de seguridad de conducción (BRAG Report)](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__screen.png)

Las notificaciones deben asignarse a los vehículos cuyos datos deban tenerse en cuenta en el informe.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_5.png)

Si el nombre de la notificación se ha modificado, la notificación no existe o está asignada a un vehículo equivocado, el algoritmo puede no reconocer el evento. En ese caso, la infracción no se incluirá en el informe y los indicadores finales pueden calcularse de forma incorrecta.
