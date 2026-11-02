---
title: "بيانات القيادة الاقتصادية"
---

تتيح لك واجهة API هذه الحصول على معلومات عن مدى صداقة قيادة المركبات للبيئة خلال فترة محددة. 

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

للحصول على البيانات المطلوبة، أضف المعلمات إلى عنوان الطلب. تُكتب المعلمات بعد علامة الاستفهام «?» وتُفصل بالعلامة «&».

-   cmd = mileco\_drive — أمر الحصول على بيانات الرحلة 
    
-   start — تاريخ ووقت بداية الفترة التي تريد الحصول على بياناتها
    
-   stop — تاريخ ووقت نهاية الفترة
    

يُكتب الوقت بصيغة Unixtimestamp، أي عدد الثواني المنقضية منذ 1 يناير 1970.

-   vehid — معرّف المركبة المطلوب الحصول على بياناتها. إذا كنت تريد بيانات مركبة واحدة — أدخل معرّفها ID، وإذا كنت تريد بيانات عدة مركبات — فاذكر معرّفاتها ID مفصولة بفواصل.
    
    <table><tbody><tr><td><span></span></td><td><div>إذا لم تحدد المعلمة&nbsp;vehid، فسيعرض النظام تلقائيًا معلومات عن جميع المركبات المرتبطة بحسابك.</div></td></tr></tbody></table>
    
-   imei — الرقم الفريد لجهاز تتبع GPS في المركبة. استخدم هذه المعلمة للحصول على بيانات جهاز تتبع محدد.
    
    <table><tbody><tr><td><span></span></td><td><div>عند تحديد&nbsp;imei&nbsp;لا حاجة إلى تحديد المعلمة&nbsp;vehid.</div></td></tr></tbody></table>
    

مثال على طلب API مع imei:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span><span>&lt;</span><span>address</span><span>&gt;</span><span>/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;imei=86645655031889725</span></div></td></tr></tbody></table>

-   time\_diff\_type — تجميع البيانات بحسب الوقت. افتراضيًا تُجمع البيانات لكل يوم.
    
-   time\_diff\_type=1 — ستُجمع البيانات لكل 7 أيام
    
-   time\_diff\_type=2 — ستُجمع البيانات لكل شهر
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>&nbsp;<span>https://&lt;url&gt;/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;</span>vehid=32,53&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "32": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 842.75354055,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 511 ГР 123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "speed": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msg": "Speed",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cnt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "val": 1290,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fee": 12</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div><span>&nbsp; &nbsp; "53": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 53,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 8.24949075,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 619АК 67",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Bus",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": []</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }&nbsp; &nbsp;</span></div></td></tr></tbody></table>

عند إرسال طلب API تُعاد بيانات كل مركبة:

-   veh\_id — معرّف المركبة
    
-   imei — الرقم الفريد لجهاز التتبع
    
-   distance — المسافة المقطوعة خلال الفترة المحددة
    
-   agent\_id —  معرّف العقد
    
-   account\_id — رقم الحساب في النظام
    
-   account\_name —  اسم الحساب
    
-   veh\_name — اسم المركبة
    
-   veh\_type — نوع المركبة
    
-   eco\_data — بيانات القيادة
