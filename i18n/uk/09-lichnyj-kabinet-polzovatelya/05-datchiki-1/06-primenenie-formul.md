---
title: "Застосування формул"
---

Формула перетворення — це математичний вираз, який застосовується до даних, отриманих із датчика.

Навіщо застосовувати формулу:

-   Для коригування показань датчика, наприклад, формула дає змогу виправити неточності в показаннях датчиків
    
-   Для приведення сирих даних датчика до реальних фізичних величин. Наприклад, датчик видає числа від 0 до 1000, а формула перетворює їх на реальні літри палива в баку
    
-   Для перетворення одиниць вимірювання, наприклад, переведення кілометрів у милі або літрів у галони
    
-   Для комбінування даних, наприклад, формула може застосовувати значення з різних датчиків для нових показників
    

У вікні налаштування датчика формулу застосовують у спеціальному полі

![Застосування формул](images/drex_primenenie_formul_screen.png)

<table><tbody><tr><td><span></span></td><td><div>Формула застосовується до даних одразу після їх отримання з датчика, до&nbsp;використання таблиці <a href="dobavlenie-datchika.html#тарировочная_таблица"><span>тарування</span></a>.</div></td></tr></tbody></table>

Формула має починатися з одного з таких знаків:

• арифметичні знаки: +, -, \*, /

• знак рівності: =

У формулі можна використовувати:

• математичні операції: додавання (+), віднімання (-), множення (\*), ділення (/)

• круглі дужки ( ) для вказування порядку дій

## Прості формули

Використовуються для простих операцій, таких як множення, ділення, додавання та віднімання. Початкове значення датчика автоматично підставляється у формулу.

Розглянемо приклад застосування формули

Припустімо, у нас є датчик заряду батареї, який передає значення в мілівольтах. У сирих точках знайдемо значення датчика: Vsource = 9246.

![](images/drex_primenenie_formul_custom.png)

Щоб відобразити звичне значення датчика у вольтах, необроблене значення потрібно поділити на 1000. У вікні налаштування датчика в полі «Формула» напишемо формулу: /1000.

Фінальне значення датчика буде обчислено за формулою Vbattery/1000:

-   Система бере поточне значення датчика в сирих точках
    

2\. Це значення ділить на 1000

3\. Отриманий результат стає новим значенням датчика

![](images/drex_primenenie_formul_custom_2.png)

Фінальне значення датчика АКБ у вольтах відобразиться у спливній підказці об’єкта — 9,25 В.

![](images/drex_primenenie_formul_custom_3.png)

### Приклади простих формул

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Помножити початкове значення на 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/1000</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поділити початкове значення на 1000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; /25.5+7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поділити значення на 25.5 і додати до нього 7</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; /100+(7*3-2)*4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Складніший приклад із використанням дужок</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>У формулах десяткові дроби записуються через крапку, а не через кому. Наприклад: 25.4, 1.75</div></td></tr></tbody></table>

## Змінні у формулі

У формулу можуть підставлятися дані з полів датчиків і стандартні змінні.

Усі значення для підстановки у формулу беруться в символи %%

Стандартні змінні, які використовуються у формулі:

%S% — швидкість

%A% — висота

%D% — напрямок

%P% або %satsinview% — кількість супутників

%ts% — час поточного пакета

%ts1% — час попереднього пакета

Час використовується у форматі Unixtimestamp — кількість секунд, що минули з 1 січня 1970 року.

%value% — значення поточного датчика

Усі інші значення беруться безпосередньо з назв у пакеті даних сирих точок, який надсилає датчик.

![](images/drex_primenenie_formul_custom_4.png)

Наприклад:

%Vbattarey% — значення датчика заряду батареї

%GSM% — значення рівня сигналу мобільного зв’язку

%HDOP% — зниження точності в горизонтальній площині

Візьміть потрібну назву параметра в %%, і вона буде замінена під час розрахунку у формулі відповідним значенням із пакета даних.

### Приклади формул із підстановкою змінних

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *%GSM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Помножити початкове значення на дані з поля GSM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/%HDOP%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поділити початкове значення на дані з поля HDOP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts1%-%ts%</span></div></td><td colspan="1" rowspan="1"><div><span>Отримати різницю в часі між поточним і попереднім пакетом</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts%/86400</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевести час із секунд у дні</span></div></td></tr></tbody></table>

