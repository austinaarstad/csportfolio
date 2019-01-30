/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        taco = function(x, y) {
            //taco = function(x, y) codes for each time you click your mouse depending on x and y posistion a new face will apear 
            fill(random(255), random(255), random(255));
            // fill(random(255), random(255), random(255));codes for white 
            ellipse(x, y, 35, 35);
            //ellipse(x, y, 35, 35);codes for the biggest circle
            rect(x - 8.5, y - 4, 5, 5);
            //codes for the left part of the glasses frame 
            rect(x + 2, y - 4, 5, 5);
            //codes for the right side of the glasses frame 
            ellipse(x - 5, y, 5, 5);
            //Codes for the left small eye 
            ellipse(x + 5, y, 5, 5);
            //codes for the right small eye 
            line(x - 4, y + 6, x + 4, y + 6);
            //coes for the mouth the stright line bellow the eyes 
            line(x + 3, y - 1, x - 1, y - 1);
            //codes for the line that connects the glasses

        }
        //codes for the starting color blue 
        background(51, 153, 255);
        
        function loop() {


                //background changes to a random color rop right, prefering blue
                if (mouseX > 200) {

                    fill(130, 255, 150);
                    background(random(130), random(255), 150);
                }
                //background changes to a random color when clickedon top left, prefering red
                else {

                    fill(255, 100, 100);
                    background(255, 100, random(100));

                }
                //background changes to a random color when clicked on bottom left, prefering purple
                if (mouseY > 200) {

                    fill(120, 150, 255);
                    background(120, random(150), 255);
                }
                //background changes to a random color when clicked on bottom right, prefering green
                if (mouseY > 200)
                    if (mouseX > 200) {

                        fill((255), (255), (50));
                        background(random(255), 255, 50);
                    }

            };
            
        draw = function() {
            
            
            loop();


            taco(mouseX, mouseY);

            var border = 10;
            var strokeColor = 255;


            //depending on where the mouse is in the box, the border changes shade
            strokeColor = (mouseX, mouseY);


            for (var i = 0; i < width; i++) {
                strokeWeight(2);
                stroke(strokeColor, strokeColor, strokeColor)
                rect(i, 0, border, border);
                rect(0, i, border, border);
                rect(i, 400 - border, border, border);
                rect(400 - border, i, border, border);
                //codes for the background loop and circle color changes 

            }
            

        };
    }
    //codes for the background color changing 


    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}
var p = new Processing(document.getElementById("output-canvas"), sketch);
