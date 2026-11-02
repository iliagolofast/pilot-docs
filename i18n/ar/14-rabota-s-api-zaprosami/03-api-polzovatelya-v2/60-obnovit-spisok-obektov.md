---
title: "تحديث قائمة الكائنات"
---

تمنح واجهة API هذه المستخدم صلاحية الوصول إلى المركبات المختارة فقط.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

POST

### معلمات الطلب

-   cmd=update\_user\_vehicles — أمر تغيير قائمة الكائنات
    
-   vehicles — قائمة معرّفات الكائنات (معرّفات المركبات ID) مفصولة بفواصل.
    
-   user\_id — معرّف المستخدم الذي تُحدَّث صلاحيات وصوله
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_vehicles",</div><div>&nbsp; &nbsp; "vehicles": "2,18",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
