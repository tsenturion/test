//jest
//mocha
//chai

//npm install --save-dev jest
//yarn add --dev jest


function add(a, b) {
    return a + b;
}



//jest - для тестирования функция, react-компоненотов и других частей
//matchars - утверждения 
/*
.tobe() - для примитивных типов данных
.toEqual() - равенство объектов и массиов, рекусивно сравнивать их свойства
.toBeLessThanOrEqual() - меньше либо равно значению
.toBeCloseTo() - используется при округлении, для дробей 
.toMatch() - проверка регулярных выражений

.toContain() - элемент присутствует в массиве или строке
.toThrow() - функции на выбрасывание ошибки

*/

//.tobe() - для примитивных типов данных
test("проверяем функцию add", () => {
    expect(add(1, 2)).toBe(3);
});

//.toEqual() - равенство объектов и массиов, рекусивно сравнивать их свойства
test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
})

//.toBeLessThanOrEqual() - меньше либо равно значению

test('expect 2 + 2 to be less than or equal to 4', () => {
    expect(2 + 2).toBeLessThanOrEqual(4);
});

//.toBeCloseTo() - используется при округлении, для дробей

test('1.1 + 2.2 should be approximately 3.3', () => {
    expect(1.1 + 2.2).toBeCloseTo(3.3, 1);
});

//.toMatch() - проверка регулярных выражений

test('expect "foo" to match /foo/', () => {
    expect('foo').toMatch(/foo/);
});

//.toContain() - элемент присутствует в массиве или строке

test('array includes number 1', () => {
    expect([1, 2, 3]).toContain(1);
});

//.toThrow() - функции на выбрасывание ошибки

test('expect a function to throw an error', () => {
    expect(() => {
        throw new Error('An error occurred!');
    }).toThrow('An error occurred!');
});

/*
describe() - группировка
it() - отдельный тест внутри describe
*/

describe('функция сложения', () => {
    it("должна возвращать сумму двух положительных чисел", () => {
        expect(add(2, 2)).toBe(4);
    });

    it("должна возвращать сумму одного положительного и одного отрицательного числа", () => {
        expect(add(2, -2)).toBe(0);
    });

    it("должна возвращать сумму двух отрицательных чисел", () => {
        expect(add(-2, -2)).toBe(-4);
    });
});

//мокинг - изоляция кода от внешних зависимостей 
//jest.fn() - запоминаем вызовы, аргументы

const mockCallback = jest.fn();

[1, 2, 3].forEach(mockCallback)
expect(mockCallback.mock.calls.length).toBe(3);


//jest.mock() мокинг модулей

jest.mock('/math.js');

//jest.spyOn() 
//mockImplementation()

const Math = require('/math.js');

Math.add.mockImplementation((a, b) => a + b + 3);

expect(Math.add(2, 2)).toBe(7);
//mockReturnValue()

Math.add.mockReturnValue(10);

expect(Math.add(2, 2)).toBe(10);

// //jest.resetAllMocks() - сбрасывает все моки

// Math.add.mockReset();

// expect(Math.add(2, 2)).toBe(4);

// //jest.clearAllMocks() - очищает вызовы моков

// Math.add.mockClear();

// expect(Math.add.mock.calls.length).toBe(0);

//покрытие тестами - метрика охвата тестами
// покрытие кода = (кол-во выполненных строк/общее кол-во строк) * 100%
//npm run test -- --coverage
/*
покрытие строк,
покрытие утверждений,
покрытие проверок,
покрытие замыканий,
покрытие генераторов,
покрытие try/catch,
покрытие функций,
покрытие объектов,
покрытие массивов,
покрытие ключевых слов,
покрытие статических методов,
покрытие модулей,
покрытие компонентов,
покрытие компаний,
покрытие событий,
покрытие асинхронных функций,
*/
// покрытие требований 

//инверсия зависимостей

class ApiService {
    constructor() {
        this.axios = require('axios');
    }

    async getData(url) {
        const response = await this.axios.get(url);
        return response.data;
    }
}

class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getData(url) {
        const response = await this.httpClient.get(url);
        return response.data;
    }
}

const httpClient = {
    get: jest.fn().mockResolvedValue({ data: 'some data' }),
};

test('ApiService вызывает getData и возвращает данные', async () => {
    const apiService = new ApiService(httpClient);
    const data = await apiService.getData('https://api.example.com/data');

    expect(httpClient.get).toHaveBeenCalledWith('https://api.example.com/data');
    expect(data).toEqual('some data');
});
