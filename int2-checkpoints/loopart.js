/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
background(0,0,0);
//sets the background to black


draw = function() {

    for(var i = 0; i < width; i+=30){
        // i codes for x whch starts at 0 repeats as long as its less than the width then adds 30 eatch time untill it gets to the border 400
    for(var j = 0; j < height; j+=30){
        //j codes for y whch starts at 0 repeats as long as its less than the width then adds 30 eatch time untill it gets to the border 400
    var size = random(30);
    //codes for the size of the circle 
    fill(66, 134, 244)
    fill(255, 255, 255)
    fill((0, 0, 0))
    fill(255, 0, 0)
    fill(random(255), random(255), random(255) )
    //fill codes for the inside color of the circle  255 means the maximum number that the random colors go up to and makes it blink white 
    stroke(random(225),random(225), random(225) )
    //stroke codes for the outside color of the circle 
    strokeWeight(random(5));
    //strokeWeight codes for the thickness of the outside of the circle 
    ellipse(i, j, size,size);

    }
    //codes for the circle 
    
}
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
