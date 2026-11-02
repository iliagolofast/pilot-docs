---
title: "Работа с одобренными треками"
source: rabota_s_odobrennymi_trekami.html
---

Этот API помогает работать с утверждёнными треками транспортных средств: устанавливать периоды, получать треки и использовать трек-плеер.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

Параметры передаются через строку запроса методом POST или GET, в зависимости от команды.

Чтобы получить нужные данные, добавьте к адресу запроса параметры. Параметры указываются после знака вопроса «?» и разделяются знаком «&».

-   cmd=set\_approved\_tracks — команда для установки утверждённых периодов
    
-   cmd=get\_approved\_tracks — команда для получения одобренных треков
    
-   veh — государственный номер или идентификатор транспортного средства
    
-   ts — начало периода (timestamp)
    
-   te — конец периода (timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Установить утверждённые периоды

Пример API-запроса

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=set_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=1537952400&amp;node=1</span></div></td></tr></tbody></table>

Ответ на API

<table><tbody><tr><td><span></span></td><td><div>{"code":0,"msg":"ОК обновлено"}</div></td></tr></tbody></table>

### Получить одобренные треки

Пример API-запроса

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;admin_address&gt;<span>/api/api.php?cmd=get_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=153795 2400&amp;node=1</span></div></td></tr></tbody></table>

Ответ на API

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "data":{</div><div>&nbsp; &nbsp; "approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":2.8051348330013,"ts":1537948809,"te":1537949431,"max_speed":"59","avg_speed":26}</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "not_approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":1.8650025635569,"ts":1537945206,"te":1537946030,"max_speed":"40","avg_speed":12},</div><div>&nbsp; &nbsp; &nbsp; {"length":4.1987356239849,"ts":1537948298,"te":1537948798,"max_speed":"65","avg_speed":37}</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   approved— список утверждённых треков
    
-   not\_approved— список треков, которые не были утверждены
    
-   length— длина трека в километрах
    
-   ts— время начала трека (timestamp)
    
-   te— время конца трека (timestamp)
    
-   max\_speed— максимальная скорость на треке
    
-   avg\_speed— средняя скорость
    

### Трек-плеер

Трек-плеер — это веб-сервис, который позволяет визуально просматривать треки транспорта. В отличие от обычного API, он сразу возвращает готовую страницу с картой и треком, а не JSON или XML.

Ссылка для просмотра трека:

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;server_address&gt;<span>/api/track_player.php?login=demo&amp;pass=demo&amp;ts=1536933600&amp;te=1536940800&amp;veh=в848ае199&amp;lang=ru&amp;node=1</span></div></td></tr></tbody></table>

Вы можете использовать URL как iframe src для отображения трека на странице.
