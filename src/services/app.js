'use strict';

import request from '../utils/request';

export function auth(values) {
    console.log("services auth");
    console.log(values);

    return request('/api/login', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: stringify({
            ...values,
            grant_type: 'password'
        })
    });
}

export function register(values) {
    console.log("services register");
    console.log(values);

    return request('/api/register', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf-8"
        }),
        body: JSON.stringify({
            ...values
        })
    });
}