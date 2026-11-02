---
title: "Настройка ретрансляции на платформу WMS"
source: nastrojka_retranslyatsii_na_platformu_wms.html
---

Разберём, как настроить интеграцию, которая передаёт данные с GPS-трекеров из системы PILOT на внешнюю платформу WMS по протоколу «Муниципалитет Эр-Рияд».

Настройка состоит из двух этапов:

1\. Настройка ретрансляции в административной панели PILOT

2\. Настройка датчиков объектов

### 1\. Настройка ретрансляции в админпанели

1\. Зайдите в административную панель

2\. Перейдите во вкладку «Машины»

3\. Найдите нужный объект, кликните правой кнопкой мыши на него и выберите в меню «Ретрансляция»

**![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom.png)**

4. В открывшемся окне нажмите кнопку добавления ретрансляции ![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_2.png)

**![Настройка ретрансляции на платформу WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen.png)**

5\. В окне «Конфигурация» заполните поля для настройки ретрансляции:

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_3.png)

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Описание</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Значение</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Хост</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Адрес хоста для отправки данных (IP или доменное имя)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span>Например, admin-dev-wms.iotsquared.io&nbsp;(хост указан в протоколе)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Порт</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Порт, на который отправляются данные</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;443</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Формат ретрансляции</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>RIYADH municipality — выберите из выпадающего списка</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Внешний идентификатор устройства (обычно IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Введите&nbsp;IMEI&nbsp;устройства&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Путь</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Путь запроса, содержащий x-token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; /api/v1/integrations/http/${httpid}&nbsp;(где ${httpid} — это x-token)</span></div><div><span>&nbsp; Например, /api/v1/integrations/http/32fc9bec-967839-467890-56a0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;USPW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Имя пользователя и пароль, если требуется авторизация</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Временная зона</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Часовой пояс</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;UTC</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Ограничение скорости</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Ограничение скорости</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Включено</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Статус активности ретрансляции</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поставьте галочку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Дополнительные параметры в формате JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Укажите название партнёра</span></div></td></tr></tbody></table>

Пример конфигурации

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_4.png)

### 2\. Настройка датчиков

Для корректной интеграции с WMS на объекте должны быть установлены обязательные датчики:

— датчик GPS-антенны

— датчик пробега CAN

— специальный датчик веса (Weight)

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_5.png)

Чтобы устройство Teltonika передавало CAN-пробег (показания одометра), нужно включить этот параметр с помощью команды.

1\. Зайдите в административную панель

2\. Перейдите во вкладку «Машины»

3\. Найдите нужный объект, кликните правой кнопкой мыши на него и выберите в меню «Команды»

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_6.png)

4.  В окне «Команды» выберите команду из раскрывающегося списка

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_7.png)

5\. Укажите параметры команды и нажмите кнопку «Отправить»

![Настройка ретрансляции на платформу WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen_2.png)

1 — Указать параметры команды

2 — Открыть список команд

-   setparam 50160:1 — включение передачи данных с одометра
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_8.png)

Если нужно установить начальное значение пробега, то есть не с нуля:

-   setparam 11807:\[значение\]— установить пробег, не с нуля
    
    Например, setparam 11807:2729, где 2729 — начальное значение одометра в километрах
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_9.png)

Эти команды настраивают устройство Teltonika на получение данных о пробеге через CAN-шину автомобиля. После настройки пробег будет автоматически передаваться в систему.
