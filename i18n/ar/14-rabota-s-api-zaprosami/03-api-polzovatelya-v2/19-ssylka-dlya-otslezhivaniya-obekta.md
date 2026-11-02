---
title: "رابط لتتبع الكائن"
---

يحصل هذا API على رابط مؤقت لتتبع الكائن على الخريطة مع التفعيل وإلغاء التفعيل بحسب السياجات الجغرافية المحددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=get\_temp\_link — أمر API للحصول على رابط مؤقت
    
-   imei — معرّف الكائن (المركبة) في النظام
    
-   startgeo — السياج الجغرافي لتفعيل الرابط
    
-   stopgeo — السياج الجغرافي لإلغاء تفعيل الرابط
    
-   max\_duration — أقصى مدة صلاحية للرابط بالدقائق (الافتراضي 24 ساعة)
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_temp_link&amp;imei=356307045913463&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API&amp;max_duration=800</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/monitor_token.php?token=1f87a19c068ad47f3f769dc151527794&amp;lang=en&amp;zoom=10&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API</div></td></tr></tbody></table>

تُعاد في الاستجابة رابط مباشر إلى الخريطة برمز مؤقت. يراعي الرابط السياجات الجغرافية المحددة للتفعيل (startgeo) ولإلغاء التفعيل (stopgeo)
