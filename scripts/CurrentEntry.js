import { getEntries, useJournalEntries } from './JournalDataProvider.js'


const contentTarget = document.querySelector(".viewer__highlight")
const eventHub = document.querySelector("main")

eventHub.addEventListener("historicalEntrySelected", customEvent => {
    const IDOfSelected = customEvent.detail.selected
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        const entryFinder = entries.filter(entry => entry.id == IDOfSelected)
        const matchingEntry = entryFinder[0]
        JournalWriter(matchingEntry)
    })
})


export const JournalWriter = (entry) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
        <div class="viewer__date">Date Posted: ${entry.date}</div>
        <div class="viewer__concepts">Concepts Covered: ${entry.concept}</div>
        <div class="viewer__journal">${entry.entry}</div>
    `
}