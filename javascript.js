// function expressions only load when that specific line of code is reached
var diff = function diffOfSquares (a, b){
  return a*a - b*b;
};
// use the variable name to call the function and dont actually need diffOfSquares
diff( 9, 5 );






var optionalList = document.getElementById("optionalList");
// var myListItems = document.getElementsByTagName("li");
console.log("This is an element of type:" + optionalList.nodeType );

// will align the content in the div to the right
var mainContent = document.getElementById("main content");
mainContent.setAttribute("align","right");

// will return the html contained in the element mainContent
var mainContent = document.getElementById("main content");
console.log(mainContent.innerHTML);


// dynamically creates elelemts
// creates elements out in space
var newHeading = document.createElement("h1");

// to add content, either use innerHTML
newHeading.innerHTML = "Did you know?";

// this attaches it to the document!
document.getElementById("creatingDiv").appendChild(newHeading);

// or create child nodes manually
var h1Text = document.createTextNode("Did you know?");
// add the as child nodes to the new elements
newHeading.appendChild(h1Text);
// attaches to the document
document.getElementById("creatingDiv").appendChild(newHeading);


// events usually start with on onload onclick most common are clicking and loading
// the function at the top comes from the bottom function
function prepareEventHandlers(){

    var optionalList = document.getElementById("optionalList")
    optionalList.onclick = function(){
      alert("you clicked in optional List");
    }
  }

window.onload = function(){
  //preps the window; if the script tags are at the top
  prepareEventHandlers();
}

//form events
// this grabs the email field
var emailField = document.getElementById("email");

//means we click into the form field, if the value is "your email"
//then it gets get to blank
emailField.onfocus = function() {
  if ( emailField.value == "your email"){
    emailField.value = "";
  }
};
//means if it's empty it changes back to "your email"
emailField.onblur = function() {
  if ( emailField.value == "") {
    emailField.value = "your email";
  }
};
