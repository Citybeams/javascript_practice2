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
