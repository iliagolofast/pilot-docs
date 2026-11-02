---
title: "Teltonika FOTA. Підключення до системи"
---

У системі реалізовано інтеграцію з FOTA компанії Teltonika.

Ця інтеграція дає змогу виконувати налаштування приладів Teltonika з інтерфейсу системи PILOT.

Ця функція може бути активована як для партнера, так і для окремо взятого акаунта (договору).

**Активація Teltonika FOTA WEB у** PILOT

Для віддаленого керування конфігурацією приладів Teltonika з платформи PILOT необхідно активувати інтеграцію, для цього необхідно виконати такі кроки.

<table><tbody><tr><td><span></span></td><td><div><span>1. Увійдіть під своїм акаунтом у Teltonika FOTA WEB <strong>(</strong></span><a href="https://fm.teltonika.lt/"><span><strong>https://fm.teltonika.lt</strong></span></a><span><strong>)</strong></span></div><div><span>2. Згенеруйте та скопіюйте API Key.</span></div></td></tr></tbody></table>

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom.png)

3.Введіть довільну назву для API Token і натисніть кнопку Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_2.png)

4\. Введіть довільну назву для API Token і натисніть кнопку Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_3.png)

5\. Скопіюйте згенероване значення token.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_4.png)

Відкрийте налаштування свого акаунта в панелі адміністратора та додайте туди новий запис

Відкрийте розділ "Конфігурація" і додайте ключ **fotaTokens**.

Формат і значення ключа fotaTokens: {"<Name>":"<Key>","<Name1>":"<Key1>","<NameN>":"<KeyN>"}

<Name> - довільне ім’я

<Key> - API Key, отриманий в інтерфейсі Teltonika FOTA

Ви можете вказати більше одного ключа через кому.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_5.png)
