---
title: "ضبط جدول معايرة الحساس"
---

يوجد في PILOT نوعان من جداول المعايرة: جدول معايرة برسم بياني وجدول معايرة بحالات نصية. لا يمكن تعديل جدول المعايرة إلا بعد حفظ الحساس الجديد.

جدول المعايرة هو مرجع مطابقة يحوّل قراءات الحساس التقنية إلى قيم مفهومة.

لنستعرض مثالًا على استخدام جدول المعايرة لحساس مستوى الوقود

لنفترض أن لدينا خزان وقود غير قياسي الشكل، ولهذا لا يمكن التعبير عن حجمه بعلاقة بسيطة بمستوى الوقود.

نركّب فيه حساس مستوى وقود يعمل بمبدأ المقاومة المتغيرة. فهو لا يقيس حجم الوقود مباشرة، بل يغيّر مقاومته الكهربائية بحسب مستوى السائل. ونتيجة لذلك يعطي الحساس البيانات بالأوم وليس باللترات.  نطاق مقاومة الحساس من 10 إلى 180 أوم. ولتحديد مستوى الوقود في الخزان بشكل صحيح، يجب إجراء المعايرة وإنشاء جدول مطابقة.

معايرة الخزان:

1\. نفرّغ الخزان تمامًا ونسجل الحد الأدنى لمقاومة الحساس

2\. ثم نصب الوقود على دفعات، مثلًا 10 لترات في كل مرة، ونسجل قراءات المقاومة

3\. نسجل قراءات الحساس بعد كل عملية صب

4\. نكرر العملية حتى يمتلئ الخزان تمامًا

5\. ننشئ جدول المعايرة – مطابقة مستوى الوقود باللترات مع مقاومة الحساس بالأوم

مثال على جدول معايرة لخزان سعته 100 لتر

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; مستوى الوقود، لتر</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; مقاومة الحساس، أوم</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 180</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 160</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 140</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 120</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 70</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 90</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td></tr></tbody></table>

عندما يرسل الحساس، مثلًا، 100 أوم، يفهم النظام من جدول المعايرة أن في الخزان نحو 40 لترًا من الوقود. وإذا أرسل الحساس 110 أوم، يحسب النظام أن مستوى الوقود نحو 35 لترًا.

## جدول معايرة برسم بياني 

نوع من جداول المعايرة تُحوَّل فيه قراءات الحساس إلى قيم حقيقية بواسطة رسم بياني للعلاقة. يحمل المحور X قراءات الحساس، ويحمل المحور Y القيم الحقيقية للكمية المقيسة. يُرسم بين النقاط المستلمة رسم بياني يحدد القيمة الحقيقية لقراءة الحساس. يُستخدم هذا النوع من جداول المعايرة غالبًا مع حساسات مستوى الوقود والوزن ودرجة الحرارة والرطوبة.

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

### كيفية إنشاء الجدول

يمكنك ضبط الجدول في نافذة معلمات الحساس أو تحميل جدول جاهز من ملف. ويمكن حفظ الجدول المضبوط في ملف واستخدامه لحساسات أخرى مشابهة.

![ضبط جدول معايرة الحساس](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_screen.png)

لفتح جدول المعايرة، انقر «تعديل».

<table><tbody><tr><td><div><h3>تعديل الجدول</h3></div><div><img alt="1. " src="images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-src="drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-width="188" data-full-height="33"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_2.png)

كيفية إضافة القيم إلى الجدول:

-   انقر «إضافة»  ![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    

2\. أدخل كمية الوقود الفعلية والقيمة التي يعرضها الحساس

3\. انقر «حفظ»

4\. كرر الخطوات لجميع القراءات المطلوبة

مثال على جدول مملوء

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

## جدول معايرة بحالات نصية

يُستخدم هذا النوع من جداول المعايرة مع الحساسات متعددة الأوضاع، ويحوّل القيم الرقمية للحساس إلى حالات مفهومة للمستخدم.

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_4.png)

لنستعرض مثالًا على استخدام جدول من هذا النوع

مثلًا، لدينا حساس متعدد الأوضاع لهوائي GPS يعرض مستوى الإشارة. يقيس مستقبل GPS قوة الإشارة بوحدة dBm، وتتراوح قيمها عادةً بين -160 dBm و-120 dBm.

في الجدول نحوّل القيم التقنية التي يرسلها الحساس إلى حالات مفهومة: «لا توجد إشارة» و«إشارة ضعيفة» و«إشارة متوسطة» و«إشارة جيدة».

عندما يرسل الحساس قيمة، مثلًا -135 dBm،  يجد النظام المطابقة في الجدول ويحوّلها إلى حالة نصية — «إشارة ضعيفة». وتظهر الحالة النصية في [التلميحة المنبثقة](../obekty-1/dopolnitelnaya-informatsiya-ob-obekte.html) للكائن و[التقارير](../otchyety-1/index.html).

يمكن استخدام جدول المعايرة هذا لمعلمات مختلفة،  فمثلًا يمكن تحديد نطاقات قيم لقياس درجة الحرارة: «بارد» — 0–10°C و«دافئ» — 10–25°C و«حار» — 25°C فما فوق؛  وعرض شحن البطارية لا بالنسب المئوية بل بالحالات «منخفض» و«متوسط» و«ممتلئ».

كيفية إضافة جدول معايرة للحساسات متعددة الأوضاع:

-   افتح نافذة معلمات الحساس
    
-   في القسم «جدول المعايرة» انقر «تعديل»
    
-   في نافذة جدول المعايرة انقر «إضافة»![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    
-   املأ عمودي القيمة الدنيا والقصوى للحساس،
    
-   حدد الحالات النصية في العمود «الدلالة»
    
-   اختر أيقونة ولون Background للحالة.  يُستخدم لون الحالة في الرسوم البيانية و[في السجل](../istoriya/kak-rabotat-s-istoriej.html#трек_по_датчику) عند إنشاء المسار.
    
-   انقر «حفظ»
