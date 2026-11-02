---
title: "Informe de temperatura"
---

El informe «Informe de temperatura» muestra el cambio en las lecturas de los sensores de temperatura durante el período seleccionado. Para cada día y objeto de monitoreo se genera un gráfico independiente.

En el eje horizontal se muestra el tiempo; en los ejes verticales, la temperatura y la humedad. Las lecturas de los sensores se representan con líneas de distintos colores, y las líneas grises horizontales indican los límites del rango de temperatura permitido.

![Informe de temperatura](images/drex_otchyet_po_temperature_screen.png)

Al pasar el puntero sobre el gráfico aparece una ventana emergente con la fecha, la hora y las lecturas de los sensores en el momento seleccionado.

![](images/drex_otchyet_po_temperature_custom.png)

Si abre el panel con el mapa y selecciona un punto del gráfico, en el mapa se mostrará la ubicación del objeto en ese momento. Así puede seguir la relación entre los cambios de temperatura y la ruta.

![](images/drex_otchyet_po_temperature_custom_2.png)

## Cómo configurar el sensor de temperatura

La configuración del sensor de temperatura le ayuda a obtener datos precisos sobre el estado de la maquinaria o del transporte. Una configuración correcta del sensor y la indicación de los rangos de trabajo ayudan a filtrar automáticamente los valores incorrectos, de modo que solo vea información fiable.

El sensor de temperatura se añade igual que cualquier otro sensor. Encontrará más información sobre cómo añadir sensores en este [artículo](../../../datchiki-1/dobavlenie-datchika.html).

![](images/drex_otchyet_po_temperature_custom_3.png)

Aquí explicamos qué parámetros hay que indicar para el sensor de temperatura para que los informes se generen correctamente.

Cómo configurar el sensor de temperatura:

1\. [Añada](../../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик) el sensor

2\. Indique el nombre y la descripción

3\. En la lista desplegable seleccione el [tipo de sensor](../../../datchiki-1/tipy-datchikov/index.html)

4\. Indique el campo de datos. Seleccione de qué parámetro se tomarán los datos (por ejemplo, engine\_temp).  Es importante elegir precisamente el campo en el que el sistema recibe los valores de temperatura.

5\. Defina el umbral mínimo y máximo

Configure el rango de trabajo del sensor: los límites permitidos de los valores en los que el sensor funciona en modo normal. Si las lecturas salen de este rango, el sistema registrará la desviación.

En el gráfico este rango se resaltará con líneas grises, de modo que verá enseguida cuándo la temperatura estuvo dentro de la norma.

6\. Configure el filtro de valores mínimos y máximos

Establezca los valores mínimo y máximo para que el sistema no tenga en cuenta datos erróneos (por ejemplo, si el sensor devolvió un error o un valor incorrecto). Estos valores se excluirán automáticamente de los informes.
