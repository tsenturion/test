function add(a, b) {
    return a + b;
}

test("my first test", () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
})

test('expect 2 + 2 to be less than or equal to 4', () => {
    expect(2 + 2).toBeLessThanOrEqual(4);
});

test('1.1 + 2.2 should be approximately 3.3', () => {
    expect(1.1 + 2.2).toBeCloseTo(3.3, 1);
});

test('expect "foo" to match /foo/', () => {
    expect('foo').toMatch(/foo/);
});


test('array includes number 1', () => {
    expect([1, 2, 3]).toContain(1);
});


test('expect a function to throw an error', () => {
    expect(() => {
        throw new Error('An error occurred!');
    }).toThrow('An error occurred!');
});

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


const mockCallback = jest.fn();

[1, 2, 3].forEach(mockCallback)

test('mockCallback', () => {
    expect(mockCallback.mock.calls.length).toBe(3);
});


