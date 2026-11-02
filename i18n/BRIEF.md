# Translating PILOT documentation

PILOT is a GPS fleet-monitoring platform by «Скай Электроникс». The user documentation is Russian Markdown in `/home/claude/art/content/`. Translate the files listed in your job file into the target language and write each to `/home/claude/art/i18n/<lang>/<same relative path>` (create directories as needed). Do not touch anything else.

## Rules
- Translate everything a reader sees: the `title:` in the front matter, headings, body text, list items, table cells, image alt text, link text, notes.
- Keep exactly as is: the front matter structure (keep `title:` quoted; you may drop the `source:` line), Markdown/HTML markup, image paths `![](images/…)`, link URLs (`../x/y.html`, `#anchor`, `https://…`), `<div class="demo" …></div>` tags, code blocks and inline code, JSON/HTTP examples, API field names, parameter names, URLs, e-mail addresses, phone numbers, product and hardware model names (PILOT, Teltonika FMB920, Galileosky…), file names.
- Keep the same number and order of images, links, list items and table rows. Do not summarize, skip, or add content. Long tables must be translated in full.
- Russian UI labels in quotes («Сохранить», «Отчёты») refer to buttons and sections of the app: translate them with the glossary and keep them in quotes of the target language (en: “…”, uk: «…», ar: «…», es: «…»).
- Screenshots stay in Russian; do not mention that.
- Natural, concise technical-documentation style, the way a native technical writer would write it. Address the reader as "you" (uk: «ви»; es: «usted» forms, neutral Latin-American/Spanish-neutral wording; ar: Modern Standard Arabic).
- Arabic: write in Arabic script, keep Latin product names, numbers in Western digits (0-9), do not add RTL control characters.
- Work file by file: Read the source, Write the translation. Never stop half way through a file. If a file is huge, write it fully anyway.

## Glossary (ru → en | uk | ar | es)
- Объект → Object | Об’єкт | الكائن | Objeto
- Датчик → Sensor | Датчик | الحساس | Sensor
- Геозона → Geofence | Геозона | السياج الجغرافي | Geocerca
- Отчёт → Report | Звіт | التقرير | Informe
- Трек → Track | Трек | المسار | Recorrido
- Рейс / Поездка → Trip | Рейс / Поїздка | الرحلة | Viaje
- Стоянка → Parking | Стоянка | التوقف | Estacionamiento
- История → History | Історія | السجل | Historial
- Уведомление → Notification | Сповіщення | الإشعار | Notificación
- Событие → Event | Подія | الحدث | Evento
- Личный кабинет (пользователя) → User account | Особистий кабінет | الحساب الشخصي | Cuenta de usuario
- Панель администратора → Admin panel | Панель адміністратора | لوحة المسؤول | Panel de administración
- Договор → Contract | Договір | العقد | Contrato
- Партнёр → Partner | Партнер | الشريك | Socio
- Пользователь → User | Користувач | المستخدم | Usuario
- Права доступа → Access rights | Права доступу | صلاحيات الوصول | Derechos de acceso
- Водитель → Driver | Водій | السائق | Conductor
- Моточасы → Engine hours | Мотогодини | ساعات تشغيل المحرك | Horas de motor
- Пробег → Mileage | Пробіг | المسافة المقطوعة | Kilometraje
- Заправка / Слив → Refuel / Fuel drain | Заправка / Злив | التزود بالوقود / تصريف الوقود | Repostaje / Drenaje de combustible
- ДУТ (датчик уровня топлива) → fuel level sensor | ДРП (датчик рівня палива) | حساس مستوى الوقود | sensor de nivel de combustible
- Тарировка → Calibration | Тарування | المعايرة | Calibración
- Оборудование / Терминал / Трекер → Hardware / Terminal / Tracker | Обладнання / Термінал / Трекер | الأجهزة / الجهاز الطرفي / جهاز التتبع | Equipo / Terminal / Rastreador
- Онлайн (вкладка) → Online | Онлайн | مباشر | En línea
- Карта → Map | Карта | الخريطة | Mapa
- Сохранить / Отмена / Добавить / Удалить → Save / Cancel / Add / Delete | Зберегти / Скасувати / Додати / Видалити | حفظ / إلغاء / إضافة / حذف | Guardar / Cancelar / Añadir / Eliminar
- Модуль → Module | Модуль | الوحدة البرمجية | Módulo
- Техобслуживание (ТО) → Maintenance | Техобслуговування (ТО) | الصيانة | Mantenimiento
- С чего начать → Getting started | З чого почати | البدء | Primeros pasos

When you finish, reply with: the number of files written and any file you could not finish.
