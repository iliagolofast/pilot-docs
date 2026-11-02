---
title: "Как привязать алгоритм к уведомлению"
source: kak_privyazat_algoritm_k_uvedomleniyu.html
---

В этой статье расскажем, как настроить работу алгоритмов через уведомления.

Вы узнаете:

— [как привязать алгоритм к уведомлению, чтобы он автоматически срабатывал при наступлении событий](kak-privyazat-algoritm-k-uvedomleniyu.html#автоматическое_срабатывание_алгоритма)

— [как создать уведомление с алгоритмом для ручной генерации событий](kak-privyazat-algoritm-k-uvedomleniyu.html#ручная_генерация_события)

Чтобы алгоритм начал работать и реагировал на события, его нужно привязать к уведомлению.

<table><tbody><tr><td><span></span></td><td><div>Для работы привязки в договоре должен быть подключён модуль <a href="../uvedomleniya/index.html"><span>«Уведомления»</span></a>.</div></td></tr></tbody></table>

## Привязка алгоритма к событию

Такой алгоритм будет автоматически срабатывать при выполнении условий и приходить в «Ситуационный центр».

1\. В верхней панели нажмите иконку ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom.png)и откройте «Настройки договора». Перейдите во вкладку «Уведомления».

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. Нажмите «Добавить» ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), чтобы создать новое уведомление

3\. Привяжите алгоритм

1) В окне настроек уведомления нажмите «Привязка алгоритма»

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen.png)

2) В списке выберите нужный алгоритм

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

3) Кликните по алгоритму — откроется его схема с блоками

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_5.png)

4\. Настройте блоки алгоритма

1) Дважды кликните по нужному блоку

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2) Заполните текст и выберите теги событий

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_7.png)

3) Нажмите «ОК»

### Как создать тег для блока

Теги помогают быстро понять суть события и визуально выделить его в списке.

Если нужного тега нет:

1\. В поле «Тег» нажмите ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2\. В окне тегов нажмите ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), чтобы добавить новый тег в список

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_8.png)

3\. Укажите название тега и выберите цвет

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_9.png)

4\. Сохраните — тег появится в списке и станет доступен для выбор

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_10.png)

### Настройка блока Webhook

Блок Webhook передаёт сведения о событии из PILOT во внешнюю систему, например в CRM, диспетчерскую систему или корпоративное приложение. Запрос отправляется, когда выполнение алгоритма доходит до этого блока. Подробнее о принципе работы и настройке Webhook-уведомлений читайте [в этой статье](../uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html).

Если в алгоритме используется блок Webhook:

1\. Выберите блок Webhook на схеме

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_11.png)

2\. Дважды кликните по нему — откроются его настройки

3\. Нажмите значок редактирования рядом с названием блока ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_12.png)

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_2.png)

4\. Заполните параметры в окне Webhook Details

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_13.png)

**URL**

Укажите адрес внешней системы, на который PILOT должен отправить данные. Адрес необходимо получить у администратора или разработчика принимающей системы.

**Header (Заголовок)**

Укажите заголовки запроса. По умолчанию используется передача данных в формате JSON:

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; "ContentType: application/json"</div><div>]</div></td></tr></tbody></table>

Изменяйте заголовки только в том случае, если принимающая система требует другой формат данных или дополнительные параметры.

**Body (Тело запроса)**

Укажите данные, которые нужно передать. По умолчанию используется следующий шаблон:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "agent_id": "%AGENTID%",</div><div>&nbsp; "vehiclenumber": "%VEHNUM%",</div><div>&nbsp; "ts": "%TS%",</div><div>&nbsp; "lat": "%LAT%",</div><div>&nbsp; "lon": "%LON%",</div><div>&nbsp; "speed": "%SPEED%",</div><div>&nbsp; "data": "%DATA%",</div><div>&nbsp; "zone": "%ZONE%",</div><div>&nbsp; "driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

Вместо переменных, заключённых в знаки %, система автоматически подставляет сведения из события. Например, вместо %SPEED% будет передана скорость объекта, а вместо %VEHNUM% — номер транспортного средства.

Тело запроса можно изменить: удалить ненужные поля, добавить собственные поля или использовать другие доступные переменные.

Сохраняйте корректный формат JSON:

"название\_поля": "%ПЕРЕМЕННАЯ%"

