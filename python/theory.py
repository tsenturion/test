"""
Линтинг.
Микрофреймворки. 
Шаблонизация. 
ORM. 
Тесты. 

Хеш-таблицы. 
Замыкания. 
Декораторы. 
Больше о декораторах. 
Рекурсия. 
Цели тестирования. 
Утверждения. 
Фреймворк Pytest. 
Модульные тесты. 
Подготовка данных.
Плохие и хорошие практики тестирования. 
Тестирование через документацию. 
Покрытие кода тестами.
Разработка через тестирование. 
Непрерывная интеграция.
Онтология. 
Точки на координатной плоскости. 
Семантика списков и словарей. 
Создание абстракции. 
Интерфейсы. 
Уровневое проектирование. 
Инварианты.
Определения. 
Обход дерева. 
Агрегация.
Аккумулятор
Концепции ООП. 
Классы, пространства имен, атрибуты. 
Объекты-одиночки и глобальные переменные. 
Инстанцирование классов и экземпляры. 
Методы. 
Инициализация и протоколы. 
Свойства. 
Наследование. 
Исключения. 
Шаблоны Проектирования. 
Конфигурация. 
Изменяемая конфигурация. 
Объекты-сущности, Объекты-значения и внедренные объекты.
Fluent Interface. 
Сборщики (Builders). 
Пишем код правильно
Представление символов и метасимвол.
Символьные классы. 
Квантификация. 
Жадность. 
Группировка и обратная связь.
Модификаторы. 
Просмотр вперед и назад. 
Встроенный веб-сервер. 
Flask. 
Обработчики запросов.
HTTP Сессия (запрос и ответ). 
Динамические маршруты. 
Шаблонизатор. 
Наследование шаблонов.
Безопасность. 
Поисковые формы.
Персистентность. 
Модифицирующие формы. 
Именованные маршруты. 
CRUD: Создание. 
CRUD: Обновление. 
CRUD: Удаление. M
odel-View-Controller (MVC). 
Cookies. 
Сессия. 
Деплой
Тестирование ошибок. 
Фикстуры. 
Побочные эффекты. 
Тестирование кода, взаимодействующего с файлами. 
Инверсия зависимостей. 
Тестирование HTTP-запросов.
Манкипатчинг. 
Мокинг
Параметрический полиморфизм. 
Диспетчеризация по ключу (данные). 
Диспетчеризация по ключу (функции). 
Диспетчеризация по имени файла. 
Полиморфизм (утиная типизация). 
Null Object Pattern. 
Код, который убивает полиморфизм. 
Инверсия зависимостей. 
Стратегия (Паттерн). 
Динамическая диспетчеризация. 
Фабрика (Паттерн). 
Декоратор (Паттерн).
Шаблоны проектирования (Паттерны). 
Объектная композиция. 
Состояние (Паттерн). 
Множественное наследование и миксины.
Наследование. 
Модификаторы доступа. 
Позднее связывание. 
Шаблонный метод. 
Переопределение методов. 
Принцип подстановки Лисков. 
Исключения. 
Динамическая диспетчеризация. 
Абстрактные классы. 
Позднее статическое связывание. 
Метаклассы. 
Композиция вместо наследования. 
Функциональный и процедурный подход
Генераторы списков
Генераторы множеств и словарей
Генераторные выражения
Функции-генераторы
Открытие и закрытие файлов
Запись и чтение
Построчные чтение и запись
Менеджеры контекста
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
str1 = '123'
#все методы строк без кода
"""
.join() - объединяет элементы итерируемого объекта в одну строку
.strip() - удаляет пробельные символы в начале и в конце
.count() - подсчитывает количество вхождений подстроки
.find() - находит индекс первого вхождения подстроки
.replace() - заменяет одну подстроку на другую
.split() - разбивает строку на список подстрок по указанному разделителю

.capitalize() - перевод первого символа строки в верхний регистр
.lower() - преобразует все символы строки в нижний регистр
.upper() - преобразует все символы строки в верхний регистр
.title() - преобразует первую букву каждого слова в верхний регистр
.swapcase() - меняет регистр всех символов на противоположный

.center() - центрирует строку, дополняя ее пробелами
.ljust() - выравнивает строку по левому краю, дополняя ее пробелами справа
.rjust() - выравнивает строку по правому краю, дополняя ее пробелами слева
.zfill() - дополняет строку нулями слева до указанной длины

