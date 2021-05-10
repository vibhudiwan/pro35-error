class food {
     constructor(x,y,width,height){
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
         this.image = loadImage()
         this,body=Bodies.rectangle(x,y,width,height);
         this.foodStock=0;
     }

        updateFoodStock(foodStock){
            this.foodStock=foodStock;
         }

         deductFood(){
            if(foodStock>0){
                this.foodStock = this.foodStock-1;
            }
        }

        getFoodStock(){
            return this.foodStock;
        }

         

     display(){
         background(46,139,87);
         
         fill(255,255,254);
         textSize(15);
         var x= 70;
         var y = 100;

         imageMode(CENTER);
         if (this.foodStock>0){
             if(i%10==0){
                 x=70;
                 y=y+50;
             }
             image(this.image,x,y,50,50);
             x=x+30;
         }
         
         }

     }

