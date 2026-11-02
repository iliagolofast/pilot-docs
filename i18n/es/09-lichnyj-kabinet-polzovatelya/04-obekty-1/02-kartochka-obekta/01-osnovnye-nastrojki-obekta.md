---
title: "Configuración básica del objeto"
---

La pestaña «Básico» reúne los datos del vehículo y los parámetros del equipo conectado.

Para [añadir](../kak-dobavit-obekt-1.html) un objeto, complete los campos obligatorios. El resto de los datos se pueden añadir de inmediato o más tarde al editar la tarjeta.

![](images/drex_osnovnye_nastrojki_obekta_custom.png)

Después de guardar el objeto, en la parte superior de la pestaña se muestran:

-   el identificador del objeto
    
-   el identificador de la cuenta
    
-   el kilometraje, si su valor está configurado en la pestaña «Info»
    
-   las horas de motor, si su valor está configurado en la pestaña «Info»
    
-   la imagen del objeto: la imagen estándar de la marca, el modelo y la modificación seleccionados, o la fotografía que usted haya cargado
    

![](images/drex_osnovnye_nastrojki_obekta_custom_2.png)

## Datos del objeto

**Número del vehículo**

Introduzca el número o un nombre descriptivo del objeto. Se mostrará en la lista de objetos, en el mapa y en los informes.

**Tipo de vehículo y color**

Seleccione el tipo de vehículo, por ejemplo, turismo, camión o maquinaria especial. El sistema utiliza el icono correspondiente en la lista de objetos y en el mapa. Junto a él puede elegir el color con el que se muestra.

![](images/drex_osnovnye_nastrojki_obekta_custom_3.png)

**Grupo**

