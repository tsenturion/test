//jest
//mocha
//chai

//npm install --save-dev jest
//yarn add --dev jest

function add(a, b) {
    return a + b;
}



//jest 
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