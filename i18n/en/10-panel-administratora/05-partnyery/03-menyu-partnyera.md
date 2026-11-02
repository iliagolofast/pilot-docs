---
title: "Partner menu"
---

### How to open the menu

1\. Go to the “Partners” tab.

2\. Find the Partner you need in the list

3\. Right-click the Partner's row — the action menu opens

![](images/drex_menyu_partnyera_custom.png)

The set of items depends on the User's [access rights](../../roli-i-prava-dostupa.html). Administrators see the full set of functions. Partners see only the operations available to them. Unavailable items are shown in gray.

![](images/drex_menyu_partnyera_custom_2.png)

## Main actions in the menu

![](images/drex_menyu_partnyera_custom_2.png)

### Edit

Opens the Partner card for changing key data: name, contacts, tariff, currency, administrator account and other settings.

Available to administrators only.

![](images/drex_menyu_partnyera_custom_3.png)

### Contracts

You can go to the list of this Partner's Contracts and view active and completed ones, see the connected vehicles, and check the tariffs applied.

![](images/drex_menyu_partnyera_custom_4.png)

### Video devices

Opens the list of the Partner's connected cameras and video recorders.

### Payments

You can open the history of incoming funds in a new tab and view the dates, amounts and purposes of payments.

### Charges

You can view the history of charges to the Partner's balance (subscription fee, services and other charges).

### Add payment

Manually add a credit to the Partner's balance.

![](images/drex_menyu_partnyera_custom_5.png)

-   Specify in the form:
    
-   Contract — select the Contract under which the payment was received
    
-   External payment identifier
    
-   Invoice number (optional) — specify if the payment relates to a particular issued invoice
    
-   Payment type — select from the list
    
-   Payment amount — specify the amount that should be credited to the balance
    
-   Payment date — the date the funds were actually received
    
-   Description — a short comment
    

2\. After filling in, click “Save” — the amount will be added to the Partner's balance and shown in the payment history

### Add charge

Manually specify a charge to the Partner's balance:  
![](images/drex_menyu_partnyera_custom_6.png)

-   Specify in the form:
    
-   Contract select the Contract under which the charge is made
    
-   External charge identifier — the transaction or document number from your accounting system
    
-   Quantity — the number of service units
    
-   Charge type — select from the list
    
-   Charge amount — specify the amount that will be deducted from the Partner's balance
    
-   Charge date — the date the service was provided or the adjustment was made
    
-   Description — a short comment
    

2\. After checking the data, click “Save” — the amount will be deducted from the balance and shown in the operation history

### Login in

You can sign in to the system under the Partner's account, for example to check settings or provide assistance.

### Payment reminder

You can create and send the Partner a Notification about an upcoming or overdue payment.

The message includes:

— the amount of the debt

— the Contract number

After the template is applied, the Partner will see a Notification, for example: “You need to pay off the subscription fee debt of … Otherwise all Objects will be disconnected from monitoring starting on the 1st of next month.”

![](images/drex_menyu_partnyera_custom_7.png)

### Postpaid (lite) message

Postpayment is configured for Contracts only.

You can:

-   specify the Contract
    
-   set the amount
    
-   set the payment deadline
    
-   define the date/time of possible blocking
    
-   fill in the Notification text
    

The message will remind about the need to pay and warn about possible restrictions.

![](images/drex_menyu_partnyera_custom_8.png)

### Prepaid message

You can send a message to a Partner on prepayment — for example, a reminder to top up the balance.

If the balance becomes negative:

-   5 days before the expected zero balance, a warning will start to be displayed on sign-in to the admin panel
    
-   the number of days is calculated based on average daily charges
    
-   after 5 days, access to the admin panel is blocked until a positive balance is restored
    

![](images/drex_menyu_partnyera_custom_9.png)

If an error appears when calculating the blocking.  This means that:

1\. One of the Partner's machines has a tariff in another currency.

The system cannot correctly calculate the total time until blocking when charges are in different currencies.

Solution: sign in as an administrator, open the corresponding AgentID and assign the correct price list.

2\. The Contract has “incorrect” tariffs.

To fix this:

-   Open “Contracts” and call the context menu with a right click
    
    2\. Select  “Finance” → Incorrect tariffs
    
    3\. Check the Objects you need and update the price lists in bulk
    

### Delete

Delete the Partner from the system (available to administrators only).
