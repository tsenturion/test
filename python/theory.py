"""
Основы построения программ на Python. 
Арифметические операции. 
Ошибки оформления — синтаксис и линтер.
Строки. Переменные. 
Выражения в определениях. 
Именование. Интерполяция. 
Извлечение символов из строки.
 Срезы строк. Типы данных. 
Неизменяемость и примитивные типы.
 Функции и их вызов .
Сигнатура функции. 
Вызов функции — выражение.
 Детерминированность. 
Стандартная библиотека. 
Свойства и методы. 
Цепочка методов. 
Определение функций. 
Возврат значений. 
Параметры функций. 
Необязательные параметры функций.
 Именованные аргументы. 
Аннотации типов. Логика. 
Логические операторы. 
Результат логических операций.
 Условные конструкции. 
Оператор match. Цикл while.
 Агрегация данных. Обход строк.
Условия внутри тела цикла.
 Цикл for. Отладка. 
Модули .Модули поглубже.
 Пакеты. Модуль random. 
Кортежи. История развития языка Python

	Концепция списков.
 Создание списков и добавление элементов.
 Ссылки. Ссылки и изменяемость. 
Модификация списков поэлементно. 
Срезы. Цикл for. Итераторы.

Установка Python. 
Работа с REPL. 
Подробнее о Python. 
Пакеты и индексы. 
Модули distutils, 
Setuptools, pip. Установка pip.
 Инструмент pip и альтернативные источники пакетов\.
 Виртуальные окружения. Cкрипты. 
Запускаемые модули и пакеты. 
Доступный инструментарий для работы с Python-проектами.
 Начало работы с Poetry. Poetry и управление зависимостями.
 Poetry и скрипты. Сборка дистрибутива пакета с помощью Poetry.
 Линтинг.
"""
# однострочный

#print("функция для печати")
#типы данных
"""
int
float
str
bool

list
tuple
dict


Множетсва. По плану курса их нет. Уникальные значения
set
frozenset
"""

number = 123
float1 = 123.1

"""
len() длина 
abs() модуль
max()
min()
sum()

chr() символ по юникод коду
hex() 16x

int()
str()
float()
bool()
list()
"""
"""str1 = '123'
str2 = "123"
print(len(str1))
print(abs(-5))
print(max(1, 2, 3, 4))
print(min(1, 2, 3, 4))"""
"""print(type(number)) # type - посмотреть тип данных
print(type(float1))
print(type(str1))
print(type(str2))"""

"""inp = int(input()) # для ввода данных
print(type(inp))
print(inp + 1)
print(1)"""
#операции
"""
+
-
*
/
// - целосчиленное деление
%
** - степень
"""
"""print(1 + 2, str2, 8 % 2 == 0, 4 + 5, 2 == 2)
print(5 // 2)
print(5 % 2)
print(5 ** 2)"""

count = 0
count += 1

"""count /= 1
count %= 1
count **= 1
count -= 1"""
"""print(count)"""

flag1 = True # 1
flag2 = False # 0
# сравнение
"""
>
<
>=
<=
!=
== равно

and *
or +
not

is является
in проверка вхождения
"""

"""a = 5 > 2
b = 7 * 8 == 51
c = 7 != 8
print(a, b, c)

d = False or False or 5 > 2 
e = not True or True or False and 7 != 8
print(d, e)
f = True and False or True and False and True or 5 > 2
#    1    *   0    +    1   *    0    *   1
print(f)
print(flag1 is True)"""

"""if flag2:
    print("true")
elif flag1:
    print("2 true")
else:
    print("false")"""

"""
c = 0  # Ложь
e = ''  # ложь
f = [] # ложь
g = () # ложь
a = None  # ложь

d = "Hello"  # Истина

if a:
    print("true")
else:
    print("false")
"""
"""
day = 2
match day:
    case 1: print("Monday")
    case 2: print("Tuesday")
    case 3: print("Wednesday")
    case 4: print("Thursday")
    case 5: print("Friday")
    case 6: print("Saturday")
    case 7: print("Sunday")
    case _: print("Invalid day")"""
"""
count = 0
while count < 10:
    print(count)
    count += 1
    if count == 8:
        break
    if count == 5:
        count += 1
        continue
else:
    print("Loop finished")"""

# для элементов в последовательности
"""str1 = '123456'
for c in str1:
    print(c)"""

# списки
"""
list
[]
"""

"""list1 = [1, 2, 3, 4, 5]

zero_list = []
zero_list = list()

for e in list1:
    print(e)"""

"""for i in range(5):
    print(i)

print(range(5))
print(list(range(5)))"""
"""
(конец)
(начало, конец)
(начало, конец (не включительно), шаг)
"""
"""print(list(range(50, 5, 4)))"""

"""for _ in range(5):
    print("Hello")
else:
    print("Loop finished")
"""

zapr = "$%^&*"
login = "myLogin"

for c in login:
    if c in zapr:
        print("вы ввели логин с запрещенными символами")
        break
else:
    print("вы ввели безопасный логин")

#isinstance

str1: str = '213'

def add(a: int, b: int) -> int:
    return a + b

print(add("1", "2"))