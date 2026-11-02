---
title: "سجل زيارات السياجات الجغرافية"
---

تتيح واجهة API هذه الحصول على معلومات عن أوقات زيارة الكائنات لسياجات جغرافية محددة خلال فترة زمنية معينة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=ag\_geozones — أمر API للحصول على سجل السياجات الجغرافية
    
-   start — تاريخ بداية الفترة (Unix timestamp)
    
-   stop — تاريخ نهاية الفترة (Unix timestamp)
    
-   imei — معرّف المركبة. يمكن تحديد عدة معرّفات مفصولة بفواصل
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب لمركبة واحدة

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635<span>&amp;node=1</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

### مثال على طلب لعدة مركبات

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635,867481037184458</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "865291046424635": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "867481037184458": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1607949101,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1607956478</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1608012176,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1608041334</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — نجاح)
    
-   msg — رسالة الخادم (على سبيل المثال، "OK")
    
-   data — معلومات عن زيارات السياجات الجغرافية
    
-   إذا كان الكائن واحدًا، فإن data عبارة عن مصفوفة بالزيارات
    
-   إذا كان هناك عدة كائنات، فإن data عبارة عن كائن مفاتيحه هي IMEI للمركبات وقيمه مصفوفات الزيارات
    
-   group — مجموعة السياج الجغرافي
    
-   zonename — اسم السياج الجغرافي
    
-   ts — وقت الدخول إلى السياج الجغرافي (Unix timestamp)
    
-   te — وقت الخروج من السياج الجغرافي (Unix timestamp)
