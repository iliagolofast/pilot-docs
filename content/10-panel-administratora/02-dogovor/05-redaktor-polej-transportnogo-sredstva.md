---
title: "Редактор полей транспортного средства"
source: redaktor_polej_transportnogo_sredstva.html
---

**Редактор полей** — это инструмент , который позволяет пользователям изменять или управлять полями данных. Например, в текстовом типе или таблице редактор полей может использоваться для изменения свойств поля, таких как его размер, тип данных, которые он содержит, или способ его отображения.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom.png)

Вид по  настройкам в  пользовательском  интерфейсе.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom_2.png)

При редактировании поля можно поменять его тип, выбрав нужный из предложенного списка.

<table><tbody><tr><td><span></span></td><td><div><span>Будьте внимательны, при редактировании поля текст для свойства <strong>name </strong>нужно вводить только латинскими буквами в нижнем регистре.</span></div><div><span>Например, если название поля (fieldLabel) имеет значение "fieldLabel":"MVA Number", то в <strong>name</strong> можно написать так: "name":"mvanumber".</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>Если нужно сделать поле обязательным, тогда копируем и вставляем <strong>"allowBlank":false:</strong></span></div><div><span>{"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span><strong>Текстовое поле</strong> (Text field) {"fieldLabel":"AS400 Status","name":"as400_status","xtype":"textfield"}</span></div><div><span><strong>Числовое поле</strong> (Number field) {"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div><div><span><strong>Поле со списком(Combobox) </strong>{"fieldLabel":"Vehicle Colour","name":"colour","xtype":"combobox","store":[["0","Unknown"],["1","White"],["2","Black"]]}</span></div><div><span><strong>Поле даты (Date field)</strong> {"fieldLabel":"Vehicle Installation date","name":"vehinsdate","xtype":"datefield","format":"d.m.Y"}</span></div><div><span><strong>Чекбокс (Checkbox) </strong>{"fieldLabel":"Example text","name":"exampletext","xtype":"checkbox"}</span></div></td></tr></tbody></table>

-   **fieldLabel** \- название поля;
    
-   **name** - идентификатор элемента формы;
    
-   **xtype** \- тип поля;
    
-   **allowBlank** - обязательное поле;
    
-   **format** - формат даты;
    
-   **store** - элементы списка, где "1" - идентификатор элемента в списке, "White" - название элемента в списке;
