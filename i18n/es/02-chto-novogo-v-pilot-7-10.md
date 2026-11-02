---
title: "Novedades de PILOT 7.10"
---

### Agosto de 2026

En PILOT 7.10 hemos ampliado las posibilidades de los informes, la automatización y las integraciones, hemos actualizado el panel de administración y hemos añadido nuevas funciones a la aplicación móvil.

## Versión web de PILOT

### [Nuevas posibilidades del asistente de IA](lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/verkhnyaya-panel/index.html#AI-помощник_ИИ)

Seguimos desarrollando el asistente de IA de PILOT: hemos actualizado su diseño y ampliado sus posibilidades. Responde preguntas sobre el trabajo con la plataforma, ayuda a encontrar las funciones y los materiales necesarios en la documentación y propone soluciones para tareas habituales. Si no hay una respuesta lista, el asistente le ayudará a preparar una solicitud al soporte técnico.

Para los desarrolladores hay ahora sugerencias sobre el trabajo con la API y la creación de extensiones. El asistente de IA todavía se encuentra en fase de pruebas y mejora, por lo que sus posibilidades y la calidad de sus respuestas irán mejorando gradualmente.

![](images/drex_chto_novogo_v_pilot_7_10_custom.png)

### [Detección de drenajes ocultos de combustible](lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/nastrojka-datchika-topliva.html)

En la configuración del sensor de combustible ha aparecido la función «Drenaje por retorno». Ayuda a detectar robos en los que el combustible se drena a través de la línea de retorno al depósito.

El sistema analiza el consumo anómalo de combustible durante el movimiento, calcula el volumen del posible drenaje y marca en el mapa el lugar del evento.

![Novedades de PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen.png)

### [Control de paradas mediante RFID](lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html#Как_привязать_RFID-метку_к_остановке)

La visita de un autobús a las paradas puede controlarse mediante etiquetas RFID. A cada parada de una línea de autobús se le pueden asociar una o varias etiquetas. Cuando el vehículo lee la etiqueta asociada, el sistema registra la visita a la parada correspondiente.

![Novedades de PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen_2.png)

### [Odómetro relativo](lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/nastrojka-otnositelnogo-odometra.html)

Hemos añadido un sensor para calcular el kilometraje a partir de los impulsos del velocímetro u otro equipo conectado. Puede utilizarse cuando los datos de GPS/GLONASS no están disponibles o no son lo bastante precisos. Para cada vehículo se puede configurar su propio número de impulsos por kilómetro.

![](images/drex_chto_novogo_v_pilot_7_10_custom_2.png)

### [Gestión de los datos de tiempos de inactividad](lichnyj-kabinet-polzovatelya/moduli-1/servis/prostoi.html#Работа_со_списком_простоев)

En la pestaña «Tiempos de inactividad» del módulo «Servicio» han aparecido el filtrado, la importación y la exportación de registros. Los datos pueden seleccionarse por objeto, fechas, duración y motivo de la inactividad, así como exportarse a un archivo y volver a cargarse en el sistema. Ahora es más fácil encontrar la información necesaria y trabajar con un gran número de registros.

### ![](images/drex_chto_novogo_v_pilot_7_10_custom_3.png)

### [Progreso de la carga de video](lichnyj-kabinet-polzovatelya/moduli-1/video-i-cms/kak-rabotat-s-mediafajlami.html)

Durante la carga de un archivo de video se muestran el volumen de datos transferidos, el porcentaje completado, la velocidad actual y el tiempo estimado hasta su finalización. Así es más fácil evaluar cuándo estará listo el video y detectar una disminución de la velocidad de transferencia de datos.

![](images/drex_chto_novogo_v_pilot_7_10_custom_4.png)

## Informes

### [Planificador de informes actualizado](lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/planirovshchik-otchyetov.html)

Hemos rediseñado la creación de programaciones para los informes automáticos. Los parámetros del informe, el período de datos y la programación de generación se han separado en bloques independientes: puede indicar por separado qué datos deben incluirse en el informe y cuándo debe enviarse.

