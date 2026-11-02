---
title: "حالة الحافلة"
---

تعيد واجهة API هذه الحالة الراهنة للحافلة: المسار والمحطة الحالية والمحطة التالية، إضافةً إلى معلومات عن المسار نفسه (الرقم والتعرفة والفاصل الزمني بين الرحلات وغيرها).

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=currentBusState — أمر الحصول على حالة الحافلة
    
-   vehnum — رقم الحافلة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=currentBusState&amp;vehnum=А%20086%20КХ%20116%20RUS&amp;node=1</div></td></tr></tbody></table>

**الاستجابة**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "lines": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1086,</div><div>&nbsp; &nbsp; &nbsp; "name": "1А",</div><div>&nbsp; &nbsp; &nbsp; "number": "1А",</div><div>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; &nbsp; "description": "1А",</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; &nbsp; "interval": 10,</div><div>&nbsp; &nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_id": 0,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_order": 0,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_id": 5217,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_order": 48</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   id — معرّف المسار ID
    
-   name — اسم المسار
    
-   number — رقم المسار
    
-   bidirectional — علامة المسار ثنائي الاتجاه (1 — نعم، 0 — لا)
    
-   active — علامة نشاط المسار (1 — نشط)
    
-   price — تعرفة الركوب
    
-   interval — الفاصل الزمني بين الرحلات بالدقائق
    
-   currentstop\_id — معرّف المحطة ID التي تقف فيها الحافلة حاليًا
    
-   currentstop\_order — الرقم التسلسلي للمحطة الحالية
    
-   nextstop\_id — معرّف المحطة التالية ID
    
-   nextstop\_order — الرقم التسلسلي للمحطة التالية
