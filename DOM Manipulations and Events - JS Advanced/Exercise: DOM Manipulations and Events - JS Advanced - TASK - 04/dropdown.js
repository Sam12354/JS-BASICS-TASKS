function addItem() {
    const getNewItemText = document.getElementById("newItemText").value;
    const getNewItemValue = document.getElementById("newItemValue").value;

    const getSelectMenu = document.getElementById("menu");
    const createOption = document.createElement("option");

    // set textContent and value
    createOption.textContent = getNewItemText;
    //"set its textContent to the newly taken ones."
    createOption.value = getNewItemValue;
    //"set its value to the newly taken ones."

    getSelectMenu.append(createOption);

    // const clearTextInput = getNewItemText.value = ''
    // const clearValueInput = getNewItemValue.value = ''

    // You need to clear the input fields, 
    // but getNewItemText and getNewItemValue are strings, not input elements.

    const clearTextInput = document.getElementById("newItemText").value = '';
    const clearValueInput = document.getElementById("newItemValue").value = '';
 
}