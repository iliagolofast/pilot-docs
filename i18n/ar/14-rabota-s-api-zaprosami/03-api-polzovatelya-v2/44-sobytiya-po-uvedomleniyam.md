---
title: "أحداث الإشعارات"
---

تُستخدم واجهة API هذه للحصول على أحداث [الإشعارات](../../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html) خلال فترة مختارة، مثل تجاوز السرعة أو الحركة خارج المنطقة أو التنبيهات الأخرى المعدّة مسبقًا.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = notifications — أمر الحصول على أحداث الإشعارات
    
-   ts — وقت بداية العينة (Unix timestamp)
    
-   te — وقت نهاية العينة (Unix timestamp)
    
-   notification — اسم الإشعار المطلوب الحصول على أحداثه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=notifications&amp;ts=1606942800&amp;te=1607115600&amp;notification=test&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=52km/h Duration: 42 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988609</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=29km/h Duration: 12 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988438</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=17km/h Duration: 13 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988106</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "id": 3701</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   vehiclenumber — رقم لوحة المركبة أو رقمها الداخلي
    
-   agentid — معرّف الكائن في النظام
    
-   message — نص حدث الإشعار
    
-   ts — وقت الحدث بصيغة Unix timestamp
    
-   id — معرّف الطلب/الجلسة
