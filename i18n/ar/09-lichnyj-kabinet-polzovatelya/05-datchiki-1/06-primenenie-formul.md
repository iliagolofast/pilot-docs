---
title: "استخدام الصيغ"
---

صيغة التحويل هي تعبير رياضي يُطبَّق على البيانات المستلمة من الحساس.

لماذا تُطبَّق الصيغة:

-   لتصحيح قراءات الحساس، فمثلًا تتيح الصيغة تصحيح عدم الدقة في قراءات الحساسات
    
-   لتحويل البيانات الخام للحساس إلى كميات فيزيائية حقيقية. فمثلًا، يعطي الحساس أرقامًا من 0 إلى 1000، وتحوّلها الصيغة إلى لترات الوقود الفعلية في الخزان
    
-   لتحويل وحدات القياس، مثلًا تحويل الكيلومترات إلى أميال أو اللترات إلى جالونات
    
-   لدمج البيانات، فمثلًا يمكن للصيغة استخدام قيم من حساسات مختلفة للحصول على مؤشرات جديدة
    

تُطبَّق الصيغة في نافذة ضبط الحساس في حقل خاص

![استخدام الصيغ](images/drex_primenenie_formul_screen.png)

<table><tbody><tr><td><span></span></td><td><div>تُطبَّق الصيغة على البيانات فور استلامها من الحساس، قبل&nbsp;استخدام جدول <a href="dobavlenie-datchika.html#тарировочная_таблица"><span>المعايرة</span></a>.</div></td></tr></tbody></table>

يجب أن تبدأ الصيغة بإحدى العلامات التالية:

• العلامات الحسابية: +، -، \*، /

• علامة المساواة: =

يمكن استخدام ما يلي في الصيغة:

• العمليات الرياضية: الجمع (+) والطرح (-) والضرب (\*) والقسمة (/)

• الأقواس الدائرية ( ) لتحديد ترتيب العمليات

## الصيغ البسيطة

تُستخدم في العمليات البسيطة، مثل الضرب والقسمة والجمع والطرح. تُدرج القيمة الأصلية للحساس في الصيغة تلقائيًا.

لنستعرض مثالًا على تطبيق الصيغة

لنفترض أن لدينا حساس شحن البطارية يرسل القيمة بالمللي فولت. نجد في النقاط الخام قيمة الحساس: Vsource = 9246.

![](images/drex_primenenie_formul_custom.png)

لعرض قيمة الحساس المألوفة بالفولت، يجب قسمة القيمة غير المعالجة على 1000. في نافذة ضبط الحساس في الحقل «الصيغة» نكتب الصيغة: /1000.

ستُحسب القيمة النهائية للحساس بالصيغة Vbattery/1000:

-   يأخذ النظام القيمة الحالية للحساس في النقاط الخام
    

2\. يقسم هذه القيمة على 1000

3\. تصبح النتيجة المستلمة القيمة الجديدة للحساس

![](images/drex_primenenie_formul_custom_2.png)

ستظهر القيمة النهائية لحساس المركم بالفولت في التلميحة المنبثقة للكائن — 9,25 فولت.

![](images/drex_primenenie_formul_custom_3.png)

### أمثلة على الصيغ البسيطة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الصيغة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; النتيجة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ضرب القيمة الأصلية في 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/1000</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قسمة القيمة الأصلية على 1000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; /25.5+7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قسمة القيمة على 25.5 وإضافة 7 إليها</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; /100+(7*3-2)*4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مثال أكثر تعقيدًا باستخدام الأقواس</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>تُكتب الكسور العشرية في الصيغ بنقطة وليس بفاصلة. مثلًا: 25.4 و1.75</div></td></tr></tbody></table>

## المتغيرات في الصيغة

يمكن إدراج بيانات من حقول الحساسات ومتغيرات قياسية في الصيغة.

توضع جميع القيم المراد إدراجها في الصيغة بين الرمزين %%

المتغيرات القياسية المستخدمة في الصيغة:

%S% — السرعة

%A% — الارتفاع

%D% — الاتجاه

%P% أو %satsinview% — عدد الأقمار الصناعية

%ts% — وقت الحزمة الحالية

%ts1% — وقت الحزمة السابقة

يُستخدم الوقت بتنسيق Unixtimestamp — وهو عدد الثواني المنقضية منذ 1 يناير 1970.

