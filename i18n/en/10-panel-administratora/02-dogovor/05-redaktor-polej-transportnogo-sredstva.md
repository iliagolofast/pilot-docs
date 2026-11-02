---
title: "Vehicle field editor"
---

The **field editor** is a tool that lets Users change or manage data fields. For example, in a text type or a table, the field editor can be used to change field properties such as its size, the type of data it contains, or how it is displayed.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom.png)

The view according to the settings in the User interface.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom_2.png)

When editing a field, you can change its type by selecting the one you need from the list provided.

<table><tbody><tr><td><span></span></td><td><div><span>Be careful: when editing a field, the text for the <strong>name </strong>property must be entered only in lowercase Latin letters.</span></div><div><span>For example, if the field name (fieldLabel) has the value "fieldLabel":"MVA Number", then in <strong>name</strong> you can write: "name":"mvanumber".</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>If you need to make a field required, copy and paste <strong>"allowBlank":false:</strong></span></div><div><span>{"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span><strong>Text field</strong> (Text field) {"fieldLabel":"AS400 Status","name":"as400_status","xtype":"textfield"}</span></div><div><span><strong>Number field</strong> (Number field) {"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div><div><span><strong>Drop-down field (Combobox) </strong>{"fieldLabel":"Vehicle Colour","name":"colour","xtype":"combobox","store":[["0","Unknown"],["1","White"],["2","Black"]]}</span></div><div><span><strong>Date field (Date field)</strong> {"fieldLabel":"Vehicle Installation date","name":"vehinsdate","xtype":"datefield","format":"d.m.Y"}</span></div><div><span><strong>Checkbox (Checkbox) </strong>{"fieldLabel":"Example text","name":"exampletext","xtype":"checkbox"}</span></div></td></tr></tbody></table>

-   **fieldLabel** \- the field name;
    
-   **name** - the form element identifier;
    
-   **xtype** \- the field type;
    
-   **allowBlank** - a required field;
    
-   **format** - the date format;
    
-   **store** - the list items, where "1" is the item identifier in the list and "White" is the item name in the list;
