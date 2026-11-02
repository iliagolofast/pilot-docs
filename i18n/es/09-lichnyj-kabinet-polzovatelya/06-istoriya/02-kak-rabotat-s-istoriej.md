---
title: "Cómo trabajar con el historial"
---

En este artículo veremos las funciones del historial que ayudan a seguir el movimiento y los parámetros del objeto y a trabajar con los datos obtenidos.

## Lista de recorridos

Después de seleccionar el período de tiempo y los parámetros para generar el historial, en los resultados de la búsqueda se muestra la lista de recorridos.

Un recorrido es una línea en el mapa que muestra la ruta de desplazamiento del objeto. El recorrido se compone de puntos que marcan los lugares donde estuvo el objeto en distintos momentos.

![Cómo trabajar con el historial](images/drex_kak_rabotat_s_istoriej_screen.png)

La lista se compone de registros de recorridos con los parámetros: fecha del recorrido, inicio, fin, duración, distancia y velocidad máxima del objeto.

<table><tbody><tr><td><span></span></td><td><div>Para configurar los parámetros que influyen en la construcción del recorrido, vaya a la <a href="../obekty-1/kartochka-obekta/index.html#Настройки_карточка_объекта"><span>«Configuración del objeto»</span></a></div></td></tr></tbody></table>

Configure la lista de recorridos como le resulte más cómodo. Elija qué columnas con parámetros se mostrarán, por ejemplo, la duración del aparcamiento o del estacionamiento.

Cómo configurar la lista de registros de recorridos:

1\. En el encabezado de cualquier columna, haga clic en la flecha ![](images/drex_kak_rabotat_s_istoriej_custom.png). Aparecerá el menú con los ajustes de la columna, donde puede:

• Ordenar los datos en orden ascendente o descendente

• Elegir qué columnas se muestran en la pantalla

• Agrupar los registros por el parámetro seleccionado

2\. Para configurar qué columnas se muestran:

-   Haga clic en «Columnas»: se abrirá la lista de parámetros disponibles para mostrar en la lista
    
-   Marque las casillas de los parámetros que desea ver
    

![](images/drex_kak_rabotat_s_istoriej_custom_2.png)

<table><tbody><tr><td><div><h3>Botones debajo de la lista de recorridos</h3></div><div><img alt="" src="images/drex_kak_rabotat_s_istoriej_custom_3.png"> «Seguir»: sigue el objeto en el mapa en tiempo real</div><div><img alt="" src="images/drex_kak_rabotat_s_istoriej_custom_4.png"> «Volver a «En línea»: vuelve a la pestaña «En línea», pero conserva el reproductor y el recorrido en el mapa</div><div><img alt="" src="images/drex_kak_rabotat_s_istoriej_custom_5.png"> «Cerrar»: quita de la lista los registros de los recorridos seleccionados</div><div><img alt="Cómo trabajar con el historial" src="images/drex_kak_rabotat_s_istoriej_screen_2.png" data-full-src="drex_kak_rabotat_s_istoriej_screen_2.png" data-full-width="1214" data-full-height="546"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

## Reproductor

Con el reproductor puede ver cómo se desplazó el objeto en el pasado.

![](images/drex_kak_rabotat_s_istoriej_custom_6.png)

Haga clic en el botón «Inicio» ![](images/drex_kak_rabotat_s_istoriej_custom_7.png) para empezar la visualización.

Observe el movimiento del objeto en el mapa y en el gráfico de velocidad de la parte inferior de la pantalla.

![](images/drex_kak_rabotat_s_istoriej_custom_8.png)

Junto al reproductor verá la fecha, la hora y la velocidad actual del objeto en un momento determinado.

Para acelerar la visualización, haga clic en el botón de aumento de velocidad: esto ayuda a revisar más rápido las rutas largas.

![](images/drex_kak_rabotat_s_istoriej_custom_9.png)

## Recorrido en el mapa

Al seleccionar un registro en la lista de recorridos, el sistema muestra en el mapa la ruta de desplazamiento del objeto. Puede añadir al mapa varios recorridos a la vez, por ejemplo, para comparar las rutas de uno o de varios objetos en distintos períodos de tiempo.

Los recorridos pueden mostrarse en distintos colores según los parámetros seleccionados.

### Color del recorrido según la velocidad

