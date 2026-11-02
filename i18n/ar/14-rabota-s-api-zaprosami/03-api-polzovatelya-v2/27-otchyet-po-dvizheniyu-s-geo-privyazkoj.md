---
title: "تقرير الحركة مع الربط الجغرافي"
---

يتيح هذا API الحصول على تقرير بتنقلات المركبة عن الفترة المحددة مع الإحداثيات والمعلومات الجغرافية (العنوان والحي والمدينة وغيرها). وتتضمن البيانات معلومات عن بداية كل مقطع حركة ونهايته ومتوسط السرعة وأقصاها وطول المسار والمكان بحسب الإحداثيات الجغرافية.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd = rungeo — أمر الحصول على التقرير
    
-   imei — المعرّف الفريد للكائن في النظام
    
-   start — وقت بداية العينة بصيغة Unix timestamp
    
-   stop — وقت نهاية العينة بصيغة Unix timestamp
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rungeo&amp;imei=356307045913463&amp;start=1439413200&amp;stop=1439586000&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "tracks": {</div><div>&nbsp; &nbsp; "1439443509": {</div><div>&nbsp; &nbsp; &nbsp; "avgspeed": 35.3889,</div><div>&nbsp; &nbsp; &nbsp; "length": 12.7304,</div><div>&nbsp; &nbsp; &nbsp; "maxspeed": 59,</div><div>&nbsp; &nbsp; &nbsp; "ts": 1439443509,</div><div>&nbsp; &nbsp; &nbsp; "te": 1439445837,</div><div>&nbsp; &nbsp; &nbsp; "slat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "slon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "elat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "elon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "sgeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya ulitsa",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "egeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya Street",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز التنفيذ (0 = نجاح)
    
-   msg — رسالة عن الحالة
    
-   tracks — كائن مفاتيحه الطوابع الزمنية لبداية الرحلة (Unix timestamp) وقيمه بيانات كل رحلة
    

هذه المفاتيح هي في الوقت نفسه المعرّفات الفريدة للمسارات (track\_id)، ويمكن استخدامها في طلب الأسلوب [gettrack](dannye-treka.html) للحصول على النقاط التفصيلية للمسار.

لكل رحلة:

-   avgspeed — متوسط السرعة (كم/س)
    
-   maxspeed — السرعة القصوى (كم/س)
    
-   length — طول المسار (كم)
    
-   ts — وقت بداية الرحلة (Unix timestamp)
    
-   te — وقت نهاية الرحلة (Unix timestamp)
    
-   slat, slon — إحداثيات البداية (خط العرض، خط الطول)
    
-   elat, elon — إحداثيات النهاية
    
-   sgeo — عنوان مكان البداية (المدينة والشارع والمبنى والرمز البريدي)
    
-   egeo — عنوان مكان النهاية
