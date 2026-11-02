---
title: "Дополнительные JSON-конфигурации ретрансляций"
source: dopolnitelnye_json_konfiguratsii_retranslyatsij.html
---

Некоторые протоколы ретрансляции поддерживают дополнительные параметры настройки через поле Json config. С помощью JSON-конфигурации можно изменять состав передаваемых данных, использовать обработанные значения датчиков, переименовывать поля, фильтровать пакеты и настраивать специальные сценарии передачи данных.

Поддерживаемые параметры зависят от выбранного протокола ретрансляции.

JSON-конфигурация указывается в поле Json config при создании или редактировании ретрансляции.

![Дополнительные JSON-конфигурации ретрансляций](images/drex_dopolnitelnye_json_konfiguratsii_retranslyatsij_screen.png)

## Wialon Retranslator

### Передача обработанных значений датчиков

Позволяет передавать в ретрансляцию значения датчиков после обработки в системе PILOT.

Например, можно передавать значение датчика уровня топлива уже после применения тарировки.

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "fuel_1": 135785,</span></div><div><span>&nbsp; &nbsp; "NameSensor": 228</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — список датчиков, значения которых необходимо брать из настроенных датчиков объекта
    
-   fuel\_1 — имя параметра, который будет передаваться в ретрансляцию
    
-   135785 — ID датчика объекта в системе
    

ID датчика можно посмотреть в настройках датчиков объекта.

Особенности:

-   Для корректной работы датчиков уровня топлива должна быть настроена тарировка.
    
-   Значения, которые не попадают в диапазон тарировки, передаются в исходном виде.
    
-   Например, вместо литров может быть передано сырое значение 65530.
    

### Фильтрация и обработка датчиков

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1370805,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1370806</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2",</span></div><div><span>&nbsp; &nbsp; "temp_01": "temp1"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; "temp_2": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 100,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — позволяет использовать значения указанных датчиков объекта.
    
-   tags\_rewrite — позволяет переименовывать параметры перед отправкой.
    

Пример:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

В этом случае параметр temp\_2 будет отправлен как temp2.

-   sensors\_filter — позволяет отфильтровывать значения датчиков.
    

Поддерживаемые параметры:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип данных. В настоящее время поддерживается int</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Минимально допустимое значение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимально допустимое значение</span></div></td></tr></tbody></table>

Пример:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Фильтрация работает для датчиков, передающих целочисленные значения.

-   sensors\_notuse — позволяет исключить датчики из передачи.
    

Пример:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Такой конфиг исключит указанные датчики из отправляемых данных.

<table><tbody><tr><td><span></span></td><td><div>Настройки датчиков, выполненные в системе PILOT, не влияют на ретрансляцию через данный механизм. Все параметры передачи необходимо задавать в Json config.</div></td></tr></tbody></table>

## Фильтрация пакетов

Позволяет не отправлять пакеты, соответствующие определенным условиям.

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

-   packet\_filter — не отправляет пакет, если указанный параметр имеет заданное значение.
    

Пример:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Если параметр Valid равен 0, пакет не будет отправлен.

Можно указать несколько условий.

-   keys\_to\_skip — не отправляет пакет, если в нем присутствует указанный ключ.
    

Пример:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Если пакет содержит поле HardVersion, он будет пропущен.

Можно указать несколько ключей.

## Wialon IPS и Wialon IPS v2

### Переименование параметров

Позволяет заменить имя параметра перед отправкой.

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

В данном примере параметр Vsourse будет отправлен как pwr\_ext.

### Передача IButton в теле пакета

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "IButton": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "tcp_box"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Принцип работы

Если для параметра IButton указан тип tcp\_box, значение идентификатора будет передано в теле пакета. Если параметр отсутствует, IButton не будет добавлен в пакет и будет передано пустое значение.

Данная настройка используется для передачи идентификатора водителя вне стандартного блока параметров.

### Блок inputs

Позволяет формировать дополнительные входы на основании значений датчиков.

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "value": false,</span></div><div><span>&nbsp; &nbsp; &nbsp; "myval": false</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Параметры блока inputs

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Минимально допустимое значение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимально допустимое значение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; value</span></div></td><td colspan="1" rowspan="1"><div><span>Если указано true, в пакет будет передаваться фактическое значение датчика. Если параметр отсутствует или указан false, используется стандартная логика формирования пакета</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; myval</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Позволяет подставить собственное значение вместо значения датчика при выполнении условия</span></div></td></tr></tbody></table>

**Пример упрощенной настройки**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Если значение датчика попадает в диапазон от 1 до 1, в пакет будет передано значение 1.

Механизм используется для дублирования состояния датчиков в битовом виде.

Например, для передачи состояния дверей через блок inputs.

## Wialon Retranslator, Galileo и EGTS

### Переименование полей

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0",</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Позволяет заменить названия полей перед отправкой.

Например:

-   temperature → galileo\_temp\_0
    
-   digital → galileo\_in\_2
    

### Сохранение логов ретрансляции

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "save_data_for_report": "1"</span></div><div><span>}</span></div></td></tr></tbody></table>

Включает сохранение данных ретрансляции для последующего формирования отчетов и диагностики

### Генерация температурных данных

**Пример**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "temperature_data_generator": {</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2",</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Настройка используется для специальных сценариев.

При выполнении заданного условия система может автоматически формировать значения температурных датчиков.

### Параметры

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; DOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Контролируемый датчик</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; closed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Значение, при котором выполняется условие</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_sensors</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Список температурных датчиков</span></div></td></tr></tbody></table>

Функциональность реализована для специальных интеграционных сценариев и используется только при наличии соответствующих требований со стороны принимающей системы.
