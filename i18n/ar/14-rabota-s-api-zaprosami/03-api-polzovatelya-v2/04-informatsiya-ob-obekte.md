---
title: "معلومات عن الكائن"
---

يوفّر هذا API معلومات مفصلة عن مركبة معيّنة.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### معاملات الطلب

للحصول على البيانات يجب تنفيذ طلب مع المصادقة وتحديد الدالة والكائن:

-   Username — اسم المستخدم
    
-   Password — كلمة المرور
    
-   functionName=api\_objectdetails — أمر الحصول على تفاصيل الكائن
    
-   parameters — IMEI الكائن الذي تُطلب تفاصيله
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

صيغة البيانات المطلوبة — كائن مركبة واحد

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectdetails</div><div>parameters=352217706092097</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209 ",</div><div>&nbsp;"INSTALLATIONDATE": "Dec 06, 2023",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API كائنًا بمعلومات عن المركبة:

-   IMEI — معرّف جهاز التتبع المركَّب على المركبة
    
-   PLATE — رقم المركبة
    
-   INSTALLATIONDATE — تاريخ تركيب جهاز التتبع على المركبة
    
-   NAME — اسم المركبة
    
-   LATITUDE — خط العرض الحالي لموقع الكائن
    
-   LONGITUDE — خط الطول الحالي لموقع الكائن
