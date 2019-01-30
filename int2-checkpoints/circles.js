/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var xPos = 0;
        var yPos = 0;
        var xPos2 = 400;
        var yPos2 = 0;
        var xPos3 = 16;
        var yPos3 = 0;
        var xPos4 = 200;
        var yPos4 = 0;
        var xPos5 = 384;
        var yPos5 = 0;
        var xPos6 = 0;
        var yPos6 = 400;
        var xPos7 =0;
        var yPos7 = 0;
        var weight = 2;

        draw = function() {
            // Draws Blue Circles From Upper Left to lower right
            strokeWeight(weight);
            stroke(57, 0, 214);
            fill(0, 210, 247);
            ellipse(xPos, yPos, 30, 30);
            xPos = xPos + 20;
            yPos = yPos + 20;
            // Draws Blue Circles From Upper Right To Lower Left 
            ellipse(xPos2, yPos2, 30, 30);
            xPos2 = xPos2 - 20;
            yPos2 = yPos2 + 20;

            ellipse(xPos3, yPos3, 30, 30);
            yPos3 = yPos3 + 2;
            ellipse(xPos5, yPos5, 30, 30);
            yPos5 = yPos5 + 2;
            
            ellipse(xPos6, yPos6, 30, 30);
            xPos6 = xPos6 +2;
            
            ellipse(xPos7, yPos7, 30, 30);
            xPos7 = xPos7 +2 
        };
    

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
