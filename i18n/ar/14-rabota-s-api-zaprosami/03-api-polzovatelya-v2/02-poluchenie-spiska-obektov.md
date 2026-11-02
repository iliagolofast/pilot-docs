---
title: "الحصول على قائمة الكائنات"
---

يوفّر هذا API معلومات عن المركبات، بما فيها موقعها الحالي.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### معاملات الطلب

للحصول على البيانات يجب تنفيذ طلب مع المصادقة وتحديد الدالة:

-   Username — اسم المستخدم
    
-   Password — كلمة المرور
    
-   functionName=api\_objectlist — أمر الحصول على قائمة الكائنات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

صيغة البيانات المطلوبة — مصفوفة كائنات المركبات.

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectlist</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016703961657",</div><div>&nbsp;"PLATE": "6561",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 25.9131066,</div><div>&nbsp;"LONGITUDE": 46.4645949</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

تعيد استجابة طلب API مصفوفة كائنات المركبات. يحتوي كل كائن على:

-   IMEI — معرّف جهاز التتبع المركَّب على المركبة
    
-   PLATE — رقم المركبة
    
-   NAME — اسم المركبة
    
-   LATITUDE — خط العرض الحالي لموقع الكائن
    
-   LONGITUDE — خط الطول الحالي لموقع الكائن
