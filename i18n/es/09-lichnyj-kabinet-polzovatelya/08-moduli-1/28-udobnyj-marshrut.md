---
title: "Ruta cómoda"
---

La integración transfiere a PILOT los datos de los viajes y del pago del pasaje desde el sistema «Ruta cómoda». Con estos datos se puede analizar el flujo de pasajeros y generar informes sobre los autobuses.

La configuración consta de tres etapas:

1\. El administrador del contrato conecta los módulos necesarios

2\. El administrador del servidor configura el acceso a la API

3\. El usuario vincula los terminales de pago a los autobuses

Antes de empezar la configuración, prepare:

-   el nombre de usuario y la contraseña para acceder a la API
    
-   la dirección de la API
    
-   el Terminal ID de cada terminal de pago
    

<table><tbody><tr><td><span></span></td><td><div>Terminal ID es el identificador del terminal de pago instalado en el autobús. Con este identificador PILOT determina a qué autobús corresponden los datos de viajes y pagos.</div></td></tr></tbody></table>

-   la lista de autobuses en los que están instalados los terminales
    

<table><tbody><tr><td><span></span></td><td><div>Antes de la configuración, prepare la dirección de la API, el nombre de usuario y la contraseña, así como los identificadores de los terminales de los autobuses. Si no dispone de estos datos, póngase en contacto con el administrador del contrato o con el servicio de soporte de PILOT. Los especialistas le indicarán dónde obtenerlos.</div></td></tr></tbody></table>

-   acceso al panel de administración de PILOT
    
-   acceso al archivo config.php en el servidor
    

### 1\. Conecte el módulo

Esta etapa la realiza el administrador de PILOT

1\. Abra el panel de administración

2\. Vaya a la pestaña Contratos.

3\. Seleccione el contrato deseado y haga clic en él con el botón derecho del ratón

4\. Seleccione «Editar»

![](images/drex_udobnyj_marshrut_custom.png)

5 En la ficha del contrato, vaya a la pestaña «Módulos» y conecte los módulos «Ruta cómoda» y «Flujo de pasajeros»

![Ruta cómoda](images/drex_udobnyj_marshrut_screen.png)

6\. Después de conectar los módulos, en la ficha del contrato vaya a «Configuración de módulos»

7\. Busque y seleccione el módulo «Integración Ruta Cómoda»

![](images/drex_udobnyj_marshrut_custom_2.png)

8\. En el bloque «Configuraciones» añada los parámetros

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Clave</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Valor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Finalidad</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; version</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conecta la API versión 2</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; field_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Por ejemplo, Terminal ID, gosNum</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span>Define el campo por el que la integración asocia los datos con el autobús</span></div></td></tr></tbody></table>

9\. Haga clic en «Guardar»

### 2\. Configure la conexión con la API

Esta etapa la realiza el administrador del servidor.

Abra el archivo config.php en el servidor y añada los parámetros:

<table><tbody><tr><td><span></span></td><td><div>// Удобный маршрут 2.0</div><div>$convroute_url = 'http://195.19.176.128:3000/api';</div><div>$convroute_user = '&lt;логин API&gt;';</div><div>$convroute_pass = '&lt;пароль API&gt;';</div></td></tr></tbody></table>

**![](images/drex_udobnyj_marshrut_custom_3.png)**

En lugar de los marcadores, indique el nombre de usuario y la contraseña obtenidos para la organización.

Guarde los cambios en el archivo config.php.

### 3\. Indique el Terminal ID del autobús

Esta etapa la realiza un usuario con derechos para editar vehículos.

La forma de rellenarlo depende del valor del parámetro field\_name y de la configuración del contrato.

Si se utiliza el campo Terminal ID:

1\. Abra la ficha del autobús deseado

2\. Vaya a la sección «Principales»

3\. Busque el campo «Terminal ID»

![Ruta cómoda](images/drex_udobnyj_marshrut_screen_2.png)

4\. Introduzca el identificador del terminal instalado en este autobús

5\. Haga clic en «Guardar»

En algunas configuraciones, es posible que el campo Terminal ID no se muestre por separado. Si no encuentra el campo o no está seguro de dónde introducir el identificador, póngase en contacto con el administrador del contrato o con el servicio de soporte de PILOT.

### 4\. Compruebe la recepción de datos

Después de la configuración, espere a que aparezcan nuevas transacciones en el sistema «Ruta cómoda». A continuación, genere un informe:

1\. Abra la sección «Informes».

2\. Vaya al grupo «Flujo de pasajeros»

3\. Seleccione el autobús

4\. Indique el periodo en el que se realizaron pagos en el terminal

5\. Seleccione el informe «Resumen de Ruta cómoda»

6\. Genere el informe

7\. Compruebe que haya datos

Con la integración conectada, también pueden estar disponibles los siguientes informes:

-   Resumen de ASOP n.º 2
    
-   Resumen de ASOP n.º 3
    
-   Resumen de ASOP n.º 4
    
-   Autobús urbano + Ruta cómoda
    
-   Informe de transporte de pasajeros
    
-   otros informes del grupo [«Flujo de pasajeros»](../otchyety-1/tipy-otchyetov/passazhiropotok/index.html)
