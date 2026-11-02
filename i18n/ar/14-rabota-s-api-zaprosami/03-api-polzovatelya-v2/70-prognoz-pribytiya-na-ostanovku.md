---
title: "توقع الوصول إلى المحطة"
---

تحصل واجهة API هذه على الوقت المتوقع لوصول الحافلات والحافلات الكهربائية (الترولي باص) والحافلات الصغيرة إلى المحطة المحددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = stationForecast — أمر الحصول على توقع الوصول
    
-   stopid — معرّف المحطة (يؤخذ من [واجهة](../../lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html) PILOT)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stationForecast&amp;stopid=7400&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "curent_stop": 1,</div><div>&nbsp; &nbsp; "line_id": 1371,</div><div>&nbsp; &nbsp; "line_name": "№ 17 С. КАЛЬФА - ПЛ. СУВОРОВА - УЛ. ГЕНЕРАЛА ЖИДИЛОВА",</div><div>&nbsp; &nbsp; "line_num": "17",</div><div>&nbsp; &nbsp; "line_type": "A",</div><div>&nbsp; &nbsp; "this_stop": 32,</div><div>&nbsp; &nbsp; "time": 4065,</div><div>&nbsp; &nbsp; "vehicle": "BUS FLIGHT",</div><div>&nbsp; &nbsp; "vehid": 48854</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد مصفوفة كائنات بتوقعات كل مسار عند هذه المحطة:

-   curent\_stop — الرقم التسلسلي للمحطة في المسار التي تقف عندها المركبة حاليًا
    
-   line\_id — معرّف المسار ID
    
-   line\_name — الاسم الكامل للمسار
    
-   line\_num — رقم المسار
    
-   line\_type — نوع المسار: 'A' — حافلة، 'T' — حافلة كهربائية (ترولي باص)، 'M' — حافلة صغيرة
    
-   this\_stop — الرقم التسلسلي لهذه المحطة في المسار
    
-   time — الوقت المتوقع للوصول إلى هذه المحطة بالثواني
    
-   vehicle — رقم لوحة المركبة
    
-   vehid — معرّف المركبة ID
