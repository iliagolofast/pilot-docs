---
title: "Настройка ретрансляции в РНИС"
source: nastrojka_retranslyatsii_v_rnis.html
---

Чтобы настроить передачу данных с объектов мониторинга в Единую региональную навигационно-информационную систему (РНИС) Москвы, выполните следующие шаги:

### 1\. Настройка ретрансляции в системе мониторинга PILOT

1\. Зайдите в административную панель

2\. Перейдите во вкладку «Машины»

3\. Найдите нужный объект, кликните правой кнопкой мыши на него и выберите в меню «Ретрансляция»

**![](images/drex_nastrojka_retranslyatsii_v_rnis_custom.png)**

4. В открывшемся окне нажмите кнопку добавления ретрансляции ![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_2.png)

**![Настройка ретрансляции в РНИС](images/drex_nastrojka_retranslyatsii_v_rnis_screen.png)**

5\. В окне «Конфигурация» заполните поля для настройки ретрансляции в РНИС:

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_3.png)

Используйте следующие параметры:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Описание</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значение</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Адрес хоста для отправки данных (IP или доменное имя)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; data.rnis.mos.ru — адрес сервера-получателя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Порт, на который отправляются данные</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4444 — порт для подключения к серверу РНИС</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Формат ретрансляции</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> EGTS — протокол передачи данных</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Внешний идентификатор устройства (обычно IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>Введите последние 8 цифр IMEI устройства.</span></div><div><span>Например, если IMEI устройства 4901542<span>03237518</span>, то в поле внешнего идентификатора введите 03237518</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Включено</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Статус активности ретрансляции</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обязательно поставьте галочку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Дополнительные параметры в формате JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; {"skip_auth": true} — стандартная конфигурация для подключения</span></div></td></tr></tbody></table>

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_4.png)

### 2\. Регистрация терминала в личном кабинете РНИС

1\. Перейдите в личный кабинет РНИС на сайте mos.ru.

2\. При добавлении телематического терминала для транспортного средства, укажите следующие параметры:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Параметр в РНИС</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значение</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Протокол</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; EGTS_O</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Критически важный параметр. Соответствует форма EGTS,</span></div><div><span>&nbsp;где идентификатор передаётся в поле OID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Идентификатор</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; XXXXXXXX</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Тот же самый номер, что и внешний идентификатор&nbsp;в&nbsp;системе PILOT (последние 8 цифр IMEI). Например, если IMEI устройства 4901542<span>03237518</span>, то в поле внешнего идентификатора введите 03237518</span></div></td></tr></tbody></table>

Схема успешной интеграции PILOT и РНИС

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;РНИС</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол: EGTS_O</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Внешний ID: 03237518</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Идентификатор: 03237518</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Последние 8 цифр IMEI устройства должны совпадать как в системе PILOT, так и в системе РНИС. Например, если&nbsp;в&nbsp;PILOT указано 03237518, то в РНИС этот же идентификатор должен быть передан в поле OID.</div></td></tr></tbody></table>

При регистрации в РНИС необходимо предоставить оператору следующие данные:

-   Для идентификации транспортного средства передаются последние 8 цифр IMEI в поле OID
    
-   Тип протокола — в РНИС для вашего подключения должен быть выбран тип EGTS\_O
    
    <table><tbody><tr><td><span></span></td><td><div>Чтобы избежать ошибок и обеспечить правильную передачу данных, важно, чтобы настройки и идентификатор, указанный в PILOT, точно совпадали с тем, который используется в РНИС.</div><ul><li><div>Внешний идентификатор объекта в системе PILOT (последние 8 цифр IMEI устройства) должен быть передан&nbsp;в&nbsp;РНИС в поле OID (в рамках протокола EGTS_O).</div></li><li><div>Протокол передачи данных в обеих системах должен быть одинаковым: EGTS в системе PILOT и EGTS_O в РНИС.</div></li></ul></td></tr></tbody></table>
    

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;РНИС</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Протокол: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол: EGTS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Внешний ID: (последние 8 цифр IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип подключения: EGTS_O</span></div></td></tr></tbody></table>
