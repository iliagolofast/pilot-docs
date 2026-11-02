---
title: "Cómo trabajar con los objetos de Velavu"
---

Con la integración de Velavu en PILOT podrá rastrear en tiempo real la ubicación de los objetos dentro de los edificios: en qué planta, sala o zona se encuentran los equipos y el personal.

En este artículo le explicamos:

-    [Cómo cambiar al modo Velavu](kak-rabotat-s-obektami-velavu.html#Как_переключиться_на_режим_Velavu) 
    
-    [Cómo empezar a trabajar con Velavu](kak-rabotat-s-obektami-velavu.html#Как_начать_работать_с_Velavu) 
    
-    [Cómo realizar la sincronización](kak-rabotat-s-obektami-velavu.html#Синхронизация_структуры_Velavu) 
    
-    [Cómo interactuar con los dispositivos](kak-rabotat-s-obektami-velavu.html#Как_взаимодействовать_с_объектами_Velavu) 
    
-   [Cómo ver los detalles del dispositivo](kak-rabotat-s-obektami-velavu.html#Просмотр_деталей_устройства) 
    
-    [Menú del objeto y del dispositivo](kak-rabotat-s-obektami-velavu.html#Меню_объекта_Velavu) 
    
-    [Geocercas de Velavu](kak-rabotat-s-obektami-velavu.html#Геозоны_Velavu) 
    

## Cómo cambiar al modo Velavu

Después de conectar la integración con Velavu, en el módulo «Clima» se puede alternar entre dos modos:

-   Estándar: modo habitual del módulo «Clima» para trabajar con sensores de temperatura y humedad
    
-   Velavu: modo de visualización de los objetos de Velavu
    
    1\. Abra el módulo «Clima»
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom.png)

2\. En la pestaña «Clima» use la lista desplegable para cambiar el modo de «Estándar» a «Velavu»

![](images/drex_kak_rabotat_s_obektami_velavu___custom_2.png)

3\. La interfaz cambiará al modo Velavu

En el modo Velavu, en lugar de los sensores habituales de temperatura y humedad se muestra el árbol de objetos de Velavu.

Para cada elemento del árbol suelen mostrarse:

-   el nombre del objeto, por ejemplo, Velavu-00Q6N
    
-   el tipo, por ejemplo:
    
    — ANCHOR: ancla
    
    — TAG: etiqueta
    
    — Device: dispositivo
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom_3.png)

En el modo Velavu, en la parte superior de la ventana están disponibles:

![](images/drex_kak_rabotat_s_obektami_velavu___custom_4.png) Filtro: para seleccionar los elementos necesarios

![](images/drex_kak_rabotat_s_obektami_velavu___custom_5.png) Búsqueda: para encontrar rápidamente un dispositivo, una planta o un sitio

![](images/drex_kak_rabotat_s_obektami_velavu___custom_6.png) Botón de sincronización: para cargar o actualizar la estructura desde Velavu

![](images/drex_kak_rabotat_s_obektami_velavu___custom_7.png) Botón de añadir: permite añadir manualmente un local si es necesario ampliar la estructura

## Cómo empezar a trabajar con Velavu

Para que los objetos de Velavu se muestren en el módulo «Clima», primero hay que preparar los objetos en el sistema.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_8.png)

1\. Cree un objeto de monitoreo. Para saber cómo crear un objeto, consulte el [artículo](../../../obekty-1/kak-dobavit-obekt-1.html) correspondiente.

2\. En la ficha del objeto indique el identificador del objeto del sistema Velavu

![Cómo trabajar con los objetos de Velavu  ](images/drex_kak_rabotat_s_obektami_velavu___screen.png)

3\. Después puede configurar el objeto con más detalle, por ejemplo:

 — elegir un icono

— indicar un color

— rellenar otros parámetros

4\. Realice la sincronización

Una vez preparados los objetos, vaya al módulo «Clima» y sincronice la estructura.

### Sincronización de la estructura de Velavu

La sincronización es necesaria para cargar desde Velavu la estructura de objetos y mostrarla en el módulo «Clima»:

1\. Abra el módulo «Clima»

2\. [Cambie al modo Velavu](kak-rabotat-s-obektami-velavu.html)

3\. Haga clic en el botón de sincronización ![](images/drex_kak_rabotat_s_obektami_velavu___custom_9.png)

![Cómo trabajar con los objetos de Velavu  ](images/drex_kak_rabotat_s_obektami_velavu___screen_2.png)

4\. El sistema cargará los edificios, las plantas y los dispositivos desde la API de Velavu

Tras la sincronización, toda la estructura aparecerá en el árbol de objetos, agrupada por cuentas, edificios y plantas.

# Cómo interactuar con los objetos de Velavu

-   Si hace clic en un objeto del árbol de la izquierda, el objeto correspondiente se resaltará en el plano.
    
-   Si hace clic en un objeto del plano, se seleccionará automáticamente en la lista de objetos.
    

### Qué objetos se muestran en Velavu

En el módulo pueden mostrarse distintos tipos de objetos:

-   Anclas (Anchors): son puntos de referencia fijos que se utilizan para calcular la posición de otros dispositivos
    
-   Etiquetas (Tags): son etiquetas que normalmente están asociadas a equipos, personas u otros objetos. Una vez configuradas las anclas, su posición se calcula automáticamente.
    
-   Etiquetas de proximidad (Proximity Tags): son etiquetas que se detectan dentro del radio de otro objeto
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom_10.png)

### Código de colores de los objetos de Velavu

Los objetos de Velavu se muestran en el plano como círculos de colores. El color indica el tipo de objeto y su estado:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Color</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Tipo de objeto</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Azul</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ancla&nbsp;(Anchor&nbsp;)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Punto de posicionamiento fijo instalado en el local</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Verde</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Etiqueta (Tag)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Objeto móvil: equipo, vehículo o personal</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Amarillo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Etiquetas de proximidad (Proximity Tags)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Etiqueta situada en el radio de acción de otro objeto</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Rojo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Offline</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; El objeto no transmite datos o está fuera de la zona de cobertura</span></div></td></tr></tbody></table>

![](images/drex_kak_rabotat_s_obektami_velavu___custom_11.png)

### Información emergente al pasar el cursor sobre un objeto

Si pasa el cursor sobre un objeto de la lista o del plano, aparecerá una información emergente con datos breves del objeto.

En la información emergente se muestran:

-   Nombre: nombre del objeto en el sistema
    
-   ID del agente: identificador interno del objeto
    
-   ID del dispositivo: identificador del dispositivo de Velavu
    
-   Tipo de ubicación: tipo de emplazamiento del objeto
    
-   Coordenadas: coordenadas actuales del objeto
    
-   Sitio: nombre del sitio al que pertenece el objeto
    
-   Planta: planta en la que se encuentra el objeto
    
-   Estado: estado actual del dispositivo: en línea o fuera de línea
    

Esta información emergente ayuda a obtener los datos básicos del objeto sin abrir la ficha del dispositivo.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_12.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_13.png)

## Ver los detalles del dispositivo

Para cada dispositivo de Velavu hay disponible una ficha detallada con toda la información. Para abrirla, haga clic en el icono de visualización junto al objeto en el árbol.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_14.png)

La ficha del dispositivo se abre en una ventana aparte con varias pestañas:

### Información general

Esta pestaña muestra los datos generales del dispositivo: dónde se encuentra, a qué está asociado y en qué estado está.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_15.png)

