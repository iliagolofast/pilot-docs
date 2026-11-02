---
title: "إنشاء مستخدم"
---

ينشئ هذا API مستخدمًا جديدًا في PILOT ويحدد بياناته الأساسية: اسم المستخدم وكلمة المرور والاسم والدور والهاتف والبريد الإلكتروني والعقود المتاحة.

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

• cmd=create\_user  — أمر إنشاء مستخدم

• login — اسم مستخدم المستخدم الجديد

• password — كلمة مرور المستخدم الجديد

• name — اسم المستخدم

• role\_id — معرّف ID دور المستخدم

• phone — رقم هاتف المستخدم

• email — البريد الإلكتروني للمستخدم

• accounts — قائمة معرّفات ID العقود التي يجب أن يحصل المستخدم على وصول إليها. إذا كان هناك عدة عقود فاذكرها مفصولة بفواصل

• account\_id — معرّف ID العقد الذي يُنشأ فيه المستخدم

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=create_user&amp;login=TestAPI13&amp;password=Qwerty123&amp;name=test Api 13&amp;role_id=1&amp;phone=789995&amp;email=testapi13@mailinator.com&amp;accounts=1106,1131&amp;account_id=1003</div></td></tr></tbody></table>

### الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "Success create user: 729",</span></div><div><span>&nbsp; "user_id": 729</span></div><div><span>}</span></div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

• code — رمز نتيجة تنفيذ الأمر. تعني القيمة 0 نجاح التنفيذ

• msg — رسالة نصية بنتيجة تنفيذ الأمر

• user\_id — معرّف ID المستخدم الذي تم إنشاؤه
