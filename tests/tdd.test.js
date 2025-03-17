//подключение validateEmail из tdd.js через import
function validateEmail(email) {
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


describe('validateEmail function', () => {
    it('должна возвращать сообщение об ошибке, если email не содержит символ "@"', () => {
    expect(validateEmail('exampleexample.com')).toBe('Неверный формат email');
    });
    it('должна возвращать null, если формат email корректный', () => {
        expect(validateEmail('example@example.com')).toBeNull();
    });
    it('должна возвращать сообщение об ошибке, если email пустой', () => {
        expect(validateEmail('')).toBe('Email не может быть пустым');
    });
    //проверка существования домена validateEmail('emample@') 
    it('должна возвращать сообщение об ошибке, если email не содержит домен', () => {
        expect(validateEmail('emample@')).toBe('Неверный формат email');
    });
});

