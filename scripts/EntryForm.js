import { saveEntry } from './JournalDataProvider.js' 

const eventHub = document.querySelector("main")


eventHub.addEventListener("click", event => {
    const entryDate = document.querySelector("#journalDate").value
    const entryConcepts = document.querySelector("#journalConcepts").value
    const entryEntry = document.querySelector("#journalEntry").value
    const entryMood = document.querySelector("#journalMood").value
    if (event.target.id === "recordEntry") {
        if (entryDate && entryConcepts && entryEntry && entryMood) {
            const entry = {
                date: entryDate,
                concept: entryConcepts,
                entry: entryEntry,
                moodId: parseInt(entryMood)
            }
            saveEntry(entry)
            formWriter()
        }else {
            alert("Please complete your entry before submitting")
        }
    }
})


export const formWriter = () => {
    const contentTarget = document.querySelector(".input-form")
    contentTarget.innerHTML = ""
    contentTarget.innerHTML = `
    <input type="date" id="journalDate">
    <input type="text" id="journalConcepts" placeholder="Concepts Covered...">
    <textarea id="journalEntry" rows="6" placeholder="Entry..."></textarea>
    <select name="journalMood" id="journalMood">
        <option value="1">Happy</option>
        <option value="2">Ok</option>
        <option value="3">Sad</option>
    </select>
    <button type="button" id="recordEntry">Record Journal Entry</button>
    `
}