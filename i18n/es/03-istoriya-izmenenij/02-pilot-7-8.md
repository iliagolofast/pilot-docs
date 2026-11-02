---
title: "PILOT 7.8"
---

En PILOT 7.8 hemos hecho la plataforma aún más cómoda y funcional. Hemos añadido herramientas útiles, ampliado los informes y mejorado la precisión de los datos para que encuentre más rápido la información que necesita y resuelva con facilidad las tareas de trabajo.

## Mejoras de la interfaz y del trabajo con los datos

### Nuevos derechos de acceso en el constructor de informes

Ahora puede gestionar con flexibilidad el acceso a los informes: establecer por separado los derechos de consulta, edición y eliminación. Por ejemplo, a un empleado se le puede conceder solo el acceso de consulta, sin posibilidad de modificar ni eliminar informes. Así podrá proteger los informes de cambios y eliminaciones accidentales.

![](images/drex_pilot_7_8_custom.png)

### Selección de la fuente de velocidad

En la configuración del objeto ahora se puede elegir la fuente de velocidad: usar GPS de forma predeterminada o indicar otro campo, por ejemplo, el valor del bus CAN. Esta función ayuda a calcular con más precisión el kilometraje y el tiempo en movimiento, y a tener en cuenta las particularidades de los distintos tipos de transporte. Al seleccionar la fuente de velocidad también puede establecer de inmediato las unidades de medida necesarias.

![](images/drex_pilot_7_8_custom_2.png)

### Seguimiento de la temperatura en la ruta

Al pulsar el gráfico de temperatura en un informe, verá de inmediato dónde se encontraba el transporte en el mapa en ese momento. Así es fácil rastrear la relación entre los cambios de temperatura y la ruta.

![](images/drex_pilot_7_8_custom_3.png)

### Visualización de los valores de los sensores en la aplicación móvil

Ahora en la configuración de los sensores hay una opción con la que puede elegir si se muestran los valores de los sensores en la aplicación móvil. Si la opción está activada, el valor del sensor se verá en el teléfono. Si está desactivada, el valor no se muestra en la versión móvil.

![](images/drex_pilot_7_8_custom_4.png)

![](images/drex_pilot_7_8_custom_5.png)

### Visualización del estado «En mantenimiento»

El transporte con el estado «En mantenimiento» se ve ahora mejor en el sistema: estos objetos aparecen en la lista general con un icono de llave inglesa. Al pulsarlo verá información sobre los plazos del mantenimiento en curso.

![](images/drex_pilot_7_8_custom_6.png)

### Envío de la ubicación mediante Telegram

Ahora puede usar la función actualizada de envío de coordenadas mediante Telegram: funciona con la nueva versión de la API de Telegram y es aún más estable y precisa.

El bot de Telegram actualizado puede utilizarse como rastreador móvil: envíe la ubicación directamente desde la aplicación y el sistema recibirá estos datos en tiempo real.

### Descarga de un fragmento de video

Ahora, de los videos recibidos de los dispositivos conectados se puede exportar solo el fragmento necesario. Abra la grabación, establezca la hora de inicio y de fin y descargue un clip independiente sin minutos innecesarios.

Seleccione el intervalo exacto y obtenga un archivo independiente, ahorre tiempo y tráfico sin descargar todo el video y prepare más rápido los materiales sobre incidentes.

![](images/drex_pilot_7_8_custom_7.png)

### Nuevo módulo «Puntos de interés»

Hemos añadido «Puntos de interés» para que pueda marcar en el mapa lugares importantes: oficinas, almacenes, estacionamientos, direcciones de clientes y otros objetos. Para cada punto se pueden indicar las coordenadas, elegir un icono adecuado, añadir una descripción y agruparlo con otros según su finalidad.

![](images/drex_pilot_7_8_custom_8.png)

### Actualización de la analítica

**Gráfico del estado de la conexión con porcentajes**

Ahora, en el dashboard de la sección de analítica se ha actualizado el gráfico del estado de la conexión de los vehículos. El diagrama muestra la proporción porcentual por estado de conexión: ve de inmediato qué parte de la flota está conectada ahora y qué vehículos llevan mucho tiempo sin conectarse.

![](images/drex_pilot_7_8_custom_9.png)

