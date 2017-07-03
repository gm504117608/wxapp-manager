import { fetch } from '../services/login';

const loginModels = {
    namespace: "api",
    state: {},
    subscriptions: {
        setup({dispatch, history}) {
            console.log("setup");
            console.log(dispatch);
            console.log(history);

        },
    },
    effects: {
        // payload 表单元素数据集合
        *login({payload}, {call, put, select}) {
            console.log("login");
            console.log(payload);
            console.log(call);
            console.log(put);
            console.log(select);

            yield call (fetch, payload);
            yield put({
                type: 'save', payload: payload
            });
        },
    },
    reducers: {
        save(state, action) {
            console.log("save");
            console.log(state);
            console.log(action);

            return {
                ...state, ...action.payload
            };
        },
    },

}

export default loginModels;