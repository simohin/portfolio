import {init, Models, RematchDispatch, RematchRootState} from "@rematch/core";
import {language} from "./language/Language";
import {theme} from "./theme/Theme";

export interface RootModel extends Models<RootModel> {
    language: typeof language
    theme: typeof theme
}

export const models: RootModel = {
    language: language,
    theme: theme
}

export const store = init({
    models
})

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
