---
title: "IMEI بحسب رقم المركبة"
---

تُستخدم واجهة API هذه لتحديد IMEI الجهاز المركّب على المركبة بحسب رقمها.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=get\_imei — أمر API
    
-   vehnum — رقم المركبة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_imei&amp;vehnum=IX35&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "imei": "356307045913463"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = نجاح)
    
-   msg — رسالة الخادم
    
-   imei — IMEI الجهاز المركّب في المركبة
