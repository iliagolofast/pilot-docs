---
title: "Как настроить датчики и метки"
source: kak_nastroit_datchiki_i_metki.html
---

Приложение PILOT Guarda может отображать подробную информацию о состоянии автомобиля: заряд аккумулятора, уровень топлива, температуру и другие параметры.

Чтобы эти данные появились в приложении, необходимо заранее:

— [настроить датчики](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) в системе PILOT

— присвоить им [метки](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) (теги)

Метка (тег) — это уникальное имя, которое присваивается датчику в системе мониторинга. Благодаря меткам приложение понимает, какой датчик за что отвечает, и корректно отображает информацию на экране.

## Какие датчики можно подключить

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Тег</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Что отображает</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_main_battery</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Заряд аккумулятора автомобиля. Как правило, это напряжение питания на устройстве мониторинга</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_lock_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус блокировки двигателя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_fuel_level</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Уровень топлива</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Температура двигателя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_flat_cable_fault_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус неисправности шлейфа</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Температура в салоне автомобиля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_humidity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Влажность в салоне автомобиля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_1_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус выхода 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_2_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус выхода 2</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_3_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус выхода 3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Статус зажигания</span></div></td></tr></tbody></table>

## Как настроить датчики

Настройка датчиков выполняется в системе PILOT:

1\. Откройте кабинет пользователя

2\. Выберите нужный объект. Правой кнопкой мыши откройте меню объекта

3\. Перейдите во вкладку «Датчики»

![](images/drex_kak_nastroit_datchiki_i_metki_custom.png)

4\. [Создайте новый датчик](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) или откройте существующий

![](images/drex_kak_nastroit_datchiki_i_metki_custom_2.png)

5\. Укажите нужную метку (тег) из списка выше

Именно по метке приложение понимает, какие данные нужно отображать на экране «Состояние автомобиля».

Например:

— если датчику температуры присвоена метка garm\_on\_board\_temperature, в приложении будет отображаться температура в салоне автомобиля

![](images/drex_kak_nastroit_datchiki_i_metki_custom_3.png)

— если датчику внешнего питания присвоена метка garm\_main\_battery, в приложении будет отображаться заряд аккумулятора автомобиля

![](images/drex_kak_nastroit_datchiki_i_metki_custom_4.png)

— если датчику зажигания присвоена метка garm\_engine\_status, в приложении будет отображаться состояние двигателя — включён он или выключен

![](images/drex_kak_nastroit_datchiki_i_metki_custom_5.png)

Если нужной метки нет в списке, сначала [создайте её](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html), а затем присвойте датчику.

![](images/drex_kak_nastroit_datchiki_i_metki_custom_6.png)

6\. Сохраните изменения

После этого данные с датчика начнут отображаться в мобильном приложении на экране «Состояние автомобиля».

![Как настроить датчики и метки](images/drex_kak_nastroit_datchiki_i_metki_screen.png)

<table><tbody><tr><td><div><span>1 — Напряжение аккумулятора автомобиля</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div><span>2 — Состояние зажигания</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Как настроить датчики и метки](images/drex_kak_nastroit_datchiki_i_metki_screen_2.png)

<table><tbody><tr><td><div>1 — Текущий уровень топлива в баке</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>2 — Температура в салоне</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Какие ещё параметры могут отображаться в приложении в сводке по автомобилю:

-   Баланс — состояние SIM-карты устройства мониторинга
    
-   Температура — температура двигателя
    
-   Состояние дверей — открыты или закрыты
    
-   Состояние фар — включены или выключены
    
-   Состояние охраны — включена или выключена
