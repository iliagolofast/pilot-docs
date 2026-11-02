---
title: "Налаштування ретрансляції в РНИС"
---

Щоб налаштувати передавання даних з об’єктів моніторингу в Єдину регіональну навігаційно-інформаційну систему (РНИС) Москви, виконайте такі кроки:

### 1\. Налаштування ретрансляції в системі моніторингу PILOT

1\. Зайдіть в адміністративну панель

2\. Перейдіть на вкладку «Машини»

3\. Знайдіть потрібний об’єкт, клацніть на ньому правою кнопкою миші та виберіть у меню «Ретрансляція»

**![](images/drex_nastrojka_retranslyatsii_v_rnis_custom.png)**

4. У вікні, що відкрилося, натисніть кнопку додавання ретрансляції ![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_2.png)

**![Налаштування ретрансляції в РНИС](images/drex_nastrojka_retranslyatsii_v_rnis_screen.png)**

5\. У вікні «Конфігурація» заповніть поля для налаштування ретрансляції в РНИС:

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_3.png)

Використовуйте такі параметри:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Опис</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значення</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Адреса хоста для надсилання даних (IP або доменне ім’я)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; data.rnis.mos.ru — адреса сервера-отримувача</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Порт, на який надсилаються дані</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4444 — порт для підключення до сервера РНИС</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Формат ретрансляції</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> EGTS — протокол передавання даних</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Зовнішній ідентифікатор пристрою (зазвичай IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>Введіть останні 8 цифр IMEI пристрою.</span></div><div><span>Наприклад, якщо IMEI пристрою 4901542<span>03237518</span>, то в поле зовнішнього ідентифікатора введіть 03237518</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Увімкнено</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Статус активності ретрансляції</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обов’язково поставте галочку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Додаткові параметри у форматі JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; {"skip_auth": true} — стандартна конфігурація для підключення</span></div></td></tr></tbody></table>

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_4.png)

### 2\. Реєстрація терміналу в особистому кабінеті РНИС

1\. Перейдіть в особистий кабінет РНИС на сайті mos.ru.

2\. Під час додавання телематичного терміналу для транспортного засобу вкажіть такі параметри:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Параметр у РНИС</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значення</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Протокол</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; EGTS_O</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Критично важливий параметр. Відповідає формату EGTS,</span></div><div><span>&nbsp;де ідентифікатор передається в полі OID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Ідентифікатор</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; XXXXXXXX</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Той самий номер, що й зовнішній ідентифікатор&nbsp;у&nbsp;системі PILOT (останні 8 цифр IMEI). Наприклад, якщо IMEI пристрою 4901542<span>03237518</span>, то в поле зовнішнього ідентифікатора введіть 03237518</span></div></td></tr></tbody></table>

Схема успішної інтеграції PILOT і РНИС

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;РНИС</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол: EGTS_O</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Зовнішній ID: 03237518</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ідентифікатор: 03237518</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Останні 8 цифр IMEI пристрою мають збігатися як у системі PILOT, так і в системі РНИС. Наприклад, якщо&nbsp;у&nbsp;PILOT вказано 03237518, то в РНИС цей самий ідентифікатор має бути передано в поле OID.</div></td></tr></tbody></table>

Під час реєстрації в РНИС необхідно надати оператору такі дані:

-   Для ідентифікації транспортного засобу передаються останні 8 цифр IMEI в полі OID
    
-   Тип протоколу — в РНИС для вашого підключення має бути вибрано тип EGTS\_O
    
    <table><tbody><tr><td><span></span></td><td><div>Щоб уникнути помилок і забезпечити правильне передавання даних, важливо, щоб налаштування та ідентифікатор, указаний у PILOT, точно збігалися з тим, що використовується в РНИС.</div><ul><li><div>Зовнішній ідентифікатор об’єкта в системі PILOT (останні 8 цифр IMEI пристрою) має бути передано&nbsp;в&nbsp;РНИС у полі OID (у межах протоколу EGTS_O).</div></li><li><div>Протокол передавання даних в обох системах має бути однаковим: EGTS у системі PILOT і EGTS_O у РНИС.</div></li></ul></td></tr></tbody></table>
    

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;РНИС</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Протокол: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Протокол: EGTS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Зовнішній ID: (останні 8 цифр IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип підключення: EGTS_O</span></div></td></tr></tbody></table>
