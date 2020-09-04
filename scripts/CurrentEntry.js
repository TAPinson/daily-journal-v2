const contentTarget = document.querySelector(".viewer__highlight")
const eventHub = document.querySelector("main")

eventHub.addEventListener("historicalEntrySelected", customEvent => {
    JournalWriter()
})


export const JournalWriter = () => {
    contentTarget.innerHTML = ""
    contentTarget.innerHTML += `
        <div class="viewer__date">Date Posted: Gonna Be a Date!</div>
        <div class="viewer__concepts">Concepts Covered: Gonna be some concepts</div>
        <div class="viewer__journal">Gonna be an entry here</div>
    `
}