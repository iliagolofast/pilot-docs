---
title: "معاملات الطلبات والمقاييس المتاحة"
---

عند تنفيذ الطلبات إلى BI Analytics API يجب تحديد المعاملات التي تحدّد البيانات المطلوب الحصول عليها والصيغة التي تُعاد بها.

إضافةً إلى معاملات الطلب، يجب اختيار المقاييس — وهي المؤشرات التي ستُدرج في النتيجة. فهي التي تحدّد البيانات التي سيعيدها API، مثل المسافة المقطوعة واستهلاك الوقود وعدد الرحلات ومخالفات القيادة الاقتصادية.

## المعاملات الأساسية للطلب

تحدّد معاملات الطلب مصدر البيانات وطريقة تجميعها وشروط التصفية الإضافية.

### source

يحدّد الحقل source البيانات التي يُبنى عليها الاستعلام.

القيم المتاحة:

-   vehicle — بيانات المركبات
    
-   driver — بيانات السائقين
    

### group\_by

يحدّد الحقل group\_by طريقة تجميع النتيجة.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; القيمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ما يعرضه</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; مثال على بنية الاستجابة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; total</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المجموع لجميع المركبات أو السائقين عن الفترة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "metric": 123 }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المجموع لجميع المركبات أو السائقين لكل يوم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "20260301": { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كل مصدر، الإجمالي عن الفترة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كل مصدر، كل يوم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "20260301": { "metric": 123 } } }</span></div></td></tr></tbody></table>

### ACCOUNT\_ID

يتيح المعامل ACCOUNT\_ID قصر التصدير على بيانات عقد واحد.

إذا كان الطلب يتضمن اسم المستخدم وكلمة المرور لحساب شريك، فإن النظام يصدّر دون ACCOUNT\_ID جميع المركبات في جميع العقود المتاحة لهذا الشريك.

إذا حدّدت ACCOUNT\_ID في الطلب، فسيتم تحميل كائنات العقد المحدد فقط.

## المقاييس المتاحة

تحدّد المقاييس المؤشرات التي سيعيدها API. وتُمرَّر في المعامل metrics على شكل قائمة.

على سبيل المثال:

<table><tbody><tr><td><span></span></td><td><div><span>metrics = [</span></div><div><span>&nbsp; &nbsp; "veh_driving_dist",</span></div><div><span>&nbsp; &nbsp; "veh_fuel_cons",</span></div><div><span>&nbsp; &nbsp; "average_speed"</span></div><div><span>]</span></div></td></tr></tbody></table>

فيما يلي قائمة المقاييس المدعومة.

### المركبات — عام

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد الرحلات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المسافة المقطوعة (كم)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت الحركة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت التوقف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_ignition_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت تشغيل الإشعال</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت التشغيل على وضع الخمول</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_motor_hours</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ساعات تشغيل المحرك</span></div></td></tr></tbody></table>

### المركبات — الوقود

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استهلاك الوقود</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كمية الوقود المعبأة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كمية الوقود المصرَّفة</span></div></td></tr></tbody></table>

### المركبات — المخالفات

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة القيادة الاقتصادية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد مخالفات القيادة الاقتصادية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة التسارع الحاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات التسارع الحاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة الفرملة الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات الفرملة الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة المنعطفات الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد المنعطفات الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة عدم ربط حزام الأمان</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد مخالفات حزام الأمان</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة التشغيل على وضع الخمول</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد مخالفات التشغيل على وضع الخمول</span></div></td></tr></tbody></table>

### المركبات — التكاليف

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تكلفة الوقود لكل كم</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_service_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تكلفة الخدمة لكل كم</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_amount_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; إجمالي النفقات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;cost_of_using</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تكلفة الاستخدام</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;average_speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; متوسط السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_cars_counter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد المركبات</span></div></td></tr></tbody></table>

### السائقون

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد الرحلات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المسافة المقطوعة (كم)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت الحركة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت التوقف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استهلاك الوقود</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كمية الوقود المعبأة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; كمية الوقود المصرَّفة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة القيادة الاقتصادية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد مخالفات القيادة الاقتصادية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة التسارع الحاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات التسارع الحاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة الفرملة الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات الفرملة الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة المنعطفات الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد المنعطفات الحادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد حالات تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; غرامة عدم ربط حزام الأمان</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عدد مخالفات حزام الأمان</span></div></td></tr></tbody></table>

### مقاييس أنواع أحداث القيادة الاقتصادية المنفردة

للحصول على بيانات أنواع الأحداث المنفردة في [القيادة الاقتصادية](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/index.html) تُستخدم مقاييس بالصيغة التالية:

-   eco\_{N}\_fine — عدد نقاط الغرامة لنوع الحدث
    
-   eco\_{N}\_cnt — عدد الأحداث المسجلة من هذا النوع
    

هنا N هو معرّف (ID) نوع حدث جودة القيادة.

لكل نوع حدث معرّف ID فريد خاص به يمنحه النظام تلقائيًا عند إنشائه. ويُستخدم هذا المعرّف في API لتكوين أسماء المقاييس.

على سبيل المثال، في [دليل الأنواع](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) لجودة القيادة قد تحمل الأحداث القياسية المعرّفات التالية:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ID</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; نوع الحدث</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat Belt</span></div></td></tr></tbody></table>

![](images/drex_parametry_zaprosov_i_dostupnye_metriki_custom.png)

إذا [أُنشئت في النظام أنواع أحداث خاصة بك](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:), فإنها تحصل أيضًا تلقائيًا على معرّفات ID فريدة.

عند تكوين الطلب، يجب استبدال N بمعرّف ID نوع الحدث المطلوب.

### أمثلة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ما يعيده</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_1_fine / eco_1_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نقاط الغرامة وعدد أحداث Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_2_fine / eco_2_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نقاط الغرامة وعدد أحداث Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_4_fine / eco_4_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نقاط الغرامة وعدد أحداث Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;eco_5_fine / eco_5_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نقاط الغرامة وعدد أحداث Seat Belt</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>يمكن الاطلاع على معرّفات أنواع الأحداث <a href="../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения"><span>في دليل «أنواع جودة القيادة»</span></a>. تُعرض القيمة في عمود ID. وعند إنشاء نوع جديد يمنحه النظام تلقائيًا معرّفًا فريدًا يُستخدم لاحقًا في مقاييس BI Analytics API.</div></td></tr></tbody></table>
