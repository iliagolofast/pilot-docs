---
title: "إنشاء سائق"
---

تتيح واجهة API هذه إضافة سائق جديد إلى النظام أو تحديث بيانات سائق موجود. وباستخدامها يمكنك تحديد الاسم الكامل ورمز iButton ومعلومات الاتصال ورقم رخصة القيادة وقائمة الكائنات التي سيتمكن السائق من الوصول إليها.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = drivers\_add — أمر إضافة سائق أو تحديثه
    
-   name — اسم السائق (الاسم الكامل)
    
-   code — رمز iButton الخاص بالسائق (إلزامي)
    
-   description — وصف السائق (اختياري)
    
-   phone — رقم هاتف السائق (اختياري)
    
-   license — رقم رخصة القيادة (اختياري)
    
-   email — عنوان البريد الإلكتروني
    
-   access — قائمة معرّفات الكائنات (agent\_id) المسموح للسائق بالوصول إليها، مفصولة بفواصل
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

<table><tbody><tr><td><span></span></td><td><div>إذا كان سائق بهذه المعلمات موجودًا في النظام بالفعل، فسيتم تحديث بياناته. وإن لم يكن موجودًا، فسيتم إنشاء سائق جديد</div></td></tr></tbody></table>

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_add&amp;name=NewDriverName&amp;code=123456&amp;description=DESCR&amp;phone=122212343&amp;license=rrr3335552&amp;email=new@email.com&amp;access=1122,3344&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; "id": 16990,</div><div>&nbsp;&nbsp; &nbsp; "name": "NewDriverName",</div><div>&nbsp;&nbsp; &nbsp; "code": "123456",</div><div>&nbsp;&nbsp; &nbsp; "description": "DESCR",</div><div>&nbsp;&nbsp; &nbsp; "phone": "122212343",</div><div>&nbsp;&nbsp; &nbsp; "license": "rrr3335552",</div><div>&nbsp;&nbsp; &nbsp; "email": "new@email.com",</div><div>&nbsp;&nbsp; &nbsp; "access": [1122, 3344]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   id — المعرّف الفريد للسائق
    
-   name — الاسم الكامل للسائق
    
-   code — رمز iButton الخاص بالسائق
    
-   description — وصف السائق
    
-   phone — رقم الهاتف
    
-   license — رقم رخصة القيادة
    
-   email — عنوان البريد الإلكتروني
    
-   access — قائمة معرّفات الكائنات المسموح بالوصول إليها
