---
title: "المسافة المقطوعة خلال فترة محددة"
---

يعيد هذا API المسافة المقطوعة وساعات تشغيل محرك المركبة عن الفترة الزمنية المحددة.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معاملات الطلب

-   cmd=istatus — أمر الحصول على المسافة المقطوعة
    
-   imei — معرّف الكائن في النظام
    
-   start — بداية الفترة (Unix timestamp)
    
-   stop — نهاية الفترة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;imei=6794i&amp;start=1664917200&amp;stop=1665003600&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "run": 126.79500000000007,</div><div>&nbsp; "run_by_can": 0,</div><div>&nbsp; "motorhours": 9897,</div><div>&nbsp; "unixtimestamp_start": 1664917200,</div><div>&nbsp; "unixtimestamp_stop": 1665003600</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   run — المسافة المقطوعة خلال الفترة، كم
    
-   run\_by\_can — المسافة المقطوعة بحسب بيانات CAN، كم
    
-   motorhours — ساعات تشغيل المحرك خلال الفترة، بالثواني
    
-   unixtimestamp\_start — بداية الفترة
    
-   unixtimestamp\_stop — نهاية الفترة