%value% — قيمة الحساس الحالي

تؤخذ جميع القيم الأخرى مباشرة من الأسماء الموجودة في حزمة بيانات النقاط الخام التي يرسلها الحساس.

![](images/drex_primenenie_formul_custom_4.png)

مثلًا:

%Vbattarey% — قيمة حساس شحن البطارية

%GSM% — قيمة مستوى إشارة الاتصال المحمول

%HDOP% — انخفاض الدقة في المستوى الأفقي

ضع اسم المعلمة المطلوب بين %%، وسيُستبدل أثناء الحساب في الصيغة بالقيمة المقابلة من حزمة البيانات.

### أمثلة على الصيغ مع إدراج المتغيرات

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الصيغة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; النتيجة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *%GSM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ضرب القيمة الأصلية في بيانات الحقل GSM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/%HDOP%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قسمة القيمة الأصلية على بيانات الحقل HDOP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts1%-%ts%</span></div></td><td colspan="1" rowspan="1"><div><span>الحصول على الفرق الزمني بين الحزمة الحالية والسابقة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts%/86400</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحويل الوقت من ثوانٍ إلى أيام</span></div></td></tr></tbody></table>

## الصيغ المعقدة

تبدأ الصيغ المعقدة دائمًا بالعلامة =. لا تُستخدم القيمة الأصلية للحساس تلقائيًا في هذه الصيغ. وإذا لزم استخدام القيمة الأصلية، فيجب تحديدها عبر %value%.

تتيح هذه الصيغ تنفيذ عمليات أكثر تعقيدًا، بما فيها استخدام المتغيرات والأقواس والدوال الرياضية.

### أمثلة على الصيغ المعقدة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الصيغة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; النتيجة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =%value%*2+10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ضرب القيمة الحالية للحساس في 5 وإضافة 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;=%S%*3.6+%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحويل السرعة إلى كم/س وإضافة القيمة الأصلية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; </span><span>=</span><span>(%DIN1%+%DIN2%)/%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>قسمة مجموع المداخل الرقمية على القيمة الأصلية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; =7/%value%</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> قسمة الرقم&nbsp;7&nbsp;على&nbsp;القيمة الأصلية للحساس</span></div></td></tr></tbody></table>

## العوامل الشرطية

العوامل الشرطية طريقة لتحديد منطق الاختيار في الصيغة. وهي تتيح للصيغة أن تتخذ قيمًا مختلفة بحسب تحقق شرط معين أو عدم تحققه. وهذا يشبه الاستعلام: «إذا كان الشرط صحيحًا فافعل أمرًا، وإلا فافعل أمرًا آخر».

### يُكتب العامل الشرطي هكذا

الشرط ? القيمة_إذا_نعم : القيمة_إذا_لا

يمكن شرح هذا التعبير هكذا:

— الشرط  — هو التعبير الذي يجري التحقق منه ، مثلًا درجة الحرارة أكبر من 30

—القيمة_إذا_نعم — هي القيمة التي تُرجَع إذا كان الشرط صحيحًا

— القيمة_إذا_لا — هي القيمة التي تُرجَع إذا كان الشرط غير صحيح

### عوامل المقارنة

يمكن استخدام العوامل التالية في الشروط:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>العامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعنى</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ==</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يساوي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> يتحقق من المساواة التامة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; !=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا يساوي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق من عدم المساواة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أكبر من</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق مما إذا كانت القيمة اليسرى أكبر من اليمنى</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &lt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أصغر من</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق مما إذا كانت القيمة اليسرى أصغر من اليمنى</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أكبر من أو يساوي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق مما إذا كانت القيمة اليسرى أكبر من اليمنى أو تساويها</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &lt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أصغر من أو يساوي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق مما إذا كانت القيمة اليسرى أصغر من اليمنى أو تساويها</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &amp;&amp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; و</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق من أن جميع الشروط صحيحة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ||</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أو</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; يتحقق من أن شرطًا واحدًا على الأقل صحيح</span></div></td></tr></tbody></table>

### المثال 1

لنفترض أن لدينا حقل حساس المدخل الرقمي DIN1، ونريد تحديد الشرط:

-   إذا كانت DIN1 تساوي 1، فستكون النتيجة 22
    
-   إذا كانت DIN1 لا تساوي 1، فستكون النتيجة 33
    

ستبدو الصيغة هكذا: =(%DIN1% == 1) ? 22 : 33

