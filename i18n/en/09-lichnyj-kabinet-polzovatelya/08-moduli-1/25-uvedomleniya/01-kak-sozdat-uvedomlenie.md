---
title: "How to create a notification"
---

After the “Notifications” module is activated, a new “Notifications” tab appears in the contract settings.

Through this tab, you can configure the events for which the system sends notifications to users.

<table><tbody><tr><td><div>1. Go to <a href="../../nastrojki-dogovora-2/index.html" target="_blank"><span>“Contract settings”</span></a><span> and o</span>pen the “Notifications” tab</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![How to create a notification](images/drex_kak_sozdat_uvedomlenie_screen.png)

<table><tbody><tr><td><div>2. Click the button <img alt="" src="images/drex_kak_sozdat_uvedomlenie_custom.png"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

3\. The notification settings window opens

![How to create a notification](images/drex_kak_sozdat_uvedomlenie_screen_2.png)

## Basic notification parameters

<table><tbody><tr><td><div><strong>1. Template</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Select a notification template if you want to use ready-made settings.

![](images/drex_kak_sozdat_uvedomlenie_custom_2.png)

A template is created after you configure a notification — to do this, fill in all the parameters and click [“Save as template”](kak-sozdat-uvedomlenie.html#Сохранить_как_шаблон). After that, you can reuse it.

<table><tbody><tr><td><div><strong>2. Selection by objects or tags</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Specify which objects the notification applies to:

-   By objects — select specific vehicles or equipment
    
-   By tags — use this if you need to apply the notification to a whole group of objects at once
    

![](images/drex_kak_sozdat_uvedomlenie_custom_3.png)

<table><tbody><tr><td><div><strong>3. Type and name</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Set the notification name — it helps you quickly find it in the list and understand which event it is responsible for.

![](images/drex_kak_sozdat_uvedomlenie_custom_4.png)

Select how you want to receive notifications:

-   SMS — a message to your phone
    
-   Push — a notification in the mobile app
    
-   Email — an email message
    
-   Alert — a pop-up [notification in the interface](kak-prosmatrivat-uvedomleniya.html) of the system
    
-   Control Room — the event is displayed in the [“Control Room”](../situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)
    
-   [Webhook](kak-rabotat-s-webhook-uvedomleniyami.html) — sending data to an external service
    
-   Command to device — sending a command to the tracker
    
-   Command template — sending a preconfigured [command from a template](../komandy-1.html) to the device
    
-   Telegram — a notification through the [Telegram bot](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

<table><tbody><tr><td><span></span></td><td><div>To receive notifications by Email, <a href="kak-nastroit-poluchenie-uvedomlenij.html" target="_blank"><span>confirm</span></a> your email address in your personal settings in advance.</div></td></tr></tbody></table>

If necessary, you can set an alternative message text — it is sent when the notification is triggered.

If the “Control Room” module is connected, the [“Algorithm binding”](../situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html) button becomes available. With it, you can configure automatic event handling scenarios — for example, define a sequence of actions that runs when a certain event occurs.

<table><tbody><tr><td><div><strong>4. Notification time</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

In the “Notification time” block, you can set the conditions under which the notification works:

— select the time zone

— specify the days of the week

— set time intervals

![](images/drex_kak_sozdat_uvedomlenie_custom_5.png)

<table><tbody><tr><td><div><strong>5. Additional information</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Select the parameters you need — they are added to the notification text:

— driving speed

— the object's driver

— the geofence the object is in (if the [“Geofences”](../geozony-2/index.html) module is connected)

— map link (Google)

— direct link to the event

— the event address

The direct link to the event opens the object on the map from the notification. After following it, you will see the object's current position and its main parameters.

![](images/drex_kak_sozdat_uvedomlenie_custom_6.png)

The link is valid for a limited time, after which it becomes unavailable.

![](images/drex_kak_sozdat_uvedomlenie_custom_7.png)

<table><tbody><tr><td><div><strong>6. Notification types and conditions</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

When creating a notification, select the event on which it should be triggered.

![](images/drex_kak_sozdat_uvedomlenie_custom_8.png)

 For example:

— speeding

— sensor triggering

— parking or movement

— loss of connection

— other system events

Each notification type has its own trigger conditions. For example:

— speed threshold

— event duration

For more about notification types and conditions, read the separate [article](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html).

<table><tbody><tr><td><div><strong>7. Geofence parameters</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>This setting is available if the&nbsp;<a href="../geozony-2/index.html"><span>“Geofences”</span></a> module is connected.</div></td></tr></tbody></table>

In the notification settings, you can specify in which geofences the notification should be triggered.

![](images/drex_kak_sozdat_uvedomlenie_custom_9.png)

To do this, select one or more geofences from the list or select all of them at once with the button ![](images/drex_kak_sozdat_uvedomlenie_custom_10.png).

Then select where exactly the notification should be triggered:

-   Everywhere — the notification is sent regardless of where the object is located
    
-   In selected zones — the notification is sent only if the object is inside the selected geofences
    
-   Outside selected zones — the notification is sent only if the object is outside the selected geofences
    

<table><tbody><tr><td><div>After configuring all notification parameters, click “Save”.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![How to create a notification](images/drex_kak_sozdat_uvedomlenie_screen_3.png)

<table><tbody><tr><td><div>If you want to save the configured notification as a template so you can later use it as a template when configuring a new notification, click “Save as template”.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>If you enable the “For all users” parameter, the notification is sent to all users of the account.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

All created notifications are displayed on the “Notifications” tab in “Contract settings”. To learn how to work with this tab, read the article [“How to work with the notification list”](kak-rabotat-so-spiskom-uvedomlenij.html).

![](images/drex_kak_sozdat_uvedomlenie_custom_11.png)

<table><tbody><tr><td><span></span></td><td><div>Watch an <a href="https://youtu.be/O4y0YhNp6b4"><span>example of notification setup</span></a> in a short YouTube video:</div><div><div><a href="https://youtu.be/O4y0YhNp6b4" title="560_315">https://youtu.be/O4y0YhNp6b4</a></div></div></td></tr></tbody></table>
