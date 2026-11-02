---
title: "قائمة مجلدات مستخدم آخر"
---

تعيد واجهة API هذه المجلدات التي يملك المستخدم المحدد صلاحية الوصول إليها.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معلمات الطلب

-   cmd=get\_folders\_user — أمر الحصول على قائمة المجلدات
    
-   user\_id — معرّف المستخدم (إلزامي عند طلب مجلدات مستخدم آخر)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

عند إرسال طلب POST يمكن تمرير المعلمات في نص الطلب بصيغة JSON

### أمثلة على الطلبات

طلب GET:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?</span>cmd=get_folders_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

طلب POST:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_folders_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   data — مصفوفة بمجلدات المستخدم:
    
-   id — معرّف المجلد
    
-   name — اسم المجلد
