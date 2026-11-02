---
title: "Viajes y estacionamientos MC (Trips and Parkings MC)"
---

El informe «Viajes y estacionamientos MC» (Trips and Parkings MC) contiene datos sobre los períodos de movimiento y de estacionamiento del objeto de monitoreo seleccionado. Permite reconstruir la secuencia de eventos, determinar la hora y la duración de los viajes y de los estacionamientos, las direcciones inicial y final, y calcular el kilometraje y otros indicadores operativos.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom.png)

### Qué se muestra en el informe

• Estado — estado del objeto: «Movimiento» o «Estacionamiento»

• Comienzo — fecha y hora de inicio del movimiento o del estacionamiento

• Finalización — fecha y hora de finalización del movimiento o del estacionamiento

• Dur. — duración del evento correspondiente

• Distancia, km — distancia recorrida por el objeto durante el movimiento; en un estacionamiento el valor no se muestra

• Inicio — dirección de inicio del viaje o lugar del estacionamiento

• Fin — dirección de finalización del viaje; en un estacionamiento el valor puede no mostrarse

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_2.png)

### Indicadores totales

Bajo la tabla se muestran los indicadores totales, primero del bloque actual del informe y después de todo el período seleccionado:

• Kilometraje total — distancia total recorrida por el objeto

• Track Time — duración total de los recorridos generados

• Tiempo de movimiento — tiempo total que el objeto estuvo en movimiento

• Track Parking Time — duración de los estacionamientos contabilizados dentro de los recorridos

• Tiempo de estacionamiento — duración total de todos los estacionamientos dentro del período del informe

• Velocidad media — velocidad media de movimiento del objeto

• Vel. máx. — mayor velocidad registrada

En el bloque «del período» se muestran los indicadores análogos calculados con todos los datos incluidos en el informe.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_3.png)

### Filtro de viajes y estacionamientos

En la parte superior del informe generado se encuentran los parámetros «Estacionamientos» y «Viajes»:

• con «Estacionamientos» y «Viajes» activados — se muestran todos los eventos

![Viajes y estacionamientos MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen.png)

• con solo «Viajes» activado — se muestran únicamente los períodos de movimiento

• con solo «Estacionamientos» activado — se muestran únicamente los períodos de estacionamiento

Las casillas permiten cambiar las filas que se muestran sin volver a generar el informe.

### Parámetros antes de generar el informe

Antes de generar el informe están disponibles parámetros adicionales:

• Mostrar datos de depuración (Show debug)

• Restablecimiento automático \[Beta\] (Auto reset \[Beta\])

• Mostrar velocidad máxima y media (Show max/avg speed)

• Restablecer kilometraje (Reset milage)

• Actualizar kilometraje (Update milage)

• Conductores

• Tipo de vehículo

• Combustible

• Gráfico

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_4.png)

### Mostrar datos de depuración (Show debug)

El parámetro «Mostrar datos de depuración» (Show debug) sirve para diagnosticar el cálculo de los viajes y del kilometraje.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_5.png)

Al activarlo, en la parte superior del informe generado aparece el panel «Menú de depuración» (Debug menu).

![Viajes y estacionamientos MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen_2.png)

El panel contiene parámetros adicionales:

• Tipo

• Kilometraje

• Mostrar TS (Show TS)

• Mostrar latitud y longitud (Show Lat/Lon)

Estos parámetros permiten ver los datos internos a partir de los cuales se generaron los viajes y los estacionamientos.

![Viajes y estacionamientos MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen_3.png)

**1 — Tipo**

Si en el Debug menu activa el parámetro «Tipo», se añade a la tabla la columna «Tipo».

En ella se muestra el tipo interno o el identificador del evento que el sistema utilizó para generar la fila. Por ejemplo:

• renderStart — evento generado al inicio del período del informe

• render\_LP\_tracks — estacionamiento generado entre tramos de movimiento

• one\_\[…\], m\_start\_\[…\], m\_last\_\[…\] — identificadores internos o formas de generar los tramos de movimiento

Estos valores están pensados sobre todo para el diagnóstico. Ayudan a determinar a partir de qué evento o etapa del algoritmo se generó el viaje o el estacionamiento.

**2 — Kilometraje**

Si en el Debug menu activa el parámetro «Kilometraje», se añaden a la tabla columnas con datos detallados del odómetro:

• Odo type — fuente o tipo de datos del odómetro, por ejemplo CAN

