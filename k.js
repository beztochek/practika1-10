
    // Функция которая наполняет массив
    function fillArray(size, min = 1, max = 100) {
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return arr;
    }

    // Функции которые сортируют числа в массиве (верх, низ)
    function sortAscending(arr) {
        return [...arr].sort((a, b) => a - b);
    }

    function sortDescending(arr) {
        return [...arr].sort((a, b) => b - a);
    }

    // Функция билдер сообщения которая на вход принимает некий объект записи к врачу. На выходе должны получать красиво оформленное сообщение
    function createDoctorMessage(record) {
        return `Запись к врачу:\nПациент: ${record.patient}\nВрач: ${record.doctor}\nДата: ${record.date}\nВремя: ${record.time}`;
    }
console.log(createDoctorMessage(record={
    patient: "Светлана",
    doctor: "хирург",
    date: "29.10.26",
    time:"17:00"
}));
    // Функция инкриптер (получение хэша по строке)
    function encryptString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash).toString(16);
    }

    // Функция которая принимает на вход bool значение авторизации и выдает uuid4 ключ.
    function checkAuthAndGetUuid(isAuthorized) {
        if (!isAuthorized) return "Доступ запрещен";
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Функция записи ключа в куки
    function saveKeyToCookie(key) {
        document.cookie = `user_auth=${key}; max-age=3600; path=/`;
    }

    // Функция фиктивной регистрации которая будет записывать в localStorage данные указанные при регистрации
    function fakeRegister(login, password) {
        const userData = { login, password };
        localStorage.setItem('user_data', JSON.stringify(userData));
    }

    // Функция фиктивной авторизации которая будет проверять значения из localStorage и выдавать uuid4 ключ который пишется в куки
    function fakeLogin(login, password) {
        const savedData = JSON.parse(localStorage.getItem('user_data'));
        if (savedData && login === savedData.login && password === savedData.password) {
            const key = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            document.cookie = `user_auth=${key}; max-age=3600; path=/`;
            return `Авторизация успешна! Ключ: ${key}`;
        } else {
            return "Ошибка: неверный логин или пароль";
        }
    }

    // Функция переворота строки
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Функция вычисления палиндрома из строки
    function isPalindrome(str) {
        const cleanStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    }