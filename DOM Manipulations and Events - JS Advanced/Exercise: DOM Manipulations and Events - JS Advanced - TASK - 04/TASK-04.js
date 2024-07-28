function addItem() {
    const getNewItemText = document.getElementById("newItemText").value;
    const getNewItemValue = document.getElementById("newItemValue").value;

    const getSelectMenu = document.getElementById("menu");
    const createOption = document.createElement("option");

    createOption.textContent = getNewItemText;

    createOption.value = getNewItemValue;

    getSelectMenu.append(createOption);

    const clearTextInput = document.getElementById("newItemText").value = '';
    const clearValueInput = document.getElementById("newItemValue").value = '';
 
}