يتحقق النظام من الشرط: %DIN1% == 1 (هل قيمة DIN1 تساوي الرقم 1). إذا كان الشرط صحيحًا، تُرجَع 22. وإذا كان الشرط غير صحيح، تُرجَع 33.

### المثال 2

لنفترض أن لدينا حقل حساس درجة الحرارة temp، ونريد تحديد الشرط:

-   إذا كانت درجة الحرارة أكبر من 30، فستكون النتيجة: درجة الحرارة \* 10.
    
-   إذا كانت درجة الحرارة أصغر من 30 أو تساويها، فستكون النتيجة: درجة الحرارة \* 20.
    

ستبدو الصيغة هكذا: =(%temp% > 30) ? %temp% \* 10 : %temp% \* 20.

يتحقق النظام من الشرط: %temp% > 30 (هل درجة الحرارة أكبر من 30). إذا كان الشرط صحيحًا، تُرجَع درجة الحرارة \* 10. وإذا كان الشرط غير صحيح، تُرجَع درجة الحرارة \* 20.

### المثال 3

لنفترض أن لدينا حساس درجة حرارة بالحقل temp وحساس رطوبة humidity، ونريد تحديد الشرط التالي:

-   إذا كانت درجة الحرارة أكبر من 25 والرطوبة أقل من 60%، فستكون النتيجة 100
    
-   وإلا فستكون النتيجة 50
    

ستبدو الصيغة هكذا: =(%temp% > 25 && %humidity% < 60) ? 100 : 50

%temp% > 25 — الشرط الأول (درجة الحرارة أكبر من 25)، %humidity% < 60 — الشرط الثاني (الرطوبة أقل من 60%). يعني العامل && أنه يجب تحقق الشرطين معًا. يتحقق النظام من الشروط، وإذا كان الشرطان صحيحين، تُرجَع 100، وإذا كان أحد الشرطين على الأقل غير صحيح، تُرجَع 50.

## دوال PHP

