//tdd - пишем тесты до кода

/*
1. написание теста 
2. запуск, получение ошибки 
3. написание минимального кода
4. рефакторинг
*/
// функцию, которая проверяет формат email, возвращает сообщение о ошибке, если формат неверный
// 1 тест 
// validateEmail('')
// validateEmail('example') без знака @
// validateEmail('example@example.com') - вернуть null, все корректно
// 2 запуск
// 3 реализация
// 4 пройти тесты
// 5 рефакторинг
//1
describe('функция сложения', () => {
    it('должна возвращать сумму двух чисел', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

function add(a, b) {
    return a + b;  // рефакторинг: заменяем Math.add() на '+'
}

//2

describe('функция деления', () => {
    it('должна возвращать частное двух чисел', () => {
        expect(divide(10, 2)).toBe(5);
    });
    it('должна выбрасывать исключение при делении на ноль', () => {
        expect(() => divide(10, 0)).toThrow();
    });
});

function divide(a, b) {
    if (b === 0) {
        throw new Error('На ноль делить нельзя!');
    }
    return a / b;  // рефакторинг: заменяем Math.floor() на '/'
}

//snapshot для тестирования

describe('функция возвращает объект', () => {
    it('должна возвращать объект с ожидаемыми свойствами', () => {
        const result = createObject();
        expect(result).toMatchSnapshot();
    });
});

//yarn test --updateSnapshots

// функцию, которая проверяет формат email, возвращает сообщение о ошибке, если формат неверный
// 1 тест 
// validateEmail('')
// validateEmail('example') без знака @
// validateEmail('example@example.com') - вернуть null, все корректно
// 2 запуск
// 3 реализация
// 4 пройти тесты
// 5 рефакторинг

describe('функция проверка email', () => {
    it('должна возвращать null, если формат email корректный', () => {
        expect(validateEmail('example@example.com')).toBeNull();
    });
    it('должна возвращать сообщение об ошибке, если формат email некорректный', () => {
        expect(validateEmail('example')).toBe('Неверный формат email');
    });
    it('должна возвращать сообщение об ошибке, если email пустой', () => {
        expect(validateEmail('')).toBe('Email не может быть пустым');
    });
});

//функция, которая проверяет формат email, возвращает сообщение о ошибке, если формат неверный

export function validateEmail(email) {
    if (!email) {
        return 'Email не может быть пустым';
    }
    if (!email.includes('@'))
    {
        return 'Неверный формат email';
    }
    const parts = email.split('@');
    if (parts.length !== 2 || !parts[1].includes('.')) {
        return 'Неверный формат email';
    }
    return null;  
}
