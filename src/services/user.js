import request from '../utils/request';
import { STORAGE_TOKEN_KEY } from '../utils/constant';

/*
 * 登录
 */
export function login(values) {
    console.log("services login", values);

    return request('/api/login?mobile=' + values.mobile + '&password=' + values.password);
}

/*
 * 注册
 */
export function register(values) {
    console.log("services register", values);

    return request('/api/manager/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            ...values
        })
    });
}

/*
获取用户信息
*/
export function fetchUser() {
    const token = window.localStorage.getItem(STORAGE_TOKEN_KEY);
    return request('/api/manager', {
        method: 'GET',
        headers: {
            "token": `${token}`
        }
    });
}

/*
获取用户详细信息
*/
export function fetchUserDetail({user_id}) {
    const token = window.localStorage.getItem(STORAGE_TOKEN_KEY);
    return request(`/api/manager/${user_id}`, {
        method: 'GET',
        headers: {
            "token": `${token}`
        }
    });
}

/*
获取用户详细信息
*/
export function updateUser(values) {
    const token = window.localStorage.getItem(STORAGE_TOKEN_KEY);
    return request('/api/manager/update', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "token": `${token}`
        },
        body: JSON.stringify({
            ...values
        })
    });
}