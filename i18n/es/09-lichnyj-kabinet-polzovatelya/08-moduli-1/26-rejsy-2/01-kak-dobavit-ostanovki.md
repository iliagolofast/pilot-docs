---
title: "Cómo añadir paradas"
---

Una parada es una zona geográfica que el vehículo debe visitar durante la ejecución de un viaje por la ruta.

1\. Vaya a la parte inferior del área de trabajo: aquí estará la lista de todas las paradas

![Cómo añadir paradas](images/drex_kak_dobavit_ostanovki_screen.png)

2\. Haga clic en el botón ![](images/drex_kak_dobavit_ostanovki_custom.png) para añadir una nueva parada

3\. En la ventana que se abre, indique:

![](images/drex_kak_dobavit_ostanovki_custom_2.png)

-   Nombre y descripción
    
-   Coordenadas: manualmente con las flechas o moviendo el marcador en el mapa
    
-   Radio de la parada (m): zona dentro de la cual se registra la llegada
    
    Si es necesario, marque las casillas:
    
    — parada técnica ![](images/drex_kak_dobavit_ostanovki_custom_3.png): no se tiene en cuenta en el ascenso y descenso de pasajeros, pero participa en el cálculo de la ruta
    
    <table><tbody><tr><td><span></span></td><td><div>Una parada técnica es un punto de la ruta que:</div><div>— no se muestra en el horario de los viajes de pasajeros</div><div>— no participa en el registro de ascensos y descensos: no se registran pasajeros en ella</div><div>— participa en la construcción de la ruta; por ejemplo, ayuda a trazar correctamente la trayectoria del recorrido</div><div>— puede usarse para controlar el movimiento del autobús; por ejemplo, como punto de control</div><div>— no afecta a los informes de flujo de pasajeros: sus datos no se incluyen en las estadísticas de ascensos y descensos</div></td></tr></tbody></table>
    
    — parada final  ![](images/drex_kak_dobavit_ostanovki_custom_4.png): punto de finalización de la ruta, a partir del cual comienza el trayecto de vuelta
    
    <table><tbody><tr><td><span></span></td><td><div>Si marca la casilla «Final» en una parada, el sistema la considerará la última parada de la ruta:</div><div>— el sistema recortará la ruta: las paradas posteriores a esta no se usarán en el viaje</div><div>— el autobús empezará a circular en sentido contrario, es decir, cambiará al horario de vuelta (si el viaje es bidireccional)</div><div>— en el horario y los informes solo se tendrán en cuenta las paradas anteriores a esta parada final y la propia parada final</div></td></tr></tbody></table>
    

![](images/drex_kak_dobavit_ostanovki_custom_5.png)

4\. Haga clic en «Guardar»: la parada aparecerá en la lista

![](images/drex_kak_dobavit_ostanovki_custom_6.png)

La lista muestra todas las paradas añadidas con su ID, radio, tipo y descripción.

Para editar una parada, haga doble clic en ella en la lista y realice los cambios en la ventana que se abre.

Para eliminar una parada de la lista, use el icono ![](images/drex_kak_dobavit_ostanovki_custom_7.png).

Cuando añada viajes, en la lista se mostrarán todos los viajes creados y el número de paradas de cada uno.

Haga clic en la flecha ![](images/drex_kak_dobavit_ostanovki_custom_8.png) junto al viaje para desplegar la lista de sus paradas.

![Cómo añadir paradas](images/drex_kak_dobavit_ostanovki_screen_2.png)

En cada registro de parada hay una flechita ![](images/drex_kak_dobavit_ostanovki_custom_9.png): haga clic en ella para abrir el menú y configurar la ruta:

-   Adelante / Atrás: cambiar el orden de la parada en la ruta
    
-   Giro: indicar que en esta parada el vehículo da la vuelta y comienza a circular en sentido contrario
    

![](images/drex_kak_dobavit_ostanovki_custom_10.png)

Para eliminar una parada de un viaje, haga clic en ella con el botón derecho del ratón en la lista y seleccione «Eliminar».

![](images/drex_kak_dobavit_ostanovki_custom_11.png)

## Cómo vincular una etiqueta RFID a una parada

La visita a una parada se puede determinar mediante una etiqueta RFID. Cuando el vehículo lee la etiqueta asociada a la parada, el sistema procesa los datos recibidos como una visita a esa parada dentro de la línea de autobús asignada.

Antes de vincular, añada y configure las etiquetas necesarias en el módulo [«Etiquetas RFID»](../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html). La etiqueta debe estar dentro del radio de la parada.

Para vincular etiquetas RFID:

1\. Cree una parada o seleccione una existente

![](images/drex_kak_dobavit_ostanovki_custom_12.png)

2\. Haga clic en el icono de etiqueta ![](images/drex_kak_dobavit_ostanovki_custom_13.png) junto a la parada

![Cómo añadir paradas](images/drex_kak_dobavit_ostanovki_screen_3.png)

3\. En la ventana «Etiquetas RFID de la parada», busque la etiqueta deseada por su nombre o identificador

![](images/drex_kak_dobavit_ostanovki_custom_14.png)

4\. Marque la casilla junto a la etiqueta

![](images/drex_kak_dobavit_ostanovki_custom_15.png)

5\. Si es necesario, seleccione otras etiquetas

6\. Haga clic en «Guardar»

A una misma parada se le pueden vincular varias etiquetas RFID. En ese caso, el sistema podrá procesar la visita al leerse cualquiera de ellas. Para mostrar solo las etiquetas ya vinculadas, marque la casilla «Vinculadas».

![Cómo añadir paradas](images/drex_kak_dobavit_ostanovki_screen_4.png)

Si la etiqueta que necesita no está en la lista, compruebe que esté añadida y configurada en el módulo [«Etiquetas RFID»](../rfid-metki-2/index.html). Asegúrese también de que la etiqueta se encuentre dentro del radio de la parada.

Tras la vinculación, [añada la parada a la línea de autobús](kak-sozdat-rejs.html) y después [asigne esta línea al vehículo](kak-privyazat-avtobus-k-rejsu.html). Solo después de completar todas las etapas el sistema podrá asociar la etiqueta RFID leída con la parada y procesar su visita.
