// number/operator event listeners:

let inputButton = document.getElementsByClassName('inputButton');

for (i=0; i<inputButton.length; i++) {
  inputButton[i].addEventListener("click", expression);
}

let equals = document.getElementById("equals");
equals.addEventListener("click", calculate);

let clear = document.getElementById("clear");
clear.addEventListener("click", clearCalc);

// calculator functions and variables:

let input = "";
let output = document.getElementById("output");
let x = "";

function expression() {
  if (input===0){
    input= "";}
  input += this.value;
  output.innerHTML=input;
  console.log("input=" + input);
}

function calculate() {
  if (input.includes("SQUARE")){
    let x = input.slice(6);
    input=Math.sqrt(x);
    console.log(input);
    output.innerHTML=input;
  } else {
  input=eval(input);
  console.log("calculation=" + eval(input));
  output.innerHTML=input;
  }
}

function clearCalc() {
  input = 0;
  output.innerHTML=input;
}
