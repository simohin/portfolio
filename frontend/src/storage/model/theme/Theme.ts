import {Theme} from "../../../enum";
import {createModel} from "@rematch/core";
import {RootModel} from "../index";
import {ThemeState} from "../../../types/theme";

export const theme = createModel<RootModel>()({
    state: {
        current: Theme.LIGHT
    } as ThemeState,
    reducers: {
        set(state, payload: ThemeState) {
            return {...state, ...payload}
        }
    },
    effects: (dispatch) => ({
        setTheme(theme: Theme) {
            dispatch.theme.set({current: theme} as ThemeState)
        },
    }),
});
