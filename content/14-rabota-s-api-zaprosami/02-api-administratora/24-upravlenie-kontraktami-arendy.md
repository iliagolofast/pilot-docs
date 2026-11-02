---
title: "Управление контрактами аренды"
source: upravlenie_kontraktami_arendy.html
---

Этот API предоставляет возможности для управления контрактами аренды транспортных средств. С помощью этого API можно выполнять запуск, обновление, остановку аренды, а также аутентификацию и генерацию токенов для авторизации.

## Авторизация

Для использования API необходимо пройти аутентификацию с помощью Bearer токена.

### Получение токена для авторизации

Перед тем как отправлять запросы, необходимо получить токен, сгенерировав его с использованием логина и пароля для панели администратора.

### Пример авторизации

Запрос на генерацию токена:

<table><tbody><tr><td><span></span></td><td><div><span>curl --location --request GET 'https://</span>&lt;admin_address&gt;<span>/backend/app/contracts.php' \</span></div><div><span>--header 'Content-Type: application/json' \</span></div><div><span>--data-raw '{</span></div><div><span>&nbsp; &nbsp; "cmd": "generate_token",</span></div><div><span>&nbsp; &nbsp; "login": "YOUR_LOGIN_FOR_ADMIN_PANEL",</span></div><div><span>&nbsp; &nbsp; "password": "YOUR_PASSWORD_FOR_ADMIN_PANEL"</span></div><div><span>}'</span></div></td></tr></tbody></table>

Пример ответа:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "0",</div><div>&nbsp; &nbsp; "message": "007898667a1b5711682399ea38a84f61"</div><div>}</div></td></tr></tbody></table>

В ответе вы получите токен. Используйте его в заголовке Authorization для дальнейших запросов.

Пример заголовка:

<table><tbody><tr><td><span></span></td><td><div>Authorization: Bearer 007898667a1b5711682399ea38a84f61</div></td></tr></tbody></table>

## Основные команды

Для выполнения операций, нужно указать параметр cmd, который определяет, какую операцию вы хотите выполнить.

-   generate\_token — получить токен для авторизации
    
-   start — начать аренду автомобиля
    
-   update — обновить данные аренды
    
-   stop — остановить аренду автомобиля
    

## Параметры запроса

Все параметры передаются в формате JSON

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обязательный</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Описание</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mva</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Числовой идентификатор арендованного транспортного средства</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ra</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер договора аренды</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; plate_number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номерной знак автомобиля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Имя водителя, который арендует ТС</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_phone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Телефон водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_passport</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Паспорт водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_address</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адрес водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер водительских прав</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Срок действия прав</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Email водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_birth_date</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата рождения водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_sex</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пол (m или f)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_country</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Страна водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рейтинг водителя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ожидаемое время начала аренды (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ожидаемое время окончания аренды (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Фактическое время начала аренды (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Фактическое время окончания (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Место начала аренды (с широтой, долготой или адресной строкой — lat, lon, address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; end_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Место окончания аренды (lat, lon или address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rate_code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код ставки аренды по договору</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; car_group_charged</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Группа автомобиля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; checkout_branch</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Отделение выдачи</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mileage_limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Лимит пробега</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>cid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Идентификатор клиента, водителя, арендующего транспортное средство</span></div></td></tr></tbody></table>

## Примеры запросов

### Запуск аренды

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Content-Type: application/json' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "start",</div><div>&nbsp; &nbsp; "mva": 111,</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "ts_expected": 1644927600,</div><div>&nbsp; &nbsp; "te_expected": 1644981600,</div><div>&nbsp; &nbsp; "start_location": { "lat": 40.712776, "lon": -74.005974 },</div><div>&nbsp; &nbsp; "car_group_charged": "Economy"</div><div>}'</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1233",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

В ответ возвращается:

code — код ответа

odo — значение одометра

message — текстовое сообщение о результате запроса

### Обновление аренды

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "update",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "mileage_limit": 2000</div><div>}'</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Остановка аренды

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer YOUR_TOKEN' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "stop",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "driver_rating": 4,</div><div>&nbsp; &nbsp; "end_location": {"address": "Ilino 2c"}</div><div>}'</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Коды ответа и ошибок

0 — операция успешна

1 — автомобиль не найден

2 — нет изменений для обновления

3 — договор аренды не найден

4 — ошибка аутентификации

5 — неизвестная ошибка

6 — нет прав для выполнения операции

7 — модуль контрактов не активен

8 — этот номер договора аренды уже используется другой учётной записью

9 — автомобиль арендован другой учётной записью

10 — автомобиль не арендован

11 — некорректный запрос

12 — неверный параметр местоположения

13 — этот  номер договора аренды используется другим агентом

14 — паспорт был передан, но не указано имя водителя

15 — имя водителя было передано, но не указан паспорт

16 — водитель не найден по предоставленным данным

17 — данные водителя не совпадают с ранее сохранёнными

18 — договор аренды с данным номером не найден

19 — этот договор аренды уже завершён

20 — автомобиль уже арендован

21 — водитель указан неверно

22 — существующий договор был закрыт, создан новый

500 — внутренняя ошибка сервера
