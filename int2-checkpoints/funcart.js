/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(0);//I set the background to black so people can easily see where the box is 
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        taco = function(x, y) {
            //taco = function(x, y) codes for each time you click your mouse depending on x and y posistion a new face will apear 
            fill(random(255), random(255), random(255));
            // fill(random(255), random(255), random(255));codes for white 
            ellipse(x, y, 35, 35);
            //ellipse(x, y, 35, 35);codes for the biggest circle
            ellipse(x - 10, y - 20, 15, 15);
            //codes for the top left small circle 
            ellipse(x + 10, y - 20, 15, 15);
            //codes for top right circle the right ear 
            ellipse(x - 5, y, 5, 5);
            //Codes for the left small eye 
            ellipse(x + 5, y, 5, 5);
            //codes for the right small eye 
            line(x - 4, y + 6, x + 4, y + 6);
            //coes for the mouth the stright line bellow the eyes 
            
        }

        mouseClicked = function() {
            taco(mouseX, mouseY);
            //codes for when the mouse is clicked on the x and y axis 
        }

        draw = function() {


        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
