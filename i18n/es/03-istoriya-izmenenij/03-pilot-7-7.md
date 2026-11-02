---
title: "PILOT 7.7"
---

En la versión 7.7 hemos actualizado el diseño de la interfaz, añadido nuevas funciones, mejorado el trabajo con los informes y ampliado las posibilidades de las solicitudes de API para que la gestión de objetos, contratos y rutas sea aún más sencilla.

## [Interfaz de usuario actualizada](../lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/index.html)

### Nuevo diseño

Hemos rediseñado la interfaz para crear una experiencia de usuario intuitiva y visualmente atractiva. El nuevo diseño conserva un aspecto limpio y estructurado, mejora la navegación en la cuenta de usuario y hace más accesibles las funciones principales.

![](images/drex_pilot_7_7_custom.png)

### Actualización del color

Hemos rediseñado la paleta y renovado los colores de la interfaz para que sea más legible y cómoda para trabajar en distintas pantallas. El contraste mejorado y la estética actualizada hacen que el trabajo con el sistema sea más fluido y atractivo.

### Nuevo menú de configuración

Todas las funciones de uso poco frecuente, como la selección del idioma, el cambio de tema, la consulta de novedades o el contacto con el soporte técnico, se han reunido ahora en un solo menú. Esta solución libera espacio en la pantalla para las funciones principales y hace la interfaz sencilla y clara.

![](images/drex_pilot_7_7_custom_2.png)

### Herramientas del mapa optimizadas

Todas las herramientas para trabajar con el mapa se han reunido ahora en un solo lugar: un panel especial situado en la esquina inferior derecha de la pantalla. Ya no es necesario perder tiempo buscando herramientas en distintas partes de la pantalla: todo lo necesario está a mano.

![](images/drex_pilot_7_7_custom_3.png)

### Navegación mejorada con la nueva estructura del menú

Hemos trasladado el menú de segundo nivel a la izquierda. Ahora las secciones principales, como antes, se encuentran arriba y las pestañas de las secciones, a la izquierda. Esta disposición simplifica la navegación y ayuda a encontrar más rápido la información necesaria.

![](images/drex_pilot_7_7_custom_4.png)

## Nuevas funciones para el trabajo

### [Módulo](../lichnyj-kabinet-polzovatelya/moduli-1/vesy.html)

### «Básculas»

En la nueva versión hemos añadido el módulo «Básculas», que ayuda a controlar las operaciones de pesaje de vehículos. Ahora puede:

       — añadir nuevas estaciones de pesaje

       — consultar el historial de pesajes

       — exportar los datos de pesaje para los informes

![](images/drex_pilot_7_7_custom_5.png)

### Actualizaciones en el

### [módulo «Servicio»](../lichnyj-kabinet-polzovatelya/moduli-1/servis/index.html)

En esta actualización nos hemos centrado en mejorar la estructura del módulo y la navegación por las pestañas. Además, hemos añadido una nueva funcionalidad: la inspección técnica del automóvil. Ahora puede revisar el automóvil antes de un viaje o de su recepción:

-   Cree informes de inspección para vehículos concretos
    
-   Responda a las preguntas de control
    
-   Adjunte fotografías y documentos complementarios
    
-   Marque el estado de las piezas
    

La nueva herramienta ayuda a evaluar rápidamente el estado del automóvil y aumenta la seguridad de la flota.

![](images/drex_pilot_7_7_custom_6.png)

### [Campo ICCID para identificar tarjetas SIM](../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html#ICCID)

En la ficha del objeto hemos añadido el nuevo campo ICCID, el identificador único de la tarjeta SIM, que:

-   Permite identificar las tarjetas SIM
    
-   Simplifica la introducción y la gestión de los datos de la SIM
    
-   Rellena automáticamente los datos ICCID que falten al integrarse con el proveedor de SIM
    

![](images/drex_pilot_7_7_custom_7.png)

### [Notificaciones con marca de tiempo exacta](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html)

Hemos añadido la hora a cada notificación. Ahora, cuando vuelva tras un período sin conexión, verá la secuencia exacta de todos los eventos. Los mensajes SMS y push mostrarán qué ocurrió y cuándo.

### [Cambio entre rutas y paradas](../lichnyj-kabinet-polzovatelya/moduli-1/marshruty-3/kak-sozdat-marshrut-cherez-trek-v-istorii.html)

Las rutas y las paradas pueden mostrarse por separado. La función ayuda a ver las rutas sin que se superpongan las paradas y hace el mapa más claro.

![](images/drex_pilot_7_7_custom_8.png)

### [Recálculo de los datos del trabajo de los conductores](../panel-administratora/pereraschyety.html)

Los administradores ahora pueden recalcular los datos de rendimiento de los conductores de cualquier período indicado, manteniendo los informes actualizados.

