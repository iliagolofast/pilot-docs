---
title: "Подорожні листи"
---

Цей API використовується для отримання інформації про подорожні листи (waybill) за вказаний період.

З його допомогою можна:

— отримати список завдань за кожним агентом

— переглянути планові та фактичні часи виконання

— дізнатися статуси виконання та подробиці за точками маршруту

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://tasks.<server\_address>/backend/public/get\_waybill\_for\_pilot

### Параметри запиту

from\_ts — час початку вибірки (Unix timestamp, приклад: 1536181200)

to\_ts — час завершення вибірки (Unix timestamp, приклад: 1538773200)

agents — список ідентифікаторів агентів через кому (наприклад: 13128,13130,...)

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/get_waybill_for_pilot?from_ts=1536181200&amp;to_ts=1538773200&amp;agents=13128,13130,21055</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "",</div><div>&nbsp; "items": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 13128,</div><div>&nbsp; &nbsp; &nbsp; "c_begin_time": "1536200000",</div><div>&nbsp; &nbsp; &nbsp; "c_end_time": "1536210000",</div><div>&nbsp; &nbsp; &nbsp; "c_information": "{\"route\":\"Маршрут №54\",\"driver\":\"Иванов И.И.\"}",</div><div>&nbsp; &nbsp; &nbsp; "c_initiator": "Диспетчер",</div><div>&nbsp; &nbsp; &nbsp; "c_progress_time": "1536200500",</div><div>&nbsp; &nbsp; &nbsp; "c_running_time": "1536200300",</div><div>&nbsp; &nbsp; &nbsp; "c_status_id": 2,</div><div>&nbsp; &nbsp; &nbsp; "c_status_name": "Выполнено",</div><div>&nbsp; &nbsp; &nbsp; "id": 98765,</div><div>&nbsp; &nbsp; &nbsp; "points_info": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "point_id": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.7558",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "37.6173",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "visited_at": "1536200600"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   success — результат виконання (true — успіх, false — помилка)
    
-   msg — повідомлення про помилку (якщо є)
    
-   items — масив даних про завдання
    

Для кожного завдання:

agent\_id — ідентифікатор агента

c\_begin\_time — планований час початку виконання завдання

c\_end\_time — фактичний час завершення завдання

c\_information — рядок із додатковою інформацією про завдання (JSON, залежить від шаблону)

c\_initiator — заявник (хто створив завдання)

c\_progress\_time — фактичний час відвідування першої точки

c\_running\_time — фактичний час відправлення на виконання завдання

c\_status\_id — ідентифікатор статусу завдання

c\_status\_name — розшифровка статусу завдання

id — ідентифікатор завдання в системі PTM

points\_info — масив інформації про відвідані точки маршруту
