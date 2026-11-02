---
title: "How to work with the notification list"
---

All created notifications are displayed on the “Notifications” tab in the “Contract settings”.

![](images/drex_kak_rabotat_so_spiskom_uvedomlenij_custom.png)

Here you can:

— [view the list of all created notifications](kak-rabotat-so-spiskom-uvedomlenij.html#Список_уведомлений)

— [create new ones](kak-sozdat-uvedomlenie.html)

— [edit existing notifications and delete the ones you no longer need](kak-rabotat-so-spiskom-uvedomlenij.html#Редактировать_уведомления)

— [work with notification templates](kak-rabotat-so-spiskom-uvedomlenij.html#Шаблоны_уведомлений)

— [apply notifications to new objects automatically](kak-rabotat-so-spiskom-uvedomlenij.html#Автоматическое_добавление_уведомлений)

## Notification list

The table shows all notifications available in the current account.

![](images/drex_kak_rabotat_so_spiskom_uvedomlenij_custom_2.png)

For each notification the table shows:

-   ID — the internal notification identifier
    
-   User — the user who created the notification
    
-   Name — the notification name
    
-   Type — the type of event the notification works on
    
-   Date — the date and time the notification was created
    
-   Vehicle — the objects the notification is linked to
    

The following actions are available on the right of each row:

![](images/drex_kak_rabotat_so_spiskom_uvedomlenij_custom_3.png) Edit — open the notification for editing

![](images/drex_kak_rabotat_so_spiskom_uvedomlenij_custom_4.png) Delete — delete the notification

## Notification templates

The tab provides notification export and import functions. You can use notifications that are already set up as templates and transfer them to another account.

![How to work with the notification list](images/drex_kak_rabotat_so_spiskom_uvedomlenij_screen.png)

1 — Export notifications

2 — Import notifications

### Exporting notifications

When you export, the current list of notifications is saved to a JSON file.

1\. Click “Export notifications”

2\. The system creates a file in JSON format

You can use this file as a template — for example, to quickly set up notifications in another account.

During export, the following are automatically excluded from the file: vehicles, geofences, phone numbers, email addresses. This is because another account may have different objects and contacts. After import, you will need to specify this data manually.

### Importing notifications

Import lets you load previously saved notifications from a JSON file.

Before importing, choose the suitable option:

-   Do not delete old notifications — the new ones are added to the existing ones
    
-   Delete old notifications — the current settings are replaced with the imported ones
    

How to import:

1\. Select the file to upload

2\. Click “Import”

![](images/drex_kak_rabotat_so_spiskom_uvedomlenij_custom_5.png)

## Automatic notification assignment

The “Enable automatic notification assignment” option determines whether notifications are applied automatically to new objects.

![How to work with the notification list](images/drex_kak_rabotat_so_spiskom_uvedomlenij_screen_2.png)

If the option is enabled, all created notifications are automatically assigned to new objects that you add to the account.

If the option is disabled, you will need to add new objects to notifications manually.
