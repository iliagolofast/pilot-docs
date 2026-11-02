---
title: "Recálculo de datos"
---

El módulo de recálculo vuelve a procesar los datos del objeto del período seleccionado y actualiza la información de los viajes y de las visitas a geocercas si han cambiado los ajustes o la información se mostró de forma incompleta.

Hay dos tipos de recálculo disponibles:

-   Viajes: el sistema vuelve a generar los viajes del objeto
    
-   Geocercas: el sistema vuelve a procesar los datos sobre la permanencia del objeto en las geocercas
    

## Cómo iniciar el recálculo

1\. Vaya a la sección «Principal» → pestaña «En línea»

2\. Busque el objeto deseado en la lista

3\. Haga clic en él con el botón derecho del ratón

4\. Seleccione la opción «Recálculo de datos»

![Recálculo de datos ](images/drex_pereschyet_dannykh__screen.png)

5\. En el campo «Tipo de recálculo» seleccione qué datos actualizar:

![](images/drex_pereschyet_dannykh__custom.png)

-   Viajes: el sistema volverá a calcular los viajes del objeto
    
-   Geocercas: el sistema volverá a procesar los datos relacionados con la permanencia del objeto en las geocercas
    
    6\. En el campo «Número de días» indique el período de recálculo
    
    7\. Haga clic en «Iniciar»
    

Tras el inicio, la solicitud se pondrá en la cola de procesamiento.

<table><tbody><tr><td><span></span></td><td><div>El recálculo no se ejecuta de inmediato. El tiempo de procesamiento depende del período seleccionado y de la cantidad de datos.&nbsp;Cuanto&nbsp;mayor sea el período, más tiempo puede tardar el recálculo.</div></td></tr></tbody></table>

Una vez finalizado el procesamiento, los resultados estarán disponibles en el historial de recálculos.

## Cómo ver el resultado del recálculo

Para ver el estado del recálculo, haga clic en «Historial» en la ventana «Recálculo de datos».

![Recálculo de datos ](images/drex_pereschyet_dannykh__screen_2.png)

Se abrirá la lista de todos los recálculos iniciados para el objeto seleccionado. Aquí puede comprobar los parámetros del recálculo, su estado y el resultado del procesamiento.

![](images/drex_pereschyet_dannykh__custom_2.png)

En la tabla se indican:

-   Objeto: objeto para el que se inició el recálculo
    
-   Tipo de recálculo: viajes o geocercas
    
-   Días: número de días seleccionado al iniciar
    
-   Solicitado: fecha y hora de envío de la solicitud
    
-   Procesado: fecha y hora del procesamiento o de la última actualización del estado
    
-   Resultado: estado actual e información sobre el recálculo
    

Si los campos «Procesado» y «Resultado» aún no están rellenados, el recálculo puede estar en cola o en ejecución. Abra el historial más tarde para comprobar su estado.

Tras el recálculo de viajes, en el resultado pueden mostrarse:

-   Tiempo de ejecución: duración del procesamiento en segundos
    
-   Agentes: número de mensajes procesados del objeto
    
-   Puntos: número de puntos procesados
    
-   Tracks: número de viajes generados
    
-   Parkings: número de estacionamientos generados
    

Tras el recálculo de geocercas, el resultado puede contener registros de servicio, el tiempo de ejecución y el número de geocercas procesadas. Estos datos se utilizan principalmente para el diagnóstico del funcionamiento del sistema. Para el trabajo habitual basta con comprobar que el recálculo finalizó correctamente.

![](images/drex_pereschyet_dannykh__custom_3.png)

<table><tbody><tr><td><span></span></td><td><div>Si el recálculo no se inició, finalizó con error o después de él no aparecieron los datos, póngase en contacto con el servicio de soporte.</div></td></tr></tbody></table>
