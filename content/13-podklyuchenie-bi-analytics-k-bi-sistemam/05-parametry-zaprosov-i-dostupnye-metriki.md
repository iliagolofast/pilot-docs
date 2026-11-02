---
title: "Параметры запросов и доступные метрики"
source: parametry_zaprosov_i_dostupnye_metriki.html
---

При выполнении запросов к BI Analytics API необходимо указать параметры, определяющие, какие данные получить и в каком виде их вернуть.

Кроме параметров запроса, необходимо выбрать метрики — показатели, которые будут включены в результат. Именно они определяют, какие данные вернёт API, например пробег, расход топлива, количество поездок или нарушения экодрайвинга.

## Основные параметры запроса

Параметры запроса определяют источник данных, способ их группировки и дополнительные условия выборки.

### source

Поле source определяет, по каким данным строить выборку.

Доступные значения:

-   vehicle — данные по транспорту
    
-   driver — данные по водителям
    

### group\_by

Поле group\_by определяет, как группировать результат.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значение</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Что показывает</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Пример структуры ответа</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; total</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сумма по всем авто или водителям за период</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "metric": 123 }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сумма по всем авто или водителям за каждый день</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "20260301": { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Каждый источник, итог за период</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Каждый источник, каждый день</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "20260301": { "metric": 123 } } }</span></div></td></tr></tbody></table>

### ACCOUNT\_ID

Параметр ACCOUNT\_ID позволяет ограничить выгрузку данными одного договора.

Если в запросе указаны логин и пароль партнёрского аккаунта, без ACCOUNT\_ID система выгружает все транспортные средства по всем договорам, доступным этому партнёру.

Если в запросе указать ACCOUNT\_ID, будут загружены только объекты выбранного договора.

## Доступные метрики

Метрики определяют, какие показатели будут возвращены API. Они передаются в параметре metrics в виде списка.

Например:

<table><tbody><tr><td><span></span></td><td><div><span>metrics = [</span></div><div><span>&nbsp; &nbsp; "veh_driving_dist",</span></div><div><span>&nbsp; &nbsp; "veh_fuel_cons",</span></div><div><span>&nbsp; &nbsp; "average_speed"</span></div><div><span>]</span></div></td></tr></tbody></table>

Ниже приведён список поддерживаемых метрик.

### Транспорт — общее

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество поездок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробег (км)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время в движении</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время стоянок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_ignition_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время с включённым зажиганием</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время холостого хода</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_motor_hours</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Моточасы</span></div></td></tr></tbody></table>

### Транспорт — топливо

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Расход топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заправлено топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Слито топлива</span></div></td></tr></tbody></table>

### Транспорт — нарушения

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за эко-вождение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество нарушений эко-вождения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкие ускорения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких ускорений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкое торможение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких торможений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкие повороты</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких поворотов</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за превышение скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество превышений скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за непристёгнутый ремень</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество нарушений ремня</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за холостой ход</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество нарушений холостого хода</span></div></td></tr></tbody></table>

### Транспорт — затраты

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стоимость топлива на км</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_service_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стоимость обслуживания на км</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_amount_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Общие расходы</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;cost_of_using</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стоимость использования</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;average_speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Средняя скорость</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_cars_counter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество авто</span></div></td></tr></tbody></table>

### Водители

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество поездок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробег (км)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время в движении</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время стоянок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Расход топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заправлено топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Слито топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за эко-вождение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество нарушений эко-вождения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкие ускорения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких ускорений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкое торможение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких торможений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за резкие повороты</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество резких поворотов</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за превышение скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество превышений скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за непристёгнутый ремень</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Количество нарушений ремня</span></div></td></tr></tbody></table>

### Метрики для отдельных типов eco-событий

Для получения данных по отдельным типам событий [Экодрайвинга](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/index.html) используются метрики следующего формата:

-   eco\_{N}\_fine — — количество штрафных баллов по типу события
    
-   eco\_{N}\_cnt— количество зарегистрированных событий данного типа
    

Здесь N — это идентификатор (ID) типа события качества вождения.

Каждый тип события имеет собственный уникальный ID, который система автоматически присваивает при его создании. Этот идентификатор используется в API для формирования названий метрик.

Например, в [справочнике типов](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) качества вождения стандартные события могут иметь следующие идентификаторы:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ID</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип события</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat Belt</span></div></td></tr></tbody></table>

![](images/drex_parametry_zaprosov_i_dostupnye_metriki_custom.png)

Если в системе [созданы собственные типы событий](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:), им также автоматически присваиваются уникальные ID.

При формировании запроса вместо N необходимо указать ID нужного типа события.

### Примеры

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Что возвращает</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_1_fine / eco_1_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафные баллы и количество событий Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_2_fine / eco_2_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафные баллы и количество событий Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_4_fine / eco_4_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафные баллы и количество событий Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;eco_5_fine / eco_5_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафные баллы и количество событий Seat Belt</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Посмотреть идентификаторы типов событий можно <a href="../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения"><span>в справочнике «Типы качества вождения»</span></a>. Значение отображается в колонке ID. При создании нового типа система автоматически присваивает ему уникальный идентификатор, который затем используется в метриках BI Analytics API.</div></td></tr></tbody></table>