.rfind() - находит индекс последнего вхождения подстроки
.index() - находит индекс первого вхождения подстроки (вызывает ValueError, если не найдено)
.rindex() - находит индекс последнего вхождения подстроки (вызывает ValueError, если не найдено)
.startswith() - проверяет, начинается ли строка с указанной подстроки
.endswith() - проверяет, заканчивается ли строка указанной подстрокой
.rsplit() - разбивает строку на список подстрок по указанному разделителю, начиная с правого края
.partition() - разбивает строку на три части по первому вхождению разделителя
.rpartition() - разбивает строку на три части по последнему вхождению разделителя

.isalnum() - проверяет, состоит ли строка только из букв и цифр
.isalpha() - проверяет, состоит ли строка только из букв
.isdigit() - проверяет, состоит ли строка только из цифр
.islower() - проверяет, состоит ли строка только из символов в нижнем регистре
.isupper() - проверяет, состоит ли строка только из символов в верхнем регистре
.istitle() - проверяет, начинается ли каждое слово в строке с заглавной буквы
.isspace() - проверяет, состоит ли строка только из пробельных символов
"""
#.join() - объединяет элементы итерируемого объекта в одну строку. Пример:
words = ['Hello', 'world', '!']
result = ' '.join(words)
print(result)  # Output: Hello world !

#.strip() - удаляет пробельные символы в начале и в конце. Пример:
text = '   Hello, World!   '
stripped_text = text.strip()
print(stripped_text)  # Output: Hello, World!

#.count() - подсчитывает количество вхождений подстроки. Пример:
sentence = 'The quick brown fox jumps over the lazy dog'
count = sentence.count('the')
print(count)  # Output: 1

#.find() - находит индекс первого вхождения подстроки. Пример:
text = 'Python is awesome'
index = text.find('is')
print(index)  # Output: 7

#.replace() - заменяет одну подстроку на другую. Пример:
original = 'Hello, World!'
modified = original.replace('World', 'Python')
print(modified)  # Output: Hello, Python!

#.split() - разбивает строку на список подстрок по указанному разделителю. Пример:
sentence = 'The quick brown fox'
words = sentence.split()
print(words)  # Output: ['The', 'quick', 'brown', 'fox']

def add(a, b):
    print(a + b)

def add(a, b):
    return a + b

def add():
    return "сумма"

"""def multy_return():
    return 1, 2, 3, 4"""

def multy_return(amount=0):
    if amount == 0:
        return None, None, None, None
    return 1, 2, 3, 4
a, b, c, d = multy_return()
print(a, b, c, d)

#списки
#все методы списков без кода
# Методы списков:
zero_list = []
zero_list += [1, 2]
"""
append() - добавляет элемент в конец списка
insert() - вставляет элемент в указанную позицию
remove() - удаляет первое вхождение указанного элемента
pop() - удаляет и возвращает элемент по индексу (по умолчанию последний)
index() - возвращает индекс первого вхождения элемента
count() - возвращает количество вхождений элемента

clear() - удаляет все элементы из списка
sort() - сортирует список на месте
copy() - возвращает поверхностную копию списка

reverse() - разворачивает список на месте
extend() - добавляет элементы из итерируемого объекта в конец списка

Функции для работы со списками:

sorted() - возвращает новый отсортированный список
reversed() - возвращает итератор в обратном порядке
list() - создает список из итерируемого объекта

any() - возвращает True, если хотя бы один элемент истинный
all() - возвращает True, если все элементы истинные

enumerate() - возвращает итератор пар (индекс, значение)
zip() - создает итератор кортежей, где i-й кортеж содержит i-й элемент из каждого переданного итерируемого объекта
"""

# append() - добавляет элемент в конец списка. Пример:
fruits = ['apple', 'banana']
fruits.append('cherry')
print(fruits)  # Output: ['apple', 'banana', 'cherry']

# insert() - вставляет элемент в указанную позицию. Пример:
numbers = [1, 2, 4]
numbers.insert(0, 3)
print(numbers)  # Output: [1, 2, 3, 4]

# remove() - удаляет первое вхождение указанного элемента. Пример:
animals = ['cat', 'dog', 'cat']
animals.remove('cat')
print(animals)  # Output: ['dog', 'cat']

# pop() - удаляет и возвращает элемент по индексу (по умолчанию последний). Пример:
colors = ['red', 'green', 'blue']
last_color = colors.pop()
print(last_color)  # Output: 'blue'
print(colors)  # Output: ['red', 'green']

# index() - возвращает индекс первого вхождения элемента. Пример:
letters = ['a', 'b', 'c', 'a']
index_of_a = letters.index('a')
print(index_of_a)  # Output: 0

# count() - возвращает количество вхождений элемента. Пример:
numbers = [1, 2, 3, 1, 1, 4]
count_of_ones = numbers.count(1)
print(count_of_ones)  # Output: 3


list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list1[1:6:2])
# начало, конец не включая, шаг
print(list1[::-1])

#Null nil None
"""
:b - двоичная форма
:с - преобразование в юникод
:d - десятичный
:о - восьмеричный
:х - шеснадцатеричный, нижний
:+ - отображает + только для положительных
:- - отображает - только для отрицательных
:(пробел) - дополнительный пробел перед положительными и отрицательными
:< - выравнивние по левому краю
:> - по правому краю
:^ - по центру

