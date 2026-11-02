---
title: "قائمة محطات المسار"
---

تعيد واجهة API هذه قائمة بجميع محطات المسار المحدد، بما في ذلك معلومات عن الإحداثيات ونوع المحطة وترتيب التسلسل وتعرفة الركوب.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=stopList — أمر الحصول على قائمة المحطات
    
-   line\_num — رقم المسار
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stopList&amp;line_num=1Б&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "line": {</div><div>&nbsp; &nbsp; "id": 1083,</div><div>&nbsp; &nbsp; "name": "1Б",</div><div>&nbsp; &nbsp; "number": "1Б",</div><div>&nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; "description": "1Б",</div><div>&nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; "interval": 25,</div><div>&nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5085,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Центр занятости",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3315",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5086,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Автовокзал",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9039",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3236",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   id — المعرّف الفريد للمسار/المحطة
    
-   name — اسم المسار أو المحطة
    
-   number — رقم المسار
    
-   bidirectional — 1 إذا كان المسار ثنائي الاتجاه
    
-   active — 1 إذا كان المسار نشطًا
    
-   price — تعرفة الركوب
    
-   interval — الفاصل الزمني بين الرحلات بالدقائق
    
-   stops — مصفوفة محطات المسار:
    
-   lat, lon — إحداثيات المحطة
    
-   radius — نصف قطر منطقة المحطة بالأمتار
    
-   stop\_type — نوع المحطة: 0 — عادية، 1 — فنية، 2 — نهائية
    
-   stop\_order — ترتيب المحطة في المسار
    
-   silent — 1 — عدم إنشاء رسائل لهذه المحطة
