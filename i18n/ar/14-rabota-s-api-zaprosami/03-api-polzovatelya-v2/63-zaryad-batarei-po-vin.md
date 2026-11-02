---
title: "شحن البطارية بحسب VIN"
---

تحصل واجهة API هذه على معلومات عن حالة شحن بطارية المركبة بحسب VIN.

تعمل فقط مع الكائنات التي:

-    تم تعبئة حقل VIN في [بطاقة](../../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html) الكائن
    
-   يتصل بها حساس شحن البطارية
    

<table><tbody><tr><td><span></span></td><td><div>يمكن تحديد عدة أرقام VIN في الطلب، وعندها تُعاد في الاستجابة معلومات عن جميع الكائنات المحددة.</div></td></tr></tbody></table>

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/VTB/api\_vtb.php

### طريقة الطلب

 POST

يتكون العمل مع واجهة API هذه من خطوتين:

1\. المصادقة — الحصول على رمز مميز للوصول إلى البيانات

2\. طلب البيانات — استخدام الرمز المميز للحصول على معلومات البطارية بحسب VIN

### 1\. المصادقة

قبل طلب البيانات، يجب إجراء المصادقة.

نص الطلب:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "login": "ваш_логин",</div><div>&nbsp; "password": "ваш_пароль",</div><div>&nbsp; "cmd": "auth"</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

ستحصل في الاستجابة على رمز مميز (token) — سلسلة طويلة فريدة.

هذا الرمز المميز مطلوب لتعريف المستخدم في الطلبات اللاحقة. وبدونه لن تعيد واجهة API بيانات البطارية.

### 2\. الحصول على بيانات حساس البطارية

بعد الحصول على الرمز المميز، يمكنك طلب معلومات البطارية.

معلمات الطلب

-   Number — قائمة أرقام VIN للمركبات المطلوب الحصول على معلوماتها.
    
-   DateFrom — تاريخ ووقت بداية الفترة (بصيغة ISO 8601).
    
-   DateTo — تاريخ ووقت نهاية الفترة.
    
-   cmd=vehicle — أمر API لطلب بيانات المركبة
    

رؤوس الطلب:

-   Authorization: Bearer <token> — نحدد الرمز المميز الذي تم الحصول عليه عند المصادقة
    
-   Content-Type: application/json — نحدد أن نص الطلب بصيغة JSON
    

نص الطلب:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "Number": ["VIN_объекта"],</div><div>&nbsp; "DateFrom": "2023-12-03T00:00:00",</div><div>&nbsp; "DateTo": "2023-12-12T00:00:00",</div><div>&nbsp; "cmd": "vehicle"</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "Number": "456789123",</div><div>&nbsp; &nbsp; "ApplicationNumber": null,</div><div>&nbsp; &nbsp; "CurrentStatus": "ACTIVE",</div><div>&nbsp; &nbsp; "CloseDateTime": "",</div><div>&nbsp; &nbsp; "LastSyncDate": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "AlarmDateTime": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "Latitude": "55.578352",</div><div>&nbsp; &nbsp; "Longitude": "38.125267",</div><div>&nbsp; &nbsp; "BatteryCharge": "полный заряд",</div><div>&nbsp; &nbsp; "LocationLinesID": "",</div><div>&nbsp; &nbsp; "FullAddress": "улица Гарнаева, Рынок, Жуковский, Московская область, Россия",</div><div>&nbsp; &nbsp; "Country": "Россия",</div><div>&nbsp; &nbsp; "Region": "Московская область",</div><div>&nbsp; &nbsp; "Town": "Жуковский",</div><div>&nbsp; &nbsp; "Street": "улица Гарнаева",</div><div>&nbsp; &nbsp; "House": null,</div><div>&nbsp; &nbsp; "numberRegion": 10</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   Number — رقم VIN للمركبة
    
-   CurrentStatus — الحالة الحالية للكائن
    
-   LastSyncDate — تاريخ آخر مزامنة
    
-   BatteryCharge — مستوى شحن البطارية
    
-   FullAddress, Country, Region, Town, Street — موقع الكائن
    
-   Latitude, Longitude — إحداثيات الكائن
