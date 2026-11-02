---
title: "ربط جهاز فيديو في الحساب الشخصي للمستخدم"
---

بعد أن [يضبط المسؤول الوحدات البرمجية](nastrojka-modulej-v-paneli-administratora.html) «الفيديو» و«CMS» في لوحة المسؤول، على المستخدم إنشاء كائن وضبط الكاميرات.

## إنشاء كائن

1\. ادخل إلى الحساب الشخصي للمستخدم

2\. انتقل إلى قسم «الأساسية»

3\. انقر «إنشاء كائن» ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom.png)

![ربط جهاز فيديو في الحساب الشخصي للمستخدم](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen.png)

4\. املأ البيانات في [بطاقة الكائن](../../obekty-1/kartochka-obekta/index.html):

-   رقم المركبة أو اسم الكائن
    
-   رقم معرّف الجهاز (ID)
    
    5\. في حقل «نوع الجهاز» اختر:
    
-   CMS، إذا كان لديك جهاز CMS
    
-   Howen، إذا كان لديك جهاز Howen
    
-   أو أنواعاً أخرى
    

![ربط جهاز فيديو في الحساب الشخصي للمستخدم](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_2.png)

1 — نوع الجهاز

2 — القالب. لأجهزة CMS توجد في النظام قوالب عامة جاهزة (إعدادات للربط السريع)

لا توجد قوالب للأجهزة الأخرى، لذا اختر نوع الجهاز فقط.

6\. انقر «حفظ» — ستُطبَّق الإعدادات ويظهر الكائن في القائمة.

## ضبط الكاميرات للكائن

بعد حفظ الكائن، حدّد عدد الكاميرات المتصلة وكيفية عملها.

1\. افتح بطاقة الكائن — بالنقر المزدوج على الكائن في القائمة

2\. انتقل إلى علامة التبويب «الفيديو»

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_2.png)

3\. انقر «إضافة كاميرا» ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_3.png)

4\. حدّد:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_4.png)

-   اسم الكاميرا
    
-   نوع الجهاز
    
-   رقم القناة
    
    إذا حددت خيار Main stream، فستبث الكاميرا الفيديو بجودة عالية (صورة واضحة وتفاصيل أكثر)، لكن استهلاك حركة الإنترنت سيكون أعلى.
    

إذا لم تحدد هذا الخيار، فسيُستخدم التدفق الفرعي (sub-stream) — جودة الصورة أقل، لكن استهلاك الحركة أكثر اقتصاداً.

5\. انقر «حفظ»

6\. كرّر ذلك لجميع الكاميرات التي تريد إضافتها

## ربط جهاز فيديو إضافي

في نظام PILOT يمكنك إضافة جهاز فيديو إضافي إلى الكائن إذا كان لديك جهاز أساسي بالفعل (مثلاً Teltonika).

يلزم ذلك مثلاً في الحالات التالية:

-   Teltonika يجمع بيانات القياس عن بُعد (السرعة، المسارات، الحساسات)،
    
-   بينما يتولى CMS أو Howen الفيديو.
    

وبذلك يمكن للكائن الواحد أن يعمل في الوقت نفسه ببيانات GPS وبتدفق الفيديو.

### إضافة جهاز إضافي

1\. افتح بطاقة الكائن

![ربط جهاز فيديو في الحساب الشخصي للمستخدم](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_3.png)

2\. انتقل إلى حقل «IMEI إضافي» وانقر ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_5.png)

3\. في النافذة التي تظهر انقر زر «إضافة»

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_6.png)

4\. اختر نوع الجهاز من القائمة

5\. عند إضافة الجهاز يمكنك اختيار المعاملات:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_7.png)

-   تجاهل الإحداثيات
    
    لن تُؤخذ في الحسبان الإحداثيات الواردة من جهاز الفيديو الإضافي، لأن الجهاز الأساسي ينقلها بالفعل.
    
-   تجاهل Retrans
    
    ستُعطَّل إعادة إرسال البيانات (إعادة البث) من الجهاز الإضافي، حتى لا تتكرر البيانات ولا تتعارض مع القياس عن بُعد الأساسي.
    

6\. انقر «حفظ»، ولا تنس أيضاً حفظ التغييرات في بطاقة الكائن.
