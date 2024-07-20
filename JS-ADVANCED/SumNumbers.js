function calc() {
    let num1El = document.getElementById('num1');
    let num2El = document.getElementById('num2');
    let sumElement = document.getElementById('sum');

    let firstNum = Number(num1El.value);
    let secondNum = Number(num2El.value);

    sumElement.value = firstNum + secondNum
}
