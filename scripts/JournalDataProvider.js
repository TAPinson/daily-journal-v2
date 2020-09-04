
// Hold entries after they are retrieved and sorted into new array
let journal = []

// Sort entries into new array by date
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}


// Fetch the entries from the json server
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())  
        .then(entries => {
            journal = entries
        })
}