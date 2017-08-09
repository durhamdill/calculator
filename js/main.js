console.log("talking");

let num4 = document.getElementById("num4");
num4.addEventListener("click", expression);

let num5 = document.getElementById("num5");
num5.addEventListener("click", expression);

let add = document.getElementById("add");
add.addEventListener("click", expression);

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", expression);

let equalButton = document.getElementById("equalButton");
equalButton.addEventListener("click", calculate);

let input = "";

function expression() {
  input += this.innerHTML;
  console.log(input);
}

function calculate() {
  console.log(eval(input));
}

// getResult();

// console.log(mathProblem);
