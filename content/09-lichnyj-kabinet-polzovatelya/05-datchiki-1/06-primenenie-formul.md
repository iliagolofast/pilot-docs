---
title: "Применение формул"
source: primenenie_formul.html
---

Формула преобразования — это математическое выражение, которое применяется к данным, полученным с датчика.

Зачем применять формулу:

-   Для корректировки показаний датчика, например, формула позволяет исправить неточности в показаниях датчиков
    
-   Для приведения сырых данных датчика к реальным физическим величинам. Например, датчик выдаёт числа от 0 до 1000, а формула преобразует их в реальные литры топлива в баке
    
-   Для преобразования единиц измерения, например, перевод километров в мили или литров в галлоны
    
-   Для комбинирования данных, например, формула может применять значения из разных датчиков для новых показателей
    

В окне настройки датчика формулу применяют в специальном поле

![Применение формул](images/drex_primenenie_formul_screen.png)

<table><tbody><tr><td><span></span></td><td><div>Формула применяется к данным сразу после их получения с датчика, до&nbsp;использования <a href="dobavlenie-datchika.html#тарировочная_таблица"><span>тарировочной</span></a> таблицы.</div></td></tr></tbody></table>

Формула должна начинаться с одного из следующих знаков:

• арифметические знаки: +, -, \*, /

• знак равенства: =

В формуле можно использовать:

• математические операции: сложение (+), вычитание (-), умножение (\*), деление (/)

• круглые скобки ( ) для указания порядка действий

## Простые формулы

Используются для простых операций, таких как умножение, деление, сложение и вычитание. Исходное значение датчика автоматически подставляется в формулу.

Рассмотрим пример применения формулы

Допустим, у нас есть датчик заряда батареи, который передаёт значение в милливольтах. В сырых точках найдём значение датчика: Vsource = 9246.

![](images/drex_primenenie_formul_custom.png)

Для отображения привычного значения датчика в вольтах, необработанное значение нужно разделить на 1000. В окне настройки датчика в поле «Формула» напишем формулу: /1000.

Финальное значение датчика будет вычислено по формуле Vbattery/1000:

-   Система берёт текущее значение датчика в сырых точках
    

2\. Это значение делит на 1000

3\. Полученный результат становится новым значением датчика

![](images/drex_primenenie_formul_custom_2.png)

Финальное значение датчика АКБ в вольтах отобразится во всплывающей подсказке объекта — 9,25 В.

![](images/drex_primenenie_formul_custom_3.png)

### Примеры простых формул

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Умножить исходное значение на 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/1000</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Разделить исходное значение на 1000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; /25.5+7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Разделить значение на 25.5 и к нему прибавить 7</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; /100+(7*3-2)*4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Более сложный пример с использованием скобок</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>В формулах десятичные дроби записываются через точку, а не через запятую. Например: 25.4, 1.75</div></td></tr></tbody></table>

## Переменные в формуле

В формулу могут подставляться данные из полей датчиков и стандартные переменные.

Все значения для подстановки в формулу заключаются в символы %%

Стандартные переменные, которые используются в формуле:

%S% — скорость

%A% — высота

%D% — направление

%P% или %satsinview% — количество спутников

%ts% — время текущего пакета

%ts1% — время предыдущего пакета

Время используется в формате Unixtimestamp — количество секунд, прошедших с 1 января 1970 года.

%value% — значение текущего датчика

Все остальные значения берутся напрямую из названий в пакете данных сырых точек, который присылает датчик.

![](images/drex_primenenie_formul_custom_4.png)

Например:

%Vbattarey% — значение датчика заряда батареи

%GSM% — значение уровня сигнала мобильной связи

%HDOP% — снижение точности в горизонтальной плоскости

Заключите нужное название параметра в %%, и оно будет заменено при расчёте в формуле соответствующим значением из пакета данных.

### Примеры формул с подстановкой переменных

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *%GSM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Умножить исходное значение на данные из поля GSM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/%HDOP%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Разделить исходное значение на данные из поля HDOP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts1%-%ts%</span></div></td><td colspan="1" rowspan="1"><div><span>Получить разницу во времени между текущим и предыдущим пакетом</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts%/86400</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевести время из секунд в дни</span></div></td></tr></tbody></table>

