---
title: "العمل مع أوامر Linux لأجهزة Atom"
---

يصف هذا المقال أوامر API الأساسية التي تتيح التفاعل مع أنظمة Linux عبر لوحة المسؤول. وبهذه الأوامر يمكنك إرسال الأوامر واستلامها وحذفها وعرض سجل الأوامر لأجهزة [Atom](../../lichnyj-kabinet-polzovatelya/moduli-1/atom.html).

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php

### قائمة الأوامر

-   cmd=atom\_get\_all — الحصول على قائمة الأوامر المرسلة
    
-   cmd=atom\_get\_commands — الحصول على قائمة قوالب الأوامر
    
-   cmd=atom\_create\_command —  إرسال أمر Linux
    
-   atom\_delete\_command — حذف أمر Linux
    

## الحصول على قائمة أوامر Linux المرسلة (سجل الأوامر)

يتيح هذا الأمر الحصول على قائمة بجميع الأوامر المرسلة إلى جهاز Atom. يتضمن السجل معرّف جهاز Atom والأمر المرسل وكذلك حالة التنفيذ.

الطريقة: GET

### معاملات الطلب

-   cmd=atom\_get\_all — أمر الحصول على السجل
    
-   ident — المعرّف الفريد لجهاز Atom (مثل b0:44:6t:0d:a9:04)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    ### مثال على الطلب
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_all&amp;ident=b0:44:6t:0d:a9:04&amp;node=1</div></td></tr></tbody></table>
    
    الاستجابة
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 27899,</div><div>&nbsp; &nbsp; "agent_id": null,</div><div>&nbsp; &nbsp; "ident": "8v:f5:8c:01:13:70",</div><div>&nbsp; &nbsp; "script": "ls /root/",</div><div>&nbsp; &nbsp; "processed": null,</div><div>&nbsp; &nbsp; "ts": 1712138610,</div><div>&nbsp; &nbsp; "result": null</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## الحصول على قائمة قوالب أوامر Linux

يتيح هذا الأمر الحصول على قائمة بقوالب أوامر Linux التي يمكن استخدامها للإرسال إلى جهاز Atom. تحتوي القوالب على وصف والأمر الذي سيُنفَّذ على الجهاز.

الطريقة: GET

### معاملات الطلب

-   cmd=atom\_get\_commands — أمر الحصول على قوالب الأوامر.
    
-   ident — المعرّف الفريد لجهاز Atom (مثل 80:c5:80:01:68:08).
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    ### مثال على الطلب
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_commands&amp;ident=80:c5:80:01:68:08&amp;node=1</div></td></tr></tbody></table>
    
    الاستجابة
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 36,</div><div>&nbsp; &nbsp; "command_name": "Список Видео",</div><div>&nbsp; &nbsp; "description": null,</div><div>&nbsp; &nbsp; "command": "ls -lsh /video/*.avi"</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## إرسال أمر Linux

باستخدام هذا الأمر يمكنك إرسال أمر Linux إلى جهاز Atom. سيُضاف الأمر إلى قائمة الانتظار ويُنفَّذ على الجهاز.

الطريقة: POST

### معاملات الطلب

-   cmd=atom\_create\_command — أمر إنشاء أمر جديد.
    
-   ident — المعرّف الفريد لجهاز Atom.
    
-   script — نص الأمر البرمجي (اختياري).
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    ### مثال على الطلب
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_create_command&amp;ident=b1:42:67:00:00:fd&amp;node=1</div></td></tr></tbody></table>
    
    الاستجابة
    

<table><tbody><tr><td><span></span></td><td><div>27917 (<span>معرّف ID الأمر المضاف إلى قائمة الانتظار)</span></div></td></tr></tbody></table>

## حذف أمر Linux

إذا لم يُنفَّذ الأمر بعد، فيمكن حذفه من قائمة الانتظار بهذه الطريقة. ولا يمكن الحذف إلا قبل معالجة الأمر.

الطريقة: GET

### معاملات الطلب

-   cmd=atom\_delete\_command — أمر الحذف
    
-   ident — المعرّف الفريد لجهاز Atom
    
-   command\_id — معرّف الأمر المراد حذفه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    ### مثال على الطلب
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_delete_command&amp;ident=b0:44:6f:0d:av:88&amp;command_id=27921</div></td></tr></tbody></table>
    
    الاستجابة
    
    <table><tbody><tr><td><span></span></td><td><div>"Success delete"</div></td></tr></tbody></table>
    

### رموز أخطاء API

-   400 Bad request — تنسيق بيانات غير صحيح أو معامل إلزامي مفقود.
    
    الرسائل المحتملة:
    
-   {"error": "Missing ident param"} — معرّف جهاز Atom مفقود.
    
-   {"error": "Command already processed"} — الأمر نُفِّذ بالفعل.
    
-   {"error": "Unknown macro: {Unknown macro}"} — أمر ماكرو غير معروف.
    
-   500 Internal server error — خطأ داخلي في الخادم
    

### التعامل مع الأوامر في الواجهة

في واجهة PILOT يتم التعامل مع أجهزة Atom عبر تبويب لوحة المسؤول «مراقب الحافلة ← الحافلات»، حيث يتوفر الأمر «تفاعل».

![](images/drex_rabota_s_linux_komandami_atomov_custom.png)

عبر هذه الوظيفة:

-   تُرسل الأوامر (أوامر Linux) إلى جهاز Atom
    
-   يمكن عرض قائمة الأوامر المتاحة (القوالب)
    
-   يُعرض سجل جميع الأوامر المرسلة
    
-   تتوفر نتيجة تنفيذ كل أمر
    

![](images/drex_rabota_s_linux_komandami_atomov_custom_2.png)
