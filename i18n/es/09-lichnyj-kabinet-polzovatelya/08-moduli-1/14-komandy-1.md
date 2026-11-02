---
title: "Comandos"
---

-   Ir a comandos.
    

![](images/drex_komandy_1_custom.png)

-   Hacer clic en añadir.
    
-   Seleccionar uno o varios dispositivos.
    
-   Seleccione una plantilla.
    
-   Indique el comando.
    
-   La contraseña maestra se encuentra en los ajustes principales del contrato (panel de administración).
    

![](images/drex_komandy_1_custom_2.png)

Seleccionar una plantilla lista o crear una nueva y hacer clic en "Cargar".

![](images/drex_komandy_1_custom_3.png)

Creación de plantillas para enviar comandos

-   Hacer clic en +
    
-   Hacer clic en el botón crear
    
-   Indicar el nombre
    
    ![](images/drex_komandy_1_custom_4.png)
    
    Derechos de acceso a las plantillas
    
    Utilice plantillas globales para cada idioma en los comandos.
    
    ![](images/drex_komandy_1_custom_5.png)
    
    Una de las condiciones para los comandos con parámetros configurables es encerrar los parámetros entre signos de porcentaje, donde **n-** es un número y **s** \- una cadena.
    

![](images/drex_komandy_1_custom_6.png)

Comandos para el objeto

-   Ir a la interfaz de usuario.
    
-   Ir al menú contextual del objeto.
    
-   Seleccionar comandos.
    

![](images/drex_komandy_1_custom_7.png)

-   Seleccione el comando.
    
-   Realice el envío.
    
-   Ver el historial: seleccione el período y haga clic en el icono de búsqueda.
    

![](images/drex_komandy_1_custom_8.png)

**Ajustes del panel de administración**

1\. Añadir el módulo a la cuenta

2\. Configure la pasarela de SMS. Actualmente se admite smsgateway24.

**Necesita el identificador del dispositivo y el token de la suscripción a smsgateway24:**

https://<address>/ax/commands/smsstatus.php?cmd=incoming

https://<address>/ax/commands/smsstatus.php?cmd=status

**Rellene estos parámetros en la sección de configuración del módulo:**

Configuración de plantillas

**Para configurar las plantillas:**

1\. Haga clic en el botón de configuración situado a la derecha

2.Abra la pestaña «Comandos».

3.Haga clic en el símbolo «+», tras lo cual se abrirá esta ventana, que nos permite editar o añadir un nuevo comando:

En esta ventana podemos añadir un nuevo comando, editar el texto del mensaje y seleccionar en el panel izquierdo a qué vehículos se enviará el mensaje.

1\. Al hacer clic en el botón «enviar», el sistema enviará el mensaje que hemos escrito previamente a los vehículos seleccionados en el panel izquierdo.

2\. La opción «guardar plantilla» nos permitirá guardar la plantilla, lo que nos facilitará el envío de este comando en el futuro sin volver a introducir los datos. Al seleccionar esta opción, el sistema nos pedirá asignar un nombre a nuestra nueva plantilla:

**Nota:**

Solo el administrador puede crear plantillas y asignar derechos sobre ellas a un usuario, y cada plantilla se crea para un único tipo de dispositivo.

Las plantillas deben crearse para cada tipo de dispositivo. En el árbol, los dispositivos están agrupados por tipo:

**¿Cómo cargar una plantilla creada previamente?**

1\. Debe seleccionar los dispositivos

2\. Se selecciona la plantilla deseada.

3\. haga clic en "cargar plantilla"

**¿Cómo eliminar un comando? (disponible solo para el administrador)**

En la lista de la izquierda podemos encontrar la lista de plantillas creadas anteriormente; basta con hacer clic en el icono para eliminar el comando innecesario

**¿Cómo eliminar una plantilla? (disponible solo para el administrador)**

Una vez seleccionados los dispositivos, en «plantillas» se nos mostrarán las plantillas existentes, donde podemos eliminar haciendo clic en el icono:

**Derechos del usuario sobre las plantillas**

Para configurar los derechos de los usuarios sobre las plantillas es necesario:

1\. En los ajustes seleccionamos el botón "personal y grupos" y elegimos al usuario al que vamos a configurar los derechos.

2\. Se abrirá la ventana «edición de usuario» y pasaremos a la opción «comandos»; allí podemos encontrar las plantillas y seleccionar a qué plantillas tendrá derecho este usuario:

**Opción «Enviar comando»**

Al hacer clic con el botón izquierdo en el vehículo, podemos encontrar la opción «enviar comando», que nos permitirá ver el historial de mensajes enviados y, además, reenviar mensajes.
