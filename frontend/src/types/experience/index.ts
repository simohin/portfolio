export type ExperienceItemContent = {
    title: string
    dateStart: string
    dateEnd: string,
}

export type ExperienceItemOppositeContent = {
    position: string
    description?: string
}

export type ExperienceItem = {
    key: string,
    title: string,
    dateStart: string,
    dateEnd: string,
    position: string
    description?: string
}

export type ExperienceState = {
    items: ExperienceItem[]
}
