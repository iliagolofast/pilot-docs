---
title: "تعيين سائق على مركبة"
---

تربط واجهة API هذه سائقًا بمركبة محددة باستخدام معرّفها (IMEI) وبطاقة التعريف (المفتاح).

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=linkdriver — أمر API الذي ينفّذ ربط السائق
    
-   imei — المعرّف الفريد للمركبة في النظام
    
-   driver — الاسم الكامل للسائق
    
-   driverkey — رقم مفتاح السائق (بطاقة التعريف)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=linkdriver&amp;imei=548545218454&amp;driver=ADAS+driver&amp;driverkey=89185717259&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": [],</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — نجاح، وأي قيمة أخرى — خطأ)
    
-   data — بيانات إضافية (في هذه الحالة مصفوفة فارغة)
    
-   message — رسالة نصية من الخادم (على سبيل المثال، «success»)
