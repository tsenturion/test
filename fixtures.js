function getUserFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

test('возвращает полное имя пользователя', () => {
    const user = { firstName: 'John', lastName: 'Doe' }; //фикстура
    expect(getUserFullName(user)).toBe('John Doe');
});

const userFixture = { firstName: 'John', lastName: 'Doe' };

test('возвращает полное имя пользователя с использованием фикстуры', () => {
    expect(getUserFullName(userFixture)).toBe('John Doe');
});

//beforeEach - создаем фикстуру перед каждым тестом

let user;

beforeEach(() => {
    user = { firstName: 'John', lastName: 'Doe' }; 
});

test('возвращает полное имя пользователя с использованием beforeEach', () => {
    expect(getUserFullName(user)).toBe('John Doe');
});

test('возвращает имя пользователя', () => {
    expect(user.firstName).toBe('John');
});

test('возвращает фамилию пользователя', () => {
    expect(user.lastName).toBe('Doe');
});

// beforeAll - один раз для всех тестов

let users;

beforeAll(() => {
    users = [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Smith' }];
});

test('возвращает полное имя первого пользователя', () => {
    expect(getUserFullName(users[0])).toBe('John Doe');
});

test('возвращает полное имя второго пользователя', () => {
    expect(getUserFullName(users[1])).toBe('Jane Smith');
});

// afterEach() - очищает данные после каждого теста

afterEach(() => {
    user = null;
});

test('после каждого теста фикстура user не должна быть null', () => {
    expect(user).not.toBeNull();
});

// afterAll() - очищает данные один раз после всех тестов

afterAll(() => {
    users = null;
});

test('после всех тестов фикстура users не должна быть null', () => {
    expect(users).not.toBeNull();
});


const { validUser, anotherUser } = require('.userFixture');

test('возвращает имя пользователя', () => {
    expect(getUserFullName(validUser)).toBe("Иван Петров");
});

test('возвращает имя пользователя', () => {
    expect(getUserFullName(anotherUser)).toBe("Анна Петрова");
});

//async/await

//beforeEach(async () => {
    //user = await fetchUserFromDB();
//});

test('возвращает полное имя пользователя', async () => {
    const user = await getUserPromise(1);
    expect(getUserFullName(user)).toBe('John Doe');
});

function createUser(firstName, lastName) {
    return { firstName, lastName };
}

test('создает нового пользователя', () => {
    const user = createUser('John', 'Doe');
    expect(user).toEqual({ firstName: 'John', lastName: 'Doe' });
});

