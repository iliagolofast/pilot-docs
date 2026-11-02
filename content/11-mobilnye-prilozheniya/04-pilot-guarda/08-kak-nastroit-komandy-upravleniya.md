---
title: "Как настроить команды управления"
source: kak_nastroit_komandy_upravleniya.html
---

Чтобы кнопки «Открыть» и «Закрыть» работали в приложении, нужно настроить шаблоны команд arm и disarm в системе PILOT.

![Как настроить команды управления](images/drex_kak_nastroit_komandy_upravleniya_screen.png)

Шаблоны команд настраиваются в системе PILOT:

1\. Откройте кабинет пользователя

2\. Перейдите в раздел «Основные»

3\. Нажмите на значок «Команды»

![Как настроить команды управления](images/drex_kak_nastroit_komandy_upravleniya_screen_2.png)

3\. Откроется окно, в котором можно создавать шаблоны команд.

![](images/drex_kak_nastroit_komandy_upravleniya_custom.png)

## Как создать шаблон команды

1\. Нажмите «Добавить команду»

![Как настроить команды управления](images/drex_kak_nastroit_komandy_upravleniya_screen_3.png)

2\. Выберите объект, для которого создаётся команда

3\. Нажмите ![](images/drex_kak_nastroit_komandy_upravleniya_custom_2.png)

![](images/drex_kak_nastroit_komandy_upravleniya_custom_3.png)

3\. Укажите параметры:

-   Тип команды — GRPS
    
-   Вид команды — SMS\_VIA\_GPRS
    

![](images/drex_kak_nastroit_komandy_upravleniya_custom_4.png)

4\. В поле «СМС» введите текст команды, например: setdigout 0 — снятие с охраны

![](images/drex_kak_nastroit_komandy_upravleniya_custom_5.png)

5\. При необходимости включите флажок hex, если команда должна отправляться в HEX-формате

6\. Нажмите «Сохранить как шаблон» и задайте имя

![](images/drex_kak_nastroit_komandy_upravleniya_custom_6.png)

Имена шаблонов должны быть указаны строго:

-   arm — постановка на охрану
    
-   disarm — снятие с охраны
    
-   get\_beacon\_ids — получение списка меток
    
    Названия пишутся с маленькой буквы. Именно по этим названиям приложение находит и выполняет команды.
    

## Примеры команд

Постановка на охрану — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Устройство</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команды</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Снятие с охраны — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Устройство</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команды</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>

Получение списка меток — get\_beacon\_ids

Команда для получения списка Bluetooth-меток, зарегистрированных на устройстве.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Устройство</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команды</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; getparam 1600;1601;1602;1603;1604;1605;1606;1607;1608;1609;1610</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Чтобы команды работали корректно:</div><div>— устройство должно быть в сети</div><div>— в системе должен быть настроен датчик охраны — он нужен, чтобы приложение могло показывать текущий статус охраны</div></td></tr></tbody></table>

После настройки шаблонов кнопки «Закрыть» и «Открыть» станут активными и вы сможете управлять автомобилем с экрана «Состояние автомобиля».