El color de la velocidad se configura en la sección [«Velocidad en color»](../nastrojki-dogovora-2/karta-i-geokoding.html#скорость_по_цвету) de la pestaña «Mapa y geocodificación». Los tramos de la ruta se colorean según la velocidad de desplazamiento.

![](images/drex_kak_rabotat_s_istoriej_custom_10.png)

### Color del recorrido según las lecturas del sensor

El recorrido se colorea según las lecturas del sensor [multiposición](../datchiki-1/tipy-datchikov/index.html#Многопозиционный_датчик) seleccionado a lo largo de toda la ruta de desplazamiento.

Para mostrar el recorrido con indicación de color de las lecturas del sensor:

1\. Asegúrese de que el sensor esté [configurado](../datchiki-1/dobavlenie-datchika.html) y tenga colores definidos en la tabla de [calibración](../datchiki-1/dobavlenie-datchika.html#тарировочная_таблица)

![](images/drex_kak_rabotat_s_istoriej_custom_11.png)

![](images/drex_kak_rabotat_s_istoriej_custom_12.png)

2\. Genere el historial de desplazamientos del objeto seleccionando recorridos en el «Historial»

3\. Una vez mostrado el recorrido, busque el panel con la lista de sensores en la parte inferior del mapa

![](images/drex_kak_rabotat_s_istoriej_custom_13.png)

4\. Seleccione el sensor necesario de la lista

5\. Haga clic en el botón de paleta que aparece

![](images/drex_kak_rabotat_s_istoriej_custom_14.png)

6\. El recorrido en el mapa se coloreará con los colores correspondientes a las lecturas del sensor en cada punto de la ruta

![](images/drex_kak_rabotat_s_istoriej_custom_15.png)

Para ampliar el área del mapa, contraiga el panel inferior con el gráfico haciendo clic en el botón ![](images/drex_kak_rabotat_s_istoriej_custom_16.png)

![Cómo trabajar con el historial](images/drex_kak_rabotat_s_istoriej_screen_3.png)

### Marcadores de eventos

En el mapa se marcan con iconos especiales los eventos importantes ocurridos durante el desplazamiento, por ejemplo, drenajes de combustible, excesos de velocidad y estacionamientos. Para obtener información detallada sobre un evento, simplemente haga clic en el marcador correspondiente del mapa.

![](images/drex_kak_rabotat_s_istoriej_custom_17.png)

![](images/drex_kak_rabotat_s_istoriej_custom_18.png)

## Eventos

Los eventos del «Historial» son las acciones que realizó el objeto. Se muestran en la pestaña «Eventos».

![](images/drex_kak_rabotat_s_istoriej_custom_19.png)

En la pestaña [«Mapa y geocodificación»](../nastrojki-dogovora-2/karta-i-geokoding.html#отображение_событий) puede configurar qué tipos de eventos se mostrarán en el «Historial».

![](images/drex_kak_rabotat_s_istoriej_custom_20.png)

Para ver los eventos en el «Historial»:

1\. Genere el historial del objeto y seleccione los recorridos

![](images/drex_kak_rabotat_s_istoriej_custom_21.png)

2\. Vaya a la pestaña «Eventos». Aquí se mostrarán todas las acciones del objeto en el recorrido seleccionado

![](images/drex_kak_rabotat_s_istoriej_custom_22.png)

3\. Marque las casillas de todos los eventos de la lista que desea ver en el mapa

![](images/drex_kak_rabotat_s_istoriej_custom_23.png)

4\. Vaya al mapa para ver los eventos seleccionados en el recorrido

![](images/drex_kak_rabotat_s_istoriej_custom_24.png)

## Gráfico

El gráfico muestra la velocidad de desplazamiento y las lecturas de los sensores.

Al seleccionar un recorrido, en el gráfico se muestra automáticamente solo la velocidad.

![](images/drex_kak_rabotat_s_istoriej_custom_25.png)

 Para añadir las lecturas de los sensores, seleccione los sensores necesarios en el panel de sensores. Después, sus valores aparecerán en el gráfico.

![](images/drex_kak_rabotat_s_istoriej_custom_26.png)

![](images/drex_kak_rabotat_s_istoriej_custom_27.png)

Para ocultar temporalmente los datos de un sensor, haga clic en su nombre a la izquierda del gráfico. El nombre quedará tachado y la línea de ese parámetro desaparecerá del gráfico. Si vuelve a hacer clic, se restablecerá la visualización.

![](images/drex_kak_rabotat_s_istoriej_custom_28.png)

Haga clic en el botón «Seleccionar todos los sensores» para mostrar todas las lecturas disponibles.

![](images/drex_kak_rabotat_s_istoriej_custom_29.png)

![](images/drex_kak_rabotat_s_istoriej_custom_30.png)

Para borrar del gráfico todas las lecturas seleccionadas, haga clic en el botón «Borrar» ![](images/drex_kak_rabotat_s_istoriej_custom_31.png).
