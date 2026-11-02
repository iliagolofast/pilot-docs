---
title: "إعادة البث"
---

**إعدادات إعادة البث لكائن المراقبة.**

1\. اختر كائن المراقبة.

2\. اختر من القائمة السياقية "إعادة البث".

![](images/drex_retranslyatsiya_1_custom.png)

![](images/drex_retranslyatsiya_1_custom_2.png)

-   **Host -** عنوان المضيف لإعادة بث البيانات وفق البروتوكول المحدد (على شكل عنوان IP أو اسم نطاق).
    
-   **Port -** المنفذ الذي تُعاد إليه البيانات وفق البروتوكول المحدد.
    
-   **Format** - صيغة إعادة البث (اختر من القائمة المنسدلة).
    
-   **External id -** معرّف إعادة البث لكائن المراقبة (يُستخدم عادةً imei أو آخر أرقام imei).
    
-   **المسار -** عند استخدام اسم نطاق يحتوي هذا الحقل على معاملات إضافية.
    
-   **USPW -** إذا كان التعريف مطلوبًا، فسيحتوي هذا الحقل على اسم المستخدم وكلمة المرور.
    
-   **Time zone -** المنطقة الزمنية بصيغة GMT من القائمة المنسدلة.
    
-   **حد السرعة -** حقل لتحديد أقصى سرعة لنقل البيانات.
    
-   **مفعّل -** زر لتفعيل إعادة الإرسال.
    
-   **Json config** - تكوين إضافي لإعداد إعادة البث بصيغة json (على سبيل المثال لعرض المعاملات حسب الحساسات المختلفة).
    
-   **تعليق -** معلومات إضافية عن إعادة البث.
    
    ![](images/drex_retranslyatsiya_1_custom_3.png)
    

<table><tbody><tr><td><span></span></td><td><div><span><strong>التنفيذ لـ “Wialon retrains” و“galileo” و“egts”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0", &nbsp; //نستبدل اسم الحقل "temperature" من البيانات الخام،</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2" &nbsp; //بالقيمة "galileo_temp_0"،</span></div><div><span>&nbsp; },&nbsp; &nbsp; // ونرسله في إعادة البث&nbsp;</span></div><div><span>&nbsp;</span></div><div><span>&nbsp; "save_data_for_report": "1",&nbsp; &nbsp; //نحفظ سجلات إعادة البث للتقرير</span></div><div><span>&nbsp; &nbsp; "temperature_data_generator": {&nbsp; &nbsp; //بحسب حالة حساس الباب&nbsp; "DOS" =0</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2", &nbsp; &nbsp; //يُولَّد قيمة عشوائية من 4 إلى 8 للحقل "temperature_sensors".&nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,&nbsp; &nbsp; //نُفِّذ بناءً على طلب محدد</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div><div>&nbsp;</div><div><span><strong>التنفيذ لـ “Wialon&nbsp; ips” و“Wialon ipsv2”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": { &nbsp; //نستبدل اسم الحقل "Vsourse" من البيانات الخام</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",&nbsp; //بالقيمة "pwr_ext"، ونرسله عبر إعادة البث&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

**إعادة البث الجماعية للكائنات.**

**اختر عدة كائنات في تبويب المركبات.**

-   انقر على الزر "إعادة البث".
    
-   أضف المعاملات.
    
-   أدخل imei واحدًا وبعد الإضافة في واجهة المستخدم غيّر هذا المعامل في كل كائن إلى القيمة الصحيحة.
    

**![](images/drex_retranslyatsiya_1_custom_4.png)**

**![](images/drex_retranslyatsiya_1_custom_5.png)**

**![](images/drex_retranslyatsiya_1_custom_6.png)**
