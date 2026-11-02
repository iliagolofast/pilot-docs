---
title: "Cómo crear una ruta"
---

Para crear una ruta en el sistema, hay que rellenar los parámetros principales en el constructor y añadir los puntos de la ruta que se mostrarán en el mapa. En este artículo explicamos cómo crear una ruta e indicar sus parámetros para que esté lista para usarse en el sistema.

## Cómo crear una ruta

1\. Vaya a la pestaña «Rutas»

![](images/drex_kak_sozdat_marshrut___custom.png)

2\. Haga clic en el botón ![](images/drex_kak_sozdat_marshrut___custom_2.png): se abrirá el formulario «Construir ruta»

![Cómo crear una ruta](images/drex_kak_sozdat_marshrut___screen.png)

3\. Rellene los parámetros de la ruta

![](images/drex_kak_sozdat_marshrut___custom_3.png)

### Ajustes principales

1\. Nombre

Indique un nombre claro para la ruta, por ejemplo: «Ruta n.º 5», «Reparto por el centro», «Almacén — Cliente».

2\. Alcance de detección (km)

Este parámetro determina a qué distancia de la línea de la ruta se sigue considerando que el vehículo está en la ruta.

En pocas palabras, el sistema crea alrededor de la ruta un «corredor». Por ejemplo, si indica 0.3 km, significa 300 metros a cada lado de la línea de la ruta.

Mientras el vehículo circula dentro de este corredor, el sistema considera que sigue la ruta. Si sale de sus límites, se registra una salida de la ruta.

El valor puede indicarse como número decimal (por ejemplo, 0.3).  Un valor demasiado pequeño (por ejemplo, 0.05 km) puede provocar falsas activaciones por el error del GPS. Un valor demasiado grande (por ejemplo, 5 km) hará que se consideren parte de la ruta desvíos importantes.

3\. Geocodificador

Seleccione el servicio que inserta automáticamente la dirección según las coordenadas de los puntos de la ruta.

### Tiempo de control

Es el tiempo planificado de recorrido de toda la ruta.

Por ejemplo, si la ruta suele durar 2 horas y 30 minutos, indique 2 horas y 30 minutos.

Este valor se utiliza en los informes:

— para comparar lo planificado con lo real

— para ver si el conductor cumple con la norma

### Porcentaje de recorrido de la ruta

Este parámetro determina qué porcentaje de puntos debe visitarse para que la ruta se considere completada.

Por ejemplo, si hay 10 puntos definidos y el porcentaje establecido es del 90 %, el conductor puede omitir un punto y la ruta se considerará igualmente completada. Esto permite tener en cuenta circunstancias de fuerza mayor en la carretera, por ejemplo, un accidente o un atasco, cuando el conductor se ve obligado a evitar parte de la ruta.

-   Casilla «Activo»
    

Si desea que la regla del porcentaje se aplique realmente:

1\. Indique el porcentaje deseado (por ejemplo, 80)

2\. Marque la casilla «Activo»

3\. Guarde el constructor de rutas

## Cómo añadir puntos de la ruta

Un punto de la ruta es una posición de control donde se registra el paso del vehículo.

1\. Vaya a la sección «Puntos», debajo de los ajustes de la ruta

2\. Haga clic en el botón ![](images/drex_kak_sozdat_marshrut___custom_2.png)

3\. Seleccione el lugar deseado en el mapa o introduzca la dirección manualmente. El punto aparecerá en el mapa

![](images/drex_kak_sozdat_marshrut___custom_4.png)

4\. Si es necesario, arrastre el marcador a la ubicación exacta

En el mapa, el punto se muestra con un icono con número rodeado por un círculo: el radio de registro. Este radio, que en el mapa aparece como una línea roja discontinua, determina cuándo el vehículo ha entrado o salido del punto de control. Si el vehículo entra en el radio del punto, el sistema registra su visita.

![](images/drex_kak_sozdat_marshrut___custom_5.png)

Para cambiar el radio del punto, haga clic en él con el botón izquierdo del ratón y estírelo hasta el tamaño deseado.

El radio influye en la precisión del registro: cuanto mayor es, mayor es el error admisible al determinar la visita. Un radio demasiado grande puede dar por válida la llegada antes de la parada real, y uno demasiado pequeño puede provocar que se omita el punto.

Si el vehículo no cruzó el radio del punto de control, el sistema no registrará su visita; esto se considerará una salida de la ruta.

5\. Repita el proceso para los demás puntos de la ruta y haga clic en «Guardar»

Si añade dos o más puntos, el sistema construirá automáticamente la ruta entre ellos.

![](images/drex_kak_sozdat_marshrut___custom_6.png)

### Cómo vincular una etiqueta RFID / BLE a un punto de la ruta

Una etiqueta BLE es un pequeño dispositivo físico (Bluetooth Low Energy) que se instala en un lugar concreto, por ejemplo, en la parada final o en las instalaciones del cliente.

Cuando el vehículo se acerca a ese punto, el rastreador detecta la etiqueta y transmite al sistema su identificador único (parámetro IButton).

Para qué sirve:

— si el GPS funciona de forma inestable o está bloqueado

— si es importante registrar con precisión la llegada a un lugar concreto

— si es necesario contabilizar correctamente el cumplimiento de las rutas

<table><tbody><tr><td><span></span></td><td><div>Las etiquetas solo se pueden vincular a los puntos de la ruta si está conectado el módulo <a href="../rfid-metki-2/index.html"><span>Etiquetas RFID</span></a>. Primero es necesario configurar las etiquetas en este módulo. Para saber cómo crear una etiqueta, lea este <a href="../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html"><span>artículo</span></a>.</div></td></tr></tbody></table>

Si utiliza etiquetas BLE:

1\. Abra la ruta

2\. Seleccione el punto concreto

![](images/drex_kak_sozdat_marshrut___custom_6.png)

3\. Junto al punto deseado, haga clic en el icono de etiqueta  ![](images/drex_kak_sozdat_marshrut___custom_7.png)

4\. En la ventana que se abre, seleccione la etiqueta deseada y vincúlela al punto

La etiqueta debe estar dentro del radio del punto.

![](images/drex_kak_sozdat_marshrut___custom_8.png)

5\. Haga clic en «Guardar»

Se pueden vincular varias etiquetas a un mismo punto.

![](images/drex_kak_sozdat_marshrut___custom_9.png)

Tras vincular la etiqueta al punto, guarde la ruta.

Cuando el vehículo recorre la ruta, el sistema actúa con la siguiente lógica:

1\. Comprueba si al punto está vinculada una etiqueta BLE

2\. Busca un evento IButton en un intervalo de ±5 minutos respecto a la hora de paso

3\. Si se detecta la etiqueta, la visita al punto se registra por BLE

4\. Si no se detecta la etiqueta, se usa la comprobación estándar por geocerca GPS

De este modo, incluso si el GPS funciona de forma inestable, la ruta se contabilizará correctamente, según la llegada real al punto.

## Cómo ver o editar una ruta

1\. Vaya a la pestaña «Rutas»

2\. Busque la ruta deseada

3\. Haga clic en ella con el botón derecho del ratón

![](images/drex_kak_sozdat_marshrut___custom_10.png)

4\. Seleccione «Editar»

5\. Se abrirá el constructor de rutas, donde podrá realizar cambios o simplemente ver los ajustes

![](images/drex_kak_sozdat_marshrut___custom_11.png)
