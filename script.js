var newLine = true;
var value1;
var currentOperator;
var currentValue;
//number event handlers
function digitBtnPressed(button){

    if (newLine == true){
        document.getElementById("inputBox").value = button;
        newLine= false; //enables concatenation, (aka the else function)
    }else{
    currentValue= document.getElementById("inputBox").value;
   document.getElementById("inputBox").value= currentValue + button;
    }
}
//event handler for when the cancel button is pressed
function cancelBtnPressed(){
    document.getElementById("inputBox").value=0 //meaning it removes all the values
    newLine =true;
}

//operator function stores the operators in memory

function operatorBtnPressed(operator){
    currentOperator= operator;
    value1= parseInt(document.getElementById("inputBox").value);
newLine=true;
}
//equals operator

function equalsBtnPressed(){
    var value2= parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch (currentOperator) {
        case "+":
            finalTotal =value1 + value2;
            break;
        case "-":
            finalTotal =value1 - value2;
            break;
        case "÷":
            finalTotal =value1 / value2;
            break;
        case "×":
            finalTotal =value1 * value2;
            break;
    }
    document.getElementById("inputBox").value=finalTotal;
    
value1 = 0;
newLine= true;
}
//backspacing to remove only one value
function backspaceBtnPressed(){
    let inputBox = document.getElementById("inputBox");
    let currentValue = inputBox.value;

    // Remove the last character
    currentValue = currentValue.slice(0, -1);

    // Update the input box or reset to 0 if empty
    inputBox.value = currentValue || "0";

    // Handle the newLine flag properly
    newLine = true;
}

