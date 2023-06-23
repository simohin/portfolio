import {createModel} from "@rematch/core";
import {RootModel} from "../index";
import {AuthState} from "../../../types/auth";


export const auth = createModel<RootModel>()({
    state: {
        isAuthenticated: false
    } as AuthState,
    reducers: {
        set(state, payload: AuthState) {
            return {...state, ...payload}
        }
    },
    effects: (dispatch) => ({
        setToken(token: string) {
            dispatch.auth.set({isAuthenticated: true, token: token} as AuthState)
        },
        logout() {
            dispatch.auth.set({isAuthenticated: false} as AuthState)
        }
    }),
});
