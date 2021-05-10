var database;
var petdog,happyDog,foods,foodStock;
var petdogImg,happydogImg;

function preload()
{
	//load images here
  petdogImg = loadImage("images/Dog.png");
  happydogImg = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  petdog = createSprite(250,250,20,20);
  petdog.addImage("image",petdogImg);
 petdog.scale = 0.09
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87)

 text("press up arrow to feed the dog",150,25);
 text("food remaining :",150,225);

 if(keyDown(UP_ARROW)){
   writeStock(foodS);
   petdog.addImage("image2",happydogImg)
 }

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
   database.ref('/').update({
     Food : x
   })
}

