import { MoodFilter } from "./MoodFilter.js"
import { getMoods, useMoods } from '../JournalDataProvider.js'

const contentTarget = document.querySelector(".filters")

export const FilterBar = () => {
    getMoods()
    .then(() => {
        const allMoods = useMoods()
        render(allMoods)
    })
}

const render = (moods) => {
    contentTarget.innerHTML = `
        ${MoodFilter(moods)}
    `
}