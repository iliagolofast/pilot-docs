---
title: "Ajustes"
---

En la sección «Ajustes», el administrador puede definir los parámetros de funcionamiento del sistema PTM, configurar integraciones con servicios externos y determinar el comportamiento predeterminado del sistema.

A continuación se describen todas las secciones de ajustes disponibles.

![](images/drex_nastrojki_3_custom.png)

A continuación veremos los ajustes disponibles.

### Configuración de la integración de sistemas de información geográfica

En esta sección se configuran los servicios cartográficos que se utilizan para trabajar con direcciones, geocodificación y cálculo del tiempo de trayecto.

![](images/drex_nastrojki_3_custom_2.png)

1\. Conexión de servicios cartográficos

 Puede usar servicios como OSM, DaData, Google, HERE, Yandex, City Guide y otros.

Para ello es necesario indicar:

-   Host, clave API o Token
    
-   Casillas:
    
    — Usar para el geocodificador: el servicio buscará direcciones y coordenadas
    
    — Usar para la previsión: el servicio calculará rutas y tiempo de trayecto
    
    2\. Prioridad de geocodificación:
    
    Establezca el orden de consulta de los servicios: el servicio con mayor prioridad se utilizará primero.
    
    3\. Capas de mapas:
    
    Seleccione qué mapas (OSM, Yandex, Google y otros) estarán disponibles en el sistema
    
    4\. Parámetros de previsión:
    
     Defina los parámetros para el cálculo del tiempo previsto:
    

— Velocidad media

— Tiempo medio de carga/descarga

— Tiempo máximo de movimiento

### Ajustes del calendario

![](images/drex_nastrojki_3_custom_3.png)

Aquí se configura la visualización de las tareas en el calendario.

1\. Agrupación por color:

-   Por tipo de tareas: las tareas se mostrarán en distintos colores según su tipo (por ejemplo, entrega, reparación, etc.).
    
-   Por vehículo (VH): las tareas tendrán distintos colores según el vehículo asignado para su ejecución.
    
    2\. Mostrar solo las tareas activas:
    

Si activa este ajuste, en el calendario se mostrarán solo las tareas con los estados:

-   Nueva
    
-   En cola
    
-   No asignada
    
-   Enviada al conductor
    
-   Aceptada
    
-   En camino
    
-   En proceso
    
-   En aprobación
    

### Ajustes de tareas

![](images/drex_nastrojki_3_custom_4.png)

Con los ajustes de tareas defina cómo funcionará el sistema de despacho:

1\. Solicitudes:

Puede indicar el almacén y la plantilla de solicitudes:

-   Almacén de solicitudes: catálogo de solicitudes obtenido mediante la integración con la API de PARUS. Se utiliza para asociar las solicitudes con las tareas de PTM
    
-   Plantilla de solicitudes: plantilla preconfigurada que se utiliza para agrupar y procesar tareas relacionadas
    
    2\. Resaltado por colores:
    

Configure cómo se resaltarán las tareas en la tabla y en el calendario:

— Por tipos de tareas: cada tarea tendrá su propio color según el tipo (por ejemplo, entrega, reparación, etc.)

— Por usuarios: el color depende del usuario asignado como responsable de la tarea (por ejemplo, para distintos conductores o despachadores). El color del usuario se configura en su ficha.

3\. Motivos de cierre:

Puede activar la selección del motivo de cancelación de la tarea de un catálogo preparado previamente.

4\. Estados automáticos por geocerca

Los estados automáticos permiten cambiar automáticamente el estado de la tarea según la visita a las geocercas de la ruta.

-   Radio de la geocerca, m: radio de la geocerca virtual que se crea automáticamente alrededor del punto de la ruta
    
-   Precisión de la geocerca, m: valor adicional en el que se aumenta el radio de la geocerca al procesar la tarea
    
-   Empezar con, min: determina con cuántos minutos de antelación a la hora planificada de inicio la tarea puede pasar automáticamente a procesamiento
    
-   Finalizar tras, min: determina el tiempo posterior a la finalización planificada de la tarea, transcurrido el cual el sistema puede finalizarla automáticamente
    
-   Tiempo para el registro, s: tiempo mínimo de permanencia del vehículo dentro de la geocerca para registrar la visita. La comprobación se realiza tanto al entrar como al salir de la geocerca
    
-   Activar rutas cíclicas: permite procesar correctamente las rutas en las que el vehículo se desplaza varias veces entre los mismos puntos y después vuelve a la base.
    
-   Función de finalización: determina la condición de finalización automática de la tarea. Están disponibles las siguientes opciones:
    

— Regreso a la base: la tarea finalizará cuando el vehículo vuelva a aparecer en la geocerca de la base.

Como base se pueden usar:

-   el primer punto de la ruta
    
-   el último punto de la ruta, que coincide con el primero
    
-   un punto con el subtipo «Base»
    
-   una geocerca alternativa creada en el sistema PILOT
    

— Finalizar por turno: la tarea finalizará al terminar el tiempo de ejecución calculado: hora planificada de finalización + valor del parámetro «Finalizar tras»

— Última dirección de la hoja de ruta (entrada): la tarea finalizará cuando se registre la entrada a la geocerca del último punto de la ruta

— Última dirección de la hoja de ruta (salida): la tarea finalizará cuando se registre la salida de la geocerca del último punto de la ruta.

![](images/drex_nastrojki_3_custom_5.png)

Las reglas adicionales de trabajo con tareas permiten configurar la automatización y precisar las reglas de procesamiento de las tareas:

-   Activar la finalización automática de tareas: finaliza forzosamente las tareas transcurrido el número de minutos indicado desde la hora planificada de finalización. No se recomienda usarla simultáneamente con los estados automáticos
    
-   Tiempo de ejecución de la tarea: se utiliza al calcular la hora planificada de finalización si el campo de tiempo de ejecución no está disponible para edición manual
    
-   Permitir el envío de tareas no asignadas a todos los conductores: permite a los conductores seleccionar por sí mismos tareas de la cola general de la aplicación móvil
    
-   Activar la edición de tareas en la tabla solo del día actual: limita la posibilidad de editar tareas en la tabla al día en curso. Funciona junto con los permisos del usuario solo para la tabla de tareas generada dinámicamente (la tabla se genera dinámicamente a partir de todas las plantillas de tareas).
    
-   Activar el autorrelleno de la tarea por campos clave: el sistema inserta automáticamente datos de tareas creadas anteriormente a partir de los valores introducidos por el usuario
    
-   Desactivar la selección de tipos de tareas del sistema: oculta los tipos de tareas de servicio al crear nuevas tareas
    
-   Activar el resaltado por colores de los estados de las tareas: resalta las celdas de estado de la tabla según el estado actual de la tarea
    
-   Por defecto el iniciador es el usuario actual: al crear una tarea, el iniciador se establece automáticamente como el usuario actual
    
-   Activar las sugerencias emergentes para las filas de las tablas: al pasar el cursor se muestra información breve sobre la tarea
    
-   Cerrar la tarea después de la firma: la tarea se cierra automáticamente tras completarse toda la cadena de aprobación y firma de documentos
    
-   Activar la construcción de puntos de paso sin pasar por los estados automáticos: crea puntos de paso a partir de la ruta independientemente del funcionamiento del mecanismo de estados automáticos
    
-   Activar el uso de la prioridad de la geocerca en los puntos: si un punto de la ruta está vinculado a una geocerca del sistema PILOT, se utilizará precisamente esa geocerca para registrar la visita
    
-   No usar el primer punto como último punto: desactiva el cierre automático de la ruta y afecta a la generación de la hoja de ruta
    
-   Activar la selección de vehículo de sustitución: permite asignar un vehículo de reserva sin cambiar el vehículo principal asignado a la tarea
    
-   Activar la sincronización de la edición de direcciones con el clasificador de direcciones: al cambiar una dirección en la tarea, los cambios se guardan automáticamente en el catálogo de direcciones
    

### Integraciones

![](images/drex_nastrojki_3_custom_6.png)

La integración con servicios externos permite al sistema intercambiar datos con otras plataformas. Puede:

1\. Conectar servicios externos

2\. Configurar la importación y exportación automáticas de datos mediante API, email o webhooks

3\. Indicar qué eventos y datos deben transmitirse al sistema y desde él

Las integraciones se utilizan para:

-   crear notificaciones
    
-   importar automáticamente tareas desde el correo electrónico según una plantilla determinada (por ejemplo, para el sistema «Магнит»)
    

Para conectar una integración es necesario:

1\. Seleccionar el grupo de integración

2\. Seleccionar el sistema de integración

3\. Rellenar los parámetros de conexión

Si solo se utiliza el mecanismo de notificaciones, para la integración con el sistema «Магнит» basta con indicar la dirección de correo electrónico sin contraseña.

### Ajustes de webhooks

Para cada integración están disponibles los siguientes parámetros:

-   Webhook URL: dirección para el envío de webhooks
    
-   Encabezados del webhook: encabezados HTTP adicionales, por ejemplo, el token de autorización
    
-   Parámetros del webhook: carga útil que se envía en el webhook
    

Para la inserción automática de datos se utilizan funciones especiales:

-   fn\[getApiKey\]: obtener la clave API de la configuración (solo para el sistema ERP Sarmix)
    
