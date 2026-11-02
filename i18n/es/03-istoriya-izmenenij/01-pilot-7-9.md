---
title: "PILOT 7.9"
---

En la versión 7.9 nos hemos centrado en la comodidad de uso, la flexibilidad de la configuración y la ampliación de las posibilidades analíticas. En esta sección hemos reunido y descrito en detalle todos los cambios y mejoras clave incluidos en ambos lanzamientos.

Han aparecido nuevas herramientas para el control de los conductores, la gestión del acceso y las notificaciones, se han ampliado las posibilidades de los informes y las integraciones, y se han mejorado los módulos existentes del sistema.

## Gestión del acceso y la seguridad

### [Autenticación de dos factores por correo electrónico](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/privatnost.html#Двухфакторная_аутентификация)

En el sistema ha aparecido la autenticación de dos factores por correo electrónico. Ahora, al iniciar sesión, además del nombre de usuario y la contraseña, es necesario introducir un código de un solo uso enviado al correo electrónico. Este método aumenta la seguridad de la cuenta y ayuda a proteger los datos del acceso no autorizado.

![](images/drex_pilot_7_9_custom.png)

### [Dos tipos de tokens para acceder al servicio de monitoreo](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/tokeny.html)

En el sistema han aparecido dos tipos de tokens: enlaces especiales para un acceso seguro sin transmitir el nombre de usuario y la contraseña. Puede elegir el formato de acceso según la tarea: solo consulta o inicio de sesión completo en el sistema.

El token de consulta permite abrir el monitoreo sin revelar las credenciales, por ejemplo, para mostrar el mapa a un cliente o dar un acceso temporal a la supervisión.

El token de inicio de sesión permite autenticarse mediante un enlace sin introducir la contraseña. El usuario entra automáticamente en el sistema con los mismos derechos que en una autenticación normal. La vigencia del token puede limitarse o dejarse indefinida.

![](images/drex_pilot_7_9_custom_2.png)

### [Configuración de la interfaz para el usuario](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/personal-i-gruppy/index.html#права_доступа)

Hemos añadido la posibilidad de gestionar, para cada usuario, la visualización de las secciones y los módulos del sistema en la pestaña «Interfaz».

Ahora es posible:

— mostrar u ocultar módulos concretos

— desactivar la visualización de las pestañas principales

— adaptar el espacio de trabajo a un rol determinado

Aunque un módulo esté activado a nivel de contrato, se puede ocultar para un empleado concreto.

![](images/drex_pilot_7_9_custom_3.png)

## Ampliación de las integraciones

### [Configuración del bot de Telegram](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#Конфигурация_Telegram_bot)

Hemos añadido la posibilidad de acceder rápidamente al bot de Telegram desde la cuenta de usuario.

En la configuración de la cuenta debe indicar la configuración del bot y añadir su dirección. Tras guardar, en la cuenta de usuario aparecerá una pestaña independiente con un enlace para acceder al bot.

![](images/drex_pilot_7_9_custom_4.png)

### [Integración con Links Field](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#__Links_Field_\(links_field_sms_provider\))