"""
some_number = 104
print(f'erfger {some_number} = {some_number:b} в двоичной')
print(f'erfger {some_number:c} ')
print(f'erfger {some_number:-} ')
print(f'erfger {some_number:+} ')
print(f'erfger {some_number: } ')
print(f'erfger {some_number:^} ')
print(f'erfger {some_number:<} ')
print(f'erfger {some_number:>} ')
print(f'erfger {some_number:.2f} ') #округление до двух знаков


def multy_return(amount=0, amount2=0, amount3=0):
    return

result = multy_return(10, amount3=10)


import math
import math as m
from math import pi
from math import pi, pow
from math import pi as p, pow

from math import *
print(pi)
print(m.pi)

from functions import add
add(1, 2)
#import my_package
# python -m twine uploaad dist/*

from random import *

print(random()) # случайное от 0 до 1
print(randint(1, 10)) # случайное целое от а до б
list1 = [i * 8 for i in range(5)]
print(choice(list1)) # случайное из последовательности
print(choices(list1, k=2)) # несколько случайных из последовательности
shuffle(list1) # перемешать элементы
print(list1)
print(uniform(1.5, 5.6)) # случайное дробное от а до б
print(randrange(0, 100, 5))
print(sample(list1, k=2))


#управление состоянием генератора
seed(42) # фиксация случайных
#getstate() # возвращает текущее состояние генератора
#setstate(state) # устанавливает состояние генератора

"""print(random()) # случайное 0.0-1.0
print(randint(a, b)) # случайное [a-b]


print(randrange(a, b, c)) #случайное из диапазона
print(uniform(a, b)) #слуаное дробное [ab]
print(choice(squence)) #случайный элемент из последовательности
print(shuffle(squence)) # перемешивает последовательность на месте
print(sample(population, k)) # population - последовательность, k уникальных элементов
"""
#tuple - кортеж - неизменяемая последовательность

tuple1 = tuple([1, 2, 3, 4]) # приводит к неизменияемому типу данных
print(tuple1)
tup = (1, 2, 4, '123')
zero_tuple = tuple()
zero_tuple = ()
print(tup)
print(type(tup).__name__)
tup2 = ([], 1, 2, 4, '123')
print(tup)
tup2[0].append(1)
print(tup * 2)

print(tup[1:3])

print(tup + tup2)
print(2 in tup)
print(len(tup))
for i in tup:
    print(i)

#ссылки
"""
все передается по ссылке
"""
#изменяемые
"""
списки
словари
множества
"""
#неизменяемые - хешируемые - для создания ключа у словаря
"""
строки
кортежи
целые числа
дробные числа
логические значени
frozenset
"""
#weakref

a = [1, 2]
b = a
print(id(a), id(b))

b.append(3)
print(a, id(a))

s = 'hello'
t = s
print(id(s), id(t))

t = 'world'

print(s, t, id(s), id(t))
#id() - возвращает уникальный идентификатор

#hash() - возвращает хеш-значение 
a = '12'
b = [1]
print(hash(a))

# множества set
inp = [1, 1, 2, 2]

print(set(inp)) # делает множество уникальных значений

some_set = {1, 2, 3, 3}
print(some_set)
print(type({}))
print(type(set()))

zero2_set = set()
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3)
zero2_set.add(3) # добавление
print(zero2_set)
zero2_set.update(range(5))
print(zero2_set)
zero2_set.discard(1)
print(zero2_set)
zero2_set.remove(2)
print(zero2_set)
popped = zero2_set.pop()
print(zero2_set)
print(popped)
zero2_set.clear()
print(zero2_set)
union_set = {1, 2, 3}.union({13, 2})
union2_set = {1, 2, 3} | {13, 2}
print(union_set)
"""
.set() пустое
.set(iterable) итерируемый объект в множество
.add(element) добавление
.remove(element) удаляет с ошибкой если отсутствует
.discard(element) удаляет без ошибки

