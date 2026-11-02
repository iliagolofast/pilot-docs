---
title: "إحصائيات استهلاك الوقود والتشغيل على وضع الخمول"
---

يحصل هذا API على بيانات عن كمية الوقود المستهلكة خلال الفترة الزمنية المحددة، وكذلك عن مدة تشغيل المركبة على وضع الخمول.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=fuelconsumtion — أمر الحصول على التقرير
    
-   imei — المعرّف الفريد للمركبة
    
-   start — وقت بداية العينة (Unix timestamp)
    
-   stop — وقت نهاية العينة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=fuelconsumtion&amp;imei=7157153151020&amp;start=1644741475&amp;stop=1644914275&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "7157153151020": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "idle": 98872,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fuel consumed": 457.92</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 = نجاح، القيم الأخرى = خطأ)
    
-   data — بيانات الكائن المحدد:
    
-   idle — وقت تشغيل المحرك على وضع الخمول (بالثواني)
    
-   fuel consumed — حجم الوقود المستهلك خلال الفترة المحددة (باللتر)
    
-   message — رسالة نصية بالنتيجة
