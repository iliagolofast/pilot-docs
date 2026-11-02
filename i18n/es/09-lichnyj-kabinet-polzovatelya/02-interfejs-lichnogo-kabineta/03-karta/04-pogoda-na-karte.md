---
title: "El clima en el mapa"
---

En el sistema está integrada la visualización del clima de Windy.com, una plataforma en línea con mapas meteorológicos interactivos y pronósticos.

Los datos meteorológicos se muestran sobre el mapa y se sincronizan automáticamente con su desplazamiento y su escala.

![El clima en el mapa](images/drex_pogoda_na_karte_screen.png)

## Cómo activar la capa meteorológica

-   Obtención de la clave API
    
    1) Regístrese en el portal Windy API
    
    2) Cree una clave API
    
    3.) Recibirá una clave con este formato: 4epwZKT8erOIe6Boq2gfdhffs50ky
    

De forma predeterminada se entrega una clave trial (de prueba)

Limitaciones de trial:

— está disponible el modelo GFS

— están disponibles las capas: viento, temperatura, presión

2\. Configuración de la clave en PILOT

Para que la capa meteorológica esté disponible:

1.) En el contrato debe estar [activada la configuración](../../../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html) de Windy

2.) En el panel de administración, en la configuración del contrato, añada el parámetro:

windy\_api\_key = su\_clave

![](images/drex_pogoda_na_karte_custom.png)

Después de guardar la configuración, la funcionalidad meteorológica estará disponible para los usuarios del contrato.

## Cómo activar el clima

1\. Abra el mapa

2\. En la lista de capas aparecerá la casilla «Clima»

![El clima en el mapa](images/drex_pogoda_na_karte_screen_2.png)

3\. Marque la casilla

4\. Al activarla, sobre el mapa aparecerá la capa meteorológica y en la parte inferior se mostrará el panel de tiempo del pronóstico

![](images/drex_pogoda_na_karte_custom_2.png)

Para desactivar el clima, basta con desmarcar la casilla.

## Cómo seleccionar el modelo de pronóstico

Pulse el icono del globo terráqueo ![](images/drex_pogoda_na_karte_custom_3.png) en el panel meteorológico y seleccione el modelo.

![](images/drex_pogoda_na_karte_custom_4.png)

La disponibilidad de los modelos depende de la tarifa.

**Free**

-   GFS: modelo global con detalle básico. Es adecuado para tener una idea general de la situación meteorológica en el mundo
    

**Pro**

-   ICON: alto nivel de detalle para Europa
    
-   NAM: modelo preciso para América del Norte
    
-   AROME: nivel de detalle muy alto (especialmente para Francia y regiones cercanas)
    
-   GEOS5: modelo de la NASA para el análisis global
    
-   CAMS: modelo de monitoreo de la calidad del aire
    
-   HRRR: actualización horaria frecuente para EE. UU.
    

**ECMWF** (con suscripción independiente)

-   ECMWF: uno de los modelos globales de pronóstico más precisos, utilizado para el análisis profesional
    

El sistema determina automáticamente la tarifa y muestra solo los modelos disponibles.

## Cómo seleccionar el tipo de capa meteorológica

Pulse la flecha de la lista desplegable y seleccione el tipo de datos.

![](images/drex_pogoda_na_karte_custom_5.png)

**Free:**

-   Viento
    
-   Temperatura
    
-   Presión
    

![](images/drex_pogoda_na_karte_custom_6.png)

**Pro** (adicionalmente):

-   Humedad
    
-   Precipitaciones
    
-   Tormentas
    
-   Nubosidad
    
-   Visibilidad
    
-   Imágenes satelitales
    
-   Radar meteorológico
    
    y otros parámetros profesionales.
    
    Tras la selección, el mapa se actualizará automáticamente.
    

## Cómo trabajar con el panel de tiempo

Cuando la capa meteorológica está activada, en la parte inferior del mapa aparece el panel de tiempo. Ayuda a consultar el pronóstico por horas y por días.

-   ![](images/drex_pogoda_na_karte_custom_7.png) Play: inicia la animación del pronóstico. El mapa muestra sucesivamente la evolución del clima en el tiempo
    
-   ![](images/drex_pogoda_na_karte_custom_8.png) Pause: detiene la animación en el momento seleccionado
    
-   Control deslizante de tiempo: arrástrelo manualmente para ir a la fecha y la hora deseadas
    

El panel se muestra solo cuando la capa meteorológica está activada. Si se desactiva el clima, el panel se oculta automáticamente.

![](images/drex_pogoda_na_karte_custom_9.png)
