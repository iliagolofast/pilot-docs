---
title: "حذف سياج جغرافي"
---

تحذف واجهة API هذه السياج الجغرافي من النظام. عند حذف السياج الجغرافي تُزال تلقائيًا جميع ارتباطاته بالمركبات.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=geofencedel — أمر حذف السياج الجغرافي
    
-   zone\_id — المعرّف الداخلي للسياج الجغرافي
    
-   external\_id — المعرّف الخارجي للسياج الجغرافي (اختياري)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencedel&amp;zone_id=473989&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"data": {</div><div>&nbsp;"zones_deleted": [</div><div>&nbsp;473989</div><div>&nbsp;]</div><div>&nbsp;}</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   message — رسالة الخادم حول نتيجة الإجراء
    
-   data.zones\_deleted — مصفوفة معرّفات (zone\_id) السياجات الجغرافية المحذوفة التي نجحت العملية بشأنها
