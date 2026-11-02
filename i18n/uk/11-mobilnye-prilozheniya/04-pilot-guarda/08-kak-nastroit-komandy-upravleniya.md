---
title: "Як налаштувати команди керування"
---

Щоб кнопки «Відкрити» і «Закрити» працювали в застосунку, потрібно налаштувати шаблони команд arm і disarm у системі PILOT.

![Як налаштувати команди керування](images/drex_kak_nastroit_komandy_upravleniya_screen.png)

Шаблони команд налаштовуються в системі PILOT:

1\. Відкрийте кабінет користувача

2\. Перейдіть у розділ «Основні»

3\. Натисніть на значок «Команди»

![Як налаштувати команди керування](images/drex_kak_nastroit_komandy_upravleniya_screen_2.png)

3\. Відкриється вікно, у якому можна створювати шаблони команд.

![](images/drex_kak_nastroit_komandy_upravleniya_custom.png)

## Як створити шаблон команди

1\. Натисніть «Додати команду»

![Як налаштувати команди керування](images/drex_kak_nastroit_komandy_upravleniya_screen_3.png)

2\. Виберіть об’єкт, для якого створюється команда

3\. Натисніть ![](images/drex_kak_nastroit_komandy_upravleniya_custom_2.png)

![](images/drex_kak_nastroit_komandy_upravleniya_custom_3.png)

3\. Вкажіть параметри:

-   Тип команди — GRPS
    
-   Вид команди — SMS\_VIA\_GPRS
    

![](images/drex_kak_nastroit_komandy_upravleniya_custom_4.png)

4\. У полі «SMS» введіть текст команди, наприклад: setdigout 0 — зняття з охорони

![](images/drex_kak_nastroit_komandy_upravleniya_custom_5.png)

5\. За потреби ввімкніть прапорець hex, якщо команда має надсилатися у форматі HEX

6\. Натисніть «Зберегти як шаблон» і задайте ім’я

![](images/drex_kak_nastroit_komandy_upravleniya_custom_6.png)

Імена шаблонів мають бути вказані строго:

-   arm — постановка на охорону
    
-   disarm — зняття з охорони
    
-   get\_beacon\_ids — отримання списку міток
    
    Назви пишуться з маленької літери. Саме за цими назвами застосунок знаходить і виконує команди.
    

## Приклади команд

Постановка на охорону — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Пристрій</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команди</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Зняття з охорони — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Пристрій</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команди</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>

Отримання списку міток — get\_beacon\_ids

Команда для отримання списку Bluetooth-міток, зареєстрованих на пристрої.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Пристрій</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команди</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; getparam 1600;1601;1602;1603;1604;1605;1606;1607;1608;1609;1610</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Щоб команди працювали коректно:</div><div>— пристрій має бути в мережі</div><div>— у системі має бути налаштований датчик охорони — він потрібен, щоб застосунок міг показувати поточний статус охорони</div></td></tr></tbody></table>

Після налаштування шаблонів кнопки «Закрити» і «Відкрити» стануть активними, і ви зможете керувати автомобілем з екрана «Стан автомобіля».