Если структура JSON или запись переменной содержит ошибку, внешняя система может не получить или не обработать запрос.

**Допустимые переменные**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Переменная</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Что передаёт</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID аккаунта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID объекта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер машины</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Метка времени (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата и время</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Долгота</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Скорость</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробег (по датчику)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Данные уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Геозона</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID первой геозоны</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название первой геозоны</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водитель</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимальная скорость (для уведомлений о превышении)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Длительность превышения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Установленный лимит скорости (Контроль скорости)</span></div></td></tr></tbody></table>

Набор доступных переменных может зависеть от типа уведомления. Например, переменные %MAXSPEED%, %DUR% и %SPEEDLIMIT% предназначены для уведомлений о превышении скорости.

После заполнения параметров нажмите «Сохранить», затем подтвердите настройку блока кнопкой «ОК». Если в разных ветвях алгоритма используются разные блоки Webhook, настройте каждый из них отдельно.

### Настройка окна обработки события

Вы можете настроить, как будет выглядеть [окно обработки события](kak-obrabotat-sobytie.html#Окно_«Обработка_события») для оператора:

-   В окне привязки алгоритма нажмите «Настройки»
    

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_3.png)

2\. Нажмите ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), чтобы добавить элементы:

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_4.png)  
Что можно настроить:

-   Тип элемента — вид блока (например, plaintext — обычный текст)
    
-   Заголовок — название блока
    
-   Текст — информация для оператора
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_14.png)

Например:

1\. Добавьте строку типа plaintext

2\. В поле «Заголовок» напишите, что это за блок (например: «Информация по событию»)

3\. В поле «Текст» добавьте информацию, которую оператор должен увидеть (например: «Проверьте температуру в кузове и свяжитесь с водителем»).

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_15.png)

Чтобы добавить раздел с информацией о транспортном средстве, нажмите на иконку автомобиля. Появится новый блок с типом vehicle, в котором можно настроить заголовок и текст.

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_5.png)

1 — Добавить информацию о ТС. Чтобы добавить раздел с данными о водителе, нажмите на иконку водительского удостоверения. Появится новый блок с типом driver. В этом блоке можно задать заголовок и текст.

2 — Добавить информацию о водителе

После настройки нажмите «ОК» — оператор будет видеть форму именно в таком виде при обработке события.

## Завершение настройки уведомления

-   В окне «Настройка уведомлений» укажите:
    
-   Название уведомления
    
-   Объект
    
-   Тип уведомления — Control room (GARM)
    

-   [Группу](kak-nastroit-parametry-sobytij.html#группы_событий)
    
-   Условия уведомления (например, параметр «Температура» и его порог)
    

**![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_6.png)**

2\. Нажмите «Сохранить»

**![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_16.png)**

3\. Уведомление с привязанным алгоритмом появится в списке и будет приходить в «Ситуационный центр», когда условия выполняются

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_17.png)

## Алгоритм для ручной генерации события

Ручная генерация нужна, когда событие не приходит автоматически — например, для внештатных ситуаций, тестирования или фиксации события оператором вручную.

### Как создать уведомление для ручной генерации

1\. Откройте  [«Настройки договора»](../../nastrojki-dogovora-2/index.html) и выберите вкладку «Уведомления»

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. Во вкладке «Уведомления» нажмите ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

3\. В настройках уведомления укажите:

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_7.png)

1 — Тип уведомления «Ситуационный центр» (GARM)

2 — Уведомление только для ручной генерации

-   Объект
    
-   Название уведомления
    
-   Тип уведомления — Ситуационный центр (GARM)
    
-   Группу
    
-   Галочку «Только для ручной генерации»
    
    4\. Нажмите «Привязка алгоритма»
    
    5\. В открывшемся окне алгоритмов выберите тот, который хотите привязать к уведомлению, и нажмите «ОК»
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

5\. Сохраните уведомление

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_18.png)

### Как сгенерировать событие вручную

1\. Выберите объект в основном списке

2\. Кликните по нему правой кнопкой мыши и выберите «Сгенерировать событие»

![Как привязать алгоритм к уведомлению](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_8.png)

3\. Выберите тип уведомления для ручной генерации и введите текст события

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_19.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_20.png)

4\. Событие появится на [панели](kak-obrabotat-sobytie.html#Панель_Control_room) «Ситуационный центр» и будет обработано по алгоритму