• Inicio — lectura del odómetro al inicio del viaje

• Fin — lectura del odómetro al final del viaje

Estas columnas permiten comprobar a partir de qué lecturas se calculó el valor de la columna «Distancia, km». En los estacionamientos puede no haber lecturas del odómetro.

**3 — Mostrar TS (Show TS)**

Si activa el parámetro «Mostrar TS» (Show TS), los valores de las columnas «Comienzo» y «Finalización» se muestran como marcas de tiempo: valores numéricos de timestamp.

El sistema utiliza el timestamp para almacenar la hora exacta del evento. Este modo está pensado para la comprobación técnica de los datos. Con el parámetro desactivado, la hora se muestra en el formato habitual de fecha y hora.

**4 — Mostrar latitud y longitud (Show Lat/Lon)**

Si activa el parámetro «Mostrar latitud y longitud» (Show Lat/Lon), en lugar de las direcciones en las columnas «Inicio» y «Fin» se muestran las coordenadas geográficas:

• lat — latitud

• lon — longitud

En un viaje se indican las coordenadas de inicio y fin del movimiento. En un estacionamiento se muestran las coordenadas del lugar en que se encuentra el objeto.

### Restablecimiento automático \[Beta\] (Auto reset \[Beta\])

El parámetro «Restablecimiento automático \[Beta\]» (Auto reset \[Beta\]) se utiliza al calcular el kilometraje a partir de las lecturas del odómetro. El sistema intenta determinar automáticamente los casos de restablecimiento o de ruptura de la secuencia de lecturas, por ejemplo cuando el nuevo valor del odómetro es menor que el anterior, y tenerlos en cuenta al calcular la distancia.

### Restablecer kilometraje (Reset milage)

El parámetro «Restablecer kilometraje» (Reset milage) activa el procesamiento de los eventos relacionados con el restablecimiento de las lecturas de kilometraje. Se utiliza para excluir la diferencia incorrecta entre las lecturas anteriores y posteriores a un restablecimiento detectado.

### Actualizar kilometraje (Update milage)

El parámetro «Actualizar kilometraje» (Update milage) activa la consideración de las lecturas de kilometraje actualizadas al generar el informe. Afecta a los valores del odómetro utilizados y a la distancia calculada.

Los cambios pueden verse en los siguientes datos:

• lecturas inicial y final del odómetro

• distancia de cada viaje

• kilometraje total

### Mostrar velocidad máxima y media (Show max/avg speed)

Si activa el parámetro «Mostrar velocidad máxima y media» (Show max/avg speed), a la derecha de la tabla aparecerán columnas adicionales:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_6.png)

• Vel. máx. — mayor velocidad registrada durante el viaje

• Vel. media — velocidad media del objeto durante el viaje

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_7.png)

### Conductores

Si activa el parámetro «Conductores», se añade a la tabla la columna «Conductor».

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_8.png)

En ella se muestra el conductor asignado al objeto durante el viaje o el estacionamiento correspondiente. Si no se asignó ningún conductor o no se recibieron datos, la celda puede quedar vacía.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_9.png)

### Tipo de vehículo

Si activa el parámetro «Tipo de vehículo», se añade a la tabla la columna del mismo nombre.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_10.png)

 En ella se muestra la categoría o el tipo de vehículo indicado en los ajustes del objeto.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_11.png)

### Combustible

Si activa el parámetro «Combustible», en la parte de totales del informe se muestran indicadores adicionales:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_12.png)

• Consumo total, l/100 km — consumo de combustible calculado

• Remanente al inicio, l — cantidad de combustible al comienzo del período del informe

• Remanente al final, l — cantidad de combustible al final del período del informe

• Consumo total del período — consumo total calculado de combustible en todo el período seleccionado

La disponibilidad y la precisión de estos valores dependen de la existencia del sensor de nivel de combustible y de sus ajustes.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_13.png)

### Gráfico

Si activa el parámetro «Gráfico», sobre la tabla aparecerá una escala de tiempo que muestra la secuencia de eventos:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_14.png)

• «Estacionamiento» — períodos en los que el objeto no se movió

• «Movimiento» — períodos de movimiento del objeto

• eje horizontal — fecha y hora dentro del período del informe

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_15.png)

El gráfico ayuda a comparar visualmente la duración de los viajes y de los estacionamientos, a determinar la hora de inicio de cada movimiento y a detectar los períodos prolongados sin movimiento.
