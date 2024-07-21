function subtract() {
    let firstInput = document.getElementById("firstNumber");
    let secondInput = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result")

    let numA = Number(firstInput.value);
    let numB = Number(secondInput.value);

    let result = numA - numB;

    resultRef.textContent = result;  
}