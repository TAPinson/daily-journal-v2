import { MoodFilter } from "./MoodFilter.js"
import { getMoods, useMoods } from '../JournalDataProvider.js'
import { getEntries, useJournalEntries } from '../JournalDataProvider.js'
import { EntryListComponent, EntryListComponentByMood } from '../JournalEntryList.js'

const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector("main")

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



eventHub.addEventListener("change", event => {
    if (event.target.name === "moodFilter") {
        const chosenMoodId = parseInt(event.target.value)
        getEntries()
        .then(() => {
            const entries = useJournalEntries()
            const moodEntries = entries.filter((entry) => {
                return entry.moodId ===chosenMoodId
            })

            EntryListComponentByMood(moodEntries)


        })


 
 
            

            
            


    }
})