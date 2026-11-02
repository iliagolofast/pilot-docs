---
title: "إضافة سياج جغرافي"
---

ينشئ هذا API سياجًا جغرافيًا جديدًا مع تحديد اسمه ونوعه ولونه ومجموعته وهندسته.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=geofenceadd — أمر إضافة سياج جغرافي
    
-   zonename — اسم السياج الجغرافي
    
-   zonetype — نوع المنطقة (1 — مضلع، 2 — دائرة)
    
-   color — لون المنطقة بصيغة HEX (مثل #FFFFFF)
    
-   info — معلومات نصية عن السياج الجغرافي
    
-   group\_name — اسم مجموعة السياجات الجغرافية (تُنشأ إذا لم تكن موجودة، اختياري)
    
-   group\_id — معرّف ID مجموعة موجودة (إذا حُدّد يتم تجاهل group\_name، اختياري)
    
-   geometry — GEOJson بوصف المضلع أو الدائرة
    
-   external\_id — المعرّف الخارجي للسياج الجغرافي (اختياري)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

المضلع:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=1&amp;zonename=test_api_polygon&amp;external_id=12354&amp;info=blabla&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Polygon","coordinates":[[[55.184334,25.112866],[55.183512,25.113472],[55.182154,25.112516],[55.183511,25.111016],[55.184923,25.112133]]]}&amp;node=1</div></td></tr></tbody></table>

الدائرة:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=2&amp;zonename=test_api_circle&amp;external_id=12345&amp;info=circle_info&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Circle","coordinates":[55.184334,25.112866],"radius":150}&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": 158412,</div><div>&nbsp; &nbsp; "zonename": "test_api_polygon",</div><div>&nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; "external_id": "12354",</div><div>&nbsp; &nbsp; "created_at": 1610536445,</div><div>&nbsp; &nbsp; "updated_at": 1610536445,</div><div>&nbsp; &nbsp; "color": "#FF3300",</div><div>&nbsp; &nbsp; "info": "blabla",</div><div>&nbsp; &nbsp; "group_id": 6984</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   data — كائن بمعلومات عن السياج الجغرافي الذي أُنشئ:
    
-   id — معرّف السياج الجغرافي
    
-   zonename — اسم السياج الجغرافي
    
-   zonetype — نوع المنطقة (1 — مضلع، 2 — دائرة)
    
-   external\_id — المعرّف الخارجي
    
-   created\_at — وقت الإنشاء (Unix timestamp)
    
-   updated\_at — وقت التحديث (Unix timestamp)
    
-   color — لون السياج الجغرافي
    
-   info — معلومات نصية
    
-   group\_id — معرّف مجموعة السياجات الجغرافية
