---
title: "Informe de inactividad"
---

El informe de inactividad sirve para controlar la duración de las inactividades de los vehículos. Permite determinar cuándo y dónde se produjo la inactividad, cuánto duró, qué conductor estaba asignado al objeto y cuánto combustible se consumió en ese período.

![](images/drex_otchyet_po_prostoyam_custom.png)

### Cómo se determina la inactividad

Se considera inactividad el período durante el cual el vehículo no se movió más tiempo del admisible establecido [en los ajustes del objeto](../../../obekty-1/kartochka-obekta/index.html#Настройки_объекта).

La duración admisible se define en la ficha del objeto, en el campo «Inactividad». Si es necesario, puede activar el control del encendido. En ese caso, la inactividad se registra solo si el vehículo no se mueve con el encendido activado.

![](images/drex_otchyet_po_prostoyam_custom_2.png)

1 — Configurar el tiempo de inactividad

2 — Activar el control del encendido

### Qué se muestra en el informe

-   Vehículo — nombre o número del objeto de monitoreo

-   Conductor — conductor asignado al vehículo o identificado por el sistema, por ejemplo, mediante iButton

-   Departamento — grupo al que pertenece el vehículo

-   Tipo de automóvil — tipo de vehículo, por ejemplo, turismo o camión

-   Inicio — fecha y hora de inicio de la inactividad

-   Fin — fecha y hora de finalización de la inactividad

-   Duración (hh:mm:ss) — duración de la inactividad, calculada como la diferencia entre la hora de inicio y la de finalización

-   Dirección — dirección en la que se encontraba el vehículo durante la inactividad

-   Coordenadas — latitud y longitud del lugar de la inactividad

![](images/drex_otchyet_po_prostoyam_custom_3.png)

### Consumo excesivo de combustible

Antes de generar el informe, puede marcar la casilla «Consumo excesivo de combustible». Si para el objeto hay configurado un sensor de nivel o de consumo de combustible, en el informe aparecerá una columna adicional:

-   Excessive fuel (Consumo excesivo de combustible) — cantidad de combustible consumida por el vehículo durante la inactividad.

![Informe de inactividad](images/drex_otchyet_po_prostoyam_screen.png)

![](images/drex_otchyet_po_prostoyam_custom_4.png)

### Filtro por conductores

Si activa el parámetro «Por conductores» (On Driver), a la derecha de la lista de objetos se abrirá un panel adicional «Conductores».

![Informe de inactividad](images/drex_otchyet_po_prostoyam_screen_2.png)

1 — Activar el filtro por conductores

2 — Selección del conductor en la lista

En este panel puede seleccionar uno, varios o un grupo de conductores. El informe mostrará solo los eventos relacionados con los conductores seleccionados.
