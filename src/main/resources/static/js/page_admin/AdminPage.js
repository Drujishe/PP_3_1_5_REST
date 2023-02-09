import {getModal} from "./helper/GetModal.js";
import {getPrincipalInfo, getRoles, getUser} from "../helper/PrincipalInfo.js";

export const ROLES = [];
getAllUsers();
init();

function init() {
    let json = getUser();
    json.then(user => {
        document.getElementById('info')
            .appendChild(document.createTextNode(getPrincipalInfo(user)));
    })
}

export function listUsers() {
    getAllUsers();
}

function getAllUsers() {
    fetch('/api/admin/list')
        .then(response => response.json())
        .then(data => {
            let blocks = ' ';
            let modals = $('#modals');
            modals.empty();
            let back = document.getElementsByClassName('modal-backdrop fade show').item(0);
            if(back!==null){
                back.parentNode.removeChild(back);
            }

            data.forEach(user => {
                blocks += '<tr>';
                blocks += '<td>' + user.id + '</td>';
                blocks += '<td>' + user.surname + '</td>';
                blocks += '<td>' + user.name + '</td>';
                blocks += '<td>' + user.age + '</td>';
                blocks += '<td>' + user.username + '</td>';

                let roles = getRoles(user);
                blocks += '<td>' + roles + '</td>';
                blocks += '<td>\n' +
                    '          <button type="button" class="btn btn-info" data-toggle="modal"' +
                    '                  data-target="' + '#editUserModal' + user.id + '">Изменить' +
                    '          </button>' +
                    '      </td>' +
                    '      <td>' +
                    '          <button type="button" class="btn btn-danger" data-toggle="modal"' +
                    '                  data-target="' + '#deleteUserModal' + user.id + '">Удалить' +
                    '          </button>' +
                    '      </td>';
                blocks += '</tr>';
                getModal(modals, user);
            })

            let table = $('#userTable');
            table.empty();
            table.append(blocks);
        });
}