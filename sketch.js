var background1,background1Img
var ground1, ground1Img
var tree1,tree1Img
var tree2, tree2Img
var fox,foxImg
var stoneageMan, stoneageManImg
var orange, orangeImg
var raspberry, raspberryImg
var pears, pearsImg
var banana,bananaImg

function preload(){
 background1Img=loadImage("game images/ky.jpg")
 ground1Img=loadImage("game images/grass.png")
//tree1Img=loadImage("game images/tree1.png")
//tree2Img=loadImage("game images/tree2.png")
foxImg=loadAnimation("game images/fox7.png","game images/fox1.png","game images/fox6.png",
"game images/fox4.png","game images/fox5.png","game images/fox3.png","game images/fox2.png",)
stoneageManImg=loadImage("game images/ape.png")
orangeImg=loadImage("game images/orange.png")
raspberryImg=loadImage("game images/raspberry.png")
pearsImg=loadImage("game images/pears.png")
bananaImg=loadImage("game images/banana.png")

}
function setup() {
  createCanvas(1300, 600);
  
 // page1();
  background1=createSprite(670,200,1220,20)
  background1.addImage(background1Img)  
  background1.scale=3.6
  background1.velocityX=-5

  ground1=createSprite(645,305,20,20)
  ground1.addImage(ground1Img)
  ground1.scale=0.5
  ground1.velocityX=-5

}
 


function draw() {
  background("0");

  if (background1.x >1000) 
    {
   background1.x = 900
    }
 drawSprites();

}
function spawnFruits(){
  banana=createSprite(200,200,20,20)
  banana.addImage(bananaImg)
  raspberry=createSprite(200,200,20,02)
  raspberry.addImage(raspberryImg)
  pears.createSprite(200,200,20,20)
  pears
}
//function page1(){
 //var title = createElement('h2');
 //title.html("Evolution of technalogy")
 //var input =createInput("")
 //input.position(200,200)
 //var button = createButton("Start")
 //button. position(300,200)

 //button.mousePresseed (()=>{ 
 //input.hide()
 //button.hide()
 //var name=input.value()
 //var greeting= createElement("h3")
 //greeting.html("Hello "+name)
// greeting.position(200,300)
 //})
//}
