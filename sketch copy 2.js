
let maxDiam = 100
let minDiam = maxDiam/10


function setup() {
    createCanvas(600,600);

}

function draw() {

   background(200, 200,200)
   fill("pink");
   randomSeed(2);
   //random seed = 让random number从1010开始
   

   // +=是 新xpos = xpos + eDiam
   // xpos += 2


//在for loop里的defination只在loop里
   for (let xpos = 0; xpos <= width; xpos += 2*maxDiam){
        for (let ypos = 0; ypos <= height; ypos += 2*maxDiam){
            for(let dim = maxDiam; dim > 5; dim -= 8){
            let mDiam = random(minDiam, maxDiam);
            ellipse(xpos, ypos, mDiam,mDiam);
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