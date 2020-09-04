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
                <div class="historical-date">${entry.date}</div>
                <div class="historical-concepts">${entry.concept}</div>
            </div>
            `
        }

    })
}