## Складні формули

Складні формули завжди починаються зі знака =. У таких формулах початкове значення датчика автоматично не використовується. Якщо потрібно використати початкове значення, його треба вказати через %value%.

Ці формули дають змогу виконувати складніші операції, зокрема використовувати змінні, дужки та математичні функції.

### Приклади складних формул

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =%value%*2+10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Поточне значення датчика помножити на 5 і додати 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;=%S%*3.6+%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевести швидкість у км/год і додати початкове значення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; </span><span>=</span><span>(%DIN1%+%DIN2%)/%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Поділити суму цифрових входів на початкове значення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; =7/%value%</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Поділити число&nbsp;7&nbsp;на&nbsp;початкове значення датчика</span></div></td></tr></tbody></table>

## Умовні оператори

Умовні оператори — це спосіб задати логіку вибору у формулі. Вони дають змогу формулі набувати різних значень залежно від того, виконується певна умова чи ні. Це схоже на запит: «Якщо умова істинна, зроби одне, інакше зроби інше».

### Умовний оператор записується так

умова ? значення\_якщо\_так : значення\_якщо\_ні

Цей вираз можна пояснити так:

— умова  — це вираз, який перевіряється , наприклад, температура більша за 30

—значення\_якщо\_так — це значення, яке повертається, якщо умова істинна

— значення\_якщо\_ні — це значення, яке повертається, якщо умова хибна

### Оператори порівняння

В умовах можна використовувати такі оператори:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Оператор</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значення</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ==</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; дорівнює</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> перевіряє точну рівність</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; !=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; не дорівнює</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє нерівність</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; більше</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, чи є ліве значення більшим за праве</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &lt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; менше</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, чи є ліве значення меншим за праве</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; більше або дорівнює</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, чи більше або дорівнює ліве значення правому</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &lt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; менше або дорівнює</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, чи менше або дорівнює ліве значення правому</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &amp;&amp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; і</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, що всі умови істинні</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ||</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; або</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; перевіряє, що хоча б одна умова істинна</span></div></td></tr></tbody></table>

### Приклад 1

Припустімо, у нас є поле датчика цифрового входу DIN1, і ми хочемо встановити умову:

-   Якщо DIN1 дорівнює 1, то результат буде 22
    
-   Якщо DIN1 не дорівнює 1, то результат буде 33
    

Формула виглядатиме так: =(%DIN1% == 1) ? 22 : 33

Система перевіряє умову: %DIN1% == 1 (чи дорівнює значення DIN1 числу 1). Якщо умова істинна, повертається 22. Якщо умова хибна, повертається 33.

### Приклад 2

Припустімо, у нас є поле датчика температури temp, і ми хочемо встановити умову:

-   Якщо температура більша за 30, то результат буде: температура \* 10.
    
-   Якщо температура менша або дорівнює 30, то результат буде: температура \* 20.
    

Формула виглядатиме так: =(%temp% > 30) ? %temp% \* 10 : %temp% \* 20.

Система перевіряє умову: %temp% > 30 (чи більша температура за 30). Якщо умова істинна, повертається температура \* 10. Якщо умова хибна, повертається температура \* 20.

### Приклад 3

Припустімо, у нас є датчик температури з полем temp і датчик вологості humidity, і ми хочемо встановити таку умову:

-   Якщо температура більша за 25 І вологість менша за 60%, то результат буде 100
    
-   В іншому разі результат буде 50
    

Формула виглядатиме так: =(%temp% > 25 && %humidity% < 60) ? 100 : 50

%temp% > 25 — перша умова (температура більша за 25), %humidity% < 60 — друга умова (вологість менша за 60%). Оператор && означає, що мають виконуватися обидві умови. Система перевіряє умови і, якщо обидві умови істинні, повертається 100, якщо хоча б одна умова хибна, повертається 50.

## Функції PHP

