---
title: "Viajes y estacionamientos"
---

El informe «Viajes y estacionamientos» contiene datos sobre los períodos de movimiento y de estacionamiento de los objetos de monitoreo seleccionados. Con él puede determinar cuándo y dónde el vehículo inició y finalizó el movimiento, cuánto tiempo estuvo en ruta o estacionado, qué distancia recorrió y a qué velocidad se movió.

Los eventos se muestran en orden cronológico. Cada fila corresponde a un viaje o a un estacionamiento. En la parte superior del informe se indican el objeto de monitoreo y el período analizado.

![](images/drex_poezdki_i_stoyanki_custom.png)

### Qué se muestra en el informe

• Estado — estado del objeto: «Movimiento» o «Estacionamiento»; a los estacionamientos también se les asigna un número de orden

• Comienzo — fecha y hora de inicio del movimiento o del estacionamiento

• Finalización — fecha y hora de finalización del movimiento o del estacionamiento

• Duración — duración del viaje o del estacionamiento correspondiente

• Distancia, km — distancia recorrida por el objeto durante el viaje; en un estacionamiento el valor no se muestra

• Inicio — dirección de inicio del movimiento o lugar de estacionamiento

• Fin — dirección de finalización del movimiento; en un estacionamiento el valor puede no mostrarse

• Coordenadas — coordenadas geográficas de inicio y fin del viaje o coordenadas del lugar de estacionamiento

Las direcciones de las columnas «Inicio» y «Fin» se presentan como enlaces y permiten ir a la ubicación correspondiente.

![](images/drex_poezdki_i_stoyanki_custom_2.png)

### Indicadores totales

En la parte inferior del informe se muestran los indicadores totales, primero del bloque de datos actual, por ejemplo de un objeto en un día, y después de todo el período del informe seleccionado.

• Kilometraje total — distancia total recorrida por el objeto en el bloque actual del informe

• Track Time — duración total del recorrido, que incluye el tiempo de movimiento y los estacionamientos cortos registrados dentro del recorrido

• Tiempo de movimiento — tiempo total durante el cual el objeto estuvo en movimiento

• Track Parking Time — duración total de los estacionamientos incluidos en el recorrido; junto con el tiempo de movimiento forma el valor Track Time

• Tiempo de estacionamiento — duración total de todos los estacionamientos del objeto, incluidos los estacionamientos antes del primer viaje, entre viajes y después del último viaje dentro del período del informe

• Velocidad media — velocidad media del objeto durante el movimiento

• Velocidad máxima — mayor velocidad registrada durante el movimiento

### Totales de todo el período del informe

Bajo la línea divisoria se muestran los indicadores análogos calculados para todos los bloques del informe:

• Kilometraje total del período — distancia total recorrida por el objeto en todo el período seleccionado

• Tracks Time del período — duración total de todos los recorridos del período, incluidos el movimiento y los estacionamientos dentro de los recorridos

• Tiempo de movimiento del período — tiempo total de movimiento del objeto en todo el período seleccionado

• Track Parking Time del período — duración total de los estacionamientos incluidos en los recorridos del período seleccionado

• Tiempo de estacionamiento del período — duración total de la permanencia del objeto en estacionamiento dentro de los límites del período seleccionado

• Velocidad media del período — velocidad media de movimiento del objeto en todo el período seleccionado

• Velocidad máxima del período — mayor velocidad registrada en todo el período seleccionado

![](images/drex_poezdki_i_stoyanki_custom_3.png)

### Cómo se contabiliza el tiempo de estacionamiento

El informe abarca todo el intervalo de tiempo seleccionado, incluidos los períodos anteriores al primer viaje y posteriores al último:

• Si el vehículo no se movió al comienzo del período del informe, el sistema añade un estacionamiento desde el inicio del período hasta el primer movimiento registrado

• Si después del último movimiento el objeto permaneció inmóvil, el estacionamiento se muestra hasta el final del período del informe

• Si el final del período seleccionado está en el futuro, el último estacionamiento se muestra hasta el momento actual

De este modo, el informe tiene en cuenta no solo los viajes, sino también los intervalos entre ellos, para que la secuencia de eventos dentro del período analizado sea continua.

### Filtro de visualización de viajes y estacionamientos

En la parte superior del informe generado se encuentran los parámetros «Estacionamientos» y «Viajes».

![Viajes y estacionamientos](images/drex_poezdki_i_stoyanki_screen.png)

Permiten cambiar las filas que se muestran sin volver a seleccionar el período del informe:

• con «Estacionamientos» y «Viajes» activados — se muestran todos los eventos

• con solo «Viajes» activado — se muestran únicamente los períodos de movimiento

![](images/drex_poezdki_i_stoyanki_custom_4.png)

• con solo «Estacionamientos» activado — se muestran únicamente los períodos en que el objeto estuvo estacionado

![](images/drex_poezdki_i_stoyanki_custom_5.png)

Para mostrar u ocultar el tipo de evento deseado, marque o desmarque la casilla correspondiente.

### Parámetros del informe

Antes de generar el informe, puede configurar parámetros adicionales:

![Viajes y estacionamientos](images/drex_poezdki_i_stoyanki_screen_2.png)

• Conductores — añade a la tabla la columna «Conductor» con información sobre el conductor asignado al objeto durante el evento

![](images/drex_poezdki_i_stoyanki_custom_6.png)

• Tipo de vehículo — añade a la tabla la columna «Tipo de vehículo» con la categoría del vehículo

![](images/drex_poezdki_i_stoyanki_custom_7.png)

• Gráfico — añade al informe una representación gráfica de los períodos de movimiento y de estacionamiento

![](images/drex_poezdki_i_stoyanki_custom_8.png)

El gráfico aparecerá sobre la parte tabular y mostrará la secuencia de eventos en la escala de tiempo:

-   «Estacionamiento» — períodos en los que el objeto no se movió

-   «Movimiento» — períodos de viajes del objeto

El gráfico permite comparar visualmente la duración de los viajes y de los estacionamientos y determinar el momento de transición entre estados. Para verlo con detalle, puede cambiar la escala del tramo seleccionado de la escala de tiempo. El botón Reset zoom restablece la escala original del gráfico.
