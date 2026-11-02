---
title: "قائمة السياجات الجغرافية"
---

يعيد هذا API قائمة بجميع السياجات الجغرافية مع خصائصها، بما فيها الإحداثيات والنوع واللون والمجموعة.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=geofencelist — أمر الحصول على قائمة السياجات الجغرافية
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencelist&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 157828,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "Test Magnit",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 2,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": null,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#00CC00",</div><div>&nbsp; &nbsp; &nbsp; "info": "geozone text info",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Circle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [40.036497, 46.981936],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 305</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 153244,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "school",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": 1234,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#FF9900",</div><div>&nbsp; &nbsp; &nbsp; "info": "kml upload",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Polygon",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184334, 25.112866],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183512, 25.113472],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.182154, 25.112516],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183511, 25.111016],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184923, 25.112133]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   data — مصفوفة كائنات السياجات الجغرافية، يحتوي كل منها على:
    
-   id — معرّف السياج الجغرافي
    
-   zonename — اسم السياج الجغرافي
    
-   zonetype — نوع السياج الجغرافي (1 — مضلع، 2 — دائرة)
    
-   external\_id — المعرّف الخارجي (إن وُجد)
    
-   created\_at — وقت الإنشاء (Unix timestamp)
    
-   updated\_at — وقت التحديث (Unix timestamp)
    
-   color — لون السياج الجغرافي في الواجهة
    
-   info — معلومات إضافية
    
-   group\_name — اسم مجموعة السياجات الجغرافية
    
-   group\_id — معرّف المجموعة
    
-   geometry — هندسة المنطقة:
    
-   type — النوع (Circle أو Polygon)
    
-   coordinates — الإحداثيات (للدائرة: \[خط الطول، خط العرض\]؛ للمضلع: مصفوفة مصفوفات إحداثيات)
    
-   radius — نصف قطر السياج الجغرافي الدائري (بالأمتار)
