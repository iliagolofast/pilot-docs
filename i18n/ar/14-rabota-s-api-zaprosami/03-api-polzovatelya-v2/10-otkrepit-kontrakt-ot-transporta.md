---
title: "فك ارتباط عقد بمركبة"
---

يزيل هذا API ارتباط عقد قائم بالمركبة المحددة.

## كيفية الحصول على البيانات

### الطريقة

DELETE

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

• cmd=unlink\_contract — أمر فك ارتباط العقد

• PlateNum — رقم لوحة المركبة

• node — رقم العقدة التي يجب تنفيذ الأمر عليها (اختياري)

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=unlink_contract&amp;PlateNum=test12345&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,&nbsp; &nbsp;</div><div>&nbsp; "msg": "Deletion is successful"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

• code — رمز النتيجة (0 — عملية ناجحة)

• msg — رسالة الخادم بنتيجة الإجراء
