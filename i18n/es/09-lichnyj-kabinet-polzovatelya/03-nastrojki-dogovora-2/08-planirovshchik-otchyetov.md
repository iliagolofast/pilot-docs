---
title: "Planificador de informes"
---

El planificador de informes es una herramienta para generar y enviar informes automáticamente según un horario.

Con el planificador puede:

— elegir el tipo de informe necesario

— configurar el período cuyos datos se incluirán en el informe

— indicar la hora y la periodicidad de generación del informe

— seleccionar objetos o etiquetas

— indicar las direcciones de correo electrónico a las que se enviará el informe

<table><tbody><tr><td><span></span></td><td><div>Para usar el planificador de informes, confirme su dirección de correo electrónico en la pestaña <a href="privatnost.html#Как_подтвердить_электронную_почту:_"><span>«Privacidad»</span></a>.</div></td></tr></tbody></table>

![](images/drex_planirovshchik_otchyetov_custom.png)

## Cómo crear una programación

1\. Abra la pestaña «Planificador de informes»

2\. Haga clic en «Añadir nueva programación» ![](images/drex_planirovshchik_otchyetov_custom_2.png)

3\. En la ventana que se abre, configure los parámetros del informe, el período de datos y la programación de generación

![](images/drex_planirovshchik_otchyetov_custom_3.png)

4\. Seleccione los objetos o las etiquetas para los que desea generar el informe

5\. Haga clic en «Guardar»

Después de esto se creará la programación y los informes empezarán a generarse y enviarse con la periodicidad indicada.

### Parámetros del informe

En el bloque «Parámetros del informe», complete los siguientes campos:

![](images/drex_planirovshchik_otchyetov_custom_4.png)

-   Nombre: introduzca un nombre descriptivo para la programación
    
-   Idioma: seleccione el idioma en el que se generará el informe
    
-   Tipo de informe: seleccione el informe necesario de la lista. La lista muestra solo los tipos de informe a los que usted tiene acceso. Puede consultar los informes disponibles en la pestaña [«Lista de informes»](spisok-otchyetov-1.html)
    
-   Grupos de sensores (Select tags): seleccione las etiquetas de los sensores cuyos datos desea incluir en el informe. Las etiquetas permiten generar el informe solo con los sensores necesarios. Puede asignar etiquetas [en la configuración de los sensores](../datchiki-1/metki-datchikov.html). La disponibilidad del campo y la lista de etiquetas dependen del tipo de informe seleccionado.
    
-   Agrupación: indique cómo agrupar los datos en el informe, por ejemplo, por fechas o por objetos
    
-   Desglose: seleccione en qué intervalos dividir los datos dentro del informe, por ejemplo, por días, por semanas o sin desglose adicional
    

Si selecciona un tipo de informe que admite la visualización de mapas, aparecen ajustes adicionales en el planificador. Su contenido depende del informe seleccionado:

![Planificador de informes](images/drex_planirovshchik_otchyetov_screen.png)

-   Mostrar mapa (Show maps): añade al informe un mapa estático con el recorrido del objeto durante el período del informe.
    
-   Tipo de mapa (Map Type): permite elegir la base cartográfica del mapa del informe, por ejemplo, OSM o Google Sat. La base seleccionada se utiliza cuando el parámetro «Tipo de mapa» (Show maps) está activado
    
-   Mostrar estacionamientos: marca los lugares de estacionamiento en el mapa con iconos **P**. El parámetro solo está disponible después de activar «Mostrar mapas» (Show maps)
    
-   Mostrar odómetro (Show odometer): añade a la tabla las lecturas del odómetro al inicio y al final del viaje, si el informe seleccionado admite esta función
    

![Planificador de informes](images/drex_planirovshchik_otchyetov_screen_2.png)

Estos ajustes se guardan en la programación y se aplican cada vez que el informe se genera automáticamente.

-   Zona horaria del informe: seleccione la zona horaria que se utilizará para determinar el período de datos y la hora de los eventos en el informe
    
-   Formato: seleccione el formato de archivo: PDF o Excel
    
-   Tamaño de página (Page size): seleccione el tamaño de página, por ejemplo, A4
    
-   Orientación (Orientation): seleccione la disposición de la página: «Vertical» o «Horizontal». Para los informes con muchas columnas, elija «Horizontal» para que la tabla quepa a lo ancho de la página.
    
-   Emails: indique una o varias direcciones de correo electrónico a las que se enviará el informe. Para eliminar una dirección de la lista, haga clic en la cruz situada junto a ella.
    

