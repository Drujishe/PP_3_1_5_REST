const url_user_show = '/api/user/show';

export function getPrincipalInfo(user) {
    return 'Пользователь ' + user.username + ' в роли ' + getRoles(user);
}

export function getRoles(user) {
    let roles = '';
    user.roles.forEach(role => {
        roles += role.roleName + ' ,';
    })
    return roles.slice(0, roles.length - 2);
}

export function getUser() {
    return fetch(url_user_show).then(response => response.json());
}