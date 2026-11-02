---
title: "Как работать с Webhook-уведомлениями"
source: kak_rabotat_s_webhook_uvedomleniyami_.html
---

Webhook — это способ автоматической передачи данных  о событиях из системы во внешний сервис или на ваш сервер.

Например, если транспорт превысил скорость, система сама отправит запрос на указанный вами адрес и передаст информацию о событии.

### Как работают Webhook-уведомления

1\. Вы указываете URL-адрес — куда отправлять данные

2\. При срабатывании уведомления система отправляет POST-запрос с JSON

3\. Ваш сервер принимает данные и обрабатывает их так, как нужно

Перед началом убедитесь, что:

— URL-адрес корректный и доступен

— сервер отвечает кодом 200 (OK)

— если сервер не отвечает или возвращает ошибку, адрес временно попадёт в чёрный список

## Как настроить Webhook

1\. Перейдите в [создание](kak-sozdat-uvedomlenie.html) или редактирование уведомления

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom.png)

2\. В блоке «Тип и название» выберите способ отправки Webhook

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_2.png)

3\. Чтобы настроить Webhook-уведомления, нажмите на поле редактирования ![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_3.png)— откроется окно Webhook Details, где задаются параметры отправки данных.

В окне Webhook Details вы увидите три поля:

![Как работать с Webhook-уведомлениями ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen.png)

<table><tbody><tr><td><div><strong>1. URL</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Укажите адрес, на который будут отправляться данные.

<table><tbody><tr><td><div><strong>2. Header (Заголовок)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Здесь указывается формат передаваемых данных. По умолчанию уже стоит нужное значение:

<table><tbody><tr><td><span></span></td><td><div>["ContentType: application/json"]</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>3. Body (Тело запроса)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Это данные, которые будут отправляться. По умолчанию используется такой шаблон:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": "%AGENTID%",</div><div>&nbsp;"vehiclenumber": "%VEHNUM%",</div><div>&nbsp;"ts": "%TS%",</div><div>&nbsp;"lat": "%LAT%",</div><div>&nbsp;"lon": "%LON%",</div><div>&nbsp;"speed": "%SPEED%",</div><div>&nbsp;"data": "%DATA%",</div><div>&nbsp;"zone": "%ZONE%",</div><div>&nbsp;"driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>4. Переменные для тела запроса</strong></div><div>Вы можете изменять или дополнять тело запроса, используя&nbsp;допустимые переменные&nbsp;из списка справа.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Соблюдайте формат записи —&nbsp;"value":&nbsp; "%VALUE%". Если синтаксис будет нарушен, Webhook работать не будет.</div></td></tr></tbody></table>

**Допустимые переменные**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Переменная</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Что передаёт</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID аккаунта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID объекта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер машины</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Метка времени (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата и время</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Долгота</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Скорость</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробег (по датчику)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Данные уведомления</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Геозона</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID первой геозоны</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название первой геозоны</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водитель</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимальная скорость (для уведомлений о превышении)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Длительность превышения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Установленный лимит скорости (Контроль скорости)</span></div></td></tr></tbody></table>

### Как подставить значение датчика

Если нужно передать данные конкретного датчика:

1\. Откройте вкладку [«Датчики»](../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_4.png)

![Как работать с Webhook-уведомлениями ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen_2.png)

2\. Скопируйте точное название датчика

3\. Вернитесь в окно настроек Webhook и в поле Body вставьте переменную в формате: %Название датчика%. Например, если датчик называется Fuel sensor status, напишите %Fuel sensor status%.

### Как получить сырые данные

Можно передавать данные напрямую от устройства:

1\. Перейдите во вкладку [«Точки»](../../obekty-1/menyu-obekta.html#сырые_точки)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_5.png)

2\. Найдите параметр в колонке «Необработанные данные»

3\. Вставьте его в поле Body в окне Webhook  в формате %Имя параметра%. Например, если параметр называется Valid, напишите %Valid%.

## Пример запроса

Когда уведомление сработает, на ваш сервер придут данные примерно в таком виде:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": 4328,</div><div>&nbsp;"ts": 1545254055,</div><div>&nbsp;"data": ["У286НМ 67", "Parkingdur", "2", "1", "мм"]</div><div>}</div></td></tr></tbody></table>

Набор данных зависит от того, какие переменные вы указали в теле запроса и какой тип уведомления настроен.
