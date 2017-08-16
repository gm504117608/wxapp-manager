import { login, register } from '../services/user';
import { STORAGE_TOKEN_KEY, IS_LOGIN_FLAG, MSG_DURATION } from '../utils/constant';
import { stringify } from 'qs';
import { message } from 'antd';
import { routerRedux } from 'dva/router';

const loginModels = {
    namespace: "app",
    
    state: {
        account: {}
    },

    /* subscriptions 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。
     * 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、
     * geolocation 变化、history 路由变化等等。格式为 ({ dispatch, history }) => unsubscribe
     */
    subscriptions: {
        setup({dispatch, history}) {
            // console.log("setup");
            // console.log(dispatch);
            // console.log(history);
        },
    },

    effects: {
        /* 登录 payload 表单元素数据集合 
         */
        *login({payload}, {call, put, select}) {
            console.log("login ：payload ", payload);

            const { mobile, password } = payload;
            try {
                const result = yield call(login, { mobile, password });
                console.log(result);
                // succeed to login
                if (result) {
                    // save the token to the local storage.
                    window.localStorage.setItem(STORAGE_TOKEN_KEY, result);
                    window.localStorage.setItem(IS_LOGIN_FLAG, true);
                    yield put(routerRedux.push('/dashboard'));
                }
            } catch (error) {
                console.log(error);
                message.error(error.err, MSG_DURATION);
            }
        },

        /* 
         * 注册 
         */
        *register({payload}, {call, put, select}) {
            console.log("register payload ", payload);

            const {mobile, password, confirmPassword, messageAuthCode} = payload;
            try {
                const result = yield call(register, payload);
                if (result) {
                    // save the token to the local storage.
                    window.localStorage.setItem(STORAGE_TOKEN_KEY, result);
                    window.localStorage.setItem(IS_LOGIN_FLAG, true);
                    yield put(routerRedux.push('/dashboard'));
                }
            } catch (error) {
                console.log(error);
                message.error(error.err, MSG_DURATION);
            }
        },
    },

    reducers: {
        authSuccess(state, action) {
            console.log("authSuccess:", state, action);

            const {account} = action.payload;
            return {
                ...state,
                account
            };
        },
    },

}

export default loginModels;