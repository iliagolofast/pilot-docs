---
title: "الاتصال بـ BI Analytics API"
---

للاتصال بـ BI Analytics API، يجب الحصول على بيانات المصادقة وضبط معلمات الاتصال بشكل صحيح.

للاتصال ستحتاج إلى:

— اسم المستخدم وكلمة المرور لحساب الشريك

— عنوان الخادم الذي يعمل عليه حسابك

بعد تجهيز هذه البيانات ستتمكن من استخدام BI Analytics API للاتصال بـ Power BI أو أي نظام BI آخر يدعم العمل مع REST API.

## من أين تحصل على اسم المستخدم وكلمة المرور

للاتصال بـ BI Analytics API تحتاج إلى اسم المستخدم وكلمة المرور لحساب الشريك.

استخدم البيانات نفسها التي مُنحت لك عند تسجيل حساب الشريك. وهي اسم المستخدم وكلمة المرور نفسهما المستخدمان لتسجيل الدخول إلى لوحة المسؤول.

إذا كانت لديك صلاحيات المسؤول الرئيسي، فيمكنك الاطلاع على هذه البيانات في بطاقة حساب الشريك في علامة التبويب «الإعدادات الأساسية»:

-   اسم المستخدم — استخدمه كـ username
    
-   كلمة المرور — استخدمها كـ password
    

![الاتصال بـ BI Analytics API](images/drex_podklyuchenie_k_bi_analytics_api_screen.png)

## كيفية اختيار عنوان الخادم

للاتصال بـ BI Analytics API يجب تحديد عنوان الخادم في الطلب ضمن المعلمة BaseUrl. استخدم الخادم الذي يعمل عليه حسابك.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الخادم</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; العنوان</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الغرض</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Production</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الخادم الرئيسي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المملكة العربية السعودية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://ksa.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خادم إقليمي للمملكة العربية السعودية</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; أفريقيا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خادم إقليمي لأفريقيا</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blade</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://blade.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خادم Blade</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://gps.iglit.tech</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خادم Iglit</span></div></td></tr></tbody></table>

في الطلب حدّد عنوان URL المطلوب، مثلاً،

<table><tbody><tr><td><span></span></td><td><div>BaseUrl = "https://ksa.pilot-gps.com",</div></td></tr></tbody></table>
