---
title: "Teltonika FOTA. Подключение к системе"
source: teltonika_fota__podklyuchenie_k_sisteme.html
---

В системе реализована интеграция с FOTA компании Teltonika.

Данная интеграция позволяет производить настройки приборов Teltonika из интерфейса системы PILOT.

Данная функция может быть активирована как для партнера, так и для отдельно взятого аккаунта (договора).

**Активация Teltonika FOTA WEB в** PILOT

Для удаленного управления конфигурацией приборов Teltonika из платформы PILOT необходимо активировать интеграцию, для этого необходимо выполнить следующие шаги.

<table><tbody><tr><td><span></span></td><td><div><span>1. Залогиньтесь под своим аккаунтом в Teltonika FOTA WEB <strong>(</strong></span><a href="https://fm.teltonika.lt/"><span><strong>https://fm.teltonika.lt</strong></span></a><span><strong>)</strong></span></div><div><span>2. Сгенерируйте и скопируйте API Key.</span></div></td></tr></tbody></table>

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom.png)

3.Введите произвольное название для API Token и нажмите кнопку Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_2.png)

4\. Введите произвольное название для API Token и нажмите кнопку Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_3.png)

5\. Скопируйте сгенерированное значение token.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_4.png)

Откройте настройки своего аккаунта в панели  администратора и добавьте туда новую запись

Откройте раздел "Конфигурация" и добавьте ключ **fotaTokens**.

Формат и значение ключа fotaTokens: {"<Name>":"<Key>","<Name1>":"<Key1>","<NameN>":"<KeyN>"}

<Name> - произвольное имя

<Key> - API Key полученный в интерфейсе Teltonika FOTA

Вы можете указать более одного ключа через запятую.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_5.png)
