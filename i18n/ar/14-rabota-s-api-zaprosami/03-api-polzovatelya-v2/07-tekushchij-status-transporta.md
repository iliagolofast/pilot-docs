---
title: "الحالة الحالية للمركبات"
---

يُستخدم هذا API للحصول على معلومات محدّثة عن الحالة الحالية لمركبة واحدة أو عدة مركبات، بما فيها بيانات الموقع والسرعة وقراءات الحساسات والحالة التقنية.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

للحصول على البيانات المطلوبة أضف معاملات إلى عنوان الطلب. تُكتب المعاملات بعد علامة الاستفهام «?» وتُفصل بينها بالعلامة «&».

-   cmd = status — أمر الحصول على معلومات الحالة
    
-   imei — المعرّف الفريد لجهاز تتبع GPS
    
-   agents — قائمة معرّفات agentid، تُكتب مفصولة بفواصل لطلب حالات عدة كائنات
    
-   veh\_numbers — رقم تسجيل المركبة تمامًا كما هو مكتوب في النظام، مع مراعاة حالة الأحرف والأرقام إلزاميًا
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

<table><tbody><tr><td><span></span></td><td><div>يجب أن يتضمن الطلب أحد ثلاثة معاملات: imei أو agents أو veh_numbers.</div></td></tr></tbody></table>

## أمثلة

### طلب بحسب IMEI

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=status&amp;imei=357073296325265<span>&amp;node=1</span></div></td></tr></tbody></table>

### طلب بحسب عدة معرّفات وكلاء

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=status&amp;agents=51594,44841&amp;node=1</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 44841,</div><div>&nbsp; &nbsp; &nbsp; "imei": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM2200",</div><div>&nbsp; &nbsp; &nbsp; "typeid": 27,</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "NURKA",</div><div>&nbsp; &nbsp; &nbsp; "folder": "REAL",</div><div>&nbsp; &nbsp; &nbsp; "created_time": 1518167398,</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 65345,</div><div>&nbsp; &nbsp; &nbsp; "initial_mileage": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": null,</div><div>&nbsp; &nbsp; &nbsp; "model": "ВАЗ (Lada) Kalina",</div><div>&nbsp; &nbsp; &nbsp; "info": " test",</div><div>&nbsp; &nbsp; &nbsp; "vin": "XTA219470K0259832",</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 27,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "47.119755",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.667492",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "moving": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking": 9267,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "firing": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "sensors_status": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "150549",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "выкл.",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621423461",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "GROUP!"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Датчик топлива",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "368013",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1249.4 -",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1249.4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "myGroup"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "reqest_time": 0.0642</div><div>}</div></td></tr></tbody></table>

تُعاد الاستجابة بصيغة JSON وتحتوي على:

 imei — الرقم الفريد لجهاز التتبع

-   distance — المسافة المقطوعة خلال الفترة المحددة
    
-   agent\_id — معرّف جهاز التتبع
    
-   account\_id — رقم الحساب في النظام
    
-   code — رمز الحالة (0 - نجاح)
    
-   msg — رسالة عن حالة تنفيذ الطلب
    
-   data — مصفوفة كائنات بمعلومات عن المركبات:
    
-   agentid — معرّف العقد
    
-   imei — المعرّف الدولي لجهاز التتبع
    
-   vin — رقم تعريف المركبة
    
-   configuration — طراز جهاز التتبع
    
-   typeid — المعرّف الرقمي لنوع المركبة
    
-   type — نوع المركبة
    
-   vehiclenumber — رقم تسجيل المركبة
    
-   folder — المجموعة التنظيمية أو الفرع
    
-   created\_time — وقت الإنشاء بصيغة Unixtimestamp
    
-   uniqid — المعرّف الفريد
    
-   current\_mileage — المسافة المقطوعة الحالية
    
-   initial\_mileage — المسافة المقطوعة الأولية
    
-   driver\_name — اسم السائق
    
-   driver\_phone — هاتف السائق
    
-   model — طراز المركبة
    
-   info — معلومات إضافية
    
-   status — معلومات عن الحالة الحالية:
    
-   active — هل الكائن نشط (1 أو 0)
    
-   speed — السرعة الحالية
    
-   direction — الاتجاه الحالي بالدرجات
    
-   lat — خط العرض الحالي
    
-   lon — خط الطول الحالي
    
-   alt — الارتفاع الحالي
    
-   satsinview — عدد الأقمار الصناعية المرئية
    
-   unixtimestamp — وقت آخر تحديث
    
-   moving — وقت الحركة بالثواني
    
-   parking — وقت التوقف بالثواني
    
-   firing — حالة الإشعال (1 — مشغَّل، 0 — مطفأ)
    
-   sensors\_status — مصفوفة بمعلومات عن الحساسات:
    
-   name — اسم الحساس
    
-   id — معرّف الحساس
    
-   hum\_value — القيمة الفعلية بعد المعايرة
    
-   dig\_value — القيمة الرقمية بعد المعايرة
    
-   raw\_value — القيمة الخام قبل المعايرة
    
-   change\_ts — وقت آخر تغيير في القيمة بصيغة Unixtimestamp
    
-   group — مجموعة الحساس
    
-   reqest\_time — زمن تنفيذ الطلب بالثواني
