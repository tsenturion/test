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
//плохие практики тестирования
const myFunc = () => Math.random() * 10;

//плохой тест
test('должно вызвать Math.random', () => {
    const spy = jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(myFunc()).toBe(5);
    spy.mockRestore();
});

//хороший тест
test("должен возвращать n 0 - 10", () => {
    const result = myFunc();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
});

//плохой тест
test("сложная функция должна верно работать", () => {
    expect(complexFunction(3, 5).toBe(8));
    expect(complexFunction(10, 5).toBe(15));
    expect(complexFunction(0, 0).toBe(0));
    expect(complexFunction(-1, -1).toBe(-2));
});

//хороший тест
test("сложная функция должна складывать два числа", () => {
    expect(complexFunction(3, 5).toBe(8));
});

test("сложная функция должна обрабатывать 0", () => {
    expect(complexFunction(0, 0).toBe(0));
});

//плохой тест

test("складывает два числа", () => {
    expect(sum(2, 3)).toBe(5);
});

//хороший тест
test("складывает отрицательные числа", () => {
    expect(sum(-2, -3)).toBe(-5);
});
test("возвращает NaN для non-numeric", () => {
    expect(sum("-2", -3)).toBeNaN();
});

//плохой тест
test("", async () => {
    const user = await fetchUserFromDatabase(1);
    expect(user.name).toBe("John Doe");
});

//хороший тест
jest.mock("../database", () => ({
    fetchUserFromDatabase: jest.fn().mockResolvedValue({
        id: 1,
        name: "John Doe",
    }),
}));
//хорошие практики тестирования

test("умножает два числа", () => {
    expect(multiply(2, 3)).toBe(6);
});

describe("sum function", () => {
    test("должна складывать два числа", () => {
        expect(sum(2, 3)).toBe(5);
    });

    test("должна складывать отрицательные числа", () => {
        expect(sum(-2, -3)).toBe(-5);
    });
});

function calculateDiscount(price, isMember) {
    return isMember ? price * 0.9 : price;
}

test("", () => {
    expect(calculateDiscount(100, true)).toBe(90);
});

test("", () => {
    expect(calculateDiscount(100, false)).toBe(100);
});

beforeEach(() => {
    jest.restoreAllMocks();
});

//покрытие

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

test("складывает два числа", () => {
    expect(add(2, 3)).toBe(5);
});

//покрытие ветвей

function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9;
    } else {
        return price;
    }
}

test("", () => {
    expect(calculateDiscount(100, true)).toBe(90);
});

test("", () => {
    expect(calculateDiscount(100, false)).toBe(100);
});

// покрытие функций

const myFunc2 = () => Math.random() * 10;

// покрытие условий

function isValudPassword(password) {
    return password.length >= 8 && /\d/.test(password);
}

test("valid password", () => {
    expect(isValidPassword("Password123")).toBe(true);
});

test("too short", () => {
    expect(isValidPassword("pass1")).toBe(false);
});

test("no digits", () => {
    expect(isValidPassword("password")).toBe(false);
});

//jest --coverage
//jest --coverage --coverageReporters=text
//jest --coverage --coverageReporters=html
//jest --coverage --coverageReporters=json

//DIP

class PaymentProcessor{
    process(amount) {
        console.log(`оплачено ${amount}`);
    }
}

class OrderService {
    constructor() {
        this.paymentProcessor = new PaymentProcessor();
    }

    placeOrder(amount) {
        this.paymentProcessor.process(amount);
    }
}

const orderService = new OrderService();
orderService.placeOrder(100);

class IPaymentProcessor {
    process(amount) {
        throw new Error("not implemented");
    }
}

class CreditCardPayment extends IPaymentProcessor {
    process(amount) {
        console.log(`оплачено кредитной картой ${amount}`);
    }
}

class PayPalPayment extends IPaymentProcessor {
    process(amount) {
        console.log(`оплачено PayPal ${amount}`);
    }
}

