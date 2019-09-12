function setup( ) {
    createCanvas(400, 269);
    background(253, 230, 221);

fill(255, 259, 259);
stroke(0);
strokeWeight(0);
quad(135, 240, 180, 250, 180, 205, 90, 220);

fill(0)
stroke(0)
strokeWeight(0)
quad(400, 0, 232, 0, 278, 80, 400, 80);
quad(400, 80, 275, 78, 280, 103, 400, 130);
quad(400, 120, 320, 110, 330, 135, 400, 230);
quad(400, 230, 346, 110, 320, 206, 352, 258);

    //hair highlights
    fill(17, 30, 99);
    stroke(0);
    strokeWeight(0);
    quad(400, 0, 232, 0, 276, 73, 400, 100);

    fill(0)
    ellipse(320, 85, 86, 40);
    ellipse(343, 93, 86, 38);

        noFill();
        stroke(0);
        strokeWeight(9)
        curve( 0, 170, 152, 214, 205, 203, height/1.25, width/2, height/1.30, width/3, height/1.5);

        strokeWeight(1.5)
        fill(150)
        ellipse(176, 230, 12, 28);

        fill(0)
        ellipse(179, 225, 5, 15);

        noFill()
        strokeWeight(15)
        curve(-50, 280, 123, 220, 185, 205, height/1.30, width/2, height/1.50, width/1.3, height/1);

        strokeWeight(13)
        curve(-230, 325, 135, 216, height/1.40, width/1.9, height/1.19, width/1.2, height/1);

        strokeWeight(2.3)
        curve(125, -50, 175, 170, 180, 242, height/2, width);
        curve(195, 130, 193, 147, 180, 160, height/1.5, width/2.3);

        strokeWeight(9)
        curve(-130, 115, 90, 218, height/1.22, width/1.95, height/1.45, width/2.5, height/1);

        strokeWeight(5)
        curve(-100, 175, 90, 221, height/1.50, width/1.65, height/1.30, width/2.55, height/1);

        strokeWeight(8)
        curve(-200, 125, 145, 242, height/1.5, width/1.65, height/1.35, width/1.75, height/0.5);
        curve(-175, -25, 90, 165, 109, 210, height/1.22, width/1, height/1, width/1, height/1);
    //eyebrow
        strokeWeight(12)
        curve(-0, 75, 120, 118, 200, 130, height/1.3, width/3.5);
        curve(-0, 75, 115, 118, 193, 135, height/1.3, width/3.5);
        curve(-0, 75, 120, 122, 185, 138, height/1.3, width/3.5);
        strokeWeight(9.5)
        curve(-0, 160, 55, 137, 125, 120, height/1.8, width/1.8);
        curve(-0, 160, 55, 137, 132, 122, height/1.8, width/1.8);
        curve(-0, 160, 45, 142, 115, 123, height/2, width/3.5);
        strokeWeight(3)
        curve(-50, 140, 06, 155, 55, 133.5, height/2, width/3.8);
        curve(-50, 140, 06, 155, 55, 136, height/2, width/3.8);
        curve(-50, 140, 06, 155, 55, 139, height/2, width/3.8);
        curve(-70, 130, 06, 155, 55, 140.5, height/2, width/3.8);

        fill(0)
        ellipse(189, 133, 29, 15);

        //face outline
        strokeWeight(6.5)
        noFill()
        curve(-600, -950, 220, -10, 390, 275, height/0.15, width/0.48);

        strokeWeight(4)
        curve(-50, -50, -20, 50, 50, 65, height/2, width/5);
        
        //ear
        strokeWeight(5)
        noFill()
        curve(-15, 230, 282, 105, 313, 202, height/5, width/1);
        strokeWeight(2.5)
        curve(50, 130, 285, 125, 300, 185, height/1.1, width/2);

        //hair
        strokeWeight(5)
        curve(100, 300, 352, 254, 403, 230, height, width);
        strokeWeight(7)
        arc(376, 194, 109, 127, 203, 405);

        strokeWeight(8)
        curve(100, 200, 400, 125, 280, 78, height, width);
        
        strokeWeight(5)
        curve(100, 80, 310, 45, 383, 70, height/0.6, width/3);
        curve(100, 80, 310, 45, 383, 67, height/0.6, width/3);
        curve(100, 80, 310, 45, 383, 61, height/0.6, width/3);
        curve(100, 80, 295, 45, 383, 64, height/0.6, width/3);

        curve(100, 60, 285, 25, 395, 44, height/0.5, width/2);
        curve(100, 60, 280, 25, 395, 44, height/0.5, width/2);
        curve(100, 60, 285, 25, 395, 47, height/0.5, width/2);
        curve(100, 60, 293, 31.5, 395, 50, height/0.5, width/2);
        curve(100, 60, 295, 35, 375, 47, height/0.5, width/2);
        strokeWeight(12)
        curve(100, 80, 319, 30, 360, 45, height/0.4, width/2.5);
        curve(100, 50, 314, 38, 363, 47, height/0.4, width/2.5);
        curve(150, 0, 319, 7, 391, 18, height/0.4, width/5);
        curve(150, 0, 319, 7, 391, 6.5, height/0.4, width/5);

        strokeWeight(4.5)
        curve(150, 80, 308, 6, 391, 18, height/0.4, width/5);
        curve(150, 80, 308, 6, 391, 6.5, height/0.4, width/5);
        curve(150, 80, 309, 13, 391, 18, height/0.4, width/5);

        strokeWeight(2.5)
        curve(280, 100, 318, 215, 340, 238, height/0.75, width/1.55);

        strokeWeight(2.5)
        stroke(253, 230, 221)
        curve(280, 100, 320, 200, 340, 228, height/0.75, width/1.55);
    
    

}
function draw( ) {
    
}