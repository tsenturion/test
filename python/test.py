from functools import partial

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
