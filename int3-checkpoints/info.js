var brady = document.getElementById("brady");
var neymar = document.getElementById("neymar");
var display = document.getElementById("display");

brady.addEventListener("click", function() {
    display.innerHTML = "Brady is my favorite football player";
});

neymar.addEventListener("click", function() {
    display.innerHTML = "Neymar is my favorite soccer player";
});
