---
title: "Додаткові JSON-конфігурації ретрансляцій"
---

Деякі протоколи ретрансляції підтримують додаткові параметри налаштування через поле Json config. За допомогою JSON-конфігурації можна змінювати склад даних, що передаються, використовувати оброблені значення датчиків, перейменовувати поля, фільтрувати пакети та налаштовувати спеціальні сценарії передавання даних.

Підтримувані параметри залежать від вибраного протоколу ретрансляції.

JSON-конфігурація вказується в полі Json config під час створення або редагування ретрансляції.

![Додаткові JSON-конфігурації ретрансляцій](images/drex_dopolnitelnye_json_konfiguratsii_retranslyatsij_screen.png)

## Wialon Retranslator

### Передавання оброблених значень датчиків

Дає змогу передавати в ретрансляцію значення датчиків після обробки в системі PILOT.

Наприклад, можна передавати значення датчика рівня палива вже після застосування тарування.

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "fuel_1": 135785,</span></div><div><span>&nbsp; &nbsp; "NameSensor": 228</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — список датчиків, значення яких необхідно брати з налаштованих датчиків об’єкта
    
-   fuel\_1 — ім’я параметра, який передаватиметься в ретрансляцію
    
-   135785 — ID датчика об’єкта в системі
    

ID датчика можна переглянути в налаштуваннях датчиків об’єкта.

Особливості:

-   Для коректної роботи датчиків рівня палива має бути налаштоване тарування.
    
-   Значення, які не потрапляють у діапазон тарування, передаються у вихідному вигляді.
    
-   Наприклад, замість літрів може бути передано «сире» значення 65530.
    

### Фільтрація та обробка датчиків

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1370805,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1370806</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2",</span></div><div><span>&nbsp; &nbsp; "temp_01": "temp1"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; "temp_2": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 100,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — дає змогу використовувати значення вказаних датчиків об’єкта.
    
-   tags\_rewrite — дає змогу перейменовувати параметри перед надсиланням.
    

Приклад:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

У цьому разі параметр temp\_2 буде надіслано як temp2.

-   sensors\_filter — дає змогу відфільтровувати значення датчиків.
    

Підтримувані параметри:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип даних. Наразі підтримується int</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Мінімально допустиме значення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимально допустиме значення</span></div></td></tr></tbody></table>

Приклад:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Фільтрація працює для датчиків, що передають цілочисельні значення.

-   sensors\_notuse — дає змогу виключити датчики з передавання.
    

Приклад:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Такий конфіг виключить указані датчики з даних, що надсилаються.

<table><tbody><tr><td><span></span></td><td><div>Налаштування датчиків, виконані в системі PILOT, не впливають на ретрансляцію через цей механізм. Усі параметри передавання необхідно задавати в Json config.</div></td></tr></tbody></table>

## Фільтрація пакетів

Дає змогу не надсилати пакети, що відповідають певним умовам.

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

-   packet\_filter — не надсилає пакет, якщо вказаний параметр має задане значення.
    

Приклад:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Якщо параметр Valid дорівнює 0, пакет не буде надіслано.

Можна вказати кілька умов.

-   keys\_to\_skip — не надсилає пакет, якщо в ньому присутній указаний ключ.
    

Приклад:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Якщо пакет містить поле HardVersion, його буде пропущено.

Можна вказати кілька ключів.

## Wialon IPS і Wialon IPS v2

### Перейменування параметрів

Дає змогу замінити ім’я параметра перед надсиланням.

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

У цьому прикладі параметр Vsourse буде надіслано як pwr\_ext.

### Передавання IButton у тілі пакета

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "IButton": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "tcp_box"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Принцип роботи

Якщо для параметра IButton указано тип tcp\_box, значення ідентифікатора буде передано в тілі пакета. Якщо параметр відсутній, IButton не буде додано в пакет і буде передано порожнє значення.

Це налаштування використовується для передавання ідентифікатора водія поза стандартним блоком параметрів.

### Блок inputs

Дає змогу формувати додаткові входи на підставі значень датчиків.

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "value": false,</span></div><div><span>&nbsp; &nbsp; &nbsp; "myval": false</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Параметри блока inputs

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Мінімально допустиме значення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимально допустиме значення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; value</span></div></td><td colspan="1" rowspan="1"><div><span>Якщо вказано true, у пакет передаватиметься фактичне значення датчика. Якщо параметр відсутній або вказано false, використовується стандартна логіка формування пакета</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; myval</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дає змогу підставити власне значення замість значення датчика під час виконання умови</span></div></td></tr></tbody></table>

**Приклад спрощеного налаштування**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Якщо значення датчика потрапляє в діапазон від 1 до 1, у пакет буде передано значення 1.

Механізм використовується для дублювання стану датчиків у бітовому вигляді.

Наприклад, для передавання стану дверей через блок inputs.

## Wialon Retranslator, Galileo і EGTS

### Перейменування полів

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0",</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Дає змогу замінити назви полів перед надсиланням.

Наприклад:

-   temperature → galileo\_temp\_0
    
-   digital → galileo\_in\_2
    

### Збереження логів ретрансляції

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "save_data_for_report": "1"</span></div><div><span>}</span></div></td></tr></tbody></table>

Вмикає збереження даних ретрансляції для подальшого формування звітів і діагностики

### Генерація температурних даних

**Приклад**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "temperature_data_generator": {</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2",</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Налаштування використовується для спеціальних сценаріїв.

Під час виконання заданої умови система може автоматично формувати значення температурних датчиків.

### Параметри

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; DOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Датчик, що контролюється</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; closed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Значення, за якого виконується умова</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_sensors</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список температурних датчиків</span></div></td></tr></tbody></table>

Функціональність реалізована для спеціальних інтеграційних сценаріїв і використовується лише за наявності відповідних вимог з боку системи, що приймає.
