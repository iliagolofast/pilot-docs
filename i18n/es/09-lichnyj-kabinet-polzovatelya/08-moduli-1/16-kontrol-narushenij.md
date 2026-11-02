---
title: "Control de infracciones"
---

El módulo «Control de infracciones» rastrea automáticamente el exceso de velocidad del vehículo.

Durante la marcha, el sistema compara la velocidad real del automóvil con la velocidad permitida en el tramo de carretera actual. Si la velocidad supera el valor permitido en más del umbral establecido, el sistema registrará una infracción del límite de velocidad.

## Cómo configurar el control de infracciones

1\. Abra la ficha del objeto: haga doble clic en el objeto en la lista de objetos

![](images/drex_kontrol_narushenij__custom.png)

2\. Vaya a la pestaña «Control de infracciones»

![](images/drex_kontrol_narushenij__custom_2.png)

3.  Marque la casilla «Infracción del límite de velocidad» para activar el control del exceso de velocidad

![](images/drex_kontrol_narushenij__custom_3.png)

4\. Establezca el valor en el campo «Umbral de exceso de la velocidad permitida»

5.  Si es necesario, marque la casilla «Enviar alertas» para recibir notificaciones de las infracciones registradas

![](images/drex_kontrol_narushenij__custom_4.png)

6\. Haga clic en «Guardar»

Tras guardar, el sistema comenzará a rastrear el exceso de velocidad según los ajustes indicados.

## Parámetros de configuración

### Infracciones del límite de velocidad

Activa o desactiva el control del exceso de velocidad para el objeto seleccionado.

Si la casilla está marcada, el sistema rastreará la velocidad de marcha y registrará las infracciones de acuerdo con los ajustes establecidos.

![Control de infracciones ](images/drex_kontrol_narushenij__screen.png)

### Umbral de exceso de la velocidad permitida

Determina cuánto debe superar la velocidad del automóvil la velocidad permitida en la carretera para que el sistema registre una infracción.

![Control de infracciones ](images/drex_kontrol_narushenij__screen_2.png)

Por ejemplo, si:

-   la velocidad permitida en el tramo de carretera es de 80 km/h;
    
-   el umbral establecido es de 20 km/h,
    

la infracción se registrará solo cuando la velocidad del automóvil supere los 100 km/h.

### Enviar alertas

Si marca esta casilla, el sistema enviará notificaciones cada vez que se registre una infracción.

Los datos de las infracciones del límite de velocidad registradas estarán disponibles en el módulo [«Eventos»](sobytiya.html)

![Control de infracciones ](images/drex_kontrol_narushenij__screen_3.png)

## Límites de velocidad

Para determinar el exceso de velocidad, el sistema utiliza los límites de velocidad de cada tramo de carretera.

De forma predeterminada, estos datos se toman del servicio cartográfico OpenStreetMap (OSM). Para cada tipo de carretera, el sistema almacena el valor de la velocidad permitida, que se utiliza al calcular las infracciones.

Si es necesario, estos valores se pueden modificar. Para ello, haga clic en «Cambiar los valores de los límites de velocidad».

![Control de infracciones ](images/drex_kontrol_narushenij__screen_4.png)

Se abrirá una tabla de límites de velocidad para distintos tipos de carreteras y categorías de vehículos.

![](images/drex_kontrol_narushenij__custom_5.png)

En la primera columna se muestran los tipos de carretera utilizados por OpenStreetMap. Los nombres se muestran como identificadores internos de OSM. Por ejemplo: AT:rural: carreteras interurbanas de Austria, DE:urban: carreteras urbanas de Alemania, bus\_guideway: carretera destinada a la circulación de autobuses.

Para cada tipo de carretera se pueden establecer límites de velocidad distintos para diferentes categorías de vehículos:

-   General: valor predeterminado
    
-   Carga: para camiones
    
-   Autobuses: para autobuses
    
-   Turismos: para automóviles de pasajeros
    

Si para una categoría de vehículo se ha establecido un valor propio, el sistema utilizará precisamente ese valor al determinar la infracción.

### Cómo cambiar el límite de velocidad

1\. Haga clic en «Cambiar los valores de los límites de velocidad»

![Control de infracciones ](images/drex_kontrol_narushenij__screen_4.png)

2\. Busque el tipo de carretera deseado

![](images/drex_kontrol_narushenij__custom_5.png)

3\. Haga doble clic en la celda de la categoría de vehículo deseada

![](images/drex_kontrol_narushenij__custom_6.png)

4\. Introduzca el nuevo valor del límite de velocidad.

5\. Haga clic en «Guardar»

6\. Cierre la ventana y haga clic en «Guardar» en la ficha del objeto
