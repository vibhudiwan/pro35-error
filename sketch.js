var dog,sadDog,happyDog,database;
var foodS,foodStock;
var feed,addFood;
var foodObj;
var milkObj,mImage,foodn;

function preload(){
sadDog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
mImage = loadImage("images/milk.png");
}

function setup() {
  database=firebase.database();
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
  createCanvas(500,500);
  
  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

 
  dog=createSprite(200,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(700,95);
  addFood.mousePressed(addFoods);
}

function draw() {
  
  background(46,139,87);
  console.log(foodS);
  textSize(20);
  stroke("white");
  text("FOOD REMAINING :" + foodS ,250,250);
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    
  })
}

//function to add food in stock
function addFoods(){
  dog.addImage(sadDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()+1);
  foodS++;
  database.ref('/').update({
    Food:foodS
      })
}


