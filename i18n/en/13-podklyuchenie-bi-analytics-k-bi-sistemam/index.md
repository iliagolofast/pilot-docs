---
title: "Connecting BI Analytics to BI Systems"
---

BI Analytics lets you connect monitoring system data to external BI platforms to build your own reports, charts, dashboards and analytics panels.

![](images/drex_podklyuchenie_bi_analytics_k_bi_sistemam_custom.png)

With the BI Analytics API you can retrieve data on vehicles, drivers, trips, fuel consumption, “Eco-driving” violations and other indicators, and then use it in any BI system that supports REST API.

BI Analytics is suitable both for simple reports and for building corporate analytics with your own metrics, filters and visualizations.

You can use the data in BI systems such as:

-   Microsoft Power BI
    
-   Tableau
    
-   Qlik Sense
    
-   Apache Superset
    
-   Grafana
    
-   other platforms that support REST API
    

## What you need to connect

Before connecting, make sure that:

— the [analytics module is enabled](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_партнёрском_аккаунте) on the partner account

— the [analytics module is also enabled](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_договоре_пользователя) on the user's contract

— the [parameter bi\_analytics = 1 is set](kak-vklyuchit-dostup-k-bi-analytics.html#Подключение_конфигурации) in the partner configuration

— you know the [login and password](podklyuchenie-k-bi-analytics-api.html#Где_взять_логин_и_пароль) of the partner account

 — you have chosen the correct [server address](podklyuchenie-k-bi-analytics-api.html#Как_выбрать_адрес_сервера)

After these settings are done, you can connect to the BI Analytics API from any supported BI platform.

## API documentation (Swagger)

To view the structure of BI Analytics API methods, you can use the API documentation in Swagger format: [BI API v1 — Swagger](https://bi-swagger.pilot-gps.com/?urls.primaryName=BI+API+v1+Russian#/)

In the Swagger documentation you can:

— view all available API methods

— view the structure of requests and responses

— download the API specification in JSON format
