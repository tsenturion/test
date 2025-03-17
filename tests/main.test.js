import { add } from '../math'
import { doAdd } from '../math'

jest.mock('./math')

test('doAdd вызывает add с правильными аргументами', () => {
    add.mockImplementation(() => 42);
    const result = adAdd(2, 3);
    expect(add).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(42);
});