---
title: "Редактор полів транспортного засобу"
---

**Редактор полів** — це інструмент, який дає змогу користувачам змінювати або керувати полями даних. Наприклад, у текстовому типі або таблиці редактор полів може використовуватися для зміни властивостей поля, таких як його розмір, тип даних, які він містить, або спосіб його відображення.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom.png)

Вигляд за налаштуваннями в користувацькому інтерфейсі.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom_2.png)

Під час редагування поля можна змінити його тип, вибравши потрібний із запропонованого списку.

<table><tbody><tr><td><span></span></td><td><div><span>Будьте уважні, під час редагування поля текст для властивості <strong>name </strong>потрібно вводити лише латинськими літерами в нижньому регістрі.</span></div><div><span>Наприклад, якщо назва поля (fieldLabel) має значення "fieldLabel":"MVA Number", то в <strong>name</strong> можна написати так: "name":"mvanumber".</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>Якщо потрібно зробити поле обов’язковим, тоді копіюємо та вставляємо <strong>"allowBlank":false:</strong></span></div><div><span>{"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span><strong>Текстове поле</strong> (Text field) {"fieldLabel":"AS400 Status","name":"as400_status","xtype":"textfield"}</span></div><div><span><strong>Числове поле</strong> (Number field) {"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div><div><span><strong>Поле зі списком (Combobox) </strong>{"fieldLabel":"Vehicle Colour","name":"colour","xtype":"combobox","store":[["0","Unknown"],["1","White"],["2","Black"]]}</span></div><div><span><strong>Поле дати (Date field)</strong> {"fieldLabel":"Vehicle Installation date","name":"vehinsdate","xtype":"datefield","format":"d.m.Y"}</span></div><div><span><strong>Чекбокс (Checkbox) </strong>{"fieldLabel":"Example text","name":"exampletext","xtype":"checkbox"}</span></div></td></tr></tbody></table>

-   **fieldLabel** \- назва поля;
    
-   **name** - ідентифікатор елемента форми;
    
-   **xtype** \- тип поля;
    
-   **allowBlank** - обов’язкове поле;
    
-   **format** - формат дати;
    
-   **store** - елементи списку, де "1" - ідентифікатор елемента у списку, "White" - назва елемента у списку;