-   Nombre del dispositivo: nombre del dispositivo en el sistema Velavu, por ejemplo, Velavu-Sp8mv
    
-   ID del dispositivo: identificador único del dispositivo, por ejemplo, Sp8mv
    
-   Sitio: nombre del sitio donde está instalado el dispositivo, por ejemplo, GARGASH
    
-   Planta: planta en la que se encuentra el dispositivo, por ejemplo, Level 1 - GR001
    
-   Estado de conexión: estado actual del dispositivo: en línea o fuera de línea
    

Debajo se encuentra el bloque «Asignación», donde puede mostrarse información sobre el activo:

-   Nombre del activo: al que está asociado el dispositivo
    
-   Grupo de activos: grupo al que pertenece el activo
    
-   Categoría del activo: categoría del activo
    
-   Operación: acción o estado actual del activo
    

En la parte inferior de la pestaña se muestra el campo:

-   Última actualización: fecha y hora en que el dispositivo envió datos por última vez
    

### Ubicación

En la pestaña «Ubicación» se muestran los datos sobre la ubicación del dispositivo.![](images/drex_kak_rabotat_s_obektami_velavu___custom_16.png)

Aquí puede ver:

-   Nombre de la planta: en qué planta se encuentra el dispositivo
    
-   Nombre del sitio: en qué sitio está emplazado el dispositivo
    
-   Tipo de ubicación: forma de emplazamiento del dispositivo
    
-   Latitud: valor actual de la latitud
    
-   Longitud: valor actual de la longitud
    
-   ID del dispositivo más cercano: identificador del dispositivo más cercano
    
-   Distancia al dispositivo: distancia al dispositivo más cercano
    

### Estado del dispositivo

En la pestaña «Estado del dispositivo» se muestra el estado técnico actual del dispositivo.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_17.png)

