---
title: "Посилання для відстеження об’єкта"
---

Цей API отримує тимчасове посилання для відстеження об’єкта на карті з активацією та деактивацією за заданими геозонами.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=get\_temp\_link — команда API для отримання тимчасового посилання
    
-   imei — ідентифікатор об’єкта (ТЗ) у системі
    
-   startgeo — геозона для активації посилання
    
-   stopgeo — геозона для деактивації посилання
    
-   max\_duration — максимальний час дії посилання в хвилинах (за замовчуванням 24 години)
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_temp_link&amp;imei=356307045913463&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API&amp;max_duration=800</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/monitor_token.php?token=1f87a19c068ad47f3f769dc151527794&amp;lang=en&amp;zoom=10&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API</div></td></tr></tbody></table>

У відповідь повертається пряме посилання на карту з тимчасовим токеном. Посилання враховує вказані геозони активації (startgeo) і деактивації (stopgeo)