Hemos integrado la [plataforma Links Field](https://linksfield.com.br/en) para la gestión de tarjetas SIM.

Ahora, al trabajar con el proveedor Links Field, puede:

— indicar el ICCID de la tarjeta SIM de cada vehículo

— configurar el acceso API

— obtener los datos de las tarjetas SIM directamente en el sistema

 — utilizar el proveedor para enviar notificaciones por SMS

### [Conexión de LBS](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#LBS_Config)

Hemos añadido la posibilidad de activar por su cuenta el trabajo con las estaciones base de Yandex (LBS) desde el panel de administración de la cuenta.

En la sección de configuración de la cuenta ha aparecido una nueva clave: LBS Config. Indique en ella la clave API de Yandex y la cuenta podrá determinar la ubicación de los dispositivos por las estaciones base de telefonía móvil más cercanas (GSM/LTE).

![](images/drex_pilot_7_9_custom_5.png)

### [Integración de la capa meteorológica](../lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/karta/index.html#слои_карты)

En el mapa ha aparecido la capa meteorológica de Windy.com. Las condiciones meteorológicas se muestran directamente en el sistema, sobre las rutas y los objetos de monitoreo, lo que ayuda a tener en cuenta la situación al planificar y analizar rutas.

En la configuración del mapa se puede activar la capa meteorológica, elegir el modelo de pronóstico (según la tarifa) y el tipo de visualización: viento, precipitaciones, nubosidad y otros parámetros. Hay disponible un panel de tiempo con animación para ver el pronóstico en su evolución.

Los datos meteorológicos se sincronizan con el mapa y se actualizan automáticamente al desplazarlo y cambiar la escala.

![](images/drex_pilot_7_9_custom_6.png)

### Integración de equipos compatibles con Wirepas

El sistema ahora admite equipos con tecnología Wirepas para la navegación en interiores. Ahora se pueden seguir los desplazamientos de objetos dentro de edificios, donde la señal GPS no está disponible o es inestable.

La tecnología utiliza una red de dispositivos inalámbricos que forman una red mesh autoconfigurable y transmiten datos de ubicación dentro del edificio.

La solución es adecuada para supervisar maquinaria, equipos y personal en almacenes, instalaciones de producción y otros espacios cerrados, y también ayuda a controlar la logística interna y los desplazamientos dentro de las instalaciones.

## Panel de administración

### [Clonación de cuentas](../panel-administratora/dogovor/menyu-dogovora/klonirovanie-dogovora.html)

Hemos ampliado las posibilidades de clonación de cuentas y simplificado la creación de una cuenta nueva a partir de una existente.

Ahora, al clonar en el panel de administración, se puede elegir qué datos se trasladan a la nueva cuenta:

— plantillas de sensores

— precios individuales por objeto

— plantillas de cartas de pago

— vinculación de usuarios

— usuarios con sus derechos y ajustes de visualización

— informes del constructor de informes

— geocercas asociadas al contrato

![](images/drex_pilot_7_9_custom_7.png)

### [Informe «Transporte por nombre de sensor»](../panel-administratora/otchyety-2.html)

Hemos añadido un nuevo informe administrativo, «Transporte por nombre de sensor». Ayuda a consultar los sensores por contrato, comprobar que sus nombres son correctos y poner orden en el registro del equipo instalado. El informe simplifica la auditoría y hace que el control de los datos sea más transparente y cómodo.

![](images/drex_pilot_7_9_custom_8.png)

## Actualizaciones de módulos

### [Módulo «Objetos compuestos» en la nueva interfaz](../lichnyj-kabinet-polzovatelya/moduli-1/sostavnye-obekty-3.html)

El módulo «Objetos compuestos» ya está disponible en la nueva interfaz. Permite unir en un único esquema lógico:

-   cisternas estacionarias y móviles
    
-   caudalímetros de entrada (recepción de combustible)
    
-   caudalímetros de salida (suministro de combustible)
    
-   sensores asociados
    

Ahora puede:

     — describir la cadena completa del movimiento del combustible, desde la entrada en la parte de «recepción» hasta el suministro al consumidor

     — contabilizar el almacenamiento, la recepción y la distribución dentro de un mismo esquema

     — analizar las entradas, el consumo, las existencias y las posibles pérdidas de combustible en el conjunto del sistema

Cree y configure objetos compuestos, utilícelos en el monitoreo y los informes y analice los indicadores.

![](images/drex_pilot_7_9_custom_9.png)

### [Ampliación de las posibilidades del módulo «Servicio»](../lichnyj-kabinet-polzovatelya/moduli-1/servis/index.html)

Hemos ampliado las posibilidades del módulo «Servicio» para que la planificación y el control del mantenimiento sean más cómodos y transparentes.

En las tablas han aparecido nuevos indicadores: horas de motor actuales, kilometraje hasta el próximo mantenimiento y horas de motor hasta el próximo mantenimiento.

A los registros de servicio ahora se pueden adjuntar archivos: fotografías, actas de trabajos realizados, documentos o instrucciones. Todos los materiales se almacenan junto con el registro y siempre están disponibles para su consulta y descarga.

![](images/drex_pilot_7_9_custom_10.png)

También se ha añadido un sistema de derechos de acceso. Se puede configurar por separado quién tiene derecho a añadir, editar o eliminar registros, así como definir el acceso a las secciones del módulo.

![](images/drex_pilot_7_9_custom_11.png)

### [Adición rápida de tiempos de inactividad](../lichnyj-kabinet-polzovatelya/moduli-1/servis/prostoi.html#Как_добавить_простой_через_меню_объекта)

Ahora puede añadir un tiempo de inactividad directamente desde el menú contextual del objeto en la pestaña «En línea», sin ir al módulo «Servicio». Basta con hacer clic con el botón derecho en el objeto y seleccionar «Añadir tiempo de inactividad»: el registro se creará automáticamente.

![](images/drex_pilot_7_9_custom_12.png)

### [Actualización del gráfico «Analítica del objeto»](../lichnyj-kabinet-polzovatelya/moduli-1/servis/analitika.html#Аналитика_конкретного_объекта_в_Сервисе)

Hemos actualizado el gráfico de resumen de analítica en la ficha del objeto para que pueda evaluar de forma visual el costo de propiedad de la maquinaria y tomar decisiones de gestión basadas en datos reales y planificados.

Ahora, al entrar en la sección «Analítica del objeto» verá un gráfico combinado «Resumen de analítica» que muestra por años:

— los gastos planificados y reales de mantenimiento de cada año

— los gastos planificados y reales de combustible

— el costo total de propiedad del objeto, planificado y real

— la variación del valor del objeto a lo largo del tiempo

— el costo de un kilómetro de kilometraje, planificado y real

![](images/drex_pilot_7_9_custom_13.png)

### [Intervalo de procesamiento de eventos en el módulo «Centro de situación»](../lichnyj-kabinet-polzovatelya/moduli-1/situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)

En el módulo «Centro de situación» hemos añadido un nuevo ajuste: el intervalo de procesamiento del evento. Determina durante cuánto tiempo el evento sigue vigente y disponible para ser procesado.

Antes, los eventos sin procesar se eliminaban automáticamente a las 24 horas. Ahora se puede aumentar el intervalo a 72 o 120 horas. Los eventos permanecerán más tiempo en la lista para poder procesarlos más tarde.

![](images/drex_pilot_7_9_custom_14.png)

### [Vinculación de etiquetas en el módulo «Rutas»](../lichnyj-kabinet-polzovatelya/moduli-1/marshruty-3/kak-sozdat-marshrut.html#Параметры_маршурута)

Ahora a los puntos de la ruta se pueden vincular etiquetas BLE y contabilizar la realización de los viajes por su señal.

Si el transporte detecta una etiqueta BLE, el punto se considera visitado, incluso con un GPS impreciso o bloqueado.

Como resultado:

— las rutas se contabilizan correctamente incluso si falla la señal satelital

— la visita al punto se confirma por la presencia real del transporte

— el sistema registra automáticamente la llegada y la salida

![](images/drex_pilot_7_9_custom_15.png)

## [Algoritmo actualizado de análisis de combustible](../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html#Как_настроить_датчик_топлива)

La nueva lógica de procesamiento de los datos de los sensores de combustible permite determinar con mayor precisión los repostajes y los drenajes, reducir el efecto del ruido del sensor y excluir los eventos falsos.

El algoritmo analiza los cambios del nivel de combustible teniendo en cuenta varios factores: umbrales de volumen, velocidad de desplazamiento del transporte, velocidad de variación del nivel de combustible y calidad de los datos del sensor. Esto ayuda al sistema a distinguir las operaciones reales con combustible del consumo normal o de las fluctuaciones aleatorias de las lecturas.

En la configuración del sensor de combustible han aparecido parámetros de análisis avanzados: volúmenes umbral de los eventos, filtro por velocidad de desplazamiento, modo de consideración de la velocidad, filtro por velocidad de variación del nivel de combustible, suavizado de los datos del sensor y mecanismo de eliminación de eventos simétricos.

![](images/drex_pilot_7_9_custom_16.png)

## [Constructor de informes](../lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/index.html)

Hemos ampliado las posibilidades del «Constructor de informes» para que pueda analizar con mayor profundidad el funcionamiento de la maquinaria y obtener más datos útiles en el formato habitual.

### Registro de inactividad en el servicio

Se ha añadido la tabla Service Downtime

Ahora puede:

— ver el tiempo de inactividad de cada máquina

— calcular la inactividad total del período

— analizar la evolución de las inactividades de servicio

Así podrá evaluar la influencia del mantenimiento en el funcionamiento de la flota y tomar decisiones de gestión basadas en datos reales.

![](images/drex_pilot_7_9_custom_17.png)

### Informes Eco resumidos por tipos de eventos

Para el tipo Eco se ha añadido la posibilidad de realizar un análisis resumido por tipos de eventos.

Hay disponibles nuevos campos:

— tipo de evento Eco

— número de eventos

— velocidad media

— velocidad máxima

Ahora puede generar informes en formato de resumen de seguridad activa y analizar el estilo de conducción de forma más sistemática.

![](images/drex_pilot_7_9_custom_18.png)

### Velocidad en el momento de la infracción

En los informes ha aparecido un nuevo parámetro: la velocidad en el momento de la infracción. Ahora puede ver la velocidad real del vehículo en el punto de activación.

### Informe detallado de combustible

Se ha añadido un nuevo tipo de informe: repostajes y drenajes de combustible.

Cada operación se muestra en una fila independiente con la hora, el volumen, el lugar y el nivel de combustible. Obtiene un registro completo de las operaciones y una imagen transparente del trabajo con el combustible.

![](images/drex_pilot_7_9_custom_19.png)

### Pérdida de conexión

En el constructor se ha añadido un nuevo tipo de informe, «Pérdida de conexión». Ayuda a entender cuándo y en qué condiciones el dispositivo pierde la conexión con el sistema.

En el informe puede ver la hora de inicio y de fin de la desconexión, su duración, el lugar donde ocurrió, el estado del vehículo en el momento de la pérdida de señal y la posible causa, por ejemplo, un corte de alimentación o la pérdida de la red.

Con este informe podrá no solo registrar el hecho de la desconexión, sino entender la situación y distinguir las interferencias breves de los problemas reales.

![](images/drex_pilot_7_9_custom_20.png)

## Control del trabajo de los conductores

### Face ID para la asignación automática de conductor

El sistema ahora admite el reconocimiento facial mediante cámaras a bordo. El conductor puede asignarse automáticamente según el resultado de Face ID.

La verificación se realiza al arrancar el encendido y periódicamente durante el viaje. El sistema determina quién está al volante, incluso si varios conductores utilizan el vehículo, registra los resultados del reconocimiento y transmite los datos a los informes.

### [Horario de trabajo del conductor](../lichnyj-kabinet-polzovatelya/moduli-1/kontrol-vremeni.html)

En la ficha del conductor hemos añadido una nueva pestaña, «Horario de trabajo». Ahora puede configurar su programación: seleccionar los días laborables de la semana y establecer intervalos de tiempo por separado para los días entre semana, el sábado y el domingo. Si es necesario, el sistema puede restringir la asignación del conductor fuera del horario establecido.

![](images/drex_pilot_7_9_custom_21.png)

### [Control del horario de trabajo de los conductores en el módulo PTM](../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/spravochniki-2.html#параметры_шаблонов_PTM)

En el módulo PILOT Task Manager hemos añadido la verificación del horario de trabajo de los conductores al asignar tareas.

Ahora, al crear una tarea, el sistema puede analizar el horario de trabajo del conductor. Si el intervalo seleccionado coincide con el tiempo de descanso o con horas no laborables, el sistema mostrará una advertencia al usuario.

Para activar la verificación, active el parámetro «Comprobar horario de trabajo», disponible para los campos de tipo Datetime y Address.

La función permite a los despachadores y logistas tener en cuenta el horario de trabajo de los conductores al planificar las tareas y reduce el riesgo de asignar tareas en horario no laborable.

![](images/drex_pilot_7_9_custom_22.png)

### [Actualización de la lógica de cálculo de Eco Driving y de las clasificaciones](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/kachestvo-vozhdeniya/otchyet-po-kachestvu-vozhdeniya.html)

Se ha actualizado la lógica de cálculo de los puntos de Eco Driving. Ahora la evaluación se genera para cada conductor teniendo en cuenta todos los vehículos que ha conducido.

Puede crear clasificaciones tanto por vehículos como por conductores, y analizar los datos desde distintos ángulos. Las infracciones se imputan al conductor concreto y no a la maquinaria, por lo que la evaluación refleja el estilo de conducción real y ayuda a tomar decisiones de gestión mejor fundamentadas.

## Notificaciones

### [Plantillas de comandos en las notificaciones](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html)

En el formulario de creación y edición de notificaciones han aparecido dos campos nuevos:

-   Comando: para introducir el texto manualmente
    
-   Plantilla de comando: selección de una plantilla ya preparada de la lista
    

Ahora, al configurar la notificación, puede introducir el comando usted mismo o seleccionar una plantilla guardada anteriormente.

![](images/drex_pilot_7_9_custom_23.png)

### [Account ID en las notificaciones Webhook](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html)

En las notificaciones Webhook hay ahora información adicional: Account ID. Junto con los datos del evento, el sistema transmite el identificador de la cuenta desde la que se envió la notificación.![](images/drex_pilot_7_9_custom_24.png)

### [Nuevo tipo de notificación: «Archivos multimedia del evento»](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Медиафайлы_события)

En el sistema ha aparecido un nuevo tipo de notificación: «Archivos multimedia del evento». La notificación se envía cuando el dispositivo carga correctamente en el servidor un archivo multimedia asociado a un evento, por ejemplo, una foto o un video.

A diferencia de las notificaciones habituales, se activa no en el momento del evento, sino después de la carga correcta del archivo. Este tipo de notificación permite recibir de inmediato la confirmación y pasar a ver los materiales de los eventos, por ejemplo, de infracciones o activaciones de ADAS/DMS.

![](images/drex_pilot_7_9_custom_25.png)

### [Notificaciones en la ficha del objeto](../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html#Настройки_объекта)

En la ficha del objeto han aparecido interruptores para gestionar las notificaciones por los límites de cada vehículo.

Para los parámetros «Control de velocidad», «Pérdida de conexión» e «Inactividad» se puede activar o desactivar por separado el envío de notificaciones.

Para el parámetro «Inactividad» hay disponible un icono de encendido, que determina si se tiene en cuenta el estado del encendido al calcular la inactividad.

Los límites se siguen registrando en el sistema incluso con las notificaciones desactivadas, por lo que el control se mantiene sin avisos innecesarios.

![](images/drex_pilot_7_9_custom_26.png)

## [Nueva API: contratos de arrendamiento](../rabota-s-api-zaprosami/api-polzovatelya-v2/spisok-dogovorov-arendy.html)

Se ha añadido un nuevo método de API para obtener la lista de contratos de arrendamiento del módulo Rent Car.

Con él se pueden obtener datos de todos los tipos de contratos:

— activos (abiertos)

— reservados

— finalizados

Para cada contrato se devuelven los datos del arrendatario, los puntos de inicio y fin del arrendamiento, las fechas previstas de entrega y devolución, así como los números del contrato y del automóvil.
