---
title: "Control de tiempo"
---

El módulo «Control de tiempo» ayuda a controlar el horario de trabajo de los vehículos y conductores de acuerdo con un horario establecido.

Con él puede configurar:

 — en qué días y horas puede operar el objeto

— cuánto tiempo se permite conducir sin interrupción

— cuánto debe durar el descanso de día, de noche y durante 24 horas

— el tiempo máximo en la ruta, en una zona o entre zonas

Con base en estos ajustes, el sistema genera notificaciones de infracciones, por ejemplo, por exceso de trabajo, descanso insuficiente o permanencia demasiado prolongada en la ruta.

![Control de tiempo ](images/drex_kontrol_vremeni__screen.png)

## Cómo configurar el horario de trabajo del objeto

1\. Vaya a la pestaña «En línea»

2\. En la lista seleccione el objeto deseado

3\. Haga doble clic en él para abrir la ficha

4\. En el panel izquierdo seleccione la pestaña «Horario laboral»

![](images/drex_kontrol_vremeni__custom.png)

La pestaña consta de varios bloques:

### Días de la semana

Marque las casillas de los días en los que el objeto puede trabajar

### Horario

El bloque «Horario» define los intervalos de trabajo:

-   Días laborables (lun–vie)
    
-   Sábado
    
-   Domingo
    

Para establecer la hora:

1\. Haga clic en el icono ![](images/drex_kontrol_vremeni__custom_2.png) de la fila deseada

2\. En la ventana que se abre:

![](images/drex_kontrol_vremeni__custom_3.png)

-   Haga clic en ![](images/drex_kontrol_vremeni__custom_4.png)
    
-   Indique el intervalo de trabajo
    
-   Si es necesario, añada varios intervalos
    
    3\. Guarde los cambios
    

### Horario nocturno

El bloque «Horario nocturno» (Night time) define el período del día que se considera nocturno.

Indique:

— la hora de inicio del período nocturno

— la hora de fin del período nocturno.

Estos ajustes se utilizan para calcular el descanso nocturno y generar las notificaciones correspondientes.

### Ajustes de alertas

Aquí se establecen los valores umbral cuya superación hará que el sistema genere notificaciones.

![](images/drex_kontrol_vremeni__custom_5.png)

Parámetros disponibles:

-   Duración de la conducción (min.): tiempo permitido de movimiento continuo sin descanso
    
-   Tiempo de descanso — día (min.): norma de descanso diurno
    
-   Tiempo de descanso — noche (min.): norma de descanso nocturno (dentro del período nocturno)
    
-   Tiempo de descanso en 24 horas (min.): descanso total mínimo en 24 horas
    
-   Tiempo máx. de desplazamiento entre zonas (min.): tiempo máximo de viaje entre geocercas
    
-   Tiempo máx. de estacionamiento en la zona (min.): tiempo máximo permitido de estacionamiento en una geocerca
    
-   Tiempo máx. en la ruta (min.): tiempo máximo permitido de permanencia en la ruta desde el inicio hasta el final del viaje.
    

Los indicadores reales del objeto se comparan con estos valores. Si se detecta una infracción, el sistema puede crear una notificación.

## Cómo configurar el horario de trabajo del conductor

<table><tbody><tr><td><span></span></td><td><div>Para trabajar con conductores debe estar conectado el módulo <a href="voditeli-3/index.html"><span>«Conductores»</span></a>.</div></td></tr></tbody></table>

1\. Vaya a la pestaña «Conductores»

![](images/drex_kontrol_vremeni__custom_6.png)

2\. Haga doble clic en el conductor deseado

3\. En la ficha abra la pestaña «Horario laboral»

![](images/drex_kontrol_vremeni__custom_7.png)

4\. Configure el horario:

-   Marque las casillas de los días en los que el conductor puede trabajar
    

En el bloque «Horario» establezca los intervalos de trabajo:

-   Días laborables (lun–vie)
    
-   Sábado
    
-   Domingo
    

Para establecer la hora:

1\. Haga clic en el icono ![](images/drex_kontrol_vremeni__custom_2.png) de la fila deseada

2\. En la ventana que se abre:

![](images/drex_kontrol_vremeni__custom_3.png)

-   Haga clic en ![](images/drex_kontrol_vremeni__custom_4.png)
    
