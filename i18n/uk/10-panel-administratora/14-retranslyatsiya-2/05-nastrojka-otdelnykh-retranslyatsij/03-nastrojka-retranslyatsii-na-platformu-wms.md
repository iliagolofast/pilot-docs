---
title: "Налаштування ретрансляції на платформу WMS"
---

Розберемо, як налаштувати інтеграцію, яка передає дані з GPS-трекерів із системи PILOT на зовнішню платформу WMS за протоколом «Муніципалітет Ер-Ріяд».

Налаштування складається з двох етапів:

1\. Налаштування ретрансляції в адміністративній панелі PILOT

2\. Налаштування датчиків об’єктів

### 1\. Налаштування ретрансляції в адмінпанелі

1\. Зайдіть в адміністративну панель

2\. Перейдіть на вкладку «Машини»

3\. Знайдіть потрібний об’єкт, клацніть на ньому правою кнопкою миші та виберіть у меню «Ретрансляція»

**![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom.png)**

4. У вікні, що відкрилося, натисніть кнопку додавання ретрансляції ![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_2.png)

**![Налаштування ретрансляції на платформу WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen.png)**

5\. У вікні «Конфігурація» заповніть поля для налаштування ретрансляції:

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_3.png)

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Опис</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значення</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Адреса хоста для надсилання даних (IP або доменне ім’я)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span>Наприклад, admin-dev-wms.iotsquared.io&nbsp;(хост указано в протоколі)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Порт, на який надсилаються дані</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;443</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Формат ретрансляції</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>RIYADH municipality — виберіть з випадного списку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Зовнішній ідентифікатор пристрою (зазвичай IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Введіть&nbsp;IMEI&nbsp;пристрою&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Шлях</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Шлях запиту, що містить x-token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; /api/v1/integrations/http/${httpid}&nbsp;(де ${httpid} — це x-token)</span></div><div><span>&nbsp; Например, /api/v1/integrations/http/32fc9bec-967839-467890-56a0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;USPW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Ім’я користувача та пароль, якщо потрібна авторизація</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Часова зона</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Часовий пояс</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;UTC</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Обмеження швидкості</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Обмеження швидкості</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Увімкнено</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Статус активності ретрансляції</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поставте галочку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Додаткові параметри у форматі JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вкажіть назву партнера</span></div></td></tr></tbody></table>

Приклад конфігурації

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_4.png)

### 2\. Налаштування датчиків

Для коректної інтеграції з WMS на об’єкті мають бути встановлені обов’язкові датчики:

— датчик GPS-антени

— датчик пробігу CAN

— спеціальний датчик ваги (Weight)

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_5.png)

Щоб пристрій Teltonika передавав CAN-пробіг (показання одометра), потрібно ввімкнути цей параметр за допомогою команди.

1\. Зайдіть в адміністративну панель

2\. Перейдіть на вкладку «Машини»

3\. Знайдіть потрібний об’єкт, клацніть на ньому правою кнопкою миші та виберіть у меню «Команди»

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_6.png)

4.  У вікні «Команди» виберіть команду з випадного списку

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_7.png)

5\. Вкажіть параметри команди та натисніть кнопку «Надіслати»

![Налаштування ретрансляції на платформу WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen_2.png)

1 — Вказати параметри команди

2 — Відкрити список команд

-   setparam 50160:1 — увімкнення передавання даних з одометра
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_8.png)

Якщо потрібно встановити початкове значення пробігу, тобто не з нуля:

-   setparam 11807:\[значення\]— встановити пробіг, не з нуля
    
    Наприклад, setparam 11807:2729, де 2729 — початкове значення одометра в кілометрах
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_9.png)

Ці команди налаштовують пристрій Teltonika на отримання даних про пробіг через CAN-шину автомобіля. Після налаштування пробіг автоматично передаватиметься в систему.
