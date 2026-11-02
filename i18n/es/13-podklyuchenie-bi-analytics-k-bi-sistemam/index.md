---
title: "Conexión de BI Analytics a sistemas de BI"
---

BI Analytics permite conectar los datos del sistema de monitoreo a plataformas de BI externas para crear informes, gráficos, paneles de control y paneles analíticos propios.

![](images/drex_podklyuchenie_bi_analytics_k_bi_sistemam_custom.png)

Con BI Analytics API puede obtener datos sobre vehículos, conductores, viajes, consumo de combustible, infracciones de «Conducción ecológica» y otros indicadores, y después utilizarlos en cualquier sistema de BI compatible con REST API.

BI Analytics sirve tanto para crear informes sencillos como para construir analítica corporativa con indicadores, filtros y visualizaciones propios.

Los datos obtenidos pueden utilizarse en sistemas de BI como:

-   Microsoft Power BI
    
-   Tableau
    
-   Qlik Sense
    
-   Apache Superset
    
-   Grafana
    
-   otras plataformas compatibles con REST API
    

## Qué se necesita para conectarse

Antes de conectarse, asegúrese de que:

— en la cuenta de socio [está activado el módulo de analítica](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_партнёрском_аккаунте)

— en el contrato del usuario también [está activado el módulo de analítica](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_договоре_пользователя)

— en la configuración del socio [está establecido el parámetro bi\_analytics = 1](kak-vklyuchit-dostup-k-bi-analytics.html#Подключение_конфигурации)

— se conocen el [nombre de usuario y la contraseña](podklyuchenie-k-bi-analytics-api.html#Где_взять_логин_и_пароль) de la cuenta de socio

 — se ha elegido la [dirección de servidor](podklyuchenie-k-bi-analytics-api.html#Как_выбрать_адрес_сервера) correcta

Una vez realizados estos ajustes, puede conectarse a BI Analytics API desde cualquier plataforma de BI compatible.

## Documentación de la API (Swagger)

Para consultar la estructura de los métodos de BI Analytics API, puede utilizar la documentación de la API en formato Swagger: [BI API v1 — Swagger](https://bi-swagger.pilot-gps.com/?urls.primaryName=BI+API+v1+Russian#/)

En la documentación de Swagger puede:

— consultar todos los métodos disponibles de la API

— ver la estructura de las solicitudes y las respuestas

— descargar la especificación de la API en formato JSON