## Сложные формулы

Сложные формулы всегда начинаются со знака =. В таких формулах исходное значение датчика автоматически не используется. Если нужно использовать исходное значение, его надо указать через %value%.

Эти формулы позволяют выполнять более сложные операции, включая использование переменных, скобок и математических функций.

### Примеры сложных формул

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Формула</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Результат</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =%value%*2+10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Текущее значение датчика умножить на 5 и прибавить 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;=%S%*3.6+%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевести скорость в км/ч и добавить исходное значение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; </span><span>=</span><span>(%DIN1%+%DIN2%)/%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Разделить сумму цифровых входов на исходное значение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; =7/%value%</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Разделить число&nbsp;7&nbsp;на&nbsp;исходное значение датчика</span></div></td></tr></tbody></table>

## Условные операторы

Условные операторы — это способ задать логику выбора в формуле. Они позволяют формуле принимать разные значения в зависимости от того, выполняется ли определённое условие или нет. Это похоже на запрос: «Если условие верно, сделай одно, иначе сделай другое».

### Условный оператор записывается так

условие ? значение\_если\_да : значение\_если\_нет

Это выражение можно объяснить так:

— условие  — это выражение, которое проверяется , например, температура больше 30

—значение\_если\_да — это значение, которое возвращается, если условие верно

— значение\_если\_нет — это значение, которое возвращается, если условие неверно

### Операторы сравнения

В условиях можно использовать следующие операторы:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Оператор</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Значение</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ==</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; равно</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> проверяет точное равенство</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; !=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; не равно</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет неравенство</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; больше</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, является ли левое значение больше правого</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &lt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; меньше</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, является ли левое значение меньше правого</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; больше или равно</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, больше или равно ли левое значение правому</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &lt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; меньше или равно</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, меньше или равно ли левое значение правому</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &amp;&amp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; и</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, что все условия истинны</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ||</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; или</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; проверяет, что хотя бы одно условие истинно</span></div></td></tr></tbody></table>

### Пример 1

Допустим, у нас есть поле датчика цифрового входа DIN1, и мы хотим установить условие:

-   Если DIN1 равно 1, то результат будет 22
    
-   Если DIN1 не равно 1, то результат будет 33
    

Формула будет выглядеть так: =(%DIN1% == 1) ? 22 : 33

Система проверяет условие: %DIN1% == 1 (равно ли значение DIN1 числу 1). Если условие верно, возвращается 22. Если условие неверно, возвращается 33.

### Пример 2

Допустим, у нас есть поле датчика температуры temp, и мы хотим установить условие:

-   Если температура больше 30, то результат будет: температура \* 10.
    
-   Если температура меньше или равна 30, то результат будет: температура \* 20.
    

Формула будет выглядеть так: =(%temp% > 30) ? %temp% \* 10 : %temp% \* 20.

Система проверяет условие: %temp% > 30 (больше ли температура 30). Если условие верно, возвращается температура \* 10. Если условие неверно, возвращается температура \* 20.

### Пример 3

Допустим, у нас есть датчик температуры с полем temp и датчик влажности humidity, и мы хотим установить следующее условие:

-   Если температура больше 25 И влажность меньше 60%, то результат будет 100
    
-   В противном случае результат будет 50
    

Формула будет выглядеть так: =(%temp% > 25 && %humidity% < 60) ? 100 : 50

%temp% > 25 — первое условие (температура больше 25), %humidity% < 60 — второе условие (влажность меньше 60%). Оператор && означает, что должны быть выполнены оба условия. Система проверяет условия и, если ба условия истинны, возвращается 100, если хотя бы одно условие неверно, возвращается 50.

## Функции PHP

