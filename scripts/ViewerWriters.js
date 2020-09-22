export const editWrite = (entry, dateString) => {
    return `
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