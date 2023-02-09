import {getPrincipalInfo, getUser} from "../helper/PrincipalInfo.js";

let selector = $('#roles');
let options = [];

// СВЕДЕНИЯ О ПОЛЬЗОВАТЕЛЕ
let json = getUser();
json.then(user => {
    document.getElementById('info')
        .appendChild(document.createTextNode(getPrincipalInfo(user)));
})

// СОЗДАНИЕ OPTIONS С НАЗВАНИЯМИ РОЛЕЙ
let temp = '';
fetch('/api/admin/roles')
    .then(response => response.json())
    .then(roles => {
        roles.forEach(role => {
            temp = '<option id="' + role.roleId + '"' +
                '           label="' + role.roleName + '"></option>';
            selector.append(temp);
            options.push(document.getElementById(role.roleId));
        })
    })

// ДОБАВЛЕНИЕ ОБРАБОТЧИКА СОБЫТИЙ НА КНОПКУ
document.getElementById('addButton')
    .addEventListener('click', () => {
        let data = new FormData();
        let surname = document.getElementById('surname');
        let name = document.getElementById('name');
        let age = document.getElementById('age');
        let username = document.getElementById('username');
        let password = document.getElementById('password');

        if (surname.value.trim() === '' || name.value.trim() === '' || age.value.trim() === ''
            || username.value.trim() === '' || password.value.trim() === '') {
            alert('Ошибка: пустое поле!');
            return;
        }

        let roles = [];
        options.forEach(option => {
            if (option.selected) {
                roles.push(option.id);
            }
        })

        data.append('surname', surname.value);
        data.append('name', name.value);
        data.append('age', age.value);
        data.append('username', username.value);
        data.append('password', password.value);
        data.append('roles', JSON.stringify(roles));

        fetch('/api/admin/new', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(user => {
                surname.value = '';
                name.value = '';
                age.value = '';
                username.value = '';
                password.value = '';
                alert('Пользователь ' + user.surname + ' ' + user.name + ' (' + user.username + ') успешно создан!');
            });
    })