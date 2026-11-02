---
title: "Editor de campos del vehículo"
---

El **editor de campos** es una herramienta que permite a los usuarios modificar o gestionar los campos de datos. Por ejemplo, en un tipo de texto o en una tabla, el editor de campos puede utilizarse para cambiar las propiedades de un campo, como su tamaño, el tipo de datos que contiene o la forma en que se muestra.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom.png)

Vista de los ajustes en la interfaz de usuario.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom_2.png)

Al editar un campo, se puede cambiar su tipo seleccionando el necesario de la lista propuesta.

<table><tbody><tr><td><span></span></td><td><div><span>Tenga cuidado: al editar un campo, el texto de la propiedad <strong>name </strong>debe introducirse solo con letras latinas en minúscula.</span></div><div><span>Por ejemplo, si el nombre del campo (fieldLabel) tiene el valor "fieldLabel":"MVA Number", en <strong>name</strong> se puede escribir así: "name":"mvanumber".</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>Si necesita que el campo sea obligatorio, copie y pegue <strong>"allowBlank":false:</strong></span></div><div><span>{"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span><strong>Campo de texto</strong> (Text field) {"fieldLabel":"AS400 Status","name":"as400_status","xtype":"textfield"}</span></div><div><span><strong>Campo numérico</strong> (Number field) {"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div><div><span><strong>Campo con lista (Combobox) </strong>{"fieldLabel":"Vehicle Colour","name":"colour","xtype":"combobox","store":[["0","Unknown"],["1","White"],["2","Black"]]}</span></div><div><span><strong>Campo de fecha (Date field)</strong> {"fieldLabel":"Vehicle Installation date","name":"vehinsdate","xtype":"datefield","format":"d.m.Y"}</span></div><div><span><strong>Casilla de verificación (Checkbox) </strong>{"fieldLabel":"Example text","name":"exampletext","xtype":"checkbox"}</span></div></td></tr></tbody></table>

-   **fieldLabel** \- nombre del campo;
    
-   **name** - identificador del elemento del formulario;
    
-   **xtype** \- tipo de campo;
    
-   **allowBlank** - campo obligatorio;
    
-   **format** - formato de fecha;
    
-   **store** - elementos de la lista, donde "1" es el identificador del elemento en la lista y "White" es el nombre del elemento en la lista;
