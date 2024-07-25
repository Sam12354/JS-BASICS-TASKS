function addItem() {
    const inputElement = document.getElementById("newItemText");
    const ulElement = document.getElementById("items");

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    ulElement.append(liElement);

    //Bonus

    inputElement.value = '';

    inputElement.focus();
}
