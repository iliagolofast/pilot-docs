---
title: "إدارة رحلات الحافلات"
---

تُستخدم واجهة API هذه لإدارة رحلات الحافلات وربط المركبات بالمسارات. فهي تنشئ المسارات وتعيّن المركبات على الرحلات.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php

### معلمات الطلب

للحصول على البيانات المطلوبة، أضف الأمر.

-   cmd — الأمر المطلوب تنفيذه
    

الأوامر المتاحة

-   setLine — إنشاء مسار حافلة جديد
    
-   bindControl — ربط مركبة بمسار
    
-   bindLineToVeh — ربط مسار بمركبة بحسب المعرّف ID
    
-   unbindControl — حذف ربط المركبة
    
-   listLines — الحصول على قائمة المسارات
    
-   setControl — تعيين حافلة على رحلة
    
-   unsetControl — حذف التعيين على الرحلة
    
-   data — بيانات بصيغة JSON تُمرَّر في نص الطلب
    

## أمثلة

### إنشاء مسار حافلة

يُنشئ الأمر setLine مسارًا جديدًا بالمعلمات المحددة ويضيف محطات المسار.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=setLine</div></td></tr></tbody></table>

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"account_id": "3008", &nbsp;</span></div><div><span>&nbsp;"bidirectional": 1,&nbsp; &nbsp;</span></div><div><span>&nbsp;"description": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"label": "123",&nbsp; &nbsp;</span></div><div><span>&nbsp;"name": "Маршрут №9",&nbsp;</span></div><div><span>&nbsp;"number": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp;"type_id": 0,&nbsp; &nbsp;</span></div><div><span>&nbsp;"uid": "dhqwdh"</span></div><div><span>&nbsp;"points": [&nbsp;</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "45.0207",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "33.9993",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "Аэропорт__", &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35, &nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "91",&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 600,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 700,&nbsp;</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e2-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp;&nbsp; &nbsp; "lat": "44.9078",</span></div><div><span>&nbsp;&nbsp; &nbsp; "lon": "34.0784",</span></div><div><span>&nbsp;&nbsp; &nbsp; "name": "7я горбольница",</span></div><div><span>&nbsp;&nbsp; &nbsp; "price": 15.35,</span></div><div><span>&nbsp;&nbsp; &nbsp; "radius": "90",</span></div><div><span>&nbsp;&nbsp; &nbsp; "silent": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp;&nbsp; &nbsp; "te": 1000,</span></div><div><span>&nbsp;&nbsp; &nbsp; "ts": 900,</span></div><div><span>&nbsp;&nbsp; &nbsp; "uid": "819897e8-843b-11e4-bf52-002354656fea"</span></div><div><span>&nbsp;&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

معلمات الطلب

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعلمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; account_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم العقد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; bidirectional</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الرحلة ثنائية الاتجاه (1 — ذهاب وإياب، 0 — اتجاه واحد)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; description</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وصف المسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; label</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وسم إضافي للمسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم المسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم المسار (نص أو رقم)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع وسيلة النقل: 0 — حافلة، 1 — حافلة كهربائية (ترولي باص)، 2 — ترام، 3 — حافلة صغيرة.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; points</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مصفوفة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قائمة محطات المسار</span></div></td></tr></tbody></table>

معلمات المحطة

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعلمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lat</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط عرض مركز المحطة (رقم عشري)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lon</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط طول مركز المحطة (رقم عشري)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم المحطة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; price</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تعرفة الركوب من المحطة السابقة (رقم عشري)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; radius</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نصف قطر منطقة المحطة بالأمتار (رقم)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; silent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حظر الإشعارات: 1 — محظورة، 0 — مسموحة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; stop_type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع المحطة: 0 — عادية، 1 — فنية (لا يُحتسب الركاب)، 2 — نهائية (يُصفَّر العداد — ينزل جميع الركاب)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت الوصول إلى المحطة بالنسبة إلى المحطة السابقة (بالثواني)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة التوقف في المحطة (بالثواني)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمحطة</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут успешно создан",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "dhqwdh",</span></div><div><span>&nbsp; &nbsp; "lineuid": "2567"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

معلمات الاستجابة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعلمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة التنفيذ:&nbsp;success&nbsp;أو&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رسالة بنتيجة التنفيذ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; بيانات المسار المنشأ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمسار المنشأ</span></div></td></tr></tbody></table>

### ربط مركبة بمسار

يُستخدم الأمر bindControl لربط مركبة بمسار محدد. يربط الأمر جهاز تتبع GPS بالمسار، ويحدد مدة سريان الربط، ويضبط عنوان URL لتلقي إشعارات الأحداث، مثل الوصول إلى المحطة أو فتح الأبواب.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>bindControl</span></div></td></tr></tbody></table>

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "121e1e1e12",&nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "imei": "12304", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "lineuid": "2e23e23e2e", &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php"</span></div><div><span>}</span></div></td></tr></tbody></table>

معلمات الطلب

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعلمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; uid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للربط</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; IMEI المركبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت بداية سريان الربط (بصيغة timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت انتهاء سريان الربط (بصيغة timestamp؛ وإذا لم يُحدد، فمدة السريان غير محدودة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عنوان URL لإشعارات الأحداث (على سبيل المثال، الوصول إلى المحطة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; prognoze_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عنوان URL لتوقعات الوصول إلى المحطات</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка успешно создана",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "121e1e1e12",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "12304",&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

معلمات الاستجابة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعلمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة التنفيذ:&nbsp;success&nbsp;أو&nbsp;error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رسالة بنتيجة التنفيذ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; بيانات الربط المنشأ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.imei</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للربط</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; data.lineuid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الفريد للمسار</span></div></td></tr></tbody></table>

أو استخدم الأمر bindLineToVeh لربط المسار بالمركبة بشكل مبسّط بحسب معرّف المسار ID.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindLineToVeh</div></td></tr></tbody></table>

نص الطلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345",</div><div>&nbsp; &nbsp; "ts": "1392294840"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "imei": "12304",</div><div>&nbsp; &nbsp; "lineid": "12345"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

### حذف ربط المركبة بخط الحافلة

unbindControl — أمر لحذف ربط سبق إنشاؤه بين مركبة ومسار. يُمرَّر في الطلب المعرّف الفريد للربط uid الذي أُنشئ سابقًا.

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=<span>unbindControl</span></div></td></tr></tbody></table>

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>json</span></div><div><span>{</span></div><div><span>&nbsp;&nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>}</span></div></td></tr></tbody></table>

-   uid — المعرّف الفريد للربط
    

الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Привязка удалена",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### الحصول على قائمة المسارات

يتيح الأمر listLines الحصول على قائمة بجميع المسارات المتاحة للحساب الحالي.

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=listLines</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "data": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "id": 2955,</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "number": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "description": "125К",</span></div><div><span>&nbsp; &nbsp; &nbsp; "account_id": 18306,</span></div><div><span>&nbsp; &nbsp; &nbsp; "active": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "label": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": null,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type_id": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": "0.00",</span></div><div><span>&nbsp; &nbsp; &nbsp; "interval": 10,</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": null</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

### إنشاء مسار حافلة وربط مركبة به

ينشئ الأمر المركّب setLine وbindControl مسار حافلة جديدًا ويربط المركبة بهذا المسار.

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "uid": "qiwduhqiwdqkdqkn",</span></div><div><span>&nbsp; "ts": "1392294840",&nbsp;</span></div><div><span>&nbsp; "te": "1392321600", &nbsp;</span></div><div><span>&nbsp; "name": "test",&nbsp;</span></div><div><span>&nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; "number": "861A",&nbsp;</span></div><div><span>&nbsp; "message_url": "http://example.com/message.php", &nbsp;</span></div><div><span>&nbsp; "prognoze_url": "http://example.com/prognoze.php",</span></div><div><span>&nbsp; "points": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "53.352142",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "83.758749",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Барнаульский автовокзал",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "50",&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,&nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "uid": "2",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lat": "52.534012",</span></div><div><span>&nbsp; &nbsp; &nbsp; "lon": "85.178777",</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "Бийский автовокзал",</span></div><div><span>&nbsp; &nbsp; &nbsp; "radius": "100",</span></div><div><span>&nbsp; &nbsp; &nbsp; "stop_type": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; "price": 15.35</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "status": "success",</span></div><div><span>&nbsp; "message": "Маршрут и привязка успешно созданы",</span></div><div><span>&nbsp; "data": {</span></div><div><span>&nbsp; &nbsp; "uid": "qiwduhqiwdqkdqkn",&nbsp;</span></div><div><span>&nbsp; &nbsp; "imei": "359772039289781",&nbsp;</span></div><div><span>&nbsp; &nbsp; "lineuid": "2e23e23e2e"&nbsp;</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>
