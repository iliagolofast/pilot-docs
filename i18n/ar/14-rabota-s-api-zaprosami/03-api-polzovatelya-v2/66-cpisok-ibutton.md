---
title: "قائمة iButton"
---

تحصل واجهة API هذه على قائمة بطاقات iButton المرتبطة بالمركبة خلال فترة زمنية محددة.

iButton جهاز إلكتروني صغير (بطاقة تعريف) يُستخدم لتعريف السائقين أو الكائنات. ويُستخدم عادةً للتحكم في الوصول وحساب ساعات العمل أو تسجيل بدء العمل مع المركبة وانتهائه.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=take\_ibutton\_list — أمر API، وهو في هذه الحالة
    
-   ts — تاريخ بداية الفترة (Unix timestamp)
    
-   te — تاريخ نهاية الفترة (Unix timestamp)
    
-   agentId — معرّف المركبة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=take_ibutton_list&amp;ts=1643662800&amp;te=1645045200&amp;AgentID=79673<span>&amp;node=1</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "data": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000000",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000001",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — نجاح)
    
-   msg — رسالة الخادم (على سبيل المثال، "OK")
    
-   data — مصفوفة بمعلومات عن بطاقات iButton:
    
-   ibutton — المعرّف الفريد لبطاقة iButton
    
-   ts — وقت تسجيل بطاقة iButton (Unix timestamp)
