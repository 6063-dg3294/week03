
let maxDiam = 200
let minDiam = maxDiam/10


function setup() {
    createCanvas(600,600);

}

function draw() {
   background(200, 200,200)
   fill("pink");

   // +=是 新xpos = xpos + eDiam
   // xpos += 2


//在for loop里的defination只在loop里
   for (let xpos = 0; xpos <= width; xpos += maxDiam){
        for (let ypos = 0; ypos <= height; ypos += maxDiam){
            for (let dim = maxDiam; dim > minDiam; dim -= 8){
                ellipse(xpos, ypos, dim,dim)
            }
        }
    }
           
    
    
       //}
  // }

    //for (let dim = maxDiam; dim > 5; dim -= 8){
        //ellipse(width/2, height/2, dim,dim)
    //}





    

   //ellipse(eDiam / 2, eDiam/2, eDiam,eDiam)

   //translate(eDiam,0)
   //ellipse(0,0,eDiam,eDiam)




   
}
