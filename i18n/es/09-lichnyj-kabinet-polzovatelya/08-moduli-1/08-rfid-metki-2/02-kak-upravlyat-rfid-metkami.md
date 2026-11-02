---
title: "Cómo gestionar las etiquetas RFID"
---

En el módulo «Etiquetas RFID» puede añadir y editar etiquetas, agruparlas, buscar los registros que necesite y cargar datos desde Excel.

## Cómo añadir una etiqueta RFID

Para crear una nueva etiqueta RFID:

1\. Vaya a la pestaña «Etiquetas RFID»

![](images/drex_kak_upravlyat_rfid_metkami_custom.png)

2\. Haga clic en el botón «Añadir» ![](images/drex_kak_upravlyat_rfid_metkami_custom_2.png)

![Cómo gestionar las etiquetas RFID](images/drex_kak_upravlyat_rfid_metkami_screen.png)

Se abrirá la ficha de creación de la etiqueta RFID.

![](images/drex_kak_upravlyat_rfid_metkami_custom_3.png)

Rellene los campos necesarios:

-   ID: identificador único de la etiqueta RFID. Normalmente se indica manualmente, usando el identificador que transmite el lector RFID al leer la etiqueta. En algunos casos, el ID puede asignarse automáticamente después de la primera lectura de la etiqueta RFID por el equipo.
    
-   Nombre: nombre de la etiqueta RFID con el que se mostrará en el sistema
    
-   Grupo: grupo al que pertenece la etiqueta
    
-   Descripción: información adicional sobre la etiqueta
    
-   Latitud y longitud: coordenadas aproximadas de la ubicación de la etiqueta RFID. Por ejemplo, si la etiqueta RFID está fijada en un área de contenedores, un punto de control u otro objeto fijo, puede guardar sus coordenadas en el sistema
    
-   Etiqueta fija: active este parámetro si la etiqueta está en un lugar permanente y no se desplaza. Una etiqueta RFID estacionaria puede asociarse [a una geocerca](../geozony-2/privyazka-rfid-metki-k-geozone.html), [a un punto de ruta](../marshruty-3/kak-sozdat-marshrut.html#Как_привязать_RFID_/_BLE-метку_к_точке_маршрута) o [a una parada de autobús](../rejsy-2/kak-dobavit-ostanovki.html#Как_привязать_RFID-метку_к_остановке). En este caso, PILOT tendrá en cuenta la lectura de la etiqueta al determinar las visitas a estas zonas
    
    3\. Haga clic en «Guardar». Tras guardar, la etiqueta aparecerá en la lista general
    

![](images/drex_kak_upravlyat_rfid_metkami_custom_4.png)

## Cómo crear un grupo de etiquetas RFID

Si el grupo que necesita aún no existe en el sistema, puede crearlo al añadir o editar una etiqueta.

1\. En el campo «Grupo» introduzca el nombre del nuevo grupo

![](images/drex_kak_upravlyat_rfid_metkami_custom_5.png)

2\. Rellene el resto de los parámetros de la etiqueta

3\. Haga clic en «Guardar»

![](images/drex_kak_upravlyat_rfid_metkami_custom_6.png)

El nuevo grupo se creará automáticamente y estará disponible al añadir las siguientes etiquetas RFID.

## Cómo modificar una etiqueta RFID

1\. Haga doble clic en la etiqueta de la lista

2\. Modifique los parámetros necesarios

3\. Haga clic en «Guardar»

![](images/drex_kak_upravlyat_rfid_metkami_custom_7.png)

## Cómo buscar una etiqueta RFID

Para buscar, utilice el filtro por grupos o la barra de búsqueda.

![Cómo gestionar las etiquetas RFID](images/drex_kak_upravlyat_rfid_metkami_screen_2.png)

1 — Búsqueda por grupo

Seleccione un grupo sobre la lista. Tras la selección, la tabla se actualizará y en ella quedarán los registros que pertenecen a ese grupo.

2 — Búsqueda por nombre o ID

Introduzca el valor conocido en la barra de búsqueda. En la lista quedarán los registros que coincidan con la consulta.

Para volver a mostrar todas las etiquetas, borre la barra de búsqueda.

## Comandos de la barra de herramientas

En la barra superior del módulo hay comandos para crear, actualizar, importar, exportar y mostrar etiquetas RFID.

![Cómo gestionar las etiquetas RFID](images/drex_kak_upravlyat_rfid_metkami_screen_3.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_8.png) Añadir: crear una etiqueta RFID

![](images/drex_kak_upravlyat_rfid_metkami_custom_9.png) Exportar a Excel: guardar la lista de etiquetas en un archivo XLSX

![](images/drex_kak_upravlyat_rfid_metkami_custom_10.png) Importar desde Excel: cargar etiquetas RFID desde un archivo en formato XLSX para añadir o actualizar la lista de etiquetas. Antes de importar, asegúrese de que la estructura del archivo se corresponde con la plantilla de Excel

![](images/drex_kak_upravlyat_rfid_metkami_custom_11.png) Descargar plantilla de Excel: descargar la plantilla del archivo para importar etiquetas RFID. Rellene los campos necesarios en la plantilla y guarde el archivo; después utilice «Importar desde Excel» y cargue el archivo rellenado

![](images/drex_kak_upravlyat_rfid_metkami_custom_12.png) Actualizar: actualizar la lista de etiquetas RFID sin recargar la página

![](images/drex_kak_upravlyat_rfid_metkami_custom_13.png) Configuración de colores de iconos: [configurar la visualización en color de las etiquetas RFID](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_настроить_цвет_маркера) en el mapa según el tiempo transcurrido desde la recepción de los últimos datos

![](images/drex_kak_upravlyat_rfid_metkami_custom_14.png) Mostrar en el mapa: mostrar en el mapa las etiquetas RFID seleccionadas. Antes de usarlo, seleccione una o varias etiquetas de la lista

![](images/drex_kak_upravlyat_rfid_metkami_custom_15.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_16.png)  Limpiar el mapa: quitar del mapa todas las etiquetas RFID mostradas

## Acciones con una etiqueta RFID

Para las etiquetas RFID de la lista hay disponibles acciones adicionales.

![Cómo gestionar las etiquetas RFID](images/drex_kak_upravlyat_rfid_metkami_screen_4.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_17.png) Mostrar en el mapa: ver en el mapa la última ubicación conocida de la etiqueta RFID

![](images/drex_kak_upravlyat_rfid_metkami_custom_18.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_19.png)  Historial de la etiqueta: consultar el historial de uso de la etiqueta RFID

![](images/drex_kak_upravlyat_rfid_metkami_custom_20.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_21.png) Eliminar etiqueta: eliminar la etiqueta RFID del sistema