.pop() удаляет случайный без ошибки
.copy() копия 
.clear() удаляет полностью

.update(other) |= добавление элементов из другого множества
.intersection_update(other) &=  оставляет в множестве только общие элементы с другим множеством
.symmetric_difference_update(other) ^= есть в одном из множеств но не в обоих одновременно
.union(other) | объединение 
.intersection(other) & только общие элементы для обоих множеств
.difference(other) - есть в первом но нет во втором
.difference_update(other) ^ -= симметричная разность. Есть только в одном из множеств но не в обеих одновременно

.isdisjoint(other) True, если set и other не имеют общих элементов
.issubset(other) <= True если все эл set принадлежат other
.issuperset(other) >= True если все из other принадлежат set
"""

intersection_set = {1, 2, 3}.intersection({13, 2})
intersection2_set = {1, 2, 3} & {13, 2}
print(intersection_set)
difference_set = {1, 2, 3}.difference_update({3, 4, 5})
difference2_set = {1, 2, 3} - {3, 4, 5}

print(difference_set)
print(difference2_set)

fs1 = frozenset([1, 2, 3])
fs2 = frozenset([3, 4, 5])

"""
frozenset() пустое
frozenset(iterable) итерируемый объект в неизменяемое множество

copy

union
intersection
difference
symmetric_difference
isdisjoint
issubset
issuperset

"""
print(fs1 | fs2)
print(fs1 & fs2)
print(fs1 - fs2)
print(fs1 ^ fs2)
print(fs1 <= fs2)
print(fs1 >= fs2)

d = {
    frozenset([1, 2, 3]): "value1",
    frozenset([4, 5, 6]): "value2",
}

# стек очередь deque
from collections import deque

stack = deque()

stack.append(1)
stack.append(2)
stack.append(3)
print(stack)
print(stack.pop())
print(stack.pop())
print(stack.pop())

if not stack:
    print("Стек пуст")

"""
append(x)     добавляет элемент x в конец стека
pop()         удаляет и возвращает последний элемент стека
if not stack  проверка, пуст ли стек
stack[-1]     Peek Просмотр верхнего элемента
clear()       очистка, не всегда
"""

#deque
"""
добавление
append(x)
appendleft(x)

удаление
pop()
popleft()

методы
clear()  полностью очистить
extend(iterable) — добавляет все элементы из итерируемого объекта в конец deque
extendleft(iterable) — добавляет все элементы из итерируемого объекта в начало deque (элементы добавляются в обратном порядке)
rotate(n) — циклически сдвигает элементы deque на n шагов. Если n положительное, сдвиг происходит вправо, если отрицательное — влево
count(x)  возвращает количество элементов, равных x
remove(x)  удаляет первый найденный элемент, равный x