**Estado de la batería**

En este bloque pueden mostrarse:

-   Nivel de carga: porcentaje de carga de la batería, por ejemplo, 90%
    
-   Carga de la batería: si el dispositivo está conectado al cargador
    

**Conexión**

Aquí se muestran:

-   Estado de conexión: en línea o fuera de línea
    
-   RSSI: nivel de señal
    
-   ID de la puerta de enlace: identificador de la puerta de enlace a través de la cual está conectado el dispositivo
    
-   Nivel de señal: calidad de la comunicación
    

**Movimiento y actividad**

En este bloque puede ver:

-   Detección de movimiento: si el objeto se mueve o está inmóvil
    
-   Última actividad: fecha y hora de la última actividad del dispositivo
    

### Entorno

Esta pestaña muestra los datos de los sensores ambientales, si el dispositivo admite la medición de temperatura, humedad o presión.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_18.png)

Aquí puede ver:

-   Temperatura: valor actual en °C
    
-   Humedad: valor actual en %
    
-   Presión: valor actual en kPa
    

Debajo se encuentra el bloque «Gráficos del historial».

Si hay datos disponibles, aquí se muestran los gráficos de variación de la temperatura, la humedad y la presión.

Sobre los gráficos puede seleccionar el período de visualización: 1h: 1 hora, 6h: 6 horas, 1d: 1 día, 7d: 7 días, 30d: 30 días, All: todo el período disponible

### Asignación

En la pestaña «Asignación» se muestra la información sobre el activo con el que está relacionado el dispositivo.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_19.png)

Normalmente aquí se puede ver:

-   Nombre del activo: al que está asociado el dispositivo
    
-   Grupo de activos: grupo al que pertenece el activo
    
-   Categoría del activo: categoría del activo
    
-   Operación: acción o estado actual del activo
    

Si los datos del activo no están rellenados, en los campos puede mostrarse N/A.

### Datos técnicos

En la pestaña «Datos técnicos» se muestra información de servicio adicional sobre el dispositivo.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_20.png)

Según el dispositivo, pueden estar disponibles:

-   Firmware / modelo
    
-   Intervalo del beacon
    
-   Frecuencia de heartbeat
    
-   Frecuencia de actualización del estado
    
-   Frecuencia de actualización de temperatura y humedad
    
-   Potencia de transmisión del beacon
    
-   ID del sitio
    
-   ID de la planta
    

## Menú del objeto de Velavu

Para las plantas y los sitios de Velavu hay disponible un menú contextual con acciones adicionales. Para abrir el menú de acciones del objeto, haga clic con el botón derecho del ratón sobre el objeto de Velavu.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_21.png)

Mediante este menú puede:

![](images/drex_kak_rabotat_s_obektami_velavu___custom_22.png) Editar: cambiar el nombre y el tipo del local

![](images/drex_kak_rabotat_s_obektami_velavu___custom_23.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_24.png) Añadir local: crear un elemento anidado de la estructura

![](images/drex_kak_rabotat_s_obektami_velavu___custom_25.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_26.png) Mostrar anclas: mostrar los puntos de posicionamiento fijos en el plano de objetos.

De forma predeterminada, las anclas están ocultas.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_27.png)

Para mostrar las anclas, seleccione en el menú «Mostrar anclas». Se mostrarán en el plano y en la lista.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_28.png)

Si necesita ocultar las anclas, seleccione en el menú «Ocultar anclas».

![](images/drex_kak_rabotat_s_obektami_velavu___custom_29.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_30.png) Añadir objeto: asociar un objeto de monitoreo de Velavu a un local

![](images/drex_kak_rabotat_s_obektami_velavu___custom_31.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_32.png)  Eliminar elemento: eliminar el local de la estructura

## Menú del dispositivo de Velavu

Para un dispositivo individual de Velavu, en el menú contextual está disponible la acción:

-   Eliminar objeto
    

Esta acción elimina la asociación del dispositivo con el local de Velavu.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_33.png)

## Geocercas de Velavu

Las geocercas de Velavu se cargan en el sistema automáticamente desde Velavu. No es necesario crearlas manualmente en PILOT.

Basta con configurar los sitios y los edificios en Velavu y, a continuación, hacer clic en el botón de sincronización ![](images/drex_kak_rabotat_s_obektami_velavu___custom_6.png) en el modo Velavu del módulo «Clima»; el sistema importará automáticamente las geocercas, la estructura de sitios y plantas, y los dispositivos relacionados.

Después, las geocercas de Velavu aparecerán en la sección «Geocercas» en una carpeta independiente.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_34.png)
