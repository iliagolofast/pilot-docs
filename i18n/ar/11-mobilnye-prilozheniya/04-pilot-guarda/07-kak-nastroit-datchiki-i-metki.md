---
title: "كيفية إعداد الحساسات والعلامات"
---

يمكن لتطبيق PILOT Guarda أن يعرض معلومات تفصيلية عن حالة السيارة: شحن البطارية، ومستوى الوقود، ودرجة الحرارة، وغيرها من المعلمات.

لكي تظهر هذه البيانات في التطبيق، يجب مسبقاً:

— [إعداد الحساسات](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) في نظام PILOT

— إسناد [علامات](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) (tags) لها

العلامة (tag) هي اسم فريد يُسند إلى الحساس في نظام المراقبة. وبفضل العلامات يفهم التطبيق وظيفة كل حساس ويعرض المعلومات على الشاشة بشكل صحيح.

## ما الحساسات التي يمكن ربطها

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>العلامة (Tag)</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>ما الذي تعرضه</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_main_battery</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; شحن بطارية السيارة. وهو عادةً جهد التغذية على جهاز المراقبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_lock_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة حظر المحرك</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_fuel_level</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مستوى الوقود</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; درجة حرارة المحرك</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_flat_cable_fault_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة عطل الكابل المسطّح</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; درجة الحرارة داخل مقصورة السيارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_humidity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الرطوبة داخل مقصورة السيارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_1_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة المخرج 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_2_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة المخرج 2</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_3_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة المخرج 3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة الإشعال</span></div></td></tr></tbody></table>

## كيفية إعداد الحساسات

يُجرى إعداد الحساسات في نظام PILOT:

1\. افتح الحساب الشخصي للمستخدم

2\. اختر الكائن المطلوب. افتح قائمة الكائن بزر الفأرة الأيمن

3\. انتقل إلى علامة التبويب «الحساسات»

![](images/drex_kak_nastroit_datchiki_i_metki_custom.png)

4\. [أنشئ حساساً جديداً](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) أو افتح حساساً موجوداً

![](images/drex_kak_nastroit_datchiki_i_metki_custom_2.png)

5\. حدّد العلامة (tag) المطلوبة من القائمة أعلاه

من خلال العلامة تحديداً يفهم التطبيق البيانات التي يجب عرضها على شاشة «حالة السيارة».

مثلاً:

— إذا أُسندت إلى حساس درجة الحرارة العلامة garm\_on\_board\_temperature، فسيعرض التطبيق درجة الحرارة داخل مقصورة السيارة

![](images/drex_kak_nastroit_datchiki_i_metki_custom_3.png)

— إذا أُسندت إلى حساس التغذية الخارجية العلامة garm\_main\_battery، فسيعرض التطبيق شحن بطارية السيارة

![](images/drex_kak_nastroit_datchiki_i_metki_custom_4.png)

— إذا أُسندت إلى حساس الإشعال العلامة garm\_engine\_status، فسيعرض التطبيق حالة المحرك — قيد التشغيل أم متوقف

![](images/drex_kak_nastroit_datchiki_i_metki_custom_5.png)

إذا لم تكن العلامة المطلوبة في القائمة، فـ[أنشئها](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) أولاً ثم أسندها إلى الحساس.

![](images/drex_kak_nastroit_datchiki_i_metki_custom_6.png)

6\. احفظ التغييرات

بعد ذلك ستبدأ بيانات الحساس بالظهور في التطبيق المحمول على شاشة «حالة السيارة».

![كيفية إعداد الحساسات والعلامات](images/drex_kak_nastroit_datchiki_i_metki_screen.png)

<table><tbody><tr><td><div><span>1 — جهد بطارية السيارة</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div><span>2 — حالة الإشعال</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![كيفية إعداد الحساسات والعلامات](images/drex_kak_nastroit_datchiki_i_metki_screen_2.png)

<table><tbody><tr><td><div>1 — المستوى الحالي للوقود في الخزان</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>2 — درجة الحرارة داخل المقصورة</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

ما المعلمات الأخرى التي يمكن أن تُعرض في التطبيق ضمن ملخص السيارة:

-   الرصيد — حالة شريحة SIM في جهاز المراقبة
    
-   درجة الحرارة — درجة حرارة المحرك
    
-   حالة الأبواب — مفتوحة أم مغلقة
    
-   حالة المصابيح الأمامية — مضاءة أم مطفأة
    
-   حالة الحراسة — مفعّلة أم معطّلة
