//Create variables here
var Dog,happyDog,database,foods,foodstock;
var dogIMG1, dogIMG2;
function preload()
{
  //load images here
  dogIMG1=loadImage("../images/dogImg.png");
  dogIMG2=loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(250,250,50,50);
  Dog.addImage(dogIMG1);
  Dog.scale=0.5;
  database = firebase.database();
  var FoodLocation = database.ref('Food');
  FoodLocation.on("value",readData);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    foods = foods-1;
    writeStock(foods);
    Dog.addImage(dogIMG2);
  }
}

function readData(data){
  foods = data.val()
}
function writeStock(x){
  if(x<=0){
   x=0;
  }
   database.ref('/').update({
     Food:x
   })
}