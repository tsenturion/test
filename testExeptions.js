function splitString(str) {
    return str.split(" ");
}

splitString(null); 

function divide(a, b) {
    if (b === 0) {
        throw new Error("На ноль делить нельзя!");
    }
    return a / b;
}

//.toThrow(); - проверка на выбрасывание ошибки
test("должна выбрасывать ошибку при делении на 0", () => {
    expect(() => divide(10, 0)).toThrow(); // - передаем divide(10, 0) в функцию а не вызываем ее сразу
    //expect(divide(10, 0)).toThrow() - тест срау завершится ошибкой - неверно
});

//проверяем текст ошибки
test("ошибка должна содержать правильное сообщение", () => {
    expect(() => divide(10, 0)).toThrowError("На ноль делить нельзя!");
});

//ошибки в async/await
async function getUser(id) {
    if (id <= 0) {
        throw new Error("ID должен быть положительным числом");
    }
    return { id, name: 'иван'}
}
//rejects - для их тестирования
test('должна вбратывать ошибку при отрицательном ID', async() => {
    await expect(getUser(-1)).rejects.toThrow('ID должен быть положительным числом');
})

//try catch чтобы ловить вручную


test('должна вбратывать ошибку при некорректном ID', async() => {
    try {
        await getUser(-1);
    } catch (error) {
        expect(error.message).toBe('ID должен быть положительным числом');
    }
});

class ValidationError extends Error {}

function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError('Возраст должен быть в диапазоне от 0 до 150');
    }
}

test('должна выбрасывать ValidationError', () => {
    expect(() => validateAge(-1)).toThrow(ValidationError);
});

//callback

function asyncOperation(callback) {
    setTimeout(() => {
        callback(new Error("ошибка"));
    }, 100);
}

test('колбэк должен вызывать ошибку', (done) => {
    asyncOperation((error) => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("ошибка");
        done(); // без done jest не поймет когда тест завершился
    });
});