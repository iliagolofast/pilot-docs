---
title: "Objetos"
source: obekty_2.html
---

En la pestaña «Objetos» se muestran todas las retransmisiones de objetos disponibles para el usuario actual.

## Lista de objetos

Para abrir la lista de objetos, vaya a la sección «Retransmisión» → «Objetos».

![](images/drex_obekty_2_custom.png)

Aquí puede:

— encontrar el objeto necesario

— ver a través de qué endpoint se transmiten los datos

— activar o desactivar la retransmisión del objeto

— abrir los ajustes de retransmisión

— ver las estadísticas de transmisión de datos del objeto

![](images/drex_obekty_2_custom_2.png)

### Barra superior

En la barra superior están disponibles las siguientes acciones:

-   Configs — ajustes de configuraciones de retransmisión
    
-   Exportar — descarga de la lista de objetos
    
-   Statistics — selección del período de visualización de los minigráficos
    
-   Buscar — búsqueda en la tabla
    
-   Borrar filtros — borrado de filtros
    

![](images/drex_obekty_2_custom_2.png)

### Columnas de la tabla

-   Actions — acciones disponibles con la retransmisión del objeto.
    
-   ID — identificador del registro de retransmisión.
    
-   Agent id — identificador del objeto.
    
-   Host —  dirección IP o nombre de dominio del servidor externo.
    
-   Puerto — puerto del servidor externo
    
-   Formato — protocolo de transmisión de datos utilizado.
    
-   Estadísticas / Err — minigráfico de errores
    
-   Estadísticas / Envío (Send) — minigráfico de intentos de envío durante el período seleccionado
    
-   Estadísticas / Ack — minigráfico de paquetes aceptados durante el período seleccionado
    
-   Last id — identificador del último paquete procesado.
    
-   Uspw — datos de autorización
    
-   Zona horaria — zona horaria de la retransmisión del objeto
    
-    ![](images/drex_obekty_2_custom_3.png) ![](images/drex_obekty_2_custom_4.png) — estado de la retransmisión del objeto (activada o desactivada).
    

### Acciones con el objeto

En la columna Actions están disponibles las siguientes acciones:

![Objetos](images/drex_obekty_2_screen.png)

![](images/drex_obekty_2_custom_5.png) ![](images/drex_obekty_2_custom_6.png)   — activar o desactivar la retransmisión del objeto

![](images/drex_obekty_2_custom_7.png) Editar — abrir los ajustes de retransmisión del objeto. El formulario de edición también se puede abrir con doble clic en la fila del objeto.

En el formulario de edición se pueden modificar los parámetros que corresponden únicamente al objeto seleccionado:

![](images/drex_obekty_2_custom_8.png)

Si necesita cambiar la dirección del servidor, el puerto, el protocolo de transmisión de datos o la ruta de conexión, abra los ajustes del endpoint correspondiente en la pestaña [Endpoints](endpoints.html).

## Trabajo con retransmisiones desde la sección «Máquinas»

Las retransmisiones se pueden gestionar no solo desde la pestaña «Objetos» de la sección «Retransmisión», sino también directamente desde la lista de objetos de la sección «Máquinas».

Para ello:

1\. Vaya a la sección «Máquinas»

![](images/drex_obekty_2_custom_9.png)

2\. Seleccione una o varias máquinas

3\. Haga clic con el botón derecho del ratón

4\. En el menú contextual seleccione la opción «Retransmisiones»

![](images/drex_obekty_2_custom_10.png)

### Retransmisiones de una máquina

Si se selecciona una sola máquina, se abrirá la ventana de retransmisiones del objeto seleccionado.

![](images/drex_obekty_2_custom_11.png)

La ventana consta de dos secciones:

**Configuración — c**ontiene la lista de retransmisiones configuradas del objeto.

Aquí puede:

— añadir una nueva retransmisión

— modificar una existente

— eliminar una retransmisión

— activar o desactivar la transmisión de datos

**Resend requests** — contiene las solicitudes de retransmisión de datos históricos de un período seleccionado.

### Retransmisiones de varias máquinas

Si se seleccionan varias máquinas, la opción del menú se muestra como «Retransmisión (N)», donde N es el número de objetos seleccionados.

![](images/drex_obekty_2_custom_12.png)

Una vez abierta la ventana, se puede crear la misma retransmisión para varias máquinas a la vez.

![](images/drex_obekty_2_custom_13.png)

En este caso el sistema creará un registro de retransmisión independiente para cada objeto seleccionado, utilizando un mismo endpoint seleccionado.

### Cómo añadir una retransmisión

1\. En la sección «Máquinas» seleccione uno o varios objetos

2\. Abra el menú contextual con el botón derecho del ratón

3\. Seleccione la opción «Retransmisiones»

![](images/drex_obekty_2_custom_10.png)

4\. En la sección «Configuración» pulse el botón ![](images/drex_obekty_2_custom_14.png)

![](images/drex_obekty_2_custom_11.png)

Se abrirá el formulario de creación de la retransmisión.

![](images/drex_obekty_2_custom_15.png)

Rellene los parámetros necesarios:

-   Endpoint — destino de transmisión de datos
    
-   External ID — identificador del objeto en el sistema externo
    
-   Límite de velocidad — límite de velocidad de transmisión
    
-   Zona horaria — zona horaria
    
-   Uspw — datos de autorización
    
-   Casilla «Activado» — activación o desactivación de la retransmisión
    
-   Json config — parámetros adicionales en formato JSON
    
-   Horario  — horario de transmisión de datos
    

Los campos host, puerto, formato y ruta los determinan los ajustes del endpoint y no se pueden editar en este formulario. Para cambiar estos parámetros es necesario modificar los ajustes del [endpoint](endpoints.html).

Tras guardar, el objeto empezará a transmitir datos a través del endpoint seleccionado.

### Resend requests

La sección Resend requests sirve para reenviar datos guardados anteriormente de un período indicado.

![Objetos](images/drex_obekty_2_screen_2.png)

Esta función se utiliza si, por algún motivo, los datos no se transmitieron al sistema externo o si se necesita una nueva descarga de información histórica.

Cómo crear una solicitud:

1\. En la sección Resend requests pulse el botón ![](images/drex_obekty_2_custom_14.png)

2\. Indique la fecha de inicio del período

3\. Indique la fecha de fin del período

![](images/drex_obekty_2_custom_16.png)

4\. Pulse «Añadir»

Tras crearla, la solicitud aparecerá en la tabla.

![](images/drex_obekty_2_custom_17.png)

### Columnas de la tabla Resend requests

-   Hora de inicio — inicio del período de retransmisión
    
-   Hora de finalización  — fin del período de retransmisión
    
-   Create at — fecha y hora de creación de la solicitud
    
-   Update at — fecha y hora de la última modificación de la solicitud
    
-   Status — estado actual de la solicitud:
    
-   New — la solicitud está creada y a la espera de ser procesada
    
-   In Process — se está reenviando los datos
    
-   Complete — el procesamiento ha finalizado
    

Una vez finalizada la solicitud, los datos del período indicado se retransmitirán a través de la retransmisión seleccionada.
