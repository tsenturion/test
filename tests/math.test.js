describe('функция умножения', () => {
    it('должна умножать два числа', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    it('должна возвращать NaN при попытке умножить ненумерические значения', () => {
        expect(multiply('a', 3)).toBeNaN();
    });
    it('должна возвращать Infinity при умножении числа на 0', () => {
        expect(multiply(5, 0)).toBe(Infinity);
    });
    it('должна корректно обрабатывать отрицательные числа', () => {
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(-2, -3)).toBe(6);
    });
    it('должна корректно обрабатывать дробные числа', () => {
        expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
    it('должна возвращать 0 при умножении на 0', () => {
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(5, 0)).toBe(0);
    });
    it('должна корректно обрабатывать большие числа', () => {
        expect(multiply(1e10, 2)).toBe(2e10);
    });
    it('должна возвращать NaN при умножении на NaN', () => {
        expect(multiply(NaN, 5)).toBeNaN();
        expect(multiply(5, NaN)).toBeNaN();
    });
});
