---
title: "حالة الأمر المرسل"
---

يحصل هذا API على حالة [أمر مركّب](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html)، بما فيها الحالة العامة وحالة/استجابة جميع الكائنات والأوامر الداخلة في الأمر المركّب.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=get\_command\_status — أمر طلب الحالة
    
-   command\_id — معرّف الأمر المركّب
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_command_status&amp;command_id=3989&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "message": "",</div><div>&nbsp; "detailed_status": {</div><div>&nbsp; &nbsp; "43207": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Ver: 03.25.15_88 GPS: AXN_3.80_3333 Hw: FMB010 Mod: 3 IMEI: 352094083043221 Init: 2024-3-30 12:29 Uptime: 505289 MAC: 001E428490AF SPC: 0 (0) AXL: 0 OBD :0 BL:0,2 BT:3"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Data channel: 1 GPRS: 1 Phone: 0 SIM: 0 OP: 25001 Signal: 4 New SMS: 0 Roaming: 0 SMSFull: 0 LAC: 10 Cell ID: 11522 NetType: 1 FwUpd: -65536"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "general_status": "completed",</div><div>&nbsp; "version": "7.2.0"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   message — رسالة الخادم بالنتيجة
    
-   detailed\_status — مصفوفة ترابطية بمعلومات تفصيلية عن كل وكيل
    
-   مفتاح المصفوفة (مثل 43207) — معرّف الوكيل
    
-   type — نوع قناة نقل البيانات
    
-   status — حالة تنفيذ الأمر (accepted وexecuted وغيرها)
    
-   response — الرد النصي للجهاز
    
-   general\_status — الحالة العامة للأمر المركّب (pending وcompleted وfailed)
    
-   version — إصدار النظام
