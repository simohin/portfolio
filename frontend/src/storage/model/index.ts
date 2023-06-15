import {init, Models, RematchDispatch, RematchRootState} from "@rematch/core";
import {language} from "./language/Language";
import {theme} from "./theme/Theme";
import {auth} from "./auth/Auth";
import {ExtraModelsFromLoading} from '@rematch/loading'
import storage from 'redux-persist/lib/storage';
import persistPlugin from "@rematch/persist";

export interface RootModel extends Models<RootModel> {
    language: typeof language
    theme: typeof theme,
    auth: typeof auth
}

export const models: RootModel = {
    language: language,
    theme: theme,
    auth: auth
}

export const store = init<RootModel, ExtraModelsFromLoading<RootModel>>({
    models,
    plugins: [persistPlugin({
        key: 'root',
        storage
    })]
})

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
