// Условие задания
// Функция чтения данных из файла
// Напишите функцию readFileContent(path), которая принимает путь к файлу в качестве аргумента и возвращает содержимое файла
//  в виде строки.
// Используйте синхронный метод fs.readFileSync из стандартного модуля Node.js fs.
// Требования:
// Если файл существует, функция должна вернуть его содержимое как строку.
// Если файл не найден, выбрасывайте ошибку с сообщением: "Файл не найден".
// Если содержимое файла не является валидным JSON, выбрасывайте ошибку с сообщением: "Некорректный формат данных".
// Функция записи данных в файл
// Напишите функцию writeFileContent(path, content), которая принимает путь к файлу и данные, которые нужно записать в файл.
// Используйте синхронный метод fs.writeFileSync из стандартного модуля Node.js fs.
// Требования:
// Функция должна записывать данные в файл по указанному пути.
// Если при записи происходит ошибка (например, отсутствуют права на запись), выбрасывайте ошибку с сообщением: "Ошибка записи
//  в файл".
// Если данные в файле должны быть в формате JSON, сериализуйте их в строку с помощью JSON.stringify().
// Тестирование
// Напишите тесты для каждой из функций с использованием Jest.
// Тесты для функции readFileContent:
// Тест на успешное чтение содержимого файла. Мокируйте метод fs.readFileSync и проверьте, что функция возвращает 
// правильное содержимое.
// Тест на ошибку при отсутствии файла (например, ошибка с кодом ENOENT). Проверьте, что выбрасывается ошибка с правильным 
// сообщением.
// Тест на некорректный формат данных (например, некорректный JSON). Убедитесь, что выбрасывается ошибка с правильным 
// сообщением.
// Тесты для функции writeFileContent:
// Тест на успешную запись данных в файл. Мокируйте метод fs.writeFileSync и проверьте, что функция корректно записывает 
// данные в файл.
// Тест на ошибку записи (например, отсутствие прав). Проверьте, что выбрасывается ошибка с правильным сообщением.
// Тест на запись данных в формате JSON. Убедитесь, что данные корректно сериализуются и записываются в файл.
// Дополнительные условия
// Мокирование: Для тестов используйте мокирование функций fs.readFileSync и fs.writeFileSync с помощью Jest.
// Асинхронность: Все операции должны быть синхронными. Если вы хотите сделать задание более сложным, перепишите функции 
// и тесты, чтобы они использовали асинхронные методы (fs.promises.readFile и fs.promises.writeFile).
// Ошибки: Убедитесь, что ошибки правильно обрабатываются и выбрасываются с нужными сообщениями.
// Формат данных: При записи в файл, если данные должны быть в формате JSON, используйте метод JSON.stringify().
// Рекомендации по выполнению задания:
// Мокирование файловой системы: Для того чтобы не работать с реальными файлами в тестах, используйте возможности Jest для мокирования методов файловой системы. Это позволит вам тестировать логику без зависимости от реальной файловой системы.
// Тестирование ошибок: Особое внимание уделите тестированию обработки ошибок, так как работа с файлами может привести к различным исключениям (например, отсутствие прав или отсутствие файла).
// Покрытие тестами: Напишите тесты для каждого важного случая (успешный сценарий, ошибки, некорректные данные).

const fs = require('fs');

function readFileContent(path) {
    try {
        const content = fs.readFileSync(path, 'utf-8');
        try {
            JSON.parse(content);
        } catch (e) {
            throw new Error('Некорректный формат данных');
        }
        return content;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('Файл не найден');
        } else {
            throw error;
        }
    }
}

function writeFileContent(path, content) {
    try {
        if (typeof content === 'object') {
            content = JSON.stringify(content);
        }
        fs.writeFileSync(path, content, 'utf-8');
    } catch (error) {
        throw new Error('Ошибка записи в файл');
    }
}

//тесты 

jest.mock('fs');

// для readFileContent
test('читает содержимое файла', () => {
    fs.readFileSync.mockResolvedValue('{"name": "John Doe"}');
    expect(readFileContent('test.json')).toBe('{"name": "John Doe"}');
});

test('выбрасывает ошибку при отсутствии файла', () => {
    fs.readFileSync.mockImplementation(() => {
        throw { code: "ENOENT"};
    });

    expect(() => readFileContent('nonexistent.json')).toThrow('Файл не найден');
});

test('выбрасывает ошибку при некорректном формате данных (невалидный json)', () => {
    fs.readFileSync.mockResolvedValue('invalid json');
    expect(() => readFileContent('invalid.json')).toThrow('Некорректный формат данных');
});

//для writeFileContent

test('записывает текстовое содержимое в файл', () => {
    const mockWrite = fs.writeFileSync.mockImplementation(() => {});

    writeFileContent('test.txt', 'Hello, World!');
    expect(mockWrite).toBeCalledWith('test.txt', 'Hello, World!', 'utf-8');
});


test('выбрасывает ошибку при отсутствии прав на запись', () => {
    fs.writeFileSync.mockImplementation(() => {
        throw { code: "Permission denied"};
    });
    expect(() => writeFileContent('test.json', '{"name": "John Doe"}')).toThrow('Ошибка записи в файл');
});

test('записывает json в файл', () => {
    const data = { name: 'John Doe' };
    const jsonData = JSON.stringify(data, null, 2);
    const mockWrite = fs.writeFileSync.mockImplementation(() => {});
    writeFileContent('test.json', data);
    expect(mockWrite).toBeCalledWith('test.json', jsonData, 'utf-8');
});

const fs = require("fs").promises;

async function readFileContent(path) {
    try {
        const content = await fs.readFile(path, 'utf-8');
        try {
            JSON.parse(content);
        } catch (e) {
            throw new Error('Некорректный формат данных');
        }
        return content;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('Файл не найден');
        } else {
            throw error;
        }
    }
}

async function writeFileContent(path, content) {
    try {
        if (typeof content === 'object') {
            content = JSON.stringify(content, null, 2);
        }
        await fs.writeFile(path, content, 'utf-8');
    } catch (error) {
        throw new Error('Ошибка записи в файл');
    }
}

//тесты

jest.mock("fs").promises;

// для readFileContent

test('асинхронно читает содержимое файла', async () => {
    fs.readFile.mockResolvedValue('{"name": "John Doe"}');
    expect(await readFileContent('test.json')).toBe('{"name": "John Doe"}');
});

// для writeFileContent

test('асинхронно записывает текстовое содержимое в файл', async () => {
    const mockWrite = fs.writeFile.mockResolvedValue();

    await writeFileContent('test.txt', 'Hello, World!');
    expect(mockWrite).toHaveBeenCalledWith('test.txt', 'Hello, World!', 'utf-8');
});