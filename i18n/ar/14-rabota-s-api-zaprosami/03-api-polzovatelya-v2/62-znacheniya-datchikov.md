---
title: "قيم الحساسات"
---

تحصل واجهة API هذه على قيم الحساسات المنفصلة (مستوى الوقود ودرجة الحرارة والوزن وغيرها) خلال فترة زمنية محددة.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معلمات الطلب

-   cmd =get\_discrete\_sensor\_data — أمر الحصول على بيانات الحساسات
    
-   imei — معرّف الكائن
    
-   start — بداية الفترة (Unix timestamp)
    
-   stop — نهاية الفترة (Unix timestamp)
    
-   tag\_id — معرّف الحساس
    
-   agent\_id — معرّف الوكيل (اختياري)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

<table><tbody><tr><td><span></span></td><td><div>يمكن الحصول على بيانات الحساسات لمدة 24 ساعة فقط.</div></td></tr></tbody></table>

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_discrete_sensor_data&amp;imei=350424062310402&amp;start=1677682645&amp;stop=1677761845&amp;tag_id=1158&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "sensor_data": {</div><div>&nbsp; &nbsp; "966960": {</div><div>&nbsp; &nbsp; &nbsp; "1677682772": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682772,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "95.09",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "0"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1677682950": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682950,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "94.9",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "12"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   sensor\_id — معرّف الحساس
    
-   unixtimestamp — وقت تسجيل القيمة (Unix timestamp)
    
-   calibrated\_value — القيمة المعايَرة للحساس (على سبيل المثال، لترات الوقود أو درجات الحرارة)
    
-   speed — سرعة الكائن لحظة القياس
