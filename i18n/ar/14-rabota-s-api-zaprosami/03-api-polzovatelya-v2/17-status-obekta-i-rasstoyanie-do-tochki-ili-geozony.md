---
title: "حالة الكائن والمسافة إلى نقطة أو سياج جغرافي"
---

يوفّر هذا API الحالة الحالية للمركبة، وكذلك الوقت والمسافة إلى نقطة محددة أو سياج جغرافي.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd = get\_status\_and\_distance — أمر الحصول على الحالة والمسافة
    
-   vehnum — الرقم الداخلي أو رقم لوحة المركبة، ويمكن تحديد عدة أرقام مفصولة بفواصل
    
-   zone — اسم السياج الجغرافي (إذا لزم حساب المسافة إلى المنطقة)
    
-   point — إحداثيات النقطة بالصيغة خط العرض،خط الطول (إذا لزمت المسافة إلى نقطة محددة)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### أمثلة على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;zone=Госпиталь%20Лапино&amp;node=1</div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;point=55.923032,37.659668&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "cstatus": 6,</div><div>&nbsp; "cstatus_timestamp": 1554985159,</div><div>&nbsp; "destination_name": "Zero coordinates",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "length": 27613,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "point": "55.923032,37.659668",</div><div>&nbsp; &nbsp; "time": 2002,</div><div>&nbsp; &nbsp; "type": "point"</div><div>&nbsp; },</div><div>&nbsp; "ignition": 1,</div><div>&nbsp; "rbu": "08",</div><div>&nbsp; "sensors": {</div><div>&nbsp; &nbsp; "Unloading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Loading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Ignition Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "FUEL SENSORS OPERATION SENSORS": "Operating|1554985138",</div><div>&nbsp; &nbsp; "Fuel ... fuel": "202.96 Liter|1554995669"</div><div>&nbsp; },</div><div>&nbsp; "source_name": "Loading_Chertanovo",</div><div>&nbsp; "status": 4,</div><div>&nbsp; "status_timestamp": 1554985072,</div><div>&nbsp; "unixtimestamp": 1554995864,</div><div>&nbsp; "vehiclenumber": "М897ЕТ777",</div><div>&nbsp; "zone": []</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   cstatus — الحالة الحالية للكائن
    
-   cstatus\_timestamp — وقت تسجيل الحالة (Unix timestamp)
    
-   destination\_name — اسم نقطة الوصول
    
-   distance — كائن بمعلومات عن المسافة والوقت إلى النقطة أو المنطقة:
    
-   length — المسافة بالأمتار
    
-   time — الوقت بالثواني
    
-   type — نوع الكائن (point أو zone)
    
-   point — إحداثيات النقطة (إذا كان type=point)
    
-   ignition — حالة الإشعال (1 = مشغَّل)
    
-   rbu — معرّف محطة خلط الخرسانة (РБУ)
    
-   sensors — حالة مختلف الحساسات (مثل التحميل/التفريغ والوقود)
    
-   source\_name — اسم مصدر البيانات
    
-   status — حالة الكائن
    
-   status\_timestamp — وقت آخر تغيير للحالة
    
-   unixtimestamp — وقت استلام البيانات
    
-   vehiclenumber — رقم المركبة
    
-   zone — مصفوفة المناطق الحالية (إن وُجدت)
