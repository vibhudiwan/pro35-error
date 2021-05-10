//Create variables here


var dogHappy,dogSad,dog,database,foodObj;


function preload()
{
	//load images here
  dogSad = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {

  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

	createCanvas(1000, 400);
  //background("white");
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog = createSprite(800,200,150,150);
  dog.addImage(dogSad);
  dog.scale=0.1;

  feed = createButton("FEED THE DOG ", 700,95);
  feed.mousePressed(feedDog);

  addFood = createButton ("ADD FOOD ",800,95);
  addFood.mousePressed(addFoods);

  foodObj = new food ();
  
}


function draw() { 
  
  foodObj.display();


  drawSprites();
  //add styles here

}

function feedDog(){
  dog.addImage(dogHappy);

if(foodObj.getFoodStock()<=0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0);

}
else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1); 

}

database.ref('/').update({

Food:foodObj.getFoodStock()
})

}

function addFoods(){
foodS++;
database.ref('/').update({
  food:foodS
})
}


//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


