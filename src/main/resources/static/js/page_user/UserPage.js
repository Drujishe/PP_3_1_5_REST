import {getUser, getPrincipalInfo, getRoles} from "../helper/PrincipalInfo.js";

let info = document.getElementById('info');
let id = document.getElementById('id');
let surname = document.getElementById('surname');
let name = document.getElementById('name');
let age = document.getElementById('age');
let username = document.getElementById('username');
let roles = document.getElementById('roles');

let jsonUser = getUser();
jsonUser.then(user => {
    info.appendChild(document.createTextNode(getPrincipalInfo(user)));
    id.appendChild(document.createTextNode(user.id));
    surname.appendChild(document.createTextNode(user.surname));
    name.appendChild(document.createTextNode(user.name));
    age.appendChild(document.createTextNode(user.age));
    username.appendChild(document.createTextNode(user.username));
    roles.appendChild(document.createTextNode(getRoles(user)));
})