function subtract() {
    let firstInput = document.getElementById("firstNumber");
    let secondInput = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result")

    let numA = Number(firstInput.value);
    let numB = Number(secondInput.value);

    let result = numA - numB;

    resultRef.textContent = result;  
}


<!--Problems for in-class lab for the “JavaScript Advanced” course @ SoftUni.
Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/2761/DOM-Introduction-Exercise -->


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Subtraction</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div id="wrapper">
        <input type="text" id="firstNumber" value="13.33" disabled>
        <input type="text" id="secondNumber" value="22.18" disabled>

        <div id="result"></div>
    </div>
    <script src="subtract.js"></script>
    <script>
        window.onload = function() {
            subtract();
        }
    </script>
</body>

</html>