class OrderService {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    placeOrder(amount) {
        this.paymentProcessor.process(amount);
    }
}

const pymentMethod = new CreditCardPayment();

const orderService2 = new OrderService(pymentMethod);

orderService2.placeOrder(100);

class MockPaymentProcess {
    process = jest.fn();
}

test("OrderService должен вызывать process у PaymentProcessor", () => {
    const mockPaymentProcessor = new MockPaymentProcess();
    const orderService = new OrderService(mockPaymentProcessor);

    orderService.placeOrder(100);

    expect(mockPaymentProcessor.process).toHaveBeenCalledWith(100);
});

//тестирование http
//mocking
//интеграционные тесты

//jest-fetch-mock
//npm install --save-dev jest-fetch-mock

import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

async function fetchUserData(userId) {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
        throw new Error("ошибка при загрузке данных");
    }    
    return response.json();
}

//import { fetchUserData } from

describe("fetchUserData", () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    test("успешный запрос возвращает данные", async () => {
        fetch.mockResponseOnce(JSON.stringify({id: 1, name: 'иван'}));
        const data = await fetchUserData(1);

        expect(data).toEqual({id: 1, name: 'иван'});
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1')
    });

    test("ошибка запроса вызывает исключение", async () => {
        fetch.mockReject(() => Promise.reject(new Error("ошибка сети")));

        await expect(fetchUserData(1)).reject.toThrow('ошибка сети');
    });
});

//npm install axios

import axios from 'axios';

export async function getUser(userId) {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return response.data;
}

//import

jest.mock("axios");

describe("getUser", () => {
    test("успешный запрос возвращает данные", async () => {
        axios.get.mockResolvedValue({data: {id: 1, name: 'иван'}});
        const data = await getUser(1);

        expect(data).toEqual({id: 1, name: 'иван'});
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1')
    });

    test("ошибка запроса вызывает исключение", async () => {
        axios.get.mockResolvedValue(new Error("ошибка сервера"));

        await expect(getUser(1)).reject.toThrow('ошибка сервера');
    });
});

//post

export async function createUser(user) {
    const response = await axios.post('https://api.example.com/users', user);
    return response.data;
}

test("успешное создание пользователя", async () => {
    const newUser = { id: 2, name: 'дмитрий'};
    axios.post.mockResolvedValue({data: newUser});

    const data = await createUser({name: 'дмитрий'});

    expect(data).toEqual(newUser);
    expect(axios.post).toHaveBeenCalledWith('https://api.example.com/users', {name: 'дмитрий'})
});

//стабинг stubbing

jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve({id: 1, name: 'иван'}),
});

/*
fetch
jest-fetch-mock
axios
*/
global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({id: 1, name: 'иван'}),
    })
);

//@faker-js/faker
//npm install @faker-js/faker

import { faker } from '@faker-js/faker';

//faker.name - генерация имени
faker.name.firstName(); //возвращает имя (Иван)
faker.name.lastName(); //возвращает фамилию (Иванов)
faker.name.fullName(); //возвращает полное имя (Иван Иванов)

faker.name.firstName('male'); //возвращает мужское имя (Дмитрий)
faker.name.firstName('female'); //возвращает женское имя (Анна)

//faker.internet - генерация интернет данных
faker.internet.email(); //возвращает email (ivan@gmail.com)
faker.internet.userName(); //возвращает логин (ivan)
faker.internet.password(); //возвращает пароль (1234567890)
faker.internet.url(); //возвращает ссылку (https://google.com)
faker.internet.ip(); //возвращает ip адрес (192.168.1.1)

//faker.phone - генерация телефонных номеров
faker.phone.number(); //возвращает телефонный номер (89123456789)
faker.phone.number('+7(###)###-##-##'); //возвращает телефонный номер (+7(912)345-67-89)

