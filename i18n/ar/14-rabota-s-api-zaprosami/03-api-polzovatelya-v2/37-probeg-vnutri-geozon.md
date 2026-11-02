---
title: "المسافة المقطوعة داخل السياجات الجغرافية"
---

تتيح واجهة API هذه الحصول على معلومات عن المسافة التي قطعتها المركبات داخل سياجات جغرافية محددة خلال فترة زمنية مختارة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = zones\_mileage — أمر الحصول على المسافة المقطوعة في السياجات الجغرافية
    
-   ts — وقت بداية العينة (Unix timestamp)
    
-   te — وقت نهاية العينة (Unix timestamp)
    
-   imei — قائمة IMEI للكائنات مفصولة بفواصل
    
-   zones — قائمة بأسماء السياجات الجغرافية مفصولة بفواصل (معلمة اختيارية؛ وإذا لم تُحدد، تُعاد المسافة المقطوعة في جميع المناطق)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=zones_mileage&amp;ts=1596229200&amp;te=1597006800&amp;imei=867857035056105,123123123&amp;zones=Симферополь,Белогорск,Судак&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "ts":"1596229200",</div><div>&nbsp; "te":"1597006800",</div><div>&nbsp; "data":{</div><div>&nbsp;&nbsp; &nbsp; "867857035056105":[</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Симферополь",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":88308,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":259.84</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"За пределами города",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":21564,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":283.47</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Белогорск",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":704,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":10.77</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Судак",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":1332,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":11.45</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   zone — اسم السياج الجغرافي
    
-   duration — مدة وجود الكائن في المنطقة بالثواني
    
-   mileage — المسافة المقطوعة في هذه المنطقة بالكيلومترات
