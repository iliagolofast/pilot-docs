---
title: "عداد المسافة والوقود خلال فترة"
---

يحصل هذا API على معلومات عن المسافة المقطوعة (قراءات عداد المسافة) واستهلاك الوقود للمركبة عن الفترة الزمنية المحددة.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معاملات الطلب

-   cmd=odo\_and\_fuel — أمر الحصول على بيانات عداد المسافة والوقود
    
-   imei — معرّف الجهاز (معرّف ID الكائن)
    
-   start — وقت بداية الفترة بصيغة Unix timestamp
    
-   stop — وقت نهاية الفترة بصيغة Unix timestamp
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=odo_and_fuel<span>&amp;start=1767214800&amp;stop=1767560400&amp;imei=861076084529922&amp;node=6</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "ok",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fuel": 7.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start_odo": 407121.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_odo": 407229.4</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   fuel — كمية الوقود المستهلكة خلال الفترة
    
-   start\_odo — قراءة عداد المسافة في بداية الفترة
    
-   stop\_odo — قراءة عداد المسافة في نهاية الفترة
