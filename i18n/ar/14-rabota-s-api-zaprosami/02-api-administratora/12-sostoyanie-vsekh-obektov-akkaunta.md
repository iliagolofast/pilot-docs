---
title: "حالة جميع كائنات الحساب"
---

يوفّر هذا API قائمة بجميع المركبات المرتبطة بحساب معيّن مع حالتها الحالية.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=vehicles — أمر الحصول على قائمة المركبات
    
-   account\_id — معرّف ID الحساب الذي يُراد الحصول على قائمة كائناته
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    المعاملات الاختيارية:
    
-   is\_show\_deleted — عرض المركبات المحذوفة (0 — عرض المركبات النشطة فقط، 1 — عرض جميع المركبات بما فيها المحذوفة)
    

صيغة البيانات المطلوبة — مصفوفة بيانات عن المركبات.

### مثال على الطلب

عرض الكائنات المحذوفة:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 0,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM1100",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 69332,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "SSS",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.200989",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.634436",</div><div>&nbsp; &nbsp; &nbsp; "model": "HYUNDAI IX35",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79818775160",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 7,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457709039",</div><div>&nbsp; &nbsp; &nbsp; "type": "Static",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "356307045913463",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "IX35"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 0,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 1,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 8026,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM4200",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 17441,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.318118",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.995648",</div><div>&nbsp; &nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79110181596",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "100.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "350.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 9,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457726726",</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "354330031297057",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "nex"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

active — حالة نشاط الكائن: 1 — نشط، 0 — غير نشط

deleted — هل حُذف الكائن: 0 — غير محذوف، 1 — محذوف

agentid — الرقم الفريد للجهاز

configuration — اسم تكوين أجهزة GPS (مثل Teltonika FM1100)

current\_mileage — المسافة المقطوعة للمركبة، كم

dir — اتجاه الحركة

driver\_name — اسم السائق (إن كان معيّنًا)

driver\_phone — هاتف السائق

folder — اسم المجلد/الفئة في النظام

lat — خط العرض الجغرافي لآخر موقع

lon — خط الطول الجغرافي لآخر موقع

model — طراز المركبة

msisdn — رقم SIM لجهاز التتبع

on — الإشعال (1 — مشغَّل، 0 — مطفأ)

partner\_price — سعر الشريك

price — سعر التجزئة

sats — عدد الأقمار الصناعية المتصل بها

speed — السرعة الحالية، كم/س

ts — الطابع الزمني (timestamp، UNIX time) لآخر تحديث للموقع

type — نوع الكائن

uniqid — المعرّف الفريد للجهاز (عادةً IMEI)

vehiclenumber — رقم المركبة
