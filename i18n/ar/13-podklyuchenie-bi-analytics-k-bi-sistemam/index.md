---
title: "ربط BI Analytics بأنظمة BI"
---

تتيح BI Analytics ربط بيانات نظام المراقبة بمنصات BI الخارجية لإنشاء تقارير ومخططات ولوحات معلومات ولوحات تحليلية خاصة بك.

![](images/drex_podklyuchenie_bi_analytics_k_bi_sistemam_custom.png)

باستخدام BI Analytics API يمكنك الحصول على بيانات عن المركبات والسائقين والرحلات واستهلاك الوقود ومخالفات «القيادة الاقتصادية» وغيرها من المؤشرات، ثم استخدامها في أي نظام BI يدعم العمل مع REST API.

تناسب BI Analytics كلًا من إنشاء التقارير البسيطة وبناء التحليلات المؤسسية باستخدام مؤشرات ومرشحات وتصورات مرئية خاصة بك.

يمكن استخدام البيانات المستلمة في أنظمة BI مثل:

-   Microsoft Power BI
    
-   Tableau
    
-   Qlik Sense
    
-   Apache Superset
    
-   Grafana
    
-   منصات أخرى تدعم REST API
    

## ما المطلوب للربط

قبل الربط، تأكد من أن:

— [وحدة التحليلات مفعّلة في حساب الشريك](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_партнёрском_аккаунте)

— [وحدة التحليلات مفعّلة أيضًا في عقد المستخدم](kak-vklyuchit-dostup-k-bi-analytics.html#Включение_модуля_аналитики_на_договоре_пользователя)

— [المعامل bi\_analytics = 1 مضبوط في إعدادات الشريك](kak-vklyuchit-dostup-k-bi-analytics.html#Подключение_конфигурации)

— [اسم المستخدم وكلمة المرور لحساب الشريك](podklyuchenie-k-bi-analytics-api.html#Где_взять_логин_и_пароль) معروفان

 — تم اختيار [عنوان الخادم الصحيح](podklyuchenie-k-bi-analytics-api.html#Как_выбрать_адрес_сервера)

بعد إجراء هذه الإعدادات يمكنك الاتصال بـ BI Analytics API من أي منصة BI مدعومة.

## وثائق API (Swagger)

لعرض بنية أساليب BI Analytics API يمكنك استخدام وثائق API بصيغة Swagger: [BI API v1 — Swagger](https://bi-swagger.pilot-gps.com/?urls.primaryName=BI+API+v1+Russian#/)

في وثائق Swagger يمكنك:

— استعراض جميع أساليب API المتاحة

— الاطلاع على بنية الطلبات والاستجابات

— تنزيل مواصفات API بصيغة JSON