//faker.adress - генерация адресов
faker.address.city(); //возвращает город (Москва)
faker.address.country(); //возвращает страну (Россия)
faker.address.streetAddress(); //возвращает адрес (Москва, улица Ленина, дом 1)
faker.address.street(); //возвращает улицу (Ленина)
faker.address.zipCode(); //возвращает почтовый индекс (123456)

//faker.date - генерация даты
faker.date.past(); //возвращает прошедшую дату (2022-01-01)
faker.date.future(); //возвращает будущую дату (2022-01-01)
faker.date.between('2022-01-01', '2022-12-01'); //возвращает дату между двумя датами (2022-01-01)

//faker.finance - генерация финансовых данных
faker.finance.amount(); //возвращает сумму денег (1000.00)
faker.finance.currencyCode(); //возвращает код валюты (RUB)
faker.finance.account(); //возвращает номер счета (1234567890)
faker.finance.iban(); //возвращает ибан (RU00000000000000000000)

//faker.helpers - дополнительные функции
faker.helpers.arrayElement(['apple', 'banana', 'orange']); //возвращает случайный элемент массива ('apple')
faker.helpers.multiple(faker.name.firstName, { count: 3}); //возвращает массив случайных имён ('иван', 'анна', 'дмитрий')

import { ru } from '@faker-js/faker/locale/ru';
const faker = new Faker({ locale: ['ru'] });

for (let i = 0; i < 10; i++) {
    const user = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress(),
        date: faker.date.past(),
        amount: faker.finance.amount(),
        iban: faker.finance.iban(),
    };
}

test("создание пользователя", () => {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const user = createUser(name, email);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
}

// BEGIN
beforeEach(() => {
    for (let i = 0; i < 10; i++) {
      users.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      });
    }
  });
  // END

  for (let i = 0; i < 10; i++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    });
  }  





  test('Memoization', () => {
    const spy = jest.spyOn(utils, 'fibonacci');
    expect(memoFibonacci(1)).toBe(1);
    expect(memoFibonacci(1)).toBe(1); // Этот вызов должен использовать кэш
    expect(spy).toHaveBeenCalledTimes(1);
  
    expect(memoFibonacci(3)).toBe(2);
    expect(memoFibonacci(3)).toBe(2); // Этот вызов должен использовать кэш
    expect(spy).toHaveBeenCalledTimes(6);
  });




  
test('Memoization: utils.fibonacci вызывается один раз для каждого значения', () => {
    const spy = jest.spyOn(utils, 'fibonacci');
  
    const result1 = memoFibonacci(5);
    expect(result1).toBe(5);
    const callsAfterFirst = spy.mock.calls.length;
  
    const result2 = memoFibonacci(5);
    expect(result2).toBe(5);
    expect(spy).toHaveBeenCalledTimes(callsAfterFirst);
  
    spy.mockRestore();
  });
  
  test('Memoization: кэш работает независимо для разных значений', () => {
    const spy = jest.spyOn(utils, 'fibonacci');
  
    memoFibonacci(6);
    const callsAfter6 = spy.mock.calls.length;
  
    memoFibonacci(7);
    expect(spy.mock.calls.length).toBeGreaterThan(callsAfter6);
  
    const result1 = memoFibonacci(6);
    const result2 = memoFibonacci(7);
    expect(result1).toBe(8);
    expect(result2).toBe(13);
    expect(spy).toHaveBeenCalledTimes(spy.mock.calls.length);
  
    spy.mockRestore();
  });

  ------------|---------|----------|---------|---------|-------------------
  File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
  ------------|---------|----------|---------|---------|-------------------
  All files   |   69.23 |    52.38 |     100 |   69.23 |                   
   get.js     |     100 |      100 |     100 |     100 |                   
   indexOf.js |      60 |    42.85 |     100 |      60 | 7,12-15           
   slice.js   |      60 |       25 |     100 |      60 | 6,11-14           
  ------------|---------|----------|---------|---------|-------------------


    // BEGIN
    expect(slice([])).toEqual([]);

    const actual3 = slice([1, 2, 3, 4, 5, 6], -4, -2);
    expect(actual3).toEqual([3, 4]);
  
    const actual4 = slice([1, 2, 3, 4], -10, 10);
    expect(actual4).toEqual([1, 2, 3, 4]);
    // END


      // BEGIN
  const actual4 = indexOf([], 0);
  expect(actual4).toBe(-1);

  const actual2 = indexOf([1, 2, 3, 2, 4], 2, -3);
  expect(actual2).toBe(3);

  const actual5 = indexOf([1, 2, 2], 2, -10);
  expect(actual5).toBe(1);
  // END


