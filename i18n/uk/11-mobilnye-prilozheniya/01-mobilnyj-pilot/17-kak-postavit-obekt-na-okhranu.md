---
title: "Як поставити об’єкт на охорону"
---

Щоб поставити об’єкт на охорону, на ньому має бути налаштований [датчик безпеки](../../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html). Якщо датчик налаштовано, у меню об’єкта з’явиться пункт «Постановка на охорону».

# ![](images/drex_kak_postavit_obekt_na_okhranu_custom.png)   ![](images/drex_kak_postavit_obekt_na_okhranu_custom_2.png)

Також для роботи функції в системі мають бути створені шаблони команд із назвами arm і disarm. Заздалегідь [налаштуйте](kak-postavit-obekt-na-okhranu.html#Как_настроить_шаблоны_команд) їх у вебінтерфейсі, і тоді з’являться команди для постановки на охорону:

-   Arm — постановка на охорону
    
-   Disarm — зняття з охорони
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_3.png)  ![](images/drex_kak_postavit_obekt_na_okhranu_custom_4.png)

Під час зміни статусу охорони поруч з об’єктом у списку з’явиться відповідна іконка:

![](images/drex_kak_postavit_obekt_na_okhranu_custom_5.png) — об’єкт на охороні

![](images/drex_kak_postavit_obekt_na_okhranu_custom_6.png) — об’єкт знято з охорони

![Як поставити об’єкт на охорону](images/drex_kak_postavit_obekt_na_okhranu_screen.png)  ![Як поставити об’єкт на охорону](images/drex_kak_postavit_obekt_na_okhranu_screen_2.png)

## Як налаштувати шаблони команд

Шаблони команд налаштовуються у вебінтерфейсі PILOT:

1\. Відкрийте кабінет користувача

2\. Перейдіть у розділ «Основні»

3\. Натисніть на значок «Команди»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_7.png)

3\. Відкриється вікно, у якому можна створювати шаблони команд.

![](images/drex_kak_postavit_obekt_na_okhranu_custom_8.png)

### Як створити шаблон команди

1\. Натисніть «Додати команду»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_9.png)

2\. Виберіть об’єкт, для якого створюється команда

3\. Натисніть ![](images/drex_kak_postavit_obekt_na_okhranu_custom_10.png)

![](images/drex_kak_postavit_obekt_na_okhranu_custom_11.png)

3\. Вкажіть параметри:

-   Тип команди — GRPS
    
-   Вид команди — SMS\_VIA\_GPRS
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_12.png)

4\. У полі «SMS» введіть текст команди, наприклад: setdigout 0 — зняття з охорони

![](images/drex_kak_postavit_obekt_na_okhranu_custom_13.png)

5\. За потреби ввімкніть прапорець hex, якщо команда має надсилатися у форматі HEX

6\. Натисніть «Зберегти як шаблон» і задайте ім’я

![](images/drex_kak_postavit_obekt_na_okhranu_custom_14.png)

Імена шаблонів мають бути вказані строго:

-   arm — постановка на охорону
    
-   disarm — зняття з охорони
    
    Назви пишуться з маленької літери. Саме за цими назвами застосунок знаходить і виконує команди.
    

## Приклади команд

Постановка на охорону — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Пристрій</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команди</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Зняття з охорони — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Пристрій</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команди</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>
