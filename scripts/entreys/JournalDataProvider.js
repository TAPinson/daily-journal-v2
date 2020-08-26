/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "08/10/2020",
        concept: "Bash",
        entry: "We talked about some basic bash commands for terminal.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "08/12/2020",
        concept: "Networking",
        entry: "Met big sibling Connor. He gave me a heads up to be sure to pay attention closely to GIT",
        mood: "Happy" 
    },
    {
        id: 4,
        date: "08/13/2020",
        concept: "Git",
        entry: "We learned the basics of git and were put into groups for our group project. I was on the pomelos",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}