'use strict';

import { auth, register } from '../services/app';
import { storageTokenKey } from '../utils/constant';
import {stringify} from 'qs';
import {message} from 'antd';


const loginModels = {
    namespace: "app",
    state: {
        isLogin: false,
        account: {
            username: null,
            ability: null,
            user_id: null,
            email: null
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            console.log("setup");
            console.log(dispatch);
            console.log(history);

        },
    },
    effects: {
        /* 登录 */
        // payload 表单元素数据集合
        *auth({payload}, {call, put, select}) {
            console.log("login");
            console.log(payload);
            console.log(call);
            console.log(put);
            console.log(select);

            const {userName, password} = payload;
            try {
                const result = yield call(auth, { userName, password });
                // succeed to login
                if (result) {
                    const {user, access_token} = result;
                    const {token} = access_token;
                    // save the token to the local storage.
                    window.localStorage.setItem(storageTokenKey, token);
                    yield put({
                        type: 'authSuccess',
                        payload: {account: user}
                    });
                    yield put(routerRedux.push('/posts'));
                }
            } catch (error) {
                message.error('Wrong Username or Password.. :(', 4);
            }
        },

        /* 注册 */
        *register({payload}, {call, put, select}) {
            console.log("register");
            console.log(payload);
            console.log(call);
            console.log(put);
            console.log(select);

            const {username, email, password} = payload;
            try {
                const result = yield call(register, { username, email, password });
                if (result) {
                    yield put({
                        type: 'auth',
                        payload: {username, password}
                    });
                }
            } catch (error) {
                message.error('Wrong Username or Password.. :(', 4);
            }
        },
    },
    reducers: {
        authSuccess(state, action) {
            console.log("save");
            console.log(state);
            console.log(action);

            const {account} = action.payload;
            return {
                ...state,
                account,
                isLogin: true

            };
        },
    },

}

export default loginModels;