El planificador permite generar informes del día anterior completo, establecer la hora de inicio y de fin del período y configurar intervalos que cruzan la medianoche. Antes de guardar se puede comprobar el período de datos del próximo informe y, en la programación, seleccionar los días concretos de la semana en que se generará.

![](images/drex_chto_novogo_v_pilot_7_10_custom_5.png)

### Filtro por conductores

Hemos añadido la posibilidad de generar informes solo de los conductores seleccionados. El parámetro «Por conductores» está disponible para los siguientes informes:

-   [«Informe de inactividad»](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-po-prostoyam.html)
    
-   [«Informe de kilometraje (por conductores)»](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/voditeli-2/otchyet-po-probegu-po-voditelyam.html)
    
-   [«Informe de kilometraje (con conductores)»](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-po-probegu-s-voditelyami.html)
    

![](images/drex_chto_novogo_v_pilot_7_10_custom_6.png)

Al activar el parámetro se abre el panel «Conductores». En él puede seleccionar uno o varios conductores, o un grupo completo. El informe incluirá solo los eventos relacionados con ellos.

![](images/drex_chto_novogo_v_pilot_7_10_custom_7.png)

### Selección de geocercas para el informe

Antes de generar el informe [«De desplazamiento entre zonas»](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/geozony-1/otchyet-o-peremeshchenii-mezhdu-zonami.html) puede seleccionar las geocercas necesarias. El informe incluirá solo los desplazamientos entre ellas.

![](images/drex_chto_novogo_v_pilot_7_10_custom_8.png)

## Constructor de informes

### [Más datos de sensores en los informes](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/tipy-otchyetov-v-konstruktore.html#Работа)

En los informes de tipo «Trabajo» pueden incluirse los valores de los sensores discretos, de dos posiciones y de varias posiciones. Para mostrar los datos basta con seleccionar la etiqueta del sensor necesario al configurar la columna.

### [Combinación de filas del informe](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Объединение_строк)

En el constructor de informes ha aparecido el ajuste adicional {"merge": true}. Es adecuado para informes en los que, en lugar de una lista detallada de eventos, se necesita una sola fila de totales por cada período de desglose seleccionado.

Al activar el ajuste, los registros del período se combinan y las filas intermedias se ocultan.

![](images/drex_chto_novogo_v_pilot_7_10_custom_9.png)

Por ejemplo, en un informe con desglose por días se puede mostrar una fila por conductor: con el kilometraje total y la duración del movimiento y de la inactividad, así como la hora de inicio del primer viaje y de fin del último. Así el informe resulta más compacto y es más fácil comparar los indicadores totales.

![](images/drex_chto_novogo_v_pilot_7_10_custom_10.png)

### [Filtrado de datos numéricos](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Фильтрация_данных)

Para las columnas con valores numéricos se pueden establecer las condiciones **\>**, **<** o **\=**. Por ejemplo, la condición **\>** 25 en la columna «Velocidad máxima del evento» dejará en el informe solo las filas en las que la velocidad máxima supere los 25 km/h.

![](images/drex_chto_novogo_v_pilot_7_10_custom_11.png)

### [Configuración de filas en los informes de geocercas](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/tipy-otchyetov-v-konstruktore.html#Таблица_геозон)

En los informes de tipo «Geocercas» se puede elegir cómo se generan las filas:

-   Visitas a geocercas (Geofence visits): una fila independiente por cada visita a una geocerca
    
-   Períodos de funcionamiento del equipo (Equipment work periods): una fila independiente por cada período de funcionamiento del sensor seleccionado dentro de la geocerca
    

![](images/drex_chto_novogo_v_pilot_7_10_custom_12.png)

Por ejemplo, el modo «Períodos de funcionamiento del equipo» (Equipment work periods) ayuda a determinar cuánto tiempo estuvo funcionando el equipo en un territorio determinado. Si el equipo estaba encendido antes de la entrada, el período comenzará en el momento de la entrada. Si el objeto salió de la geocerca antes de que se apagara el equipo, el período terminará en el momento de la salida. El informe incluirá solo los intervalos durante los cuales el objeto estuvo dentro de la geocerca y el equipo estaba funcionando.

