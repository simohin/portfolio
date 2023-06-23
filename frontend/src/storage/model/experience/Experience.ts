import {ExperienceItem, ExperienceState} from "../../../types/experience";
import {RootModel} from "../index";
import {createModel} from "@rematch/core";

export const experience = createModel<RootModel>()({
    state: {
        items: []
    } as ExperienceState,
    reducers: {
        set(state, payload: ExperienceState) {
            return {...state, ...payload}
        }
    },
    effects: (dispatch) => ({
        putAll(items: ExperienceItem[]) {
            dispatch.experience.set({
                items: experience.state.items.concat(items)
            })
        },
        put(item: ExperienceItem) {
            this.putAll([item])
        }
    }),
});
