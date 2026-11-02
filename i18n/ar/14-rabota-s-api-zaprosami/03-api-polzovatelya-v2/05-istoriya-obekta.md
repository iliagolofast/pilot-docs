---
title: "سجل الكائن"
---

يعيد هذا API سجل حركة المركبة عن الفترة المحددة: المسارات مع معلومات عن المسافة المقطوعة ووقت التشغيل والتوقفات وإحداثيات البداية والنهاية وغيرها.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### معاملات الطلب

للحصول على البيانات يجب تنفيذ طلب مع المصادقة وتحديد الدالة والمعاملات:

-   Username — اسم المستخدم
    
-   Password — كلمة المرور
    
-   functionName=api\_objecthistory — أمر الحصول على سجل الكائن
    
-   parameters — سلسلة بمعاملات الطلب بالصيغة:
    
    IMEI,FROM\_DATETIME,TO\_DATETIME، حيث:
    
-   IMEI — IMEI الكائن
    
-   FROM\_DATETIME — تاريخ/وقت بداية الفترة
    
-   TO\_DATETIME — تاريخ/وقت نهاية الفترة
    

صيغة البيانات المطلوبة — مصفوفة مسارات الكائن عن الفترة المحددة.

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objecthistory</div><div>parameters=352016704092097,2025-11-21 04:07:03,2025-11-23 04:07:03</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"FLCNSMD": 0,</div><div>&nbsp;"ENDTM": "2025-11-21 19:05:30",</div><div>&nbsp;"MILEGND": 106286.11,</div><div>&nbsp;"ENDLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"IDLDRTN": "00:00:00",</div><div>&nbsp;"CNT": 1,</div><div>&nbsp;"WRKNGDRTN": "07:47:22",</div><div>&nbsp;"MILEGN": 826.37,</div><div>&nbsp;"DRVR": "",</div><div>&nbsp;"startlatitude": 24.399892,</div><div>&nbsp;"OBJTID": 1344487,</div><div>&nbsp;"WRKNGSTRTTM": "2025-11-21 11:18:08",</div><div>&nbsp;"endlongitude": 48.20568,</div><div>&nbsp;"startlongitude": 39.644265,</div><div>&nbsp;"STPDRTN": "00:12:28",</div><div>&nbsp;"DY": "2025-11-21",</div><div>&nbsp;"endlatitude": 29.960238,</div><div>&nbsp;"OBJCTNME": "5209 ب د م",</div><div>&nbsp;"WRKNGSTRTLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"MXSPDP": 136</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

تعيد استجابة طلب API مصفوفة مسارات عن الفترة المحددة. يصف كل عنصر في المصفوفة مسارًا واحدًا ويحتوي على:

-   FLCNSMD — استهلاك الوقود في هذا المسار
    
-   ENDTM — وقت انتهاء المسار
    
-   MILEGND — إجمالي المسافة المقطوعة عند نهاية المسار
    
-   ENDLCTN — عنوان نقطة نهاية المسار
    
-   IDLDRTN — إجمالي وقت التشغيل على وضع الخمول (idle) في هذا المسار
    
-   CNT — الرقم التسلسلي (الفهرس) للمسار خلال اليوم
    
-   WRKNGDRTN — إجمالي وقت تشغيل المحرك / الإشعال في وضع «التشغيل»
    
-   MILEGN — المسافة المقطوعة ضمن هذا المسار
    
-   DRVR — اسم السائق
    
-   startlatitude — خط عرض نقطة بداية المسار
    
-   startlongitude — خط طول نقطة بداية المسار
    
-   endlatitude — خط عرض نقطة نهاية المسار
    
-   endlongitude — خط طول نقطة نهاية المسار
    
-   OBJTID — المعرّف الداخلي للكائن
    
-   WRKNGSTRTTM — وقت أول تشغيل للإشعال في هذا المسار
    
-   STPDRTN — إجمالي وقت التوقفات داخل المسار
    
-   DY — تاريخ المسار
    
-   OBJCTNME — اسم الكائن
    
-   WRKNGSTRTLCTN — عنوان نقطة بداية المسار
    
-   MXSPDP — أقصى سرعة تم بلوغها في هذا المسار
