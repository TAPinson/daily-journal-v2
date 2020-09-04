// Render list of all entries
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"

const eventHub = document.querySelector("main")
const entryLog = document.querySelector(".history")

// Listen for the Food Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const entrySelected = event.target.classList.value
    // Only continue if the clicked element was a previous entry from the list
    if (entrySelected === "historical-entry") {
        console.log(event)
        const viewEvent = new CustomEvent("historicalEntrySelected", {
            detail: {
                activity: entrySelected
            }
        })
        eventHub.dispatchEvent(viewEvent)
    }
})


export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        for (const entry of entries) {
            entryLog.innerHTML += `
            <div class="historical-entry">
                ${entry.date}
                <p></p>
                ${entry.concept}
            </div>
            `
        }

    })
}