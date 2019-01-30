/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
ellipse(mouseX, mouseY, 60, 60);
 
if(mouseX > 200){
    fill(0, 210, 247);
    strokeWeight(3);
    stroke(57, 0, 214);
}
//ellipse(mouseX, mouseY, 60, 60); changes the shape's size based on its x and y position (mouseX > 200)codes for when the mouse is on the right side of the screen the circle will be blue on the left side it will be red. fill(0, 210, 247); codes for the inside color of the circle which is light blue. strokeWeight(3); codes for the outlines thickness.stroke(57, 0, 214); codes for the outside color which is dark blue.
else{
    fill(225, 0, 0);
    strokeWeight(2);
    stroke(57,20,14);
}
//fill(225, 0, 0); codes for the color of the circle which is red. strokeWeight(2);codes for the outside thickness of the circle. stroke(57,20,14); codes for the outside color of the circle which is black. 
    ellipse(mouseX, mouseY,)
    
    
    
    ellipse(mouseX, mouseY, 40, 40);
 
if(mouseX > 200){
    fill(0, 210, 247);
    strokeWeight(3);
    stroke(57, 0, 214);
}
//ellipse(mouseX, mouseY, 40, 40); changes the shape's size based on its x and y position (mouseX > 200)codes for when the mouse is on the right side of the screen the circle will be blue on the left side it will be red. fill(0, 210, 247); codes for the inside color of the circle which is light blue. strokeWeight(3); codes for the outlines thickness.stroke(57, 0, 214); codes for the outside color which is dark blue.
else{
    fill(225, 0, 0);
    strokeWeight(2);
    stroke(57,20,14);
}
//fill(225, 0, 0); codes for the color of the circle which is red. strokeWeight(2);codes for the outside thickness of the circle. stroke(57,20,14); codes for the outside color of the circle which is black. 
    ellipse(mouseX, mouseY,)
    
    ellipse(mouseX, mouseY, 20, 20);
 
if(mouseX > 200){
    fill(0, 210, 247);
    strokeWeight(3);
    stroke(57, 0, 214);
}
//ellipse(mouseX, mouseY, 20, 20); changes the shape's size based on its x and y position (mouseX > 200)codes for when the mouse is on the right side of the screen the circle will be blue. fill(0, 210, 247); codes for the inside color of the circle which is light blue. strokeWeight(3); codes for the outlines thickness.stroke(57, 0, 214); codes for the outside color which is dark blue.
else{
    fill(225, 0, 0);
    strokeWeight(2);
    stroke(57,20,14);
}
//fill(225, 0, 0); codes for the color of the circle which is red. strokeWeight(2);codes for the outside thickness of the circle. stroke(57,20,14); codes for the outside color of the circle which is black. 
    ellipse(mouseX, mouseY,)
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
