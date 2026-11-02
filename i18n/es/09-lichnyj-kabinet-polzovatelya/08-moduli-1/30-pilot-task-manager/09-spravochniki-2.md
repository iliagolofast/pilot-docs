---
title: "Catálogos"
---

En la sección «Catálogos» puede crear y configurar listas de datos que se utilizan al trabajar con tareas, vehículos y conductores. Por ejemplo, pueden ser listas de conductores, estados de tareas o tipos de carga. El uso de catálogos simplifica la creación de tareas, ya que basta con seleccionar los datos necesarios de listas ya preparadas en lugar de introducirlos manualmente cada vez.

### Cómo conectar la sección «Catálogos»

1\. La sección «Catálogos» no siempre está disponible en el menú de PTM y se conecta bajo solicitud. Para conectar esta sección, póngase en contacto con el soporte técnico

2\. Tras la conexión, la sección estará vacía, ya que en el sistema no hay catálogos predefinidos. Podrá añadir y configurar catálogos por sí mismo, creando las listas que necesite

## Cómo crear un catálogo

![](images/drex_spravochniki_2_custom.png)

1\. Abra la sección «Catálogos»

2\. En el panel «Lista de catálogos», haga clic en el botón «Añadir» ![](images/drex_spravochniki_2_custom_2.png)

3\. Se abrirá la ventana «Añadir nuevo catálogo»

![](images/drex_spravochniki_2_custom_3.png)

A la izquierda, defina la información general del catálogo:

-   Nombre: nombre del catálogo (por ejemplo: «Tipo de carga», «Motivos de cancelación», «Tipos de servicios»)
    
-   Alias: nombre técnico del catálogo
    
-   Clave primaria, Clave secundaria, Clave de visualización, Alias del elemento padre: estos campos se refieren a la configuración de la estructura del catálogo y a las relaciones con otras tablas.
    

<table><tbody><tr><td><span></span></td><td><div>Si no está seguro del significado de estos parámetros, es mejor consultar al soporte técnico.</div></td></tr></tbody></table>

A la derecha, defina la estructura de las filas del catálogo:

4\. Haga clic en «Añadir» sobre la tabla de la derecha ![](images/drex_spravochniki_2_custom_2.png)

5\. Indique:

-   Alias de la columna: nombre interno del campo
    
-   Tipo: seleccione el tipo de datos
    

Si es necesario, marque las opciones:

-   «Valor vacío»: permitir valores vacíos para este campo
    
-   «Único»: el campo debe contener datos únicos
    
-   «Fórmula»: si el campo se calculará mediante una fórmula
    

![](images/drex_spravochniki_2_custom_4.png)

6\. Repita los pasos 4–5 para todos los campos que desee tener en el catálogo.

Cuando la estructura esté configurada:

7\. Haga clic en «Guardar»

8\. El nuevo catálogo aparecerá en la lista de la izquierda

![](images/drex_spravochniki_2_custom_5.png)

9\. Selecciónelo en la «Lista de catálogos»: en la parte derecha se abrirá la tabla «Datos del catálogo», donde podrá:

— añadir filas ![](images/drex_spravochniki_2_custom_2.png)

— editar y eliminar registros

<table><tbody><tr><td><span></span></td><td><div>Si la creación de la estructura del catálogo le resulta difícil, puede ponerse en contacto con el soporte técnico. Después, una vez que la estructura esté lista, podrá rellenarla con valores por sí mismo.</div></td></tr></tbody></table>

## Ejemplos de catálogos

En la sección «Catálogos» puede crear y configurar diversas listas de datos que le ayudarán a simplificar el trabajo con las tareas. La lista inicial siempre está vacía y deberá rellenarla con la información necesaria. Veamos algunos ejemplos de catálogos que se pueden configurar.

### Catálogo de plantillas

En la pestaña «Plantillas» se almacena la lista de todos los tipos de tareas y documentos. Cada plantilla determina qué campos se mostrarán en la ficha de la tarea, qué columnas verá el despachador en el registro y qué formularios de acta se completan en la tarea.

![](images/drex_spravochniki_2_custom_6.png)

Cómo añadir una nueva plantilla:

1\. Abra la sección Catálogos → Plantillas

2\. Haga clic en «Añadir» ![](images/drex_spravochniki_2_custom_2.png). Se abrirá la ventana «Añadir plantilla»

![](images/drex_spravochniki_2_custom_7.png)

En ella rellene:

-   Introduzca un nombre claro para la plantilla, por ejemplo: «Reparto por la ciudad», «Salida de servicio», etc.
    
    2\. Describa para qué sirve esta plantilla
    
    3\. Marque las opciones adicionales:
    
