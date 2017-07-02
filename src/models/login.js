import * as loginServices from '../services/login';

const loginModels = {
    namespace: "loginModels",
    state: {},
    subscriptions: {
        setup({dispatch, history}) {
            console.log(dispatch);
            console.log(history);

        },
    },
    effects: {
        *fetch({payload}, {call, put, select}) {
            console.log(payload);
            console.log(call);
            console.log(call);
            console.log(select);

            // yield call ({loginServices.fetch, payload});
            yield put({
                type: 'save'
            });
        },
    },
    reducers: {
        save(state, action) {
            console.log(state);
            console.log(action);
            return {
                ...state, ...action.payload
            };
        },
    },

}

export default loginModels;