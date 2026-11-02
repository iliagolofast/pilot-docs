---
title: "الحصول على أقرب المركبات"
---

هذا API مخصص للبحث عن المركبات ضمن نصف قطر محدد من نقطة معينة مع الترتيب بحسب المسافة.

مناسب لسيناريوهات الاستجابة العاجلة (مثل الشرطة والأجهزة الخاصة)، حين يحتاج المشغّل إلى أن يحدد بسرعة المركبات الأقرب إلى موقع الحادث.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

للحصول على البيانات المطلوبة أضف أمرًا إلى عنوان الطلب.

-   cmd= get\_nearest\_vehicles 
    
-   group\_id — معرّف ID مجموعة المركبات (orgdep.id)
    
-   lat — خط عرض النقطة المستهدفة (من −90 إلى 90)
    
-   lon — خط طول النقطة المستهدفة (من −180 إلى 180)
    
-   radius — نصف قطر البحث. يدعم قيمًا مثل 500M أو 1KM أو 10KM أو 20KM أو رقمًا بالأمتار
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_nearest_vehicles&amp;group_id=228&amp;lat=43.28191&amp;lon=76.90723&amp;radius=50KM</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>&nbsp;</div><div>&nbsp;{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "group_id": 123,</div><div>&nbsp; "group_name": "Police Fleet",</div><div>&nbsp; "location": { "latitude": 24.4539, "longitude": 54.3773 },</div><div>&nbsp; "radius_meters": 10000,</div><div>&nbsp; "vehicles_found": 2,</div><div>&nbsp; "vehicles": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "POL-001",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 456,</div><div>&nbsp; &nbsp; &nbsp; "veh_id": 789,</div><div>&nbsp; &nbsp; &nbsp; "imei": "123456789",</div><div>&nbsp; &nbsp; &nbsp; "model": "Toyota Land Cruiser",</div><div>&nbsp; &nbsp; &nbsp; "vehicle_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "address": "Sheikh Zayed Road, Dubai, UAE",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "latitude": 24.4550,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "longitude": 54.3780,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ignition": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1706964000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zone": []</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "distance": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "meters": 1234,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "kilometers": 1.23,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "straight_line_meters": 1200</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "travel_time": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "seconds": 180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "minutes": 3.0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "formatted": "3 min"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   group\_id — معرّف ID مجموعة المركبات
    
-   group\_name — اسم المجموعة
    
-   location — إحداثيات النقطة المستهدفة
    
-   latitude — خط العرض
    
-   longitude — خط الطول
    
-   radius\_meters — نصف قطر البحث بالأمتار
    
-   vehicles\_found — عدد المركبات التي تم العثور عليها
    
-   vehicles — مصفوفة كائنات بمعلومات عن المركبات:
    
-   vehiclenumber — رقم المركبة
    
-   agentid — معرّف ID الوكيل/الجهاز
    
-   veh\_id — معرّف ID الكائن
    
-   imei — IMEI الجهاز
    
-   model — طراز المركبة
    
-   vehicle\_type — نوع المركبة (Car وTruck وغيرها)
    
-   location — موقع المركبة
    
-   address — العنوان (بحسب بيانات المرمّز الجغرافي)
    
-   latitude, longitude, altitude
    
-   status — الحالة الحالية للمركبة
    
-   active — النشاط (1 = قيد العمل)
    
-   speed — السرعة، كم/س
    
-   direction — اتجاه الحركة
    
-   altitude — الارتفاع
    
-   satsinview — عدد الأقمار الصناعية
    
-   ignition — الإشعال (1 = مشغَّل)
    
-   unixtimestamp — وقت الحدث بصيغة UNIX
    
-   zone — مصفوفة السياجات الجغرافية الحالية
    
-   distance — المسافة إلى الهدف
    
-   meters — بالأمتار
    
-   kilometers — بالكيلومترات
    
-   straight\_line\_meters — في خط مستقيم بالأمتار
    
-   travel\_time — زمن الحركة المقدّر إلى الهدف
    
-   seconds — بالثواني
    
-   minutes — بالدقائق
    
-   formatted — الوقت المنسّق (مثل "3 min")
