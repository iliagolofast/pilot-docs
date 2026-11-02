---
title: "Endpoints"
source: endpoints.html
---

En este artículo se describe el trabajo con los destinos de transmisión de datos (endpoints): desde la creación y configuración de la conexión hasta la conexión de objetos y la automatización del proceso de retransmisión.

Aquí aprenderá:

-   [Qué es un endpoint](endpoints.html#Что_такое_endpoint)
    
-   [Cómo trabajar con la lista de endpoints](endpoints.html#Список_endpoints)
    
-   [Cómo crear endpoints](endpoints.html#Как_создать_endpoint)
    

• [Cómo conectar objetos a un endpoint](endpoints.html#Объекты_endpoint)

-   [Cómo configurar la conexión automática de nuevos objetos](endpoints.html#Как_настроить_Auto_Add)
    

## Qué es un endpoint

Un endpoint es un destino de transmisión de datos a un sistema externo. En él se configuran los parámetros de conexión: dirección del servidor, puerto, protocolo de transmisión de datos y parámetros de autorización.

Después de crear un endpoint, se le pueden conectar uno o varios objetos.

## Lista de endpoints

Para abrir la lista de endpoints, vaya a la sección «Retransmisión» → «Endpoints».

![](images/drex_endpoints_custom.png)

En esta pestaña se muestran todos los destinos de transmisión de datos disponibles y su estado actual.

**![](images/drex_endpoints_custom_2.png)**

Aquí puede:

— crear nuevos endpoints

— modificar los ajustes de los endpoints existentes

— conectar objetos

— configurar la conexión automática de nuevos objetos

— ver las estadísticas de transmisión de datos

— activar, desactivar y eliminar endpoints

### Barra superior

En la barra superior están disponibles las siguientes acciones:

1\. Añadir — creación de un nuevo endpoint

2\. Statistics — selección del período para mostrar las estadísticas

3\. Buscar — búsqueda de un endpoint en la tabla

4\. Borrar filtros — restablecimiento de todos los filtros

![Endpoints](images/drex_endpoints_screen.png)

### Selección del período de visualización de las estadísticas

![](images/drex_endpoints_custom_3.png)

El parámetro Statistics influye en la visualización de los minigráficos en las columnas:

-   Err — errores
    
-   Envío (Send) — envío de datos
    
-   Ack — paquetes confirmados
    

![Endpoints](images/drex_endpoints_screen_2.png)

Los minigráficos ayudan a evaluar rápidamente el estado de la retransmisión durante el período seleccionado.

El gráfico muestra:

— la evolución del indicador

— el número total de eventos durante el período seleccionado

Al pasar el cursor se muestra la información del punto seleccionado del gráfico.

Están disponibles los siguientes períodos:

![](images/drex_endpoints_custom_3.png)

-   12 hours — últimas 12 horas
    
-   Day — último día
    
-   Week — última semana
    
-   2 weeks — últimas dos semanas
    
-   Month — último mes
    

### Columnas de la tabla Endpoints

## ![](images/drex_endpoints_custom_4.png)

Actions — acciones disponibles con el endpoint

ID —  identificador único del endpoint

Partner ID — identificador del socio propietario del endpoint

Nombre del socio — nombre del socio propietario del endpoint

Host — dirección IP o nombre de dominio del servidor externo

Puerto — puerto de conexión al servidor externo

Formato — protocolo de transmisión de datos utilizado

Estadísticas / Objetos — número de objetos conectados al endpoint

Estadísticas / Activos — número de objetos activos que actualmente transmiten datos y están en contacto

Estadísticas  / Auto — número de contratos para los que está activada la adición automática de objetos

Estadísticas / Queue — número de paquetes en la cola de envío

Estadísticas / Err — minigráfico de errores durante el período seleccionado

Estadísticas / Envío (Send) — minigráfico de intentos de envío durante el período seleccionado

Estadísticas / Ack — minigráfico de paquetes aceptados durante el período seleccionado

On/off — estado del endpoint (activado o desactivado)

Estado — estado del endpoint: activo, desactivado o sin objetos activos

Uspw — datos de autorización (ocultos de forma predeterminada)

Testing — indicador de endpoint de prueba. Solo disponible para el administrador

TimeZone — zona horaria

Comentario — información adicional

Speed Limit — velocidad máxima transmitida al sistema externo

Horario — horario de funcionamiento de la retransmisión

Mapping fields — ajustes de correspondencia de campos para formatos especiales

Puede configurar qué columnas con parámetros se muestran en la tabla.

![](images/drex_endpoints_custom_5.png)

Para ello:

1\. Pulse la flecha ![](images/drex_endpoints_custom_6.png) en el encabezado de cualquier columna

2\. Seleccione la opción Columns

3\. Marque con casillas las columnas necesarias

4\. Desmarque las columnas que no desee mostrar

En este mismo menú están disponibles:

— ordenación ascendente

— ordenación descendente

— filtrado de datos

### Acciones con el endpoint

En la columna «Acciones» (Actions ) están disponibles las siguientes acciones:

## ![Endpoints](images/drex_endpoints_screen_3.png)

![](images/drex_endpoints_custom_7.png) ![](images/drex_endpoints_custom_8.png) Act. o desact. — activar o desactivar el endpoint

![](images/drex_endpoints_custom_9.png) Editar  — abrir el formulario de edición del endpoint. También se puede hacer doble clic en la fila de la tabla para abrir los ajustes del endpoint

![](images/drex_endpoints_custom_10.png) Auto add — configurar la conexión automática de objetos

![](images/drex_endpoints_custom_11.png) Estadísticas —  abrir las [estadísticas](statistika.html) del endpoint seleccionado

![](images/drex_endpoints_custom_12.png) Máquinas u objetos — abrir la lista de objetos conectados

![](images/drex_endpoints_custom_13.png) Eliminar — eliminar el endpoint

### Cómo crear un endpoint

1\. Pulse «Añadir» en la barra superior

## ![Endpoints](images/drex_endpoints_screen_4.png)

2\. Rellene los parámetros de conexión

![](images/drex_endpoints_custom_14.png)

Parámetros principales

Nombre — nombre del endpoint

Host — dirección del servidor externo al que se enviarán los datos

Puerto — puerto de conexión del sistema externo

Formato — protocolo o formato de transmisión de datos

Ruta — ruta adicional o ruta URL, si la requiere el protocolo utilizado

Uspw — datos de autorización para conectarse al sistema externo

Time zone — zona horaria que se utilizará de forma predeterminada para los objetos de este endpoint

Speed Limit — velocidad máxima que se transmitirá al sistema externo

Casilla «Activado» — activación o desactivación del endpoint

Testing — permite crear un endpoint de prueba. El parámetro solo está disponible para administradores

Json config — ajustes adicionales de conexión en formato JSON

Comentario — comentario libre para los usuarios del sistema

Mapping fields — ajustes de correspondencia de campos para formatos especiales de transmisión de datos

Horario — horario durante el cual se permite la transmisión de datos a través de este endpoint

3\. Pulse «Guardar»

Tras guardar, el endpoint estará disponible para conectar objetos.

### Cómo editar un endpoint

1\. Pulse el botón «Editar»  ![](images/drex_endpoints_custom_9.png) en la columna de acciones o haga doble clic en la fila del endpoint

## ![Endpoints](images/drex_endpoints_screen_3.png)

2\. Modifique los parámetros necesarios

![](images/drex_endpoints_custom_15.png)

3\. Pulse «Guardar»

Los cambios se aplican automáticamente a todos los objetos que utilizan este endpoint.

Si el sistema detecta un endpoint con los mismos parámetros, propondrá fusionarlos. Antes de confirmar, compruebe con atención los ajustes.

Si no se confirma la fusión, los cambios no se guardarán.

![](images/drex_endpoints_custom_16.png)

### Cómo activar o desactivar un endpoint

Para detener o reanudar temporalmente la transmisión de datos:

1\. Pulse el botón de activación ![](images/drex_endpoints_custom_8.png) o de desactivación  ![](images/drex_endpoints_custom_7.png)  en la columna de acciones

![Endpoints](images/drex_endpoints_screen_5.png)

Si el endpoint está desactivado, todos los objetos conectados a él dejan de transmitir datos al sistema externo.

### Cómo eliminar un endpoint

1\. Pulse el botón de eliminación ![](images/drex_endpoints_custom_13.png) en la columna de acciones

2\. Confirme la eliminación

Antes de eliminar, el sistema mostrará el número de objetos que utilizan este endpoint.

Tras la eliminación, la transmisión de datos a través del endpoint se detendrá por completo.

## Objetos del endpoint

Para ver los objetos conectados a un endpoint:

1\. Busque el endpoint necesario

2\. Pulse el botón «Máquinas/Objetos»  ![](images/drex_endpoints_custom_12.png) en la columna de acciones

Se abrirá la lista de objetos que transmiten datos a través del endpoint seleccionado.

![](images/drex_endpoints_custom_17.png)

Desde esta ventana se puede:

— conectar nuevos objetos

— modificar los parámetros de retransmisión de objetos concretos

— desactivar temporalmente la transmisión de datos

— eliminar objetos del endpoint

### Columnas de la lista de objetos

![](images/drex_endpoints_custom_17.png)

Agent ID — identificador del objeto

Máquina — nombre del objeto de monitorización

IMEI — identificador único del dispositivo

Contrato — contrato del objeto

External ID — identificador del objeto en el sistema externo

On/off — retransmisión del objeto activada o desactivada

Err — minigráfico de errores del objeto

Envío (Send) — minigráfico de intentos de envío del objeto

Ack — minigráfico de paquetes aceptados del objeto

Acciones con los objetos:

![](images/drex_endpoints_custom_7.png) y ![](images/drex_endpoints_custom_8.png)  — activar o desactivar el objeto en este endpoint

![](images/drex_endpoints_custom_18.png) — eliminar el objeto de este endpoint

### Cómo añadir objetos

1\. En la ventana «Objetos/Máquinas» pulse el botón «Añadir»

![Endpoints](images/drex_endpoints_screen_6.png)

2\. Seleccione uno o varios objetos

![](images/drex_endpoints_custom_19.png)

3\. Si es necesario, modifique el External ID. De forma predeterminada se utiliza como External ID el IMEI del dispositivo

4\. Pulse «Añadir» para conectar los objetos seleccionados al endpoint

Si la lista de objetos es grande, utilice la búsqueda de la parte superior, en el campo «Buscar»: introduzca el nombre o el número del objeto.

### Cómo editar un objeto

1\. Haga doble clic en el objeto de la lista

![](images/drex_endpoints_custom_17.png)

2\. Realice los cambios en el formulario de edición del objeto

![](images/drex_endpoints_custom_20.png)

En el formulario se pueden modificar los parámetros de retransmisión del objeto:

-   Endpoint — destino de transmisión de datos a través del cual el objeto envía la información al sistema externo
    
-   External ID — identificador del objeto en el sistema externo
    
-   Casilla «Activado» — activa o desactiva la transmisión de datos solo para el objeto seleccionado
    
-   Límite de velocidad — velocidad máxima que se transmitirá al sistema externo para este objeto
    
-   Zona horaria — zona horaria utilizada para transmitir los datos de este objeto
    
-   Uspw — datos de autorización para este objeto
    
-   Json config — ajustes adicionales de retransmisión en formato JSON
    
-   Horario — horario de transmisión de datos del objeto.
    

Los parámetros Host, Port, Format y Path no se pueden modificar en este formulario. Se heredan del endpoint.

Si necesita cambiar la conexión con el sistema externo, abra los ajustes del endpoint o seleccione otro endpoint.

3\. Guarde los ajustes

## Conexión automática de objetos a un endpoint

La función Auto add  permite conectar automáticamente nuevos objetos a un endpoint.

Esta función se utiliza si todos los objetos de un contrato determinado deben transmitir datos automáticamente a un mismo sistema externo. Tras configurar la regla, los nuevos objetos se conectarán automáticamente, sin acciones adicionales del usuario.

### Cómo configurar Auto add

1\. Pulse el botón Auto add  ![](images/drex_endpoints_custom_10.png)en la columna de acciones

## ![Endpoints](images/drex_endpoints_screen_7.png)

2\. Se abrirá una ventana con la lista de contratos para activar la adición automática de objetos. Pulse «Añadir»

![](images/drex_endpoints_custom_21.png)

3\. Seleccione uno o varios contratos

![](images/drex_endpoints_custom_22.png)

4\. Pulse «Añadir»

Tras guardar, todos los nuevos objetos de los contratos seleccionados se conectarán automáticamente a este endpoint.
