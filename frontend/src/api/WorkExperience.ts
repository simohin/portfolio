import {store} from "../storage/model";
import i18n from "i18next";

export const loadWorkExperience = async () => {

    const t = i18n.t

    const items = ['qiwi', 'premium', 'luxoft'].map((item: string) => {
        return {
            key: item,
            title: t(`experience.content.places.${item}.title`),
            dateStart: t(`experience.content.places.${item}.dateStart`),
            dateEnd: t(`experience.content.places.${item}.dateEnd`),
            position: t(`experience.content.places.${item}.role`),
            description: t(`experience.content.places.${item}.description`)
        }
    })
    store.dispatch.experience.putAll(items)
}
