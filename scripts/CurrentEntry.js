import { getEntries, useJournalEntries } from './JournalDataProvider.js'

const contentTarget = document.querySelector(".viewer__highlight")
const eventHub = document.querySelector("main")

eventHub.addEventListener("historicalEntrySelected", customEvent => {
    const clearTarget = document.querySelector(".viewer_edit")
    clearTarget.innerHTML = ""
    const IDOfSelected = customEvent.detail.selected
    const entries = useJournalEntries()
    const entryFinder = entries.filter(entry => entry.id === parseInt(IDOfSelected))
    const matchingEntry = entryFinder[0]
    JournalWriter(matchingEntry)
})


eventHub.addEventListener("click", event => {
    const clickTarget = event.target.classList.value
    if (clickTarget === "editButton"){
        const [prefix, id] = event.target.id.split("-")
        editPrep(id)
    }
    else {
        if (clickTarget === "edit-save") {
            const [prefix, id] = event.target.id.split("-")
            const date = document.querySelector(".editDate").value
            const concept = document.querySelector(".edit-concepts").value
            const entry = document.querySelector(".edit-entry").value
            const mood = document.querySelector(".edit-mood").value

            const updatedEntry = {
                id,
                date,
                concept,
                entry,
                mood
            }
            console.log("updated entry:",updatedEntry)
        }
    }
})


const editPrep = id => {
    const entries = useJournalEntries()
    const entry = entries.find((selection) => {
        return selection.id === parseInt(id)
    })
    const [year, month, day] = entry.date.split("-")
    const dateString = year + "-" + month + "-" + day
    const contentTarget = document.querySelector(".viewer_edit")
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
    <h2> Edit Entry </h2>
    <section class="editArea">
        <input type="date" class="editDate" value="${dateString}">
        <select class="edit-mood">
            <option value="${entry.mood}">${entry.mood}</option>
            <option value="happy">Happy</option>
            <option value="ok">Ok</option>
            <option value="sad">Sad</option>
        </select><br>
        <input type="text" class="edit-concepts" value= "${entry.concept}"><br>
        <textarea class="edit-entry" rows="6">${entry.entry}</textarea><br>
        <button class="edit-save" id="editSave-${entry.id}">Save</button>
    </section>
    ` 
}


export const JournalWriter = (entry) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
        <div class="viewer__date">Date Posted: ${entry.date}</div>
        <div class="viewer__mood">Mood: ${entry.mood}</div>
        <div class="viewer__concepts">Concepts Covered: ${entry.concept}</div>
        <div class="viewer__journal">${entry.entry}</div>
        <button class="editButton" id="edit-${entry.id}">Edit</button>
    `
}