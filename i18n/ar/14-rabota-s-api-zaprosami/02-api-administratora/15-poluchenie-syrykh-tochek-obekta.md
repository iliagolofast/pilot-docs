---
title: "الحصول على النقاط الخام للكائن"
---

يعيد API البيانات الخام لمسارات GPS للمركبة عن الفترة المحددة.

لا يمكن تنفيذ هذا الطلب إلا لفترة لا تتجاوز 10 أيام.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=rawpoints — أمر الحصول على النقاط الخام
    
-   ts — تاريخ بداية العينة بصيغة UNIX timestamp
    
-   te — تاريخ نهاية العينة بصيغة UNIX timestamp
    
-   agentid — معرّف المركبة
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?<span>cmd=rawpoints&amp;ts=1760216400&amp;te=1760302800&amp;agentid=157773</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 1,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215545",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706906",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 15,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 10,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14547;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022428</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 339,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215938",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706751",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 12,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14538;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022437</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "deb": [</div><div>&nbsp; &nbsp; 2914,</div><div>&nbsp; &nbsp; 1458022428,</div><div>&nbsp; &nbsp; 1458043980</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز تنفيذ الطلب (0 — نجاح)
    
-   data — مصفوفة النقاط:
    
-   agentid — معرّف المركبة
    
-   height/ altitude — الارتفاع عن سطح البحر (م)
    
-   direction — اتجاه الحركة (درجات)
    
-   latitude/ longitude — إحداثيات النقطة
    
-   satsinview — عدد الأقمار الصناعية المرئية
    
-   servertime — وقت الخادم بصيغة UNIX timestamp
    
-   speed — السرعة بالكم/س
    
-   triggerdata — بيانات مشغِّلات الجهاز
    
-   unixtimestamp — وقت الحدث بصيغة UNIX timestamp
    
-   deb — مصفوفة معلومات التصحيح (agentid وبداية الفترة ونهايتها)
    
-   message — رسالة بنتيجة الطلب
