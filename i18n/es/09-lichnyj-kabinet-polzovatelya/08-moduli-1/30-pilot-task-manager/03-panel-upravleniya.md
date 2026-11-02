---
title: "Panel de control"
---

El panel de control de tareas es una sección de PTM donde puede ver todas las tareas creadas y trabajar con ellas. Este panel es una ventana para ver y gestionar las tareas que han sido asignadas o que están en curso.

![](images/drex_panel_upravleniya__custom.png)

En este artículo veremos:

— [cómo está organizada la tabla de tareas y qué información muestran sus columnas](panel-upravleniya.html#_Как_устроена_таблица_заданий_и_какую_информацию_отображают_её_колонки)

— [botones y funciones para gestionar rápidamente las tareas](panel-upravleniya.html#Кнопки_и_функции_для_быстрого_управления_заданиями)

— [cómo crear, cargar y exportar tareas mediante plantillas](panel-upravleniya.html#Как_создавать,_загружать_и_экспортировать_задания_с_помощью_шаблонов)

— [qué acciones están disponibles al hacer clic con el botón derecho en la fila de una tarea](panel-upravleniya.html#Какие_действия_доступны_при_правом_клике_на_строку_задания)

— [cómo cambiar entre áreas de trabajo](panel-upravleniya.html#Как_переключаться_между_рабочими_областями)

## Tabla de tareas

En el centro del panel se muestra la tabla con las tareas creadas. Cada fila de la tabla es una tarea independiente. Las columnas de la tabla muestran datos de la tarea, por ejemplo:

-   ID de la tarea: número único de la tarea en el sistema
    
-   Hora de recepción: cuándo se creó la tarea
    
-   Tipo de tarea: hora planificada de ejecución u hora estimada de la tarea
    
-   Tipo de pedido: categoría de la tarea (por ejemplo, "Delivery", "Booking", etc.)
    
-   Estado de ejecución: estado actual de la tarea
    
-   Fecha y hora (plan): fecha y hora planificadas de llegada/salida
    
-   Fecha y hora (real): hora real de llegada y salida (según los datos del rastreador o del conductor)
    
-   Vehículo: vehículo asignado a la tarea
    
-   Conductor: nombre completo del conductor asignado a la tarea
    
-   Aceptada por el conductor: cuándo el conductor confirmó la recepción de la tarea
    
-   Inició el movimiento: hora real de inicio del movimiento
    
-   Inició la ejecución: hora de inicio del trabajo de la tarea
    
-   Finalizó la ejecución: hora de finalización de la tarea
    

![](images/drex_panel_upravleniya__custom_2.png)

## Panel de gestión de tareas

En la parte superior de la tabla de tareas se encuentra el panel de gestión de tareas: un conjunto de botones con los que se pueden gestionar las tareas rápidamente.

![Panel de control](images/drex_panel_upravleniya__screen.png)

<table><tbody><tr><td><div><h3>Panel de gestión de tareas</h3></div><div><img alt="" src="images/drex_panel_upravleniya__custom_3.png" data-full-src="drex_panel_upravleniya__custom_3.png" data-full-width="533" data-full-height="40"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

-   Añadir: [crear una nueva tarea](kak-sozdat-zadanie.html)
    
-   Editar: abrir para su edición la tarea seleccionada
    
-   Eliminar: eliminar las tareas seleccionadas
    
-   Configuración del filtro ![](images/drex_panel_upravleniya__custom_4.png): configurar el filtrado de tareas para mostrar solo las que necesite
    

![](images/drex_panel_upravleniya__custom_5.png)

Iniciar la reasignación de vehículos ![](images/drex_panel_upravleniya__custom_6.png): iniciar la selección y sustitución automática de vehículos en las tareas. Use este botón cuando necesite actualizar la vinculación de vehículos, por ejemplo, al cambiar la flota de vehículos.

Al finalizar el proceso aparece una ventana con los resultados:

-   Tasks found: cuántas tareas entraron en el procesamiento
    
-   Virtual vehicles: cuántas de ellas se vincularon a vehículos virtuales
    
-   Real vehicles: cuántas tareas se asignaron a vehículos reales
    
-   Substitutions made: cuántas tareas recibieron otro vehículo
    
-   Tasks recalculated: cuántas tareas se recalcularon (rutas, tiempo, kilometraje, etc. tras la sustitución del vehículo)
    

![](images/drex_panel_upravleniya__custom_7.png)

## Plantillas de tareas

En la parte derecha del panel de la lista de tareas encontrará tres botones para trabajar con plantillas de tareas.

![Panel de control](images/drex_panel_upravleniya__screen_2.png)

### Descarga de la plantilla para tareas

![](images/drex_panel_upravleniya__custom_8.png): este botón permite descargar una plantilla en formato Excel para la creación masiva de tareas.

Haga clic en este botón: se abrirá una ventana:

![](images/drex_panel_upravleniya__custom_9.png)

-   En el campo «Plantilla» seleccione el tipo de tarea deseado, por ejemplo, «Organización», «Persona física», «Hoja de ruta», «Booking» y otros. De la selección depende qué columnas habrá en el archivo de Excel
    
    2\. Haga clic en el botón «Descargar» para descargar el archivo de plantilla
    
    3\. Abra el archivo descargado y rellénelo con sus datos: direcciones, fechas, conductores, cargas, etc.
    

### Abrir el panel de carga de tareas desde una plantilla

![](images/drex_panel_upravleniya__custom_10.png): este botón se utiliza para cargar en el sistema tareas desde un archivo de plantilla rellenado previamente, que descargó con el botón  ![](images/drex_panel_upravleniya__custom_8.png)

Haga clic en este botón: se abrirá una ventana:

![](images/drex_panel_upravleniya__custom_11.png)

1\. Haga clic en el icono de Excel y seleccione en su dispositivo el archivo de plantilla deseado

2.  Haga clic en el botón «Cargar». El sistema leerá las filas del archivo y creará o actualizará las tareas en el registro según los datos de la plantilla

### Exportar a Excel

![](images/drex_panel_upravleniya__custom_12.png): este botón descarga la lista de tareas en formato Excel

Haga clic en este botón: se abrirá una ventana:

![](images/drex_panel_upravleniya__custom_13.png)

1\. En el campo «Plantilla» seleccione una plantilla. De la selección depende qué columnas habrá en el archivo de Excel

2\. En los campos «Desde» y «Hasta» indique el periodo para el que desea exportar las tareas

3\. Si desea que en Excel se incluyan solo las tareas que se muestran en la tabla con sus filtros aplicados (por estado, vehículo, etc.), marque la casilla «Tener en cuenta los filtros aplicados».

4\. Haga clic en «Descargar» y el sistema generará un archivo de Excel con las tareas según la plantilla y los filtros seleccionados.

La plantilla para la descarga funciona solo si se configuró previamente en el sistema. Si la plantilla no está configurada, el sistema mostrará un error. La configuración se realiza en la sección [«Plantillas»](spravochniki-2.html), al editar la plantilla deseada: allí se definen los parámetros que serán visibles en la tabla de tareas y se exportarán a Excel.

## Menú de la tarea

Cuando hace clic con el botón derecho del ratón en la fila de una tarea en el registro, se abre el menú de la tarea, en el que están disponibles diversas acciones con la tarea seleccionada:

## ![](images/drex_panel_upravleniya__custom_14.png)

1\. Crear a partir de plantilla

Crea una nueva tarea copiando los campos principales de la tarea actual (cliente, ruta, carga, parámetros, etc.), para no tener que rellenarlos de nuevo. La tarea se copiará con el estado «No asignada».

2\. Fijar la tarea

El logista se asigna a sí mismo como responsable de la ejecución de la tarea

3\. Exportación para el solicitante

Exporta los datos de la tarea a un archivo que se puede enviar al solicitante (cliente). Esta exportación funciona mediante una plantilla configurada.

4\. Asignar logista

Abre el submenú de selección del logista que será responsable de la ejecución de esta tarea.

5\. Editar

Abrir la ficha de la tarea para cambiar sus parámetros

6\. Eliminar

Eliminar la tarea del sistema

7\. Auditoría de estados

Mostrar el historial de cambios de estado de la tarea

![](images/drex_panel_upravleniya__custom_15.png)

8\. Auditoría de la tarea

Historial completo de cambios de la tarea (creación, edición, asignación del logista, etc.).

![](images/drex_panel_upravleniya__custom_16.png)

9\. Establecer estado

Abre el submenú para seleccionar un nuevo estado de la tarea, por ejemplo, «Cerrada», «Rechazo del cliente», «Visita», «En camino» y otros.

10\. Firmantes 

Permite ver o asignar firmantes responsables de la tarea o de los documentos relacionados con ella.

11\. Imprimir 

Imprimir el documento de la tarea.

12\. Acta de trabajos realizados 

Genera e imprime el acta de trabajos realizados de la tarea; está disponible tras finalizar la tarea y si existen datos para el acta.

<table><tbody><tr><td><span></span></td><td><div>Algunas opciones del menú pueden aparecer en gris y no estar disponibles hasta que la tarea alcance el estado necesario o se rellenen los datos requeridos.</div></td></tr></tbody></table>

## Selección del área de trabajo en el panel de control

Sobre el panel de gestión de tareas y la tabla de tareas hay botones que abren áreas de trabajo adicionales:

-   Recursos
    
-   Tareas
    
-   Firma
    
-   Licitaciones
    

![Panel de control](images/drex_panel_upravleniya__screen_3.png)

### Recursos

Al hacer clic se abre un panel en el que se muestran los recursos: vehículos y conductores. En esta sección puede ver:

-   El estado de los recursos (en línea/fuera de línea)
    
-   La tarea actual o la más próxima
    
-   El horario y la dirección de la base
    

Use esta área para controlar qué recursos están libres, cuáles están ocupados y a quién se puede asignar a la siguiente tarea.

![](images/drex_panel_upravleniya__custom_17.png)

### Tareas

Área de trabajo principal, donde se muestran todas las tareas. Aquí puede:

— crear, editar y filtrar tareas

— asignar recursos

— seguir los estados de ejecución de las tareas

![](images/drex_panel_upravleniya__custom_2.png)

### Firma

Sección para trabajar con firmas electrónicas de tareas y documentos.

### Licitaciones

Sección para trabajar con licitaciones de transporte. Con este panel puede:

— generar licitaciones a partir de tareas

— enviar licitaciones a contratistas y transportistas

— seguir las ofertas recibidas
