import { getEntries, useJournalEntries, editEntry, deleteEntry } from './JournalDataProvider.js'

const contentTarget = document.querySelector(".viewer__highlight")
const eventHub = document.querySelector("main")


// Listener for entry selected for display from list
eventHub.addEventListener("historicalEntrySelected", customEvent => {
    const clearTarget = document.querySelector(".viewer_edit")
    clearTarget.innerHTML = ""
    const IDOfSelected = customEvent.detail.selected
    const entries = useJournalEntries()
    const entryFinder = entries.filter(entry => entry.id === parseInt(IDOfSelected))
    const matchingEntry = entryFinder[0]
    JournalWriter(matchingEntry)
})


// Listener for delete related events
eventHub.addEventListener("click", event => {
    const buttonCheck = event.target.classList.value
    if (buttonCheck === "deleteButton"){
        // Ensure delete click was intentional and only continue if user confirms
        let doubleCheck = confirm("Are you sure you want to delete this entry? It cannot be undone.")
        if (doubleCheck === true) {
            const elementID = event.target.id
            const [prefix, selectedID] = elementID.split("-")
            deleteEntry(selectedID)
        }
    }
})


// Listener for edit related clicks
eventHub.addEventListener("click", event => {
    const clickTarget = event.target.classList.value
    // If they click the edit button
    if (clickTarget === "editButton"){
        const [prefix, id] = event.target.id.split("-")
        editPrep(id)
    }
    else {
        // If they click the edit save button
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
            editEntry(updatedEntry)
        }
        else {
            // If they click the edit cancel button
            if (clickTarget === "edit-cancel") {
                const contentTarget = document.querySelector(".viewer_edit")
                contentTarget.innerHTML = ""
            }
        }
    }
})


// Take the selected entry and display an area to update each attribute
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
        <button class="edit-cancel" id="editCancel-${entry.id}">Cancel</button>
    </section>
    ` 
}

// Render the selected entry to the journal viewer
export const JournalWriter = (entry) => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
        <div class="viewer__date">Date Posted: ${entry.date}</div>
        <div class="viewer__mood">Mood: ${entry.mood}</div>
        <div class="viewer__concepts">Concepts Covered: ${entry.concept}</div>
        <div class="viewer__journal">${entry.entry}</div>
        <button class="editButton" id="edit-${entry.id}">Edit</button>
        <button class="deleteButton" id="delete-${entry.id}">Delete</button>
    `
}