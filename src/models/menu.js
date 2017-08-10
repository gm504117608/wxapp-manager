import { getAllMenus } from '../services/menu';
import { stringify } from 'qs';
import { message } from 'antd';


const menuModels = {
    namespace: "menu",
    state: {
        menu: []
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
        *getAllMenus({payload}, {call, put, select}) {
            console.log("login");
            console.log(payload);
            console.log(call);
            console.log(put);
            console.log(select);

            try {
                const result = yield call(getAllMenus, {});
                console.log(result);
                // succeed to login
                if (result) {
                    const { code, data } = result;
                    yield put({
                        type: 'authSuccess',
                        payload: {menu: data}
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

            const { menu } = action.payload;
            return {
                menu
            };
        },
    },
}

export default menuModels;