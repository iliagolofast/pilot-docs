---
title: "Pérdida de conexión"
---

El informe «Pérdida de conexión» contiene datos sobre los períodos en los que el sistema no recibió datos de los objetos de monitoreo. Con él puede saber con qué vehículo se perdió la conexión, cuándo ocurrió, cuánto tiempo duró y dónde se encontraba el objeto según los últimos datos recibidos.

Antes de generar el informe, es necesario seleccionar el período y los vehículos, e indicar un valor en el campo «Tiempo mín. (s)».

![](images/drex_poterya_svyazi_custom.png)

El campo «Tiempo mín. (s)» establece la duración mínima de la pérdida de conexión para que el evento se incluya en el informe. El valor se indica en segundos.

Por ejemplo:

-   120— el informe muestra los intervalos de dos minutos o más

-   300— se muestran los intervalos de cinco minutos o más

![Pérdida de conexión](images/drex_poterya_svyazi_screen.png)

Los intervalos cortos, cuya duración es inferior al valor indicado, no se incluyen en el informe. Este parámetro ayuda a descartar las interrupciones breves de la conexión y a conservar solo los eventos significativos.

### Qué se muestra en el informe

-   Objeto — nombre del vehículo u otro objeto de monitoreo

-   Carpeta — carpeta en la que se encuentra el objeto en la lista de objetos

-   Inicio — fecha y hora de inicio del intervalo durante el cual el sistema no recibió datos del objeto

-   Fin — fecha y hora de finalización del intervalo o de restablecimiento de la transmisión de datos

-   Duración — duración total de la ausencia de conexión

-   Dirección — dirección o ubicación del objeto según los últimos datos disponibles

![](images/drex_poterya_svyazi_custom_2.png)
