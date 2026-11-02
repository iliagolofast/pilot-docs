---
title: "ربط عقد بمركبة"
---

يربط هذا API عقدًا بمركبة، مع تحديد رقم لوحتها وتاريخ بدء سريان العقد واسمه والمسافة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=link\_contract — أمر ربط العقد
    
-   PlateNum — رقم لوحة المركبة
    
-   Date — وقت بدء سريان العقد (Unix timestamp)
    
-   Name — اسم العقد
    
-   Distance — المسافة (مثل المسافة المقطوعة بموجب العقد)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=link_contract&amp;PlateNum=test12345&amp;Distance=1111&amp;Date=1623927270&amp;Name=1212&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "The linking is successful"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم بنتيجة الإجراء
