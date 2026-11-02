---
title: "حذف بوليصة نقل"
---

تحذف واجهة API هذه بوليصة نقل موجودة خلال فترة زمنية محددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=remove\_waybill — أمر حذف بوليصة النقل
    
-   ts — وقت البداية (Unix timestamp)
    
-   te — وقت الانتهاء (Unix timestamp)
    
-   agent\_id — معرّف الوكيل
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": 1</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = نجاح)
    
-   data — نتيجة الحذف (1 = تم الحذف بنجاح)
