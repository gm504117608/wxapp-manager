import request from '../utils/request';

export function fetch({values}) {
    console.log("services fetch");

    console.log(values);
    return {"code":"001", "message":"成功了", "data":"66666"};
    // return request('/api/login?name=' + values.userName + '&password=' + values.password);
}