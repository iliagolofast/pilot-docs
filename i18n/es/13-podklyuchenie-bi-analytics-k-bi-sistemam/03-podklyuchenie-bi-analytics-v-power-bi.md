---
title: "Conexión de BI Analytics en Power BI"
---

En este artículo se muestra un ejemplo de conexión mediante Microsoft Power BI. De forma análoga se puede conectar cualquier sistema de BI que admita el trabajo con REST API.

## Cómo añadir una consulta en Power BI

1\. Abra Power BI Desktop

Inicie el programa Power BI Desktop en su ordenador. Si no está instalado, descárguelo gratis desde el sitio web oficial de Microsoft.

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom.png)

2\. En la barra principal superior pulse el botón «Obtener datos». Se abrirá la lista de orígenes de datos disponibles

![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen.png)

3\. En la lista de orígenes de datos seleccione «Consulta en blanco»

![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_2.png)

4\. Se abrirá el Editor de Power Query, la ventana en la que se crean y configuran las consultas de datos.

En esta ventana busque el botón «Editor avanzado» en la barra de herramientas superior y púlselo.

![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_3.png)

5\. Se abrirá la ventana «Editor avanzado» con una plantilla de consulta vacía

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_2.png)

6\. Pegue el código de la consulta (el [ejemplo de consulta](podklyuchenie-bi-analytics-v-power-bi.html#Пример_запроса_для_BI-системы) se muestra más abajo)

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_3.png)

En la consulta debe indicar:

-   Dirección del servidor 
    
-   Usuario: su usuario de la cuenta de socio
    
-   Contraseña: su contraseña de la cuenta de socio
    
-   Fechas: la fecha de inicio y de fin del período
    
-   Lista de métricas: qué datos desea obtener (la [lista completa de métricas](podklyuchenie-bi-analytics-v-power-bi.html#Доступные_метрики) se muestra más abajo)
    

7\. Después de pegar el código, pulse «Listo». Power BI comenzará a conectarse al servidor y a cargar los datos

8\. Después, Power BI puede mostrar la advertencia «Se requiere información de privacidad de los datos». Pulse «Continuar».

![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_4.png)

9\. Se abrirá la ventana «Niveles de privacidad»

En ella, Power BI comprueba si es seguro combinar y procesar los datos de los orígenes que se utilizan en la consulta. En nuestro caso, la consulta accede a un único origen de datos de confianza y la autorización ya se realiza dentro de la propia consulta. Por ello, para que Power BI no bloquee la carga ni interfiera en la ejecución de la consulta, marque la casilla «Omitir las comprobaciones de niveles de privacidad para este archivo».

Después pulse «Guardar».

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_4.png)

10\. Tras guardar, Power BI ejecutará la consulta y abrirá la vista previa de los datos en el Editor de Power Query. En la pantalla aparecerá una tabla con columnas y filas: son los datos que devolvió su consulta.

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_5.png)

11\. Pulse «Cerrar y aplicar». Después los datos se cargarán en Power BI y podrá trabajar con ellos.

![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_5.png)

Ahora los datos cargados se pueden utilizar para crear gráficos, tablas y otros elementos visuales. ![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_6.png)

En la ventana principal de Power BI Desktop, a la derecha, suelen mostrarse los paneles:

-   Visualizaciones: aquí se encuentran los tipos de gráficos, diagramas, tarjetas, tablas y otros elementos visuales. Seleccione el tipo que necesite y luego rellénelo con sus campos
    
-   Datos: aquí se muestra la lista de tablas y campos cargados desde su consulta, por ejemplo, fecha, ID del objeto, kilometraje, consumo de combustible, velocidad media. Utilice estos campos en las visualizaciones: selecciónelos con casillas, arrástrelos con el ratón o cámbielos de lugar
    
-   Filtros: aquí se pueden limitar los datos según las condiciones necesarias
    

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_7.png)

## Cómo crear un gráfico

1\. En el panel «Visualizaciones» pulse el tipo de gráfico que necesite. En el lienzo del informe aparecerá una plantilla vacía del gráfico

2\. En el panel «Datos» seleccione los campos que desea mostrar

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_8.png)

3\. Power BI colocará automáticamente los campos en el gráfico

En Power BI se pueden combinar datos:

-   añadir el mismo campo a distintos gráficos
    
-   comparar varios indicadores
    
-   crear varias visualizaciones en una misma página
    
-   sustituir campos sin volver a crear el informe
    

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_9.png)

## Si la consulta no se actualiza o se producen errores al iniciar sesión

A veces Power BI puede conservar los parámetros anteriores de conexión al origen de datos. Por ello, incluso después de cambiar el usuario, la contraseña o la dirección del servidor, la consulta puede seguir devolviendo un error de autorización. En ese caso, borre los permisos guardados del origen de datos.

Cómo borrar los permisos:

1\. En el Editor de Power Query, en la barra de herramientas, pulse «Configuración del origen de datos»

2\. En la ventana que se abre, seleccione el origen de datos que necesite, por ejemplo, la dirección de su servidor ![Conexión de BI Analytics en Power BI](images/drex_podklyuchenie_bi_analytics_v_power_bi_screen_6.png)

1 — Botón «Configuración del origen de datos»

2 — Selección del origen de datos

3 — Botón «Borrar permisos»

3\. Pulse «Borrar permisos»

4\. En la ventana de confirmación pulse «Eliminar»

![](images/drex_podklyuchenie_bi_analytics_v_power_bi_custom_10.png)

5\. Vuelva a ejecutar la consulta. Después Power BI aplicará de nuevo los parámetros de conexión
