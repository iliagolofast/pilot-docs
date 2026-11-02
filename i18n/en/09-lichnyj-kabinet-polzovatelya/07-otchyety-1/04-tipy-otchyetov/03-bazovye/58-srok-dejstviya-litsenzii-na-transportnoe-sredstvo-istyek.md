---
title: "Vehicle License Expired"
---

The “Vehicle License Expired” report is designed to monitor the validity periods of vehicle registration documents. It lets you identify in advance the Objects whose vehicle registration certificate (STS) has already expired or expires within the selected period.

![](images/drex_srok_dejstviya_litsenzii_na_transportnoe_sredstvo_istyek_custom.png)

### Check period

Before generating the report, you need to specify the check range in months. The system calculates the checked interval starting from the current date and selects the vehicles whose STS validity falls within this range.

![Vehicle License Expired](images/drex_srok_dejstviya_litsenzii_na_transportnoe_sredstvo_istyek_screen.png)

For example, if a period of 3 months is selected, the report includes vehicles:

-   whose STS has already expired
    
-   whose STS expires within the next three months
    

The larger the selected range, the more future expiration dates the check covers.

For the report to be generated correctly, open the “Info” tab in each vehicle’s card and fill in the following data:

-   STS number — series and number of the vehicle registration certificate
    
-   Validity period — STS expiration date
    

![Vehicle License Expired](images/drex_srok_dejstviya_litsenzii_na_transportnoe_sredstvo_istyek_screen_2.png)

The system compares the specified date with the check period and adds the vehicle to the report if the document has already expired or expires within the selected range.

### What the report shows

-   Vehicle — name, registration, or fleet number of the monitored Object
    
-   Group — the group the vehicle is in
    
-   Description — additional description of the vehicle
    
-   Year — the vehicle’s year of manufacture specified in the Object card
    
-   STS number — the document number specified in the Object card
    
-   Validity period — STS expiration date
    

![](images/drex_srok_dejstviya_litsenzii_na_transportnoe_sredstvo_istyek_custom_2.png)
