---
title: "Ретрансляция"
source: retranslyatsiya_1.html
---

**Настройки ретрансляции объекта мониторинга.**

1\. Выберите  объект мониторинга.

2\. Выберите из контекстного меню "Ретрансляция".

![](images/drex_retranslyatsiya_1_custom.png)

![](images/drex_retranslyatsiya_1_custom_2.png)

-   **Host -** адрес хоста для ретрансляции данных по указанному протоколу (в виде IP-адреса или доменного имени).
    
-   **Port -** порт, на который данные ретранслируются по указанному протоколу.
    
-   **Format** - формат ретрансляции (выберите из выпадающего списка).
    
-   **External id -** идентификатор ретрансляции  объекта мониторинга (обычно используется блок imei, последние цифры imei).
    
-   **Путь -** При использовании доменного имени это поле содержит дополнительные параметры.
    
-   **USPW -** Если требуется идентификация, это поле будет содержать имя пользователя и пароль.
    
-   **Time zone -** часовой пояс в формате GMT из выпадающего списка.
    
-   **Ограничение скорости -** поле для указания максимальной скорости передачи данных.
    
-   **Включено -** кнопка для включения повторной передачи.
    
-   **Json config** - дополнительная  конфигурация для настройки ретрансляции  в формате json (к примеру для отображения параметров по разным датчикам).
    
-   **Комментарий -** дополнительная информация о ретрансляции.
    
    ![](images/drex_retranslyatsiya_1_custom_3.png)
    

<table><tbody><tr><td><span></span></td><td><div><span><strong>Реализация для “Wialon retrains”, “galileo”, “egts”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0", &nbsp; //подменяем название поля "temperature" из сырых данных,</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2" &nbsp; //на значение "galileo_temp_0",</span></div><div><span>&nbsp; },&nbsp; &nbsp; // и отправляем в ретрансляцию&nbsp;</span></div><div><span>&nbsp;</span></div><div><span>&nbsp; "save_data_for_report": "1",&nbsp; &nbsp; //сохраняем логи ретрансляции для отчета</span></div><div><span>&nbsp; &nbsp; "temperature_data_generator": {&nbsp; &nbsp; //по состоянию датчика двери&nbsp; "DOS" =0</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2", &nbsp; &nbsp; //генерировать рандомное значение от 4 до 8 для поля "temperature_sensors".&nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,&nbsp; &nbsp; //реализованно по конкретному запросу</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div><div>&nbsp;</div><div><span><strong>Реализация для “Wialon&nbsp; ips” и “Wialon ipsv2”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": { &nbsp; //подменяем название поля "Vsourse" из сырых данных</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",&nbsp; //на значение "pwr_ext", и отправляем через ретрансляцию&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

**Массовая  ретрансляция   для   объектов.**

**Выберите несколько объектов во вкладке Машины.**

-   Нажмите  на кнопку "Ретрансляция".
    
-   Добавьте параметры.
    
-   Внесите  один имей и после добавления  в  интерфейсе пользователя  измените этот параметр в каждом объекте на действительный.
    

**![](images/drex_retranslyatsiya_1_custom_4.png)**

**![](images/drex_retranslyatsiya_1_custom_5.png)**

**![](images/drex_retranslyatsiya_1_custom_6.png)**
