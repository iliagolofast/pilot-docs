---
title: "Tokens"
---

Un token es un código de acceso único que permite a otros usuarios ver la ubicación de los objetos sin tener acceso a su cuenta.

En pocas palabras, un token es como un pase temporal. Da acceso limitado a cierta información sin revelar sus datos personales ni su contraseña.

En la pestaña «Tokens» se pueden crear dos tipos de token:

-   [Monitor token](tokeny.html#Токен_для_просмотра_\(Monitor_token\)): para ver la ubicación de los objetos seleccionados mediante un enlace público
    
-   [Access token](tokeny.html#Токен_для_входа_\(Access_token\)): para iniciar sesión en PILOT sin introducir la contraseña
    

![](images/drex_tokeny_custom.png)

## Token de visualización (Monitor token)

Un Monitor token da a otra persona acceso a un mapa con los objetos seleccionados y sus desplazamientos. El destinatario del enlace no recibe el inicio de sesión, la contraseña ni acceso completo a la cuenta.

### Derechos para gestionar los tokens de visualización

Para gestionar los Monitor tokens se utilizan derechos específicos:

-   Edit Tokens: permite crear y modificar los tokens de monitoreo y los enlaces de acceso compartido a la ubicación.
    
-   Delete Tokens: permite eliminar los tokens de monitoreo.
    

Para que un usuario normal pueda crear, modificar o eliminar un enlace en la versión web de PILOT, el administrador o el maestro debe concederle el derecho a modificar y eliminar tokens.

### Cómo conceder derechos a un usuario

-   En la «Configuración del contrato», abra la pestaña [«Personal y grupos»](personal-i-gruppy/index.html)
    

2\. Haga doble clic en el usuario de la lista para abrir su tarjeta

3\. Vaya a la pestaña [«Derechos»](personal-i-gruppy/kartochka-polzovatelya/prava.html)

4\. Despliegue el grupo «Tokens»

5\. Seleccione los derechos necesarios:

-   Edit Tokens: para crear y modificar tokens
    
-   Delete Tokens: para eliminar tokens
    

![](images/drex_tokeny_custom_2.png)

6\. Haga clic en «Guardar»

### Cómo crear un token de visualización

-   En la sección «Monitor tokens», haga clic en el botón «Añadir token» ![](images/drex_tokeny_custom_3.png)
    
    2\. En la ventana que se abre, complete la información del token:
    

![](images/drex_tokeny_custom_4.png)

-   Indique el período de validez: seleccione la fecha y la hora de inicio y de fin del funcionamiento del token
    
-   Seleccione qué mapa se utilizará para mostrar los objetos
    
-   Indique si se mostrarán en el mapa los marcadores de los objetos o los sensores
    
-   En la lista, seleccione los objetos que desea rastrear mediante este token
    
    3\. Haga clic en «Guardar»
    
    4\. El sistema creará un enlace único o un iframe (código para incrustar)
    
    5\. Copie el enlace o el código obtenido y envíelo a quien necesite acceso a la información
    

## Token de inicio de sesión (Access token)

Este tipo de token se utiliza para autenticarse en el sistema sin contraseña. Al abrir un enlace especial, PILOT inicia sesión en nombre del usuario igual que al usar el inicio de sesión y la contraseña. El token puede tener un período de validez limitado o ser indefinido.

### Cómo crear un token de inicio de sesión

-   En la sección «Access tokens», haga clic en el botón «Añadir token» ![](images/drex_tokeny_custom_3.png)
    
-   En la nueva ventana, indique la fecha y la hora de inicio y de fin de la validez del token. Si no indica el fin de la validez, el token funcionará de forma indefinida. 
    
-   Haga clic en «Guardar»
    

![](images/drex_tokeny_custom_5.png)

Para modificar un token, haga clic en el icono del lápiz ![](images/drex_tokeny_custom_6.png),  y para eliminarlo, en el icono de la papelera ![](images/drex_tokeny_custom_7.png).

![](images/drex_tokeny_custom_8.png)