دوال PHP أدوات جاهزة للغة البرمجة PHP لمعالجة البيانات وتحويلها وتنسيقها.  باستخدام [دوال PHP](https://www.php.net/manual/ru/ref.math.php) طبّق تحويلات معقدة بمجرد كتابة اسم الدالة والقيمة في الصيغة.

كل ما عليك فعله:

1\. اكتب اسم الدالة في الصيغة

2\. حدد بين القوسين القيمة التي تريد تحويلها

3\. وسيأخذ النظام بياناتك تلقائيًا ويعالجها بالطريقة المطلوبة ويعرض النتيجة

مثلًا، إذا كتبت round (45.78) في الصيغة، فستحصل على الرقم المقرَّب 46.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; الدوال</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; مثال</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; substr</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تستخرج جزءًا من سلسلة نصية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =substr('%Data%', x, y) — تُرجع «y» من الأحرف من القيمة Data بدءًا من الموضع «x»</span></div><div><span>&nbsp;&nbsp; =substr('%FIELD%', 1, 2) — تُرجع حرفين من القيمة FIELD بدءًا من الموضع 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; round</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تقرّب الرقم</span></div></td><td colspan="1" rowspan="1"><div><span>=round(%AIN1%/1000) — تقسم القيمة AIN1 على 1000 وتقرّب النتيجة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hexdec</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>تحوّل الرقم السداسي عشري إلى عشري</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hexdec('%Param%')، إذا كانت Param=0A، فسترجع الدالة القيمة 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; dechex</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> تحوّل الرقم العشري إلى سداسي عشري</span></div></td><td colspan="1" rowspan="1"><div>&nbsp; =<span>dechex('%Param%')، إذا كانت Param=255، فستحوّل الدالة 255 إلى 'FF'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; decbin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحوّل الرقم العشري إلى ثنائي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>=decbin('%Param%')، إذا كانت Param=10، فسترجع الدالة 1010&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hex2bin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>تحوّل الكتابة السداسية عشرية إلى بيانات ثنائية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hex2bin ('%Param%')، إذا كانت Param=4142، فسترجع الدالة التمثيل الثنائي</span></div><div><span>&nbsp; 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; strrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تعكس السلسلة النصية</span></div></td><td colspan="1" rowspan="1"><div><span>=strrev('%value%')، إذا كانت value=0123d848010000e5، فستحوّل الدالة القيمة &nbsp; &nbsp; &nbsp;</span></div><div><span>5е000010848d3210</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; bytesrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تعكس البايتات السداسية عشرية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =bytesrev('%value%')، وvalue=0123d848010000e5، فستحوّل الدالة القيمة</span></div><div><span>&nbsp; e500000148d82301</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; explode</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;</div><div><span><strong>&nbsp;</strong></span><span> تقسم السلسلة النصية إلى أجزاء بحسب الفاصل المحدد وتُرجع مصفوفة من السلاسل النصية</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>=explode(',','%value%')[2]</span></div><div><span>لنفترض أن الحساس يرسل سلسلة قيم مفصولة بفواصل: 90.5,3450,112,43,215</span></div><div><span>تأخذ الصيغة&nbsp;=explode(',','%value%')[2]&nbsp;في هذه الحالة قراءات الحساس الحالية وتقسمها إلى مصفوفة: '90.5' و'3450' و'112' و'43' و'215'، ثم تستخرج العنصر ذا الفهرس 2 —&nbsp;'112'</span></div><div><span>مصفوفة السلاسل النصية&nbsp;—&nbsp; هي قائمة سلاسل نصية منفصلة مرقّمة بدءًا من الصفر.</span></div><div><span>','&nbsp;— هي الفاصل، وهو في هذه الحالة الفاصلة. سيجري تقسيم السلسلة النصية عند هذا الرمز.</span></div><div><span>'%value%'&nbsp;— هي السلسلة النصية المراد تقسيمها.</span></div><div><span>[2]&nbsp;— تُستخدم الأقواس المربعة للوصول إلى عنصر في المصفوفة. [2] تعني — «أعطني العنصر الثالث»، إذ يبدأ الترقيم من 0.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تقارن عدة قيم وتُرجع الأكبر</span></div></td><td colspan="1" rowspan="1"><div><span>=max('%value%', 90)، إذا كانت value=85، فسترجع الدالة 90</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تُرجع القيمة الأصغر</span></div></td><td colspan="1" rowspan="1"><div><span>=min('%value%', 90)، إذا كانت value=85، فسترجع الدالة 85</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; abs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تُرجع القيمة المطلقة للرقم</span></div></td><td colspan="1" rowspan="1"><div><span>=abs('%value%')، إذا كانت value = -15، فترجع الدالة 15</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; str_replace</span></div></td><td colspan="1" rowspan="1"><div><span>تستبدل أحرفًا أو كلمات بأخرى</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>str_replace(search, replace, subject)</span></div><ul><li><div><span>search — ما نبحث عنه</span></div></li><li><div><span>replace — ما نستبدله به</span></div></li><li><div><span>subject — أين نبحث (السلسلة النصية)</span></div></li></ul><div><span>&nbsp;مثلًا، نحتاج إلى استبدال الفواصل بنقاط في الأرقام</span></div><div><span>=str_replace(",", ".",'%value%')، إذا كانت value = 1,234,567، فستُخرج الدالة — 1.234.567</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sqrt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحسب الجذر التربيعي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sqrt('%value%')، إذا كانت value = 25 ، فترجع الدالة القيمة 5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; pow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ترفع الرقم إلى أس</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =pow('%value%', 3)، إذا كانت value =2، فترجع الدالة 8 (أي 2³)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحسب جيب الزاوية (بالراديان)&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sin('%value%')، إذا كانت value= 1.57، فالقيمة النهائية ≈ 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحسب جيب تمام الزاوية (بالراديان)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =cos('%value%')، إذا كانت value = 0، فالقيمة النهائية 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; asin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحسب الجيب العكسي (بالراديان)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =asin('%value%')، إذا كانت value=1، فترجع الدالة 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; acos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تحسب جيب التمام العكسي (بالراديان)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =acos('%value%')، إذا كانت value= 0، فترجع الدالة 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number_format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تنسّق الرقم بفواصل</span><span></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =number_format(1234.56, 2, ',', ' ') سترجع الدالة 1 234,56</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تُرجع الوقت الحالي بتنسيق UNIX — بالثواني منذ 1 يناير 1970</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =time('2023-12-20 12:00:00')</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; array_sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تجمع جميع الأرقام في المصفوفة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =array_sum([1,2,3,4]) — ترجع الدالة 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; pack</span></div></td><td colspan="1" rowspan="1"><div><span>تحزّم البيانات في تنسيق ثنائي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =pack('H*', '4142') — تحزّم 'AB' في بيانات ثنائية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; unpack</span></div></td><td colspan="1" rowspan="1"><div><span>تفك تحزيم البيانات الثنائية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =unpack('H*', 'AB')[1] — ترجع '4142'</span></div></td></tr></tbody></table>

### أمثلة على التحويلات المعقدة

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; مثال</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>تحويل الرقم عديم الإشارة إلى رقم بإشارة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=((%BLE_T1%&gt;3000)?((%BLE_T1%-65535)/100):(%BLE_T1%/100))&nbsp;</span></div><div>&nbsp;</div><ul><li><div><span>إذا كان الرقم أكبر من 3000 — نطرح منه 65535 ونقسم على 100</span></div></li><li><div><span>إذا كان أصغر من 3000 أو يساويها — نقسم على 100</span></div><div><span>تُستخدم هذه الصيغة غالبًا مع حساسات درجة الحرارة، حيث تُرمَّز القيم السالبة بأرقام موجبة كبيرة.</span></div></li></ul></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; تحويل تسلسل البايتات</span></div><div><span>&nbsp; (من little endian إلى big endian)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=strtoupper(substr(unpack('H*',strrev(hex2bin(%value%)))[1],2,12))&nbsp;—&nbsp;1500000124286b01&nbsp;→&nbsp;6B2824010000</span></div><ul><li><div><span>hex2bin(%value%) — تحوّل سلسلة hex إلى بيانات ثنائية</span></div></li><li><div><span>strrev(...) — تعكس البايتات</span></div></li><li><div><span>unpack('H*', ...) — تحوّل مرة أخرى إلى hex</span></div></li><li><div><span>substr(..., 2, 12) — تأخذ الجزء المطلوب من السلسلة النصية</span></div></li><li><div><span>strtoupper(...) — تحوّل إلى الأحرف الكبيرة</span></div></li></ul></td></tr></tbody></table>

## القسمة على صفر

عندما تحتوي الصيغة على قسمة، انتبه إلى المقسوم عليه — أي الرقم الذي تُجرى القسمة عليه. إذا كان المقسوم عليه صفرًا، سيحدث خطأ، لأن القسمة على صفر مستحيلة رياضيًا.

مثلًا، ستسبب الصيغة =1000/%DIN1% خطأ إذا كانت قيمة الحساس DIN1 تساوي 0 أو غير محددة.

في هذه الحالة استخدم العامل الشرطي للتحقق من المقسوم عليه: =(%DIN1%==0) ? 0 : 1000/%DIN1%. سيتحقق النظام من الشرط:  %DIN1% == 0 (هل قيمة DIN1 تساوي صفرًا). إذا كان الشرط صحيحًا، ستكون النتيجة 0. وإذا كان الشرط غير صحيح، ستُنفَّذ قسمة 1000 على قيمة DIN1.

## كيفية التحقق من عمل الصيغة

<table><tbody><tr><td><span></span></td><td><div>عند تطبيق الصيغة، تأكد من أنها تحوّل البيانات بشكل صحيح.</div></td></tr></tbody></table>

نتحقق من عمل الصيغة عبر الزر «اختبار»:

![استخدام الصيغ](images/drex_primenenie_formul_screen_2.png)

-   انقر الزر «اختبار» في الحقل «الصيغة».
    
-   سيعرض النظام القيم التي يمكن استخدامها للتحقق من الصيغة المحددة في المعالج. يمكنك اختيار قيم جاهزة أو إدخال قيمك.
    
    3\. بعد ذلك انقر الزر «اختبار» مرة أخرى، وسيعرض النظام نتيجة تطبيق الصيغة: صحيحة أو غير صحيحة.
    

![](images/drex_primenenie_formul_custom_5.png)

## أين تُطبَّق الصيغ أيضًا

يمكن استخدام الصيغ في PILOT ليس فقط لمعالجة بيانات الحساسات. يمكنك تطبيق الصيغ في [«بطاقة الكائن»](../obekty-1/kartochka-obekta/index.html#Формула_в_карточке_объекта) أو عند العمل مع الوحدة البرمجية [«الإشعارات»](../moduli-1/uvedomleniya/index.html). ومبدأ عملها واحد في كل مكان — القواعد نفسها للكتابة والعمليات الرياضية نفسها.
