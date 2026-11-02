---
title: "Параметри запитів і доступні метрики"
---

Під час виконання запитів до BI Analytics API необхідно вказати параметри, які визначають, які дані отримати й у якому вигляді їх повернути.

Окрім параметрів запиту, необхідно вибрати метрики — показники, які буде включено до результату. Саме вони визначають, які дані поверне API, наприклад пробіг, витрату палива, кількість поїздок або порушення екодрайвінгу.

## Основні параметри запиту

Параметри запиту визначають джерело даних, спосіб їх групування та додаткові умови вибірки.

### source

Поле source визначає, за якими даними будувати вибірку.

Доступні значення:

-   vehicle — дані за транспортом
    
-   driver — дані за водіями
    

### group\_by

Поле group\_by визначає, як групувати результат.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значення</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Що показує</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Приклад структури відповіді</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; total</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сума за всіма авто або водіями за період</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "metric": 123 }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сума за всіма авто або водіями за кожен день</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "20260301": { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кожне джерело, підсумок за період</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кожне джерело, кожен день</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "20260301": { "metric": 123 } } }</span></div></td></tr></tbody></table>

### ACCOUNT\_ID

Параметр ACCOUNT\_ID дає змогу обмежити вивантаження даними одного договору.

Якщо в запиті вказано логін і пароль партнерського облікового запису, без ACCOUNT\_ID система вивантажує всі транспортні засоби за всіма договорами, доступними цьому партнеру.

Якщо в запиті вказати ACCOUNT\_ID, буде завантажено лише об’єкти вибраного договору.

## Доступні метрики

Метрики визначають, які показники поверне API. Вони передаються в параметрі metrics у вигляді списку.

Наприклад:

<table><tbody><tr><td><span></span></td><td><div><span>metrics = [</span></div><div><span>&nbsp; &nbsp; "veh_driving_dist",</span></div><div><span>&nbsp; &nbsp; "veh_fuel_cons",</span></div><div><span>&nbsp; &nbsp; "average_speed"</span></div><div><span>]</span></div></td></tr></tbody></table>

Нижче наведено список підтримуваних метрик.

### Транспорт — загальне

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість поїздок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробіг (км)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час у русі</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час стоянок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_ignition_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час із увімкненим запалюванням</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час холостого ходу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_motor_hours</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Мотогодини</span></div></td></tr></tbody></table>

### Транспорт — паливо

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Витрата палива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заправлено пального</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Злито пального</span></div></td></tr></tbody></table>

### Транспорт — порушення

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за еководіння</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість порушень еководіння</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різкі прискорення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких прискорень</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різке гальмування</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких гальмувань</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різкі повороти</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких поворотів</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за перевищення швидкості</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість перевищень швидкості</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за непристебнутий ремінь</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість порушень щодо ременя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за холостий хід</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість порушень холостого ходу</span></div></td></tr></tbody></table>

### Транспорт — витрати

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вартість пального на км</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_service_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вартість обслуговування на км</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_amount_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Загальні витрати</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;cost_of_using</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вартість використання</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;average_speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Середня швидкість</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_cars_counter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість авто</span></div></td></tr></tbody></table>

### Водії

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість поїздок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробіг (км)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час у русі</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час стоянок</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Витрата палива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заправлено пального</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Злито пального</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за еководіння</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість порушень еководіння</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різкі прискорення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких прискорень</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різке гальмування</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких гальмувань</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за різкі повороти</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість різких поворотів</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за перевищення швидкості</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість перевищень швидкості</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штраф за непристебнутий ремінь</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Кількість порушень щодо ременя</span></div></td></tr></tbody></table>

### Метрики для окремих типів еко-подій

Для отримання даних за окремими типами подій [Екодрайвінгу](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/index.html) використовуються метрики такого формату:

-   eco\_{N}\_fine — — кількість штрафних балів за типом події
    
-   eco\_{N}\_cnt— кількість зареєстрованих подій цього типу
    

Тут N — це ідентифікатор (ID) типу події якості водіння.

Кожен тип події має власний унікальний ID, який система автоматично присвоює під час його створення. Цей ідентифікатор використовується в API для формування назв метрик.

Наприклад, у [довіднику типів](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) якості водіння стандартні події можуть мати такі ідентифікатори:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ID</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип події</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat Belt</span></div></td></tr></tbody></table>

![](images/drex_parametry_zaprosov_i_dostupnye_metriki_custom.png)

Якщо в системі [створено власні типи подій](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:), їм також автоматично присвоюються унікальні ID.

Під час формування запиту замість N необхідно вказати ID потрібного типу події.

### Приклади

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Що повертає</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_1_fine / eco_1_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафні бали та кількість подій Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_2_fine / eco_2_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафні бали та кількість подій Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_4_fine / eco_4_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафні бали та кількість подій Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;eco_5_fine / eco_5_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Штрафні бали та кількість подій Seat Belt</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Переглянути ідентифікатори типів подій можна <a href="../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения"><span>у довіднику «Типи якості водіння»</span></a>. Значення відображається в колонці ID. Під час створення нового типу система автоматично присвоює йому унікальний ідентифікатор, який потім використовується в метриках BI Analytics API.</div></td></tr></tbody></table>
