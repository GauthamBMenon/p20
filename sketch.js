var bg
var tom,tomimg 
var jerry,jerryimg
function preload(){
bg=loadImage("images/garden.png")
tomimg=loadImage ("images/cat1.png")
jerryimg=loadImage ("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);

tom=createSprite (850,500)
tom.addImage(tomimg)
tom.scale=0.1

jerry=createSprite (200,500)
jerry.addImage(jerryimg)
jerry.scale=0.09
}

function draw() {

    background(bg);
    if(tom.x-jerry.x < tom.width /2+jerry.width/2){
    tom.velocityX=0

    }


    drawSprites();
}


function keyPressed(){
    if (keyCode==LEFT_ARROW)
    {
        tom.velocityX=-2
    }

    

  


}
