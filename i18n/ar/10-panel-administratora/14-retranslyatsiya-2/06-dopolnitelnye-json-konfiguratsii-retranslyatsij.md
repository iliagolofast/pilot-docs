---
title: "تكوينات JSON إضافية لإعادة الإرسال"
---

تدعم بعض بروتوكولات إعادة الإرسال معلمات إعداد إضافية عبر الحقل Json config. بفضل تكوين JSON يمكنك تغيير مجموعة البيانات المرسلة، واستخدام قيم الحساسات بعد معالجتها، وإعادة تسمية الحقول، وتصفية الحزم، وإعداد سيناريوهات خاصة لنقل البيانات.

تعتمد المعلمات المدعومة على بروتوكول إعادة الإرسال المحدد.

يُحدَّد تكوين JSON في الحقل Json config عند إنشاء إعادة الإرسال أو تعديلها.

![تكوينات JSON إضافية لإعادة الإرسال](images/drex_dopolnitelnye_json_konfiguratsii_retranslyatsij_screen.png)

## Wialon Retranslator

### إرسال القيم المعالَجة للحساسات

تتيح هذه الميزة إرسال قيم الحساسات إلى إعادة الإرسال بعد معالجتها في نظام PILOT.

مثلاً، يمكن إرسال قيمة حساس مستوى الوقود بعد تطبيق المعايرة عليها.

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "fuel_1": 135785,</span></div><div><span>&nbsp; &nbsp; "NameSensor": 228</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — قائمة الحساسات التي يجب أخذ قيمها من الحساسات المُعدّة للكائن
    
-   fuel\_1 — اسم المعلمة التي ستُرسل في إعادة الإرسال
    
-   135785 — معرّف (ID) حساس الكائن في النظام
    

يمكنك الاطلاع على معرّف الحساس في إعدادات حساسات الكائن.

ملاحظات:

-   لكي تعمل حساسات مستوى الوقود بشكل صحيح، يجب إعداد المعايرة.
    
-   القيم التي تقع خارج نطاق المعايرة تُرسل كما هي دون تغيير.
    
-   مثلاً، قد تُرسل القيمة الخام 65530 بدلاً من اللترات.
    

### تصفية الحساسات ومعالجتها

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1370805,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1370806</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2",</span></div><div><span>&nbsp; &nbsp; "temp_01": "temp1"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; "temp_2": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 100,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — يتيح استخدام قيم حساسات الكائن المحددة.
    
-   tags\_rewrite — يتيح إعادة تسمية المعلمات قبل الإرسال.
    

مثال:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

في هذه الحالة ستُرسل المعلمة temp\_2 باسم temp2.

-   sensors\_filter — يتيح تصفية قيم الحساسات.
    

المعلمات المدعومة:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعلمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع البيانات. المدعوم حالياً هو int</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الحد الأدنى المسموح به للقيمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الحد الأقصى المسموح به للقيمة</span></div></td></tr></tbody></table>

مثال:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

تعمل التصفية مع الحساسات التي ترسل قيماً صحيحة.

-   sensors\_notuse — يتيح استبعاد الحساسات من الإرسال.
    

مثال:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

سيستبعد هذا التكوين الحساسات المحددة من البيانات المرسلة.

<table><tbody><tr><td><span></span></td><td><div>إعدادات الحساسات المنفذة في نظام PILOT لا تؤثر على إعادة الإرسال عبر هذه الآلية. يجب تحديد جميع معلمات الإرسال في Json config.</div></td></tr></tbody></table>

## تصفية الحزم

تتيح عدم إرسال الحزم التي تستوفي شروطاً معينة.

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

-   packet\_filter — لا يرسل الحزمة إذا كانت المعلمة المحددة تحمل القيمة المحددة.
    

مثال:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

إذا كانت المعلمة Valid تساوي 0، فلن تُرسل الحزمة.

يمكن تحديد عدة شروط.

-   keys\_to\_skip — لا يرسل الحزمة إذا كانت تحتوي على المفتاح المحدد.
    

مثال:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

إذا كانت الحزمة تحتوي على الحقل HardVersion فسيتم تخطيها.

يمكن تحديد عدة مفاتيح.

## Wialon IPS وWialon IPS v2

### إعادة تسمية المعلمات

تتيح استبدال اسم المعلمة قبل الإرسال.

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

في هذا المثال ستُرسل المعلمة Vsourse باسم pwr\_ext.

### إرسال IButton في متن الحزمة

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "IButton": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "tcp_box"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

آلية العمل

إذا حُدد للمعلمة IButton النوع tcp\_box، فسيُرسل قيمة المعرّف في متن الحزمة. وإذا كانت المعلمة غير موجودة، فلن يُضاف IButton إلى الحزمة وستُرسل قيمة فارغة.

تُستخدم هذه الإعدادات لإرسال معرّف السائق خارج كتلة المعلمات القياسية.

### الكتلة inputs

تتيح تكوين مداخل إضافية بناءً على قيم الحساسات.

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "value": false,</span></div><div><span>&nbsp; &nbsp; &nbsp; "myval": false</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### معلمات الكتلة inputs

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعلمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الحد الأدنى المسموح به للقيمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الحد الأقصى المسموح به للقيمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; value</span></div></td><td colspan="1" rowspan="1"><div><span>إذا حُددت القيمة true فسيُرسل في الحزمة القيمة الفعلية للحساس. وإذا كانت المعلمة غير موجودة أو حُددت false فيُستخدم المنطق القياسي لتكوين الحزمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; myval</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تتيح استبدال قيمة الحساس بقيمة خاصة بك عند استيفاء الشرط</span></div></td></tr></tbody></table>

**مثال على إعداد مبسّط**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

إذا وقعت قيمة الحساس في النطاق من 1 إلى 1، فستُرسل القيمة 1 في الحزمة.

تُستخدم هذه الآلية لتكرار حالة الحساسات في صورة بتّات.

مثلاً، لإرسال حالة الأبواب عبر الكتلة inputs.

## Wialon Retranslator وGalileo وEGTS

### إعادة تسمية الحقول

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0",</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

تتيح استبدال أسماء الحقول قبل الإرسال.

مثلاً:

-   temperature → galileo\_temp\_0
    
-   digital → galileo\_in\_2
    

### حفظ سجلات إعادة الإرسال

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "save_data_for_report": "1"</span></div><div><span>}</span></div></td></tr></tbody></table>

يفعّل حفظ بيانات إعادة الإرسال لاستخدامها لاحقاً في إنشاء التقارير والتشخيص

### توليد بيانات درجة الحرارة

**مثال**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "temperature_data_generator": {</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2",</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

يُستخدم هذا الإعداد في سيناريوهات خاصة.

عند استيفاء الشرط المحدد يمكن للنظام توليد قيم حساسات درجة الحرارة تلقائياً.

### المعلمات

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعلمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; DOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الحساس الخاضع للمراقبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; closed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; القيمة التي يتحقق عندها الشرط</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_sensors</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قائمة حساسات درجة الحرارة</span></div></td></tr></tbody></table>

صُممت هذه الوظيفة لسيناريوهات تكامل خاصة، ولا تُستخدم إلا عند وجود متطلبات مناسبة من النظام المستقبِل.
