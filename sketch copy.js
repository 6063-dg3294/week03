let xpos = 150;
let ypos = 150;

let rectwidth = 300;
let rectheight = 200;

function setup() {
    createCanvas(600,600);

}

function draw() {
   background(200, 20,20)
   fill(255);
   rect(xpos,ypos,rectwidth,rectheight);
    // (xpos + rw) > mouse X > xpos
    // xpos < mouseX < (xpos + rectwidth)
    if (xpos < mouseX &&
        mouseX < (xpos + rectwidth)   && 
        mouseY > ypos && 
        mouseY < (ypos + rectheight)  ){
        //boolean: && = both are meet (true)

        fill(20,200,20);
    } else {
        fill(255);
    }
    
    rect(xpos,ypos,rectwidth,rectheight);
    
    
}
