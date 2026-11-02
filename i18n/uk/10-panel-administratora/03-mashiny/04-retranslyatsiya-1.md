---
title: "Ретрансляція"
---

**Налаштування ретрансляції об’єкта моніторингу.**

1\. Виберіть об’єкт моніторингу.

2\. Виберіть з контекстного меню "Ретрансляція".

![](images/drex_retranslyatsiya_1_custom.png)

![](images/drex_retranslyatsiya_1_custom_2.png)

-   **Host -** адреса хоста для ретрансляції даних за вказаним протоколом (у вигляді IP-адреси або доменного імені).
    
-   **Port -** порт, на який дані ретранслюються за вказаним протоколом.
    
-   **Format** - формат ретрансляції (виберіть з випадного списку).
    
-   **External id -** ідентифікатор ретрансляції об’єкта моніторингу (зазвичай використовується блок imei, останні цифри imei).
    
-   **Шлях -** у разі використання доменного імені це поле містить додаткові параметри.
    
-   **USPW -** якщо потрібна ідентифікація, це поле міститиме ім’я користувача та пароль.
    
-   **Time zone -** часовий пояс у форматі GMT з випадного списку.
    
-   **Обмеження швидкості -** поле для вказівки максимальної швидкості передавання даних.
    
-   **Увімкнено -** кнопка для ввімкнення повторного передавання.
    
-   **Json config** - додаткова конфігурація для налаштування ретрансляції у форматі json (наприклад, для відображення параметрів за різними датчиками).
    
-   **Коментар -** додаткова інформація про ретрансляцію.
    
    ![](images/drex_retranslyatsiya_1_custom_3.png)
    

<table><tbody><tr><td><span></span></td><td><div><span><strong>Реалізація для “Wialon retrains”, “galileo”, “egts”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0", &nbsp; //підмінюємо назву поля "temperature" із сирих даних,</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2" &nbsp; //на значення "galileo_temp_0",</span></div><div><span>&nbsp; },&nbsp; &nbsp; // і відправляємо в ретрансляцію&nbsp;</span></div><div><span>&nbsp;</span></div><div><span>&nbsp; "save_data_for_report": "1",&nbsp; &nbsp; //зберігаємо логи ретрансляції для звіту</span></div><div><span>&nbsp; &nbsp; "temperature_data_generator": {&nbsp; &nbsp; //за станом датчика дверей&nbsp; "DOS" =0</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2", &nbsp; &nbsp; //генерувати випадкове значення від 4 до 8 для поля "temperature_sensors".&nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,&nbsp; &nbsp; //реалізовано за конкретним запитом</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div><div>&nbsp;</div><div><span><strong>Реалізація для “Wialon&nbsp; ips” і “Wialon ipsv2”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": { &nbsp; //підмінюємо назву поля "Vsourse" із сирих даних</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",&nbsp; //на значення "pwr_ext", і відправляємо через ретрансляцію&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

**Масова ретрансляція для об’єктів.**

**Виберіть кілька об’єктів на вкладці Машини.**

-   Натисніть на кнопку "Ретрансляція".
    
-   Додайте параметри.
    
-   Внесіть один імей і після додавання в інтерфейсі користувача змініть цей параметр у кожному об’єкті на дійсний.
    

**![](images/drex_retranslyatsiya_1_custom_4.png)**

**![](images/drex_retranslyatsiya_1_custom_5.png)**

**![](images/drex_retranslyatsiya_1_custom_6.png)**
