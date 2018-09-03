//document.querySelector and document.getElementById are starndard ways for a java enabled browser to select tags, classes, etc and apply style to it
// java 1:  this changes your h1 to hello world
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// end of java 1

// java 2: this changes the image of the id you stated mest.jpeg to the new image imagesjs1.jpg anytime user clicks on image
var myImage = document.getElementById('headerimage');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mest.jpeg') {
      myImage.setAttribute ('src','images/imagesjs1.jpg');
    } else {
      myImage.setAttribute ('src','images/mest.jpeg');
    }
}
// end of java 2

//java 3: this prompts the user to input name and adds the users name as sufix to the sentence specified.
var myButton = document.querySelector('button'); // creates the button in html document using javascript
function setUserName() { // creates function SetUserName in javascript. this can be anything you want
  var myName = prompt('Please enter your first name.'); // creates car named myName and assigns it whatever name the user inputs
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Midiagirl is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'I said Midiagirl is cool, ' + storedName;
}

myButton.onclick = function() { //calls the setusername function so it applies it on the button
  setUserName();
}
// end of java 3
