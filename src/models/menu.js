import { getAllMenus } from '../services/menu';
import { STORAGE_TOKEN_KEY, IS_LOGIN_FLAG, MSG_DURATION } from '../utils/constant';
import { stringify } from 'qs';
import { message } from 'antd';

const menuModels = {
    namespace: "menu",
    state: {
        list: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
            // 当url进去到菜单页面时候 获取菜单列表数据
            history.listen(({ pathname, query }) => {
                if (pathname === '/menu') {
                    dispatch({
                        type: 'getAllMenus',
                        payload: query
                    });
                }
            });
        },
    },

    effects: {
        // 获取菜单数据
        *getAllMenus({payload}, {call, put, select}) {
            try {
                const result = yield call(getAllMenus, {payload});
                if (result) {
                    yield put({
                        type: 'getAllMenusSuccess',
                        payload: result
                    });
                }
            } catch (error) {
                console.log(error);
                message.error(error.err, MSG_DURATION);
            }
        },
    },

    reducers: {
        getAllMenusSuccess(state, { payload: list }) {
            console.log("getAllMenusSuccess = ", state, list);
            return list;
        },
    },
}

export default menuModels;