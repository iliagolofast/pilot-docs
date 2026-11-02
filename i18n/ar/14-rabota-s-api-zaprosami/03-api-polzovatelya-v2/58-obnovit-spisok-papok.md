---
title: "تحديث قائمة المجلدات"
---

تتيح واجهة API هذه تغيير مجموعة المجلدات التي يملك مستخدم محدد صلاحية الوصول إليها.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

POST

### معلمات الطلب

-   cmd=update\_user\_folders — أمر تحديث قائمة المجلدات
    
-   folders — قائمة معرّفات المجلدات ID مفصولة بفواصل، المطلوب إسنادها إلى المستخدم
    
-   user\_id — معرّف المستخدم الذي تُغيَّر مجلداته
    

مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_folders",</div><div>&nbsp; &nbsp; "folders": "1,11",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم حول نتيجة الإجراء