**Agrupación de la clasificación por modelos**

En la clasificación de vehículos ahora se pueden agrupar los datos por modelos de automóvil. Puede comparar los indicadores no solo por vehículos individuales, sino también por modelos.

![](images/drex_pilot_7_8_custom_10.png)

## Nuevas funciones e integraciones

### Bot de IA: su asistente técnico

Hemos creado un asistente inteligente que desempeña las funciones de consultor técnico. Con él podrá encontrar más rápido las respuestas a sus preguntas y recibir ayuda directamente dentro del sistema.

![](images/drex_pilot_7_8_custom_11.png)

El bot está disponible en todos los idiomas y siempre está dispuesto a orientarle sobre:

-   cómo usar las posibilidades de la plataforma
    
-   dónde encontrar la información necesaria
    
-   cómo resolver más fácilmente las tareas técnicas
    

![](images/drex_pilot_7_8_custom_12.png)

Como cualquier sistema basado en IA, el bot puede equivocarse en ocasiones. Es mejor volver a comprobar los detalles importantes o consultarlos con el servicio de soporte. Sus comentarios ayudarán a que sea aún más útil.

### Carreteras de peaje: control de gastos y planificación de rutas

Utilice la función «Carreteras de peaje» del módulo «Geocercas» para tener en cuenta los tramos de carretera de pago. Con ella puede:

-   controlar los gastos y ver cuándo y cuánto han circulado sus objetos por carreteras de peaje
    
-   tener en cuenta los tramos de peaje al planificar rutas
    
-   analizar los viajes: los datos de las carreteras de peaje se guardan y están disponibles en los informes
    

Encontrará información detallada sobre cómo trabajar con las carreteras de peaje y configurar los tramos de entrada y salida en este [artículo](../lichnyj-kabinet-polzovatelya/moduli-1/platnye-dorogi/index.html).

![](images/drex_pilot_7_8_custom_13.png)

### Integración con Yandex LBS

Ahora la ubicación de los objetos puede determinarse mediante el servicio Yandex LBS: las coordenadas están disponibles no solo por GPS, sino también por los datos de las redes móviles y Wi-Fi. Gracias a ello, el sistema sigue supervisando el transporte incluso sin señal GPS, por ejemplo, en estacionamientos subterráneos o en zonas urbanas densamente edificadas.

### Compatibilidad con el videograbador Jimi

Ahora puede conectar y utilizar el videograbador Jimi JC400 para grabar y transmitir video.

### Integración de contadores de pasajeros CMSV6

Hemos añadido compatibilidad con las cámaras de conteo de pasajeros CMSV6. Con los datos de estos dispositivos ya están disponibles dos informes:

-   por el número de subidas y bajadas en cada geocerca de salida y de llegada
    
-   por las estadísticas generales del flujo de pasajeros durante el período seleccionado en todas las rutas
    

Estos informes ayudarán a comprender mejor la ocupación de las rutas y a planificar con más precisión el trabajo del transporte.

### Asistente de migración de datos desde Wialon

Ahora es más fácil trasladar objetos y eventos de Wialon a PILOT. Hemos creado un módulo independiente: el asistente de migración «Importación desde Wialon».

Con el asistente de migración podrá:

-   crear tareas de transferencia de datos
    
-   seleccionar los objetos que desea trasladar
    
-   ver el estado de cada etapa de la migración
    

### Comunicación bidireccional mediante la cámara

Si tiene un dispositivo de video conectado, puede hablar con el conductor a través de la cámara como en una llamada. Abra la cámara y pulse el icono del intercomunicador: el conductor le oirá por el altavoz del dispositivo y podrá responder.

Con el intercomunicador se comunica rápidamente sin llamadas innecesarias: directamente en la ventana de la cámara puede aclarar la situación sobre el terreno, dar instrucciones y recibir de inmediato la confirmación por voz.

![](images/drex_pilot_7_8_custom_14.png)

### Guardado de zonas junto con los tramos de peaje

Ahora puede guardar y trasladar geocercas junto con la configuración de los tramos de peaje y del planificador. Utilice los botones de exportación e importación: se conservarán todos los parámetros.

![](images/drex_pilot_7_8_custom_15.png)

