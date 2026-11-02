---
title: "محرر حقول المركبة"
---

**محرر الحقول** — أداة تتيح للمستخدمين تغيير حقول البيانات أو إدارتها. على سبيل المثال، في نوع نصي أو جدول يمكن استخدام محرر الحقول لتغيير خصائص الحقل، مثل حجمه ونوع البيانات التي يحتويها أو طريقة عرضه.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom.png)

المظهر وفق الإعدادات في واجهة المستخدم.

![](images/drex_redaktor_polej_transportnogo_sredstva_custom_2.png)

عند تحرير الحقل يمكن تغيير نوعه باختيار النوع المطلوب من القائمة المقترحة.

<table><tbody><tr><td><span></span></td><td><div><span>انتبه: عند تحرير الحقل يجب إدخال النص الخاص بالخاصية <strong>name </strong>بأحرف لاتينية صغيرة فقط.</span></div><div><span>على سبيل المثال، إذا كان اسم الحقل (fieldLabel) بالقيمة "fieldLabel":"MVA Number"، فيمكن كتابة <strong>name</strong> هكذا: "name":"mvanumber".</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>إذا لزم جعل الحقل إلزاميًا، فانسخ <strong>"allowBlank":false:</strong> والصقه</span></div><div><span>{"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span><strong>حقل نصي</strong> (Text field) {"fieldLabel":"AS400 Status","name":"as400_status","xtype":"textfield"}</span></div><div><span><strong>حقل رقمي</strong> (Number field) {"fieldLabel":"MVA Number","name":"mvanumber","xtype":"numberfield","allowBlank":false}</span></div><div><span><strong>حقل بقائمة (Combobox) </strong>{"fieldLabel":"Vehicle Colour","name":"colour","xtype":"combobox","store":[["0","Unknown"],["1","White"],["2","Black"]]}</span></div><div><span><strong>حقل تاريخ (Date field)</strong> {"fieldLabel":"Vehicle Installation date","name":"vehinsdate","xtype":"datefield","format":"d.m.Y"}</span></div><div><span><strong>خانة اختيار (Checkbox) </strong>{"fieldLabel":"Example text","name":"exampletext","xtype":"checkbox"}</span></div></td></tr></tbody></table>

-   **fieldLabel** \- اسم الحقل؛
    
-   **name** - معرّف عنصر النموذج؛
    
-   **xtype** \- نوع الحقل؛
    
-   **allowBlank** - حقل إلزامي؛
    
-   **format** - صيغة التاريخ؛
    
-   **store** - عناصر القائمة، حيث "1" معرّف العنصر في القائمة، و"White" اسم العنصر في القائمة؛
