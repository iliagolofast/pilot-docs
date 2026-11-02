---
title: "الحصول على معلومات عن كائن"
---

يُستخدم هذا API للحصول على معلومات كاملة عن المركبة.

يمكن طلب البيانات إما بحسب agent\_id أو بحسب رقم IMEI للجهاز.

تُعاد في الاستجابة معلومات مفصلة: رقم اللوحة واستهلاك الوقود وحدود السرعة وVIN والطراز وإعدادات التكوين والسائق المرتبط وغير ذلك.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=vehinfo — أمر الحصول على معلومات عن المركبة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

يجب تحديد أحد هذين المعاملين:

-   agentid — معرّف المركبة (agent\_id)
    
-   imei — رقم IMEI الفريد للجهاز
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehinfo&amp;agentid=81181&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "ownerid": 5374,</div><div>&nbsp; &nbsp; "vehiclenumber": "Howen C",</div><div>&nbsp; &nbsp; "typeid": 1,</div><div>&nbsp; &nbsp; "summer_fuel": "10",</div><div>&nbsp; &nbsp; "winter_fuel": "10",</div><div>&nbsp; &nbsp; "idle_fuel": "2",</div><div>&nbsp; &nbsp; "time_zone": "Europe/Moscow",</div><div>&nbsp; &nbsp; "speed_limit": 0,</div><div>&nbsp; &nbsp; "agentid": 81181,</div><div>&nbsp; &nbsp; "account_id": 3925,</div><div>&nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; "year": "1900",</div><div>&nbsp; &nbsp; "vin": "",</div><div>&nbsp; &nbsp; "fuel_type": "50",</div><div>&nbsp; &nbsp; "driver_name": "Test",</div><div>&nbsp; &nbsp; "driver_phone": "12121212121"</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   ownerid — معرّف ID المالك
    
-   vehiclenumber — رقم لوحة المركبة أو اسمها
    
-   typeid — نوع المركبة
    
-   summer\_fuel / winter\_fuel / idle\_fuel — معدلات استهلاك الوقود (الصيف، الشتاء، التشغيل على وضع الخمول)
    
-   time\_zone — المنطقة الزمنية التي تُستخدم فيها المركبة
    
-   speed\_limit — حد السرعة
    
-   account\_id — معرّف ID العقد المرتبطة به المركبة
    
-   model / year / vin — الطراز وسنة الصنع ورقم VIN للمركبة
    
-   fuel\_type — نوع الوقود
    
-   driver\_name / driver\_phone — الاسم الكامل وهاتف السائق المعيّن
    
-   config — JSON بتكوين إضافي (إعدادات الوقود وساعات تشغيل المحرك والقيود وغيرها)
