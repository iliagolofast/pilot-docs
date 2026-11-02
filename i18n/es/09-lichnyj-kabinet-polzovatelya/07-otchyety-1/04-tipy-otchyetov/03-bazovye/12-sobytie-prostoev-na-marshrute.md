---
title: "Evento de inactividad en la ruta"
---

El informe «Eventos de inactividad en la ruta» contiene datos sobre los casos en que el objeto de monitoreo permaneció inmóvil más tiempo del permitido. Con él puede saber dónde y cuándo se produjo la inactividad, qué conductor estaba asignado al objeto y en qué geocerca se encontraba.

![](images/drex_sobytie_prostoev_na_marshrute_custom.png)

### Cómo se determina la inactividad

La duración admisible de la inactividad se define en la ficha del objeto, [en «Ajustes»](../../../obekty-1/kartochka-obekta/index.html#Настройки_объекта), en el campo «Inactividad, s».

El evento se genera de la siguiente manera:

1\. El vehículo se detiene

2\. Comienza la cuenta del tiempo de inactividad establecido

3\. Si el vehículo no reanuda el movimiento antes de que finalice ese tiempo, el sistema registra el evento

4\. La inactividad continúa hasta que se reanude el movimiento o se apague el encendido, si se tiene en cuenta su estado

Por ejemplo, si para el objeto se ha establecido un tiempo de inactividad de 00:10:00, el evento aparecerá cuando el vehículo permanezca inmóvil más de 10 minutos.

Si es necesario, en los ajustes del objeto puede activar el control del encendido. En ese caso, el evento de inactividad se registra solo cuando el vehículo no se mueve con el encendido activado.

![Evento de inactividad en la ruta](images/drex_sobytie_prostoev_na_marshrute_screen.png)

1 — Configurar el tiempo de inactividad

2 — Activar el control del encendido

### Qué se muestra en el informe

-   Objeto — nombre o número del objeto de monitoreo

-   Fecha y hora — fecha y hora de registro del evento de inactividad

-   Evento — información sobre el exceso del tiempo de inactividad admisible, por ejemplo, «Inactividad de más de 00:10:00»

-   Conductores — conductor asignado al objeto en el momento del evento

-   Geocercas — geocerca en la que se registró la inactividad

-   Coordenadas — latitud y longitud del lugar donde se encontraba el objeto durante la inactividad

![](images/drex_sobytie_prostoev_na_marshrute_custom_2.png)
