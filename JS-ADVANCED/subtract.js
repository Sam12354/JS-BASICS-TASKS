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



@import url('https://fonts.googleapis.com/css?family=Raleway');

body {
    width: 20%;
    margin: 0 auto;
    padding-top: 20px;
    font-family: 'Raleway',sans-serif;
}

#wrapper{
    background: #DDDDDD;
    text-align: center;
    padding: 40px 20px;
    border-radius: 10px;
}

input[type="text"] {
    margin-bottom: 10px;
    padding: 5px 0;
    border-radius: 5px;
    font-weight: 700;
}
 #result{
     font-weight: 700;
     color: cadetblue;
 }

 #wrapper input {
     padding: 4px;
     border: 2px solid cadetblue;
 }
