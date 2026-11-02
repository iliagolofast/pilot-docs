---
title: "تقرير إصدار الفواتير"
---

يلزم إعداد الوحدة البرمجية Rent Car.

يجب إعداد حقول إضافية للتقرير في الوحدة البرمجية، وتُدخل في الجزء الإداري.

<table><tbody><tr><td><span></span></td><td><div><span><strong>additional_fields </strong>=&nbsp; [{"xtype": "combo","name":"rent_type","fieldLabel": "Rental Type","displayField": "name", "valueField": "name","store": {"data": [{"name": "FML"}, {"name": "MM"}, {"name": "Adhoc"}], "fields": ["name"]}}]</span></div></td></tr></tbody></table>

![](images/drex_otchet_o_vystavlenii_schetov_custom.png)

**يتضمّن التقرير:**

-   **الكائن أو مجموعة المستخدم**
    
-   **العقد**
    
-   **MM** – الصيانة (Maintenance Management).
    
-   **FML** – إدارة الأسطول (Fleet Management Logistics).
    

![](images/drex_otchet_o_vystavlenii_schetov_custom_2.png)

عند الحاجة يمكنك تعطيل أجزاء معينة من التقرير بالضغط على الأيقونة ![](images/drex_otchet_o_vystavlenii_schetov_custom_3.png)، وعند الضغط عليها تفتح قائمة يمكنك فيها تعطيل/تفعيل حقول معينة.

![](images/drex_otchet_o_vystavlenii_schetov_custom_4.png)