-   fn\[getAgentId\]: obtener el identificador del VH del sistema PILOT
    
-   fn\[getCurrentAgentLocation\]: obtener la ubicación actual del VH
    
-   fn\[getCurrentUTC\]: obtener la hora actual del paquete del VH en segundos
    
-   fn\[getCurrentZoneId\]: obtener el identificador de la geocerca en la que se encuentra el VH
    
-   fn\[getTaskId\]: obtener el identificador de la tarea que ejecuta el VH
    
-   fn\[getErpOrderId\]: obtener el identificador de la solicitud (solo para el sistema ERP Sarmix)
    
-   fn\[getCurrentSpeed\]: obtener la velocidad actual del VH
    
-   fn\[getVehicleNumber\]: obtener la matrícula del VH
    

### Ejemplo de configuración de los parámetros del webhook

En el campo «Parámetros del webhook» se indica un objeto JSON que contiene los datos que se transmitirán al sistema externo. Para la inserción automática de valores se utilizan funciones especiales.

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "access_token": "fn[getApiKey]",</span></div><div><span>&nbsp; "agent_id": "fn[getAgentId]",</span></div><div><span>&nbsp; "geolocation": "fn[getCurrentAgentLocation]",</span></div><div><span>&nbsp; "time_event": "fn[getCurrentUTC]",</span></div><div><span>&nbsp; "zone_id": "fn[getCurrentZoneId]",</span></div><div><span>&nbsp; "pilot_task_id": "fn[getTaskId]",</span></div><div><span>&nbsp; "erp_order_id": "fn[getErpOrderId]",</span></div><div><span>&nbsp; "speed": "fn[getCurrentSpeed]",</span></div><div><span>&nbsp; "vehiclenumber": "fn[getVehicleNumber]"</span></div><div><span>}</span></div><div>&nbsp;</div></td></tr></tbody></table>

Como resultado, el sistema insertará automáticamente los valores reales, por ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "access_token": "123456789abcdef",</span></div><div><span>&nbsp; "agent_id": "4521",</span></div><div><span>&nbsp; "geolocation": "55.751244,37.618423",</span></div><div><span>&nbsp; "time_event": "1750054800",</span></div><div><span>&nbsp; "zone_id": "125",</span></div><div><span>&nbsp; "pilot_task_id": "98765",</span></div><div><span>&nbsp; "erp_order_id": "ORD-4567",</span></div><div><span>&nbsp; "speed": "68",</span></div><div><span>&nbsp; "vehiclenumber": "А123ВС777"</span></div><div><span>}</span></div></td></tr></tbody></table>

### Parámetros adicionales de la integración

-   Identificador del algoritmo: identificador del algoritmo creado en el sistema PILOT para el procesamiento de notificaciones por el operador
    

Datos del algoritmo: carga útil que se transmite al algoritmo del sistema PILOT cuando se activa la notificación. Si es necesario, la configura el soporte técnico. La composición y la estructura de los datos dependen del algoritmo concreto y del escenario de procesamiento.

Ejemplo de configuración de los datos del algoritmo

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "-6": {</span></div><div><span>&nbsp; &nbsp; "text": "Выполните действия",</span></div><div><span>&nbsp; &nbsp; "options": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "Действие 3"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   Temporizador del algoritmo: tiempo de espera de ejecución del algoritmo en segundos
    
-   Identificador del sensor: identificador del sensor del sistema PILOT
    
-   Correos electrónicos: lista de direcciones de correo electrónico para el envío de notificaciones
    

### Ajustes de la cuenta

Aquí puede configurar los parámetros principales de funcionamiento del sistema para su cuenta:

![](images/drex_nastrojki_3_custom_7.png)

1\. Cola para la aplicación móvil:

Active la cola de tareas para los conductores y determine si seleccionarán por sí mismos las tareas de la cola general o si las tareas se asignarán automáticamente.

2\. Ajustes de integración y de perfil:

— Defina el nombre de usuario y la contraseña

— Indique la zona horaria y el idioma predeterminados para todo el sistema

— Active la integración con ExactFarming y configure el token para esta integración

3\. Cadena de trabajo «Logista – Despachador»:

Active la cadena de trabajo y seleccione la plantilla de permisos que se utilizará para logistas y despachadores.

4\. Interfaz en el teléfono:

Active la nueva interfaz para dispositivos móviles y configure también la generación automática de actas de trabajos realizados.

5\. Envío de mensajes:

Configure el sistema para enviar notificaciones a los solicitantes y a los conductores cuando sea necesario

6\. Notificaciones de eventos:

Configure notificaciones sobre diversos errores, como problemas de geocodificación, ausencia de vehículo o de recorrido, intervalos de tiempo incorrectos, superposición de geocercas y cortes de recorridos.
