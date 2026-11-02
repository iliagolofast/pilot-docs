---
title: "كيفية تفعيل الحراسة على الكائن"
---

لتفعيل الحراسة على كائن، يجب أن يكون [حساس الأمان](../../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html) مُعدّاً عليه. إذا كان الحساس مُعدّاً، فسيظهر في قائمة الكائن بند «تفعيل الحراسة».

# ![](images/drex_kak_postavit_obekt_na_okhranu_custom.png)   ![](images/drex_kak_postavit_obekt_na_okhranu_custom_2.png)

كما يجب لعمل هذه الوظيفة أن تكون في النظام قوالب أوامر باسمَي arm وdisarm. [أعدّها](kak-postavit-obekt-na-okhranu.html#Как_настроить_шаблоны_команд) مسبقاً في واجهة الويب وعندها ستظهر أوامر تفعيل الحراسة:

-   Arm — تفعيل الحراسة
    
-   Disarm — إلغاء الحراسة
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_3.png)  ![](images/drex_kak_postavit_obekt_na_okhranu_custom_4.png)

عند تغيّر حالة الحراسة ستظهر بجوار الكائن في القائمة الأيقونة المناسبة:

![](images/drex_kak_postavit_obekt_na_okhranu_custom_5.png) — الكائن تحت الحراسة

![](images/drex_kak_postavit_obekt_na_okhranu_custom_6.png) — الحراسة على الكائن ملغاة

![كيفية تفعيل الحراسة على الكائن](images/drex_kak_postavit_obekt_na_okhranu_screen.png)  ![كيفية تفعيل الحراسة على الكائن](images/drex_kak_postavit_obekt_na_okhranu_screen_2.png)

## كيفية إعداد قوالب الأوامر

تُعدّ قوالب الأوامر في واجهة الويب لـ PILOT:

1\. افتح الحساب الشخصي للمستخدم

2\. انتقل إلى قسم «الرئيسية»

3\. اضغط على أيقونة «الأوامر»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_7.png)

3\. ستُفتح نافذة يمكن فيها إنشاء قوالب الأوامر.

![](images/drex_kak_postavit_obekt_na_okhranu_custom_8.png)

### كيفية إنشاء قالب أمر

1\. اضغط «إضافة أمر»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_9.png)

2\. اختر الكائن الذي يُنشأ الأمر له

3\. اضغط ![](images/drex_kak_postavit_obekt_na_okhranu_custom_10.png)

![](images/drex_kak_postavit_obekt_na_okhranu_custom_11.png)

3\. حدّد المعلمات:

-   نوع الأمر — GRPS
    
-   صنف الأمر — SMS\_VIA\_GPRS
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_12.png)

4\. في حقل «SMS» أدخل نص الأمر، مثلاً: setdigout 0 — إلغاء الحراسة

![](images/drex_kak_postavit_obekt_na_okhranu_custom_13.png)

5\. عند الحاجة فعّل خانة hex إذا كان يجب إرسال الأمر بتنسيق HEX

6\. اضغط «حفظ كقالب» وأدخل الاسم

![](images/drex_kak_postavit_obekt_na_okhranu_custom_14.png)

يجب تحديد أسماء القوالب بدقة:

-   arm — تفعيل الحراسة
    
-   disarm — إلغاء الحراسة
    
    تُكتب الأسماء بأحرف صغيرة. ومن خلال هذه الأسماء بالتحديد يجد التطبيق الأوامر وينفذها.
    

## أمثلة على الأوامر

تفعيل الحراسة — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>الجهاز</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>قالب الأمر</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

إلغاء الحراسة — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>الجهاز</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>قالب الأمر</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>
