// creates Variables and saves Dom elements to each 
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

//event lister for button
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
    })