Asegúrese de que su dirección de correo electrónico esté confirmada en la pestaña [«Privacidad»](privatnost.html#Как_подтвердить_электронную_почту:_). Sin una dirección confirmada no podrá usar el planificador de informes.

Los destinatarios pueden darse de baja de un informe concreto mediante el enlace del correo. Si no queda ningún destinatario en la lista, PILOT suspende la generación del informe. La programación se conserva. Cuando se añada un nuevo destinatario, el envío se reanudará a partir del período actual.

### Período de datos del informe

En el bloque «Período de datos del informe» (Report data period), configure el intervalo de tiempo cuyos datos deben incluirse en el informe.

-   Desde: indique la hora a partir de la cual se incluirán los datos en el informe
    
-   Día anterior (Previous day): active el parámetro si la hora de inicio del período debe corresponder al día anterior
    
-   Hasta: indique la hora hasta la cual se incluirán los datos en el informe
    
-   Período: seleccione la duración del período
    

El parámetro «Día anterior» permite generar informes de intervalos que empiezan un día y terminan otro.

Por ejemplo, si indica:

-   inicio del período: 20:00
    
-   activa «Día anterior»
    
-   fin del período: 08:00
    

el informe incluirá los datos desde las 20:00 del día anterior hasta las 08:00 del día actual.

### Programación de generación

En el bloque «Programación de generación» (Generation schedule), indique cuándo y con qué frecuencia debe crearse el informe.

-   Próxima generación: seleccione la fecha y la hora de la próxima generación y envío del informe
    
-   Periodicidad (Generate): indique con qué frecuencia debe generarse el informe:
    
-   diariamente: el informe se genera todos los días
    
-   semanalmente: el informe se genera una vez por semana
    
-   mensualmente: el informe se genera una vez al mes
    
-   en días seleccionados (selected days): el informe se genera solo en los días de la semana indicados
    

Debajo de los ajustes de programación se muestra el «Período de datos calculado» (Data period): el intervalo calculado automáticamente cuyos datos se incluirán en el próximo informe.

### Selección de objetos o etiquetas

En la parte derecha de la ventana, seleccione para qué objetos desea generar el informe:

-   «Objetos»: el informe se generará para los objetos seleccionados
    
-   «Etiquetas»: el informe se generará para los objetos agrupados por las etiquetas seleccionadas
    

Puede seleccionar objetos individuales o todo un grupo de objetos. Para buscar rápidamente, utilice la barra de búsqueda y los filtros.

![](images/drex_planirovshchik_otchyetov_custom_5.png)

### Guardar la programación

Antes de guardar, revise los ajustes de la programación y haga clic en «Guardar».

La programación aparecerá en el planificador y, a partir de ese momento, los informes se generarán y se enviarán automáticamente a los destinatarios indicados.

![](images/drex_planirovshchik_otchyetov_custom_6.png)

## Baja de un informe programado

Puede dejar de recibir un informe programado mediante el enlace del correo. Para darse de baja no es necesario iniciar sesión en PILOT.

La baja solo se aplica al informe y a la dirección de correo electrónico indicados en la página de confirmación. Los demás informes programados seguirán llegando. El resto de destinatarios de este informe conservarán su suscripción.

### Cómo darse de baja

1\. Abra el correo con el informe programado

2\. Haga clic en el enlace «Darse de baja de este informe programado»

![Planificador de informes](images/drex_planirovshchik_otchyetov_screen_3.png)

3\. En la página que se abre, compruebe el nombre del informe y la dirección de correo electrónico

4\. Haga clic en el botón «Darse de baja»

PILOT eliminará la dirección indicada de la lista de destinatarios y mostrará un mensaje de baja correcta con el nombre del informe.

Si ya ha iniciado sesión en PILOT, al abrir el enlace y darse de baja se conservará la sesión actual.

## Baja de un informe programado

Puede dejar de recibir un informe programado mediante el enlace del correo. Para darse de baja no es necesario iniciar sesión en PILOT.

La baja solo se aplica al informe y a la dirección de correo electrónico indicados en la página de confirmación. Los demás informes programados seguirán llegando. El resto de destinatarios de este informe conservarán su suscripción.

### Cómo darse de baja

1\. Abra el correo con el informe programado

2\. Haga clic en el enlace «Darse de baja de este informe programado»

![Planificador de informes](images/drex_planirovshchik_otchyetov_screen_3.png)

3\. En la página que se abre, compruebe el nombre del informe y la dirección de correo electrónico

4\. Haga clic en el botón «Darse de baja»

PILOT eliminará la dirección indicada de la lista de destinatarios y mostrará un mensaje de baja correcta con el nombre del informe.

Si se dio de baja el último destinatario, PILOT suspende la generación del informe. La programación se conserva y sigue actualizándose. Cuando se añada un nuevo destinatario, el envío se reanudará a partir del período actual.
