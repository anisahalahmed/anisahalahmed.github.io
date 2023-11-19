function setup() {
    createCanvas(800, 400);
}
  
function draw() {
    if (mouseIsPressed) {
        translate(mouseX,mouseY);
        for (let i = 0; i < 10; i ++) {
            strokeWeight(1);
            fill(217,1,122,127);
            ellipse(0, 0, 10, 40);
            rotate(PI/5);
        }
    }
}