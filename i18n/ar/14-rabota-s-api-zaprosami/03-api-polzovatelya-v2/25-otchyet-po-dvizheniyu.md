---
title: "تقرير الحركة"
---

باستخدام هذا API احصل على معلومات عن رحلات المركبة عن الفترة المحددة. عند تفعيل الوحدة البرمجية «السياجات الجغرافية»، تُقسَّم كل رحلة إلى مقاطع بحسب الدخول إلى المناطق والخروج منها.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

معاملات الطلب

-   cmd=run — أمر الحصول على التقرير
    
-   imei — المعرّف الفريد للكائن (المركبة)
    
-   start — وقت بداية العينة بصيغة Unix timestamp
    
-   stop — وقت نهاية العينة بصيغة Unix timestamp
    
-   zones — تضمين معلومات السياجات الجغرافية:
    
    — 0 — تُضمَّن المسارات كاملة دون تقسيم بحسب المناطق
    
    — 1 — تُقسَّم المسارات إلى مقاطع بحسب لحظات الدخول إلى السياجات الجغرافية والخروج منها
    
-   eco — تضمين بيانات القيادة الاقتصادية في المسارات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=run&amp;imei=359772039289781&amp;start=1406318400&amp;stop=1406404800&amp;zones=1&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "zones": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "213854753412306",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Гараж",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3861",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7127",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 2</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406353422": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406353422,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "966971618589014",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Барнаульский автовокзал",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3508",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7593",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 1</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "tracks": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341955": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341955,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 0.26,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "17",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 17</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406353389,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 119.83,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "96",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 58</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

مصفوفة المناطق (zones) — نقاط الدخول إلى السياجات الجغرافية والخروج منها:

-   ts — وقت الحدث (Unix timestamp)
    
-   stopuid — المعرّف الفريد للسياج الجغرافي
    
-   stopname — اسم السياج الجغرافي
    
-   lat — خط عرض النقطة
    
-   lon — خط طول النقطة
    
-   msgtype — نوع الحدث (1 = دخول، 2 = خروج)
    

مصفوفة المسارات (tracks) — معلومات عن الرحلات:

-   ts — وقت بداية الرحلة (Unix timestamp)
    
-   te — وقت نهاية الرحلة (Unix timestamp)
    
-   length — طول الرحلة بالكيلومترات
    
-   maxspeed — السرعة القصوى (كم/س)
    
-   avgspeed — متوسط السرعة (كم/س)
    
-   lats — خط عرض نقطة البداية
    
-   lons — خط طول نقطة البداية
    
-   late — خط عرض نقطة النهاية
    
-   lone — خط طول نقطة النهاية
    
-   eco — بيانات القيادة الاقتصادية (عند تفعيل المعامل eco):
    
-   Acceleration وBraking وSpeed — مؤشرات كل معامل
