---
title: "حظر الكائنات أو إلغاء حظرها"
---

يحظر هذا API الكائنات أو يلغي حظرها بحسب المعاملات agent\_id أو imei أو account\_id. وبحسب الحالة المُمرَّرة، ستُحظر المركبة أو تُفعَّل. ويمكن تنفيذ الحظر أو إلغاؤه استنادًا إلى معرّفات مثل الوكيل أو IMEI أو رقم العقد.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### الطريقة

POST

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=setvehblock  — أمر حظر المركبة أو إلغاء حظرها.
    
-   status —  حالة الحظر. القيمة: 0 — محظورة؛ 1 — نشطة (غير محظورة)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

يجب تحديد أحد هذه المعاملات:

-   agentid — معرّف الوكيل
    
-   imei — رقم IMEI للجهاز
    
-   accountid — رقم العقد
    

### أمثلة على الطلب

حظر مركبة بحسب IMEI:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=0&amp;imei=1231231231&amp;node=1</div></td></tr></tbody></table>

إلغاء حظر مركبة بحسب agentid:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=1&amp;agentid=2914&amp;node=1</div></td></tr></tbody></table>

الاستجابة

عند نجاح حظر المركبة أو إلغاء حظرها ستحصل على الاستجابة التالية:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "status": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز الاستجابة. القيمة:
    
    — 0 — تمت العملية بنجاح
    
    — قيم أخرى محتملة: أخطاء مثل 400 أو 500 في حال حدوث مشكلات.
    
-   data — بيانات الحظر/إلغاء الحظر
    
-   agentid — معرّف الوكيل الذي تغيّرت حالته
    
-   status — حالة المركبة: 0 — محظورة؛ 1 — نشطة (غير محظورة)
    
-   msg — رسالة عن نجاح تنفيذ العملية
