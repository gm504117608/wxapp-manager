import request from '../utils/request';

export function fetch({values}) {
    console.log(values);
    return request('/api/login?name=' + values.userName + '&password=' + values.password);
}