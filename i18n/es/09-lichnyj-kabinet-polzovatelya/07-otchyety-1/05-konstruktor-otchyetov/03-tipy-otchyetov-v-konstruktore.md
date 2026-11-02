---
title: "Tipos de informes en el constructor"
---

Al crear un informe, primero se selecciona el tipo de constructor de informes.

![](images/drex_tipy_otchyetov_v_konstruktore_custom.png)

Es precisamente el tipo el que determina:

— qué datos se utilizarán

— qué campos estarán disponibles en la sección «Columnas»

— qué aspecto tendrá el informe final

## Tipos de informes disponibles

En el sistema están disponibles los siguientes tipos:

-   [Tabla resumen](tipy-otchyetov-v-konstruktore.html#Суммарная_таблица) — datos resumidos: totales, sumas, número de eventos y otros indicadores agregados
    
-   [Trabajo](tipy-otchyetov-v-konstruktore.html#Работа) — actividad del objeto o de los sensores en el período seleccionado
    
-   [Eco-eventos](tipy-otchyetov-v-konstruktore.html#Эко-события) — eventos relacionados con la conducción económica y no económica y con el consumo de combustible
    
-   [Gráfico](tipy-otchyetov-v-konstruktore.html#График) — visualización de datos en forma de gráficos
    
-   [Tabla de viajes](tipy-otchyetov-v-konstruktore.html#Таблица_поездок) — lista de viajes con parámetros: hora, kilometraje, inicio y fin
    
-   [Tabla de geocercas](tipy-otchyetov-v-konstruktore.html#Таблица_геозон) — datos de geocercas: entradas, salidas, tiempo de permanencia
    
-   [Estado actual](tipy-otchyetov-v-konstruktore.html#Таблица_текущего_состояния) — estado del objeto en el momento de generar el informe
    
-   [Funcionamiento de sensores](tipy-otchyetov-v-konstruktore.html#Работа_датчиков) — datos del funcionamiento de los sensores en el período
    
-   [Eventos de sensores](tipy-otchyetov-v-konstruktore.html#События_датчиков) — activaciones, cambios de estado y eventos de umbral
    
-   [Pérdida de conexión](tipy-otchyetov-v-konstruktore.html#Потеря_связи) — información sobre las desconexiones
    
-   [Notificaciones](tipy-otchyetov-v-konstruktore.html#Уведомления) — lista de notificaciones del sistema
    
-   [Tarjetas](tipy-otchyetov-v-konstruktore.html#Карты) — datos de tarjetas de combustible y transacciones
    
-   [Comportamiento del conductor](tipy-otchyetov-v-konstruktore.html#Поведение_водителя) — eventos relacionados con el estilo de conducción
    
-   [Resumen de la flota](tipy-otchyetov-v-konstruktore.html#Сводка_по_автопарку) — información general de todos los objetos
    
-   [Etiquetas RFID](tipy-otchyetov-v-konstruktore.html#RFID-метки) — datos de RFID
    
-   [Eventos de repostaje y drenaje](tipy-otchyetov-v-konstruktore.html#События_заправки_и_слива) — operaciones con combustible
    
-   [PTM](tipy-otchyetov-v-konstruktore.html#PTM ) — informes especializados para el módulo PTM
    

### Cómo se generan los datos del informe

1\. Usted selecciona el tipo de informe

2\. El sistema carga las categorías y los campos disponibles para ese tipo

3\. En la sección «Columnas» usted selecciona los datos necesarios

![](images/drex_tipy_otchyetov_v_konstruktore_custom_2.png)

4\. En el informe se muestran solo las columnas seleccionadas

El conjunto de columnas disponibles depende del tipo de informe seleccionado

En el constructor hay:

-   campos universales (principales): están disponibles en la mayoría de los tipos de informes
    
-   categorías especializadas: aparecen solo para determinados tipos
    

### Ejemplo 1. Tipo «Estado actual»

Para este tipo están disponibles los datos del estado actual del vehículo.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_3.png)

Además de los datos básicos (por ejemplo, marca, modelo, velocidad), aparece la categoría «Servicios», donde puede añadir campos de mantenimiento:

-   Last TO motohours — últimas horas de motor del mantenimiento
    
-   Next TO motohours — próximas horas de motor del mantenimiento
    
-   Mh until next TO — horas de motor hasta el próximo mantenimiento
    
-   Last TO date — fecha del último mantenimiento
    
-   Last TO number — número del último mantenimiento
    
-   Next TO date — fecha del próximo mantenimiento
    
-   Last TO mileage — kilometraje en el último mantenimiento
    

Estos campos ayudan a controlar el estado actual y el mantenimiento del transporte.

### Ejemplo 2. Tipo «Tarjetas»

Para el tipo «Tarjetas» están disponibles los datos de tarjetas de combustible y transacciones.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_4.png)

En las columnas aparece la categoría CardTransactions, donde puede seleccionar, por ejemplo:

-   Transaction Type — tipo de operación
    
-   Transaction Location — lugar
    
-   Transaction Time — hora
    
-   Número de tarjeta — número de la tarjeta
    
-   Distance Previous-Current — distancia entre valores
    
-   Current — valor actual
    
-   Transaction Amount — importe
    

Este tipo se utiliza para analizar las operaciones con tarjetas.

## Ejemplos de tipos de informes

En el constructor hay varios tipos de informes disponibles, y cada uno resuelve una tarea distinta. A continuación se ofrece una breve descripción y ejemplos para facilitar la orientación.

## Tabla resumen

La tabla resumen le ayuda a obtener datos resumidos de los objetos en el período seleccionado.

Usted configura:

-   qué columnas habrá en el informe
    
-   según qué indicador se calcula el total
    
-   cómo se ordenan los datos
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_5.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — orden de las filas
    
-   Total — indicador principal del resumen
    
-   Desc — ordenación descendente
    
-   Columnas — qué datos mostrar
    
-   Configuración — ajustes adicionales
    

Ejemplo de un informe generado desde el constructor

![](images/drex_tipy_otchyetov_v_konstruktore_custom_6.png)

 El campo «Total» define el indicador principal con el que se genera el informe.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_7.png)

 El campo «Ordenación» determina el orden de las filas.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_8.png)

Por ejemplo, si selecciona la ordenación por Vehicle, en el informe terminado las filas se ordenarán por vehículos.

![Tipos de informes en el constructor](images/drex_tipy_otchyetov_v_konstruktore_screen.png)

Con Desc activado, los datos se ordenan de forma descendente.

![Tipos de informes en el constructor](images/drex_tipy_otchyetov_v_konstruktore_screen_2.png)

![](images/drex_tipy_otchyetov_v_konstruktore_custom_9.png)

## Trabajo

El informe «Trabajo» muestra la actividad de los objetos o de los conductores en el período.

Con este informe puede ver:

— cuándo se produjo el evento

— en qué objeto

— dónde se registró

— los valores de los parámetros

En el informe se pueden incluir los valores de sensores discretos, de dos posiciones y multiposición. El sensor necesario se selecciona por la etiqueta que se le asignó al configurar la columna.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_10.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

En el ejemplo de la captura de pantalla se crea el informe Overspeed CAN general: informe de excesos de velocidad según los datos CAN.  En el campo «Configuración» se ha definido un filtro: en el informe se incluirán solo los eventos en los que el valor del sensor sea mayor que 85.

<table><tbody><tr><td><span></span></td><td><div>{"filter": [ { "key": "sensor", "rule": "&gt;", "value": 85 } ]}</div></td></tr></tbody></table>

## Gráfico

Gráfico es un tipo de informe que genera una representación visual de los datos en forma de gráficos. Está pensado para analizar la dinámica de los indicadores a lo largo del tiempo: velocidad, consumo de combustible, temperatura, kilometraje, funcionamiento del equipo y otros parámetros.

Se pueden añadir varios grupos de datos:

-   Velocidad — gráfico de la velocidad de desplazamiento del objeto
    
-   ODO — gráfico del kilometraje
    
-   Combustible — nivel de combustible y consumo
    
-   Temperatura — temperatura de distintos sensores (se pueden seleccionar los concretos).
    
-   Sensores especiales — sensores especiales
    
-   Equipo — datos del equipo
    
-   Eco Pies — eventos ecológicos e infracciones (frenazos bruscos, giros, colisiones, cinturón sin abrochar, etc.).
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_11.png)

Para cada grupo puede:

-   Activar o desactivar su visualización.
    
-   Seleccionar sensores concretos o tipos de eventos
    
-   Configurar «Mostrar eje» — si se muestra un eje Y independiente para este grupo
    
-   Configurar «Single axle» — usar un único eje Y común
    
    Para Eco Pie se pueden seleccionar ajustes adicionales:
    
-   Show per hour — mostrar el número de eventos por hora
    
-   Show duration — mostrar la duración de los eventos
    

Tras guardar el informe y generarlo en la sección «Informes», el sistema muestra un gráfico interactivo:

![](images/drex_tipy_otchyetov_v_konstruktore_custom_12.png)

-   En el eje X — el tiempo
    
-   En el eje Y — los valores de los parámetros seleccionados (puede haber varios ejes)
    
-   A cada parámetro se le asigna su propio color de línea
    
-   Al pasar el cursor sobre el gráfico aparece una información emergente con la hora exacta y los valores de todos los parámetros en ese punto
    
-   En la parte inferior del gráfico se muestra la leyenda: qué líneas corresponden a qué parámetros
    
-   El gráfico se puede ampliar, desplazar y se pueden analizar tramos de tiempo concretos
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_13.png)

## Eco-eventos

El tipo «Eco-eventos» se utiliza para generar informes de eventos relacionados con:

— el estilo de conducción económico o no económico

— el consumo de combustible

— el comportamiento ecológico del vehículo

Este informe le ayuda a analizar cuándo y dónde se produjeron los eco-eventos, así como qué tipo de evento se registró.![](images/drex_tipy_otchyetov_v_konstruktore_custom_14.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Summarize — modo resumen del informe
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## Tabla de viajes

La tabla de viajes es un tipo de informe que se utiliza para consultar los viajes de los vehículos en el período seleccionado.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_15.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

Después de generar el informe, el sistema muestra una tabla con los viajes del período seleccionado.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_16.png)

## Tabla de geocercas

La tabla de geocercas es un tipo de informe para analizar las visitas a geocercas y el funcionamiento del equipo dentro de ellas. En el informe se pueden mostrar las entradas y salidas, la duración de la permanencia en la zona, los períodos de funcionamiento de los sensores y otros datos relacionados.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_17.png)

Al crear el informe, configure los siguientes parámetros:

-   Nombre — indique el nombre del informe
    
-   Filas (Rows) — seleccione el principio de generación de las filas:
    
-   Visitas a geocercas (Geofence visits) — una fila corresponde a una visita a una geocerca
    
-   Períodos de funcionamiento del equipo (Equipment work periods) — una fila corresponde a un período de funcionamiento independiente del sensor seleccionado dentro de la geocerca
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_18.png)

-   Ordenación — seleccione el campo por el que se ordenarán los datos
    
-   Descendente (Desc) — active la ordenación descendente
    
-   Columnas — configure los datos que deben mostrarse en el informe
    
-   Configuración — si es necesario, indique parámetros adicionales y filtros
    

El conjunto de datos y columnas disponibles puede depender del modo de generación de filas seleccionado.

Para generar el informe con el formulario del constructor:

1\. Vaya a la sección «Informes»

2\. Seleccione el tipo de informe 

3\. Indique los objetos necesarios

4\. Seleccione las geocercas necesarias

5\. Defina el período del informe y haga clic en «Generar informe»

A continuación, el sistema generará la tabla de las geocercas seleccionadas.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_19.png)

## Tabla de estado actual

La tabla de estado actual es un tipo de informe que muestra el estado actual del objeto en el momento de generar el informe.

El ejemplo muestra datos de servicios, pero, según la configuración del informe seleccionada, el conjunto de datos puede ser distinto.

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_20.png)

![](images/drex_tipy_otchyetov_v_konstruktore_custom_21.png)

## Funcionamiento de sensores

Funcionamiento de sensores es un tipo de informe que muestra datos del funcionamiento de los sensores en el período seleccionado.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_22.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Grupos de sensores — uno o varios grupos de sensores que se utilizarán en el informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

El campo «Grupos de sensores» permite limitar el informe solo a los sensores necesarios.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_23.png)

## Eventos de sensores

Eventos de sensores es un tipo de informe que muestra los eventos registrados por los sensores: activaciones, cambios de estado, alcance de valores umbral y otros eventos.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_24.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Grupos de sensores — uno o varios grupos de sensores con los que se generará el informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## Pérdida de conexión

Este tipo de informe le permite crear por su cuenta un informe ampliado de pérdida de conexión, seleccionando las columnas necesarias y definiendo su propio filtro por la duración de la interrupción.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_25.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_26.png)

## Notificaciones

Notificaciones es un tipo de informe que se utiliza para consultar los eventos creados por el sistema de notificaciones.

Este informe le ayuda a analizar, por ejemplo:

— qué notificaciones se generaron

— cuándo se produjeron

— en qué objeto

— dónde exactamente se registró el evento

— por qué canal de comunicación se envió la notificación

![](images/drex_tipy_otchyetov_v_konstruktore_custom_27.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Notifications Type — tipos de notificaciones que se deben incluir en el informe
    
-   Filter by — filtro por canal o forma de entrega de la notificación
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Colors — visualización en colores
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

### Tipo de notificación

El campo Notifications Type permite seleccionar qué [tipos de notificaciones](../../moduli-1/uvedomleniya/tipy-uvedomlenij-i-usloviya-srabatyvaniya.html) se incluirán en el informe:

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_28.png)

-   Velocidad
    
-   Eventos de encendido
    
-   Funcionamiento del encendido
    
-   Eventos de sensores
    
-   Funcionamiento del sensor
    
-   Cambio del valor del sensor
    
-   Averías de sensores
    
-   Problemas con el dispositivo
    
-   Temperatura
    
-   Humedad
    
-   Pérdida de conexión
    
-   Kilometraje
    
-   Movimiento
    
-   Estacionamiento
    
-   Geocercas
    
-   Nivel de combustible
    
-   Planificador
    
-   Etiquetas RFID
    
-   Notificaciones compuestas
    

En este campo se pueden seleccionar varios tipos de notificaciones. En ese caso, en el informe se mostrarán todos los tipos seleccionados

### Forma de entrega

El campo Filter by se utiliza para filtrar las notificaciones por forma de entrega:

-   SMS — mensaje al teléfono
    
-   Push (Mobile App) — notificación en la aplicación móvil
    
-   Email — correo electrónico
    
-   Alarma (Alert) — [notificación en la interfaz](../../moduli-1/uvedomleniya/kak-prosmatrivat-uvedomleniya.html) del sistema, en una ventana emergente
    
-   [Webhook](../../moduli-1/uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html) — envío de datos a un servicio externo
    
-   Comando al dispositivo — envío de un comando al rastreador
    
-   Telegram — notificación a través del [bot de Telegram](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_29.png)

En el bloque «Columnas» puede configurar qué información se mostrará en el informe, por ejemplo,

-   Vehículo — objeto al que se refiere la notificación
    
-   Notification Type — tipo de notificación
    
-   Hora de la notificación — cuándo se produjo el evento
    
-   Notification Name — nombre de la notificación
    
-   Notification Location — lugar donde se registró la notificación
    

Después de generar el informe, el sistema mostrará la lista de notificaciones del período seleccionado.

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_30.png)

## Tarjetas

Tarjetas es un tipo de informe que se utiliza para consultar datos de las tarjetas de combustible y de sus transacciones.

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_31.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## Comportamiento del conductor

Este tipo de informe se utiliza para analizar el estilo de conducción.

Con él puede hacer un seguimiento de:

— aceleraciones bruscas

— frenazos bruscos

— excesos de velocidad

— otras infracciones

—indicadores relacionados con la seguridad y la economía de la conducción

![](images/drex_tipy_otchyetov_v_konstruktore_custom_32.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## Resumen de la flota

Este tipo de informe se utiliza para obtener información general de toda la flota.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_33.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_34.png)

## Etiquetas RFID

Etiquetas RFID es un tipo de informe que se utiliza para consultar datos relacionados con las etiquetas RFID.

Este informe le ayuda a analizar, por ejemplo,

— qué etiquetas RFID se registraron

— cuándo se produjo el evento

— dónde se produjo

— a qué dispositivo u objeto se refiere el registro

![](images/drex_tipy_otchyetov_v_konstruktore_custom_35.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## Eventos de repostaje y drenaje

Eventos de repostaje y drenaje es un tipo de informe que se utiliza para consultar las operaciones con combustible:

Este informe le ayuda a controlar las operaciones con combustible y a analizar, por ejemplo,

— cuándo se produjo un repostaje o un drenaje

— cuánto combustible se añadió o se drenó

— dónde se produjo el evento

— qué valores de combustible había al inicio y al final

![](images/drex_tipy_otchyetov_v_konstruktore_custom_36.png)

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
    

## PTM 

Este es un tipo de informe especializado para los datos del módulo PTM.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_37.png)

Se utiliza para consultar y analizar registros relacionados con PTM, por ejemplo:

— el número de tarea

— el cliente

— las fechas planificadas

— el kilometraje

Al crear un informe de este tipo puede definir:

-   Nombre — nombre del informe
    
-   Ordenación — por qué campo se ordenarán los datos
    
-   Desc — ordenación descendente
    
-   Columnas — conjunto de datos que se mostrarán en el informe
    
-   Configuración — parámetros adicionales y filtros