Seleccione la carpeta en la que estará el objeto dentro del árbol de objetos. La creación y la configuración de grupos se describen en el artículo [«Lista de objetos»](../spisok-obektov.html#группы_объектов).

![](images/drex_osnovnye_nastrojki_obekta_custom_4.png)

**Marca**

Seleccione el fabricante del vehículo.

**Modelo**

Seleccione el modelo de la lista. La lista de modelos disponibles depende de la marca seleccionada.

**Modificación**

Si es necesario, seleccione una versión concreta del modelo, por ejemplo, una variante con un tipo de carrocería, un motor o un año de fabricación determinados.

Tras seleccionar la marca y el modelo, el sistema añade automáticamente la imagen estándar del automóvil.

![](images/drex_osnovnye_nastrojki_obekta_custom_5.png)

**Plantilla**

Seleccione un conjunto de ajustes predefinido para el objeto, por ejemplo, una [plantilla de sensores](../../datchiki-1/shablony-datchikov.html) o de [conducción ecológica](../../moduli-1/ehkodrajving-kachestvo-vozhdeniya/shablony-pravil.html). Utilice la plantilla que corresponda al equipo instalado y a la finalidad del vehículo.

**Descripción**

Añada la información que pueda necesitar al trabajar con el objeto: departamento, finalidad, particularidades de uso u otros datos adicionales.

**Etiquetas de dispositivos**

Asigne etiquetas para clasificar los objetos de forma adicional y encontrarlos rápidamente. La creación de etiquetas se describe en el artículo [«Etiquetas de objetos»](../../nastrojki-dogovora-2/tegi-obektov.html).

### Fotografía del objeto

En la pestaña «Básico» puede añadir una fotografía del vehículo:

1\. Haga clic en el icono de la cámara ![](images/drex_osnovnye_nastrojki_obekta_custom_6.png) situado junto a la imagen

![](images/drex_osnovnye_nastrojki_obekta_custom_7.png)

2\. Seleccione el archivo en su equipo y cargue la foto

![](images/drex_osnovnye_nastrojki_obekta_custom_8.png)

3\. Active el interruptor ![](images/drex_osnovnye_nastrojki_obekta_custom_9.png) situado junto a la fotografía si desea mostrarla en lugar del icono estándar del vehículo

La fotografía se mostrará en la lista de objetos y en el mapa. Si el interruptor está desactivado, el sistema seguirá utilizando el icono estándar del tipo de vehículo seleccionado.

![](images/drex_osnovnye_nastrojki_obekta_custom_10.png)

Para eliminar la fotografía cargada, haga clic en el icono de la papelera ![](images/drex_osnovnye_nastrojki_obekta_custom_11.png) situado junto a la imagen. 

## Dispositivo y conexión

En este bloque se configura el equipo telemático principal del objeto.

![](images/drex_osnovnye_nastrojki_obekta_custom_12.png)

**Tipo de dispositivo**

Seleccione el modelo del rastreador GPS u otro terminal instalado en el vehículo. El tipo seleccionado determina cómo se procesan los datos recibidos y los parámetros de conexión.

Si el modelo que necesita no figura en la lista, póngase en contacto con el soporte técnico.

**ID/IMEI del dispositivo**

Indique el identificador único del terminal principal. Puede ser el ID, el número de serie o el IMEI; normalmente figura en la carcasa del dispositivo, en el embalaje o en la documentación del fabricante.

PILOT utiliza este valor para determinar a qué objeto pertenecen los datos recibidos.

Junto al campo «ID/IMEI del dispositivo» se muestra el icono de un candado ![](images/drex_osnovnye_nastrojki_obekta_custom_13.png). Protege el identificador frente a cambios accidentales. Para editar el valor, haga clic en el candado: el campo quedará disponible para la entrada de datos.

**Dispositivos adicionales**

Al objeto se puede vincular otro equipo instalado, por ejemplo, un rastreador adicional o un dispositivo de vídeo:

1\. Haga clic en el icono de edición ![](images/drex_osnovnye_nastrojki_obekta_custom_14.png) en el campo «Dispositivos adicionales» (Additional Devices)

2\. En la ventana que se abre, haga clic en «Añadir»

![](images/drex_osnovnye_nastrojki_obekta_custom_15.png)

3\. Indique el IMEI, el identificador único del dispositivo adicional

4\. Seleccione el tipo de dispositivo

5\. Haga clic en «Guardar»

En la configuración del dispositivo adicional hay disponibles parámetros de servicio:

-   Ignore Coord: no utilizar las coordenadas del dispositivo adicional para determinar la posición del objeto
    
-   Ignore Retrans: no transmitir los datos del dispositivo adicional a través de los canales de retransmisión configurados
    

Active estos parámetros solo si el esquema de conexión lo requiere. Si no está seguro de la configuración, consulte al administrador o al soporte técnico.

**Servidor y puerto**

Tras seleccionar el tipo de dispositivo, PILOT muestra automáticamente la dirección del servidor y el puerto a los que el terminal debe transmitir los datos.

Haga clic en el icono de copiar ![](images/drex_osnovnye_nastrojki_obekta_custom_16.png) situado junto al campo para copiar el valor y utilizarlo al configurar el equipo. El campo lo rellena el sistema y no se edita manualmente.

**Zona horaria**

Seleccione la zona horaria en la que opera el objeto. Se utiliza para mostrar correctamente la hora en el historial, en los eventos y en los informes.

**Desfase horario de los paquetes**

Indique la diferencia en horas si el dispositivo transmite la hora en un formato distinto de GMT. De forma predeterminada se utiliza el valor 0. Modifique el desfase solo si la hora de los mensajes del dispositivo difiere de la real.

## Disponibilidad de los ajustes

El contenido y la disponibilidad de los campos dependen de los derechos del usuario. Para el rol «Usuario»:

— el campo «Tipo de dispositivo» no está disponible para su visualización

— el kilometraje, las horas de motor y el desfase horario de los paquetes pueden estar disponibles solo para su visualización

Para modificar los parámetros no disponibles, póngase en contacto con un usuario con derechos de maestro o de administrador.
