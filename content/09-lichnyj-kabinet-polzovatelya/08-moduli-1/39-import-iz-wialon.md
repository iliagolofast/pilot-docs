---
title: "Импорт из Wialon"
source: import_iz_wialon.html
---

Чтобы перенести данные из системы Wialon, используйте модуль — «Импорт из Wialon». Перенос данных происходит через мастер миграции — выбирайте нужные объекты и переносите их в PILOT.

<table><tbody><tr><td><span></span></td><td><div>Перед переносом данных убедитесь, что у вашей учётной записи в Wialon есть права на экспорт — доступ&nbsp;к&nbsp;функции Import/Export. Если таких прав нет, «Импорт из Wialon» не сможет выгрузить объекты.</div></td></tr></tbody></table>

![Импорт из Wialon](images/drex_import_iz_wialon_screen.png)

<table><tbody><tr><td><span></span></td><td><div>Для наглядного понимания процесса работы с мастером миграции и переноса данных из Wialon в PILOT, смотрите видео <a href="https://youtu.be/TMAA7MX-EQU"><span>«Как перенести данные из Wialon в PILOT»</span></a>.</div><div><div><a href="https://youtu.be/TMAA7MX-EQU" title="560_315">https://youtu.be/TMAA7MX-EQU</a></div></div></td></tr></tbody></table>

## Как перенести данные:

1\. Подключите модуль «Импорт из Wialon» в панели администратора. После этого во вкладке «Основные» появится кнопка «Импорт из Wialon»

![Импорт из Wialon](images/drex_import_iz_wialon_screen_2.png)

2\. Нажмите на кнопку ![](images/drex_import_iz_wialon_custom.png)

3\. Откроется окно мастера миграции, разделённое на две части:

Слева — список заданий миграции

Справа — список объектов Wialon, которые будут переноситься

![Импорт из Wialon](images/drex_import_iz_wialon_screen_3.png)

4\. Создайте новое задание на миграцию:

1) Нажмите кнопку «Добавить задание» ![](images/drex_import_iz_wialon_custom_2.png)

2) В появившемся окне заполните поля:

![Импорт из Wialon](images/drex_import_iz_wialon_screen_4.png)

-   Логин Wialon  — ваш логин в Wialon
    
-   Пароль Wialon — ваш пароль в Wialon
    

3) Нажмите кнопку «Загрузить объекты из Wialon»

4) Внизу появится список объектов, которые можно перенести. Отметьте галочками те, которые хотите импортировать.

<table><tbody><tr><td><span></span></td><td><div>Объекты с пометкой&nbsp;processed&nbsp;уже выбраны в других заданиях и недоступны для выбора.</div></td></tr></tbody></table>

![](images/drex_import_iz_wialon_custom_3.png)

5) Нажмите «Сохранить»

5\. Новое задание появится в списке слева в окне мастера миграции. Все его статусы будут пустыми —  значит, что задание ещё не запускалось.

![Импорт из Wialon](images/drex_import_iz_wialon_screen_5.png)

6\. Чтобы начать перенос данных, кликните на задание в списке и нажмите «Запустить задание» ![](images/drex_import_iz_wialon_custom_4.png)

<table><tbody><tr><td><span></span></td><td><div>После запуска задание нельзя будет изменить.</div></td></tr></tbody></table>

7\. После запуска задания перенос данных начнётся автоматически

Статусы этапов будут обновляться в окне мастера миграции — обычно это занимает не больше минуты.

Дождитесь завершения процесса: вы увидите, как меняются статусы и появляются новые данные.

![Импорт из Wialon](images/drex_import_iz_wialon_screen_6.png)

Чтобы следить за процессом миграции и видеть актуальные статусы, нажмите кнопку «Обновить» ![](images/drex_import_iz_wialon_custom_5.png).

В этом примере после выполнения задания с id: 322 единственный объект  Wialon был полностью успешно перенесён в PILOT.

![](images/drex_import_iz_wialon_custom_6.png)

## Этапы миграции

Для каждого объекта отображаются этапы миграции:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Этап</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Задание запущено. Миграция началась, система приступила к выполнению задания</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; auth</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Авторизация в Wialon API. Система подключается к Wialon для получения доступа к данным</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wlp</span></div></td><td colspan="1" rowspan="1"><div><span>Экспорт параметров объектов.</span></div><div><span>Выгружаются основные параметры объектов из Wialon (количество успешно обработанных файлов с параметрами объектов Wialon/ общее количество объектов Wialon в этом задании)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wln</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Экспорт событий объектов.</span></div><div><span>&nbsp; Выгружаются события объектов из Wialon (количество успешно обработанных файлов с событиями объектов Wialon/ общее количество объектов Wialon в этом задании)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh</span></div></td><td colspan="1" rowspan="1"><div><span>Создание объектов в PILOT</span></div><div><span>(количество успешно созданных объектов PILOT/общее количество объектов Wialon в этом задании)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sns</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Импорт датчиков. Перенос данных о датчиках, установленных на объектах</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; evt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Импорт событий. Импортируются все события, связанные с объектами (например, превышения скорости, заправки, тревоги)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rc</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перерасёт данных:</span></div><div><span>&nbsp; rc1 — треки:&nbsp;пересчёт маршрутов и треков движения</span></div><div><span>&nbsp; rc2 — двоичные сенсоры: пересчёт данных по сенсорам с двумя состояниями (например, включено/выключено)</span></div><div><span>&nbsp; rc3 — сенсоры: пересчёт данных по всем сенсорам</span></div><div><span>&nbsp; rc4 — одометр: пересчёт пробега</span></div><div><span>&nbsp; rc5 — eco: пересчёт данных по стилю вождения (eco-driving)</span></div><div><span>&nbsp; r6 — мульти-сенсоры:&nbsp;пересчёт данных по сложным (многоканальным) сенсорам</span></div></td></tr></tbody></table>

## Статусы этапов миграции

Значения полей статусов могут быть следующими:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Значение</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; пусто</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Этап миграции не выполнялся</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_7.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Этап завершился успешно</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_8.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Этап завершился с ошибками</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1001</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код ошибки Wialon API</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; no data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сообщение об ошибке Wialon API (нет данных)</span></div></td></tr></tbody></table>
