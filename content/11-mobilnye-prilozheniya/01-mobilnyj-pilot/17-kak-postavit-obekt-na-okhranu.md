---
title: "Как поставить объект на охрану"
source: kak_postavit_obekt_na_okhranu.html
---

Чтобы поставить объект на охрану, на нём должен быть настроен [датчик безопасности](../../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html). Если датчик настроен, в меню объекта появится пункт «Постановка на охрану».

# ![](images/drex_kak_postavit_obekt_na_okhranu_custom.png)   ![](images/drex_kak_postavit_obekt_na_okhranu_custom_2.png)

Также для работы функции в системе должны быть созданы шаблоны команд с названиями arm и disarm. Заранее их [настройте](kak-postavit-obekt-na-okhranu.html#Как_настроить_шаблоны_команд) в веб-интерфейсе и тогда появятся команды для постановки на охрану:

-   Arm — постановка на охрану
    
-   Disarm — снятие с охраны
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_3.png)  ![](images/drex_kak_postavit_obekt_na_okhranu_custom_4.png)

При смене статуса охраны рядом с объектом в списке появится соответствующая иконка:

![](images/drex_kak_postavit_obekt_na_okhranu_custom_5.png) — объект на охране

![](images/drex_kak_postavit_obekt_na_okhranu_custom_6.png) — объект снят с охраны

![Как поставить объект на охрану](images/drex_kak_postavit_obekt_na_okhranu_screen.png)  ![Как поставить объект на охрану](images/drex_kak_postavit_obekt_na_okhranu_screen_2.png)

## Как настроить шаблоны команд

Шаблоны команд настраиваются в веб-интерфейсе PILOT:

1\. Откройте кабинет пользователя

2\. Перейдите в раздел «Основные»

3\. Нажмите на значок «Команды»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_7.png)

3\. Откроется окно, в котором можно создавать шаблоны команд.

![](images/drex_kak_postavit_obekt_na_okhranu_custom_8.png)

### Как создать шаблон команды

1\. Нажмите «Добавить команду»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_9.png)

2\. Выберите объект, для которого создаётся команда

3\. Нажмите ![](images/drex_kak_postavit_obekt_na_okhranu_custom_10.png)

![](images/drex_kak_postavit_obekt_na_okhranu_custom_11.png)

3\. Укажите параметры:

-   Тип команды — GRPS
    
-   Вид команды — SMS\_VIA\_GPRS
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_12.png)

4\. В поле «СМС» введите текст команды, например: setdigout 0 — снятие с охраны

![](images/drex_kak_postavit_obekt_na_okhranu_custom_13.png)

5\. При необходимости включите флажок hex, если команда должна отправляться в HEX-формате

6\. Нажмите «Сохранить как шаблон» и задайте имя

![](images/drex_kak_postavit_obekt_na_okhranu_custom_14.png)

Имена шаблонов должны быть указаны строго:

-   arm — постановка на охрану
    
-   disarm — снятие с охраны
    
    Названия пишутся с маленькой буквы. Именно по этим названиям приложение находит и выполняет команды.
    

## Примеры команд

Постановка на охрану — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Устройство</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команды</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Снятие с охраны — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Устройство</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Шаблон команды</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>
