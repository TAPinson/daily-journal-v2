// Render list of all entries
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"

const eventHub = document.querySelector("main")
const entryLog = document.querySelector(".historyScroll")

// Listen for the Food Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const entrySelected = event.target.classList.value
    // Only continue if the clicked element was a previous entry from the list
    if (entrySelected === "historical-entry") {
        const IDOfSelected = event.target.id
        const viewEvent = new CustomEvent("historicalEntrySelected", {
            detail: {
                activity: entrySelected,
                selected: IDOfSelected
            }
        })
        eventHub.dispatchEvent(viewEvent)
    }
})


// Listen for a new entry being saved and render the list of entries again so it has the most current data
eventHub.addEventListener("entryStateChanged", event => {
    EntryListComponent()
})


// Render the list of historical entries
export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        const allEntriesBackwards = useJournalEntries()
        // Reverse the entries in the array to display the newest entries at the top of the list
        const allEntries = allEntriesBackwards.reverse()
        const entries = allEntries.map((entry)=> {
            return `
            <div class="historical-entry" id="${entry.id}">
                ${entry.date}
                <p></p>
                ${entry.concept}
            </div>
            `
        })
        entryLog.innerHTML = ""
        entryLog.innerHTML += entries.join("")
    })
}

// Render the list of historical entries for selected Mood
export const EntryListComponentByMood = (entries) => {
    const renderEntries = entries.map((entry)=> {
        return `
            <div class="historical-entry" id="${entry.id}">
                ${entry.date}
                <p></p>
                ${entry.concept}
            </div>
            `
        })
        entryLog.innerHTML = ""
        entryLog.innerHTML += renderEntries.join("")

}