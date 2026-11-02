---
title: "Importación desde Wialon"
source: import_iz_wialon.html
---

Para transferir datos desde el sistema Wialon, utilice el módulo «Importación desde Wialon». La transferencia de datos se realiza mediante el asistente de migración: seleccione los objetos necesarios y transfiéralos a PILOT.

<table><tbody><tr><td><span></span></td><td><div>Antes de transferir los datos, asegúrese de que su cuenta de Wialon tiene derechos de exportación: acceso&nbsp;a&nbsp;la función Import/Export. Si no tiene estos derechos, «Importación desde Wialon» no podrá descargar los objetos.</div></td></tr></tbody></table>

![Importación desde Wialon](images/drex_import_iz_wialon_screen.png)

<table><tbody><tr><td><span></span></td><td><div>Para comprender de forma visual el proceso de trabajo con el asistente de migración y de transferencia de datos de Wialon a PILOT, vea el vídeo <a href="https://youtu.be/TMAA7MX-EQU"><span>«Cómo transferir datos de Wialon a PILOT»</span></a>.</div><div><div><a href="https://youtu.be/TMAA7MX-EQU" title="560_315">https://youtu.be/TMAA7MX-EQU</a></div></div></td></tr></tbody></table>

## Cómo transferir los datos:

1\. Conecte el módulo «Importación desde Wialon» en el panel de administración. Después, en la pestaña «Principales» aparecerá el botón «Importación desde Wialon»

![Importación desde Wialon](images/drex_import_iz_wialon_screen_2.png)

2\. Pulse el botón ![](images/drex_import_iz_wialon_custom.png)

3\. Se abrirá la ventana del asistente de migración, dividida en dos partes:

A la izquierda — lista de tareas de migración

A la derecha — lista de objetos de Wialon que se van a transferir

![Importación desde Wialon](images/drex_import_iz_wialon_screen_3.png)

4\. Cree una nueva tarea de migración:

1) Pulse el botón «Añadir tarea» ![](images/drex_import_iz_wialon_custom_2.png)

2) En la ventana que aparece, rellene los campos:

![Importación desde Wialon](images/drex_import_iz_wialon_screen_4.png)

-   Usuario de Wialon  — su nombre de usuario en Wialon
    
-   Contraseña de Wialon — su contraseña en Wialon
    

3) Pulse el botón «Cargar objetos desde Wialon»

4) En la parte inferior aparecerá la lista de objetos que se pueden transferir. Marque con casillas los que desea importar.

<table><tbody><tr><td><span></span></td><td><div>Los objetos marcados como&nbsp;processed&nbsp;ya están seleccionados en otras tareas y no están disponibles para su selección.</div></td></tr></tbody></table>

![](images/drex_import_iz_wialon_custom_3.png)

5) Pulse «Guardar»

5\. La nueva tarea aparecerá en la lista de la izquierda de la ventana del asistente de migración. Todos sus estados estarán vacíos, lo que significa que la tarea aún no se ha ejecutado.

![Importación desde Wialon](images/drex_import_iz_wialon_screen_5.png)

6\. Para iniciar la transferencia de datos, haga clic en la tarea de la lista y pulse «Ejecutar tarea» ![](images/drex_import_iz_wialon_custom_4.png)

<table><tbody><tr><td><span></span></td><td><div>Una vez ejecutada, la tarea ya no se podrá modificar.</div></td></tr></tbody></table>

7\. Tras ejecutar la tarea, la transferencia de datos comenzará automáticamente

Los estados de las etapas se irán actualizando en la ventana del asistente de migración; normalmente tarda no más de un minuto.

Espere a que finalice el proceso: verá cómo cambian los estados y aparecen nuevos datos.

![Importación desde Wialon](images/drex_import_iz_wialon_screen_6.png)

Para seguir el proceso de migración y ver los estados actuales, pulse el botón «Actualizar» ![](images/drex_import_iz_wialon_custom_5.png).

En este ejemplo, tras ejecutar la tarea con id: 322, el único objeto de Wialon se transfirió a PILOT con total éxito.

![](images/drex_import_iz_wialon_custom_6.png)

## Etapas de la migración

Para cada objeto se muestran las etapas de la migración:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Etapa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tarea iniciada. La migración ha comenzado, el sistema ha empezado a ejecutar la tarea</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; auth</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Autorización en la API de Wialon. El sistema se conecta a Wialon para obtener acceso a los datos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wlp</span></div></td><td colspan="1" rowspan="1"><div><span>Exportación de los parámetros de los objetos.</span></div><div><span>Se descargan de Wialon los parámetros principales de los objetos (número de archivos con parámetros de objetos de Wialon procesados correctamente / número total de objetos de Wialon en esta tarea)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wln</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Exportación de los eventos de los objetos.</span></div><div><span>&nbsp; Se descargan de Wialon los eventos de los objetos (número de archivos con eventos de objetos de Wialon procesados correctamente / número total de objetos de Wialon en esta tarea)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh</span></div></td><td colspan="1" rowspan="1"><div><span>Creación de objetos en PILOT</span></div><div><span>(número de objetos de PILOT creados correctamente / número total de objetos de Wialon en esta tarea)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sns</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Importación de sensores. Transferencia de los datos de los sensores instalados en los objetos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; evt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Importación de eventos. Se importan todos los eventos asociados a los objetos (por ejemplo, excesos de velocidad, repostajes, alarmas)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rc</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Recálculo de datos:</span></div><div><span>&nbsp; rc1 — recorridos:&nbsp;recálculo de rutas y recorridos de movimiento</span></div><div><span>&nbsp; rc2 — sensores binarios: recálculo de los datos de sensores con dos estados (por ejemplo, encendido/apagado)</span></div><div><span>&nbsp; rc3 — sensores: recálculo de los datos de todos los sensores</span></div><div><span>&nbsp; rc4 — odómetro: recálculo del kilometraje</span></div><div><span>&nbsp; rc5 — eco: recálculo de los datos del estilo de conducción (eco-driving)</span></div><div><span>&nbsp; r6 — multisensores:&nbsp;recálculo de los datos de sensores complejos (multicanal)</span></div></td></tr></tbody></table>

## Estados de las etapas de la migración

Los valores de los campos de estado pueden ser los siguientes:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Valor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; vacío</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; La etapa de migración no se ha ejecutado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_7.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; La etapa finalizó correctamente</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_8.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; La etapa finalizó con errores</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1001</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Código de error de la API de Wialon</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; no data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mensaje de error de la API de Wialon (sin datos)</span></div></td></tr></tbody></table>
