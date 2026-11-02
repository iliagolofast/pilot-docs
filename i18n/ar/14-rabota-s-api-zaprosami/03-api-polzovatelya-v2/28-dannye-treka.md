---
title: "بيانات المسار"
---

يحمّل هذا API النقاط التفصيلية للمسار (track) لرحلة سبق الحصول عليها عبر الأسلوب [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html). تحتوي كل نقطة من المسار على الإحداثيات والسرعة والوقت المطلق لتسجيل النقطة بصيغة Unix timestamp.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd = gettrack — أمر الحصول على المسار.
    
-   id — معرّف المسار الذي تم الحصول عليه في استجابة API [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html#трек_id)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettrack&amp;id=70685695&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "track_data": "47.2037;39.6325;10;1439443509:47.2037;39.6324;13;1439443510:47.2037;39.6323;15;1439443512:47.2036;39.6304;22;1439443568",</div><div>&nbsp; "track_id": 70685695,</div><div>&nbsp; "unixstarttimestamp": 1439443509</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   track\_id — المعرّف الفريد للمسار؛
    
-   unixstarttimestamp — تاريخ ووقت بداية المسار بصيغة Unix timestamp؛
    
-   track\_data — تسلسل نقاط المسار مفصولة بنقطتين رأسيتين (:).
    

تتكون كل نقطة من المسار من أربع قيم مفصولة بفاصلة منقوطة (;):

1\. latitude — خط العرض؛

2\. longitude — خط الطول؛

3\. speed\_kmh — السرعة بالكم/س؛

4\. point\_unix\_timestamp — الوقت المطلق لتسجيل النقطة بصيغة Unix timestamp، UTC.

صيغة النقطة:

<table><tbody><tr><td><span></span></td><td><div>latitude;longitude;speed_kmh;point_unix_timestamp</div></td></tr></tbody></table>

مثال:

<table><tbody><tr><td><span></span></td><td><div>47.2037;39.6325;10;1439443509</div></td></tr></tbody></table>

القيمة 1439443509 هي الوقت المطلق لتسجيل النقطة، وليست عدد الثواني منذ بداية المسار.

لحساب الوقت المنقضي منذ بداية المسار استخدم الصيغة: elapsed\_seconds = point\_unix\_timestamp - unixstarttimestamp. على سبيل المثال: 1439443568 - 1439443509 = 59
