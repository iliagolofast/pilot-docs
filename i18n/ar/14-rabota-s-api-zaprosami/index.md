---
title: "العمل مع طلبات API"
---

API (Application Programming Interface) هي مجموعة من القواعد والأدوات لتفاعل البرامج مع بعضها. وفي PILOT تُستخدم واجهة API لتبادل البيانات بين الأنظمة والخدمات والتطبيقات والمنصة.

يتكون طلب API من:

-   URL —  عنوان خادم API والأمر
    
-   معلمة الطلب — البيانات التي تُرسل إلى الخادم
    
-   طريقة الطلب — أسلوب التفاعل مع الخادم
    
    ## كيف تعمل API في PILOT
    

يستخدم PILOT بنية تحتية موزعة تضم عدة خوادم، مثل BLADE وKSA وAFRICA وUSA. ويمكن أن يضم كل خادم عدة عقد، لكل منها رقمها.

عند إرسال طلب API إلى النظام، حدد خادمًا بعينه (على سبيل المثال، BLADE) وعقدة بعينها داخل هذا الخادم —  node. وبهذا يُعالج الطلب مباشرة على الخادم والعقدة المحددين دون عمليات إعادة توجيه غير ضرورية وبأقل زمن استجابة.

مثال على طلب

<table><tbody><tr><td><span></span></td><td><div><span>https://blade.pilot-gps.com/api/api.php?cmd=list&amp;node=14&nbsp;</span></div></td></tr></tbody></table>

blade.pilot-gps.com — اسم الخادم

node=14 — إشارة إلى العقدة (الخادم) التي يجب معالجة الطلب عليها. 

لمعرفة المزيد حول كيفية المصادقة وإرسال الطلبات إلى خادم PILOT، اقرأ [المقال](kak-podklyuchitsya-k-api.html) التالي.

## طرق الطلبات في API

### GET

طريقة للحصول على البيانات. تُستخدم، على سبيل المثال، لطلب قائمة الكائنات أو معلومات الحساب. 

في طلب GET يُمرَّر الأمر والمعلمات مباشرة في URL. وتُضاف المعلمات بعد علامة ? وتُفصل بالرمز &.

مثال

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

cmd=bindControl — الأمر

uid=123, imei=456, lineuid=789 — المعلمات

### POST

طريقة لإرسال البيانات. تُستخدم، على سبيل المثال، لإنشاء كائن جديد أو إعداد تقرير.

في طلب POST يمكن تمرير الأمر والمعلمات في نص الطلب، أو تحديد الأمر في URL وتمرير المعلمات في النص.

مثال 1

URL: https://<server\_address>/api/api.php?cmd=bindControl

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>&nbsp;{</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

مثال 2

URL: https://<server\_address>/api/api.php

نص الطلب

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; &nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; &nbsp; "uid": "123",</span></div><div><span>&nbsp; &nbsp; "imei": "456",</span></div><div><span>&nbsp; &nbsp; "lineuid": "789"</span></div><div><span>&nbsp; }</span></div></td></tr></tbody></table>

PUT

طريقة لتحديث البيانات. يُستخدم هذا النوع من الطلبات، على سبيل المثال، لتغيير معلمات كائن أو حساب.

غالبًا ما تُستخدم PUT لتحديث مورد محدد، ولذلك يُحدَّد المعرّف عادةً في URL، وتوضع البيانات المحدَّثة في النص.

مثال

URL: https://<server\_address>/api/api.php/123

 نص الطلب:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "updateControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789",</span></div><div><span>&nbsp; "status": "active"</span></div><div><span>}</span></div></td></tr></tbody></table>

### DELETE

طريقة لحذف البيانات. على سبيل المثال، إذا كنت تحتاج إلى حذف كائن أو حساب، فتُستخدم هذه الطريقة.

في طلب DELETE يُمرَّر الأمر والمعلمات عادةً في URL.

مثال

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</div></td></tr></tbody></table>

## تنسيق البيانات

تدعم API تنسيقات مختلفة للطلبات والاستجابات على حد سواء.

JSON:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "cmd": "bindControl",</span></div><div><span>&nbsp; "uid": "123",</span></div><div><span>&nbsp; "imei": "456",</span></div><div><span>&nbsp; "lineuid": "789"</span></div><div><span>}</span></div></td></tr></tbody></table>

Form-encoded:

<table><tbody><tr><td><span></span></td><td><div><span>cmd=bindControl&amp;uid=123&amp;imei=456&amp;lineuid=789</span></div></td></tr></tbody></table>

XML:

<table><tbody><tr><td><span></span></td><td><div><span>&lt;request&gt;</span></div><div><span>&nbsp; &lt;cmd&gt;bindControl&lt;/cmd&gt;</span></div><div><span>&nbsp; &lt;uid&gt;123&lt;/uid&gt;</span></div><div><span>&nbsp; &lt;imei&gt;456&lt;/imei&gt;</span></div><div><span>&nbsp; &lt;lineuid&gt;789&lt;/lineuid&gt;</span></div><div><span>&lt;/request&gt;</span></div></td></tr></tbody></table>

## أنواع البيانات

تُستخدم في API أنواع بيانات مختلفة لنقل المعلومات بين العميل والخادم. لنتعرف على الأنواع الأساسية التي قد تظهر في طلبات API واستجاباتها.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; نوع البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مثال بصيغة json</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الغرض من الاستخدام</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; سلسلة نصية (String)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نص بين علامتي اقتباس</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;"name": "Маршрут №9"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; للبيانات النصية: الأسماء والأوصاف</span></div><div><span>&nbsp; والمعرّفات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; رقم (Number)</span></div></td><td colspan="1" rowspan="1"><div><span>أرقام صحيحة أو كسرية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "price": 15.35</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; للبيانات الرقمية: الأسعار</span></div><div><span>&nbsp; والمعرّفات والإحداثيات والوقت</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; مصفوفة (Array)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قائمة مرتبة من العناصر من أي نوع</span></div></td><td colspan="1" rowspan="1"><div><span>"points": [{"lat": "53.352142", "lon": "83.758749"},&nbsp; {"lat": "52.534012", "lon": "85.178777"}]</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لقوائم البيانات: المحطات والسلع</span></div><div><span>&nbsp; والمستخدمون</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; كائن (Object)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مجموعة من أزواج "مفتاح — قيمة"</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "uid": "1", "lat": "53.352142", "lon":"83.758749"}</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; للبيانات المنظمة:</span></div><div><span>&nbsp; معلومات عن محطة أو مستخدم أو طلب</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; النوع المنطقي</span></div><div><span>&nbsp; (Boolean)</span></div></td><td colspan="1" rowspan="1"><div><span>قيمة منطقية&nbsp;true/false أو&nbsp;1/0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; "bidirectional": 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; للعلامات أو الحالات:</span></div><div><span>&nbsp; نشط/غير نشط، متاح/غير متاح</span></div></td></tr></tbody></table>