свойство
maxlen  максимальный размер deque (если задан). Если при добавлении элементов размер превышает maxlen, элементы с противоположного конца автоматически удаляются
"""
d = deque([1, 2, 3])
d.extend([4, 5, 6])  # Добавляем элементы в конец
print(d)  # deque([1, 2, 3, 4, 5, 6])

d = deque([4, 5, 6])
d.extendleft([1, 2, 3])  # Добавляем элементы в начало
print(d)  # deque([3, 2, 1, 4, 5, 6])

d = deque([1, 2, 3, 4, 5])
d.rotate(2)  # Сдвигаем вправо на 2 шага
print(d)  # deque([4, 5, 1, 2, 3])

d.rotate(-2)  # Сдвигаем влево на 2 шага
print(d)  # deque([1, 2, 3, 4, 5])

d = deque([1, 2, 3])
d.clear()  # Очищаем deque
print(d)  # deque([])

d = deque([1, 2, 2, 3, 2, 4])
print(d.count(2))  # 3 (элемент 2 встречается 3 раза)

d = deque([1, 2, 3, 2, 4])
d.remove(2)  # Удаляем первый элемент 2
print(d)  # deque([1, 3, 2, 4])

# Создаем deque с максимальным размером 3
d = deque([1, 2, 3], maxlen=3)
print(d)  # deque([1, 2, 3], maxlen=3)

# Добавляем новый элемент
d.append(4)  # Элемент 1 удаляется, так как maxlen=3
print(d)  # deque([2, 3, 4], maxlen=3)

# Добавляем несколько элементов
d.extend([5, 6])  # Элементы 2 и 3 удаляются
print(d)  # deque([4, 5, 6], maxlen=3)

#Деструктуризация и оператор упаковки
#деструктуризация - разложение коллекции на отдельные элементы

numbers = [1, 2, 3]

# Первый способ

a, b, c = numbers
print(a, b, c)  # 1 2 3

nested_list = [1, [2, 3]]
a, [b, c] = nested_list
print(a, b, c)
# Второй способ

a, *b, c = numbers
print(a, b, c)  # 1 [2, 3]

# Оператор упаковки */**- создание коллекции из отдельных элементов
#*
"""
для упаковки позиционных аргументов в список
например собрать оставшиеся элементы в список"""

def my_function(a, b, *args):
    print(a, b, args)

my_function(1, 2, 3, 4, 5)  # 1 2 (3, 4, 5)

fruits = ['apple', 'orange', 'banana']
first, *rest = fruits
print(first)
print(rest)

# *args позволяет передать любое количество позиционных аргументов в функцию
#**

"""
для упаковки именнованных/словарных аргументов в словарь
например собрать оставшиеся элементы в словарь
например для деструктуризации словарей"""

def my_function(**kwargs):
    print(kwargs)

my_function(a=1, b=2, c=3)  # {'a': 1, 'b': 2, 'c': 3}

# **kwargs позволяет передать любое количество именнованных/словарных аргументов в функцию
person = {"name":" john", 'age': 30}
name, age = person.values()
print(name, age)

name, age = person['name'], person['age']

print(name, age)

def greet(name, age, *hobbies):
    print(f"Hello, {name}! You are {age} years old.")
    print("Your hobbies are:")
    for hobby in hobbies:
        print(hobby)

greet("John", 30, "reading", "painting")

points = [
    [4, 3],
    [0, -3]
]

for x, y in points:
    print(f"({x}, {y})")

#Создание новых списков и оператор распаковки

list1 = [1, 2, 3]
list2 = [4, 5, 6]

# Создание нового списка из двух исходных

new_list = list1 + list2
print(new_list)



list3 = [*list1, *list2]

print(list3)

import json
dict1 = {'name': 'alice', 'city': 'new york'}
print(type(dict1))

set1 = set()
zero_dict = {}
zero_dict['age'] = 30
zero_dict['name'] = 'bob'

dict1 = dict(name='bob', age=30)


# ----------------------------------------------------------------
num = 42
hash_value = hash(num)
print(hash_value)

"""my_list = [1, 2, 3, 4]
hash_value = hash(my_list)
print(hash_value)"""

str1 = '123'
hash_value = hash(str1)
print(hash_value)

my_list = [1, 2, 3, 4]
hash_value = hash(tuple(my_list))
print(hash_value)
# ----------------------------------------------------------------

print(zero_dict['age'])
print(zero_dict.get('name', None))
zero_dict['age'] = 31
del zero_dict['name']
print(zero_dict)
for key, value in zero_dict.items():
    print(f'{key}: {value}')

"""
keys() - список ключей
values() - значений
items() - пары
del удаление
pop(key, default) удаление и возвр значения

get(key, default) возвр значение по ключу и default если ключ отсутствует
popitem() удаляет и возвр последнюю добавл пару

clear()
copy()
"""
#defaultdict 
from collections import defaultdict

counts = defaultdict(int)

counts['apple'] += 1
counts['orange'] += 1
counts['banana'] += 1

print(counts)

items = ['apple', 'apple', 'apple', 'banana']
counts = defaultdict(int)

for item in items:
    counts[item] += 1

print(counts)

# ----------------------------------------------------------------
data = [('1', '2'), ('1', '3'), ('1', '4'), ('2', '1')]

grouped = defaultdict(int)

for key, value in data:
    grouped[key] += int(value)

print(grouped)
# ----------------------------------------------------------------
def default_value():
    return "unknown"

info = defaultdict(default_value)
info['name'] = 'alice'
info['age'] = 30

print(info['name'])

print(info['city'])

items_count = {}
for item in items:
    if item in items_count:
        items_count[item] += 1
    else:
        items_count[item] = 1

    
#итераторы
"""
__iter__()
__next__()
StopIteration

