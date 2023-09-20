let xpos = 180

function setup() {

    

    createCanvas(600,600);
    //if background is here, 会留下印迹
}

function draw() {
   
    background(200,20,20); //这里不会 会速消失
  
    //rect(xpos, 10, 30, 30)
    //rect(xpos, 10, 30, 30)
    //rect(xpos, 10, 30, 30)
     rect(mouseX, mouseY,30,30);


     //print(mouseX, mouseY); see on console

    if (mouseX > width / 2) {
        if (mouseY > height/2) {
            fill(200,10,200);
        } else {
        if (mouseY > height / 2) {
            fill(10,10,200);
        } else {
            fill(255);
        }
        }

    }


    
    
}