### [Informes por turnos de trabajo](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Разбивка_данных_по_сменам)

Hemos añadido el desglose de datos por turnos de trabajo. Para cada turno se genera un intervalo independiente con los indicadores calculados, por lo que el trabajo diurno y el nocturno pueden analizarse por separado.

En la configuración del informe se pueden definir los límites de los turnos, mostrar un turno o todos, y elegir si el turno nocturno se conserva completo o se divide al cruzar la medianoche.

![Novedades de PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen_3.png)

## Integraciones y API

### [Envío de estados y archivos multimedia mediante Telegram](mobilnye-prilozheniya/telegram-bot/kak-peredavat-statusy-i-mediafajly-cherez-telegram-bot.html)

Los empleados pueden enviar a PILOT estados de trabajo, fotografías y videos mediante el bot de Telegram. Los estados disponibles se configuran por separado para cada cuenta, por lo que al empleado le basta con elegir la opción necesaria en el bot.

![](images/drex_chto_novogo_v_pilot_7_10_custom_13.png)

Las fotografías y los videos enviados pueden verse y descargarse en la interfaz web de PILOT. El despachador puede seguir las etapas de ejecución de los trabajos, y los materiales que las confirman se almacenan junto con los datos de trabajo.

![](images/drex_chto_novogo_v_pilot_7_10_custom_14.png)

### [Envío de eventos a sistemas externos](lichnyj-kabinet-polzovatelya/moduli-1/situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html#Настройка_блока_Webhook)

En los algoritmos del «Centro de situación» ha aparecido el bloque **Webhook**. Permite enviar automáticamente datos de eventos a servicios externos.

Coloque el bloque en la rama necesaria del algoritmo y, al vincular el algoritmo a una notificación, indique la dirección del destinatario y el contenido de los datos que se enviarán.

# ![](images/drex_chto_novogo_v_pilot_7_10_custom_15.png)

### [Acceso a los archivos multimedia de eventos mediante API](rabota-s-api-zaprosami/api-polzovatelya-v2/mediafajly-sobytij.html)

Hemos añadido una API para obtener las fotografías y los videos asociados a eventos ADAS y DMS. Puede solicitar los datos de los objetos seleccionados para el período necesario y obtener enlaces para ver los archivos multimedia en el navegador. Los materiales obtenidos pueden utilizarse en sistemas externos para analizar y verificar eventos.

## Panel de administración

### Diseño actualizado

El panel de administración ha recibido un nuevo diseño y una paleta de colores más contrastada. El menú lateral oscuro se distingue del área de trabajo clara, las filas y los estados seleccionados destacan más y las tablas grandes resultan más cómodas de consultar.

![](images/drex_chto_novogo_v_pilot_7_10_custom_16.png)

La búsqueda, los filtros y las acciones con los registros se encuentran directamente sobre las tablas, junto a los datos.

![](images/drex_chto_novogo_v_pilot_7_10_custom_17.png)

El panel de usuario se ha trasladado a la parte inferior del menú lateral. Aquí se muestra el perfil del usuario y están disponibles acciones rápidas:

— cambio entre tema claro y oscuro

— selección del idioma de la interfaz

— acceso a las novedades

— cierre de sesión de la cuenta

— contracción del menú lateral

![](images/drex_chto_novogo_v_pilot_7_10_custom_18.png)

También hemos actualizado los componentes internos del panel de administración. La interfaz se muestra correctamente en los navegadores modernos, y las tablas, los formularios y los elementos de control funcionan de forma uniforme en todas las secciones.

### Gestión de tarjetas SIM de Comms Cloud