iter()
next(iterator, default=None)
"""
numbers = [1, 2, 3]
i = iter(numbers)

while True:
    try:
        print(next(i))
    except StopIteration:
        break

def even_numbers(max_num):
    num = 0
    while num <= max_num:
        yield num
        num += 2

for num in even_numbers(10):
    print(num)


def cube_generator(n):
    for i in range(1, n + 1):
        yield i ** 3

for cube in cube_generator(5):
    print(cube)

cubes = [i ** 3 for i in range(1, 6)]
for cube in cubes:
    print(cube)


list1 = [i for i in range(5)]
print(list1)

list1 = []
for i in range(5):
    list1.append(i)
print(list1)

list2 = [i ** 2 for i in range(5)]
list3 = [i if i % 2 == 0 else None for i in range(5)]
print(list3)
list4 = [i for i in range(5) if i % 2 == 0]
print(list4)

list5 = [[i * j for i in range(1, 5)] for j in range(1, 5)]
print(list5)

def my_gen():
    yield 1
    yield 2
    yield 3

gen = my_gen()

print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen, None))

#pip --version
#pip
#pip -V

#PyPI

#pip install requests
#pip install requests==2.26.0
#pip install requests>=2.20
#pip install requests<3.0

#pip show requests

#pip uninstall requests
#Y/n

#pip install --upgrade requests

#pip list --outdated

#pip freeze > requirements.txt
#pip install -r requirements.txt

#git clone https://github.com/requests/requests.git

#pip check

#REPL
#python
#>>>
#exit()

#def
#...
#python -m venv myenv
#myenv\Scripts\activate
#deactivate

#iPython

#exit()
#help()
#dir(obj)
#locals()
#globals()


#distutils
#sdist
#bdist

#Setuptools


#setuptools.setup(
    #name='my_package',
    #version='1.0.0',
    #description='My package description',
    #url='https://github.com/user/my_package',
    #author='Author Name',
    #author_email='author@example.com',
    #license='MIT',
    #packages=setuptools.find_packages(),
    #install_requires=[
        #'requests>=2.20',
    #],
    # classifiers=[
        #'Development Status :: 3 - Alpha',
        #'Programming Language :: Python :: 3',
        #'Programming Language :: Python :: 3.7',
    #],
    #python_requires='>=3.7',
    #entry_points={
        #'console_scripts': [
            #'my_script=my_package.my_script:main',
        #],
    #},)


#pypi.org

#Poetry
#Poetry и управление зависимостями.
#Poetry и скрипты. 
#Сборка дистрибутива пакета с помощью Poetry.

#poetry new my_package
#poetry add requests
#poetry add requests@^2.25
#poetry add --dev pytest
"""
^
~
>=
<
"""
#poetry remove requests
#poetry shell
#poetry run pytest
#poetry publish --build
#poetry update
#poetry show --outdated

#pyproject.toml
"""
[tool.poerty]
name = "my_package"
version = "1.0.0"
description = "My package description"
authors = [
    {
        "name": "Author Name",
        "email": "author@example.com
    }
]
[tool.poerty.dependencies]
python = "^3.7"
requests = "^2.26.0"

[tool.poetry.scripts]
my_script = "my_package.my_script:main"

[tool.poetry.dev-dependencies]
pytest = "^7.0.1"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
"""

#Poetry и управление зависимостями.
#Poetry и скрипты

#lambda arguments : expression

add = lambda x, y : x + y
print(add(1, 2))

def add(a, b):
    """документация - docstring"""
    return a + b

#map filter reduce sorted

def square(x):
    return x ** 2

print(square(4))

square_lambda = lambda x : x ** 2
print(square_lambda(4))

maximum = lambda a, b : a if a > b else b
print(maximum(10, 20))

def apply_operation(x, y, operation):
    return operation(x, y)

result = apply_operation(10, 5, lambda a, b : a - b)
print(result)

is_even = lambda x : "четное" if x % 2 == 0 else "нечетное"

print(is_even(10))

opetations = {
    "add": lambda x, y : x + y,
    "subtract": lambda x, y : x - y,
    "multiply": lambda x, y : x * y,
    "divide": lambda x, y : x / y if y != 0 else "ошибка 0"
}

print(opetations["add"](5, 3))

operations = [
    lambda x, y : x + y,
    lambda x, y : x - y,
    lambda x, y : x * y,
    lambda x, y : x / y if y!= 0 else "ошибка 0"
]

"""def sort_numbers(numbers):
    return sorted(numbers) if numbers else "пусто"