-   Plantilla predeterminada: si la activa, esta plantilla se aplicará automáticamente al crear una nueva tarea
    
-   Envío de SMS al conductor: al crear una tarea con esta plantilla se enviará un SMS al conductor
    
-   Envío de SMS al iniciador: el SMS lo recibirá el iniciador de la tarea
    
    4\. Header template: en este campo se almacena la descripción técnica del «encabezado» de la tabla y de la exportación a Excel. Si no sabe qué introducir aquí, póngase en contacto con el soporte técnico.
    
    5\. Haga clic en «Enviar»: la nueva plantilla aparecerá en la lista
    

Después de crear la plantilla y de que aparezca en la lista, hay que rellenarla con campos. Haga clic en «Parámetros» para configurar:

![Catálogos](images/drex_spravochniki_2_screen.png)

— qué campos habrá en la ficha de la tarea

— en qué orden se muestran

— qué columnas habrá en el registro de tareas

— qué campos son obligatorios, de servicio, etc.

Cómo añadir un nuevo campo a la plantilla:

1\. En la sección «Plantillas», seleccione la plantilla deseada

2\. Haga clic en «Parámetros»: se abrirá la tabla de campos

![](images/drex_spravochniki_2_custom_8.png)

3\. Haga clic en «Añadir» ![](images/drex_spravochniki_2_custom_2.png)

4\. En el formulario de adición, rellene:

![](images/drex_spravochniki_2_custom_9.png)

-   Tipo: seleccione el tipo de datos
    
-   Alias: nombre interno del campo en caracteres latinos
    
-   Nombre: cómo se llamará el campo
    
-   Nombre del grupo
    
-   Valor predeterminado
    
-   Peso: determina el orden de visualización del campo
    
-   Ajustes: marque las opciones:
    

— ¿El valor es el resultado de una fórmula? — el campo se rellena automáticamente mediante una fórmula

— El campo puede estar vacío — si está activado, el campo no es obligatorio

— Campo activo — el campo se usa y se muestra en el formulario

— El campo se puede eliminar — permite eliminar en el futuro este campo de la plantilla

— Visible solo al editar — el campo se ve solo cuando se edita la tarea; en el modo de visualización está oculto

— Mostrar nombre del almacén / Mostrar identificador del pedido — opciones especiales para plantillas donde se necesitan estos datos

— Es un índice de clave para la búsqueda — el campo se utilizará para la búsqueda

-   Derechos sobre el campo:
    

— Plantillas de permisos: seleccione los roles (plantillas de derechos) para los que el campo estará disponible.

— Prohibir la edición para las plantillas de permisos: roles para los que el campo será de solo lectura \\

3\. Después de rellenar, haga clic en «Guardar» en el formulario del parámetro. El nuevo campo aparecerá en esta plantilla

Cómo crear un acta de trabajos realizados para la plantilla:

1\. Vaya a Catálogos → Plantillas

2\. Seleccione la plantilla deseada

3\. En la parte superior, haga clic en el botón «Acta de trabajos realizados»

<table><tbody><tr><td><span></span></td><td><div>Si esta opción no se muestra, hay que añadirla en los derechos de la <a href="spravochniki-2.html#Шаблон_разрешений"><span>plantilla de permisos</span></a>. En caso de problemas, póngase en contacto con el soporte técnico.</div></td></tr></tbody></table>

![Catálogos](images/drex_spravochniki_2_screen_2.png)

4\. Se abrirá una ventana con la lista de actas de esta plantilla

![](images/drex_spravochniki_2_custom_10.png)

5\. En la ventana, haga clic en «Añadir» ![](images/drex_spravochniki_2_custom_2.png): se abrirá el formulario «Añadir acta de trabajos realizados»

6\. Rellene los campos de la parte superior:

-   Nombre: cómo se llamará el acta
    
-   Existing file: si es necesario, tomar como base una plantilla de archivo ya existente.
    
-   Archivo: si es necesario, puede cargar su propio archivo de plantilla desde el disco
    

 7. Redacte el texto del acta: en la pestaña «Editor» escriba el texto del acta

Para que en el acta se inserten automáticamente datos de la tarea:

![Catálogos](images/drex_spravochniki_2_screen_3.png)

1\. A la derecha, en el bloque «Parámetros para el acta», seleccione el parámetro deseado:

![](images/drex_spravochniki_2_custom_11.png)

-   pestaña «Básicos»: número de la tarea, fechas, direcciones, importes, etc.;
    
