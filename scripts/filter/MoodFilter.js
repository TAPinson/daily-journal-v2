export const MoodFilter = () => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--happy">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
}






















//const eventHub = document.querySelector("main")


// eventHub.addEventListener('click', event => {
//     if (event.target.id === "moodFilterSelected") {
//         event.preventDefault()
//         const form = document.querySelector("#radioMoodSelect")
//         const data = new FormData(form);
//         console.log(data)
//     }
// })


// export const moodFilterWriter = () => {
//     const contentTarget = document.querySelector("#radioMoodSelect")
//     contentTarget.innerHTML = `
//     <p>Filter By Mood:</p>
//     <div>
//       <input type="radio" id="moodChoice1"
//        name="moodChoice" value="happy">
//       <label for="moodChoice1">Happy</label>
  
//       <input type="radio" id="moodChoice2"
//        name="moodChoice" value="ok">
//       <label for="moodChoice2">Ok</label>
  
//       <input type="radio" id="moodChoice3"
//        name="moodChoice" value="sad">
//       <label for="moodChoice3">Sad</label>
//     </div>
//     <div>
//       <button type="submit" id="moodFilterSelected">Filter</button>
//     </div>
//     `
// }




