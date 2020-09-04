// Render list of all entries
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".history")

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


// Test Zone //


const eventHub = document.querySelector("main")



// Listen for the Food Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const entrySelected = event.target.classList.value
    // Only continue if the clicked element was a previous entry from the list
    if (entrySelected === "historical-entry") {
        const viewEvent = new CustomEvent("historicalEntrySelected", {
            detail: {
                activity: entrySelected
            }
        })
        eventHub.dispatchEvent(viewEvent)
    }
})