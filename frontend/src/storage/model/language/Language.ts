import {createModel} from "@rematch/core";
import {RootModel} from "../index";
import {Language} from "../../../enum";
import {LanguageState} from "../../../types/language";

export const language = createModel<RootModel>()({
    state: {
        current: Language.EN
    } as LanguageState,
    reducers: {
        set(state, payload: LanguageState) {
            return {...state, ...payload}
        }
    },
    effects: (dispatch) => ({
        setLanguage(newLanguage: Language) {
            dispatch.language.set({current: newLanguage} as LanguageState)
        },
    }),
});
