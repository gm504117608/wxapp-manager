import request from '../utils/request';

/*
登录
*/
export function getAllMenus(values) {
    console.log("services getAllMenus", values);

    return request('/api/menu/list');
}
