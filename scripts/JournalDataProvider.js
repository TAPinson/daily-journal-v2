import {EntryListComponent} from './JournalEntryList.js'
import {JournalWriter} from './CurrentEntry.js'

// Hold entries after they are retrieved and sorted into new array
let journal = []

const eventHub = document.querySelector("main")

// Notify JournalEntryList.js that a new entry has been recorded
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}


// Sort entries into new array by date
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}


// Update an entry
export const editEntry = entry => {
    const contentClear = document.querySelector(".viewer_edit")
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
  .then(getEntries)
    .then(dispatchStateChangeEvent)
    .then(() => {
        contentClear.innerHTML = ""
        JournalWriter(entry)
    })
}


// Fetch the entries from the json server
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())  
        .then(entries => {
            journal = entries
        })
}


// Save a new entry
export const saveEntry = entry => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}


export const deleteEntry = entryID => {

    const isEntrySelected = document.querySelector(`#edit-${entryID}`)
    if (isEntrySelected) {
        const contentClear = document.querySelector(".viewer__highlight")
        contentClear.innerHTML = "Select an entry to view.."
    }
    return fetch(`http://localhost:8088/entries/${entryID}`, {
        method: "DELETE"
    })
    .then(dispatchStateChangeEvent)
}