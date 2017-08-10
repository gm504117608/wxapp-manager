import request from '../utils/request';

/*
登录
*/
export function getAllMenus(values) {
    console.log("services getAllMenus", values);

    return request('/api/menu', {
        method: 'get',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf-8"
        }),
        body: JSON.stringify({
            ...values
        })
    });
}
