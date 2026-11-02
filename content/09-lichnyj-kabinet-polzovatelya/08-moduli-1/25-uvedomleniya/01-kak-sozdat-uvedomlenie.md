---
title: "Как создать уведомление"
source: kak_sozdat_uvedomlenie.html
---

После активации модуля «Уведомления» в настройках договора появляется новая вкладка «Уведомления».

Через эту вкладку можно настроить события, при которых система будет отправлять уведомления пользователям.

<table><tbody><tr><td><div>1. Перейдите в <a href="../../nastrojki-dogovora-2/index.html" target="_blank"><span>«Настройки договора»</span></a><span> и о</span>ткройте вкладку «Уведомления</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Как создать уведомление](images/drex_kak_sozdat_uvedomlenie_screen.png)

<table><tbody><tr><td><div>2. Нажмите кнопку <img alt="" src="images/drex_kak_sozdat_uvedomlenie_custom.png"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

3\. Откроется окно для настройки уведомления

![Как создать уведомление](images/drex_kak_sozdat_uvedomlenie_screen_2.png)

## Основные параметры уведомления

<table><tbody><tr><td><div><strong>1. Шаблон</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Выберите шаблон уведомления, если хотите использовать уже готовые настройки.

![](images/drex_kak_sozdat_uvedomlenie_custom_2.png)

Шаблон создаётся после настройки уведомления — для этого заполните все параметры и нажмите [«Сохранить как шаблон»](kak-sozdat-uvedomlenie.html#Сохранить_как_шаблон). После этого его можно будет использовать повторно.

<table><tbody><tr><td><div><strong>2. Выбор по объектам или меткам</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Укажите, к каким объектам будет применяться уведомление:

-   По объектам — выберите конкретные транспортные средства или оборудование
    
-   По меткам (тегам) — используйте, если нужно применить уведомление сразу к группе объектов
    

![](images/drex_kak_sozdat_uvedomlenie_custom_3.png)

<table><tbody><tr><td><div><strong>3. Тип и название</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Задайте название уведомления — оно поможет быстро найти его в списке и понять, за какое событие оно отвечает.

![](images/drex_kak_sozdat_uvedomlenie_custom_4.png)

Выберите способ, которым вы хотите получать уведомления:

-   SMS — сообщение на телефон
    
-   Push — уведомление в мобильном приложении
    
-   Email — письмо на электронную почту
    
-   Alert — всплывающее [уведомление в интерфейсе](kak-prosmatrivat-uvedomleniya.html) системы
    
-   Control Room — событие отобразится в [«Ситуационном центре»](../situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)
    
-   [Webhook](kak-rabotat-s-webhook-uvedomleniyami.html) — отправка данных во внешний сервис
    
-   Команда на устройство — отправка команды на трекер
    
-   Шаблон команды — отправка на устройство заранее настроенной [команды по шаблону](../komandy-1.html)
    
-   Telegram — уведомление через [Telegram-бот](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

<table><tbody><tr><td><span></span></td><td><div>Чтобы получать уведомления по Email, заранее <a href="kak-nastroit-poluchenie-uvedomlenij.html" target="_blank"><span>подтвердите</span></a> адрес электронной почты в личных настройках.</div></td></tr></tbody></table>

При необходимости можно задать альтернативный текст сообщения — он будет отправляться при срабатывании уведомления.

Если у вас подключён модуль «Ситуационный центр» (Control Room), станет доступна кнопка [«Привязка алгоритма»](../situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html). С её помощью можно настроить автоматические сценарии обработки событий — например, задать последовательность действий, которая будет выполняться при наступлении определённого события.

<table><tbody><tr><td><div><strong>4. Время уведомления</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

В блоке «Время уведомления» можно задать условия, при которых будет работать уведомление:

— выбрать часовой пояс

— указать дни недели

— задать временные интервалы

![](images/drex_kak_sozdat_uvedomlenie_custom_5.png)

<table><tbody><tr><td><div><strong>5. Дополнительная информация</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Отметьте нужные параметры — они будут добавлены в текст уведомления:

— скорость движения

— водитель объекта

— геозона, в которой находится объект (при подключённом модуле [«Геозоны»](../geozony-2/index.html))

— привязка к карте (Google)

— прямая ссылка на событие

— адрес события

Прямая ссылка на событие открывает объект прямо на карте из уведомления. После перехода вы увидите текущее положение объекта и его основные параметры.

![](images/drex_kak_sozdat_uvedomlenie_custom_6.png)

Ссылка действует ограниченное время, после чего становится недоступной.

![](images/drex_kak_sozdat_uvedomlenie_custom_7.png)

<table><tbody><tr><td><div><strong>6. Типы и условия уведомлений</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

При создании уведомления выберите, при каком событии оно должно срабатывать.

![](images/drex_kak_sozdat_uvedomlenie_custom_8.png)

 Например:

— превышение скорости

— срабатывание датчиков

— стоянка или движение

— потеря связи

— другие события системы

Для каждого типа уведомления задаются свои условия срабатывания. Например:

— порог скорости

— длительность события

Подробнее о типах и условиях уведомлений — читайте в отдельной [статье](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html).

<table><tbody><tr><td><div><strong>7. Параметры геозон</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Эта настройка доступна, если подключён модуль&nbsp;<a href="../geozony-2/index.html"><span>«Геозоны»</span></a>.</div></td></tr></tbody></table>

В настройках уведомления вы можете указать, в каких геозонах должно срабатывать уведомление.

![](images/drex_kak_sozdat_uvedomlenie_custom_9.png)

Для этого выберите одну или несколько геозон из списка или отметьте сразу все с помощью кнопки ![](images/drex_kak_sozdat_uvedomlenie_custom_10.png).

Затем выберите, где именно должно срабатывать уведомление:

-   Везде — уведомление будет приходить независимо от того, где находится объект
    
-   В выбранных зонах — уведомление будет приходить только если объект находится внутри отмеченных геозон
    
-   Вне выбранных зон — уведомление будет приходить только если объект находится за пределами отмеченных геозон
    

<table><tbody><tr><td><div>После настройки всех параметров уведомления нажмите «Сохранить».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Как создать уведомление](images/drex_kak_sozdat_uvedomlenie_screen_3.png)

<table><tbody><tr><td><div>Если вы хотите сохранить настроенное уведомление как шаблон, чтобы потом использовать его в качестве шаблона при настройке нового уведомления, нажмите «Сохранить как шаблон».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>Если включить параметр «Для всех пользователей», уведомление будет отправляться всем пользователям аккаунта.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Все созданные уведомления отображаются во вкладке «Уведомления» в «Настройках договора». Как работать с этой вкладкой, читайте в статье [«Как работать со списком уведомлений»](kak-rabotat-so-spiskom-uvedomlenij.html).

![](images/drex_kak_sozdat_uvedomlenie_custom_11.png)

<table><tbody><tr><td><span></span></td><td><div>Посмотрите <a href="https://youtu.be/O4y0YhNp6b4"><span>пример настройки уведомлений</span></a> в коротком видео на YouTube:</div><div><div><a href="https://youtu.be/O4y0YhNp6b4" title="560_315">https://youtu.be/O4y0YhNp6b4</a></div></div></td></tr></tbody></table>
