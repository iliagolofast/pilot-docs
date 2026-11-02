---
title: "قائمة مجلدات المستخدم"
---

تعيد واجهة API هذه قائمة المجلدات التي يملك المستخدم صلاحية الوصول إليها في العقد.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معلمات الطلب

• cmd=get\_folders\_user — أمر الحصول على قائمة المجلدات

عند إرسال طلب POST يمكن تمرير المعلمات في نص الطلب بصيغة JSON

-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>&nbsp;https://&lt;server_address&gt;/api/api.php?cmd=get_folders_user&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

• code — رمز النتيجة (0 — عملية ناجحة)

• msg — رسالة الخادم

• data — مصفوفة بمجلدات المستخدم:

• id — معرّف المجلد

• name — اسم المجلد