### Envío de coordenadas desde el «Centro de situación»

En el módulo «Centro de situación» ha aparecido un botón para copiar rápidamente el enlace a la ubicación actual del transporte. El enlace puede copiarse con un solo clic y enviarse a los servicios de emergencia, a compañeros o a otros destinatarios, por ejemplo, en caso de robo, de una situación anómala o para aclarar la ruta.

![](images/drex_pilot_7_8_custom_16.png)

### Pronóstico mejorado de llegada de autobuses

En el módulo «Gestión de líneas de autobús» hemos mejorado el pronóstico de llegada de los autobuses: ahora el tiempo se calcula teniendo en cuenta la ruta real de circulación por las carreteras.

En la pestaña «En línea» han aparecido tres columnas nuevas:

-   nombre de la línea de autobús
    
-   próxima parada
    
-   hora prevista de llegada a ella
    

Ve de inmediato qué autobús circula por qué ruta, hacia dónde se dirige y cuándo llegará a la próxima parada.

![](images/drex_pilot_7_8_custom_17.png)

### Control del tiempo de conducción y descanso en el módulo «Eco Driving»

En el módulo «Eco Driving» se pueden configurar reglas de control del tiempo de conducción y descanso de los conductores.

Usted mismo define:

-   cuánto tiempo puede estar el conductor al volante
    
-   cuánto debe descansar entre viajes
    
-   los períodos de descanso diarios y semanales
    

El sistema vigila automáticamente estos parámetros y avisa si se superan los límites. La función se basa en la lógica del tacógrafo, ayuda a cumplir los requisitos sobre el régimen de trabajo y descanso y contribuye a la seguridad de los conductores.

### Notificación de uso repetido de iButton

Se ha añadido un nuevo tipo de notificación que se activa si un mismo iButton se utiliza en varios vehículos en un período de tiempo determinado. Así podrá detectar a tiempo el cambio de conductor y evitar errores en la vinculación «conductor — transporte».

Para que la notificación funcione, en los objetos debe estar instalado un sensor iButton y deben estar activados los módulos «Conductores» y «Notificaciones».

![](images/drex_pilot_7_8_custom_18.png)

## Informes y automatización

### Intervalos configurables en el planificador de informes

En el planificador ahora se puede establecer cualquier intervalo de envío de informes, por ejemplo, cada 5 minutos, cada hora u otro período. Los informes se generan para períodos completados: por ejemplo, si el informe está configurado para enviarse cada 15 minutos, a las 10:00 recibirá los datos del intervalo de 9:45 a 10:00. Podrá configurar la programación según sus tareas y recibir justo los datos que necesita.

![](images/drex_pilot_7_8_custom_19.png)

### Nuevo informe para la gestión de contenedores de basura

En el sistema ha aparecido un nuevo informe de gestión de contenedores de basura que ayuda a analizar y optimizar el trabajo de recogida. Consta de dos bloques:

**Diagrama de servicios**

Muestra cuántas veces se ha atendido cada contenedor durante el período seleccionado. Con estos datos se puede:

-   evaluar el cumplimiento del calendario de recogida
    
-   detectar contenedores con carga alta o baja
    
-   comparar entre zonas y tipos de contenedores
    

![](images/drex_pilot_7_8_custom_20.png)

**Mapa de llenado**

Muestra en el mapa los puntos donde los contenedores estaban llenos. En cada círculo se indica cuántas veces se llenó el contenedor durante el período seleccionado. El mapa ayuda a:

-   determinar las zonas con desbordamientos regulares
    
-   detectar los distritos donde es necesario aumentar la frecuencia de recogida
    
-   ajustar las rutas y dirigir la maquinaria a las zonas más cargadas
    

![](images/drex_pilot_7_8_custom_21.png)

### Plantillas de sensores para cuentas de socios

Ahora se puede crear una plantilla de sensores para toda la cuenta de socio y aplicarla de una vez a todos los objetos necesarios con un determinado tipo de dispositivo. En la interfaz puede seleccionar y aplicar esa plantilla a todos los objetos: no es necesario configurar cada objeto por separado.

![](images/drex_pilot_7_8_custom_22.png)

### Actualización del informe de combustible

