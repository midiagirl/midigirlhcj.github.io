var SubmitButton = document.querySelector('.submit');
SubmitButton.onmouseover = function MouseOver() {
               alert("kindly fill form again");
             }

var HeaderButton = document.querySelector('.btn-one');
HeaderButton.onmouseover = function MouseOva() {
              HeaderButton.textContent = 'My Biography';
             }

var HeaderText = document.querySelector('h1');
HeaderText.ondblclick = function DoubleClick() {
             HeaderText.style.color = 'lightgreen';
             }

//var HeaderButton = document.querySelector('.btn-one');
// HeaderButton.onmouseover = function DoubleClick() {
//               textContent = 'You're in the right place;
//             }

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

// <button onclick="myFunction()">Click Me</button>
