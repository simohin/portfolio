import {createModel} from "@rematch/core";
import {RootModel} from "../index";
import {Language} from "../../../enum";
import i18n from "../../../localization";

export type LanguageState = {
    current: Language
}

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
            i18n.changeLanguage(newLanguage.toString())
                .then(() => dispatch.language.set({current: newLanguage} as LanguageState))
        },
    }),
});
