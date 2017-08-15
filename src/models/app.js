import { auth, register } from '../services/user';
import { storageTokenKey } from '../utils/constant';
import { stringify } from 'qs';
import { message } from 'antd';
import {routerRedux} from 'dva/router';


const loginModels = {
    namespace: "app",
    state: {
        isLogin: false,
        account: {
            userName: null,
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
            console.log("payload", payload);
            console.log("call", call);
            console.log("put", put);
            console.log("select", select);

            const {mobile, password} = payload;
            try {
                const result = yield call(auth, { mobile, password });
                console.log(result);
                // succeed to login
                if (result) {
                    const {code, data} = result;
                    const {manager, token} = data;
                    // save the token to the local storage.
                    window.localStorage.setItem(storageTokenKey, token);
                    yield put({
                        type: 'authSuccess',
                        payload: {account: manager}
                    });
                    dispatch(routerRedux.push('/dashboard'));
                }
            } catch (error) {
                console.log(error);
                message.error('Wrong Mobile or Password...', 4);
            }
        },

        /* 注册 */
        *register({payload}, {call, put, select}) {
            console.log("register");
            console.log(payload);
            console.log(call);
            console.log(put);
            console.log(select);

            const {userName, email, password} = payload;
            try {
                const result = yield call(register, { userName, email, password });
                if (result) {
                    yield put({
                        type: 'auth',
                        payload: {userName, password}
                    });
                }
            } catch (error) {
                message.error('Wrong userName or Password.. :(', 4);
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