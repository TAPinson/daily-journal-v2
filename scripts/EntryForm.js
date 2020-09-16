import { saveEntry } from './JournalDataProvider.js' 

const eventHub = document.querySelector("main")

eventHub.addEventListener("click", event => {
    if (event.target.id === "recordEntry") {
        const entryDate = document.querySelector("#journalDate").value
        const entryConcepts = document.querySelector("#journalConcepts").value
        const entryEntry = document.querySelector("#journalEntry").value
        const entryMood = document.querySelector("#journalMood").value

        if (entryDate && entryConcepts && entryEntry && entryMood) {
            const entry = {
                date: entryDate,
                concept: entryConcepts,
                entry: entryEntry,
                mood: entryMood
            }
            saveEntry(entry)
        }else {
            alert("Please complete your entry before submitting")
        }
    }
})