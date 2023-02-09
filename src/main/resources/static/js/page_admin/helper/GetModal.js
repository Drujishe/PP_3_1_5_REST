import {listUsers, ROLES} from "../AdminPage.js";

export function getModal(table, user) {
    fetch('/api/admin/roles')
        .then(response => response.json())
        .then(list => {
            let temp = ' ';
            temp += '  <div tabindex="-1" role="dialog" class="modal fade" aria-hidden="true"' +
                '           id="' + 'editUserModal' + user.id + '">' +
                '      <div class="modal-dialog modal-dialog-centered" role="document">' +
                '          <div class="modal-content">' +
                '              <div class="modal-header">' +
                '                  <h5 class="modal-title" id="exampleModalLongTitle">' + 'Изменить пользователя ' + user.id + '</h5>' +
                '                  <button type="button" class="close" data-dismiss="modal"' +
                '                          aria-label="Close">' +
                '                      <span aria-hidden="true">&times;</span>' +
                '                  </button>' +
                '              </div>' +
                '              <div class="modal-body">' +
                '                  <!-- ИЗММЕНЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ -->\n' +
                '                  <div class="container-fluid">\n' +
                '                      <form role="form"' +
                '                            id="edituserForm' + user.id + '">' +
                '                          <div class="container col-8 text-center">' +
                '                              <div class="form-group">' +
                '                                  <label for="id">id</label>' +
                '                                  <input value="' + user.id + '"' +
                '                                         name="id' + user.id + '"' +
                '                                         type="number" readonly="readonly"\n' +
                '                                         class="form-control" placeholder="id">\n' +
                '                              </div>\n' +
                '                              <div class="form-group">\n' +
                '                                  <label for="surname">Фамилия</label>\n' +
                '                                  <input value="' + user.surname + '"' +
                '                                         name="surname' + user.id + '"' +
                '                                         type="text" class="form-control"\n' +
                '                                         placeholder="фамилия">\n' +
                '                              </div>' +
                '                              <div class="form-group">' +
                '                                  <label for="name">Имя</label>' +
                '                                  <input value="' + user.name + '"' +
                '                                         name="name' + user.id + '"' +
                '                                         type="text" class="form-control"' +
                '                                         placeholder="имя">' +
                '                              </div>' +
                '                              <div class="form-group">' +
                '                                  <label for="age">Возраст</label>' +
                '                                  <input value="' + user.age + '"' +
                '                                         name="age' + user.id + '"' +
                '                                         type="number" class="form-control"\n' +
                '                                         id="age"\n' +
                '                                         placeholder="возраст">\n' +
                '                              </div>\n' +
                '                              <div class="form-group">\n' +
                '                                  <label for="username">Логин</label>\n' +
                '                                  <input value="' + user.username + '"' +
                '                                         name="username' + user.id + '"' +
                '                                         type="text" class="form-control"\n' +
                '                                         id="username"\n' +
                '                                         placeholder="логин">\n' +
                '                              </div>\n' +
                '                              <div class="form-group">\n' +
                '                                  <label for="password">Пароль</label>\n' +
                '                                  <input value="' + user.password + '"' +
                '                                         name="password' + user.id + '"' +
                '                                         type="password" class="form-control"\n' +
                '                                         id="password" placeholder="пароль">\n' +
                '                              </div>\n' +
                '                              <div class="form-group">\n' +
                '                                  <label for="roles">Роли</label>\n' +
                '                                  <select multiple\n' +
                '                                          class="form-control form-control-sm"\n' +
                '                                          id="selector' + user.id + '"' +
                '                                          name="roles' + user.id + '" size="2" required>' +
                '                                  </select>' +
                '                              </div>' +
                '                          </div>' +
                '                          <div class="modal-footer">' +
                '                              <button type="button" class="btn btn-danger"' +
                '                                      data-dismiss="modal">Закрыть' +
                '                              </button>' +
                '                              <button id="submitButton' + user.id + '" data-dismiss="modal" class="btn btn-primary">Изменить</button>' +
                '                          </div>' +
                '                      </form>' +
                '                  </div>' +
                '              </div>' +
                '          </div>' +
                '      </div>' +
                '  </div>' +

                '<!-- ОКНО УДАЛЕНИЯ ПОЛЬЗОВАТЕЛЯ -->\n' +
                '<div tabindex="-1" role="dialog" class="modal fade" aria-hidden="true"\n' +
                '     id="deleteUserModal' + user.id + '">\n' +
                '    <div class="modal-dialog modal-dialog-centered" role="document">\n' +
                '        <div class="modal-content">\n' +
                '            <div class="modal-header">\n' +
                '                <h5 class="modal-title" id="exampleModalLongTitle">Удалить пользователя ' + user.id + '</h5>' +
                '                <button type="button" class="close" data-dismiss="modal"\n' +
                '                        aria-label="Close">\n' +
                '                    <span aria-hidden="true">&times;</span>\n' +
                '                </button>\n' +
                '            </div>\n' +
                '            <div class="modal-body">\n' +
                '                <!-- ДАННЫЕ ПОЛЬЗОВАТЕЛЯ -->\n' +
                '                <div class="container-fluid">\n' +
                '                    <form role="form">' +
                '                        <div class="container col-8 text-center">\n' +
                '                            <div class="form-group">\n' +
                '                                <label for="id">id</label>\n' +
                '                                <input value="' + user.id + '"\n' +
                '                                       name="id' + user.id + '"\n' +
                '                                       type="number" readonly\n' +
                '                                       class="form-control" placeholder="id">\n' +
                '                            </div>\n' +
                '                            <div class="form-group">\n' +
                '                                <label for="surname">Фамилия</label>\n' +
                '                                <input value="' + user.surname + '"\n' +
                '                                       name="surname' + user.id + '"\n' +
                '                                       type="text" class="form-control" readonly\n' +
                '                                       placeholder="фамилия">\n' +
                '                            </div>\n' +
                '                            <div class="form-group">\n' +
                '                                <label for="name">Имя</label>\n' +
                '                                <input value="' + user.name + '"\n' +
                '                                       name="name' + user.id + '"\n' +
                '                                       type="text" class="form-control" readonly\n' +
                '                                       placeholder="имя">\n' +
                '                            </div>\n' +
                '                            <div class="form-group">\n' +
                '                                <label for="age">Возраст</label>\n' +
                '                                <input value="' + user.age + '"' +
                '                                       name="name' + user.id + '"' +
                '                                       type="number" class="form-control" readonly\n' +
                '                                       placeholder="возраст">\n' +
                '                            </div>' +
                '                            <div class="form-group">' +
                '                                <label for="username">Логин</label>' +
                '                                <input value="' + user.username + '"' +
                '                                       name="username' + user.id + '"' +
                '                                       type="text" class="form-control" readonly' +
                '                                       placeholder="логин">' +
                '                            </div>' +
                '                            <div class="form-group">' +
                '                                <label for="password">Пароль</label>' +
                '                                <input value="' + user.password + '"' +
                '                                       type="password" class="form-control" readonly' +
                '                                       id="password" placeholder="пароль"' +
                '                                       name="password' + user.id + '">' +
                '                            </div>' +
                '                            <div class="form-group">\n' +
                '                                <label for="roles">Роли</label>\n' +
                '                                <select multiple\n' +
                '                                        class="form-control form-control-sm" readonly' +
                '                                        id="roles"\n' +
                '                                        name="roles" size="2" required>';
            user.roles.forEach(role => {
                temp += '                                 <option id="' + user.id + '"' +
                    '                                            label="' + role.roleName + '"' +
                    '                                            selected>' +
                    '                                    </option>';
            })
            temp += '                            </select>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        <!--                                КНОПКИ-->\n' +
                '                        <div class="modal-footer">\n' +
                '                            <button type="button" class="btn btn-secondary"\n' +
                '                                    data-dismiss="modal">Закрыть' +
                '                            </button>' +
                '                            <button id="deleteButton' + user.id + '" data-dismiss="modal" class="btn btn-danger"\n>Удалить' +
                '                            </button>' +
                '                        </div>\n' +
                '                    </form>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>\n';
            table.append(temp);

            let options = [];
            list.forEach(role => {
                let option = document.createElement('option');
                option.id = role.roleId;
                option.label = role.roleName;
                user.roles.forEach(uRole => {
                    if (uRole.roleName === role.roleName) {
                        option.selected = true;
                    }
                })
                document.getElementById('selector' + user.id)
                    .appendChild(option);
                options.push(option);
            })


//  ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЯ
            let button = document.getElementById('submitButton' + user.id);
            button.addEventListener('click', () => {
                let id = document.getElementsByName('id' + user.id).item(0).value;
                let surname = document.getElementsByName('surname' + user.id).item(0).value;
                let name = document.getElementsByName('name' + user.id).item(0).value;
                let age = document.getElementsByName('age' + user.id).item(0).value;
                let username = document.getElementsByName('username' + user.id).item(0).value;
                let password = document.getElementsByName('password' + user.id).item(0).value;

                let data = new FormData();
                data.append('id', id);
                data.append('name', name);
                data.append('surname', surname);
                data.append('age', age);
                data.append('username', username);
                data.append('password', password);
                let array = [];

                options.forEach(option => {
                    if (option.selected) {
                        array.push(option.id);
                    }
                })
                data.append('roles', JSON.stringify(array));

                fetch('/api/admin/' + id, {
                    method: 'PUT',
                    body: data
                }).then((response) => response.json())
                    .then(() => {
                        listUsers();
                    })
            })

// УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ
            let deleteButton = document.getElementById('deleteButton' + user.id);
            deleteButton.addEventListener('click', () => {
                fetch("/api/admin/" + user.id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Referer': null
                    }
                }).then(response => {
                    if (response.status===200){
                        listUsers();
                    }
                })
            })
        })
}