print(sort_numbers[4, 3, 1, 5])"""

def multiplier(n):
    return lambda x : x * n

multiply_by_3 = multiplier(3)

print(multiply_by_3(5))

#map

numbers = ["1", "2", "3", "4", "5"]

#squares = list(map(lambda x : x ** 2, numbers))
to_int = list(map(int, numbers))
squares = list(map(square, to_int))
print(squares)

#filter

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_numbers = list(filter(lambda x : x % 2 == 0, numbers))

print(even_numbers)

#reduce

from functools import reduce

numbers = [1, 2, 3, 4, 5]

product = reduce(lambda x, y : x * y, numbers)

print(product)

#sorted

data = [('apple', 5), ('banana', 4)]

sorted_data = sorted(data, key=lambda x : x[1])

print(sorted_data)

def sqr1(number):
    return number * number

def printf(some_list, func):
    """docstring"""
    for i in some_list:
        print(func(i))


list1 = list(range(5))

printf(list1, sqr1)
printf(list1, lambda x : x * x)


sqr = lambda x : x * x

print(sqr(5))
for i in map(sqr1, list1):
    print(i)
list2 = list(map(sqr1, list1))
print(list2)

for i in filter(lambda x : x % 2 == 0, list1):
    print(i)
list1 = list(filter(lambda x : x % 2 == 0, list1))
print(list1)
fib = lambda n : n if n <= 1 else fib(n - 1) + fib(n - 2)
fact = lambda n : 1 if n == 0 else n * fact(n - 1)

#vfact = lambda f: f(f, n)
#infact = lambda n :
fact2 = lambda f , x :  1 if x == 0 else x * f(f, x - 1)
ifact = lambda n : (lambda f: f(f, n))(fact2)

list1 = list(map(fib, range(10)))
list2 = list(map(fact, range(10)))
print(list1)
print(list2)

strlist = ['fsd1231', 'fsd1231', 'fsd1231', 'fsd1231']
"""сделать первые буквы заглавными map, lambda"""

strlist = list(map(lambda n : n.title(), strlist))

numlist = ['1 2 3 4', '1 2 3 4', '1 2 3 4', '1 2 3 4']
"""найти сумму элементов map, lambda, .split()numlist = [10, 10, 10, 10]"""
numlist = list(map(lambda s: sum(map(int, s.split())), numlist))

strlist = ['121', 'fsd1231', 'fsd1231', 'Rsd1231', 'Rsd1231']
"""список слов с заглавной буквы, сделать их прописными filter
strlist = ['rsd1231', 'rsd1231']"""
strlist = list(map(lambda x : x.lower(), filter(lambda x : x.istitle(), strlist)))

strlist = ['121', '123321', 'fsd1231', 'Rsd1231', 'Rsd1231']
"""одинаково слева направо strlist = ['121', '123321']"""

strlist = list(filter(lambda x : x == x[::-1], strlist))

strlist = ['a', '123321', 'fsd1231', 'ii', 'Rsd1231']
"""с любой гласной aeiouyAEIOUY"""
strlist = ['a', 'ii']
b = "aeiouyAEIOUY"
strlist = list(filter(lambda x: any(ch in b for ch in x), strlist))
print()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# Удвойте каждый элемент списка чисел.
print(list(map(lambda x : x * 2, numbers)))

# Отфильтруйте чётные числа из списка.
print(list(filter(lambda x : x % 2 == 0, numbers)))

# Преобразуйте все строки в списке в верхний регистр.
strlist = ['fsd1231', 'fsd1231', 'fsd1231', 'fsd1231']
print(list(map(lambda s : s.upper(), strlist)))

# Отфильтруйте положительные числа из списка.
print(list(filter(lambda x : x > 0, numbers)))

# Вычислите квадраты всех чисел в списке.
print(list(map(lambda x : x ** 2, numbers)))

# Отфильтруйте чётные числа, а затем возведите их в квадрат. map filter
print(list(map(lambda x : x ** 2, filter(lambda x : x % 2 == 0, numbers))))

#Замыкания. 
#curry
#хеш таблицы
# nonlocal для изменения переменных во вложенных функциях
# global для работы с глобальными переменными внутри функций
#legb
some_const = 0

def some():
    count = 0
    print(count)

some()

x = 10

def change_x():
    global x
    x = 20
    print(x)
change_x()
print(x)

#nonlocal

def outer():
    x = 10
    def inner():
        nonlocal x
        x = 20
        print(x)
    inner()
    print(x)

outer()


# global
global_var = 30
def example():
    global global_var
    global_var += 10
    print(global_var)

example()
print(global_var)

# nonlocal
def outer():
    nonlocal_var = 40

    def inner():
        nonlocal nonlocal_var
        nonlocal_var += 10
        print(nonlocal_var)

    inner()
    print(nonlocal_var)

outer()
"""
для замыканий
"""
#замыкания
x = 5
def outer():
    x = 10

    def inner():
        print(x)

    return inner

func = outer()
func()

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter1 = counter()
print(counter1())
print(counter1())
print(counter1())

counter2 = counter()

"""
сохранени состояния
сокрытие данных
передача параметров без глобальных переменных
фабрики функций
"""

"""
память
менее читаемый
nonlocal
"""


"""
изменение глобальных внутри функции
сохранение между вызовами функций
"""

"""
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