Hemos añadido compatibilidad con las tarjetas SIM de [Comms Cloud](https://commscloud.com/). En una sola sección puede comprobar los datos y el estado de la tarjeta SIM, ir al vehículo asociado y, si es necesario, bloquear o desbloquear la tarjeta.

![](images/drex_chto_novogo_v_pilot_7_10_custom_19.png)

## Aplicación móvil

### [Analítica del funcionamiento del transporte](mobilnye-prilozheniya/mobilnyj-pilot/kak-prosmotret-analitiku.html)

En la aplicación móvil ha aparecido la pestaña «Analítica» para controlar los indicadores clave del funcionamiento del transporte. Muestra las estadísticas de las últimas 24 horas: tiempo de inactividad y de trabajo, kilometraje y número de vehículos.

Los estados del transporte, el estado de la conexión, el kilometraje, las infracciones, las geocercas y otros indicadores se presentan en gráficos. Puede evaluar la situación y detectar desviaciones directamente desde el teléfono.

## ![](images/drex_chto_novogo_v_pilot_7_10_custom_20.png) 

![](images/drex_chto_novogo_v_pilot_7_10_custom_21.png)

### [Asistente de IA](mobilnye-prilozheniya/mobilnyj-pilot/kak-rabotat-s-ii-podderzhkoj.html)

El asistente de IA de PILOT ya está disponible en la aplicación móvil. Ayuda a encontrar las funciones necesarias y explica cómo realizar tareas habituales: generar un informe, configurar un objeto, crear una geocerca o conectar un dispositivo. Las respuestas pueden contener enlaces a las secciones correspondientes de la documentación.

Los chats se guardan en el historial: puede volver a una conversación anterior para continuarla o para consultar de nuevo una respuesta.

![](images/drex_chto_novogo_v_pilot_7_10_custom_22.png)![](images/drex_chto_novogo_v_pilot_7_10_custom_23.png)

### [Protección adicional del inicio de sesión](mobilnye-prilozheniya/mobilnyj-pilot/kak-ustanovit-i-vojti-v-prilozhenie.html#Вход_в_приложение_с_двухфакторной_аутентификацией_)

En la aplicación está disponible el inicio de sesión con autenticación de dos factores. Después de introducir el nombre de usuario y la contraseña, confirme el acceso con un código de un solo uso de la aplicación de autenticación o del correo electrónico.

La verificación adicional protege la cuenta incluso si otra persona llega a conocer la contraseña.

![](images/drex_chto_novogo_v_pilot_7_10_custom_24.png)     ![](images/drex_chto_novogo_v_pilot_7_10_custom_25.png)

### [Recarga del saldo mediante Stripe](mobilnye-prilozheniya/mobilnyj-pilot/menyu-i-nastrojki-polzovatelya.html#Финансы_)

Hemos añadido la posibilidad de recargar el saldo de la organización mediante Stripe. En la pestaña «Finanzas» indique el importe, pase al pago y seleccione un método disponible en la página de Stripe.

La función está disponible para las cuentas que tienen activado el pago mediante Stripe. Puede comprobar el estado de la cuenta después del pago directamente en la aplicación.

![](images/drex_chto_novogo_v_pilot_7_10_custom_26.png)

### [Consulta de eventos y notificaciones](mobilnye-prilozheniya/mobilnyj-pilot/kak-prosmatrivat-uvedomleniya-i-sobytiya.html)

En la sección «Eventos» han aparecido las pestañas independientes «Notificaciones» y «Eventos». En la primera se reúnen las activaciones de las reglas configuradas; en la segunda, los cambios de estado de los objetos y los sensores.

En cada pestaña se pueden seleccionar por separado los objetos, los tipos de datos y el período de consulta. El lugar donde se registró la notificación o el evento puede abrirse en el mapa.

# ![](images/drex_chto_novogo_v_pilot_7_10_custom_27.png)  

![](images/drex_chto_novogo_v_pilot_7_10_custom_28.png)

En PILOT 7.10 hay más herramientas para analizar datos, automatizar procesos y trabajar con la plataforma desde el teléfono. Las nuevas funciones ayudan a obtener más rápido la información necesaria y a controlar el funcionamiento del transporte.

Seguimos desarrollando la plataforma y preparamos nuevas herramientas para el monitoreo y la gestión de flotas.
