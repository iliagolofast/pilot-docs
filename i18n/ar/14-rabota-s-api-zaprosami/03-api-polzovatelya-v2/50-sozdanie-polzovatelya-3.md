---
title: "إنشاء مستخدم"
---

تتيح واجهة API هذه إنشاء مستخدم جديد في PILOT بالمعلمات المحددة: اسم الدخول وكلمة المرور والدور وبيانات الاتصال.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معلمات الطلب

cmd=create\_user — أمر إنشاء مستخدم

login — اسم الدخول للمستخدم الجديد

password — كلمة مرور المستخدم

name — اسم المستخدم

phone — رقم هاتف المستخدم

email — البريد الإلكتروني للمستخدم

role\_id — دور المستخدم: 0 — Admin، 1 — User

vehicles — قائمة المركبات المتاحة (المعرّفات ID أو العدد)

folders — قائمة المجلدات المتاحة (المعرّفات ID أو العدد)

-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

<table><tbody><tr><td><span></span></td><td><div>يجب أن يتضمن الطلب اسم الدخول وكلمة المرور الخاصين بالمسؤول الذي ينشئ المستخدم.</div></td></tr></tbody></table>

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=create_user&amp;login=TestAPI3&amp;password=123456&amp;name=Test API&amp;role_id=1&amp;phone=789995&amp;email=testapi5@mailinator.com&amp;vehicles=15&amp;folders=5&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success create user: 48"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم، وتتضمن معرّف ID المستخدم المنشأ
