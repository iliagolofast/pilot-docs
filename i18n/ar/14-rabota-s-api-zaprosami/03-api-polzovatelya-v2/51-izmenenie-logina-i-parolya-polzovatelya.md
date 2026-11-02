---
title: "تغيير اسم الدخول وكلمة المرور للمستخدم"
---

تتيح واجهة API هذه تغيير اسم الدخول وكلمة المرور لمستخدم موجود في نظام PILOT.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معلمات الطلب

-   cmd=update\_user\_auth — أمر تعديل بيانات المصادقة
    
-   login — اسم الدخول الجديد للمستخدم
    
-   password — كلمة المرور الجديدة للمستخدم
    
-   user\_id — معرّف المستخدم الذي يجب تغيير بياناته
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=update_user_auth&amp;login=TestAPI&amp;password=qwerty&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم حول نتيجة الإجراء
