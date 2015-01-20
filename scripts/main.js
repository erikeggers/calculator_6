var operation;

//When this function is called, operation is equal to +
function plusPressed(){
  operation = '+';
}

//When this function is called, operation is equal to -
function minusPressed(){
  operation = '-';
}

//When this function is called, operation is equal to *
function timesPressed(){
  operation = '*';
}
//When this function is called, operation is equal to /
function dividePressed(){
  operation = '/';
}

//Calculates depending on what var opperation is currently equal to. 
function numberPressed(number){
  var displayedNumber = Number(document.getElementById('output-box').textContent);

  if(operation == '+') {
    displayedNumber = displayedNumber + number;
  }else if(operation == '-') {
    displayedNumber = displayedNumber - number;
  }else if(operation == '/') {
    displayedNumber = displayedNumber / number;
  }else if(operation == '*') {
    displayedNumber = displayedNumber * number;
  }else {
    displayedNumber = displayedNumber + '' + number;
  }

  document.getElementById('output-box').textContent = displayedNumber;
};

//when each button is clicked, the following function is ran depending on the id
function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));
}

function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function twoPressed(event) {
  event.preventDefault(); //prevents browser default action
  numberPressed(Number(2));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

//waiting for event before running functions
document.getElementById('plus').addEventListener('click', plusPressed);
document.getElementById('-').addEventListener('click', minusPressed);
document.getElementById('divide').addEventListener('click', dividePressed);
document.getElementById('x').addEventListener('click', timesPressed);
document.getElementById('0').addEventListener('click', zeroPressed);
document.getElementById('1').addEventListener('click', onePressed);
document.getElementById('2').addEventListener('click', twoPressed);
document.getElementById('3').addEventListener('click', threePressed);
document.getElementById('4').addEventListener('click', fourPressed);
document.getElementById('5').addEventListener('click', fivePressed);
document.getElementById('6').addEventListener('click', sixPressed);
document.getElementById('7').addEventListener('click', sevenPressed);
document.getElementById('8').addEventListener('click', eightPressed);
document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('c').addEventListener('click', zeroPressed);
