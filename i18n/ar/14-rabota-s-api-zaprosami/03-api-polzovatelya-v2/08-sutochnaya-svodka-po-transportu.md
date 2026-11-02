---
title: "الملخص اليومي للمركبات"
---

يحصل هذا API على بيانات عن المركبة خلال آخر 24 ساعة، بما فيها المسافة المقطوعة ومستوى الوقود وعمليات التزود بالوقود واستهلاك الوقود.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd = vehinfo\_24\_hours — أمر الحصول على معلومات آخر 24 ساعة
    
-   agent\_id — معرّف المركبة (يمكن تحديد عدة معرّفات مفصولة بفواصل)
    
-   imei — معرّف الجهاز (يمكن تحديد عدة معرّفات مفصولة بفواصل)
    
-   ts — الطابع الزمني (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=vehinfo_24_hours&amp;imei=10518,165182&amp;ts=1617710825&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "10518": {</div><div>&nbsp; &nbsp; "total_mileage": 745851.44,</div><div>&nbsp; &nbsp; "fuel_start": 229.37,</div><div>&nbsp; &nbsp; "fuel_stop": 229.37,</div><div>&nbsp; &nbsp; "fuel_fill": 409.6,</div><div>&nbsp; &nbsp; "fuel_drain": 153.15,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 256.45,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 35,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 161.5658,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 22,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; },</div><div>&nbsp; "165182": {</div><div>&nbsp; &nbsp; "total_mileage": 100946.68,</div><div>&nbsp; &nbsp; "fuel_start": 0,</div><div>&nbsp; &nbsp; "fuel_stop": 0,</div><div>&nbsp; &nbsp; "fuel_fill": 0,</div><div>&nbsp; &nbsp; "fuel_drain": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 22.313,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 10,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   total\_mileage — إجمالي المسافة المقطوعة
    
-   fuel\_start — كمية الوقود في بداية الفترة
    
-   fuel\_stop — كمية الوقود في نهاية الفترة
    
-   fuel\_fill — التزود بالوقود
    
-   fuel\_drain — تصريف الوقود
    
-   fuel consumption (l) — استهلاك الوقود الفعلي
    
-   fuel consumption (l/100km) — الاستهلاك لكل 100 كم
    
-   fuel\_consumption\_norm(l) — استهلاك الوقود المعياري
    
-   fuel\_consumption\_norm(l/100km) — الاستهلاك المعياري لكل 100 كم
    
-   engine hours — ساعات تشغيل المحرك