closure = outer_function(10)

result = closure(5)
print(result)

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment
counter1 = counter()
print(counter1())
print(counter1())
print(counter1())

# фабрика функций 
def multiplier(n):
    def multiply(x):
        return  n * x
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))
print(triple(5))
"""

"""
def возвращает словарь счетчика с методами
+1
-1
текущее
сброс к начальному
история изменений
откат к предыдущему
"""
"""
def smart_counter(initial_value=0):
    value = initial_value
    history_list = [initial_value]

    def increment():
        nonlocal value
        pass

    def decrement():
        nonlocal value
        value -= 1
        history_list.append(value)

    def get_value():
        return value

    def history():
        return history_list

    def undo():
        nonlocal value
        if len(history_list) > 1:
            history_list.pop()
            value = history_list[-1]

    return {
        "increment": increment,
        "decrement": decrement,
        "get_value": get_value,
        #reset
        "history": history,
        "undo": undo,
    }

counter = smart_counter(5)
counter['history']()
counter['undo']()
counter['decrement']()
"""

#каррирование - разбирваем функцию с n аргументов на n вложенных функций
"""
упрощение работы с func высшего порядка
частичное применение функции
для функционального программирования, улучшает читаемость, логичность
"""
"""def add(a, b):
    return a + b

def add_curried(a):
    def inner(b):
        return a + b
    return inner

result = add_curried(2)(3)
print(result)

add_2 = add_curried(2)
print(add_2(3))

def add(a):
    def inner1(b):
        def inner2(c):
            return a + b + c
        return inner2
    return inner1


result = add(1)(2)(3)

from functools import partial
add_two = partial(add, 2)
result = add_two(3)
print(result)

def curry(func):
    def curried(*args):
        if len(args) >= func.__code__.co_argcount:
            return func(*args)
        return lambda *more_args: curried(*(args + more_args))
    return curried

@curry
def add(a, b, c):
    return a + b + c

result = add(1)(2)(3)
print(result)"""

"""
add
subtract
multiply
divide"""
from functools import partial
"""def operation(a):
    def inner(b):
        def oper(op):
            try:
                if op == 'add':
                    return a + b
                elif op == "subtract":
                    return a - b
                elif op == "divide":
                    if b == 0:
                        raise ZeroDivisionError('123')
                    return a / b
                elif op == 'multiply':
                    return a * b
                else:
                    raise ValueError('1234')
            except ValueError as e:
                return str(e)
            except ZeroDivisionError as e:
                return str(e)
            except Exception as ex:
                return ex
        return oper
    return inner
"""
"""result = operation(10)(5)('add')
print(result)
result = operation(10)(0)('divide')
print(result)
print(result is None)
result = operation(10)(5)('adde')
print(result)
print(result is None)"""

def operation(a, b, operation):
    try:
        if operation == 'add':
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "divide":
            if b == 0:
                raise ZeroDivisionError('123')
            return a / b
        elif operation == 'multiply':
            return a * b
        else:
            raise ValueError('1234')
    except ValueError as e:
        return str(e)
    except ZeroDivisionError as e:
        return str(e)
    except Exception as ex:
        return ex

add = partial(operation, operation='add')
my_add = partial(operation, operation='add', a=10)
add_10 = partial(partial(operation, a=10), operation='add')
divide = partial(operation, operation='divide')
divide2 = partial(operation, operation='d3ivide')
"""print(add(10, 2))
print(add_10(b=2))
print(divide(10, 2))
print(divide(10, 0))
print(divide2(10, 2))
"""
print(add_10(b=5))
print(my_add(b=5))

multuply = lambda x : lambda y : x * y
double = multuply(3)
print(double(5))

curried_function = lambda x : lambda y : lambda z : x + y + z
add_5 = curried_function(2)(3)
print(add_5(4))


def curried_add(x):
    return lambda y : x + y

def add(x, y):
    return x + y

add_3 = partial(add, 3)

def log(level):
    return lambda message: f"[{level.upper()}] {message}"

info = log("INFO")
error = log("ERROR")

print(info("This is an info message"))

"""
Напишите каррированную функцию с lambda, которая умножает число на коэффициент и добавляет смещение
Функция должна принимать два параметра: коэффициент и смещение
Вернуть замыкание, которое принимает одно число и выполняет вычисление

результат=(число×коэффициент)+смещение
"""