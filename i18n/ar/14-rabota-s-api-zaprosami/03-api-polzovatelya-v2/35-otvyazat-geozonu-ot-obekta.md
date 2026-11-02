---
title: "فك ارتباط سياج جغرافي بكائن"
---

يزيل هذا API ارتباط سياج جغرافي موجود بالمركبة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=geofenceunlink — أمر إزالة ارتباط السياج الجغرافي
    
-   zone\_id — معرّف السياج الجغرافي (إلزامي إذا لم يُحدَّد external\_id)
    
-   external\_id — المعرّف الخارجي للسياج الجغرافي (اختياري، يُتجاهل إذا حُدّد zone\_id)
    
-   agent\_id — معرّف الوكيل (المركبة)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>http://&lt;address&gt;/api/api.php?cmd=geofenceunlink&amp;zone_id=158414&amp;agent_id=66497&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم بنتيجة الإجراء