![](images/drex_pilot_7_7_custom_9.png)

### [Eliminación de objetos mediante el panel de administración](../panel-administratora/mashiny/udalit-2.html)

Antes, para eliminar un objeto había que pasar del panel de administración a la interfaz de usuario. Ahora hemos añadido el botón «Eliminar» directamente en la pestaña «Vehículos» de la interfaz de administración. No necesita cambiar de una interfaz a otra.

![](images/drex_pilot_7_7_custom_10.png)

### Mejor protección de los datos para la retransmisión

En el panel de administración ha aparecido la posibilidad de ocultar a los socios los datos confidenciales de la retransmisión: tokens, contraseñas, nombres de usuario. Los socios que utilizan la retransmisión SAW podrán seguir trabajando con el sistema, pero dejarán de ver esta información. Esto significa que puede compartir el acceso de forma segura, sin preocuparse por el riesgo de fuga de información.

![](images/drex_pilot_7_7_custom_11.png)

## Nuevas posibilidades de la API

### [Nueva API para vincular objetos a nuevos contratos](../rabota-s-api-zaprosami/api-administratora/peremeshchenie-obekta-mezhdu-dogovorami.html)

Ahora puede trasladar rápidamente vehículos entre cuentas con la nueva API. Basta con indicar el ID del vehículo y la nueva cuenta en la solicitud de API, y el objeto se trasladará.

### [Ampliación de la API para añadir vehículos](../rabota-s-api-zaprosami/api-administratora/dobavlenie-transportnogo-sredstva.html)

Hemos ampliado la funcionalidad de la API:

-   Ahora, al crear un nuevo vehículo, puede indicar la dirección MAC del dispositivo y, en ese caso, el sistema creará automáticamente un registro del objeto en la pestaña «Autobuses» del panel de administración.
    
-   La API admite ahora una segunda tarjeta SIM para dispositivos con dos ranuras, lo que aumenta la fiabilidad de la conexión de red.
    

### [Actualización de la API para la gestión de viajes de autobús](../rabota-s-api-zaprosami/api-polzovatelya-v2/upravlenie-avtobusnymi-rejsami.html)

Hemos actualizado la API para crear rutas y asignar autobuses a los viajes. Se ha cambiado la ruta de acceso para obtener esta información: ahora todas las solicitudes deben enviarse a la nueva dirección.

### [API ampliada para obtener datos de conducción ecológica](../rabota-s-api-zaprosami/api-polzovatelya-v2/dannye-ob-ehkodrajvinge.html)

Ahora la API para obtener datos de conducción ecológica incluye parámetros adicionales:

-   número de cuenta
    
-   nombre de la cuenta
    
-   nombre y tipo del vehículo
    
-   número único del rastreador GPS
    

Además, en una sola solicitud puede obtener los datos de todos los vehículos vinculados a su cuenta.

## Actualizaciones en los informes

### [Informe de objetos inactivos](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/ustrojstva-oflajn.html)

Hemos creado un nuevo informe, «Dispositivos sin conexión». Muestra la lista de objetos con los que actualmente no hay conexión. Utilice este informe en el «Planificador de informes» para generarlo y enviarlo automáticamente según una programación.

![](images/drex_pilot_7_7_custom_12.png)

### Guardado de informes de temperatura en Excel

Ahora puede exportar los informes de temperatura a Excel. Exporte todos los datos en un cómodo formato de tabla para seguir trabajando con ellos. Cree gráficos, analice los indicadores de temperatura y conserve el historial de mediciones en el formato habitual de Excel.

### [Nuevo informe de kilometraje](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/pomesyachnyj-otchyet-po-probegu.html)

Hemos creado un informe mensual de kilometraje, que ofrece información sobre el kilometraje de cada mes, así como el kilometraje total del transporte durante todo el período seleccionado.

![](images/drex_pilot_7_7_custom_13.png)

### [Selección del intervalo de tiempo en el informe de refrigeradores](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-o-refrizheratore.html)

Hemos añadido al informe de refrigeradores la selección del intervalo de tiempo. Configure los informes del funcionamiento de las unidades de refrigeración para períodos de tiempo determinados, indicando el intervalo necesario entre los registros de datos.

### [Informe de puntos de peaje con información de los grupos de geocercas](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/geozony-1/svodnyj-otchyet-po-platnym-dorogam.html)

Ahora el informe de puntos de peaje muestra no solo la geocerca donde se encuentra el punto de peaje, sino también el grupo de geocercas al que pertenece.

### Nuevos informes de conducción ecológica

Hemos añadido 5 informes nuevos que ayudan a controlar el estilo de conducción de los conductores. Los informes muestran datos sobre las infracciones del límite de velocidad e identifican a los conductores con los peores indicadores de conducción ecológica.
