---
title: "تقرير نشاط السائقين"
---

تتيح واجهة API هذه الحصول على معلومات عن نشاط سائقي المركبات خلال الفترة المختارة. وتتضمن الاستجابة أوضاع العمل المختلفة (مثل القيادة والعمل والراحة).

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = gettachodata — أمر الحصول على بيانات جهاز التاكوغراف
    
-   agent\_id — معرّف المركبة / عدة مركبات مفصولة بفواصل
    
-   imei — معرّف الجهاز (بديل لـ agent\_id)
    
-   ts — وقت بداية العينة (Unix timestamp)
    
-   te — وقت نهاية العينة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettachodata&amp;ts=1624568400&amp;te=1624586400&amp;agent_id=120407,120646&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "С 220 СК 750": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Work": 4997,</div><div>&nbsp; &nbsp; &nbsp; "Drive": 248,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 1722,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "А 152 АК 790": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Drive": 5436,</div><div>&nbsp; &nbsp; &nbsp; "Work": 1706,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 4995,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   رقم المركبة
    
-   First driver / Second driver — بيانات كل سائق
    
-   Drive — وقت القيادة
    
-   Work — وقت العمل
    
-   Rest — وقت الراحة
    
-   Driver available — الوقت الذي كان فيه السائق متاحًا للعمل
