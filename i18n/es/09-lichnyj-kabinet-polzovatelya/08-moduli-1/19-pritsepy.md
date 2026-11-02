---
title: "Remolques"
---

El módulo «Remolques» sirve para crear, configurar y gestionar los remolques que se utilizan junto con los objetos de monitoreo.

![](images/drex_pritsepy__custom.png)

Un remolque puede utilizarse de dos formas:

— como objeto informativo: almacena los datos del remolque y puede asociarse a un vehículo

— como objeto de monitoreo: tiene su propio rastreador GPS y sensores, y transmite datos al sistema

Tras asociar el remolque a un vehículo, el sistema los muestra como un conjunto único y permite rastrear la información tanto del tractor como del propio remolque.

En este artículo le explicamos cómo:

— [crear un remolque](pritsepy.html#Как_создать_прицеп)

— [configurar los parámetros del remolque](pritsepy.html#Параметры_прицепа)

— [asociar un remolque a un vehículo](pritsepy.html#Привязка_прицепа)

— [ver la información del remolque en el mapa y en la lista de objetos](pritsepy.html#Работа_с_прицепами)

— [trabajar con el historial de asociaciones](pritsepy.html#История_прицепа)

— [eliminar un remolque](pritsepy.html#Как_удалить_прицеп)

## Cómo crear un remolque

1\. Vaya a la pestaña «Remolques»

![](images/drex_pritsepy__custom_2.png)

2\. Haga clic en el botón Añadir ![](images/drex_pritsepy__custom_3.png) 

![Remolques ](images/drex_pritsepy__screen.png)

Se abrirá la ficha de creación del remolque.

Rellene los parámetros necesarios y haga clic en «Guardar».

![](images/drex_pritsepy__custom_4.png)

### Parámetros del remolque

-   Nombre del remolque: nombre con el que se mostrará el remolque en el sistema
    
-   Objeto asociado: seleccione el objeto de monitoreo del que el remolque recibirá los datos de ubicación, el estado de los sensores y otros parámetros.
    

<table><tbody><tr><td><span></span></td><td><div><span>El objeto asociado no es el vehículo al que se acoplará el remolque, sino el objeto de monitoreo cuyos datos corresponden a este remolque.</span></div></td></tr></tbody></table>

Tipo: seleccione el tipo de remolque

![](images/drex_pritsepy__custom_5.png)

<table><tbody><tr><td><span></span></td><td><div><span>Si el tipo necesario no está en la lista, póngase en contacto con el soporte técnico para que lo añadan.</span></div></td></tr></tbody></table>

-   Ancho: indique el ancho del remolque y seleccione la unidad de medida: milímetros, centímetros, metros
    

![](images/drex_pritsepy__custom_4.png)

-   Grupo: seleccione el grupo en el que estará el remolque
    
-   RFID: código RFID que transmite el sensor RFID del vehículo al conectar el remolque. Con este identificador el sistema determina automáticamente qué remolque está conectado al vehículo.
    
-   Descripción: información adicional sobre el remolque.
    

### Parámetros adicionales

![Remolques ](images/drex_pritsepy__screen_2.png)

-   Exclusivo: determina el orden de asociación de los remolques.
    

Si el parámetro está activado, al conectar este remolque todos los demás remolques asociados previamente al vehículo se desvincularán automáticamente. Utilice este parámetro si al vehículo solo puede estar conectado un remolque a la vez.

-   Agro: se utiliza junto con el módulo de agricultura ([Agro](agro.html)). Active este parámetro solo para los objetos que trabajen con la funcionalidad del módulo agro.
    
-   Enviar alertas: activa el envío de notificaciones de eventos relacionados con este remolque
    

### Acceso a objetos

Seleccione en la lista los objetos para los que estará disponible este remolque. Si deja el campo vacío, el remolque estará disponible para todos los objetos.

![](images/drex_pritsepy__custom_6.png)

## Cómo asociar un remolque

Un remolque se puede asociar a un vehículo de dos maneras.

### Mediante la ficha del remolque

En la parte inferior de la ficha abra la sección «Objetos».

Marque las casillas de uno o varios vehículos a los que desea dar acceso o con los que desea realizar la asociación.

![Remolques ](images/drex_pritsepy__screen_3.png)

Para buscar el objeto deseado puede utilizar:

-   el filtro ![](images/drex_pritsepy__custom_7.png) 
    
-   la búsqueda con resaltado de coincidencias ![](images/drex_pritsepy__custom_8.png): los caracteres encontrados se resaltarán en amarillo
    

Después de seleccionar los objetos, haga clic en «Guardar».

### Mediante la ficha del objeto

1\. Seleccione el objeto en la lista

2\. Haga clic en él con el botón derecho del ratón

3\. En el menú contextual seleccione «Remolques»

![](images/drex_pritsepy__custom_9.png)

4\. Realice una de las siguientes acciones:

-   Asociar: para conectar el remolque
    
-   Desvincular: para desconectar un remolque asociado previamente.
    

## Trabajo con remolques

Después de asociar el remolque:

— el icono del objeto en el mapa cambiará por el icono de un vehículo con remolque

![Remolques ](images/drex_pritsepy__screen_4.png)

— en la columna «Remolque» de la lista de objetos aparecerá el nombre del remolque conectado

![Remolques ](images/drex_pritsepy__screen_5.png)

### Información en el mapa

Puede ver la información emergente del objeto en el mapa con los datos del remolque.

![Remolques ](images/drex_pritsepy__screen_6.png)

Para abrir la información emergente del objeto, haga clic con el botón izquierdo del ratón en su icono.

Si la visualización de remolques está activada en los ajustes, en la información emergente del objeto se mostrará la información del remolque conectado. Si hay un objeto asociado, se pueden ver los datos que llegan del rastreador GPS del remolque.

Para activar la visualización de remolques en la información emergente:

1\. Vaya a «Ajustes del contrato»

2\. Abra la pestaña «Personalización»

3\. En la sección «Elementos de la información emergente» marque la casilla «Remolque»

![](images/drex_pritsepy__custom_10.png)

4\. Guarde los cambios

### Información en la lista de objetos

Para ver los datos del remolque en la información emergente, pase el cursor sobre el objeto en la lista.

![Remolques ](images/drex_pritsepy__screen_7.png)

Para que la información emergente se muestre en la lista de objetos, en [«Personalización»](../nastrojki-dogovora-2/personalizatsiya.html#общие_настройки_отображения) seleccione la opción «Mostrar sugerencias del árbol de objetos».

## Historial del remolque

Para cada remolque está disponible el historial de asociaciones.

Para abrir el historial:

1\. Haga clic con el botón derecho del ratón en el remolque en la pestaña «Remolques»

2\. Seleccione «Mostrar historial»

![](images/drex_pritsepy__custom_11.png)

En el historial se muestra:

![](images/drex_pritsepy__custom_12.png)

-   el objeto al que estuvo asociado el remolque
    
-   el nombre del remolque
    
-   la fecha y hora de la asociación
    
-   la fecha y hora de la desvinculación
    
-   el código RFID
    

Para eliminar un registro del historial, haga clic en el icono ![](images/drex_pritsepy__custom_13.png).

## Cómo eliminar un remolque

1\. Haga clic con el botón derecho del ratón en el remolque en la pestaña «Remolques»

2\. Seleccione «Eliminar»

![](images/drex_pritsepy__custom_11.png)