Функції PHP — це готові інструменти мови програмування PHP для обробки, перетворення та форматування даних.  За допомогою [PHP-функцій](https://www.php.net/manual/ru/ref.math.php) застосовуйте складні перетворення, просто вказавши назву функції та значення у формулі.

Усе, що вам потрібно зробити:

1\. Написати назву функції у формулі

2\. Вказати в дужках значення, яке хочете перетворити

3\. І система автоматично візьме ваші дані, обробить їх потрібним способом і покаже результат

Наприклад, якщо напишете round (45.78) у формулі, отримаєте округлене число 46.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Функції</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Приклад</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; substr</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Витягує частину рядка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =substr('%Data%', x, y) — повертає «y» символів зі значення Data, починаючи з позиції «x»</span></div><div><span>&nbsp;&nbsp; =substr('%FIELD%', 1, 2) — повертає 2 символи зі значення FIELD, починаючи з позиції 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; round</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Округлює число</span></div></td><td colspan="1" rowspan="1"><div><span>=round(%AIN1%/1000) — ділить значення AIN1 на 1000 і округлює результат</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hexdec</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Переводить шістнадцяткове число в десяткове</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hexdec('%Param%'), якщо Param=0A, тоді функція поверне значення 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; dechex</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Переводить десяткове число в шістнадцяткове</span></div></td><td colspan="1" rowspan="1"><div>&nbsp; =<span>dechex('%Param%'), якщо Param=255, тоді функція перетворить 255 на 'FF'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; decbin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Переводить десяткове число в двійкове</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>=decbin('%Param%'), якщо Param=10, функція поверне 1010&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hex2bin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Переводить шістнадцятковий запис у двійкові дані</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hex2bin ('%Param%'), якщо Param=4142, тоді функція поверне двійкове подання</span></div><div><span>&nbsp; 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; strrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевертає рядок</span></div></td><td colspan="1" rowspan="1"><div><span>=strrev('%value%'), якщо value=0123d848010000e5, то функція перетворить значення &nbsp; &nbsp; &nbsp;</span></div><div><span>5е000010848d3210</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; bytesrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевертає шістнадцяткові байти</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =bytesrev('%value%'), value=0123d848010000e5, то функція перетворить значення</span></div><div><span>&nbsp; e500000148d82301</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; explode</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;</div><div><span><strong>&nbsp;</strong></span><span> Розділяє рядок на частини за вказаним роздільником і повертає масив рядків</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>=explode(',','%value%')[2]</span></div><div><span>Припустімо, датчик передає рядок значень через кому: 90.5,3450,112,43,215</span></div><div><span>Формула&nbsp;=explode(',','%value%')[2]&nbsp;у цьому разі бере поточні показання датчика й розбиває на масив: '90.5', '3450', '112', '43', '215', а потім витягує елемент з індексом 2 —&nbsp;'112'</span></div><div><span>Масив рядків&nbsp;—&nbsp; це список окремих рядків, пронумерований з нуля.</span></div><div><span>','&nbsp;— це роздільник, у цьому разі кома. За цим символом відбуватиметься поділ рядка.</span></div><div><span>'%value%'&nbsp;— це рядок, який потрібно розділити.</span></div><div><span>[2]&nbsp;— квадратні дужки використовуються для доступу до елемента масиву. [2] означає — «дай мені третій елемент», нумерація починається з 0.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Порівнює кілька значень і повертає найбільше</span></div></td><td colspan="1" rowspan="1"><div><span>=max('%value%', 90), якщо value=85, то функція поверне 90</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повертає найменше значення</span></div></td><td colspan="1" rowspan="1"><div><span>=min('%value%', 90), якщо value=85, то функція поверне 85</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; abs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повертає абсолютне значення числа</span></div></td><td colspan="1" rowspan="1"><div><span>=abs('%value%'), якщо value = -15, функція повертає 15</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; str_replace</span></div></td><td colspan="1" rowspan="1"><div><span>Замінює одні символи або слова на інші</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>str_replace(search, replace, subject)</span></div><ul><li><div><span>search — що шукаємо</span></div></li><li><div><span>replace — на що замінюємо</span></div></li><li><div><span>subject — де шукаємо (рядок)</span></div></li></ul><div><span>&nbsp;Наприклад, нам потрібно замінити коми на крапки в числах</span></div><div><span>=str_replace(",", ".",'%value%'), якщо value = 1,234,567, то функція виведе — 1.234.567</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sqrt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обчислює квадратний корінь</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sqrt('%value%'), якщо value = 25 , функція повертає значення 5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; pow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Підносить число до степеня</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =pow('%value%', 3), якщо value =2, то функція повертає 8 (тобто 2³)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обчислює синус кута (в радіанах)&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sin('%value%'), якщо value= 1.57, то кінцеве значення ≈ 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обчислює косинус кута (в радіанах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =cos('%value%'), якщо value = 0, то кінцеве значення 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; asin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обчислює арксинус (в радіанах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =asin('%value%'), якщо value=1, то функція повертає 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; acos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обчислює арккосинус (в радіанах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =acos('%value%'), якщо value= 0, то функція повертає 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number_format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Форматує число з роздільниками</span><span></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =number_format(1234.56, 2, ',', ' ') функція поверне 1 234,56</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Повертає поточний час у UNIX-форматі — в секундах з 1 січня 1970</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =time('2023-12-20 12:00:00')</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; array_sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Додає всі числа в масиві</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =array_sum([1,2,3,4]) — функція повертає 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; pack</span></div></td><td colspan="1" rowspan="1"><div><span>Пакує дані у бінарний формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =pack('H*', '4142') — пакує в двійкові дані 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; unpack</span></div></td><td colspan="1" rowspan="1"><div><span>Розпаковує бінарні дані</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =unpack('H*', 'AB')[1] — повертає '4142'</span></div></td></tr></tbody></table>

### Приклади складних перетворень

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Приклад</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Перетворення беззнакового числа на число зі знаком</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=((%BLE_T1%&gt;3000)?((%BLE_T1%-65535)/100):(%BLE_T1%/100))&nbsp;</span></div><div>&nbsp;</div><ul><li><div><span>Якщо число більше за 3000 — віднімаємо від нього 65535 і ділимо на 100</span></div></li><li><div><span>Якщо менше або дорівнює 3000 — ділимо на 100</span></div><div><span>Ця формула часто використовується для датчиків температури, де від’ємні значення кодуються великими додатними числами.</span></div></li></ul></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Перетворення послідовності байтів</span></div><div><span>&nbsp; (little endian на big endian)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=strtoupper(substr(unpack('H*',strrev(hex2bin(%value%)))[1],2,12))&nbsp;—&nbsp;1500000124286b01&nbsp;→&nbsp;6B2824010000</span></div><ul><li><div><span>hex2bin(%value%) — перетворює hex-рядок на бінарні дані</span></div></li><li><div><span>strrev(...) — перевертає байти</span></div></li><li><div><span>unpack('H*', ...) — конвертує назад у hex</span></div></li><li><div><span>substr(..., 2, 12) — бере потрібну частину рядка</span></div></li><li><div><span>strtoupper(...) — перетворює на верхній регістр</span></div></li></ul></td></tr></tbody></table>

## Ділення на нуль

Коли у формулі є ділення, будьте уважні з дільником — числом, на яке ділять. Якщо дільник дорівнює нулю, виникне помилка, оскільки ділення на нуль математично неможливе.

Наприклад, формула =1000/%DIN1% спричинить помилку, якщо значення датчика DIN1 дорівнює 0 або не визначене.

У такому разі використовуйте умовний оператор для перевірки дільника: =(%DIN1%==0) ? 0 : 1000/%DIN1%. Система перевірить умову:  %DIN1% == 0 (чи дорівнює значення DIN1 нулю). Якщо умова істинна, результат буде 0. Якщо умова хибна, виконається ділення 1000 на значення DIN1.

## Як перевірити роботу формули

<table><tbody><tr><td><span></span></td><td><div>Коли застосовуєте формулу, переконайтеся, що формула коректно перетворює дані.</div></td></tr></tbody></table>

Перевіряємо роботу формули за допомогою кнопки «Тест»:

![Застосування формул](images/drex_primenenie_formul_screen_2.png)

-   Натисніть на кнопку «Тест» у полі «Формула».
    
-   Система покаже значення, які можна використати для перевірки формули, указаної в обробнику. Ви можете вибрати готові значення або ввести свої.
    
    3\. Після цього натисніть кнопку «Тест» ще раз, і система покаже результат застосування формули: правильний чи неправильний.
    

![](images/drex_primenenie_formul_custom_5.png)

## Де ще застосовуються формули

Формули в PILOT можна використовувати не лише для обробки даних із датчиків. Застосовувати формули ви можете в [«Картці об’єкта»](../obekty-1/kartochka-obekta/index.html#Формула_в_карточке_объекта) або під час роботи з модулем [«Сповіщення»](../moduli-1/uvedomleniya/index.html). При цьому принцип їхньої роботи скрізь однаковий — ті самі правила написання та ті самі математичні операції.
