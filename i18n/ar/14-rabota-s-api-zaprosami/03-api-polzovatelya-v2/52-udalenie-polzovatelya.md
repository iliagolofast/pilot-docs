---
title: "حذف مستخدم"
---

تحذف واجهة API هذه مستخدمًا موجودًا في نظام PILOT بحسب معرّفه.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

DELETE

### معلمات الطلب

-   cmd=remove\_user — أمر حذف المستخدم
    
-   user\_id — معرّف المستخدم المطلوب حذفه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها (اختياري)
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_user&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success remove"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم حول نتيجة الإجراء