Функции PHP — это готовые инструменты языка программирования PHP для обработки, преобразования и форматирования данных.  С помощью [PHP-функций](https://www.php.net/manual/ru/ref.math.php) применяйте сложные преобразования, просто указав название функции и значение в формулу.

Всё, что вам нужно сделать:

1\. Написать название функции в формуле

2\. Указать в скобках значение, которое хотите преобразовать

3\. И система автоматически возьмёт ваши данные, обработает их нужным способом и покажет результат

Например, если напишете round (45.78) в формуле, получите округлённое число 46.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Функции</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Пример</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; substr</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Извлекает часть строки</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =substr('%Data%', x, y) — возвращает «y» символов из значения Data начиная с позиции «x»</span></div><div><span>&nbsp;&nbsp; =substr('%FIELD%', 1, 2) — возвращает 2 символа из значения FIELD начиная с позиции 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; round</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Округляет число</span></div></td><td colspan="1" rowspan="1"><div><span>=round(%AIN1%/1000) — делит значение AIN1 на 1000 и округляет результат</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hexdec</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Переводит шестнадцатеричное число в десятичное</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hexdec('%Param%'), если Param=0A, тогда функция вернёт значение 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; dechex</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Переводит десятичное число в шестнадцатеричное</span></div></td><td colspan="1" rowspan="1"><div>&nbsp; =<span>dechex('%Param%'), если Param=255, тогда функция преобразует 255 в 'FF'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; decbin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Переводит десятичное число в двоичное</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>=decbin('%Param%'), если Param=10, функция вернёт 1010&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hex2bin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Переводит шестнадцатеричную запись в двоичные данные</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hex2bin ('%Param%'), если Param=4142, тогда функция вернёт двоичное представление</span></div><div><span>&nbsp; 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; strrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Переворачивает строку</span></div></td><td colspan="1" rowspan="1"><div><span>=strrev('%value%'), если value=0123d848010000e5, то функция преобразует значение &nbsp; &nbsp; &nbsp;</span></div><div><span>5е000010848d3210</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; bytesrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Переворачивает шестнадцатеричные байты</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =bytesrev('%value%'), value=0123d848010000e5, то функция преобразует значение</span></div><div><span>&nbsp; e500000148d82301</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; explode</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;</div><div><span><strong>&nbsp;</strong></span><span> Разделяет строку на части по указанному разделителю и возвращает массив строк</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>=explode(',','%value%')[2]</span></div><div><span>Допустим, датчик передаёт строку значений через запятую: 90.5,3450,112,43,215</span></div><div><span>Формула&nbsp;=explode(',','%value%')[2]&nbsp;в этом случае берёт текущие показания датчика и разбивает на массив: '90.5', '3450', '112', '43', '215', а потом извлекает элемент с индексом 2 —&nbsp;'112'</span></div><div><span>Массив строк&nbsp;—&nbsp; это список отдельных строк, пронумерованный с нуля.</span></div><div><span>','&nbsp;— это разделитель, в этом случае запятая. По этому символу будет происходить разделение строки.</span></div><div><span>'%value%'&nbsp;— это строка, которую нужно разделить.</span></div><div><span>[2]&nbsp;— квадратные скобки используются для доступа к элементу массива. [2] означает — «дай мне третий элемент», нумерация начинается с 0.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сравнивает несколько значений и возвращает наибольшее</span></div></td><td colspan="1" rowspan="1"><div><span>=max('%value%', 90), если value=85, то функция вернёт 90</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Возвращает наименьшее значение</span></div></td><td colspan="1" rowspan="1"><div><span>=min('%value%', 90), если value=85, то функция вернёт 85</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; abs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Возвращает абсолютное значение числа</span></div></td><td colspan="1" rowspan="1"><div><span>=abs('%value%'), если value = -15, функция возвращает 15</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; str_replace</span></div></td><td colspan="1" rowspan="1"><div><span>Заменяет одни символы или слова на другие</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>str_replace(search, replace, subject)</span></div><ul><li><div><span>search — что ищем</span></div></li><li><div><span>replace — на что заменяем</span></div></li><li><div><span>subject — где ищем (строка)</span></div></li></ul><div><span>&nbsp;Например, нам нужно заменить запятые на точки в числах</span></div><div><span>=str_replace(",", ".",'%value%'), если value = 1,234,567, то функция выведет — 1.234.567</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sqrt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вычисляет квадратный корень</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sqrt('%value%'), если value = 25 , функция возвращает значение 5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; pow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Возводит число в степень</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =pow('%value%', 3), если value =2, то функция возвращает 8 (то есть 2³)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вычисляет синус угла (в радианах)&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sin('%value%'), если value= 1.57, то конечное значение ≈ 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вычисляет косинус угла (в радианах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =cos('%value%'), если value = 0, то конечное значение 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; asin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вычисляет арксинус (в радианах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =asin('%value%'), если value=1, то функция возвращает 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; acos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вычисляет арккосинус (в радианах)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =acos('%value%'), если value= 0, то функция возвращает 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number_format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Форматирует число с разделителями</span><span></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =number_format(1234.56, 2, ',', ' ') функция вернёт 1 234,56</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Возвращает текущее время в UNIX-формате — в секундах с 1 января1970</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =time('2023-12-20 12:00:00')</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; array_sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Складывает все числа в массиве</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =array_sum([1,2,3,4]) — функция возвращает 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; pack</span></div></td><td colspan="1" rowspan="1"><div><span>Упаковывает данные в бинарный формат</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =pack('H*', '4142') — упаковывает в двоичные данные 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; unpack</span></div></td><td colspan="1" rowspan="1"><div><span>Распаковывает бинарные данные</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =unpack('H*', 'AB')[1] — возвращает '4142'</span></div></td></tr></tbody></table>

### Примеры сложных преобразований

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Пример</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Преобразование беззнакового числа в число со знаком</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=((%BLE_T1%&gt;3000)?((%BLE_T1%-65535)/100):(%BLE_T1%/100))&nbsp;</span></div><div>&nbsp;</div><ul><li><div><span>Если число больше 3000 — вычитаем из него 65535 и делим на 100</span></div></li><li><div><span>Если меньше или равно 3000 — делим на 100</span></div><div><span>Это формула часто используется для датчиков температуры, где отрицательные значения кодируются большими положительными числами.</span></div></li></ul></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Преобразование последовательности байт</span></div><div><span>&nbsp; (little endian в big endian)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=strtoupper(substr(unpack('H*',strrev(hex2bin(%value%)))[1],2,12))&nbsp;—&nbsp;1500000124286b01&nbsp;→&nbsp;6B2824010000</span></div><ul><li><div><span>hex2bin(%value%) — преобразует hex-строку в бинарные данные</span></div></li><li><div><span>strrev(...) — переворачивает байты</span></div></li><li><div><span>unpack('H*', ...) — конвертирует обратно в hex</span></div></li><li><div><span>substr(..., 2, 12) — берет нужную часть строки</span></div></li><li><div><span>strtoupper(...) — преобразует в верхний регистр</span></div></li></ul></td></tr></tbody></table>

## Деление на ноль

Когда в формуле присутствует деление, будьте внимательны с делителем — числом, на которое делят. Если делитель равен нулю, возникнет ошибка, так как деление на ноль математически невозможно.

Например, формула =1000/%DIN1% вызовет ошибку, если значение датчика DIN1 равно 0 или не определено.

В таком случае используйте условный оператор для проверки делителя: =(%DIN1%==0) ? 0 : 1000/%DIN1%. Система проверит условие:  %DIN1% == 0 (равно ли значение DIN1 нулю). Если условие верно, результат будет 0. Если условие неверно, выполнятся деление 1000 на значение DIN1.

## Как проверить работу формулы

<table><tbody><tr><td><span></span></td><td><div>Когда применяете формулу, убедитесь, что формула корректно преобразует данные.</div></td></tr></tbody></table>

Проверяем работу формулы через кнопку «Тест»:

![Применение формул](images/drex_primenenie_formul_screen_2.png)

-   Нажмите на кнопку «Тест» в поле «Формула».
    
-   Система покажет значения, которые можно использовать для проверки формулы, указанной в обработчике. Вы можете выбрать готовые значения или ввести свои.
    
    3\. После этого нажмите кнопку «Тест» ещё раз, и система покажет результат применения формулы: правильный или неправильный.
    

![](images/drex_primenenie_formul_custom_5.png)

## Где ещё применяются формулы

Формулы в PILOT можно использовать не только для обработки данных с датчиков. Применять формулы вы можете в [«Карточке объекта»](../obekty-1/kartochka-obekta/index.html#Формула_в_карточке_объекта) или при работе с модулем [«Уведомления»](../moduli-1/uvedomleniya/index.html). При этом принцип их работы везде одинаковый — те же правила написания и те же математические операции.