-   Indique el intervalo de trabajo
    
    5\. Guarde los cambios
    

Si intenta asignar un conductor a un vehículo fuera del horario laboral, el sistema mostrará una advertencia y no permitirá realizar la operación.

## Ajustes estándar del horario laboral a nivel de contrato

En el panel de administración se pueden establecer los ajustes estándar del horario laboral y las restricciones del módulo Time control module a nivel de contrato.

Estos parámetros se utilizarán como plantilla:

— al añadir nuevos objetos

— para los objetos que nunca han guardado ajustes propios en la pestaña «Horario laboral»

Es decir, usted configura una sola vez la configuración en el contrato y, al crear un objeto, estos valores se rellenan automáticamente en su ficha. Si es necesario, se pueden modificar a nivel de cada objeto.

Puede indicar solo los parámetros que desee establecer como valores predeterminados. Los demás campos usarán los valores del sistema o se rellenarán manualmente.

### Cómo indicar la configuración

1\. Vaya al panel de administración

2\. Abra la ficha del contrato deseado

3\. Vaya a la pestaña «Configuración de módulos»

**![](images/drex_kontrol_vremeni__custom_8.png)**

4\. Seleccione Time control module

5\. En el bloque «Configuraciones» añada una clave y su valor, por ejemplo,

-    works\_day = 1,2,3,4,5 (trabajo de lunes a viernes)
    
-    max\_parking\_time = 500 (no más de 500 minutos de estacionamiento en la geocerca)
    
-   max\_driving\_time = 1000 (no más de 1000 minutos de desplazamiento entre geocercas)
    
    6\. Guarde la configuración del contrato
    

Después, al crear un nuevo objeto, los parámetros indicados aparecerán automáticamente en la pestaña «Horario laboral».

![](images/drex_kontrol_vremeni__custom_9.png)

### Claves de configuración disponibles

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Clave de configuración</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ejemplo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; continues_driving</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conducción continua máx. (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; continues_driving = 250&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>Tiempo máx. de desplazamiento entre geocercas (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_driving_time = 10</span></div><div><span>&nbsp;&nbsp; (no más de 10 minutos entre zonas)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo máx. de estacionamiento en la zona (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_parking_time = 60</span></div><div><span>&nbsp; (no más de una hora de estacionamiento en la zona)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_stay_on_route</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo máx. de permanencia en la ruta (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_stay_on_route = 600</span></div><div><span>&nbsp; (no más de 10 horas en la ruta)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo mínimo de descanso diurno (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_day = 15&nbsp;</span></div><div><span>&nbsp; (mínimo 15 minutos de descanso durante el día)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_night</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo mínimo de descanso nocturno (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_night = 15&nbsp;(mínimo 15 minutos de descanso durante la noche)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_full</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descanso mínimo en 24 horas (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_full = 30&nbsp;(mínimo 30 minutos de descanso al día)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; works_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Días concretos de la semana (1–7, lunes–domingo)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; works_day = 1,2,3,4,5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; work_schedule</span></div></td><td colspan="1" rowspan="1"><div><span>Horario de trabajo en formato JSON, en el que se indican los intervalos de trabajo para los días laborables y los fines de semana</span></div><ul><li><div><span>schedule&nbsp;: plantilla general del horario</span></div></li><li><div><span>days_of_week&nbsp;: días concretos de la semana (1–5&nbsp;, lunes–viernes) con indicación de los intervalos.</span></div></li><li><div><span>wknd1,&nbsp;wknd2&nbsp;: ajustes para los fines de semana (sábado, domingo).</span></div></li></ul><div><span>Los intervalos se indican en el formato&nbsp;HH:MM-HH:MM</span></div></td><td colspan="1" rowspan="1"><div><table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"wknd1": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"wknd2": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"schedule": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"days_of_week": {</span></div><div><span>&nbsp;"1": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"2": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"3": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"4": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"5": "04:00-19:00, 19:00-04:00"</span></div><div><span>&nbsp;}</span></div><div><span>}</span></div></td></tr></tbody></table></div></td></tr></tbody></table>

De este modo, mediante la configuración del contrato usted establece de forma centralizada las reglas básicas de trabajo y ahorra tiempo al crear nuevos objetos.
