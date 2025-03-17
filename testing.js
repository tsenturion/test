//jest
//mocha
//chai

//npm install --save-dev jest
//yarn add --dev jest

function add(a, b) {
    return a + b;
}

test("проверяем функцию add", () => {
    expect(add(1, 2)).toBe(3);
});
