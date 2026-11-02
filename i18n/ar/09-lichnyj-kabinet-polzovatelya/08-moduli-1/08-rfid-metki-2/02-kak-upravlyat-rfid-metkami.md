---
title: "كيفية إدارة وسوم RFID"
---

في الوحدة البرمجية «وسوم RFID» يمكنك إضافة الوسوم وتعديلها، وتجميعها في مجموعات، والبحث عن السجلات المطلوبة، وتحميل البيانات من Excel.

## كيفية إضافة وسم RFID

لإنشاء وسم RFID جديد:

1\. انتقل إلى علامة التبويب «وسوم RFID»

![](images/drex_kak_upravlyat_rfid_metkami_custom.png)

2\. اضغط زر «إضافة» ![](images/drex_kak_upravlyat_rfid_metkami_custom_2.png)

![كيفية إدارة وسوم RFID](images/drex_kak_upravlyat_rfid_metkami_screen.png)

ستُفتح بطاقة إنشاء وسم RFID.

![](images/drex_kak_upravlyat_rfid_metkami_custom_3.png)

املأ الحقول المطلوبة:

-   ID — المعرّف الفريد لوسم RFID. يُدخل عادةً يدوياً باستخدام المعرّف الذي يرسله قارئ RFID عند قراءة الوسم. وفي بعض الحالات قد يُعيَّن المعرّف تلقائياً بعد أول قراءة للوسم بواسطة الجهاز.
    
-   الاسم — اسم وسم RFID الذي سيظهر به في النظام
    
-   المجموعة — المجموعة التي ينتمي إليها الوسم
    
-   الوصف — معلومات إضافية عن الوسم
    
-   خط العرض وخط الطول — الإحداثيات التقريبية لموقع وسم RFID. مثلاً، إذا كان وسم RFID مثبّتاً على موقع حاويات أو نقطة تفتيش أو أي كائن ثابت آخر، فيمكنك حفظ إحداثياته في النظام
    
-   وسم ثابت — فعّل هذا الخيار إذا كان الوسم في مكان دائم ولا يتحرك. يمكن ربط وسم RFID الثابت [بسياج جغرافي](../geozony-2/privyazka-rfid-metki-k-geozone.html) أو [بنقطة في المسار](../marshruty-3/kak-sozdat-marshrut.html#Как_привязать_RFID_/_BLE-метку_к_точке_маршрута) أو [بمحطة حافلة](../rejsy-2/kak-dobavit-ostanovki.html#Как_привязать_RFID-метку_к_остановке). في هذه الحالة سيأخذ PILOT قراءة الوسم في الحسبان عند تحديد زيارة هذه المناطق
    
    3\. اضغط «حفظ». بعد الحفظ سيظهر الوسم في القائمة العامة
    

![](images/drex_kak_upravlyat_rfid_metkami_custom_4.png)

## كيفية إنشاء مجموعة وسوم RFID

إذا لم تكن المجموعة المطلوبة موجودة في النظام، فيمكن إنشاؤها عند إضافة الوسم أو تعديله.

1\. في حقل «المجموعة» أدخل اسم المجموعة الجديدة

![](images/drex_kak_upravlyat_rfid_metkami_custom_5.png)

2\. املأ بقية معلمات الوسم

3\. اضغط «حفظ»

![](images/drex_kak_upravlyat_rfid_metkami_custom_6.png)

ستُنشأ المجموعة الجديدة تلقائياً وتصبح متاحة عند إضافة وسوم RFID التالية.

## كيفية تعديل وسم RFID

1\. اضغط مرتين على الوسم في القائمة

2\. عدّل المعلمات المطلوبة

3\. اضغط «حفظ»

![](images/drex_kak_upravlyat_rfid_metkami_custom_7.png)

## كيفية البحث عن وسم RFID

للبحث استخدم عامل التصفية حسب المجموعات أو شريط البحث.

![كيفية إدارة وسوم RFID](images/drex_kak_upravlyat_rfid_metkami_screen_2.png)

1 — البحث حسب المجموعة

اختر المجموعة فوق القائمة. بعد الاختيار يتحدّث الجدول وتبقى فيه السجلات التابعة لهذه المجموعة فقط.

2 — البحث حسب الاسم أو ID

أدخل قيمة معروفة في شريط البحث. ستبقى في القائمة السجلات المطابقة للطلب.

لإظهار جميع الوسوم مجدداً، امسح شريط البحث.

## الأوامر في شريط الأدوات

في الشريط العلوي للوحدة البرمجية تتوفر أوامر لإنشاء وسوم RFID وتحديثها واستيرادها وتصديرها وعرضها.

![كيفية إدارة وسوم RFID](images/drex_kak_upravlyat_rfid_metkami_screen_3.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_8.png) إضافة — إنشاء وسم RFID

![](images/drex_kak_upravlyat_rfid_metkami_custom_9.png) تصدير إلى Excel — حفظ قائمة الوسوم في ملف XLSX

![](images/drex_kak_upravlyat_rfid_metkami_custom_10.png) استيراد من Excel — تحميل وسوم RFID من ملف بصيغة XLSX لإضافة الوسوم أو تحديث قائمتها. قبل الاستيراد تأكد من أن بنية الملف تطابق قالب Excel

![](images/drex_kak_upravlyat_rfid_metkami_custom_11.png) تنزيل قالب Excel — تنزيل قالب ملف لاستيراد وسوم RFID. املأ الحقول المطلوبة في القالب واحفظ الملف، ثم استخدم «استيراد من Excel» وحمّل الملف المعبأ

![](images/drex_kak_upravlyat_rfid_metkami_custom_12.png) تحديث — تحديث قائمة وسوم RFID دون إعادة تحميل الصفحة

![](images/drex_kak_upravlyat_rfid_metkami_custom_13.png) ضبط ألوان الأيقونات —  [ضبط عرض وسوم RFID بالألوان](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_настроить_цвет_маркера) على الخريطة بحسب وقت استلام آخر البيانات

![](images/drex_kak_upravlyat_rfid_metkami_custom_14.png) إظهار على الخريطة — عرض وسوم RFID المختارة على الخريطة. قبل الاستخدام اختر وسماً واحداً أو أكثر في القائمة

![](images/drex_kak_upravlyat_rfid_metkami_custom_15.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_16.png)  مسح الخريطة — إزالة جميع وسوم RFID المعروضة من الخريطة

## إجراءات وسم RFID

تتوفر لوسوم RFID في القائمة إجراءات إضافية.

![كيفية إدارة وسوم RFID](images/drex_kak_upravlyat_rfid_metkami_screen_4.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_17.png) إظهار على الخريطة —  عرض آخر موقع معروف لوسم RFID على الخريطة

![](images/drex_kak_upravlyat_rfid_metkami_custom_18.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_19.png)  سجل الوسم — عرض سجل استخدام وسم RFID

![](images/drex_kak_upravlyat_rfid_metkami_custom_20.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_21.png) حذف الوسم — حذف وسم RFID من النظام
