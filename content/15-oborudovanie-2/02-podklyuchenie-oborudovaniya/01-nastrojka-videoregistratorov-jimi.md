---
title: "Настройка видеорегистраторов Jimi"
source: nastrojka_videoregistratorov_jimi.html
---

Видеорегистраторы Jimi настраиваются при помощи текстовых команд. Вы просто отправляете устройству нужную команду — и оно начинает работать так, как нужно вам.

С помощью этих команд можно:

— подключить регистратор к серверу

— указать, куда отправлять видео и данные о поездках

— включить онлайн-трансляцию

— настроить автоматическую загрузку видео при определённых событиях

В этой статье мы разберём команды, которые помогут вам запустить и правильно настроить устройство.

## Основные команды настройки

### 1\. Разрешение подключения к серверу

<table><tbody><tr><td><span></span></td><td><div>COREKITSW,0</div></td></tr></tbody></table>

Эта команда позволяет видеорегистратору подключаться к видеосерверу PILOT. То есть команда активирует возможность работы устройства с платформой.

### 2\. Настройка сервера для телеметрии

<table><tbody><tr><td><span></span></td><td><div>SERVER,1,&lt;доменное имя&gt;,20056</div><div>или</div><div>SERVER,0,&lt;IP-адрес&gt;,20056</div></td></tr></tbody></table>

Здесь указываем сервер, на который будет отправляться телеметрия (данные о движении, скорости, событиях).

-   1 — если используете доменное имя (например: server.example.com)
    
-   0 — если подключаетесь по IP-адресу (например: 192.168.1.100)
    
-   20056— порт для связи
    

### 3\. Настройка сервера для загрузки видео

<table><tbody><tr><td><span></span></td><td><div>UPLOAD,&lt;https://server_address/upload&gt;</div></td></tr></tbody></table>

Адрес сервера, куда будут отправляться видеофайлы, например, при воспроизведении или загрузке событий.

### 4\. Настройка сервера для онлайн-трансляции

<table><tbody><tr><td><span></span></td><td><div>RSERVICE,&lt;rtmp://server_address/live&gt;</div></td></tr></tbody></table>

С помощью этой команды задаётся RTMP-сервер для прямой трансляции видео в реальном времени.

### 5\. Настройка сервера для списка файлов

<table><tbody><tr><td><span></span></td><td><div>FILELIST,&lt;https://server_address/filelist&gt;</div></td></tr></tbody></table>

Адрес, куда регистратор отправляет список доступных видеозаписей.

### 6\. Автоматическая загрузка событийных видео

<table><tbody><tr><td><span></span></td><td><div>UPLOADSW,&lt;A&gt;,&lt;B&gt;</div></td></tr></tbody></table>

С помощью этой команды можно указать, какие именно события должны вызывать автоматическую загрузку видеороликов, и какие камеры при этом использовать.

-   A — событие, при котором будет загружаться видео. Например: CRASH (авария), SOS (тревожная кнопка), OVERSPEED (превышение скорости).
    
-   B — способ загрузки:
    

— OFF — отключить автоматическую загрузку

— ON — загружать видео с обеих камер (фронтальной и внутренней)

— 1 — загружать только видео с фронтальной камеры

— 2 — загружать только видео с внутренней камеры

Например: UPLOADSW,CRASH,ON — при срабатывании события «Авария» регистратор автоматически загрузит видео с обеих камер.

## Список событий

Ниже приведена таблица, где собраны все события, которые может распознать регистратор. Их можно использовать в команде UPLOADSW.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; №</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Код события</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Что означает</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нажатие SOS-кнопки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CRASH</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Авария</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VIBRATE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вибрация / удар</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OVERSPEED</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Превышение скорости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDACC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Резкий разгон</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDDEC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Резкое торможение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDTURN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Резкий поворот</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 8</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DRIVE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Режим движения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 9</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; POWER</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Изменение питания</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VOLTAGELOW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Низкое напряжение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 11</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CLOSEEYES</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Усталость / закрытые глаза</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 12</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; YAWN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Зевота, признак усталости</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 13</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DISTRACTION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водитель отвлёкся</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 14</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SMOKING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Курение за рулём</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 15</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; PHONECALLING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Использование телефона</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 16</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYOFF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Реле выключено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 17</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYRECOVERY</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Реле восстановлено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 18</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; MISSINGFACE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Лицо не обнаружено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 19</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; NOSDCARD</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет SD-карты</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SDCARDMOUNT</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Установлена SD-карта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 21</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OIL</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Событие датчика масла</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OILTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ошибка по маслу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 23</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TEMPTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перегрев двигателя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 24</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ошибка по UART</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 25</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; LANEDEPARTURE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Выезд с полосы</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 26</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VEHICLETOOCLOSE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Слишком близко другое ТС</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 27</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; FORWARDCOLLISION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Риск столкновения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 28</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART_DOOR</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Датчик двери</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 29</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Определение лица (AI)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ошибка распознавания лица</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 31</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Определение ремня безопасности</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 32</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ANWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ремень не пристёгнут</span></div></td></tr></tbody></table>
