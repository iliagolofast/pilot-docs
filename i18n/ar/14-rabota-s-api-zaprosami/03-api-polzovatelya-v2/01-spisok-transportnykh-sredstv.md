---
title: "قائمة المركبات"
---

يوفّر هذا API معلومات عن المركبات، بما فيها موقعها الحالي وبيانات الحساسات والمعلومات التقنية وكذلك المعاملات الإضافية.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

للحصول على البيانات المطلوبة أضف أمرًا إلى عنوان الطلب.

-   cmd=list — أمر الحصول على قائمة المركبات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

صيغة البيانات المطلوبة — مصفوفة بيانات عن المركبات.

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=list</span>&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "list": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "agentid": 9003,</span></div><div><span>&nbsp; &nbsp; &nbsp; "imei": "356307046873054",</span></div><div><span>&nbsp; &nbsp; &nbsp; "typeid": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "Car",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vehiclenumber": "Х444МР123",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vin": "TRDFG65876",</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": "Geo-Center OOO",</span></div><div><span>&nbsp; &nbsp; &nbsp; "created_time": 1414224633,</span></div><div><span>&nbsp; &nbsp; &nbsp; "current_mileage": 881,</span></div><div><span>&nbsp; &nbsp; &nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1418744535",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "43.5562",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.9084",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 268,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 246,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Parking", "description": "TEST SPEED" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Fuel sensor", "description": "Fuel sensor" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "External power supply", "description": "External power supply" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Ignition sensor", "description": "Ignition sensor" }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ],</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors_status": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187852",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "off",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "External power supply",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187851",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "26.27 V",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "26.27",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "26272",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Fuel sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187850",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1 l",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1626336197",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ]</span></div><div><span>&nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز الحالة (0 — نجاح)
    
-   msg — رسالة عن الحالة
    
-   list — مصفوفة كائنات المركبات، يحتوي كل منها على:
    
-   agentid — المعرّف الفريد لجهاز التتبع
    
-   imei — المعرّف الدولي للأجهزة المحمولة
    
-   typeid — المعرّف الرقمي لنوع المركبة
    
-   type — نوع المركبة
    
-   vehiclenumber — رقم تسجيل المركبة
    
-   vin — رقم تعريف المركبة
    
-   folder — المجموعة التنظيمية
    
-   created\_time — وقت الإضافة إلى النظام بصيغة Unixtimestamp
    
-   current\_mileage — المسافة المقطوعة الحالية
    
-   status — معلومات عن الحالة الحالية:
    
-   unixtimestamp — وقت آخر تحديث
    
-   lat — خط العرض
    
-   lon — خط الطول
    
-   speed — السرعة
    
-   dir — اتجاه الحركة بالدرجات
    
-   alt — الارتفاع عن سطح البحر
    
-   satsinview — عدد أقمار GPS المرئية
    
-   sensors — مصفوفة الحساسات المتاحة
    
-   sensors\_status — الحالة التفصيلية لكل حساس، بما فيها:
    
-   name — اسم الحساس
    
-   id — معرّف الحساس
    
-   hum\_value — القيمة الفعلية بعد المعايرة
    
-   dig\_value — القيمة الرقمية بعد المعايرة
    
-   raw\_value — القيمة الخام قبل المعايرة
    
-   change\_ts — وقت آخر تغيير في القيمة
    
-   group — مجموعة الحساسات
