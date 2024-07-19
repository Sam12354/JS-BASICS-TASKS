function extractText() {
    let liElement = document.querySelectorAll('li');
    let items = Array.from(liElement).map(liElement => liElement.textContent);
    let resultTextArea = document.getElementById('result');
    resultTextArea.value = items.join('\n');
}
