//чтение
const fs = require("fs");

function readFileContent(path) {
    return fs.readFileSync(path, 'utf-8');
}

jest.mock("fs");

test("читает файл и возвращет содержимое", () => {
    fs.readFileSync.mockReturnValueOnce("Hello, World!");
    const result = readFileContent("test.txt");
    expect(result).toBe("Hello, World!");
});

test("вызывает ошибку, если файл не найден", () => {
    fs.readFileSync.mockImplementationOnce(() => {
        throw new Error("File not found");
    });
    expect(() => readFileContent("nonexistent.txt")).toThrow("File not found");
});

function readJsonFile(path) {
    const content = fs.readFileSync(path, 'utf-8');
    return JSON.parse(content);
}

test("читает и парсит JSON-файл", () => {
    fs.readFileSync.mockReturnValue('{"name": "John Doe"}');
    const result = readJsonFile("user.json");
    expect(result).toEqual({ name: "John Doe" });
});

test("вызывает ошибку при некорректном json", () => {
    fs.readFileSync.mockReturnValue('{invalid JSON}');
    expect(() => readJsonFile("invalid.json")).toThrow();
});

const fs = require("fs").promises;

async function readFileAsync(path) {
    return await fs.readFile(path, 'utf-8');
}

test("Асинхронно читает файл", async () => {
    fs.readFile.mockResolvedValue("Async content");
    const result = await readFileAsync("test.txt");
    expect(result).toBe("Async content");
});

test("Асинхронно выбрасывает ошибку при отсутствии файла", async () => {
    fs.readFile.mockRejectedValue(new Error("File not found"));
    await expect(readFileAsync("nonexistent.txt")).rejects.toThrow("File not found");
});

//запись
function writeFileContent(path, content) {
    fs.writeFileSync(path, content, 'utf-8');
}

test("записывает содержимое в файл", () => {
    const mockWrite = fs.writeFileSync.mockImplementation(() => {});
    writeFileContent("test.txt", "Hello, World!");
    expect(mockWrite).toHaveBeenCalledWith("test.txt", "Hello, World!", 'utf-8');
});

//ошибка прав

function writeFileContent(path, content) {
    try {
        fs.writeFileSync(path, content, 'utf-8');
    } catch (error) {
        throw new Error("Не удалось записать в файл");
    }
}

test("выбрасывает ошибку при отсутствии прав на запись в файл", () => {
    fs.writeFileSync.mockImplementation(() => {
        throw new Error("Нет прав на запись в файл");
    });
    expect(() => writeFileContent("test.txt", "Hello, World!")).toThrow("Не удалось записать в файл");
});

test("должна выбрасывать ошибку если нет места на диске", () => {
    fs.writeFileSync.mockImplementation(() => {
        throw new Error("Недостаточно места на диске");
    });
    expect(() => writeFileContent("test.txt", "Hello, World!")).toThrow("Недостаточно места на диске");
});

function writeJsonToFile(path, data) {
    const jsonContent = JSON.stringify(data, null, 2);
    writeFileContent(path, jsonContent, 'utf-8');
}

test("записывает JSON в файл", () => {
    const data = { name: "alice", age: 24};
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFileSync.mockImplementation(() => {});
    writeJsonToFile("user.json", data);
    expect(fs.writeFileSync).toHaveBeenCalledWith("user.json", jsonData, 'utf-8');
});

async function writeFileAsync(path, content) {
    await fs.writeFile(path, content, 'utf-8');
}

test("Асинхронно записывает содержимое в файл", async () => {
    fs.writeFile.mockResolvedValue();
    await writeFileAsync("test.txt", "Async content");
    expect(fs.writeFile).toHaveBeenCalledWith("test.txt", "Async content", 'utf-8');
});