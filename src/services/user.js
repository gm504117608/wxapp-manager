import request from '../utils/request';
import { storageTokenKey } from '../utils/constant';

/*
登录
*/
export function auth(values) {
    console.log("services auth");
    console.log(values);

    return request('/api/login?mobile=' + values.mobile + '&password=' + values.password);
}

/*
注册
*/
export function register(values) {
    console.log("services register");
    console.log(values);

    return request('/api/manager/register', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf-8"
        }),
        body: JSON.stringify({
            ...values
        })
    });
}

/*
获取用户信息
*/
export function fetcUser() {
    const token = window.localStorage.getItem(storageTokenKey);
    return request('/api/manager', {
        method: 'get',
        headers: new Headers({
            "Authorization": `${token}`
        })
    });
}

/*
获取用户详细信息
*/
export function fetchUserDetail({user_id}) {
    const token = window.localStorage.getItem(storageTokenKey);
    return request(`/api/manager/${user_id}`, {
        method: 'get',
        headers: new Headers({
            "Authorization": `${token}`
        })
    });
}

/*
获取用户详细信息
*/
export function updateUser(values) {
    const token = window.localStorage.getItem(storageTokenKey);
    return request('/api/manager/update', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `${token}`
        }),
        body: JSON.stringify({
            ...values
        })
    });
}