-   pestaña «Ejecutor»: lo que el conductor rellena en el acta en la aplicación móvil. Los campos para las actas de los conductores deben mostrarse después de los datos básicos en el texto del acta
    
-   pestaña «Plantilla»: campos específicos de esta plantilla
    

2\. En las listas de las pestañas, seleccione los campos necesarios (por ejemplo, campos de texto, casillas, firma, etc.) y copie sus nombres en el texto del acta.

![](images/drex_spravochniki_2_custom_12.png)

3\. Si es necesario, marque esta acta como predeterminada para la plantilla

![Catálogos](images/drex_spravochniki_2_screen_4.png)

4\. Haga clic en «Guardar»

Ahora, en las tareas de esta plantilla se puede imprimir el acta según el formulario configurado.

### Catálogo de firmantes

Aquí se configuran las personas que firmarán documentos y actas. Con las plantillas de firma se puede definir fácilmente quién y en qué orden debe firmar los documentos.

![](images/drex_spravochniki_2_custom_13.png)

### Tipos de tareas

Aquí se configuran los diferentes tipos de tareas, por ejemplo, «Entrega», «Reparación», «Carga». También se pueden indicar prioridades y una descripción.

![](images/drex_spravochniki_2_custom_14.png)

### Prioridades de las tareas

Este catálogo configura los diferentes niveles de urgencia de las tareas: «No urgente», «Urgente», «Muy urgente».

![](images/drex_spravochniki_2_custom_15.png)

### Estados de las tareas

En este catálogo se definen todos los estados posibles de las tareas: «Nueva», «En proceso», «Completada», «Enviada al conductor», etc.

![](images/drex_spravochniki_2_custom_16.png)

### Clasificador de direcciones

En este catálogo se almacenan las direcciones que ya se han utilizado en tareas anteriores. En lugar de introducir cada dirección manualmente al crear una nueva tarea, puede seleccionar la dirección deseada de esta lista.

![](images/drex_spravochniki_2_custom_17.png)

### Catálogo de conductores

Aquí puede almacenar información sobre los conductores que trabajan por contrato. Este catálogo es necesario para asignar a esos conductores a las tareas.

![](images/drex_spravochniki_2_custom_18.png)

### Ajustes de notificaciones

En este catálogo se configura qué notificaciones deben enviarse y por qué medio: SMS, email, notificaciones Push o Telegram.

![](images/drex_spravochniki_2_custom_19.png)

Para añadir una notificación, haga clic en ![](images/drex_spravochniki_2_custom_2.png) y rellene el formulario de la notificación:

![](images/drex_spravochniki_2_custom_20.png)

1\. Bloque «Información de la notificación»:

-   Nombre: invente un nombre claro para la regla, por ejemplo, «Exceso del tiempo de descarga»
    
-    Notificación: seleccione con qué evento se activará la regla
    
-   Recursos: si la notificación no se refiere a todos, seleccione vehículos/recursos concretos.
    
    Si debe activarse para todos, marque la casilla «Todos».
    

2\. Bloque «Parámetros»

-   Color del evento: seleccione el color con el que se marcará la notificación en la interfaz
    
-   Seleccione los canales de entrega:
    

— E-mail: en el campo inferior indique las direcciones de e-mail

— SMS: en el campo inferior indique los números de teléfono

— Telegram 

— Ventana emergente

— Push a la aplicación móvil

-   Para todos los usuarios: si todos deben ver la notificación
    
-   Dirección de la geocerca: indique el punto/geocerca si la notificación está relacionada con un lugar concreto
    

3\. Bloque «Condición»

Aquí se precisa en qué casos exactamente se activa la notificación:

-   Tipo de plantilla: si es necesario, limite la regla a plantillas de tareas concretas o marque «Todas».
    
-   Tipos de tareas: seleccione para qué tipos rige la notificación
    
-   Estados de los dispositivos: con qué estados del rastreador/vehículo debe funcionar la regla
    
-   Estados de las tareas: para qué estados de la tarea
    
-   Tiempo en el estado, min: si debe activarse no de inmediato, sino solo si la tarea se ha «quedado atascada» en el estado durante más tiempo del indicado
    

4.  Compruebe los campos rellenados y haga clic en «Guardar» abajo a la derecha. La nueva regla aparecerá en la lista de ajustes de notificaciones y empezará a funcionar según las condiciones establecidas.

### Plantillas de permisos

Aquí puede configurar conjuntos de derechos de acceso para los usuarios, de modo que cada uno tenga solo la información necesaria.

![](images/drex_spravochniki_2_custom_21.png)
