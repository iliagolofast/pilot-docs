---
title: "ربط سياج جغرافي بكائن"
---

يتيح هذا API ربط سياج جغرافي موجود بمركبة مع تحديد معاملات المراقبة، مثل حد السرعة ووقت الخمول والإشعارات.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=geofencelink — أمر ربط السياج الجغرافي
    
-   zone\_id — معرّف السياج الجغرافي (إلزامي إذا لم يُحدَّد external\_id)
    
-   external\_id — المعرّف الخارجي للسياج الجغرافي (اختياري، يُتجاهل إذا حُدّد zone\_id)
    
-   agent\_id — معرّف الوكيل (المركبة)
    
-   idle — مراقبة الخمول داخل السياج الجغرافي بالدقائق (اختياري)
    
-   speedlimit — حد السرعة داخل السياج الجغرافي بالكم/س (اختياري)
    
-   alerts — الإشعارات:
    
-   0 — عدم الإرسال
    
-   1 — الخمول
    
-   2 — عبور الحدود
    
-   3 — الحدود ونقاط العبور الحدودية
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofencelink&amp;zone_id=158414&amp;agent_id=66497&amp;idle=10&amp;speedlimit=80&amp;alerts=0&amp;node=1</div></td></tr></tbody></table>

**الاستجابة**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم بنتيجة الإجراء
