---
title: "Імпорт із Wialon"
---

Щоб перенести дані із системи Wialon, використовуйте модуль «Імпорт із Wialon». Перенесення даних відбувається через майстер міграції — вибирайте потрібні об’єкти та переносьте їх у PILOT.

<table><tbody><tr><td><span></span></td><td><div>Перед перенесенням даних переконайтеся, що у вашого облікового запису у Wialon є права на експорт — доступ&nbsp;до&nbsp;функції Import/Export. Якщо таких прав немає, «Імпорт із Wialon» не зможе вивантажити об’єкти.</div></td></tr></tbody></table>

![Імпорт із Wialon](images/drex_import_iz_wialon_screen.png)

<table><tbody><tr><td><span></span></td><td><div>Для наочного розуміння процесу роботи з майстром міграції та перенесення даних із Wialon у PILOT дивіться відео <a href="https://youtu.be/TMAA7MX-EQU"><span>«Як перенести дані з Wialon у PILOT»</span></a>.</div><div><div><a href="https://youtu.be/TMAA7MX-EQU" title="560_315">https://youtu.be/TMAA7MX-EQU</a></div></div></td></tr></tbody></table>

## Як перенести дані:

1\. Підключіть модуль «Імпорт із Wialon» у панелі адміністратора. Після цього на вкладці «Основні» з’явиться кнопка «Імпорт із Wialon»

![Імпорт із Wialon](images/drex_import_iz_wialon_screen_2.png)

2\. Натисніть на кнопку ![](images/drex_import_iz_wialon_custom.png)

3\. Відкриється вікно майстра міграції, розділене на дві частини:

Ліворуч — список завдань міграції

Праворуч — список об’єктів Wialon, які будуть переноситися

![Імпорт із Wialon](images/drex_import_iz_wialon_screen_3.png)

4\. Створіть нове завдання на міграцію:

1) Натисніть кнопку «Додати завдання» ![](images/drex_import_iz_wialon_custom_2.png)

2) У вікні, що з’явилося, заповніть поля:

![Імпорт із Wialon](images/drex_import_iz_wialon_screen_4.png)

-   Логін Wialon  — ваш логін у Wialon
    
-   Пароль Wialon — ваш пароль у Wialon
    

3) Натисніть кнопку «Завантажити об’єкти з Wialon»

4) Унизу з’явиться список об’єктів, які можна перенести. Позначте галочками ті, які хочете імпортувати.

<table><tbody><tr><td><span></span></td><td><div>Об’єкти з позначкою&nbsp;processed&nbsp;уже вибрані в інших завданнях і недоступні для вибору.</div></td></tr></tbody></table>

![](images/drex_import_iz_wialon_custom_3.png)

5) Натисніть «Зберегти»

5\. Нове завдання з’явиться у списку ліворуч у вікні майстра міграції. Усі його статуси будуть порожніми —  це означає, що завдання ще не запускалося.

![Імпорт із Wialon](images/drex_import_iz_wialon_screen_5.png)

6\. Щоб почати перенесення даних, клацніть на завдання у списку та натисніть «Запустити завдання» ![](images/drex_import_iz_wialon_custom_4.png)

<table><tbody><tr><td><span></span></td><td><div>Після запуску завдання не можна буде змінити.</div></td></tr></tbody></table>

7\. Після запуску завдання перенесення даних почнеться автоматично

Статуси етапів оновлюватимуться у вікні майстра міграції — зазвичай це займає не більше хвилини.

Дочекайтеся завершення процесу: ви побачите, як змінюються статуси та з’являються нові дані.

![Імпорт із Wialon](images/drex_import_iz_wialon_screen_6.png)

Щоб стежити за процесом міграції та бачити актуальні статуси, натисніть кнопку «Оновити» ![](images/drex_import_iz_wialon_custom_5.png).

У цьому прикладі після виконання завдання з id: 322 єдиний об’єкт Wialon було повністю успішно перенесено в PILOT.

![](images/drex_import_iz_wialon_custom_6.png)

## Етапи міграції

Для кожного об’єкта відображаються етапи міграції:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Етап</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Завдання запущено. Міграція почалася, система приступила до виконання завдання</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; auth</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Авторизація у Wialon API. Система підключається до Wialon для отримання доступу до даних</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wlp</span></div></td><td colspan="1" rowspan="1"><div><span>Експорт параметрів об’єктів.</span></div><div><span>Вивантажуються основні параметри об’єктів із Wialon (кількість успішно оброблених файлів з параметрами об’єктів Wialon / загальна кількість об’єктів Wialon у цьому завданні)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wln</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Експорт подій об’єктів.</span></div><div><span>&nbsp; Вивантажуються події об’єктів із Wialon (кількість успішно оброблених файлів з подіями об’єктів Wialon / загальна кількість об’єктів Wialon у цьому завданні)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh</span></div></td><td colspan="1" rowspan="1"><div><span>Створення об’єктів у PILOT</span></div><div><span>(кількість успішно створених об’єктів PILOT / загальна кількість об’єктів Wialon у цьому завданні)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sns</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Імпорт датчиків. Перенесення даних про датчики, встановлені на об’єктах</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; evt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Імпорт подій. Імпортуються всі події, пов’язані з об’єктами (наприклад, перевищення швидкості, заправки, тривоги)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rc</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перерахунок даних:</span></div><div><span>&nbsp; rc1 — треки:&nbsp;перерахунок маршрутів і треків руху</span></div><div><span>&nbsp; rc2 — двійкові сенсори: перерахунок даних за сенсорами з двома станами (наприклад, увімкнено/вимкнено)</span></div><div><span>&nbsp; rc3 — сенсори: перерахунок даних за всіма сенсорами</span></div><div><span>&nbsp; rc4 — одометр: перерахунок пробігу</span></div><div><span>&nbsp; rc5 — eco: перерахунок даних за стилем водіння (eco-driving)</span></div><div><span>&nbsp; r6 — мультисенсори:&nbsp;перерахунок даних за складними (багатоканальними) сенсорами</span></div></td></tr></tbody></table>

## Статуси етапів міграції

Значення полів статусів можуть бути такими:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Значення</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; порожньо</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Етап міграції не виконувався</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_7.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Етап завершився успішно</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_8.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Етап завершився з помилками</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1001</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код помилки Wialon API</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; no data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повідомлення про помилку Wialon API (немає даних)</span></div></td></tr></tbody></table>
