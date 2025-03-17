//ручное, просто вызываем

capitalaize(text)

//автоматические 

if (capitalaize('hello') !== 'Hello') {
    throw new Error('Test failed');
}

if (capitalaize("") !== '') {
    throw new Error('Test failed');
}

// кол-во тестов:
// основной сценарий
// пограничный случай
// ошибочный сценарий

