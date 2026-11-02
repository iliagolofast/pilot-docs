---
title: "تغيير وصول المستخدم إلى العقود"
---

يغيّر هذا API قائمة العقود التي يملك مستخدم PILOT حق الوصول إليها.

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

• cmd=update\_user\_accounts\_map — أمر تغيير وصول المستخدم إلى العقود

• accounts — قائمة معرّفات ID العقود التي يجب أن يملك المستخدم حق الوصول إليها. إذا كان هناك عدة عقود فاذكرها مفصولة بفواصل

• user\_id — معرّف ID المستخدم الذي يتغيّر وصوله

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087&amp;user_id=535</div></td></tr></tbody></table>

إذا كنت بحاجة إلى تحديد عدة عقود:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087,1131&amp;user_id=535</div></td></tr></tbody></table>

### الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

• code — رمز نتيجة تنفيذ الأمر. تعني القيمة 0 نجاح التنفيذ

• msg — رسالة نصية بنتيجة تنفيذ الأمر
