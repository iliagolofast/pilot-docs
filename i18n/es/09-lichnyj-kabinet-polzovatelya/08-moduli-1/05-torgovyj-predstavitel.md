---
title: "Representante comercial"
---

El módulo «Representante comercial» o, dicho de otro modo, «Contrapartes», sirve para registrar y analizar las visitas de los representantes comerciales a las contrapartes.

Las contrapartes son clientes, empresas o puntos de venta con los que trabaja su compañía.

![](drex_torgovyj_predstavitel_custom.png)

En este artículo aprenderá:

— [Cómo cargar la lista de contrapartes](torgovyj-predstavitel.html#Как_загрузить_список_контрагентов)

— [Cómo trabajar con la lista de contrapartes](torgovyj-predstavitel.html#Как_работать_со_списком_контрагентов)

— [Cómo añadir un representante comercial](torgovyj-predstavitel.html#Как_добавить_торгового_представителя)

— [Qué es un representante comercial universal](torgovyj-predstavitel.html#Что_такое_универсальный_торговый_представитель)

— [Cómo ver las contrapartes de un representante comercial](torgovyj-predstavitel.html#Как_посмотреть_контрагентов_торгового_представителя)

— [Cómo recalcular las estadísticas de visitas](torgovyj-predstavitel.html#Как_пересчитать_статистику_посещений)

## Cómo cargar la lista de contrapartes

La lista de contrapartes se carga en el sistema desde un archivo. Normalmente lo hace el servicio de soporte técnico a petición del cliente.

<table><tbody><tr><td><span></span></td><td><div>Para la carga se utiliza la<span> </span>página: <a href="https://&lt;server_address&gt;/ax/mod_tp_upload_utf8.php"><span>https://&lt;server_address&gt;/ax/mod_tp_upload_utf8.php</span></a></div><div>donde &lt;server_address&gt; es la dirección de su servidor</div></td></tr></tbody></table>

 1. Abra la página de carga

Introduzca el nombre de usuario y la contraseña de la cuenta en la que se deben cargar las contrapartes.

2\. Prepare el archivo

El archivo debe estar en formato CSV. En él se indican:

— el identificador de la contraparte

— la relación con el representante comercial o con el transporte (si se utiliza)

— el grupo de la contraparte

— la dirección del punto (obligatoria)

— las coordenadas

![](drex_torgovyj_predstavitel_custom_2.png)

 3. Cargue el archivo

1) Haga clic en «Seleccionar archivo»

2) Indique el archivo CSV preparado

3) Haga clic en «Enviar»

El sistema cargará los datos y las contrapartes aparecerán en la sección «Principal», en la pestaña «Contrapartes».

![](drex_torgovyj_predstavitel_custom.png)

## Cómo trabajar con la lista de contrapartes

![Representante comercial](drex_torgovyj_predstavitel_screen.png)

En la pestaña «Contrapartes» puede ver la lista de clientes, buscar los puntos que necesite y mostrarlos en el mapa.

En la parte superior de la ventana hay herramientas para trabajar con la lista:

-   Búsqueda: ayuda a encontrar una contraparte por nombre o dirección. Empiece a escribir el nombre y la lista se filtrará automáticamente.
    

En la parte superior derecha de la lista se encuentran acciones adicionales:

![](drex_torgovyj_predstavitel_custom_3.png) Exportar: descarga la lista actual de contrapartes en un archivo

![](drex_torgovyj_predstavitel_custom_4.png) Limpiar mapa: quita del mapa las marcas de las contrapartes

![](drex_torgovyj_predstavitel_custom_5.png) Mostrar en el mapa: muestra las contrapartes en el mapa

![](drex_torgovyj_predstavitel_custom_6.png) Actualizar: actualiza la lista y carga los datos más recientes

## Cómo añadir un representante comercial

Si necesita añadir un representante comercial al sistema:

1\. Vaya a la sección «Principal». Abra la pestaña «En línea»

![Representante comercial](drex_torgovyj_predstavitel_screen_2.png)

 2. Haga clic en «Añadir objeto» ![](drex_torgovyj_predstavitel_custom_7.png)

 3. Complete los parámetros principales en la ficha del objeto

![Representante comercial](drex_torgovyj_predstavitel_screen_3.png)

Indique los datos obligatorios:

1 — Número del vehículo

2 — ID del dispositivo

3 — Tipo de dispositivo

 4. Indique el grupo

Seleccione el grupo al que pertenecerá el objeto.

![Representante comercial](drex_torgovyj_predstavitel_screen_4.png)

Si no existe ese grupo, créelo con antelación. En este grupo suelen encontrarse los objetos de los representantes comerciales.

![](drex_torgovyj_predstavitel_custom_8.png)

 5. En la ficha del objeto, indique el ID del representante comercial.

![Representante comercial](drex_torgovyj_predstavitel_screen_5.png)

### Representante comercial universal

De forma predeterminada, en los informes solo se tienen en cuenta las contrapartes asignadas al representante comercial.

Si el representante comercial puede visitar cualquier punto y no solo los asignados, es necesario activar la opción «RC universal»

En este caso, los informes tendrán en cuenta las visitas a todas las contrapartes, independientemente de la asignación.

![Representante comercial](drex_torgovyj_predstavitel_screen_6.png)

 6. Guarde el objeto

Después de guardar, el representante comercial aparecerá en la lista.

![](drex_torgovyj_predstavitel_custom_9.png)

## Cómo ver las contrapartes de un representante comercial

Para ver la lista de contrapartes de un representante comercial concreto:

1\. Haga clic con el botón derecho sobre el representante comercial que necesite y abra el menú contextual

2\. Seleccione la opción «Contrapartes»

![](drex_torgovyj_predstavitel_custom_10.png)

En la ventana que se abre se mostrará la lista de todos los puntos asignados a la contraparte.

![](drex_torgovyj_predstavitel_custom_11.png)

En la ventana, seleccione la contraparte que necesite: se mostrará en el mapa.

Si necesita limpiar el mapa, haga clic en el botón «Limpiar mapa»![](drex_torgovyj_predstavitel_custom_12.png).

El botón «Recalculate for» actualiza las estadísticas de visitas a las contrapartes del período seleccionado. Si los datos han cambiado o necesita recalcular las rutas y las visitas, utilice este botón.

![Representante comercial](drex_torgovyj_predstavitel_screen_7.png)

### Cómo realizar el recálculo

1\. Introduzca el número de días para los que desea actualizar los datos (por ejemplo, 2 o 7 días).

2\. Haga clic en el botón ▶

3\. El sistema analizará los viajes del representante comercial en el período indicado y actualizará la información sobre las visitas a las contrapartes y las rutas

Al finalizar aparecerá una ventana con estadísticas breves:

![](drex_torgovyj_predstavitel_custom_13.png)

-   Desde la fecha: período para el que se realizó el recálculo
    
-   Total: cuántas contrapartes se han tenido en cuenta
    
-   Visitas: cuántas visitas se han registrado
    
-   Tiempo de ejecución: cuánto tiempo tardó el cálculo
    

Haga clic en OK para cerrar la ventana.