En el informe de combustible, que calcula el consumo a partir de las lecturas de los sensores, hemos añadido tablas con repostajes y drenajes. Ahora en un solo informe ve tanto el consumo como todos los eventos de repostaje y drenaje con sus fechas y volúmenes.

![](images/drex_pilot_7_8_custom_23.png)

### Informes ampliados de sensores

En el constructor de informes hemos añadido la posibilidad de generar informes de sensores con compatibilidad con nuevos parámetros. Ahora puede configurar el informe para que incluya:

-   nombre de la geocerca
    
-   estado del encendido
    
-   estado de la puerta
    
-   temperatura
    
-   humedad
    

En un solo informe puede ver todos los parámetros del transporte y de los sensores, así como en qué geocerca se registraron los eventos. Todas las columnas necesarias se pueden añadir con flexibilidad mediante el constructor de informes.

![](images/drex_pilot_7_8_custom_24.png)

### Plantillas para notificaciones

Ahora se pueden crear plantillas de notificaciones y trasladarlas entre cuentas. Puede guardar la configuración de las notificaciones de una cuenta y aplicarla en otra. Esta función ayuda a configurar más rápido las notificaciones de cuentas nuevas o similares y ahorra tiempo.

![](images/drex_pilot_7_8_custom_25.png)

### Coordenadas en el informe de exceso de velocidad

Ahora cada registro del informe tiene coordenadas exactas. Ve de inmediato el lugar de la infracción, puede comentar la situación con el conductor de forma concreta e identificar tramos «peligrosos» de la carretera para corregir las rutas.

![](images/drex_pilot_7_8_custom_26.png)

## Actualizaciones de la aplicación móvil PILOT

En la nueva versión de PILOT móvil hemos actualizado la interfaz, recuperado el tema oscuro y añadido funciones útiles. Hemos corregido errores y hecho la aplicación más estable. Ahora usar PILOT móvil es aún más cómodo.

### Actualizaciones de la interfaz

Hemos actualizado la paleta de colores y la hemos sincronizado con la versión web. Ahora los colores son los mismos en todas las plataformas.

Hemos aumentado el contraste y renovado los tonos para que la interfaz sea más fácil de leer y más cómoda de usar en cualquier pantalla. El trabajo en el sistema se ha vuelto visualmente coherente y agradable.

Hemos actualizado los marcadores y los iconos, haciéndolos más visibles y comprensibles para que los elementos se lean a primera vista y sea más fácil orientarse.

Hemos cambiado de lugar algunos elementos para que los datos necesarios se encuentren más rápido en los escenarios habituales.

![](images/drex_pilot_7_8_custom_27.png)

### Tema oscuro

Hemos recuperado el tema oscuro. Puede elegir entre el claro y el oscuro y, de forma predeterminada, la aplicación se adapta al tema del sistema.

![](images/drex_pilot_7_8_custom_28.png)

### Sección «Video»

**Vistas previas de las cámaras**

En la pestaña «Video» ahora se ven de inmediato las vistas previas de todas las cámaras conectadas: es más fácil valorar la imagen y pasar a la que necesita.

![](images/drex_pilot_7_8_custom_29.png)

**Nuevo reproductor de video**

Hemos renovado por completo el reproductor para transmisiones en línea y el historial de video:

-   diseño moderno y control sencillo
    
-   cambio de cámara con flechas
    
-   activación y desactivación del sonido
    
-   creación de capturas de pantalla
    
-   video a pantalla completa
    

![](images/drex_pilot_7_8_custom_30.png)

### Inicio de sesión del administrador

Los administradores ahora pueden entrar en la aplicación con su propio nombre de usuario y ver de inmediato los perfiles de todos los usuarios del contrato. Se puede cambiar rápidamente entre cuentas, ayudar a los compañeros y gestionar la configuración.

### Inspecciones del transporte

En la aplicación ha aparecido la herramienta «Inspecciones» del módulo «Servicio». Ahora puede comprobar el estado del transporte directamente desde el teléfono:

-   marque el estado del transporte con formularios predefinidos
    
-   añada comentarios y fotos
    
-   confirme el resultado con su firma
    
-   consulte el historial de inspecciones para detectar averías con antelación y reducir los riesgos de inactividad
    

![](images/drex_pilot_7_8_custom_31.png)
