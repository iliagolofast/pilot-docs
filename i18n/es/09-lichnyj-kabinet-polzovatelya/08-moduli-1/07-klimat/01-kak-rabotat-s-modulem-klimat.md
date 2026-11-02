---
title: "Cómo trabajar con el módulo «Clima»"
---

El módulo «Clima» ayuda a controlar la temperatura y la humedad en los objetos de monitoreo.

En él puede agrupar sensores en una estructura de espacios, ver sus valores actuales, seguir las actualizaciones y mostrar los sensores en el plano del objeto.

En este artículo explicamos:

-   [Qué hacer antes de empezar](kak-rabotat-s-modulem-klimat.html#Перед_началом_работы)
    
-   [Cómo está organizada la interfaz del módulo](kak-rabotat-s-modulem-klimat.html#Интерфейс_модуля)
    
-   [Cómo crear un espacio](kak-rabotat-s-modulem-klimat.html#Как_работать_с_модулем)
    
-   [Cómo añadir elementos anidados](kak-rabotat-s-modulem-klimat.html#Добавьте_вложенные_элементы)
    
-   [Cómo añadir un sensor](kak-rabotat-s-modulem-klimat.html#Добавьте_датчик)
    
-   [Cómo trabajar con los sensores de la lista](kak-rabotat-s-modulem-klimat.html#Как_работать_с_датчиками_в_списке)
    
-   [Cómo cargar el plano de un espacio](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения)
    
-   [Cómo colocar los sensores en el plano](kak-rabotat-s-modulem-klimat.html#Как_разместить_датчики_на_схеме)
    
-   [Qué acciones están disponibles para un espacio](kak-rabotat-s-modulem-klimat.html#Меню_действий_с_помещением)
    

## Antes de empezar

Para que el módulo «Clima» funcione correctamente, en los objetos de monitoreo deben estar configurados previamente los sensores de temperatura o humedad.

El módulo solo trabaja con los sensores que ya están dados de alta en el sistema y vinculados a objetos de monitoreo.

Por ello, antes de empezar asegúrese de que:

1\. Está creado el objeto de monitoreo 

2\. En el objeto está configurado un sensor de temperatura o de humedad

### Ejemplo

Supongamos que desea controlar la temperatura en una vivienda. Entonces:

1\. Primero cree el objeto Home en el sistema de monitoreo. Cómo crear un objeto de monitoreo se explica [aquí](../../obekty-1/kak-dobavit-obekt-1.html).

![](images/drex_kak_rabotat_s_modulem__klimat__custom.png)

2\. Después añada a este un sensor de temperatura. Cómo configurar un sensor en el objeto se explica [aquí](../../datchiki-1/dobavlenie-datchika.html).

![](images/drex_kak_rabotat_s_modulem__klimat__custom_2.png)

3\. A continuación, abra el módulo «Clima» y [vincule el sensor al espacio](kak-rabotat-s-modulem-klimat.html#Добавьте_датчик)

## Interfaz del módulo

La interfaz del módulo se divide en dos partes principales:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_3.png)

### Lista de espacios y sensores

En la parte izquierda se encuentra el área de trabajo principal con la lista de:

-   Nombres de edificios, plantas y espacios
    
-   Sensores vinculados a cada espacio
    
-   Valor actual de cada sensor
    
-   Hora de la última actualización 
    
-   Minigráfico de la variación de las lecturas
    

En la parte superior de la lista se encuentran las herramientas:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_4.png) Búsqueda: campo para encontrar rápidamente el objeto o sensor que necesite

![](images/drex_kak_rabotat_s_modulem__klimat__custom_5.png) Filtro: para seleccionar elementos según condiciones

![](images/drex_kak_rabotat_s_modulem__klimat__custom_6.png) Botón «Añadir»: para añadir un nuevo espacio

![](images/drex_kak_rabotat_s_modulem__klimat__custom_7.png) Botón de actualización: para actualizar los datos

### Plano del espacio

Si para el espacio [se ha cargado un plano SVG](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения), a la derecha se muestra el plano con las marcas de los sensores.

## Cómo trabajar con el módulo

### 1\. Cree un espacio

Para empezar a controlar el clima, es necesario crear una estructura: edificio, planta o espacio

-   Vaya a la sección «Clima»
    
    2\. Haga clic en el botón ![](images/drex_kak_rabotat_s_modulem__klimat__custom_6.png) en la parte superior de la lista
    
    ![Cómo trabajar con el módulo «Clima»](images/drex_kak_rabotat_s_modulem__klimat__screen.png)
    
    3\. En la ventana que aparece, introduzca el nombre del espacio
    

![](images/drex_kak_rabotat_s_modulem__klimat__custom_8.png)

4\. Haga clic en OK

![](images/drex_kak_rabotat_s_modulem__klimat__custom_9.png)

El nuevo espacio aparecerá en la lista. Ahora puede trabajar con él mediante el menú contextual.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_10.png)

Si desea modificar el espacio creado:

1\. Haga clic derecho sobre él

2\. En el menú seleccione «Editar»

![](images/drex_kak_rabotat_s_modulem__klimat__custom_11.png)

3\. En la ventana que se abre, cambie el nombre

4\. Si es necesario, seleccione el tipo de espacio: edificio, planta, habitación

![](images/drex_kak_rabotat_s_modulem__klimat__custom_12.png)

5\. Haga clic en «Añadir»

### 2\. Añada elementos anidados

Si su espacio consta de varias zonas, puede detallar más la estructura. Por ejemplo, añadir plantas a un edificio y habitaciones a una planta.

1\. Haga clic derecho sobre el espacio que necesite en la lista

2\. En el menú seleccione «Añadir espacio»

![Cómo trabajar con el módulo «Clima»](images/drex_kak_rabotat_s_modulem__klimat__screen_2.png)

3\. Indique el nombre del nuevo elemento

![](images/drex_kak_rabotat_s_modulem__klimat__custom_13.png)

4\. Seleccione el tipo de espacio: edificio, planta o habitación

![](images/drex_kak_rabotat_s_modulem__klimat__custom_14.png)

5\. Haga clic en «Añadir»

El nuevo elemento aparecerá dentro del espacio seleccionado. Puede repetir este proceso para crear la estructura que necesite.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_15.png)

### 3\. Añada un sensor

Después de crear el espacio, es necesario vincularle un sensor:

1\. Seleccione el espacio que necesite en la lista

2\. Haga clic derecho y seleccione «Añadir sensor»

![Cómo trabajar con el módulo «Clima»](images/drex_kak_rabotat_s_modulem__klimat__screen_3.png)

3\. Se abrirá la ventana de configuración, en la que debe seleccionar:

-   Objeto de monitoreo: objeto al que está vinculado el sensor
    
-   Sensor: el sensor de temperatura o humedad que necesite de la lista
    

![](images/drex_kak_rabotat_s_modulem__klimat__custom_16.png)

![](images/drex_kak_rabotat_s_modulem__klimat__custom_17.png)

4\. Haga clic en «Añadir»

![](images/drex_kak_rabotat_s_modulem__klimat__custom_18.png)

Después de guardar, el sensor aparecerá en la lista del módulo «Clima».

Para él se mostrarán:

-   Nombre: nombre del sensor en el sistema
    
-   Valor actual: temperatura o humedad en este momento
    
-   Hora de actualización: cuándo llegaron los datos por última vez
    
-   [Minigráfico](kak-rabotat-s-modulem-klimat.html#Мини-график_): cómo ha cambiado el valor a lo largo del tiempo
    

Si [se ha cargado el plano](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения), el sensor también se mostrará en él.

![Cómo trabajar con el módulo «Clima»](images/drex_kak_rabotat_s_modulem__klimat__screen_4.png)

## Cómo trabajar con los sensores de la lista

### Información emergente del sensor

Si coloca el cursor sobre un sensor de la lista, aparece una información emergente.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_19.png)

En ella puede ver:

-   nombre del sensor
    
-   ID del sensor
    
-   tipo de sensor
    
-   valor actual
    
-   estado actual
    

Para los sensores pueden utilizarse los siguientes estados:

-   In range / Normal: el valor se encuentra dentro del rango permitido
    
-   Out of range / Fuera de rango: el valor ha salido de los límites permitidos
    
-   Offline / Sin conexión: del sensor no llegan datos actuales
    

### Minigráfico

Junto al sensor en la lista puede mostrarse un minigráfico de su funcionamiento y de la variación de las lecturas. Ayuda a ver rápidamente cómo han cambiado los valores con el tiempo.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_20.png)

Si coloca el cursor sobre el gráfico, puede ver una información emergente con datos adicionales, por ejemplo, el valor en un punto concreto o la hora del cambio de las lecturas.

### Cómo eliminar un sensor

1\. Haga clic derecho sobre el sensor

2\. Seleccione «Eliminar sensor»

![](images/drex_kak_rabotat_s_modulem__klimat__custom_21.png)

3\. Confirme la eliminación

## Cómo cargar el plano de un espacio

El plano del espacio es un archivo SVG con el plano de su objeto. Tras cargar el plano y añadir sensores podrá:

— ver los sensores directamente en el plano 

— comparar los valores entre espacios: ver la diferencia de temperatura en distintas zonas

— controlar la situación de forma visual

### Cómo cargarlo

1\. Seleccione el espacio que necesite en la lista

2\. Haga clic derecho y seleccione «Cargar SVG»

![Cómo trabajar con el módulo «Clima»](images/drex_kak_rabotat_s_modulem__klimat__screen_5.png)

3\. Seleccione el archivo SVG con el plano del espacio

4\. Indique el ancho y el alto del plano: son las dimensiones con las que se mostrará el plano en la interfaz

![](images/drex_kak_rabotat_s_modulem__klimat__custom_22.png)

5\. Guarde

Después de esto, el plano aparecerá en la parte derecha de la ventana del módulo.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_23.png)

### Cómo colocar los sensores en el plano

Después de cargar el plano SVG, los sensores añadidos aparecerán automáticamente en él.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_24.png)

Puede arrastrar los sensores con el ratón y colocarlos según su ubicación real en el espacio.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_25.png)

Al colocar el ratón sobre un sensor en el plano, aparece una información emergente con su nombre y su valor actual.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_26.png)

![](images/drex_kak_rabotat_s_modulem__klimat__custom_27.png)

## Menú de acciones del espacio

Para abrir el menú de acciones, haga clic derecho sobre el espacio.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_28.png)

Mediante este menú puede:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_29.png) Editar el elemento

![](images/drex_kak_rabotat_s_modulem__klimat__custom_30.png) Añadir espacio: crear un elemento anidado de la estructura

![](images/drex_kak_rabotat_s_modulem__klimat__custom_31.png) Cargar plano: añadir un archivo SVG para que el plano aparezca en la parte derecha de la ventana

![](images/drex_kak_rabotat_s_modulem__klimat__custom_32.png)  Añadir sensor: conectar un sensor de temperatura o humedad

![](images/drex_kak_rabotat_s_modulem__klimat__custom_33.png)  Eliminar elemento: eliminar el espacio