//-------------------------------------------------
const actual4 = get([], 0, 'default');
expect(actual4).toBe('default');

const actual5 = get([1, 2, 3], -1);
expect(actual5).toBeNull();

const actual6 = get([1, 2, 3], -1, 'a');
expect(actual6).toBe('a');

const actual7 = get([1, 2, 3], 0);
expect(actual7).toBe(1);


const actual2 = slice([1, 2, 3, 4, 5]);
  expect(actual2).toEqual([1, 2, 3, 4, 5]);

  const actual3 = slice([1, 2, 3, 4, 5], -4, -2);
  expect(actual3).toEqual([2, 3]);

  const actual4 = slice([1, 2, 3, 4, 5], 7);
  expect(actual4).toEqual([]);

  const actual5 = slice([1, 2, 3, 4, 5], -8, 8);
  expect(actual5).toEqual([1, 2, 3, 4, 5]);

  const actual6 = slice([], 0, 1);
  expect(actual6).toEqual([]);

  const actual7 = slice([1, 2, 3], 1);
  expect(actual7).toEqual([2, 3]);


  const actual2 = indexOf([2, 7, 3, 2, 4], 7);
  expect(actual2).toBe(1);

  const actual3 = indexOf([2, 7, 3, 2, 4], 2, -3);
  expect(actual3).toBe(3);

  const actual4 = indexOf([2, 7, 3, 2, 4], 2, -10);
  expect(actual4).toBe(0);

  const actual5 = indexOf([], 2);
  expect(actual5).toBe(-1);

  const actual6 = indexOf([2, 7, 3, 2, 4], 5);
  expect(actual6).toBe(-1);

  const actual7 = indexOf([2, 7, 3, 2, 4], 2, 1);
  expect(actual7).toBe(3);

// BEGIN
test('Test', () => {
    const contents = {
      testFile: '{"key":"value"}',
      otherFile: '{"key1":"value1"}',
    };
  
    utils.readFile = jest.fn((filePath) => contents[filePath]);
  
    expect(loadConfig('testFile')).toEqual(JSON.parse(contents['testFile']));
    expect(loadConfig('otherFile')).toEqual(JSON.parse(contents['otherFile']));
  });
  // END


  describe('loadConfig', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('should parse valid JSON content', () => {
      const mockContent = '{"key": "value"}';
      const mockFilePath = '/path/to/config.json';
      
      utils.readFile = jest.fn().mockReturnValue(mockContent);
      
      const result = loadConfig(mockFilePath);
      
      expect(utils.readFile).toHaveBeenCalledWith(mockFilePath);
      expect(result).toEqual({ key: 'value' });
    });
  
    test('should throw error when file content is not valid JSON', () => {
      const invalidJson = 'invalid json';
      const mockFilePath = '/path/to/config.json';
      
      utils.readFile = jest.fn().mockReturnValue(invalidJson);
      
      expect(() => loadConfig(mockFilePath)).toThrow(SyntaxError);
      expect(utils.readFile).toHaveBeenCalledWith(mockFilePath);
    });
  
    test('should throw error when file reading fails', () => {
      const mockFilePath = '/path/to/config.json';
      const error = new Error('File not found');
      
      utils.readFile = jest.fn().mockImplementation(() => {
        throw error;
      });
      
      expect(() => loadConfig(mockFilePath)).toThrow(error);
      expect(utils.readFile).toHaveBeenCalledWith(mockFilePath);
    });
  });